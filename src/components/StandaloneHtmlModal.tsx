import React, { useState } from 'react';
import { RAW_STANDALONE_HTML } from '../data/articleData.ts';
import { X, Copy, Check, Download, FileCode, ExternalLink } from 'lucide-react';

interface StandaloneHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneHtmlModal: React.FC<StandaloneHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_STANDALONE_HTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([RAW_STANDALONE_HTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'article-pmr-sncf-accessibilite.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const lineCount = RAW_STANDALONE_HTML.split('\n').length;
  const byteSize = new Blob([RAW_STANDALONE_HTML]).size;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-[var(--border)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--ink)]">
                Fichier HTML autonome (Single File)
              </h3>
              <p className="text-xs text-[var(--muted)]">
                100% autonome : HTML sémantique, CSS inline, JavaScript natif, sans framework ni dépendances (conforme à la consigne d'export).
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors cursor-pointer"
            aria-label="Fermer la vue du code HTML"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* File Stats Strip */}
        <div className="px-6 py-2.5 bg-[var(--phone)]/50 border-b border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--muted)]">
          <div className="flex items-center gap-4">
            <span>Nom : <strong className="text-[var(--ink)] font-mono">article-pmr-sncf.html</strong></span>
            <span>Lignes : <strong className="text-[var(--ink)]">{lineCount}</strong></span>
            <span>Taille : <strong className="text-[var(--ink)]">{(byteSize / 1024).toFixed(1)} Ko</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[var(--edge-ink)]" />
                  <span className="text-[var(--edge-ink)]">Copié dans le presse-papier !</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copier le code</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger (.html)</span>
            </button>
          </div>
        </div>

        {/* Code Content Preview */}
        <div className="flex-1 overflow-auto p-4 bg-[#0F1720] text-[#E8EEF4] font-mono text-xs leading-relaxed selection:bg-[var(--accent)]">
          <pre className="m-0 whitespace-pre">
            <code>{RAW_STANDALONE_HTML}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--surface)] flex items-center justify-between text-xs text-[var(--muted)]">
          <span>Prêt à être intégré ou envoyé directement par email.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-xs rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
