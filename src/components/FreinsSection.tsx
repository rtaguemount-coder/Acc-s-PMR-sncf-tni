import React from 'react';
import { ShieldCheck, Scale, Globe2, AlertTriangle } from 'lucide-react';

export const FreinsSection: React.FC = () => {
  return (
    <section id="freins" className="py-12 border-b border-[var(--border)]" aria-labelledby="h-freins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="h-freins" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-6">
          Les freins documentés
        </h2>

        <div className="space-y-8">
          {/* Frein 1: Consentement */}
          <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>Frein juridique & éthique</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
              1. Le consentement pour la géolocalisation
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink)] leading-relaxed mb-3">
              Selon la CNIL, les données de géolocalisation sont sensibles au regard de la vie privée, car elles sont souvent continues et précises. Un consentement libre, spécifique, éclairé et univoque est nécessaire quand elles ne sont pas strictement nécessaires au service. Il ne l'est pas quand elles le sont. Dans tous les cas, la minimisation des données et la durée de conservation restent à respecter.
            </p>
            <p className="text-xs text-[var(--muted)] italic mb-4">
              Source : CNIL, « Géolocalisation et applications mobiles », 07/07/2026.
            </p>
            <div className="p-4 bg-[var(--accent-soft)] rounded-lg text-sm text-[var(--ink)]">
              <strong>Application à notre cas :</strong> Pour l'assistance PMR, la nécessité de la position est à argumenter. Le plus sûr est un accord simple, explicite et strictement limité à la durée de la prise en charge en gare.
            </div>
          </div>

          {/* Frein 2: Hébergement */}
          <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--warn-ink)]">
              <Scale className="w-4 h-4" aria-hidden="true" />
              <span>Souveraineté & RGPD</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
              2. L'hébergement des données sensibles
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink)] leading-relaxed mb-3">
              En 2024, la CNIL a autorisé Microsoft à héberger pendant trois ans les données du Système national des données de santé. Elle refusait jusque-là l'hébergement de données de santé chez des fournisseurs de cloud non européens, et a réaffirmé sa préférence pour des acteurs européens. Le profil d'un voyageur PMR est une donnée sensible, et SNCF Connect & Tech tourne sur AWS, un fournisseur américain.
            </p>
            <p className="text-xs text-[var(--muted)] italic mb-4">
              Source : Siècle Digital, 07/02/2024 (auteur non indiqué).
            </p>
            <div className="bg-[var(--warn-soft)] border border-[var(--warn)] rounded-lg p-4 text-sm text-[var(--ink)] flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-[var(--warn-ink)] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="text-[var(--warn-ink)] block font-semibold mb-1">
                  Nuance d'analyse
                </strong>
                Les règles sur l'hébergement de données de santé (certification HDS, SecNumCloud) visent spécifiquement les données de santé au sens strict. Leur application exacte à un simple profil PMR reste à confirmer, mais le RGPD protège de toute façon les données sensibles relatives au handicap (article 9).
              </div>
            </div>
          </div>

          {/* Frein 3: Échelle */}
          <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              <Globe2 className="w-4 h-4" aria-hidden="true" />
              <span>Industriel & Déploiement</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
              3. L'échelle du déploiement
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink)] leading-relaxed mb-3">
              SNCF Gares & Connexions exploite 3 030 gares, de tailles et d'équipements très différents. Équiper et maintenir des balises et des serveurs locaux partout est un chantier long et coûteux. Nous n'avons trouvé aucun chiffre public sur le coût de l'Edge à la SNCF, et nous préférons ne pas en inventer.
            </p>
            <p className="text-xs text-[var(--muted)] italic m-0">
              Source : OpenStreetMap Wiki, « France/Gares SNCF ».
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
