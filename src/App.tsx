import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ConstatSection } from './components/ConstatSection.tsx';
import { ExistantSection } from './components/ExistantSection.tsx';
import { IdeeSection } from './components/IdeeSection.tsx';
import { DataFlowDiagram } from './components/DataFlowDiagram.tsx';
import { CloudEdgeSection } from './components/CloudEdgeSection.tsx';
import { DonneesSection } from './components/DonneesSection.tsx';
import { FreinsSection } from './components/FreinsSection.tsx';
import { ConclusionSection } from './components/ConclusionSection.tsx';
import { SourcesSection } from './components/SourcesSection.tsx';
import { Footer } from './components/Footer.tsx';
import { InteractiveSimulator } from './components/InteractiveSimulator.tsx';
import { AccessibilityModal } from './components/AccessibilityModal.tsx';
import { StandaloneHtmlModal } from './components/StandaloneHtmlModal.tsx';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isDyslexic, setIsDyslexic] = useState<boolean>(false);
  const [fontScale, setFontScale] = useState<number>(1);

  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState<boolean>(false);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Sync dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Sync high contrast
  useEffect(() => {
    const root = document.documentElement;
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  // Sync dyslexia font
  useEffect(() => {
    const root = document.documentElement;
    if (isDyslexic) {
      root.classList.add('dyslexic-font');
    } else {
      root.classList.remove('dyslexic-font');
    }
  }, [isDyslexic]);

  // Text to Speech feature
  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert("La synthèse vocale n'est pas supportée sur ce navigateur.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = `
      Être retrouvé en gare : faciliter le transport des personnes à mobilité réduite.
      À partir du billet acheté, que peut-on savoir d'un voyageur à mobilité réduite pour lui faciliter la gare ?
      Ce que la SNCF a déjà déployé, ce que le Cloud et l'Edge peuvent ajouter, et les freins à lever.
      Problématique : Comment fédérer les services d'accessibilité existants, comme Assist'enGare, l'état des équipements et SNCF Connect, dans une plateforme cloud qui personnalise le parcours en gare selon le profil du voyageur PMR ?
    `;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'fr-FR';
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleResetPreferences = () => {
    setFontScale(1);
    setIsDyslexic(false);
    setIsHighContrast(false);
  };

  return (
    <div
      className="min-h-screen bg-[var(--bg)] text-[var(--ink)] antialiased transition-colors"
      style={{ fontSize: `${fontScale * 100}%` }}
    >
      {/* WCAG Skip to Main Content Link */}
      <a href="#contenu" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Header */}
      <Header
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
        onOpenSimulator={() => setIsSimulatorOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onReadArticle={handleToggleSpeech}
        isSpeaking={isSpeaking}
      />

      {/* Main Content Area */}
      <main id="contenu" tabIndex={-1}>
        <HeroSection onOpenSimulator={() => setIsSimulatorOpen(true)} />
        <ConstatSection />
        <ExistantSection />
        <IdeeSection />
        <DataFlowDiagram />
        <CloudEdgeSection />
        <DonneesSection />
        <FreinsSection />
        <ConclusionSection />
        <SourcesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Simulator Modal */}
      <InteractiveSimulator
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />

      {/* Accessibility / Reading Comfort Modal */}
      <AccessibilityModal
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
        fontScale={fontScale}
        setFontScale={setFontScale}
        isDyslexic={isDyslexic}
        setIsDyslexic={setIsDyslexic}
        isHighContrast={isHighContrast}
        setIsHighContrast={setIsHighContrast}
        onResetPreferences={handleResetPreferences}
      />

      {/* Standalone HTML Code Modal */}
      <StandaloneHtmlModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
