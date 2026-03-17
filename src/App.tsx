import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useGameStore } from './hooks/useGameStore';
import { useOnlineStore } from './hooks/useOnlineStore';
import { useWakeLock } from './hooks/useWakeLock';
import { TopBar } from './components/TopBar';
import { SetupScreen } from './components/SetupScreen';
import { PlayingScreen } from './components/PlayingScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { ResetModal } from './components/ResetModal';
import { Footer } from './components/Footer';
import { ModeSelectScreen } from './components/ModeSelectScreen';
import { OnlineSetupScreen } from './components/online/OnlineSetupScreen';
import { LobbyScreen } from './components/online/LobbyScreen';
import { OnlinePlayingScreen } from './components/online/OnlinePlayingScreen';
import { OnlineGameOverScreen } from './components/online/OnlineGameOverScreen';
import Library from './Library';

const PLAYER_THEMES = ['bg-teal-50', 'bg-blue-50', 'bg-orange-50', 'bg-purple-50'];

type AppMode = 'menu' | 'local' | 'online';

function OnlineGame({ onBack }: { onBack: () => void }) {
  const { screen, disconnect } = useOnlineStore();

  const handleBack = () => {
    disconnect();
    onBack();
  };

  switch (screen) {
    case 'lobby':
      return <LobbyScreen onBack={handleBack} />;
    case 'playing':
      return <OnlinePlayingScreen />;
    case 'finished':
      return <OnlineGameOverScreen onBack={onBack} />;
    case 'setup':
    default:
      return <OnlineSetupScreen onBack={handleBack} />;
  }
}

export default function App() {
  const [appMode, setAppMode] = useState<AppMode>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('room') ? 'online' : 'menu';
  });
  const { lang, gameScreen, currentTurn, setGameScreen } = useGameStore();
  useWakeLock(appMode === 'local' && gameScreen === 'playing');

  const isRTL = lang === 'ar';
  const currentTheme = appMode === 'local' && gameScreen === 'playing'
    ? PLAYER_THEMES[currentTurn]
    : PLAYER_THEMES[0];

  return (
    <main dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen transition-colors duration-500 font-sans flex flex-col items-center ${currentTheme}`}>
      {appMode === 'local' && <TopBar />}

      <div className="flex-1 w-full max-w-4xl p-4 flex flex-col justify-center pb-12">
        {appMode === 'menu' && (
          <ModeSelectScreen
            onLocal={() => setAppMode('local')}
            onOnline={() => setAppMode('online')}
          />
        )}

        {appMode === 'local' && (
          <>
            {gameScreen === 'library' && <Library lang={lang} onBack={() => setGameScreen('setup')} />}
            {gameScreen === 'setup' && <SetupScreen />}
            {gameScreen === 'playing' && <PlayingScreen />}
            {gameScreen === 'finished' && <GameOverScreen />}
          </>
        )}

        {appMode === 'online' && (
          <OnlineGame onBack={() => setAppMode('menu')} />
        )}
      </div>

      <Footer />
      {appMode === 'local' && <ResetModal />}
      <Analytics />
    </main>
  );
}
