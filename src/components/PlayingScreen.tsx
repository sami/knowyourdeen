import { useMemo } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { useGameStore } from '../hooks/useGameStore';
import { t } from '../i18n/translations';

const CARD_THEMES = [
  'bg-teal-100 text-teal-900 border-teal-200',
  'bg-blue-100 text-blue-900 border-blue-200',
  'bg-orange-100 text-orange-900 border-orange-200',
  'bg-purple-100 text-purple-900 border-purple-200',
];

export function PlayingScreen() {
  const {
    lang, currentTurn, players, playerScores,
    questionIndices, questionsPerPlayer, selectedAnswer,
    showExplanation, waitingForReady, handleAnswerSelect, nextTurn, confirmReady,
    activeQuestion: getActiveQuestion,
  } = useGameStore();

  const activeQuestion = getActiveQuestion();
  if (!activeQuestion) return null;

  const isRTL = lang === 'ar';
  const cardTheme = CARD_THEMES[currentTurn];
  const qData = activeQuestion[lang];
  const isCorrect = selectedAnswer === qData.ans;

  const shuffledOptions = useMemo(() => {
    const entries = Object.entries(qData.options) as [string, string][];
    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    return entries;
  }, [activeQuestion.id, lang]);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col h-full animate-fade-in">
      <div className="flex justify-between items-end mb-6">
        <div className={`px-6 py-3 rounded-2xl shadow-sm border-2 ${cardTheme} flex items-center gap-3 backdrop-blur-md`}>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-xl shadow-sm">
            {currentTurn + 1}
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider opacity-80 font-bold">{t('turnOf', lang)}</p>
            <p className="font-extrabold text-xl">{players[currentTurn].name}</p>
          </div>
        </div>
        <div className="text-center px-4">
          <p className="text-sm opacity-60 font-bold uppercase">{t('qNum', lang)}</p>
          <p className="font-bold text-2xl opacity-80">
            {questionIndices[currentTurn] + 1} <span className="opacity-50 text-sm">/ {questionsPerPlayer}</span>
          </p>
        </div>
      </div>

      {players.length > 1 && (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {players.map((p, i) => (
            <div
              key={i}
              className={`flex-1 min-w-[100px] px-3 py-2 rounded-xl text-center shadow-sm ${
                i === currentTurn
                  ? 'bg-white font-bold border-2 border-black/10 scale-105 transition-transform'
                  : 'bg-white/50 opacity-70'
              }`}
            >
              <p className="text-xs truncate">{p.name}</p>
              <p className="text-lg">{playerScores[i]}</p>
            </div>
          ))}
        </div>
      )}

      {waitingForReady ? (
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl flex-1 flex flex-col items-center justify-center animate-fade-in">
          <div className={`w-20 h-20 rounded-full ${cardTheme} flex items-center justify-center font-bold text-4xl shadow-md mb-6`}>
            {currentTurn + 1}
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('readyPrompt', lang).replace('{name}', players[currentTurn].name)}
          </p>
          <button
            onClick={confirmReady}
            className="w-full max-w-sm py-5 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-xl shadow-xl transition-all"
          >
            {t('readyBtn', lang)}
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl flex-1 flex flex-col justify-center relative">
          <h3 className={`text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {qData.q}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" role="radiogroup" aria-label={t('qNum', lang)}>
            {shuffledOptions.map(([letter, text]) => {
              const isSelected = selectedAnswer === letter;
              const isCorrectAnswer = letter === qData.ans;
              let btnClass = 'border-2 border-gray-100 bg-gray-50 hover:bg-gray-100 text-gray-700';
              let badgeClass = 'bg-black/5 text-gray-700';
              if (showExplanation) {
                if (isCorrectAnswer) {
                  btnClass = 'border-green-500 bg-green-100 text-green-900 font-bold scale-[1.02] shadow-md z-10';
                  badgeClass = 'bg-green-500 text-white shadow-sm';
                } else if (isSelected) {
                  btnClass = 'border-red-500 bg-red-100 text-red-900 font-bold scale-[1.02] shadow-md z-10';
                  badgeClass = 'bg-red-500 text-white shadow-sm';
                } else {
                  btnClass = 'border-gray-100 bg-gray-50 opacity-40 grayscale';
                  badgeClass = 'bg-black/5 text-gray-400';
                }
              } else if (isSelected) {
                btnClass = 'border-teal-500 bg-teal-50 text-teal-900';
                badgeClass = 'bg-teal-500 text-white';
              }
              return (
                <button
                  key={letter}
                  role="radio"
                  aria-checked={isSelected}
                  disabled={showExplanation}
                  onClick={() => handleAnswerSelect(letter)}
                  className={`relative p-5 rounded-2xl text-lg font-medium transition-all duration-300 ${btnClass} flex items-center justify-between`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl shrink-0 transition-colors ${badgeClass}`}>
                    {letter}
                  </span>
                  <span className={`flex-1 ${isRTL ? 'mr-4 text-right' : 'ml-4 text-left'} block`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {text}
                  </span>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="mt-auto pt-6 border-t border-gray-100 w-full animate-fade-in-up">
              <div className={`p-6 rounded-2xl mb-6 flex flex-col gap-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center gap-3">
                  {isCorrect ? <CheckCircle className="w-8 h-8 text-green-500" /> : <XCircle className="w-8 h-8 text-red-500" />}
                  <span className={`text-xl font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? t('correct', lang) : t('wrong', lang)}
                  </span>
                </div>
                {!isCorrect && (
                  <p className={`text-lg md:text-xl text-gray-700 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('correctIs', lang)}{' '}
                    <span className="font-bold text-green-700">
                      {qData.ans} -{' '}
                      {lang === 'ar'
                        ? activeQuestion.ar.options[activeQuestion.ar.ans]
                        : activeQuestion.en.options[activeQuestion.en.ans]}
                    </span>
                  </p>
                )}
                <div className="bg-white/60 p-4 rounded-xl text-gray-800 mt-2">
                  <p className={`text-lg md:text-xl leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>{qData.exp}</p>
                </div>
              </div>
              <button
                onClick={nextTurn}
                className="w-full py-5 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-xl shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>{t('nextBtn', lang)}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
