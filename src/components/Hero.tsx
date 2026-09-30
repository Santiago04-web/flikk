import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, ChevronDown } from 'lucide-react';
import { COMPANY } from '../data/company';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[850px] h-[350px] sm:h-[600px] bg-brand-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Official badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-sm mb-6 sm:mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              Presencia Oficial • {COMPANY.city}, Colombia
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs font-mono text-slate-400">NIT {COMPANY.nit}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
              FLIKK
            </span>
            <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-slate-200">
              Soluciones tecnológicas para un mundo digital.
            </span>
          </h1>

          {/* Professional Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Impulsamos la evolución tecnológica de las organizaciones a través de
            soluciones digitales, automatización y arquitecturas de software
            modernas, orientadas a la eficiencia y el crecimiento empresarial.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
            <button
              onClick={() => scrollTo('servicios')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold px-8 py-3.5 rounded-xl shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              <span>Conoce nuestros servicios</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('contacto')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-dark-900/90 hover:bg-dark-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 text-base"
            >
              <span>Contáctanos</span>
            </button>
          </div>

          {/* Official Visual Banner Showcasing FLIKK Identity */}
          <div className="w-full max-w-4xl relative mt-2 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-600/30 via-cyan-500/20 to-brand-700/30 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 bg-dark-900 shadow-2xl">
              {/* Header bar simulated terminal/display */}
              <div className="px-4 py-2.5 bg-dark-950 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">flikk.online • Soluciones Tecnológicas</span>
                </div>
                <div className="flex items-center gap-1.5 text-brand-400 font-mono text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verificado</span>
                </div>
              </div>

              {/* Graphic Banner */}
              <div className="relative aspect-[16/9] w-full bg-black">
                <img
                  src="/assets/flikk-hero-banner.jpg"
                  alt="FLIKK - Tecnología que impulsa"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Bottom Info Strip */}
              <div className="px-5 py-3 bg-dark-900/95 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">Enfoque Empresarial</p>
                    <p className="text-[11px] text-slate-400">Tecnología aplicada a negocios</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">Rigor y Seguridad</p>
                    <p className="text-[11px] text-slate-400">Cumplimiento y confiabilidad</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                    <span className="font-mono text-xs font-bold text-brand-400">NIT</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">{COMPANY.nit}</p>
                    <p className="text-[11px] text-slate-400">{COMPANY.fullLocation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll down indicator */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => scrollTo('nosotros')}
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2 flex flex-col items-center gap-1"
              aria-label="Ver sección nosotros"
            >
              <span className="text-xs font-medium tracking-wider uppercase">Explorar</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
