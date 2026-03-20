import { useMemo } from 'react';
import { CheckCircle, XCircle, Clock, Globe } from 'lucide-react';
import { useGameStore } from '../../hooks/useGameStore';
import { useOnlineStore } from '../../hooks/useOnlineStore';
import { questionsDB } from '../../data/questions';
import { t } from '../../i18n/translations';
import { TurnTimer } from './TurnTimer';
import { ConnectionStatus } from './ConnectionStatus';

const CARD_THEMES = [
  'bg-teal-100 text-teal-900 border-teal-200',
  'bg-blue-100 text-blue-900 border-blue-200',
  'bg-orange-100 text-orange-900 border-orange-200',
  'bg-purple-100 text-purple-900 border-purple-200',
];

export function OnlinePlayingScreen() {
  const { lang, toggleLang } = useGameStore();
  const {
    players, scores, currentQuestionIndex, questionIds,
    currentTurnPlayerId, myPlayerId, hostId,
    selectedAnswer, showExplanation, turnDeadline, turnTimeoutSeconds,
    lastAnswerCorrect, timeoutPlayerId,
    submitAnswer, nextQuestion,
  } = useOnlineStore();

  const isRTL = lang === 'ar';
  const isMyTurn = myPlayerId === currentTurnPlayerId;
  const isHost = myPlayerId === hostId;

  const questionId = questionIds[currentQuestionIndex];
  const question = questionsDB.find(q => q.id === questionId);
  if (!question) return null;

  const qData = question[lang];

  const shuffledOptions = useMemo(() => {
    const entries = Object.entries(qData.options) as [string, string][];
    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    return entries;
  }, [questionId]);

  const currentPlayer = players.find(p => p.id === currentTurnPlayerId);
  const currentPlayerIndex = players.findIndex(p => p.id === currentTurnPlayerId);
  const cardTheme = CARD_THEMES[currentPlayerIndex % CARD_THEMES.length];

  const answeredCorrectly = lastAnswerCorrect === true;
  const wasTimeout = timeoutPlayerId !== null;
  const totalQuestions = questionIds.length;
  const questionNum = currentQuestionIndex + 1;

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col h-full animate-fade-in">
      {/* Language toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 px-3 py-1.5 bg-white/50 hover:bg-white/80 rounded-full shadow-sm backdrop-blur-sm transition-all font-medium text-sm"
          aria-label={t('switchLangLabel', lang)}
        >
          <Globe className="w-4 h-4" aria-hidden="true" />
          {t('switchLangText', lang)}
        </button>
      </div>

      <ConnectionStatus />

      {/* Turn info + question counter */}
      <div className="flex justify-between items-end mb-4">
        <div className={`px-6 py-3 rounded-2xl shadow-sm border-2 ${cardTheme} flex items-center gap-3 backdrop-blur-md`}>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-xl shadow-sm">
            {currentPlayerIndex + 1}
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider opacity-80 font-bold">
              {isMyTurn ? t('yourTurn', lang) : t('turnOf', lang)}
            </p>
            <p className="font-extrabold text-xl">
              {isMyTurn
                ? (players.find(p => p.id === myPlayerId)?.name || '')
                : (currentPlayer?.name || '')}
            </p>
          </div>
        </div>
        <div className="text-center px-4">
          <p className="text-sm opacity-60 font-bold uppercase">{t('qNum', lang)}</p>
          <p className="font-bold text-2xl opacity-80">
            {questionNum} <span className="opacity-50 text-sm">/ {totalQuestions}</span>
          </p>
        </div>
      </div>

      {/* Timer */}
      {!showExplanation && turnDeadline && (
        <div className="mb-4">
          <TurnTimer deadline={turnDeadline} totalSeconds={turnTimeoutSeconds} />
        </div>
      )}

      {/* Scores */}
      {players.length > 1 && (
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {players.map((p) => (
            <div
              key={p.id}
              className={`flex-1 min-w-[100px] px-3 py-2 rounded-xl text-center shadow-sm ${
                p.id === currentTurnPlayerId
                  ? 'bg-white font-bold border-2 border-black/10 scale-105 transition-transform'
                  : 'bg-white/50 opacity-70'
              } ${!p.connected ? 'opacity-40' : ''}`}
            >
              <p className="text-xs truncate">
                {p.name}
                {p.id === myPlayerId && <span className="text-teal-600 ml-1">●</span>}
              </p>
              <p className="text-lg">{scores[p.id] ?? 0}</p>
            </div>
          ))}
        </div>
      )}

      {/* Question Card */}
      <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl flex-1 flex flex-col justify-center relative">
        {/* Not your turn message */}
        {!isMyTurn && !showExplanation && (
          <div className="mb-4">
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium text-center flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              {t('waitingForTurn', lang).replace('{name}', currentPlayer?.name || '')}
            </div>
          </div>
        )}

        <h3 className={`text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          {qData.q}
        </h3>

        {/* Answer buttons */}
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
            } else if (!isMyTurn) {
              btnClass = 'border-2 border-gray-100 bg-gray-50 text-gray-500 cursor-default';
              badgeClass = 'bg-black/5 text-gray-500';
            }

            return (
              <button
                key={letter}
                role="radio"
                aria-checked={isSelected}
                disabled={showExplanation || !isMyTurn}
                onClick={() => submitAnswer(letter, lang)}
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

        {/* Explanation */}
        {showExplanation && (
          <div className="mt-auto pt-6 border-t border-gray-100 w-full animate-fade-in-up">
            <div className={`p-6 rounded-2xl mb-6 flex flex-col gap-4 ${
              wasTimeout ? 'bg-yellow-50 border border-yellow-200' :
              answeredCorrectly ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center gap-3">
                {wasTimeout ? (
                  <>
                    <Clock className="w-8 h-8 text-yellow-500" />
                    <span className="text-xl font-bold text-yellow-700">{t('timedOut', lang)}</span>
                  </>
                ) : answeredCorrectly ? (
                  <>
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <span className="text-xl font-bold text-green-700">{t('correct', lang)}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-8 h-8 text-red-500" />
                    <span className="text-xl font-bold text-red-700">{t('wrong', lang)}</span>
                  </>
                )}
              </div>

              {(!answeredCorrectly || wasTimeout) && (
                <p className={`text-gray-700 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('correctIs', lang)}{' '}
                  <span className="font-bold text-green-700">
                    {qData.ans} -{' '}
                    {lang === 'ar'
                      ? question.ar.options[question.ar.ans]
                      : question.en.options[question.en.ans]}
                  </span>
                </p>
              )}

              <div className="bg-white/60 p-4 rounded-xl text-gray-800 mt-2">
                <p className={`leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>{qData.exp}</p>
              </div>
            </div>

            {(isHost || isMyTurn) && (
              <button
                onClick={nextQuestion}
                className="w-full py-5 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-xl shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>{t('nextBtn', lang)}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
