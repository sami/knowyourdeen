import type * as Party from "partykit/server";
import type { ClientMessage, ServerMessage, RoomStateSnapshot, OnlinePlayer, RoomPhase } from "./types";
import { answerKeys } from "./answers";

const MAX_PLAYERS = 4;
const TURN_TIMEOUT_SECONDS = 30;
const ROOM_EXPIRY_LOBBY_MS = 15 * 60 * 1000;
const ROOM_EXPIRY_PLAYING_MS = 30 * 60 * 1000;
const ROOM_EXPIRY_FINISHED_MS = 10 * 60 * 1000;
const EXPLANATION_PAUSE_MS = 5000;
const LOBBY_DISCONNECT_GRACE_MS = 10_000;

interface RoomState {
  roomCode: string;
  hostId: string;
  phase: RoomPhase;
  players: OnlinePlayer[];
  maxPlayers: number;
  questionIds: number[];
  currentQuestionIndex: number;
  currentTurnPlayerId: string | null;
  questionsPerRound: number;
  selectedAnswer: string | null;
  showExplanation: boolean;
  turnDeadline: number | null;
  turnTimeoutSeconds: number;
  lobbyDisconnectTimes: Record<string, number>;
  alarmPurpose: 'turn-timeout' | 'auto-advance' | 'room-expiry' | 'lobby-remove' | null;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default class GameRoom implements Party.Server {
  state: RoomState;

  constructor(readonly room: Party.Room) {
    this.state = {
      roomCode: room.id,
      hostId: "",
      phase: "lobby",
      players: [],
      maxPlayers: MAX_PLAYERS,
      questionIds: [],
      currentQuestionIndex: 0,
      currentTurnPlayerId: null,
      questionsPerRound: 10,
      selectedAnswer: null,
      showExplanation: false,
      turnDeadline: null,
      turnTimeoutSeconds: TURN_TIMEOUT_SECONDS,
      lobbyDisconnectTimes: {},
      alarmPurpose: null,
    };
  }

  // --- Helpers ---

  send(connection: Party.Connection, msg: ServerMessage) {
    connection.send(JSON.stringify(msg));
  }

  broadcast(msg: ServerMessage, without?: string[]) {
    this.room.broadcast(JSON.stringify(msg), without);
  }

  getSnapshot(): RoomStateSnapshot {
    return {
      roomCode: this.state.roomCode,
      hostId: this.state.hostId,
      phase: this.state.phase,
      players: this.state.players,
      maxPlayers: this.state.maxPlayers,
      questionIds: this.state.questionIds,
      currentQuestionIndex: this.state.currentQuestionIndex,
      currentTurnPlayerId: this.state.currentTurnPlayerId,
      questionsPerRound: this.state.questionsPerRound,
      selectedAnswer: this.state.selectedAnswer,
      showExplanation: this.state.showExplanation,
      turnDeadline: this.state.turnDeadline,
      turnTimeoutSeconds: this.state.turnTimeoutSeconds,
    };
  }

  scheduleAlarm(ms: number, purpose: RoomState['alarmPurpose']) {
    this.state.alarmPurpose = purpose;
    this.room.storage.setAlarm(Date.now() + ms);
  }

  getConnectedPlayers(): OnlinePlayer[] {
    return this.state.players.filter(p => p.connected);
  }

  getNextTurnPlayerId(): string | null {
    const connected = this.getConnectedPlayers();
    if (connected.length === 0) return null;

    if (!this.state.currentTurnPlayerId) return connected[0].id;

    const currentIdx = connected.findIndex(p => p.id === this.state.currentTurnPlayerId);
    const nextIdx = (currentIdx + 1) % connected.length;
    return connected[nextIdx].id;
  }

  getCurrentQuestionId(): number | null {
    if (this.state.currentQuestionIndex >= this.state.questionIds.length) return null;
    return this.state.questionIds[this.state.currentQuestionIndex];
  }

  // --- Lifecycle ---

  onConnect(connection: Party.Connection, ctx: Party.ConnectionContext) {
    // Check if this is a reconnecting player
    const existing = this.state.players.find(p => p.id === connection.id);
    if (existing) {
      existing.connected = true;
      delete this.state.lobbyDisconnectTimes[connection.id];
      this.send(connection, { type: "room-state", state: this.getSnapshot() });
      this.broadcast({ type: "player-reconnected", playerId: connection.id }, [connection.id]);
      return;
    }

    // New connection — don't add to players yet, wait for 'join' message
    // But send current state so client knows the room phase
    this.send(connection, { type: "room-state", state: this.getSnapshot() });
  }

  onMessage(message: string | ArrayBuffer | ArrayBufferView, sender: Party.Connection) {
    if (typeof message !== "string") return;

    let msg: ClientMessage;
    try {
      msg = JSON.parse(message);
    } catch {
      return;
    }

    switch (msg.type) {
      case "join":
        this.handleJoin(sender, msg.name);
        break;
      case "start-game":
        this.handleStartGame(sender);
        break;
      case "answer":
        this.handleAnswer(sender, msg.letter, msg.lang);
        break;
      case "next-question":
        this.handleNextQuestion(sender);
        break;
      case "set-question-count":
        this.handleSetQuestionCount(sender, msg.count);
        break;
      case "restart-game":
        this.handleRestartGame(sender);
        break;
    }
  }

  onClose(connection: Party.Connection) {
    const player = this.state.players.find(p => p.id === connection.id);
    if (!player) return;

    player.connected = false;
    this.broadcast({ type: "player-disconnected", playerId: connection.id });

    // In lobby, start grace period before removing the player
    if (this.state.phase === "lobby") {
      this.state.lobbyDisconnectTimes[connection.id] = Date.now();
      if (this.state.alarmPurpose !== "lobby-remove") {
        this.scheduleAlarm(LOBBY_DISCONNECT_GRACE_MS, "lobby-remove");
      }
    }

    // If host left, promote next connected player
    if (connection.id === this.state.hostId) {
      const nextHost = this.getConnectedPlayers()[0];
      if (nextHost) {
        this.state.hostId = nextHost.id;
        this.broadcast({ type: "host-changed", newHostId: nextHost.id });
      }
    }

    // If it was their turn during playing, start timeout
    if (this.state.phase === "playing" && this.state.currentTurnPlayerId === connection.id && !this.state.showExplanation) {
      this.handleTurnTimeout();
    }

    // If no one is connected, schedule room expiry
    if (this.getConnectedPlayers().length === 0) {
      this.scheduleAlarm(60_000, "room-expiry");
    }
  }

  onAlarm() {
    switch (this.state.alarmPurpose) {
      case "turn-timeout":
        this.handleTurnTimeout();
        break;
      case "auto-advance":
        this.advanceToNextQuestion();
        break;
      case "lobby-remove":
        this.handleLobbyRemove();
        break;
      case "room-expiry":
        // Close all connections if room expired
        for (const conn of this.room.getConnections()) {
          conn.close(1000, "Room expired");
        }
        break;
    }
    this.state.alarmPurpose = null;
  }

  // --- Message Handlers ---

  handleJoin(sender: Party.Connection, name: string) {
    // Reconnection: player already in the room (stable ID matched)
    const existing = this.state.players.find(p => p.id === sender.id);
    if (existing) {
      const trimmedName = name.trim().slice(0, 20);
      if (trimmedName && trimmedName !== existing.name) {
        existing.name = trimmedName;
        this.broadcast({ type: "room-state", state: this.getSnapshot() });
      }
      return;
    }

    // New player — only allow joining in lobby phase
    if (this.state.phase !== "lobby") {
      this.send(sender, { type: "error", message: "gameInProgress" });
      return;
    }

    if (this.state.players.filter(p => p.connected).length >= this.state.maxPlayers) {
      this.send(sender, { type: "error", message: "roomFull" });
      return;
    }

    const trimmedName = name.trim().slice(0, 20) || `Player ${this.state.players.length + 1}`;
    const player: OnlinePlayer = {
      id: sender.id,
      name: trimmedName,
      score: 0,
      connected: true,
    };

    this.state.players.push(player);

    // First player becomes host
    if (this.state.players.length === 1) {
      this.state.hostId = sender.id;
    }

    // Send full state to the joiner
    this.send(sender, { type: "room-state", state: this.getSnapshot() });
    // Notify others
    this.broadcast({ type: "player-joined", player }, [sender.id]);

    // Reset room expiry alarm
    this.scheduleAlarm(ROOM_EXPIRY_LOBBY_MS, "room-expiry");
  }

  handleStartGame(sender: Party.Connection) {
    if (sender.id !== this.state.hostId) {
      this.send(sender, { type: "error", message: "notHost" });
      return;
    }
    if (this.state.phase !== "lobby") return;

    // Clean up disconnected players before starting
    this.state.players = this.state.players.filter(p => p.connected);
    this.state.lobbyDisconnectTimes = {};

    const connectedCount = this.getConnectedPlayers().length;
    if (connectedCount < 2) {
      this.send(sender, { type: "error", message: "needMorePlayers" });
      return;
    }

    // Shuffle all 100 question IDs and take questionsPerRound * number of players
    // (each question is answered by one player, round-robin)
    const allIds = answerKeys.map(q => q.id);
    const shuffled = shuffleArray(allIds);
    const totalQuestions = this.state.questionsPerRound * connectedCount;
    this.state.questionIds = shuffled.slice(0, Math.min(totalQuestions, shuffled.length));

    // Reset scores
    for (const p of this.state.players) {
      p.score = 0;
    }

    this.state.phase = "playing";
    this.state.currentQuestionIndex = 0;
    this.state.currentTurnPlayerId = this.getConnectedPlayers()[0].id;
    this.state.selectedAnswer = null;
    this.state.showExplanation = false;

    // Set turn deadline
    const deadline = Date.now() + this.state.turnTimeoutSeconds * 1000;
    this.state.turnDeadline = deadline;
    this.scheduleAlarm(this.state.turnTimeoutSeconds * 1000, "turn-timeout");

    this.broadcast({ type: "game-started", state: this.getSnapshot() });
  }

  handleAnswer(sender: Party.Connection, letter: string, lang: 'ar' | 'en') {
    if (this.state.phase !== "playing") return;
    if (sender.id !== this.state.currentTurnPlayerId) return;
    if (this.state.selectedAnswer !== null) return; // Already answered

    const questionId = this.getCurrentQuestionId();
    if (questionId === null) return;

    const answerKey = answerKeys.find(a => a.id === questionId);
    if (!answerKey) return;

    const correctAnswer = lang === 'ar' ? answerKey.arAns : answerKey.enAns;
    const isCorrect = letter === correctAnswer;

    this.state.selectedAnswer = letter;
    this.state.showExplanation = true;

    if (isCorrect) {
      const player = this.state.players.find(p => p.id === sender.id);
      if (player) player.score += 1;
    }

    // Build scores map
    const scores: Record<string, number> = {};
    for (const p of this.state.players) {
      scores[p.id] = p.score;
    }

    this.broadcast({
      type: "answer-revealed",
      letter,
      correct: isCorrect,
      playerId: sender.id,
      scores,
    });

    // Schedule auto-advance after explanation pause
    this.scheduleAlarm(EXPLANATION_PAUSE_MS, "auto-advance");
  }

  handleNextQuestion(sender: Party.Connection) {
    // Allow host or current turn player to advance
    if (sender.id !== this.state.hostId && sender.id !== this.state.currentTurnPlayerId) return;
    if (!this.state.showExplanation) return;

    this.advanceToNextQuestion();
  }

  handleSetQuestionCount(sender: Party.Connection, count: number) {
    if (sender.id !== this.state.hostId) return;
    if (this.state.phase !== "lobby") return;

    const clamped = Math.max(5, Math.min(25, count));
    this.state.questionsPerRound = clamped;

    // Broadcast updated state
    this.broadcast({ type: "room-state", state: this.getSnapshot() });
  }

  handleTurnTimeout() {
    if (this.state.phase !== "playing") return;
    if (this.state.showExplanation) return;

    const playerId = this.state.currentTurnPlayerId;
    if (!playerId) return;

    // Score 0 for timeout — mark answer as null, show explanation
    this.state.selectedAnswer = null;
    this.state.showExplanation = true;

    this.broadcast({ type: "turn-timeout", playerId });

    // Auto-advance after brief pause
    this.scheduleAlarm(3000, "auto-advance");
  }

  handleLobbyRemove() {
    if (this.state.phase !== "lobby") return;

    const now = Date.now();
    const toRemove: string[] = [];
    let nextRemovalMs = Infinity;

    for (const [playerId, disconnectTime] of Object.entries(this.state.lobbyDisconnectTimes)) {
      const elapsed = now - disconnectTime;
      if (elapsed >= LOBBY_DISCONNECT_GRACE_MS) {
        toRemove.push(playerId);
      } else {
        nextRemovalMs = Math.min(nextRemovalMs, LOBBY_DISCONNECT_GRACE_MS - elapsed);
      }
    }

    for (const playerId of toRemove) {
      this.state.players = this.state.players.filter(p => p.id !== playerId);
      delete this.state.lobbyDisconnectTimes[playerId];
      this.broadcast({ type: "player-left", playerId });
    }

    // If host was removed, promote next connected player
    if (toRemove.includes(this.state.hostId)) {
      const nextHost = this.getConnectedPlayers()[0];
      if (nextHost) {
        this.state.hostId = nextHost.id;
        this.broadcast({ type: "host-changed", newHostId: nextHost.id });
      }
    }

    // Schedule next alarm
    if (nextRemovalMs < Infinity) {
      this.scheduleAlarm(nextRemovalMs, "lobby-remove");
    } else if (this.getConnectedPlayers().length > 0) {
      this.scheduleAlarm(ROOM_EXPIRY_LOBBY_MS, "room-expiry");
    } else {
      this.scheduleAlarm(60_000, "room-expiry");
    }
  }

  handleRestartGame(sender: Party.Connection) {
    if (sender.id !== this.state.hostId) {
      this.send(sender, { type: "error", message: "notHost" });
      return;
    }
    if (this.state.phase !== "finished") return;

    this.state.phase = "lobby";
    this.state.questionIds = [];
    this.state.currentQuestionIndex = 0;
    this.state.currentTurnPlayerId = null;
    this.state.selectedAnswer = null;
    this.state.showExplanation = false;
    this.state.turnDeadline = null;
    this.state.alarmPurpose = null;

    for (const p of this.state.players) {
      p.score = 0;
    }

    // Remove disconnected players
    this.state.players = this.state.players.filter(p => p.connected);
    this.state.lobbyDisconnectTimes = {};

    this.broadcast({ type: "room-state", state: this.getSnapshot() });
    this.scheduleAlarm(ROOM_EXPIRY_LOBBY_MS, "room-expiry");
  }

  advanceToNextQuestion() {
    if (this.state.phase !== "playing") return;

    this.state.currentQuestionIndex += 1;

    // Check if game is over
    if (this.state.currentQuestionIndex >= this.state.questionIds.length) {
      this.state.phase = "finished";
      this.state.currentTurnPlayerId = null;
      this.state.turnDeadline = null;

      const rankings = [...this.state.players]
        .sort((a, b) => b.score - a.score)
        .map(p => ({ id: p.id, name: p.name, score: p.score }));

      this.broadcast({ type: "game-over", rankings });
      this.scheduleAlarm(ROOM_EXPIRY_FINISHED_MS, "room-expiry");
      return;
    }

    // Next turn
    this.state.currentTurnPlayerId = this.getNextTurnPlayerId();
    this.state.selectedAnswer = null;
    this.state.showExplanation = false;

    const deadline = Date.now() + this.state.turnTimeoutSeconds * 1000;
    this.state.turnDeadline = deadline;
    this.scheduleAlarm(this.state.turnTimeoutSeconds * 1000, "turn-timeout");

    this.broadcast({
      type: "next-question",
      questionIndex: this.state.currentQuestionIndex,
      turnPlayerId: this.state.currentTurnPlayerId!,
      deadline,
    });
  }
}

GameRoom satisfies Party.Worker;
