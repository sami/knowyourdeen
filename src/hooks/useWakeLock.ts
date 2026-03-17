import { useEffect, useRef } from 'react';

export function useWakeLock(active: boolean) {
  const wakeLock = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    if (!active) return;

    const request = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLock.current = await navigator.wakeLock.request('screen');
        }
      } catch (err) {
        console.warn('Wake Lock error:', err);
      }
    };

    request();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') request();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wakeLock.current) wakeLock.current.release();
    };
  }, [active]);
}
