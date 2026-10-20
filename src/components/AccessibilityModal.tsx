import React from 'react';
import { X, Check, Eye, Type, Contrast, Sparkles } from 'lucide-react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  fontScale: number;
  setFontScale: (scale: number) => void;
  isDyslexic: boolean;
  setIsDyslexic: (val: boolean) => void;
  isHighContrast: boolean;
  setIsHighContrast: (val: boolean) => void;
  onResetPreferences: () => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  isOpen,
  onClose,
  fontScale,
  setFontScale,
  isDyslexic,
  setIsDyslexic,
  isHighContrast,
  setIsHighContrast,
  onResetPreferences,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl max-w-md w-full shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-5">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-lg font-bold text-[var(--ink)]">
              Confort de lecture (WCAG AA)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors cursor-pointer"
            aria-label="Fermer les paramètres d'accessibilité"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5">
          {/* Font Scale */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-2 flex items-center gap-1.5">
              <Type className="w-4 h-4" />
              <span>Taille de la police</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Normale (100%)', val: 1 },
                { label: 'Grande (115%)', val: 1.15 },
                { label: 'Très grande (130%)', val: 1.3 },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => setFontScale(opt.val)}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    fontScale === opt.val
                      ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                      : 'bg-[var(--surface)] text-[var(--ink)] border-[var(--border)] hover:bg-[var(--phone)]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dyslexia font */}
          <div className="flex items-center justify-between p-3.5 rounded-xl border border-[var(--border)] bg-[var(--phone)]/50">
            <div>
              <span className="text-sm font-bold text-[var(--ink)] block">
                Police renforcée (aide dyslexie)
              </span>
              <span className="text-xs text-[var(--muted)]">
                Espacement accru des caractères et glyphes distincts
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsDyslexic(!isDyslexic)}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                isDyslexic ? 'bg-[var(--accent)]' : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-pressed={isDyslexic}
              aria-label="Basculer la police adaptée pour dyslexie"
            >
              <span
                className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                  isDyslexic ? 'left-6.5' : 'left-0.5'
                }`}
              />
            </button>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between p-3.5 rounded-xl border border-[var(--border)] bg-[var(--phone)]/50">
            <div>
              <span className="text-sm font-bold text-[var(--ink)] block flex items-center gap-1.5">
                <Contrast className="w-4 h-4 text-[var(--accent)]" />
                <span>Mode contraste élevé</span>
              </span>
              <span className="text-xs text-[var(--muted)]">
                Bordures et contrastes conformes aux standards AAA
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsHighContrast(!isHighContrast)}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                isHighContrast ? 'bg-[var(--accent)]' : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-pressed={isHighContrast}
              aria-label="Basculer le mode contraste élevé"
            >
              <span
                className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                  isHighContrast ? 'left-6.5' : 'left-0.5'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
          <button
            type="button"
            onClick={onResetPreferences}
            className="text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
          >
            Rétablir les paramètres par défaut
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            Appliquer et fermer
          </button>
        </div>
      </div>
    </div>
  );
};
