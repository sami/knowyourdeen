import { useEffect } from 'react';
import { RefreshCw, LogOut, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useGameStore } from '../../hooks/useGameStore';
import { useOnlineStore } from '../../hooks/useOnlineStore';
import { t } from '../../i18n/translations';
import { ShareScoreCard } from '../ScoreCard';
import { ConnectionStatus } from './ConnectionStatus';

interface OnlineGameOverScreenProps {
  onBack: () => void;
}

export function OnlineGameOverScreen({ onBack }: OnlineGameOverScreenProps) {
  const { lang, toggleLang } = useGameStore();
  const { rankings, myPlayerId, hostId, questionsPerRound, restartGame, disconnect } = useOnlineStore();

  const isHost = myPlayerId === hostId;

  useEffect(() => {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'] });
  }, []);

  if (!rankings || rankings.length === 0) return null;

  const myRanking = rankings.find(r => r.id === myPlayerId);
  const myScore = myRanking?.score ?? 0;
  const shareMessage = t('shareScoreMsg', lang)
    .replace('{score}', String(myScore))
    .replace('{total}', String(questionsPerRound));

  const handleLeave = () => {
    disconnect();
    onBack();
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-lg mx-auto text-center animate-fade-in">
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
      <h2 className="text-5xl font-extrabold text-teal-800 mb-8">{t('gameOver', lang)}</h2>

      <div className="space-y-4 mb-10">
        {rankings.map((p, index) => (
          <div
            key={p.id}
            className={`flex justify-between items-center p-5 rounded-2xl ${
              index === 0 ? 'bg-yellow-100 border-2 border-yellow-300 scale-105 shadow-md' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className={`text-2xl font-bold ${index === 0 ? 'text-yellow-600' : 'text-gray-400'}`}>
                #{index + 1}
              </span>
              <span className="text-xl font-bold text-gray-800">
                {p.name}
                {p.id === myPlayerId && (
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full ml-2">
                    {t('you', lang)}
                  </span>
                )}
              </span>
            </div>
            <span className={`text-2xl font-black ${index === 0 ? 'text-yellow-700' : 'text-gray-600'}`}>
              {p.score} <span className="text-sm font-normal opacity-70">{t('score', lang)}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{t('share', lang)}</p>
        <ShareScoreCard rankings={rankings} totalQuestions={questionsPerRound} lang={lang} shareMessage={shareMessage} />
      </div>

      {isHost ? (
        <button
          onClick={restartGame}
          className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-xl shadow-lg transition-all flex items-center justify-center gap-2 mb-4"
        >
          <RefreshCw className="w-6 h-6" />
          {t('playAgain', lang)}
        </button>
      ) : (
        <p className="text-gray-500 font-medium mb-4">{t('waitingForHost', lang)}</p>
      )}

      <button
        onClick={handleLeave}
        className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2"
      >
        <LogOut className="w-4 h-4" />
        {t('leaveRoom', lang)}
      </button>
    </div>
  );
}
