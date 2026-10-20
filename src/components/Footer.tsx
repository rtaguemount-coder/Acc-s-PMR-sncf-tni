import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-12 text-sm text-[var(--muted)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div>
            <div className="font-bold text-base text-[var(--ink)] mb-1">
              Plateforme d'accessibilité PMR en gare
            </div>
            <p className="text-xs text-[var(--muted)] m-0">
              Synergie Cloud & Edge appliquée aux parcours ferroviaires prioritaires.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border)] text-xs font-semibold text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors cursor-pointer"
            aria-label="Remonter en haut de la page"
          >
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Haut de page</span>
          </button>
        </div>

        <div className="space-y-2 text-xs text-[var(--muted)] border-t border-[var(--border)] pt-6">
          <p className="m-0">
            Article de proposition rédigé par <strong>Rayan Taguemount</strong> (Euridis) dans le cadre d'un cas d'étude SNCF sur l'accessibilité des personnes à mobilité réduite (PMR). Le schéma architectural et l'exemple (Lyon Part-Dieu → Paris Gare de Lyon, Quai B, voiture 12, 14h32) sont illustratifs et ne décrivent pas un système déjà en production.
          </p>
          <p className="m-0">
            Certaines sources n'indiquent pas de date de parution : elle est expressément signalée comme telle. Les statistiques du schéma directeur de 2016 sont mentionnées à titre historique et doivent être actualisées avant tout usage officiel.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span>Conçu avec rigueur et accessibilité universelle</span>
          </div>
          <div>
            <span>Conforme WCAG 2.1 AA · Octobre 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
