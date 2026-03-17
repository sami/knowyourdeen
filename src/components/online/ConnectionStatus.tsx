import { useOnlineStore } from '../../hooks/useOnlineStore';
import { useGameStore } from '../../hooks/useGameStore';
import { t } from '../../i18n/translations';

export function ConnectionStatus() {
  const { connected, screen } = useOnlineStore();
  const { lang } = useGameStore();

  // Only show when disconnected during an active session
  if (connected || screen === 'setup') return null;

  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm font-medium mb-4 animate-pulse">
      <div className="w-2 h-2 rounded-full bg-yellow-500" />
      {t('reconnecting', lang)}
    </div>
  );
}
