import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../data/company';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-dark-900 border border-brand-500/30 shadow-glow-sm">
                <img
                  src="/assets/flikk-logo-icon.png"
                  alt="FLIKK"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-wider">FLIKK</span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Soluciones tecnológicas para un mundo digital. Desarrollo, infraestructura y modernización de plataformas empresariales.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1 font-mono">
              <p><span className="text-slate-400">Razón Social:</span> <strong className="text-slate-200 font-sans">{COMPANY.legalName}</strong></p>
              <p><span className="text-slate-400">NIT:</span> <strong className="text-slate-200 font-mono">{COMPANY.nit}</strong></p>
              <p><span className="text-slate-400">Matrícula:</span> <span className="text-slate-200">{COMPANY.matricula} ({COMPANY.camaraComercio})</span></p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('inicio')}
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('nosotros')}
                  className="hover:text-white transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('servicios')}
                  className="hover:text-white transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('soluciones')}
                  className="hover:text-white transition-colors"
                >
                  Soluciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contacto')}
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Legal and Official Address */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Ubicación y Contacto Oficial
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {COMPANY.address}<br />
                  {COMPANY.city}, {COMPANY.department}, {COMPANY.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="hover:text-white transition-colors font-mono text-xs"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors text-xs text-brand-300"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <ArrowUpRight className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={COMPANY.domain}
                  className="hover:text-white transition-colors text-xs text-slate-400 font-mono"
                >
                  {COMPANY.domainClean}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY.name} • NIT {COMPANY.nit}. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 underline underline-offset-4 transition-colors"
            >
              Política de privacidad
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 underline underline-offset-4 transition-colors"
            >
              Términos y condiciones
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
