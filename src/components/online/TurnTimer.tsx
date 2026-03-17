import { useState, useEffect } from 'react';

interface TurnTimerProps {
  deadline: number;
  totalSeconds: number;
}

export function TurnTimer({ deadline, totalSeconds }: TurnTimerProps) {
  const [remaining, setRemaining] = useState(totalSeconds);

  useEffect(() => {
    const update = () => {
      const ms = deadline - Date.now();
      setRemaining(Math.max(0, Math.ceil(ms / 1000)));
    };
    update();
    const interval = setInterval(update, 200);
    return () => clearInterval(interval);
  }, [deadline]);

  const fraction = remaining / totalSeconds;
  const isUrgent = remaining <= 5;
  const isWarning = remaining <= 15 && !isUrgent;

  const barColor = isUrgent ? 'bg-red-500' : isWarning ? 'bg-yellow-500' : 'bg-teal-500';
  const textColor = isUrgent ? 'text-red-600' : isWarning ? 'text-yellow-600' : 'text-teal-600';

  return (
    <div className="w-full">
      <div className="flex justify-end mb-1">
        <span className={`text-sm font-bold tabular-nums ${textColor} ${isUrgent ? 'animate-pulse' : ''}`}>
          {remaining}s
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-200`}
          style={{ width: `${fraction * 100}%` }}
        />
      </div>
    </div>
  );
}
