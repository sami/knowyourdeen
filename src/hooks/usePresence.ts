import { useEffect, useState } from 'react';
import PartySocket from 'partysocket';

const PARTYKIT_HOST = import.meta.env.VITE_PARTYKIT_HOST || 'localhost:1999';

export function usePresence() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const socket = new PartySocket({
      host: PARTYKIT_HOST,
      room: '__presence__',
    });

    socket.addEventListener('message', (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === 'presence-count') {
          setCount(msg.count);
        }
      } catch { /* ignore */ }
    });

    return () => { socket.close(); };
  }, []);

  return count;
}
