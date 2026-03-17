import { RefreshCw } from 'lucide-react';
import { useGameStore } from '../hooks/useGameStore';
import { t } from '../i18n/translations';

export function GameOverScreen() {
  const { lang, players, playerScores, confirmReset } = useGameStore();

  const ranked = players
    .map((p, i) => ({ ...p, score: playerScores[i] }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-lg mx-auto text-center animate-fade-in">
      <h2 className="text-5xl font-extrabold text-teal-800 mb-8">{t('gameOver', lang)}</h2>
      <div className="space-y-4 mb-10">
        {ranked.map((p, index) => (
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
              <span className="text-xl font-bold text-gray-800">{p.name}</span>
            </div>
            <span className={`text-2xl font-black ${index === 0 ? 'text-yellow-700' : 'text-gray-600'}`}>
              {p.score} <span className="text-sm font-normal opacity-70">{t('score', lang)}</span>
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={confirmReset}
        className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-xl shadow-lg transition-all flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-6 h-6" />
        {t('playAgain', lang)}
      </button>
    </div>
  );
}
