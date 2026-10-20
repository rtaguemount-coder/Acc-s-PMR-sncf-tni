import React from 'react';
import { DATA_CATEGORIES } from '../data/articleData.ts';

export const DonneesSection: React.FC = () => {
  return (
    <section id="donnees" className="py-12 border-b border-[var(--border)]" aria-labelledby="h-donnees">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="h-donnees" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-3">
          Les données à traiter
        </h2>

        <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-6">
          Toutes les données n'ont ni la même sensibilité, ni les mêmes exigences de latence, ni le même emplacement dans l'architecture.
        </p>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto border border-[var(--border)] rounded-[var(--radius)] bg-[var(--surface)] shadow-xs" role="region" aria-label="Tableau de répartition des données à traiter" tabIndex={0}>
          <table className="w-full min-w-[620px] text-left border-collapse text-sm">
            <caption className="sr-only">
              Répartition des données entre le Cloud et l'Edge, et leur utilité pour l'accessibilité PMR
            </caption>
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--phone)]/50">
                <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[var(--muted)] w-2/5">
                  Donnée
                </th>
                <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[var(--muted)] w-1/4">
                  Où (Emplacement)
                </th>
                <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[var(--muted)] w-1/3">
                  À quoi elle sert
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {DATA_CATEGORIES.map((row, idx) => (
                <tr key={idx} className="hover:bg-[var(--phone)]/30 transition-colors">
                  <th scope="row" className="p-4 font-semibold text-[var(--ink)] align-top">
                    {row.name}
                    {row.isSensitive && (
                      <span className="block text-xs font-normal text-[var(--warn-ink)] mt-1">
                        Donnée de santé / vulnérabilité
                      </span>
                    )}
                  </th>
                  <td className="p-4 align-top">
                    <div className="flex flex-wrap gap-1.5">
                      {row.location.map((loc, lIdx) => {
                        let badgeClass = "bg-[var(--cloud)] text-[var(--accent)]";
                        if (loc === 'Edge') badgeClass = "bg-[var(--edge)] text-[var(--edge-ink)]";
                        if (loc === 'Cloud sécurisé') badgeClass = "bg-[var(--warn-soft)] text-[var(--warn-ink)] border border-[var(--warn)]";
                        return (
                          <span
                            key={lIdx}
                            className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeClass}`}
                          >
                            {loc}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                  <td className="p-4 text-[var(--muted)] align-top leading-relaxed">
                    {row.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-[var(--muted)] italic">
          Synthèse comparative : répartition du stockage et du calcul selon les contraintes de connectivité et de protection de la vie privée.
        </p>
      </div>
    </section>
  );
};
