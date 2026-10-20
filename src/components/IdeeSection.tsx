import React from 'react';
import { MapPin, Activity, HelpCircle, Navigation } from 'lucide-react';

export const IdeeSection: React.FC = () => {
  return (
    <section id="idee" className="py-12 border-b border-[var(--border)]" aria-labelledby="h-idee">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="h-idee" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-4">
          Notre idée : une couche qui relie l'existant
        </h2>

        <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
          Plutôt que de recréer un service de zéro, nous proposons une plateforme fédératrice qui regroupe quatre fonctions indispensables autour du voyageur à mobilité réduite :
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-[var(--ink)] mb-1.5">
              1. Plans et accès adaptés
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Les accès de la gare contextualisés au profil du voyageur (fauteuil roulant, canne blanche, malentendant, poussette ou béquilles).
            </p>
          </div>

          <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mb-3">
              <Activity className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-[var(--ink)] mb-1.5">
              2. État des équipements en temps réel
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Remontée directe depuis les capteurs Smart Station pour éviter d'orienter un voyageur vers un ascenseur ou un escalator en panne.
            </p>
          </div>

          <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mb-3">
              <HelpCircle className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-[var(--ink)] mb-1.5">
              3. Demande d'assistance connectée
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Interconnexion transparente avec Assist'enGare pour relier instantanément la réservation du billet et la prise en charge terrain.
            </p>
          </div>

          <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mb-3">
              <Navigation className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-[var(--ink)] mb-1.5">
              4. Localisation consentie
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Positionnement par balises indoor activé uniquement durant la prise en charge pour que l'agent retrouve le voyageur sans le chercher.
            </p>
          </div>
        </div>

        <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)] mb-2">
            Le postulat opérationnel
          </h4>
          <p className="text-base text-[var(--ink)] leading-relaxed m-0">
            Le point de départ est simple : <strong className="font-semibold text-[var(--accent)]">le billet acheté</strong>. Il dit quel train, quelle voiture et quel besoin. Croisé avec les horaires en temps réel et le plan de la gare d'arrivée, il indique précisément où le voyageur sera. Les balises Bluetooth en gare affinent ensuite sa position réelle.
          </p>
        </div>
      </div>
    </section>
  );
};
