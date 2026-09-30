import React from 'react';
import { 
  Code2, 
  Building2, 
  Workflow, 
  Globe, 
  Layers, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="w-6 h-6 text-brand-400" />,
      title: "Desarrollo de Soluciones Digitales",
      description: "Diseño, estructuración e implementación de plataformas y sistemas digitales a la medida de los requerimientos operativos de su organización.",
      features: [
        "Sistemas web y plataformas modulares",
        "Arquitectura de software escalable",
        "Enfoque en usabilidad y rendimiento"
      ]
    },
    {
      icon: <Building2 className="w-6 h-6 text-brand-400" />,
      title: "Tecnología para Empresas",
      description: "Soluciones de infraestructura tecnológica y optimización de herramientas corporativas para incrementar la productividad de los equipos de trabajo.",
      features: [
        "Modernización de entornos de trabajo",
        "Estandarización de herramientas digitales",
        "Asesoría técnica empresarial"
      ]
    },
    {
      icon: <Workflow className="w-6 h-6 text-brand-400" />,
      title: "Automatización de Procesos",
      description: "Sistematización de flujos y procesos repetitivos para reducir tiempos operativos, minimizar errores y maximizar la eficiencia empresarial.",
      features: [
        "Optimización de flujos de trabajo",
        "Conexión de herramientas y servicios",
        "Eficiencia y reducción de costos operativos"
      ]
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-400" />,
      title: "Soluciones Web",
      description: "Desarrollo de sitios web corporativos y portales empresariales de alta velocidad, seguros, adaptables y con estándares modernos de la industria.",
      features: [
        "Sitios corporativos y presenciales",
        "Diseño totalmente responsive (móvil y desktop)",
        "Optimización para buscadores (SEO) y seguridad"
      ]
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-400" />,
      title: "Transformación Digital",
      description: "Acompañamiento a organizaciones en la transición y adopción de tecnologías digitales para consolidar su presencia y competitividad.",
      features: [
        "Estrategia de digitalización",
        "Integración de canales digitales",
        "Transición tecnológica estructurada"
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-400" />,
      title: "Mantenimiento y Soporte Tecnológico",
      description: "Supervisión continua, soporte técnico y mantenimiento preventivo para garantizar la alta disponibilidad y seguridad de sus plataformas.",
      features: [
        "Monitoreo de disponibilidad",
        "Mantenimiento preventivo y correctivo",
        "Actualizaciones de seguridad y estabilidad"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Servicios Tecnológicos Especializados
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Ofrecemos un portafolio de servicios orientado a resolver necesidades tecnológicas reales con rigor técnico, enfoque corporativo y altos estándares de calidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-2xl bg-dark-900 border border-slate-800/90 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-sm group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 border border-slate-700/80 flex items-center justify-center group-hover:border-brand-500/60 group-hover:bg-brand-500/10 transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <span>Consultar sobre este servicio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
