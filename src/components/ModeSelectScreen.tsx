import { Play, Wifi, Globe } from 'lucide-react';
import { MoonIcon } from './MoonIcon';
import { useGameStore } from '../hooks/useGameStore';
import { t } from '../i18n/translations';

interface ModeSelectScreenProps {
  onLocal: () => void;
  onOnline: () => void;
}

export function ModeSelectScreen({ onLocal, onOnline }: ModeSelectScreenProps) {
  const { lang, toggleLang } = useGameStore();
  const isRTL = lang === 'ar';

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl w-full max-w-md mx-auto text-center relative">
      <button
        onClick={toggleLang}
        className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/50 hover:bg-white/80 rounded-full shadow-sm backdrop-blur-sm transition-all font-medium text-sm"
        aria-label={t('switchLangLabel', lang)}
      >
        <Globe className="w-4 h-4" aria-hidden="true" />
        {t('switchLangText', lang)}
      </button>

      <p
        className="text-teal-700/60 font-medium mb-6 mt-2 tracking-widest text-lg"
        style={{ fontFamily: '"Traditional Arabic", "Amiri", "Scheherazade New", serif' }}
      >
        {t('basmala', lang)}
      </p>
      <MoonIcon className="w-20 h-20 text-teal-500 mx-auto mb-4" />
      <h2 className="text-4xl font-extrabold text-teal-800 mb-2">{t('title', lang)}</h2>
      <p className="text-teal-600 mb-8">{t('subtitle', lang)}</p>

      <div className="space-y-4">
        <button
          onClick={onLocal}
          className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
        >
          {isRTL ? (
            <>
              <span>{t('playLocally', lang)}</span>
              <Play className="w-5 h-5 fill-current rotate-180" />
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" />
              <span>{t('playLocally', lang)}</span>
            </>
          )}
        </button>

        <button
          onClick={onOnline}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
        >
          {isRTL ? (
            <>
              <span>{t('playOnline', lang)}</span>
              <Wifi className="w-5 h-5" />
            </>
          ) : (
            <>
              <Wifi className="w-5 h-5" />
              <span>{t('playOnline', lang)}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
