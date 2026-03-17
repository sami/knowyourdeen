import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

interface ScoreCardRanking {
  name: string;
  score: number;
}

interface ShareScoreCardProps {
  rankings: ScoreCardRanking[];
  totalQuestions: number;
  lang: Lang;
}

const MEDAL_COLORS = [
  { bg: 'rgba(255,255,255,0.95)', border: '2px solid #facc15', numColor: '#ca8a04', nameColor: '#1f2937', scoreColor: '#ca8a04' },
  { bg: 'rgba(255,255,255,0.25)', border: 'none', numColor: 'rgba(255,255,255,0.8)', nameColor: 'white', scoreColor: 'white' },
  { bg: 'rgba(255,255,255,0.15)', border: 'none', numColor: 'rgba(255,255,255,0.6)', nameColor: 'rgba(255,255,255,0.9)', scoreColor: 'rgba(255,255,255,0.9)' },
];

function ScoreCardContent({ rankings, totalQuestions, lang }: ShareScoreCardProps) {
  const isRTL = lang === 'ar';

  return (
    <div
      style={{
        width: 400,
        padding: 32,
        background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
        borderRadius: 24,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="white" style={{ margin: '0 auto 8px', display: 'block' }}>
          <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 800, margin: 0 }}>
          {t('title', lang)}
        </h2>
      </div>

      {/* Rankings */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        {rankings.map((p, i) => {
          const style = MEDAL_COLORS[Math.min(i, MEDAL_COLORS.length - 1)];
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: 12,
                background: style.bg,
                border: style.border,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: style.numColor, minWidth: 28 }}>
                  #{i + 1}
                </span>
                <span style={{ fontSize: 16, fontWeight: 700, color: style.nameColor }}>
                  {p.name}
                </span>
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: style.scoreColor }}>
                {p.score}/{totalQuestions}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 600, margin: 0 }}>
        knowyourdeen.co.uk
      </p>
    </div>
  );
}

export function ShareScoreCard({ rankings, totalQuestions, lang }: ShareScoreCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);

  const handleShare = async () => {
    if (!cardRef.current || sharing) return;
    setSharing(true);
    try {
      const dataUrl = await toPng(cardRef.current, { quality: 0.95, pixelRatio: 2 });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'knowyourdeen-score.png', { type: 'image/png' });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file] });
      } else {
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'knowyourdeen-score.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } catch {
      // User cancelled share or error occurred
    }
    setSharing(false);
  };

  return (
    <>
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div ref={cardRef}>
          <ScoreCardContent rankings={rankings} totalQuestions={totalQuestions} lang={lang} />
        </div>
      </div>
      <button
        onClick={handleShare}
        disabled={sharing}
        className="w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white rounded-xl font-bold text-base shadow transition-all flex items-center justify-center gap-2"
      >
        {sharing ? (
          <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        )}
        {t('shareScoreCard', lang)}
      </button>
    </>
  );
}
