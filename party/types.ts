// Shared types between PartyKit server and client

export type RoomPhase = 'lobby' | 'playing' | 'finished';

export interface OnlinePlayer {
  id: string;
  name: string;
  score: number;
  connected: boolean;
}

export interface RoomStateSnapshot {
  roomCode: string;
  hostId: string;
  phase: RoomPhase;
  players: OnlinePlayer[];
  maxPlayers: number;
  // Playing state
  questionIds: number[];
  currentQuestionIndex: number;
  currentTurnPlayerId: string | null;
  questionsPerRound: number;
  selectedAnswer: string | null;
  showExplanation: boolean;
  turnDeadline: number | null;
  turnTimeoutSeconds: number;
}

// Client → Server
export type ClientMessage =
  | { type: 'join'; name: string }
  | { type: 'update-name'; name: string }
  | { type: 'start-game' }
  | { type: 'answer'; letter: string; lang: 'ar' | 'en' }
  | { type: 'next-question' }
  | { type: 'set-question-count'; count: number }
  | { type: 'restart-game' };

// Server → Client
export type ServerMessage =
  | { type: 'room-state'; state: RoomStateSnapshot }
  | { type: 'player-joined'; player: OnlinePlayer }
  | { type: 'player-left'; playerId: string }
  | { type: 'game-started'; state: RoomStateSnapshot }
  | { type: 'answer-revealed'; letter: string; correct: boolean; playerId: string; scores: Record<string, number> }
  | { type: 'next-question'; questionIndex: number; turnPlayerId: string; deadline: number }
  | { type: 'game-over'; rankings: { id: string; name: string; score: number }[] }
  | { type: 'turn-timeout'; playerId: string }
  | { type: 'host-changed'; newHostId: string }
  | { type: 'player-disconnected'; playerId: string }
  | { type: 'player-reconnected'; playerId: string }
  | { type: 'error'; message: string };
