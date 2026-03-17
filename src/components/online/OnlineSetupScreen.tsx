import { useState, useEffect } from 'react';
import { Plus, LogIn, ArrowLeft, Globe, Loader2 } from 'lucide-react';
import { useGameStore } from '../../hooks/useGameStore';
import { useOnlineStore } from '../../hooks/useOnlineStore';
import translations, { t } from '../../i18n/translations';
import type { TranslationKey } from '../../i18n/translations';

interface OnlineSetupScreenProps {
  onBack: () => void;
}

export function OnlineSetupScreen({ onBack }: OnlineSetupScreenProps) {
  const { lang, toggleLang } = useGameStore();
  const { createRoom, joinRoom, error, clearError, connecting } = useOnlineStore();
  const [name, setName] = useState(() => localStorage.getItem('kyd_player_name') || '');
  const [roomCode, setRoomCode] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('room')?.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4) || '';
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('room')) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);
  const isRTL = lang === 'ar';

  const handleCreate = () => {
    if (connecting) return;
    const playerName = name.trim() || (lang === 'ar' ? 'لاعب' : 'Player');
    localStorage.setItem('kyd_player_name', playerName);
    createRoom(playerName);
  };

  const handleJoin = () => {
    if (connecting || !roomCode.trim()) return;
    const playerName = name.trim() || (lang === 'ar' ? 'لاعب' : 'Player');
    localStorage.setItem('kyd_player_name', playerName);
    joinRoom(roomCode.trim(), playerName);
  };

  const errorMsg = error
    ? (error in translations ? t(error as TranslationKey, lang) : error)
    : null;

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl w-full max-w-md mx-auto text-center relative">
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

      <h2 className="text-3xl font-extrabold text-teal-800 mb-6">{t('playOnline', lang)}</h2>

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm font-medium flex items-center justify-between">
          <span>{errorMsg}</span>
          <button onClick={clearError} className="text-red-400 hover:text-red-600 font-bold text-lg leading-none">&times;</button>
        </div>
      )}

      <div className="space-y-4">
        {/* Name input */}
        <div dir={isRTL ? 'rtl' : 'ltr'}>
          <label className={`block text-teal-800 font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('yourName', lang)}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('namePlaceholder', lang)}
            className={`w-full py-4 px-4 rounded-xl bg-white border-2 border-teal-100 focus:border-teal-400 focus:ring-0 outline-none transition-all font-medium ${isRTL ? 'text-right' : 'text-left'}`}
            maxLength={20}
            disabled={connecting}
          />
        </div>

        {/* Create Room */}
        <button
          onClick={handleCreate}
          disabled={connecting}
          className="w-full py-4 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-3"
        >
          {connecting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
          {t('createRoom', lang)}
        </button>

        {/* Divider */}
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white/80 px-4 text-gray-400 font-medium">{t('or', lang)}</span>
          </div>
        </div>

        {/* Room code input */}
        <div>
          <label className={`block text-teal-800 font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {t('enterRoomCode', lang)}
          </label>
          <input
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
            placeholder="ABCD"
            className="w-full py-4 px-4 rounded-xl bg-white border-2 border-teal-100 focus:border-teal-400 focus:ring-0 outline-none transition-all font-bold text-2xl text-center tracking-[0.5em] uppercase"
            maxLength={4}
            style={{ direction: 'ltr' }}
            disabled={connecting}
          />
        </div>

        {/* Join Room */}
        <button
          onClick={handleJoin}
          disabled={connecting || roomCode.trim().length < 4}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-3"
        >
          {connecting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <LogIn className="w-5 h-5" />
          )}
          {t('joinRoom', lang)}
        </button>
      </div>
    </div>
  );
}
