import { Play, ArrowLeft, Globe } from 'lucide-react';
import { MoonIcon } from './MoonIcon';
import { useGameStore } from '../hooks/useGameStore';
import { t } from '../i18n/translations';

const PLAYER_DOT_COLORS = ['bg-teal-400', 'bg-blue-400', 'bg-orange-400', 'bg-purple-400'];

interface SetupScreenProps {
  onBack: () => void;
}

export function SetupScreen({ onBack }: SetupScreenProps) {
  const { lang, toggleLang, players, handlePlayerCountChange, updatePlayerName, startGame } = useGameStore();
  const isRTL = lang === 'ar';

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl w-full max-w-md mx-auto text-center">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium transition-colors"
        >
          <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          {t('back', lang)}
        </button>
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 px-3 py-1.5 bg-white/50 hover:bg-white/80 rounded-full shadow-sm backdrop-blur-sm transition-all font-medium text-sm"
          aria-label={t('switchLangLabel', lang)}
        >
          <Globe className="w-4 h-4" aria-hidden="true" />
          {t('switchLangText', lang)}
        </button>
      </div>
      <p
        className="text-teal-700/60 font-medium mb-6 mt-2 tracking-widest text-lg"
        style={{ fontFamily: '"Traditional Arabic", "Amiri", "Scheherazade New", serif' }}
      >
        {t('basmala', lang)}
      </p>
      <MoonIcon className="w-20 h-20 text-teal-500 mx-auto mb-4" />
      <h2 className="text-4xl font-extrabold text-teal-800 mb-2">{t('title', lang)}</h2>
      <p className="text-teal-600 mb-8">{t('subtitle', lang)}</p>

      <div className="mb-6" dir={isRTL ? 'rtl' : 'ltr'}>
        <label className={`block text-teal-800 font-semibold mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('setupPlayers', lang)}
        </label>
        <div className="flex gap-2 mb-6 justify-center" style={{ direction: 'ltr' }}>
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => handlePlayerCountChange(num)}
              className={`w-14 h-14 rounded-full font-bold text-xl flex items-center justify-center transition-all ${
                players.length === num
                  ? 'bg-teal-500 text-white shadow-lg scale-110'
                  : 'bg-teal-100 text-teal-600 hover:bg-teal-200'
              }`}
              aria-label={
                lang === 'ar'
                  ? `${t('selectPlayerLabel', lang)} ${num} ${t('players', lang)}`
                  : `Select ${num} player${num > 1 ? 's' : ''}`
              }
              aria-pressed={players.length === num}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {players.map((p, i) => (
            <div key={i} className="relative">
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${PLAYER_DOT_COLORS[i]} ${isRTL ? 'right-4' : 'left-4'}`}
              />
              <input
                type="text"
                placeholder={`${t('namePlaceholder', lang)} ${i + 1}`}
                value={p.name}
                onChange={(e) => updatePlayerName(i, e.target.value)}
                className={`w-full py-4 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'} rounded-xl bg-white border-2 border-teal-100 focus:border-teal-400 focus:ring-0 outline-none transition-all font-medium`}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={startGame}
        className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
      >
        {isRTL ? (
          <>
            <span>{t('startBtn', lang)}</span>
            <Play className="w-5 h-5 fill-current rotate-180" />
          </>
        ) : (
          <>
            <Play className="w-5 h-5 fill-current" />
            <span>{t('startBtn', lang)}</span>
          </>
        )}
      </button>
    </div>
  );
}
