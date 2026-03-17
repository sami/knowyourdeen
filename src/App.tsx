import { Analytics } from '@vercel/analytics/react';
import { useGameStore } from './hooks/useGameStore';
import { useWakeLock } from './hooks/useWakeLock';
import { TopBar } from './components/TopBar';
import { SetupScreen } from './components/SetupScreen';
import { PlayingScreen } from './components/PlayingScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { ResetModal } from './components/ResetModal';
import { Footer } from './components/Footer';
import Library from './Library';

const PLAYER_THEMES = ['bg-teal-50', 'bg-blue-50', 'bg-orange-50', 'bg-purple-50'];

export default function App() {
  const { lang, gameScreen, currentTurn, setGameScreen } = useGameStore();
  useWakeLock(gameScreen === 'playing');

  const isRTL = lang === 'ar';
  const currentTheme = gameScreen === 'playing' ? PLAYER_THEMES[currentTurn] : PLAYER_THEMES[0];

  return (
    <main dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen transition-colors duration-500 font-sans flex flex-col items-center ${currentTheme}`}>
      <TopBar />

      <div className="flex-1 w-full max-w-4xl p-4 flex flex-col justify-center pb-12">
        {gameScreen === 'library' && <Library lang={lang} onBack={() => setGameScreen('setup')} />}
        {gameScreen === 'setup' && <SetupScreen />}
        {gameScreen === 'playing' && <PlayingScreen />}
        {gameScreen === 'finished' && <GameOverScreen />}
      </div>

      <Footer />
      <ResetModal />
      <Analytics />
    </main>
  );
}
