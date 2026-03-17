import { Instagram } from 'lucide-react';
import { useGameStore } from '../hooks/useGameStore';
import { t } from '../i18n/translations';

export function Footer() {
  const { lang, gameScreen } = useGameStore();

  return (
    <div className="w-full text-center pb-6 pt-4 px-4 opacity-90 flex flex-col items-center gap-2 z-10 transition-all duration-300">
      <p className={`text-sm font-semibold uppercase tracking-widest ${gameScreen === 'playing' ? 'text-gray-700' : 'text-teal-800'}`}>
        {t('support', lang)}
      </p>
      <a
        href="https://www.instagram.com/yaseenyouthtours/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center bg-white/60 hover:bg-white/95 backdrop-blur-sm px-8 py-3 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-black/5"
      >
        <span className="flex items-center gap-2 font-extrabold text-gray-800 text-lg group-hover:text-teal-700 transition-colors">
          <Instagram className="w-5 h-5 text-pink-600 drop-shadow-sm" />
          Yaseen Youth
        </span>
        <span className="text-xs font-bold text-gray-600 mt-1 uppercase tracking-wider group-hover:text-gray-800 transition-colors">
          Inspiring the Muslim Youths
        </span>
      </a>
    </div>
  );
}
