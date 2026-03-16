import { useState, useEffect, useRef, useMemo } from 'react';
import { Globe, Play, CheckCircle, XCircle, RefreshCw, Trash2, AlertTriangle, Instagram } from 'lucide-react';
import { questionsDB } from './data/questions';

// --- SVGs ---
const MoonIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

// --- PLAYER COLOURS (Pastel) ---
const PLAYER_THEMES = [
  "bg-teal-50",
  "bg-blue-50",
  "bg-orange-50",
  "bg-slate-50"
];

const CARD_THEMES = [
  "bg-teal-100 text-teal-900 border-teal-200",
  "bg-blue-100 text-blue-900 border-blue-200",
  "bg-orange-100 text-orange-900 border-orange-200",
  "bg-slate-100 text-slate-900 border-slate-200"
];

// Static map for dynamic MoonIcon colours (ensures Tailwind detects them)
const MOON_COLORS = ['text-teal-600', 'text-blue-600', 'text-orange-600', 'text-slate-600'];
const PLAYER_DOT_COLORS = ['bg-teal-400', 'bg-blue-400', 'bg-orange-400', 'bg-slate-400'];

// Utility: Shuffle Array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// --- LOCAL STORAGE HELPERS ---
const STORAGE_KEY = 'kyd_save_v2';
const getInitialState = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

interface Player {
  id: number;
  name: string;
}

export default function App() {
  const savedState = useMemo(() => getInitialState(), []);

  const [lang, setLang] = useState<'ar' | 'en'>(savedState?.lang || 'ar');
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'finished'>(savedState?.gameState || 'setup');
  const [players, setPlayers] = useState<Player[]>(savedState?.players || [{ id: 0, name: '' }]);
  const [questionsPerPlayer, setQuestionsPerPlayer] = useState<number>(savedState?.questionsPerPlayer || 0);

  const [currentTurn, setCurrentTurn] = useState<number>(savedState?.currentTurn || 0);
  const [playerScores, setPlayerScores] = useState<number[]>(savedState?.playerScores || []);
  const [playerQuestions, setPlayerQuestions] = useState<typeof questionsDB[]>(savedState?.playerQuestions || []);
  const [questionIndices, setQuestionIndices] = useState<number[]>(savedState?.questionIndices || []);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(savedState?.selectedAnswer || null);
  const [showExplanation, setShowExplanation] = useState<boolean>(savedState?.showExplanation || false);
  const [showResetModal, setShowResetModal] = useState(false);

  const wakeLock = useRef<WakeLockSentinel | null>(null);

  // --- SAVE TO LOCAL STORAGE ---
  useEffect(() => {
    const stateToSave = {
      lang, gameState, players, questionsPerPlayer, currentTurn,
      playerScores, playerQuestions, questionIndices, selectedAnswer, showExplanation
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  }, [lang, gameState, players, questionsPerPlayer, currentTurn, playerScores, playerQuestions, questionIndices, selectedAnswer, showExplanation]);

  // --- WAKE LOCK MANAGEMENT ---
  const requestWakeLock = async () => {
    try {
      if ('wakeLock' in navigator) {
        wakeLock.current = await navigator.wakeLock.request('screen');
      }
    } catch (err) {
      console.warn('Wake Lock error:', err);
    }
  };

  useEffect(() => {
    if (gameState === 'playing') {
      requestWakeLock();
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') requestWakeLock();
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        if (wakeLock.current) wakeLock.current.release();
      };
    }
  }, [gameState]);

  // --- LANGUAGE TOGGLE ---
  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    if (selectedAnswer) {
      const arToEn: Record<string, string> = { 'أ': 'A', 'ب': 'B', 'ج': 'C', 'د': 'D' };
      const enToAr: Record<string, string> = { 'A': 'أ', 'B': 'ب', 'C': 'ج', 'D': 'د' };
      let mappedAnswer = selectedAnswer;
      if (newLang === 'en' && arToEn[selectedAnswer]) mappedAnswer = arToEn[selectedAnswer];
      if (newLang === 'ar' && enToAr[selectedAnswer]) mappedAnswer = enToAr[selectedAnswer];
      setSelectedAnswer(mappedAnswer);
    }
    setLang(newLang);
  };

  // --- SETUP GAME ---
  const handlePlayerCountChange = (count: number) => {
    const newPlayers = Array.from({ length: count }, (_, i) => ({ id: i, name: players[i]?.name || '' }));
    setPlayers(newPlayers);
  };

  const updatePlayerName = (index: number, name: string) => {
    const updated = [...players];
    updated[index].name = name;
    setPlayers(updated);
  };

  const startGame = () => {
    const validPlayers = players.map((p, i) => ({
      ...p,
      name: p.name.trim() || (lang === 'ar' ? `لاعب ${i + 1}` : `Player ${i + 1}`)
    }));
    setPlayers(validPlayers);

    const numPlayers = validPlayers.length;
    const qPerPlayer = Math.floor(questionsDB.length / numPlayers);
    setQuestionsPerPlayer(qPerPlayer);

    const shuffledDB = shuffleArray(questionsDB);
    const pQuestions = [];
    for (let i = 0; i < numPlayers; i++) {
      pQuestions.push(shuffledDB.slice(i * qPerPlayer, (i + 1) * qPerPlayer));
    }

    setPlayerQuestions(pQuestions);
    setPlayerScores(new Array(numPlayers).fill(0));
    setQuestionIndices(new Array(numPlayers).fill(0));
    setCurrentTurn(0);
    setGameState('playing');
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // --- GAME PLAY LOGIC ---
  const activeQuestion = useMemo(() => {
    if (gameState !== 'playing') return null;
    const playerQList = playerQuestions[currentTurn];
    const qIndex = questionIndices[currentTurn];
    return playerQList?.[qIndex] ?? null;
  }, [gameState, currentTurn, playerQuestions, questionIndices]);

  const handleAnswerSelect = (letter: string) => {
    if (showExplanation || !activeQuestion) return;
    setSelectedAnswer(letter);
    const isCorrect = letter === activeQuestion[lang].ans;
    if (isCorrect) {
      const newScores = [...playerScores];
      newScores[currentTurn] += 1;
      setPlayerScores(newScores);
    }
    setShowExplanation(true);
  };

  const nextTurn = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    const newIndices = [...questionIndices];
    newIndices[currentTurn] += 1;
    setQuestionIndices(newIndices);
    const nextTurnIndex = (currentTurn + 1) % players.length;
    if (newIndices[nextTurnIndex] >= questionsPerPlayer) {
      const allDone = newIndices.every(idx => idx >= questionsPerPlayer);
      if (allDone) { setGameState('finished'); return; }
    }
    setCurrentTurn(nextTurnIndex);
  };

  const confirmReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setGameState('setup');
    setPlayers([{ id: 0, name: '' }]);
    setQuestionsPerPlayer(0);
    setCurrentTurn(0);
    setPlayerScores([]);
    setPlayerQuestions([]);
    setQuestionIndices([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowResetModal(false);
  };

  // --- TEXT CONSTANTS ---
  const txt: Record<string, Record<string, string>> = {
    title: { ar: "اعرف دينك", en: "Know Your Deen" },
    subtitle: { ar: "تحدي الثقافة الإسلامية", en: "Islamic Trivia Challenge" },
    setupPlayers: { ar: "عدد اللاعبين:", en: "Number of Players:" },
    startBtn: { ar: "ابدأ اللعبة", en: "Start Game" },
    namePlaceholder: { ar: "اسم اللاعب", en: "Player Name" },
    turnOf: { ar: "دور:", en: "Turn:" },
    qNum: { ar: "سؤال", en: "Question" },
    score: { ar: "النقاط", en: "Score" },
    correct: { ar: "إجابة صحيحة! أحسنت", en: "Correct Answer! Well done" },
    wrong: { ar: "إجابة خاطئة", en: "Incorrect Answer" },
    correctIs: { ar: "الإجابة الصحيحة هي:", en: "The correct answer is:" },
    nextBtn: { ar: "التالي", en: "Next" },
    gameOver: { ar: "انتهت اللعبة!", en: "Game Over!" },
    playAgain: { ar: "العب مرة أخرى", en: "Play Again" },
  };

  const isRTL = lang === 'ar';
  const currentTheme = gameState === 'playing' ? PLAYER_THEMES[currentTurn] : PLAYER_THEMES[0];
  const cardTheme = gameState === 'playing' ? CARD_THEMES[currentTurn] : CARD_THEMES[0];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen transition-colors duration-500 font-sans flex flex-col items-center ${currentTheme}`}>

      {/* TOP BAR */}
      <div className="w-full max-w-4xl p-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <MoonIcon className={`w-8 h-8 ${gameState === 'playing' ? MOON_COLORS[currentTurn] : 'text-teal-600'}`} />
          <h1 className="text-xl font-bold opacity-80">{txt.title[lang]}</h1>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowResetModal(true)} className="p-2 bg-white/50 hover:bg-white/80 rounded-full shadow-sm backdrop-blur-sm transition-all text-red-500" title={lang === 'ar' ? 'إعادة تعيين اللعبة' : 'Reset Game'} aria-label={lang === 'ar' ? 'إعادة تعيين اللعبة' : 'Reset Game'}>
            <Trash2 className="w-5 h-5" aria-hidden="true" />
          </button>
          <button onClick={toggleLang} className="flex items-center gap-2 px-4 py-2 bg-white/50 hover:bg-white/80 rounded-full shadow-sm backdrop-blur-sm transition-all font-medium text-sm" aria-label={lang === 'ar' ? 'تبديل اللغة إلى الإنجليزية' : 'Switch Language to Arabic'}>
            <Globe className="w-4 h-4" aria-hidden="true" />
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex-1 w-full max-w-4xl p-4 flex flex-col justify-center pb-12">

        {/* === SETUP SCREEN === */}
        {gameState === 'setup' && (
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl w-full max-w-md mx-auto text-center">
            <MoonIcon className="w-20 h-20 text-teal-500 mx-auto mb-4" />
            <h2 className="text-4xl font-extrabold text-teal-800 mb-2">{txt.title[lang]}</h2>
            <p className="text-teal-600 mb-8">{txt.subtitle[lang]}</p>

            <div className="mb-6" dir={isRTL ? 'rtl' : 'ltr'}>
              <label className={`block text-teal-800 font-semibold mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                {txt.setupPlayers[lang]}
              </label>
              <div className="flex gap-2 mb-6 justify-center" style={{ direction: 'ltr' }}>
                {[1, 2, 3, 4].map(num => (
                  <button key={num} onClick={() => handlePlayerCountChange(num)}
                    className={`w-14 h-14 rounded-full font-bold text-xl flex items-center justify-center transition-all ${players.length === num ? 'bg-teal-500 text-white shadow-lg scale-110' : 'bg-teal-100 text-teal-600 hover:bg-teal-200'}`}
                    aria-label={lang === 'ar' ? `اختيار ${num} لاعب` : `Select ${num} player${num > 1 ? 's' : ''}`}
                    aria-pressed={players.length === num}>
                    {num}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {players.map((p, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${PLAYER_DOT_COLORS[i]} ${isRTL ? 'right-4' : 'left-4'}`}></div>
                    <input type="text" placeholder={`${txt.namePlaceholder[lang]} ${i + 1}`} value={p.name}
                      onChange={(e) => updatePlayerName(i, e.target.value)}
                      className={`w-full py-4 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'} rounded-xl bg-white border-2 border-teal-100 focus:border-teal-400 focus:ring-0 outline-none transition-all font-medium`} />
                  </div>
                ))}
              </div>
            </div>

            <button onClick={startGame} className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3">
              {isRTL ? (<><span>{txt.startBtn[lang]}</span><Play className="w-5 h-5 fill-current rotate-180" /></>) : (<><Play className="w-5 h-5 fill-current" /><span>{txt.startBtn[lang]}</span></>)}
            </button>
          </div>
        )}

        {/* === PLAYING SCREEN === */}
        {gameState === 'playing' && activeQuestion && (
          <div className="w-full max-w-2xl mx-auto flex flex-col h-full animate-fade-in">
            <div className="flex justify-between items-end mb-6">
              <div className={`px-6 py-3 rounded-2xl shadow-sm border-2 ${cardTheme} flex items-center gap-3 backdrop-blur-md`}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-xl shadow-sm">{currentTurn + 1}</div>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-80 font-bold">{txt.turnOf[lang]}</p>
                  <p className="font-extrabold text-xl">{players[currentTurn].name}</p>
                </div>
              </div>
              <div className="text-center px-4">
                <p className="text-sm opacity-60 font-bold uppercase">{txt.qNum[lang]}</p>
                <p className="font-bold text-2xl opacity-80">{questionIndices[currentTurn] + 1} <span className="opacity-50 text-sm">/ {questionsPerPlayer}</span></p>
              </div>
            </div>

            {players.length > 1 && (
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {players.map((p, i) => (
                  <div key={i} className={`flex-1 min-w-[100px] px-3 py-2 rounded-xl text-center shadow-sm ${i === currentTurn ? 'bg-white font-bold border-2 border-black/10 scale-105 transition-transform' : 'bg-white/50 opacity-70'}`}>
                    <p className="text-xs truncate">{p.name}</p>
                    <p className="text-lg">{playerScores[i]}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl flex-1 flex flex-col justify-center relative">
              <h3 className={`text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                {activeQuestion[lang].q}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {Object.entries(activeQuestion[lang].options).map(([letter, text]) => {
                  const isSelected = selectedAnswer === letter;
                  const isCorrectAnswer = letter === activeQuestion[lang].ans;
                  let btnClass = "border-2 border-gray-100 bg-gray-50 hover:bg-gray-100 text-gray-700";
                  let badgeClass = "bg-black/5 text-gray-700";
                  if (showExplanation) {
                    if (isCorrectAnswer) { btnClass = "border-green-500 bg-green-100 text-green-900 font-bold scale-[1.02] shadow-md z-10"; badgeClass = "bg-green-500 text-white shadow-sm"; }
                    else if (isSelected) { btnClass = "border-red-500 bg-red-100 text-red-900 font-bold scale-[1.02] shadow-md z-10"; badgeClass = "bg-red-500 text-white shadow-sm"; }
                    else { btnClass = "border-gray-100 bg-gray-50 opacity-40 grayscale"; badgeClass = "bg-black/5 text-gray-400"; }
                  } else if (isSelected) { btnClass = "border-teal-500 bg-teal-50 text-teal-900"; badgeClass = "bg-teal-500 text-white"; }
                  return (
                    <button key={letter} disabled={showExplanation} onClick={() => handleAnswerSelect(letter)}
                      className={`relative p-5 rounded-2xl text-lg font-medium transition-all duration-300 ${btnClass} flex items-center justify-between`} dir={isRTL ? 'rtl' : 'ltr'}>
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl shrink-0 transition-colors ${badgeClass}`}>{letter}</span>
                      <span className={`flex-1 ${isRTL ? 'mr-4 text-right' : 'ml-4 text-left'} block`} dir={isRTL ? 'rtl' : 'ltr'}>{text}</span>
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="mt-auto pt-6 border-t border-gray-100 w-full animate-fade-in-up">
                  <div className={`p-6 rounded-2xl mb-6 flex flex-col gap-4 ${selectedAnswer === activeQuestion[lang].ans ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="flex items-center gap-3">
                      {selectedAnswer === activeQuestion[lang].ans ? <CheckCircle className="w-8 h-8 text-green-500" /> : <XCircle className="w-8 h-8 text-red-500" />}
                      <span className={`text-xl font-bold ${selectedAnswer === activeQuestion[lang].ans ? 'text-green-700' : 'text-red-700'}`}>
                        {selectedAnswer === activeQuestion[lang].ans ? txt.correct[lang] : txt.wrong[lang]}
                      </span>
                    </div>
                    {selectedAnswer !== activeQuestion[lang].ans && (
                      <p className={`text-gray-700 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                        {txt.correctIs[lang]} <span className="font-bold text-green-700">{activeQuestion[lang].ans} - {activeQuestion[lang].options[activeQuestion[lang].ans]}</span>
                      </p>
                    )}
                    <div className="bg-white/60 p-4 rounded-xl text-gray-800 mt-2">
                      <p className={`leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>{activeQuestion[lang].exp}</p>
                    </div>
                  </div>
                  <button onClick={nextTurn} className="w-full py-5 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-xl shadow-xl transition-all flex items-center justify-center gap-2">
                    <span>{txt.nextBtn[lang]}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* === GAME OVER SCREEN === */}
        {gameState === 'finished' && (
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-lg mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-extrabold text-teal-800 mb-8">{txt.gameOver[lang]}</h2>
            <div className="space-y-4 mb-10">
              {players.map((p, i) => ({ ...p, score: playerScores[i] })).sort((a, b) => b.score - a.score).map((p, index) => (
                <div key={p.id} className={`flex justify-between items-center p-5 rounded-2xl ${index === 0 ? 'bg-yellow-100 border-2 border-yellow-300 scale-105 shadow-md' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-bold ${index === 0 ? 'text-yellow-600' : 'text-gray-400'}`}>#{index + 1}</span>
                    <span className="text-xl font-bold text-gray-800">{p.name}</span>
                  </div>
                  <span className={`text-2xl font-black ${index === 0 ? 'text-yellow-700' : 'text-gray-600'}`}>
                    {p.score} <span className="text-sm font-normal opacity-70">{txt.score[lang]}</span>
                  </span>
                </div>
              ))}
            </div>
            <button onClick={confirmReset} className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-xl shadow-lg transition-all flex items-center justify-center gap-2">
              <RefreshCw className="w-6 h-6" />
              {txt.playAgain[lang]}
            </button>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="w-full text-center pb-6 pt-4 px-4 opacity-90 flex flex-col items-center gap-2 z-10 transition-all duration-300">
        <p className={`text-sm font-semibold opacity-70 uppercase tracking-widest ${gameState === 'playing' ? 'text-gray-600' : 'text-teal-700'}`}>
          {isRTL ? 'ادعم' : 'Support'}
        </p>
        <a href="https://www.instagram.com/yaseenyouthtours/" target="_blank" rel="noopener noreferrer" 
           className="group flex flex-col items-center bg-white/60 hover:bg-white/95 backdrop-blur-sm px-8 py-3 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-black/5">
          <span className="flex items-center gap-2 font-extrabold text-gray-800 text-lg group-hover:text-teal-700 transition-colors">
            <Instagram className="w-5 h-5 text-pink-600 drop-shadow-sm" />
            Yaseen Youth
          </span>
          <span className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-wider group-hover:text-gray-700 transition-colors">
            Inspiring the Muslim Youths
          </span>
        </a>
      </div>

      {/* RESET MODAL */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-fade-in-up text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{lang === 'ar' ? 'إعادة تعيين اللعبة؟' : 'Reset Game?'}</h3>
            <p className="text-gray-600 mb-6">{lang === 'ar' ? 'سيتم مسح جميع النقاط والتقدم. هل أنت متأكد؟' : 'All scores and progress will be lost. Are you sure?'}</p>
            <div className="flex gap-3">
              <button onClick={() => setShowResetModal(false)} className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-bold transition-all">{lang === 'ar' ? 'إلغاء' : 'Cancel'}</button>
              <button onClick={confirmReset} className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold shadow-lg transition-all">{lang === 'ar' ? 'نعم، امسح' : 'Yes, Reset'}</button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.4s ease-out forwards; }
      `}} />
    </div>
  );
}
