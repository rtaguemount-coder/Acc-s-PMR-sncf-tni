import React, { useState } from 'react';
import { PIPELINE_STEPS } from '../data/articleData.ts';
import { Smartphone, Cloud, ShieldAlert, Cpu, BellRing, UserCheck, ArrowRight, Play, Info } from 'lucide-react';

export const DataFlowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlayingFlow, setIsPlayingFlow] = useState<boolean>(false);

  const handleNextStep = () => {
    setActiveStep((prev) => (prev < 7 ? prev + 1 : 1));
  };

  const handlePlayFlow = () => {
    setIsPlayingFlow(true);
    let current = 1;
    setActiveStep(1);
    const interval = setInterval(() => {
      current += 1;
      if (current > 7) {
        clearInterval(interval);
        setIsPlayingFlow(false);
      } else {
        setActiveStep(current);
      }
    }, 1400);
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Smartphone className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />;
      case 2:
        return <Cloud className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />;
      case 3:
        return <Cpu className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />;
      case 4:
        return <ShieldAlert className="w-5 h-5 text-[var(--warn-ink)]" aria-hidden="true" />;
      case 5:
        return <Cpu className="w-5 h-5 text-[var(--edge-ink)]" aria-hidden="true" />;
      case 6:
        return <BellRing className="w-5 h-5 text-[var(--edge-ink)]" aria-hidden="true" />;
      case 7:
        return <UserCheck className="w-5 h-5 text-[var(--edge-ink)]" aria-hidden="true" />;
      default:
        return <Info className="w-5 h-5" aria-hidden="true" />;
    }
  };

  const selectedStepData = PIPELINE_STEPS.find((s) => s.step === activeStep) || PIPELINE_STEPS[0];

  return (
    <section id="schema" className="py-12 border-b border-[var(--border)]" aria-labelledby="h-schema">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 id="h-schema" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-2">
              Le parcours de la donnée, étape par étape
            </h2>
            <p className="text-base text-[var(--muted)] max-w-2xl">
              Où se trouve la donnée, où elle passe, où elle va, et à quoi elle sert. Lecture séquentielle de gauche à droite et de haut en bas.
            </p>
          </div>

          {/* Interactive Walkthrough Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayFlow}
              disabled={isPlayingFlow}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-[var(--accent)] text-white hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
              title="Animer automatiquement le parcours de bout en bout"
            >
              <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
              <span>{isPlayingFlow ? 'Animation en cours...' : 'Animer le flux'}</span>
            </button>
            <button
              onClick={handleNextStep}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors cursor-pointer"
            >
              <span>Étape suivante</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* 3 Physical/Logical Lanes */}
        <div className="space-y-6">
          {/* LANE 1: Téléphone */}
          <div className="bg-[var(--phone)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 transition-all">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-4 flex items-center justify-between">
              <span>Zone 1 · Téléphone du voyageur</span>
              <span className="text-[11px] font-medium lowercase text-[var(--muted)]">Front-end passager</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Card Step 1 */}
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className={`text-left md:col-span-4 p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === 1
                    ? 'bg-[var(--surface)] border-[var(--accent)] ring-2 ring-[var(--accent)] shadow-sm'
                    : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--line)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Smartphone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[var(--accent)]">Étape 1</span>
                </div>
                <h3 className="text-sm font-bold text-[var(--ink)] mb-1">Voyageur PMR</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">
                  <strong className="text-[var(--ink)]">Donnée :</strong> Achète son billet, déclare son besoin d'assistance, accepte le partage de position.
                </p>
                <div className="text-[11px] font-semibold text-[var(--accent)]">
                  But : Lancer la demande
                </div>
              </button>

              {/* Key Idea Banner */}
              <div className="md:col-span-8 p-4 rounded-xl bg-[var(--surface)]/70 border border-[var(--border)]/70 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-1">
                  Principe clé
                </span>
                <p className="text-base font-semibold text-[var(--ink)] leading-snug mb-1">
                  Le billet acheté permet de savoir où et quand retrouver le voyageur
                </p>
                <p className="text-xs text-[var(--muted)] leading-normal m-0">
                  Exemple illustratif : arrivée à 14h32, quai B, voiture 12, besoin fauteuil roulant.
                </p>
              </div>
            </div>
          </div>

          {/* LANE 2: Cloud */}
          <div className="bg-[var(--cloud)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 transition-all">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-4 flex items-center justify-between">
              <span>Zone 2 · Dans le Cloud (AWS / Multi-cloud SNCF)</span>
              <span className="text-[11px] font-medium lowercase text-[var(--muted)]">Calcul centralisé & sécurité</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Step 2 */}
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === 2
                    ? 'bg-[var(--surface)] border-[var(--accent)] ring-2 ring-[var(--accent)] shadow-sm'
                    : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--line)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Cloud className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[var(--accent)]">Étape 2</span>
                </div>
                <h3 className="text-sm font-bold text-[var(--ink)] mb-1">Donnée client</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">
                  <strong className="text-[var(--ink)]">Donnée :</strong> Billet Lyon → Paris, voiture 12, fauteuil roulant.
                </p>
                <div className="text-[11px] font-semibold text-[var(--accent)]">
                  But : Savoir qui voyage, où et quand
                </div>
              </button>

              {/* Step 3 */}
              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === 3
                    ? 'bg-[var(--surface)] border-[var(--accent)] ring-2 ring-[var(--accent)] shadow-sm'
                    : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--line)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Cpu className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[var(--accent)]">Étape 3</span>
                </div>
                <h3 className="text-sm font-bold text-[var(--ink)] mb-1">Traitement de la donnée</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">
                  <strong className="text-[var(--ink)]">Donnée :</strong> Billet croisé avec horaires réels et plan de gare.
                </p>
                <div className="text-[11px] font-semibold text-[var(--accent)]">
                  But : Déduire le point d'accueil (Quai B, voiture 12)
                </div>
              </button>

              {/* Step 4: Sensitive */}
              <button
                type="button"
                onClick={() => setActiveStep(4)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === 4
                    ? 'bg-[var(--warn-soft)] border-[var(--warn)] ring-2 ring-[var(--warn)] shadow-sm'
                    : 'bg-[var(--warn-soft)]/80 border-[var(--warn)]/60 hover:border-[var(--warn)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-[var(--warn-soft)] text-[var(--warn-ink)]">
                    <ShieldAlert className="w-4 h-4 text-[var(--warn-ink)]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[var(--warn-ink)]">Étape 4 · Donnée sensible</span>
                </div>
                <h3 className="text-sm font-bold text-[var(--ink)] mb-1">Spécificité de la donnée</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">
                  <strong className="text-[var(--ink)]">Donnée :</strong> Handicap = donnée sensible (RGPD), accès strictement limité.
                </p>
                <div className="text-[11px] font-semibold text-[var(--warn-ink)]">
                  But : Adapter l'alerte, prévoir l'effacement
                </div>
              </button>
            </div>
          </div>

          {/* LANE 3: Edge and Station Agent */}
          <div className="bg-[var(--edge)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 transition-all">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--edge-ink)] mb-4 flex items-center justify-between">
              <span>Zone 3 · En gare : Edge et application de l'agent</span>
              <span className="text-[11px] font-medium lowercase text-[var(--edge-ink)]">Traitement local & prise en charge terrain</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Step 5 */}
              <button
                type="button"
                onClick={() => setActiveStep(5)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === 5
                    ? 'bg-[var(--surface)] border-[var(--edge-ink)] ring-2 ring-[var(--edge-ink)] shadow-sm'
                    : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--line)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-[var(--edge)] text-[var(--edge-ink)]">
                    <Cpu className="w-4 h-4 text-[var(--edge-ink)]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[var(--edge-ink)]">Étape 5</span>
                </div>
                <h3 className="text-sm font-bold text-[var(--ink)] mb-1">Position en gare</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">
                  <strong className="text-[var(--ink)]">Donnée :</strong> Edge : balises Bluetooth, position indoor précise, avec accord.
                </p>
                <div className="text-[11px] font-semibold text-[var(--edge-ink)]">
                  But : Le retrouver en direct
                </div>
              </button>

              {/* Step 6 */}
              <button
                type="button"
                onClick={() => setActiveStep(6)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === 6
                    ? 'bg-[var(--surface)] border-[var(--edge-ink)] ring-2 ring-[var(--edge-ink)] shadow-sm'
                    : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--line)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-[var(--edge)] text-[var(--edge-ink)]">
                    <BellRing className="w-4 h-4 text-[var(--edge-ink)]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[var(--edge-ink)]">Étape 6</span>
                </div>
                <h3 className="text-sm font-bold text-[var(--ink)] mb-1">Avertissement collaborateur</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">
                  <strong className="text-[var(--ink)]">Donnée :</strong> Train, quai B, voiture 12, position, besoin matériel.
                </p>
                <div className="text-[11px] font-semibold text-[var(--edge-ink)]">
                  But : Savoir où aller avant l'arrivée
                </div>
              </button>

              {/* Step 7 */}
              <button
                type="button"
                onClick={() => setActiveStep(7)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === 7
                    ? 'bg-[var(--surface)] border-[var(--edge-ink)] ring-2 ring-[var(--edge-ink)] shadow-sm'
                    : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--line)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-[var(--edge)] text-[var(--edge-ink)]">
                    <UserCheck className="w-4 h-4 text-[var(--edge-ink)]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[var(--edge-ink)]">Étape 7</span>
                </div>
                <h3 className="text-sm font-bold text-[var(--ink)] mb-1">Service personnalisé</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">
                  <strong className="text-[var(--ink)]">Donnée :</strong> Prise en charge confirmée par l'agent et le voyageur.
                </p>
                <div className="text-[11px] font-semibold text-[var(--edge-ink)]">
                  But : Aide sur mesure, puis effacement
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[var(--muted)] border-t border-[var(--border)] pt-4">
          <span className="font-semibold text-[var(--ink)]">Légende :</span>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-xs bg-[var(--phone)] border border-[var(--border)] inline-block" />
            <span>Téléphone voyageur</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-xs bg-[var(--cloud)] border border-[var(--border)] inline-block" />
            <span>Cloud mutualisé</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-xs bg-[var(--edge)] border border-[var(--border)] inline-block" />
            <span>Edge et agent en gare</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-xs bg-[var(--warn-soft)] border border-[var(--warn)] inline-block" />
            <span className="font-medium text-[var(--warn-ink)]">Donnée sensible protégée (handicap)</span>
          </div>
        </div>

        {/* Active Step Details Panel */}
        <div className="mt-6 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)]">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[var(--accent-soft)] shrink-0 mt-0.5">
              {getStepIcon(selectedStepData.step)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Étape {selectedStepData.step} sur 7 · {selectedStepData.zoneLabel}
                </span>
                {selectedStepData.isSensitive && (
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[var(--warn-soft)] text-[var(--warn-ink)] border border-[var(--warn)]">
                    RGPD Art. 9
                  </span>
                )}
              </div>
              <h4 className="text-base font-bold text-[var(--ink)] mb-1">
                {selectedStepData.title}
              </h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                {selectedStepData.details}
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <div className="bg-[var(--phone)] px-3 py-1.5 rounded-md text-[var(--ink)]">
                  <strong>Flux data :</strong> {selectedStepData.dataDescription}
                </div>
                <div className="bg-[var(--accent-soft)] px-3 py-1.5 rounded-md text-[var(--accent)]">
                  <strong>Objectif :</strong> {selectedStepData.goal}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note de bas de schéma */}
        <div className="mt-4 text-xs text-[var(--muted)] italic">
          <p className="mb-1">
            L'exemple (Lyon, Paris, quai B, voiture 12, 14h32) est illustratif. Il montre la logique : le billet et les horaires disent où le voyageur devrait être, les balises confirment où il est vraiment, et l'agent reçoit uniquement ce dont il a besoin pour intervenir.
          </p>
          <p className="m-0">
            Schéma de proposition, construit sur les briques existantes de la SNCF. Ce n'est pas un système déjà déployé.
          </p>
        </div>
      </div>
    </section>
  );
};
