import { describe, it, expect, beforeEach } from 'vitest';
import { useGameStore } from '../hooks/useGameStore';

beforeEach(() => {
  useGameStore.getState().confirmReset();
});

describe('Game store', () => {
  it('initialises with default state', () => {
    const state = useGameStore.getState();
    expect(state.lang).toBe('en');
    expect(state.gameScreen).toBe('setup');
    expect(state.players).toHaveLength(1);
  });

  it('toggles language', () => {
    useGameStore.getState().toggleLang();
    expect(useGameStore.getState().lang).toBe('ar');
    useGameStore.getState().toggleLang();
    expect(useGameStore.getState().lang).toBe('en');
  });

  it('maps selected answer when toggling language', () => {
    const store = useGameStore.getState();
    store.handlePlayerCountChange(1);
    store.startGame();

    // Simulate selecting an answer
    useGameStore.setState({ selectedAnswer: 'A' });
    useGameStore.getState().toggleLang();
    expect(useGameStore.getState().selectedAnswer).toBe('أ');

    useGameStore.getState().toggleLang();
    expect(useGameStore.getState().selectedAnswer).toBe('A');
  });

  it('handles player count changes', () => {
    useGameStore.getState().handlePlayerCountChange(3);
    expect(useGameStore.getState().players).toHaveLength(3);
  });

  it('updates player names', () => {
    useGameStore.getState().handlePlayerCountChange(2);
    useGameStore.getState().updatePlayerName(0, 'Ahmad');
    useGameStore.getState().updatePlayerName(1, 'Fatima');
    const players = useGameStore.getState().players;
    expect(players[0].name).toBe('Ahmad');
    expect(players[1].name).toBe('Fatima');
  });

  it('starts game correctly', () => {
    useGameStore.getState().handlePlayerCountChange(2);
    useGameStore.getState().startGame();
    const state = useGameStore.getState();
    expect(state.gameScreen).toBe('playing');
    expect(state.playerScores).toEqual([0, 0]);
    expect(state.playerQuestionIds).toHaveLength(2);
    expect(state.questionIndices).toEqual([0, 0]);
    expect(state.questionsPerPlayer).toBeGreaterThan(0);
    expect(state.questionsPerPlayer).toBeLessThanOrEqual(25);
  });

  it('assigns default player names when empty', () => {
    useGameStore.getState().handlePlayerCountChange(2);
    useGameStore.getState().startGame();
    const players = useGameStore.getState().players;
    expect(players[0].name).toBe('Player 1');
    expect(players[1].name).toBe('Player 2');
  });

  it('returns active question during play', () => {
    useGameStore.getState().startGame();
    const q = useGameStore.getState().activeQuestion();
    expect(q).not.toBeNull();
    expect(q!.id).toBeGreaterThan(0);
  });

  it('scores correct answer', () => {
    useGameStore.getState().startGame();
    const q = useGameStore.getState().activeQuestion()!;
    const correctLetter = q.en.ans;
    useGameStore.getState().handleAnswerSelect(correctLetter);
    expect(useGameStore.getState().playerScores[0]).toBe(1);
    expect(useGameStore.getState().showExplanation).toBe(true);
  });

  it('does not score incorrect answer', () => {
    useGameStore.getState().startGame();
    const q = useGameStore.getState().activeQuestion()!;
    const wrongLetter = Object.keys(q.en.options).find((k) => k !== q.en.ans)!;
    useGameStore.getState().handleAnswerSelect(wrongLetter);
    expect(useGameStore.getState().playerScores[0]).toBe(0);
  });

  it('skips finished players when advancing turn', () => {
    // Setup 2-player game
    useGameStore.getState().handlePlayerCountChange(2);
    useGameStore.getState().startGame();

    const qpp = useGameStore.getState().questionsPerPlayer;

    // Simulate player 0 finishing all questions except last, and player 1 at 0
    // Set indices so player 0 is on their last question
    useGameStore.setState({
      questionIndices: [qpp - 1, 0],
      currentTurn: 0,
    });

    // Player 0 answers and advances — nextTurn increments their index to qpp (done)
    useGameStore.setState({ showExplanation: true, selectedAnswer: 'A' });
    useGameStore.getState().nextTurn();

    // Should advance to player 1, not stay on done player 0
    expect(useGameStore.getState().currentTurn).toBe(1);

    // Now simulate player 1 answering, player 0 is done
    useGameStore.setState({ showExplanation: true, selectedAnswer: 'A' });
    useGameStore.getState().nextTurn();

    // Should skip player 0 (done) and go back to player 1
    expect(useGameStore.getState().currentTurn).toBe(1);
  });

  it('ends game when all players finish', () => {
    useGameStore.getState().handlePlayerCountChange(2);
    useGameStore.getState().startGame();
    const qpp = useGameStore.getState().questionsPerPlayer;

    // Set both players to their last question
    useGameStore.setState({
      questionIndices: [qpp - 1, qpp],
      currentTurn: 0,
    });

    useGameStore.setState({ showExplanation: true, selectedAnswer: 'A' });
    useGameStore.getState().nextTurn();

    expect(useGameStore.getState().gameScreen).toBe('finished');
  });

  it('resets game completely', () => {
    useGameStore.getState().startGame();
    useGameStore.getState().confirmReset();
    const state = useGameStore.getState();
    expect(state.gameScreen).toBe('setup');
    expect(state.playerScores).toEqual([]);
    expect(state.playerQuestionIds).toEqual([]);
  });
});
