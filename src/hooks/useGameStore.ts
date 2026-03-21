import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { questionsDB, arToEnKey, enToArKey } from '../data/questions';
import type { Lang } from '../i18n/translations';
import type { QuestionData, ArOptionKey, EnOptionKey } from '../data/questions';

export interface Player {
  id: number;
  name: string;
}

type GameScreen = 'setup' | 'playing' | 'finished';

interface GameState {
  lang: Lang;
  gameScreen: GameScreen;
  players: Player[];
  questionsPerPlayer: number;
  currentTurn: number;
  playerScores: number[];
  playerQuestionIds: number[][];
  questionIndices: number[];
  selectedAnswer: string | null;
  showExplanation: boolean;
  showResetModal: boolean;
  waitingForReady: boolean;
}

interface GameActions {
  setLang: (lang: Lang) => void;
  setGameScreen: (screen: GameScreen) => void;
  setShowResetModal: (show: boolean) => void;
  toggleLang: () => void;
  setQuestionsPerPlayer: (count: number) => void;
  handlePlayerCountChange: (count: number) => void;
  updatePlayerName: (index: number, name: string) => void;
  startGame: () => void;
  handleAnswerSelect: (letter: string) => void;
  nextTurn: () => void;
  confirmReady: () => void;
  confirmReset: () => void;
  activeQuestion: () => QuestionData | null;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const useGameStore = create<GameState & GameActions>()(
  persist(
    (set, get) => ({
      lang: 'en',
      gameScreen: 'setup',
      players: [{ id: 0, name: '' }],
      questionsPerPlayer: 10,
      currentTurn: 0,
      playerScores: [],
      playerQuestionIds: [],
      questionIndices: [],
      selectedAnswer: null,
      showExplanation: false,
      showResetModal: false,
      waitingForReady: false,

      setLang: (lang) => set({ lang }),
      setGameScreen: (screen) => set({ gameScreen: screen }),
      setShowResetModal: (show) => set({ showResetModal: show }),

      toggleLang: () => {
        const { lang, selectedAnswer } = get();
        const newLang = lang === 'ar' ? 'en' : 'ar';
        let mappedAnswer = selectedAnswer;
        if (selectedAnswer) {
          if (newLang === 'en' && selectedAnswer in arToEnKey) {
            mappedAnswer = arToEnKey[selectedAnswer as ArOptionKey];
          }
          if (newLang === 'ar' && selectedAnswer in enToArKey) {
            mappedAnswer = enToArKey[selectedAnswer as EnOptionKey];
          }
        }
        set({ lang: newLang, selectedAnswer: mappedAnswer });
      },

      setQuestionsPerPlayer: (count) => {
        set({ questionsPerPlayer: Math.max(5, Math.min(25, count)) });
      },

      handlePlayerCountChange: (count) => {
        const { players } = get();
        const newPlayers = Array.from({ length: count }, (_, i) => ({
          id: i,
          name: players[i]?.name || '',
        }));
        set({ players: newPlayers });
      },

      updatePlayerName: (index, name) => {
        const players = [...get().players];
        players[index] = { ...players[index], name };
        set({ players });
      },

      startGame: () => {
        const { players, lang, questionsPerPlayer } = get();
        const validPlayers = players.map((p, i) => ({
          ...p,
          name: p.name.trim() || (lang === 'ar' ? `لاعب ${i + 1}` : `Player ${i + 1}`),
        }));

        const numPlayers = validPlayers.length;
        const maxPerPlayer = Math.floor(questionsDB.length / numPlayers);
        const qPerPlayer = Math.min(questionsPerPlayer, maxPerPlayer);

        const shuffledIds = shuffleArray(questionsDB.map((q) => q.id));
        const playerQuestionIds: number[][] = [];
        for (let i = 0; i < numPlayers; i++) {
          playerQuestionIds.push(shuffledIds.slice(i * qPerPlayer, (i + 1) * qPerPlayer));
        }

        set({
          players: validPlayers,
          questionsPerPlayer: qPerPlayer,
          playerQuestionIds,
          playerScores: new Array(numPlayers).fill(0),
          questionIndices: new Array(numPlayers).fill(0),
          currentTurn: 0,
          gameScreen: 'playing',
          selectedAnswer: null,
          showExplanation: false,
          waitingForReady: numPlayers > 1,
        });
      },

      activeQuestion: () => {
        const { gameScreen, currentTurn, playerQuestionIds, questionIndices } = get();
        if (gameScreen !== 'playing') return null;
        const ids = playerQuestionIds[currentTurn];
        const qIndex = questionIndices[currentTurn];
        if (!ids || qIndex >= ids.length) return null;
        const questionId = ids[qIndex];
        return questionsDB.find((q) => q.id === questionId) ?? null;
      },

      handleAnswerSelect: (letter) => {
        const { showExplanation, lang, currentTurn, playerScores } = get();
        const question = get().activeQuestion();
        if (showExplanation || !question) return;

        const isCorrect = letter === question[lang].ans;
        const newScores = [...playerScores];
        if (isCorrect) {
          newScores[currentTurn] += 1;
        }
        set({
          selectedAnswer: letter,
          showExplanation: true,
          playerScores: newScores,
        });
      },

      nextTurn: () => {
        const { currentTurn, questionIndices, questionsPerPlayer, players } = get();
        const newIndices = [...questionIndices];
        newIndices[currentTurn] += 1;

        // Check if all players are done
        const allDone = newIndices.every((idx) => idx >= questionsPerPlayer);
        if (allDone) {
          set({ questionIndices: newIndices, gameScreen: 'finished', selectedAnswer: null, showExplanation: false });
          return;
        }

        // Find next player who still has questions (skip finished players)
        let next = (currentTurn + 1) % players.length;
        while (newIndices[next] >= questionsPerPlayer) {
          next = (next + 1) % players.length;
        }

        set({
          questionIndices: newIndices,
          currentTurn: next,
          selectedAnswer: null,
          showExplanation: false,
          waitingForReady: players.length > 1,
        });
      },

      confirmReady: () => set({ waitingForReady: false }),

      confirmReset: () => {
        set({
          gameScreen: 'setup',
          players: [{ id: 0, name: '' }],
          questionsPerPlayer: 10,
          currentTurn: 0,
          playerScores: [],
          playerQuestionIds: [],
          questionIndices: [],
          selectedAnswer: null,
          showExplanation: false,
          showResetModal: false,
          waitingForReady: false,
        });
      },
    }),
    {
      name: 'kyd_save_v4',
      partialize: (state) => ({
        lang: state.lang,
        gameScreen: state.gameScreen,
        players: state.players,
        questionsPerPlayer: state.questionsPerPlayer,
        currentTurn: state.currentTurn,
        playerScores: state.playerScores,
        playerQuestionIds: state.playerQuestionIds,
        questionIndices: state.questionIndices,
        selectedAnswer: state.selectedAnswer,
        showExplanation: state.showExplanation,
        waitingForReady: state.waitingForReady,
      }),
    }
  )
);
