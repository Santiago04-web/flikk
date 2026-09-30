import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export function App() {
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const handleOpenLegal = (type: 'privacy' | 'terms') => {
    setLegalModal({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500/30 selection:text-brand-300">
      <Navbar onOpenLegal={handleOpenLegal} />

      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Solutions />
        <CTA />
        <Contact />
      </main>

      <Footer onOpenLegal={handleOpenLegal} />

      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={handleCloseLegal}
      />
    </div>
  );
}

export default App;
