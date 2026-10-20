import React from 'react';
import { Volume2, Sliders, Code2, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onOpenAccessibility: () => void;
  onOpenSimulator: () => void;
  onOpenExportModal: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onReadArticle: () => void;
  isSpeaking: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAccessibility,
  onOpenSimulator,
  onOpenExportModal,
  isDark,
  onToggleTheme,
  onReadArticle,
  isSpeaking,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[var(--surface)] border-b border-[var(--border)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#top" 
          className="text-base sm:text-lg font-bold tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0"
          aria-label="Accès PMR en gare - Retour en haut de page"
        >
          Accès PMR en gare
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[var(--muted)]" aria-label="Sommaire principal de l'article">
          <a href="#constat" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0">
            Constat
          </a>
          <a href="#existant" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0">
            Existant
          </a>
          <a href="#idee" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0">
            Notre idée
          </a>
          <a href="#schema" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0">
            Parcours donnée
          </a>
          <a href="#cloud-edge" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0">
            Cloud & Edge
          </a>
          <a href="#freins" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0">
            Freins & Sources
          </a>
        </nav>

        {/* Zone 3: Actions Group */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onReadArticle}
            className={`p-2 rounded-lg border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors flex items-center gap-1.5 text-xs font-semibold ${
              isSpeaking ? 'bg-[var(--accent-soft)] text-[var(--accent)] ring-2 ring-[var(--accent)]' : ''
            }`}
            title={isSpeaking ? "Arrêter la lecture audio" : "Écouter l'article (synthèse vocale)"}
            aria-label={isSpeaking ? "Arrêter la lecture audio" : "Écouter l'article (synthèse vocale)"}
          >
            <Volume2 className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{isSpeaking ? "Pause" : "Audio"}</span>
          </button>

          <button
            onClick={onOpenAccessibility}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors flex items-center gap-1.5 text-xs font-semibold"
            title="Options d'accessibilité (contraste, police, taille)"
            aria-label="Options d'accessibilité"
          >
            <Sliders className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Confort</span>
          </button>

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors"
            title={isDark ? "Mode clair" : "Mode sombre"}
            aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenSimulator}
            className="hidden md:inline-flex px-3.5 py-2 text-xs font-semibold text-white bg-[var(--accent)] rounded-lg hover:opacity-95 transition-all whitespace-nowrap shrink-0 shadow-sm"
          >
            Simulateur PMR
          </button>

          <button
            onClick={onOpenExportModal}
            className="px-3 py-2 text-xs font-semibold text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--border)] rounded-lg hover:bg-[var(--accent)] hover:text-white transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
            title="Exporter ou copier le fichier HTML autonome"
          >
            <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Code HTML</span>
          </button>
        </div>
      </div>
    </header>
  );
};
