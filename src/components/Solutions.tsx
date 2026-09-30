import React, { useState } from 'react';
import { Cpu, RefreshCw, Smartphone, Briefcase, Check, ArrowRight } from 'lucide-react';

export const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: "tecnologia",
      category: "Tecnología",
      icon: <Cpu className="w-5 h-5" />,
      title: "Infraestructura y Arquitectura Tecnológica Sólida",
      description: "Implementamos bases tecnológicas robustas preparadas para soportar cargas operativas continuas, garantizando velocidad de respuesta, alta disponibilidad y máxima seguridad para la información de su empresa.",
      benefits: [
        "Arquitecturas modernas y modulares",
        "Alta disponibilidad y tolerancia a fallos",
        "Protección de datos y estándares de seguridad",
        "Escalabilidad técnica sin fricciones"
      ],
      impact: "Estabilidad de plataforma y reducción de riesgos técnicos."
    },
    {
      id: "automatizacion",
      category: "Automatización",
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Optimización y Flujos Operativos Automatizados",
      description: "Identificamos procesos repetitivos en la cadena de valor y aplicamos automatizaciones tecnológicas que eliminan cuellos de botella y errores humanos, permitiendo a su equipo enfocarse en tareas estratégicas.",
      benefits: [
        "Sistematización de tareas operativas críticas",
        "Reducción sustancial en tiempos de ejecución",
        "Disminución drástica de errores manuales",
        "Trazabilidad completa de procesos internos"
      ],
      impact: "Mayor agilidad organizativa y eficiencia en recursos."
    },
    {
      id: "digitalizacion",
      category: "Digitalización",
      icon: <Smartphone className="w-5 h-5" />,
      title: "Ecosistemas Digitales Conectados",
      description: "Transformamos la interacción con clientes y colaboradores a través de portales digitales fluidos, accesibles desde cualquier dispositivo y orientados a una experiencia de usuario clara e intuitiva.",
      benefits: [
        "Presencia digital corporativa de alto impacto",
        "Acceso seguro multiplataforma (móvil y escritorio)",
        "Centralización de la información empresarial",
        "Experiencia de usuario optimizada y profesional"
      ],
      impact: "Consolidación de la imagen de marca y accesibilidad total."
    },
    {
      id: "empresariales",
      category: "Soluciones Empresariales",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Soluciones Diseñadas para el Entorno Corporativo",
      description: "Desarrollamos soluciones a la medida con una profunda comprensión del contexto empresarial colombiano y regional, asegurando que cada componente tecnológico aporte valor real al negocio.",
      benefits: [
        "Alineación con metas comerciales y operativas",
        "Cumplimiento normativo y estándares locales",
        "Acompañamiento continuo y soporte directo",
        "Retorno de inversión en desarrollo tecnológico"
      ],
      impact: "Ventaja competitiva duradera y crecimiento sostenible."
    }
  ];

  return (
    <section id="soluciones" className="py-20 lg:py-28 relative bg-dark-900/60 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Capacidades Estratégicas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Soluciones para la Era Digital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Cómo FLIKK apoya a las organizaciones en cada etapa de su evolución tecnológica a través de cuatro ejes fundamentales.
          </p>
        </div>

        {/* Tab Buttons for Solutions */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {solutions.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-brand-600 text-white shadow-glow-sm border border-brand-400/30'
                  : 'bg-dark-850 text-slate-300 hover:text-white hover:bg-dark-800 border border-slate-800'
              }`}
            >
              {item.icon}
              <span>{item.category}</span>
            </button>
          ))}
        </div>

        {/* Active Solution Card View */}
        <div className="relative rounded-2xl bg-gradient-to-br from-dark-850 to-dark-900 border border-slate-700/80 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-400 bg-brand-500/10 px-3 py-1 rounded-md border border-brand-500/20">
                <span>Eje: {solutions[activeTab].category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {solutions[activeTab].title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {solutions[activeTab].description}
              </p>

              <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800 text-xs sm:text-sm text-brand-300 flex items-center gap-3">
                <span className="font-semibold text-white">Impacto clave:</span>
                <span>{solutions[activeTab].impact}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-dark-950/80 border border-slate-800 rounded-xl p-6 sm:p-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                Beneficios para su empresa
              </h4>
              <ul className="space-y-3.5">
                {solutions[activeTab].benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="#contacto"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium py-2.5 px-4 rounded-lg text-xs transition-colors"
                >
                  <span>Solicitar asesoría en {solutions[activeTab].category}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Flow Strip */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <h3 className="text-center text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400 mb-8">
            Ciclo de Implementación Tecnológica
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-dark-850/40 border border-slate-800 text-center">
              <div className="text-xs font-mono text-brand-400 mb-1">01. Diagnóstico</div>
              <h4 className="text-sm font-bold text-white mb-1">Análisis Técnico</h4>
              <p className="text-xs text-slate-400">Evaluación de requerimientos y objetivos empresariales.</p>
            </div>

            <div className="p-5 rounded-xl bg-dark-850/40 border border-slate-800 text-center">
              <div className="text-xs font-mono text-brand-400 mb-1">02. Arquitectura</div>
              <h4 className="text-sm font-bold text-white mb-1">Diseño y Estructura</h4>
              <p className="text-xs text-slate-400">Planificación de bases técnicas escalables y seguras.</p>
            </div>

            <div className="p-5 rounded-xl bg-dark-850/40 border border-slate-800 text-center">
              <div className="text-xs font-mono text-brand-400 mb-1">03. Desarrollo</div>
              <h4 className="text-sm font-bold text-white mb-1">Construcción y Pruebas</h4>
              <p className="text-xs text-slate-400">Implementación con código limpio y validación rigurosa.</p>
            </div>

            <div className="p-5 rounded-xl bg-dark-850/40 border border-slate-800 text-center">
              <div className="text-xs font-mono text-brand-400 mb-1">04. Despliegue</div>
              <h4 className="text-sm font-bold text-white mb-1">Puesta en Marcha</h4>
              <p className="text-xs text-slate-400">Lanzamiento a producción y soporte continuo.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
