import React from 'react';
import { KEY_FACTS } from '../data/articleData.ts';

export const ConstatSection: React.FC = () => {
  return (
    <section id="constat" className="py-12 border-b border-[var(--border)]" aria-labelledby="h-constat">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="h-constat" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-4">
          Un réseau immense, une accessibilité progressive
        </h2>

        <p className="text-lg text-[var(--muted)] leading-relaxed mb-4">
          La loi handicap de 2005 prévoyait que les lieux et les transports publics soient accessibles avant le 1er janvier 2015. Pour les gares, le chemin est plus long que prévu.
        </p>

        <p className="text-base text-[var(--ink)] leading-relaxed mb-6">
          En 2016, la SNCF et l'État ont signé le schéma directeur national d'accessibilité : 160 gares nationales à rendre accessibles d'ici 2024, auxquelles s'ajoutent des schémas régionaux pour 370 gares desservies par TER et 209 en Île-de-France. Au total, près de 740 gares à aménager, pour un investissement estimé à environ 3 milliards d'euros. Sur 3 000 gares, un peu moins d'une sur deux devait donc être accessible en 2024.
        </p>

        {/* Facts numbers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8" aria-label="Chiffres cités lors de l'annonce de 2016">
          {KEY_FACTS.map((fact, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-5 transition-shadow hover:shadow-xs"
            >
              <span className="block text-3xl font-bold text-[var(--accent)] tabular-nums mb-1">
                {fact.value}
              </span>
              <strong className="block text-sm font-semibold text-[var(--ink)] mb-1">
                {fact.label}
              </strong>
              <span className="block text-xs text-[var(--muted)] leading-normal">
                {fact.detail}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs text-[var(--muted)] italic mb-6">
          Source : annonce du 30/11/2016, reprise de l'AFP par Tendance Ouest. Chiffres de 2016, à actualiser avant toute utilisation officielle.
        </p>

        <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
          <p className="text-base font-medium text-[var(--ink)] leading-relaxed">
            Tant que toutes les gares ne seront pas accessibles, l'assistance humaine reste centrale. La vraie question devient alors : <span className="text-[var(--accent)] font-semibold">comment l'agent sait-il qui arrive, quand, et où le retrouver ?</span>
          </p>
        </div>
      </div>
    </section>
  );
};
