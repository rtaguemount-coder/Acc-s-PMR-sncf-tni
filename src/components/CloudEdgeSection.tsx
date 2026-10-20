import React from 'react';
import { Cloud, Cpu, ArrowUpDown, Server, ShieldCheck, Zap } from 'lucide-react';

export const CloudEdgeSection: React.FC = () => {
  return (
    <section id="cloud-edge" className="py-12 border-b border-[var(--border)]" aria-labelledby="h-cloud-edge">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="h-cloud-edge" className="sr-only">
          Le rôle du Cloud et de l'Edge dans la plateforme
        </h2>

        {/* --- PART 1: LE CLOUD --- */}
        <div id="cloud" className="mb-12">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
            <Cloud className="w-4 h-4" aria-hidden="true" />
            <span>Infrastructure centrale</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-4">
            Le Cloud : le socle partagé
          </h3>

          <p className="text-lg text-[var(--muted)] leading-relaxed mb-4">
            Le Cloud héberge ce qui doit être commun à toutes les gares et accessible partout.
          </p>

          <p className="text-base text-[var(--ink)] leading-relaxed mb-4">
            La SNCF y est déjà largement engagée. SNCF Connect & Tech a terminé en 2021 sa migration sur le cloud AWS, une opération bouclée en 18 mois. L'hébergement se fait sur trois zones AWS, avec une mise à l'échelle automatique grâce à Kubernetes. L'équipe a aussi défini des configurations prêtes à activer pour les pics, dont une orientée information voyageurs.
          </p>

          <p className="text-xs text-[var(--muted)] italic mb-4">
            Source : Reynald Fléchaux, Le Monde Informatique, 11/09/2024, interview d'Emmanuel Thys.
          </p>

          <p className="text-base text-[var(--ink)] leading-relaxed mb-4">
            À l'échelle du groupe, l'objectif affiché était de migrer 90 % des 1 425 applications vers le cloud, avec une stratégie multi-cloud (AWS, Microsoft Azure, IBM Cloud).
          </p>

          <p className="text-xs text-[var(--muted)] italic mb-6">
            Source : Sopra Steria, étude de cas SNCF, 05/03/2021.
          </p>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)] mb-3">
              Dans notre proposition, le Cloud sert à :
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-[var(--ink)] list-none pl-0">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                <span><strong>Stocker</strong> les plans, les accès et les profils de besoins de toutes les gares ;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                <span><strong>Croiser</strong> le billet avec les horaires et calculer un itinéraire accessible ;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                <span><strong>Conserver</strong> l'historique et superviser plusieurs gares à la fois ;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                <span><strong>Se brancher</strong> sur Assist'enGare et sur SNCF Connect, sans les reconstruire.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- PART 2: L'EDGE --- */}
        <div id="edge" className="pt-8 border-t border-[var(--border)]">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--edge-ink)]">
            <Cpu className="w-4 h-4" aria-hidden="true" />
            <span>Traitement décentralisé</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-4">
            L'Edge : réagir sur place
          </h3>

          <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
            L'Edge désigne le traitement fait au plus près du terrain : dans la gare, sur les balises, sur le téléphone.
          </p>

          <h4 className="text-lg font-bold text-[var(--ink)] mb-3">
            Pourquoi il est indispensable ici
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[var(--edge-ink)]">
                <Server className="w-4 h-4" aria-hidden="true" />
                <span>Localisation</span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed m-0">
                Le GPS est limité dans les gares souterraines : la SNCF a développé un système de positionnement visuel pour y répondre. Les balises Bluetooth, elles, fonctionnent sans GPS ni connexion Internet.
              </p>
            </div>

            <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[var(--edge-ink)]">
                <Zap className="w-4 h-4" aria-hidden="true" />
                <span>Réaction immédiate</span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed m-0">
                Prévenir un agent ou signaler un ascenseur en panne doit marcher même si le réseau faiblit ou en cas de saturation passagère (notre analyse).
              </p>
            </div>

            <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[var(--edge-ink)]">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Confidentialité</span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed m-0">
                Traiter la position au plus près du voyageur évite de l'envoyer en continu vers le Cloud, préservant ainsi sa vie privée (notre proposition).
              </p>
            </div>
          </div>

          <h4 className="text-lg font-bold text-[var(--ink)] mb-3">
            Des exemples réels
          </h4>

          <ul className="space-y-3 text-sm sm:text-base text-[var(--ink)] mb-8 pl-0 list-none">
            <li className="p-3.5 bg-[var(--surface)] border border-[var(--border)] rounded-xl flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--edge-ink)] mt-2 shrink-0" />
              <div>
                <strong>SNCF, Smart Station</strong> : capteurs et transmetteurs radio dans 300 gares en 2022 (SNCF Gares & Connexions, 14/09/2022).
              </div>
            </li>
            <li className="p-3.5 bg-[var(--surface)] border border-[var(--border)] rounded-xl flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--edge-ink)] mt-2 shrink-0" />
              <div>
                <strong>SNCF, balises Bluetooth</strong> : guidage en gare via Ma Gare SNCF (SNCF Gares & Connexions, 02/10/2019).
              </div>
            </li>
            <li className="p-3.5 bg-[var(--surface)] border border-[var(--border)] rounded-xl flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--edge-ink)] mt-2 shrink-0" />
              <div>
                <strong>SNCF, jumeaux numériques des gares</strong> : traitement local sur site avec des cartes Nvidia RTX, et traitement dans le cloud sur des GPU Microsoft Azure. C'est exactement l'articulation Edge + Cloud (Le Monde Informatique, date non indiquée).
              </div>
            </li>
            <li className="p-3.5 bg-[var(--surface)] border border-[var(--border)] rounded-xl flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--edge-ink)] mt-2 shrink-0" />
              <div>
                <strong>Deutsche Bahn</strong> : plus de 1 300 capteurs sur 650 aiguillages envoient leurs données en 5G vers un nœud Edge. C'est de l'infrastructure de voie, pas de la gare (preprint arXiv 2604.19377).
              </div>
            </li>
          </ul>

          {/* Articulation Edge / Cloud box */}
          <div className="bg-[var(--accent-soft)] border border-[var(--border)] rounded-[var(--radius)] p-6">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              <ArrowUpDown className="w-4 h-4" aria-hidden="true" />
              <span>Comment Edge et Cloud s'articulent</span>
            </div>
            <p className="text-base text-[var(--ink)] leading-relaxed m-0">
              Le capteur ou la balise envoie sa mesure à l'Edge de la gare, qui réagit tout de suite. Seules les données minimales remontent ensuite au Cloud, qui agrège, calcule et conserve. Le Cloud renvoie enfin l'itinéraire et les alertes à l'application du voyageur et à celle de l'agent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
