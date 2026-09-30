import React from 'react';
import { Target, Lightbulb, Shield, Code2, CheckCircle2, Building2 } from 'lucide-react';
import { COMPANY } from '../data/company';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-brand-400" />,
      title: "Orientación Empresarial",
      description: "Entendemos las necesidades operativas del sector empresarial y construimos soluciones tecnológicas que optimizan procesos y generan impacto medible."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-brand-400" />,
      title: "Innovación Tecnológica",
      description: "Aprovechamos metodologías ágiles y estándares de la industria digital para ofrecer soluciones actualizadas, dinámicas y preparadas para el futuro."
    },
    {
      icon: <Code2 className="w-6 h-6 text-brand-400" />,
      title: "Soluciones Digitales Robustas",
      description: "Desarrollo de software y herramientas digitales con código limpio, arquitectura escalable y alta disponibilidad para entornos corporativos exigentes."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-400" />,
      title: "Seguridad y Confiabilidad",
      description: "Protección de activos digitales, manejo responsable de la información y cumplimiento estricto con los estándares de privacidad y seguridad."
    }
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-28 relative bg-dark-900/50 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Identidad Corporativa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">FLIKK</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            FLIKK es una empresa de tecnología comprometida con el desarrollo de soluciones
            digitales que transforman la operatividad de las empresas y consolidan su presencia en el ecosistema digital moderno.
          </p>
        </div>

        {/* Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-850/80 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
                Tecnología que impulsa el crecimiento
              </h3>
              <p className="mb-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                En un entorno donde la agilidad y la confiabilidad tecnológica definen el éxito corporativo,
                FLIKK ofrece soluciones integrales de desarrollo, modernización y soporte digital.
                Nuestro compromiso es proporcionar herramientas tecnológicas de alto nivel que permitan a las organizaciones operar con fluidez, seguridad y competitividad.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Trabajamos con una visión centrada en el cliente corporativo, priorizando la claridad técnica,
                la arquitectura de sistemas bien fundamentada y la resolución efectiva de desafíos digitales.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Enfoque tecnológico empresarial</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Desarrollo seguro y mantenible</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Soluciones digitales a medida</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Cumplimiento normativo y ético</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal / Official Identity Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-dark-800 to-dark-900 border border-slate-700/80 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Datos Corporativos</h4>
                  <p className="text-xs text-slate-400 font-mono">Registro mercantil verificado</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="pb-3 border-b border-slate-800/80">
                  <span className="text-xs text-slate-400 block uppercase font-mono tracking-wider">Razón Social</span>
                  <span className="text-base font-semibold text-white">{COMPANY.legalName}</span>
                </div>

                <div className="pb-3 border-b border-slate-800/80">
                  <span className="text-xs text-slate-400 block uppercase font-mono tracking-wider">NIT</span>
                  <span className="text-base font-mono font-semibold text-brand-300">{COMPANY.nit}</span>
                </div>

                <div className="pb-3 border-b border-slate-800/80">
                  <span className="text-xs text-slate-400 block uppercase font-mono tracking-wider">Domicilio Principal</span>
                  <span className="text-slate-200">{COMPANY.fullLocation}</span>
                </div>

                <div className="pb-3 border-b border-slate-800/80">
                  <span className="text-xs text-slate-400 block uppercase font-mono tracking-wider">Dirección Física</span>
                  <span className="text-slate-200">{COMPANY.address}</span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block uppercase font-mono tracking-wider">Registro Mercantil</span>
                  <span className="text-slate-200 text-xs">
                    Matrícula No. {COMPANY.matricula} • {COMPANY.camaraComercio}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-850/60 hover:bg-dark-800/80 border border-slate-800 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-dark-900 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:border-brand-500/50 group-hover:shadow-glow-sm transition-all">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
