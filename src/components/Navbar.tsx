import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../data/company';

interface NavbarProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#inicio');
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-dark-900 border border-brand-500/30 shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/flikk-logo-icon.png"
                alt="FLIKK Logo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white flex items-center gap-1">
                FLIKK
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium -mt-1 hidden xs:block">
                Tecnología
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-dark-900/60 border border-slate-800/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contacto');
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-glow-sm transition-all duration-300 hover:shadow-glow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Contáctanos</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-950/95 border-b border-slate-800/90 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 mt-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-4 py-2.5 text-base font-medium text-slate-200 hover:text-brand-400 hover:bg-dark-900 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contacto');
              }}
              className="w-full text-center bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 px-4 rounded-xl shadow-glow-sm transition-colors text-sm"
            >
              Contáctanos
            </a>
            <div className="text-center pt-2">
              <span className="text-xs text-slate-400">
                NIT {COMPANY.nit} • {COMPANY.city}, Colombia
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
