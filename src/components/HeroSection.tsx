import React from 'react';
import { ARTICLE_METADATA } from '../data/articleData.ts';
import { ArrowRight, Compass, Play } from 'lucide-react';

interface HeroSectionProps {
  onOpenSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSimulator }) => {
  return (
    <section id="top" className="pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <span className="inline-block text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--accent)] mb-4">
          {ARTICLE_METADATA.kicker}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] leading-[1.15] max-w-3xl text-balance">
          {ARTICLE_METADATA.title}
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl font-normal">
          {ARTICLE_METADATA.subtitle}
        </p>

        {/* Metadata byline without pill clutter */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[var(--muted)] border-t border-[var(--border)] pt-4">
          <span className="font-semibold text-[var(--ink)]">Cas d'étude SNCF</span>
          <span aria-hidden="true">·</span>
          <span>Octobre 2026</span>
          <span aria-hidden="true">·</span>
          <span>Auteur : <strong className="text-[var(--ink)] font-semibold">{ARTICLE_METADATA.author}</strong> ({ARTICLE_METADATA.affiliation})</span>
          <span aria-hidden="true">·</span>
          <span>Norme WCAG 2.1 AA</span>
        </div>

        {/* Problematic card */}
        <div className="mt-8 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-6 shadow-xs relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold tracking-wider uppercase text-[var(--accent)]">
            <Compass className="w-4 h-4" aria-hidden="true" />
            <span>Problématique centrale</span>
          </div>
          <p className="text-lg sm:text-xl font-semibold text-[var(--ink)] leading-snug">
            {ARTICLE_METADATA.problematic}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#schema"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[var(--accent)] rounded-lg hover:opacity-95 transition-opacity"
            >
              <span>Explorer le parcours de la donnée</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              onClick={onOpenSimulator}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[var(--ink)] bg-[var(--accent-soft)] border border-[var(--border)] rounded-lg hover:bg-[var(--surface)] transition-colors"
            >
              <Play className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>Simuler un parcours en gare</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
