import { create } from 'zustand';
import PartySocket from 'partysocket';
import type { ServerMessage, RoomStateSnapshot, OnlinePlayer, RoomPhase } from '../../party/types';

const PARTYKIT_HOST = import.meta.env.VITE_PARTYKIT_HOST || 'localhost:1999';

function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

const PLAYER_ID_PREFIX = 'kyd_pid_';

function getOrCreatePlayerId(roomCode: string): string {
  const key = PLAYER_ID_PREFIX + roomCode;
  const stored = localStorage.getItem(key);
  if (stored) {
    try {
      const { id, ts } = JSON.parse(stored);
      if (Date.now() - ts < 60 * 60 * 1000) return id;
    } catch { /* ignore corrupt entries */ }
  }
  const id = crypto.randomUUID().replace(/-/g, '').slice(0, 16);
  localStorage.setItem(key, JSON.stringify({ id, ts: Date.now() }));
  return id;
}

function clearPlayerId(roomCode: string) {
  localStorage.removeItem(PLAYER_ID_PREFIX + roomCode);
}

const LAST_ROOM_KEY = 'kyd_last_room';

function saveLastRoom(roomCode: string) {
  localStorage.setItem(LAST_ROOM_KEY, JSON.stringify({ roomCode, ts: Date.now() }));
}

function clearLastRoom() {
  localStorage.removeItem(LAST_ROOM_KEY);
}

export function getLastRoom(): string | null {
  try {
    const data = JSON.parse(localStorage.getItem(LAST_ROOM_KEY) || '');
    if (Date.now() - data.ts < 60 * 60 * 1000) return data.roomCode;
  } catch { /* ignore */ }
  return null;
}

// Remove stale entries older than 1 hour
function cleanupStalePlayerIds() {
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (!key?.startsWith(PLAYER_ID_PREFIX)) continue;
    try {
      const { ts } = JSON.parse(localStorage.getItem(key)!);
      if (Date.now() - ts > 60 * 60 * 1000) localStorage.removeItem(key);
    } catch { localStorage.removeItem(key!); }
  }
}
cleanupStalePlayerIds();

export type OnlineScreen = 'setup' | 'lobby' | 'playing' | 'finished';

interface OnlineState {
  socket: PartySocket | null;
  connected: boolean;
  connecting: boolean;
  myPlayerId: string | null;

  roomCode: string | null;
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

  screen: OnlineScreen;
  error: string | null;
  scores: Record<string, number>;
  lastAnswerCorrect: boolean | null;
  lastAnswerPlayerId: string | null;
  rankings: { id: string; name: string; score: number }[] | null;
  timeoutPlayerId: string | null;
}

interface OnlineActions {
  createRoom: (playerName: string) => void;
  joinRoom: (roomCode: string, playerName: string) => void;
  startGame: () => void;
  submitAnswer: (letter: string, lang: 'ar' | 'en') => void;
  nextQuestion: () => void;
  setQuestionCount: (count: number) => void;
  restartGame: () => void;
  disconnect: () => void;
  setScreen: (screen: OnlineScreen) => void;
  clearError: () => void;
}

const initialState: OnlineState = {
  socket: null,
  connected: false,
  connecting: false,
  myPlayerId: null,
  roomCode: null,
  hostId: '',
  phase: 'lobby',
  players: [],
  maxPlayers: 4,
  questionIds: [],
  currentQuestionIndex: 0,
  currentTurnPlayerId: null,
  questionsPerRound: 10,
  selectedAnswer: null,
  showExplanation: false,
  turnDeadline: null,
  turnTimeoutSeconds: 30,
  screen: 'setup',
  error: null,
  scores: {},
  lastAnswerCorrect: null,
  lastAnswerPlayerId: null,
  rankings: null,
  timeoutPlayerId: null,
};

export const useOnlineStore = create<OnlineState & OnlineActions>()((set, get) => {
  function applySnapshot(state: RoomStateSnapshot) {
    const myId = get().myPlayerId;
    const isJoined = state.players.some(p => p.id === myId);

    // If we were in a game screen but got removed from the room
    if (!isJoined && get().screen !== 'setup') {
      const socket = get().socket;
      if (socket) socket.close();
      set({ ...initialState, error: 'removedFromRoom' });
      return;
    }

    const scores: Record<string, number> = {};
    for (const p of state.players) {
      scores[p.id] = p.score;
    }

    let screen: OnlineScreen = get().screen;
    if (isJoined) {
      if (state.phase === 'lobby') screen = 'lobby';
      else if (state.phase === 'playing') screen = 'playing';
      else if (state.phase === 'finished') screen = 'finished';
    }

    set({
      roomCode: state.roomCode,
      hostId: state.hostId,
      phase: state.phase,
      players: state.players,
      maxPlayers: state.maxPlayers,
      questionIds: state.questionIds,
      currentQuestionIndex: state.currentQuestionIndex,
      currentTurnPlayerId: state.currentTurnPlayerId,
      questionsPerRound: state.questionsPerRound,
      selectedAnswer: state.selectedAnswer,
      showExplanation: state.showExplanation,
      turnDeadline: state.turnDeadline,
      turnTimeoutSeconds: state.turnTimeoutSeconds,
      scores,
      screen,
      connecting: isJoined ? false : get().connecting,
    });
  }

  function handleMessage(event: MessageEvent) {
    let msg: ServerMessage;
    try {
      msg = JSON.parse(event.data);
    } catch {
      return;
    }

    switch (msg.type) {
      case 'room-state':
        applySnapshot(msg.state);
        break;

      case 'player-joined': {
        const player = msg.player;
        set(state => ({
          players: [...state.players, player],
        }));
        break;
      }

      case 'player-left': {
        const playerId = msg.playerId;
        set(state => ({
          players: state.players.filter(p => p.id !== playerId),
        }));
        break;
      }

      case 'game-started':
        applySnapshot(msg.state);
        set({
          screen: 'playing',
          lastAnswerCorrect: null,
          lastAnswerPlayerId: null,
          timeoutPlayerId: null,
          rankings: null,
        });
        break;

      case 'answer-revealed': {
        const { letter, correct, scores, playerId } = msg;
        set({
          selectedAnswer: letter,
          showExplanation: true,
          scores,
          lastAnswerCorrect: correct,
          lastAnswerPlayerId: playerId,
        });
        break;
      }

      case 'next-question': {
        const { questionIndex, turnPlayerId, deadline } = msg;
        set({
          currentQuestionIndex: questionIndex,
          currentTurnPlayerId: turnPlayerId,
          turnDeadline: deadline,
          selectedAnswer: null,
          showExplanation: false,
          lastAnswerCorrect: null,
          lastAnswerPlayerId: null,
          timeoutPlayerId: null,
        });
        break;
      }

      case 'game-over': {
        const rankings = msg.rankings;
        set({
          screen: 'finished',
          phase: 'finished',
          rankings,
        });
        break;
      }

      case 'turn-timeout': {
        const playerId = msg.playerId;
        set({
          showExplanation: true,
          selectedAnswer: null,
          timeoutPlayerId: playerId,
        });
        break;
      }

      case 'host-changed': {
        const newHostId = msg.newHostId;
        set({ hostId: newHostId });
        break;
      }

      case 'player-disconnected': {
        const playerId = msg.playerId;
        set(state => ({
          players: state.players.map(p =>
            p.id === playerId ? { ...p, connected: false } : p
          ),
        }));
        break;
      }

      case 'player-reconnected': {
        const playerId = msg.playerId;
        set(state => ({
          players: state.players.map(p =>
            p.id === playerId ? { ...p, connected: true } : p
          ),
        }));
        break;
      }

      case 'error': {
        const message = msg.message;
        set({ error: message, connecting: false });
        break;
      }
    }
  }

  function connectToRoom(roomCode: string, playerName: string) {
    const existing = get().socket;
    if (existing) {
      existing.close();
    }

    const playerId = getOrCreatePlayerId(roomCode);
    const socket = new PartySocket({
      host: PARTYKIT_HOST,
      room: roomCode,
      id: playerId,
    });

    set({
      socket,
      myPlayerId: playerId,
      roomCode,
      connecting: true,
      error: null,
    });

    socket.addEventListener('open', () => {
      set({ connected: true });
      // Always send join — server handles reconnection (updates name if changed)
      socket.send(JSON.stringify({ type: 'join', name: playerName }));
    });

    socket.addEventListener('message', handleMessage);

    socket.addEventListener('close', () => {
      set({ connected: false });
    });
  }

  return {
    ...initialState,

    createRoom: (playerName: string) => {
      const roomCode = generateRoomCode();
      saveLastRoom(roomCode);
      connectToRoom(roomCode, playerName);
    },

    joinRoom: (roomCode: string, playerName: string) => {
      const code = roomCode.toUpperCase();
      saveLastRoom(code);
      connectToRoom(code, playerName);
    },

    startGame: () => {
      get().socket?.send(JSON.stringify({ type: 'start-game' }));
    },

    submitAnswer: (letter: string, lang: 'ar' | 'en') => {
      get().socket?.send(JSON.stringify({ type: 'answer', letter, lang }));
    },

    nextQuestion: () => {
      get().socket?.send(JSON.stringify({ type: 'next-question' }));
    },

    setQuestionCount: (count: number) => {
      get().socket?.send(JSON.stringify({ type: 'set-question-count', count }));
    },

    restartGame: () => {
      get().socket?.send(JSON.stringify({ type: 'restart-game' }));
    },

    disconnect: () => {
      const { socket, roomCode } = get();
      if (socket) socket.close();
      if (roomCode) clearPlayerId(roomCode);
      clearLastRoom();
      set({ ...initialState });
    },

    setScreen: (screen: OnlineScreen) => set({ screen }),
    clearError: () => set({ error: null }),
  };
});
