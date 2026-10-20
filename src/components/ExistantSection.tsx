import React from 'react';
import { EXISTING_BRICKS } from '../data/articleData.ts';
import { AlertCircle } from 'lucide-react';

export const ExistantSection: React.FC = () => {
  return (
    <section id="existant" className="py-12 border-b border-[var(--border)]" aria-labelledby="h-existant">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="h-existant" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-4">
          Ce qui existe déjà
        </h2>

        <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
          La SNCF a posé plusieurs briques techniques et organisationnelles. Notre plateforme ne part pas de zéro : elle doit s'appuyer dessus.
        </p>

        {/* Existing bricks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {EXISTING_BRICKS.map((brick, idx) => (
            <article
              key={idx}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-[var(--ink)] mb-2">
                  {brick.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                  {brick.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border)] text-xs text-[var(--accent)] font-medium">
                {brick.sourceTag}
              </div>
            </article>
          ))}
        </div>

        {/* Callout of what's missing */}
        <div className="bg-[var(--warn-soft)] border border-[var(--warn)] rounded-[var(--radius)] p-5 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[var(--warn-ink)] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-[var(--ink)]">
            <strong className="text-[var(--warn-ink)] block font-semibold mb-1">
              Ce qui manque, à notre connaissance
            </strong>
            <p className="m-0">
              Dans les sources consultées, nous n'avons pas trouvé de plan de gare personnalisé selon le type de handicap, ni de suivi de la position du voyageur par l'agent d'assistance. Cela reste à confirmer avant de l'affirmer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
