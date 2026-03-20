import { Globe, Trash2 } from 'lucide-react';
import { MoonIcon } from './MoonIcon';
import { SharePopover } from './SharePopover';
import { useGameStore } from '../hooks/useGameStore';
import { t } from '../i18n/translations';

const MOON_COLORS = ['text-teal-600', 'text-blue-600', 'text-orange-600', 'text-purple-600'];

export function TopBar() {
  const { lang, gameScreen, currentTurn, toggleLang, setShowResetModal } = useGameStore();

  return (
    <div className="w-full max-w-4xl p-4 flex justify-between items-center z-10">
      <div className="flex items-center gap-2">
        <MoonIcon className={`w-8 h-8 ${gameScreen === 'playing' ? MOON_COLORS[currentTurn] : 'text-teal-600'}`} />
        <h1 className="text-xl font-bold opacity-80">{t('title', lang)}</h1>
      </div>
      <div className="flex items-center gap-2">
        <SharePopover />
        <button
          onClick={() => setShowResetModal(true)}
          className="p-2 bg-white/50 hover:bg-white/80 rounded-full shadow-sm backdrop-blur-sm transition-all text-red-500"
          title={t('resetGameLabel', lang)}
          aria-label={t('resetGameLabel', lang)}
        >
          <Trash2 className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-2 bg-white/50 hover:bg-white/80 rounded-full shadow-sm backdrop-blur-sm transition-all font-medium text-sm"
          aria-label={t('switchLangLabel', lang)}
        >
          <Globe className="w-4 h-4" aria-hidden="true" />
          {t('switchLangText', lang)}
        </button>
      </div>
    </div>
  );
}
