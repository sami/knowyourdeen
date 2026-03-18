import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { Check, Image } from 'lucide-react';
import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface ScoreCardRanking {
  name: string;
  score: number;
}

interface ShareScoreCardProps {
  rankings: ScoreCardRanking[];
  totalQuestions: number;
  lang: Lang;
  shareMessage: string;
}

const MEDAL_COLORS = [
  { bg: 'rgba(255,255,255,0.95)', border: '2px solid #facc15', numColor: '#ca8a04', nameColor: '#1f2937', scoreColor: '#ca8a04' },
  { bg: 'rgba(255,255,255,0.25)', border: 'none', numColor: 'rgba(255,255,255,0.8)', nameColor: 'white', scoreColor: 'white' },
  { bg: 'rgba(255,255,255,0.15)', border: 'none', numColor: 'rgba(255,255,255,0.6)', nameColor: 'rgba(255,255,255,0.9)', scoreColor: 'rgba(255,255,255,0.9)' },
];

function ScoreCardContent({ rankings, totalQuestions, lang }: Omit<ShareScoreCardProps, 'shareMessage'>) {
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
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="white" style={{ margin: '0 auto 8px', display: 'block' }}>
          <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 800, margin: 0 }}>
          {t('title', lang)}
        </h2>
      </div>

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

      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 600, margin: 0 }}>
        knowyourdeen.co.uk
      </p>
    </div>
  );
}

export function ShareScoreCard({ rankings, totalQuestions, lang, shareMessage }: ShareScoreCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleCopyImage = async () => {
    if (!cardRef.current || busy) return;
    setBusy(true);
    try {
      const dataUrl = await toPng(cardRef.current, { quality: 0.95, pixelRatio: 2 });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: download if clipboard write fails
      try {
        const dataUrl = await toPng(cardRef.current, { quality: 0.95, pixelRatio: 2 });
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'knowyourdeen-score.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch { /* ignore */ }
    }
    setBusy(false);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div ref={cardRef}>
          <ScoreCardContent rankings={rankings} totalQuestions={totalQuestions} lang={lang} />
        </div>
      </div>
      <div className="flex gap-3 justify-center">
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
          aria-label={t('shareWhatsApp', lang)}
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>{t('shareWhatsApp', lang)}</span>
        </button>
        <button
          onClick={handleCopyImage}
          disabled={busy}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg ${
            copied
              ? 'bg-green-100 text-green-700 border-2 border-green-300'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-2 border-gray-200'
          }`}
          aria-label={t('shareCopyLink', lang)}
        >
          {busy ? (
            <span className="animate-spin w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full" />
          ) : copied ? (
            <Check className="w-5 h-5" />
          ) : (
            <Image className="w-5 h-5" />
          )}
          <span>{copied ? t('copied', lang) : t('copyImage', lang)}</span>
        </button>
      </div>
    </>
  );
}
