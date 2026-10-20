import React from 'react';
import { CheckCircle2, ChevronRight, UserCheck, ShieldCheck, BarChart2 } from 'lucide-react';

export const ConclusionSection: React.FC = () => {
  return (
    <section id="conclusion" className="py-12 border-b border-[var(--border)]" aria-labelledby="h-conclusion">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="h-conclusion" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-4">
          Conclusion
        </h2>

        <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] mb-8">
          <p className="text-lg text-[var(--ink)] leading-relaxed m-0 font-medium">
            La SNCF dispose déjà de la réservation d'assistance, de l'état des équipements, des plans intérieurs et d'un socle cloud solide. Ce qui reste à construire, c'est le lien : <strong className="text-[var(--accent)]">faire du billet un point de départ pour retrouver le voyageur</strong>, avec l'Edge pour la précision terrain et le Cloud pour la mémoire centrale, le tout sous le sceau strict du consentement.
          </p>
        </div>

        <h3 className="text-lg font-bold text-[var(--ink)] mb-4">
          Prochaines étapes proposées
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              </div>
              <h4 className="text-sm font-bold text-[var(--ink)] mb-2">
                1. Validation DPO
              </h4>
              <p className="text-xs text-[var(--muted)] leading-relaxed m-0">
                Faire valider le traitement des données sensibles de handicap et la géolocalisation temporaire par un délégué à la protection des données.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--border)] text-[11px] font-semibold text-[var(--accent)] flex items-center gap-1">
              <span>Conformité RGPD</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mb-3">
                <UserCheck className="w-4 h-4" aria-hidden="true" />
              </div>
              <h4 className="text-sm font-bold text-[var(--ink)] mb-2">
                2. Gare pilote
              </h4>
              <p className="text-xs text-[var(--muted)] leading-relaxed m-0">
                Tester en conditions réelles avec une gare pilote déjà pourvue de balises Bluetooth (ex. Paris Gare de Lyon ou Lyon Part-Dieu).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--border)] text-[11px] font-semibold text-[var(--accent)] flex items-center gap-1">
              <span>Test terrain</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mb-3">
                <BarChart2 className="w-4 h-4" aria-hidden="true" />
              </div>
              <h4 className="text-sm font-bold text-[var(--ink)] mb-2">
                3. Mesure du gain
              </h4>
              <p className="text-xs text-[var(--muted)] leading-relaxed m-0">
                Mesurer objectivement le gain de temps et de sérénité pour l'agent d'escale et pour le voyageur avant tout déploiement à large échelle.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--border)] text-[11px] font-semibold text-[var(--accent)] flex items-center gap-1">
              <span>Évaluation ROI</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
