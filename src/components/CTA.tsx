import React from 'react';
import { MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/company';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-850 to-dark-950 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-700/80 bg-dark-900/90 shadow-2xl backdrop-blur-xl text-center overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Atención Directa y Confiable</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            ¿Tienes un proyecto tecnológico?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            En FLIKK ponemos la tecnología al servicio de tu empresa. Analicemos juntos
            tus requerimientos para estructurar una solución tecnológica sólida, escalable y adaptada a tus necesidades.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold px-8 py-4 rounded-xl shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Hablar con FLIKK</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-dark-800 hover:bg-dark-750 text-slate-200 hover:text-white border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base"
            >
              <span>Enviar formulario</span>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>Canal oficial: {COMPANY.email}</span>
            <span>•</span>
            <span>Tel: {COMPANY.phoneFormatted}</span>
            <span>•</span>
            <span>{COMPANY.fullLocation}</span>
          </div>

        </div>
      </div>
    </section>
  );
};
