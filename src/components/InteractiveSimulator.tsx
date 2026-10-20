import React, { useState } from 'react';
import { SIMULATION_PROFILES } from '../data/articleData.ts';
import { SimulationProfile } from '../types.ts';
import { X, Play, RefreshCw, AlertTriangle, CheckCircle, Smartphone, Cloud, Cpu, ArrowRight, UserCheck } from 'lucide-react';

interface InteractiveSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveSimulator: React.FC<InteractiveSimulatorProps> = ({ isOpen, onClose }) => {
  const [selectedProfile, setSelectedProfile] = useState<SimulationProfile>(SIMULATION_PROFILES[0]);
  const [elevatorOutage, setElevatorOutage] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleStartSim = () => {
    setIsSimulating(true);
    setCurrentStep(1);
    let step = 1;
    const interval = setInterval(() => {
      step += 1;
      if (step > 4) {
        clearInterval(interval);
        setIsSimulating(false);
      } else {
        setCurrentStep(step);
      }
    }, 1800);
  };

  const handleReset = () => {
    setIsSimulating(false);
    setCurrentStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
              <h3 className="text-xl font-bold text-[var(--ink)]">
                Simulateur de parcours PMR en gare
              </h3>
            </div>
            <p className="text-xs text-[var(--muted)] mt-1">
              Visualisez comment le Cloud et l'Edge coopèrent lors de l'arrivée d'un train et réagissent aux imprévus de la gare.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors cursor-pointer"
            aria-label="Fermer le simulateur"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Selector */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-2">
            1. Choisissez un voyageur test :
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SIMULATION_PROFILES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setSelectedProfile(p);
                  handleReset();
                }}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedProfile.id === p.id
                    ? 'border-[var(--accent)] bg-[var(--accent-soft)] ring-2 ring-[var(--accent)]'
                    : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--line)]'
                }`}
              >
                <div className="font-bold text-sm text-[var(--ink)] mb-1">{p.name}</div>
                <div className="text-xs text-[var(--accent)] font-medium mb-1">{p.handicapType}</div>
                <div className="text-[11px] text-[var(--muted)] truncate">{p.train} · {p.destination}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Condition Toggle */}
        <div className="mb-6 p-4 rounded-xl bg-[var(--phone)] border border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] block">
              2. Simulation aléa matériel (Smart Station) :
            </span>
            <span className="text-xs text-[var(--muted)]">
              Simulez la détection locale d'une panne d'ascenseur sur le quai d'arrivée.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setElevatorOutage(!elevatorOutage)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              elevatorOutage
                ? 'bg-[var(--warn-soft)] text-[var(--warn-ink)] border-[var(--warn)]'
                : 'bg-[var(--surface)] text-[var(--ink)] border-[var(--border)]'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>{elevatorOutage ? 'Panne ascenseur Quai B active' : 'Équipements 100% nominaux'}</span>
          </button>
        </div>

        {/* Live Timeline Steps */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
            3. Déroulé en direct du parcours :
          </label>

          {/* Timeline Step 1 */}
          <div className={`p-4 rounded-xl border transition-all ${
            currentStep >= 1 ? 'border-[var(--accent)] bg-[var(--surface)]' : 'border-[var(--border)] opacity-50'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--phone)] text-[var(--accent)]">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-[var(--accent)]">Étape A · Téléphone voyageur</span>
                  <span className="text-[11px] text-[var(--muted)]">H - 24h à H - 30min</span>
                </div>
                <p className="text-sm text-[var(--ink)] m-0">
                  {selectedProfile.name} réserve son billet <strong>{selectedProfile.train}</strong> ({selectedProfile.origin} → {selectedProfile.destination}). Consentement validé pour le partage d'assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Step 2 */}
          <div className={`p-4 rounded-xl border transition-all ${
            currentStep >= 2 ? 'border-[var(--accent)] bg-[var(--surface)]' : 'border-[var(--border)] opacity-50'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--cloud)] text-[var(--accent)]">
                <Cloud className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-[var(--accent)]">Étape B · Cloud mutualisé</span>
                  <span className="text-[11px] text-[var(--muted)]">Croisement diagramme & horaires</span>
                </div>
                <p className="text-sm text-[var(--ink)] m-0">
                  Le Cloud déduit la position d'arrêt prévue : <strong>{selectedProfile.arrivalPlatform}</strong>, vis-à-vis <strong>{selectedProfile.carriage}</strong>. Pré-alerte transmise au pool d'agents de la gare d'arrivée.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Step 3 */}
          <div className={`p-4 rounded-xl border transition-all ${
            currentStep >= 3 ? 'border-[var(--edge-ink)] bg-[var(--edge)]' : 'border-[var(--border)] opacity-50'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--surface)] text-[var(--edge-ink)]">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-[var(--edge-ink)]">Étape C · Edge en gare (Capteurs & Balises)</span>
                  <span className="text-[11px] text-[var(--edge-ink)]">H - 10min · Prise en compte temps réel</span>
                </div>
                {elevatorOutage ? (
                  <p className="text-sm text-[var(--warn-ink)] font-medium m-0">
                    Smart Station signale l'ascenseur Quai B indisponible ! Le serveur Edge local calcule immédiatement l'itinéraire de déviation via la rampe Hall 1 et réassigne le point de passage à l'agent.
                  </p>
                ) : (
                  <p className="text-sm text-[var(--ink)] m-0">
                    Tous les ascenseurs du quai sont opérationnels. Les balises Bluetooth détectent le terminal de l'agent déjà positionné face au repère de la {selectedProfile.carriage}.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Timeline Step 4 */}
          <div className={`p-4 rounded-xl border transition-all ${
            currentStep >= 4 ? 'border-[var(--edge-ink)] bg-[var(--surface)] ring-1 ring-[var(--edge-ink)]' : 'border-[var(--border)] opacity-50'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--edge)] text-[var(--edge-ink)]">
                <UserCheck className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-[var(--edge-ink)]">Étape D · Prise en charge & Purge</span>
                  <span className="text-[11px] text-[var(--edge-ink)]">Arrivée effective {selectedProfile.estimatedArrival}</span>
                </div>
                <p className="text-sm text-[var(--ink)] m-0">
                  L'agent accueille {selectedProfile.name} au marchepied avec {selectedProfile.specificNeed}. Confirmation de prise en charge : la géolocalisation temporaire est purgée de la mémoire locale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--border)]">
          <div className="text-xs text-[var(--muted)]">
            Progression : <strong className="text-[var(--ink)]">{currentStep} / 4</strong>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="px-3 py-2 text-xs font-semibold rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--ink)] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Réinitialiser</span>
            </button>
            <button
              onClick={handleStartSim}
              disabled={isSimulating}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--accent)] text-white hover:opacity-90 disabled:opacity-50 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isSimulating ? 'Simulation...' : 'Lancer le test en direct'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
