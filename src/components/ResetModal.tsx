import { useEffect, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';
import { useGameStore } from '../hooks/useGameStore';
import { t } from '../i18n/translations';

export function ResetModal() {
  const { lang, showResetModal, setShowResetModal, confirmReset } = useGameStore();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!showResetModal) return;

    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus the dialog
    const timer = setTimeout(() => {
      dialogRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowResetModal(false);
        return;
      }
      // Focus trap
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [showResetModal, setShowResetModal]);

  if (!showResetModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-dialog-title"
        aria-describedby="reset-dialog-desc"
        tabIndex={-1}
        className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-fade-in-up text-center outline-none"
      >
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 id="reset-dialog-title" className="text-2xl font-bold text-gray-800 mb-2">
          {t('resetTitle', lang)}
        </h3>
        <p id="reset-dialog-desc" className="text-gray-600 mb-6">
          {t('resetMessage', lang)}
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setShowResetModal(false)}
            className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-bold transition-all"
          >
            {t('cancel', lang)}
          </button>
          <button
            onClick={confirmReset}
            className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold shadow-lg transition-all"
          >
            {t('resetConfirm', lang)}
          </button>
        </div>
      </div>
    </div>
  );
}
