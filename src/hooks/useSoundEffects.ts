const AudioCtx = typeof window !== 'undefined'
  ? (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)
  : null;

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (!AudioCtx) return null;
  if (!ctx || ctx.state === 'closed') ctx = new AudioCtx();
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function playTone(freq: number, duration: number, type: OscillatorType = 'sine', volume = 0.3) {
  const c = getCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, c.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
  osc.connect(gain);
  gain.connect(c.destination);
  osc.start();
  osc.stop(c.currentTime + duration);
}

export function playCorrect() {
  playTone(523, 0.12, 'sine', 0.25);
  setTimeout(() => playTone(659, 0.12, 'sine', 0.25), 100);
  setTimeout(() => playTone(784, 0.25, 'sine', 0.25), 200);
}

export function playWrong() {
  playTone(200, 0.15, 'square', 0.15);
  setTimeout(() => playTone(160, 0.3, 'square', 0.15), 120);
}

export function playTimeout() {
  playTone(440, 0.1, 'triangle', 0.2);
  setTimeout(() => playTone(330, 0.1, 'triangle', 0.2), 120);
  setTimeout(() => playTone(220, 0.3, 'triangle', 0.2), 240);
}
