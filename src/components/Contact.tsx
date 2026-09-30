import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { COMPANY } from '../data/company';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    empresa: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Client-side simulation of message submission without unnecessary external tracking
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({ nombre: '', correo: '', empresa: '', mensaje: '' });
    setSubmitted(false);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 relative bg-dark-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Canales Oficiales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contacto Directo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Póngase en contacto con nuestro equipo para evaluar requerimientos técnicos, solicitar información sobre servicios o agendar una consulta empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Official Information Card (Exact Data) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-dark-850 border border-slate-700/80 shadow-xl space-y-6">
              
              <div className="border-b border-slate-800 pb-5">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-400">Datos Oficiales</span>
                <h3 className="text-2xl font-black text-white mt-1">{COMPANY.name}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">Razón Social: {COMPANY.legalName} • NIT: {COMPANY.nit}</p>
              </div>

              {/* Exact Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Ubicación y Dirección</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">{COMPANY.city}, {COMPANY.department}, {COMPANY.country}</p>
                  <p className="text-xs font-mono text-slate-300 mt-1 bg-dark-900 px-2.5 py-1.5 rounded border border-slate-800 inline-block">
                    {COMPANY.address}
                  </p>
                </div>
              </div>

              {/* Exact Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Teléfono</h4>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-sm font-semibold text-white hover:text-brand-300 transition-colors block mt-0.5"
                  >
                    {COMPANY.phone}
                  </a>
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-400 hover:text-brand-300 underline mt-1 inline-block"
                  >
                    Contactar vía WhatsApp empresarial
                  </a>
                </div>
              </div>

              {/* Exact Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Correo Electrónico</h4>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm font-semibold text-brand-300 hover:text-brand-200 transition-colors block mt-0.5 break-all"
                  >
                    {COMPANY.email}
                  </a>
                  <span className="text-[11px] text-slate-400 mt-1 block">Atención comercial y técnica</span>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Tratamiento de datos conforme a la Ley 1581 de 2012</span>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-dark-850 border border-slate-700/80 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center mx-auto shadow-glow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Mensaje preparado con éxito!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Gracias por comunicarse con <span className="font-semibold text-white">FLIKK</span>. Nos pondremos en contacto a través de {formData.correo || COMPANY.email} a la mayor brevedad.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${COMPANY.email}?subject=Contacto%20desde%20sitio%20web%20-%20${encodeURIComponent(formData.nombre || 'Empresa')}&body=Nombre:%20${encodeURIComponent(formData.nombre)}%0AEmpresa:%20${encodeURIComponent(formData.empresa)}%0ACorreo:%20${encodeURIComponent(formData.correo)}%0AMensaje:%20${encodeURIComponent(formData.mensaje)}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Abrir en cliente de correo</span>
                    </a>
                    
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto text-xs text-slate-400 hover:text-white px-4 py-2.5 rounded-lg bg-dark-900 border border-slate-800"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">Formulario de Contacto</h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Complete los siguientes campos para que un asesor tecnológico se comunique con usted.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nombre completo <span className="text-brand-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Correo */}
                    <div>
                      <label htmlFor="correo" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Correo electrónico corporativo <span className="text-brand-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        required
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="ejemplo@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="empresa" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Empresa u Organización
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nombre de su organización"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Mensaje / Descripción del proyecto <span className="text-brand-400">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Describa brevemente su necesidad o proyecto tecnológico..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold py-3.5 px-6 rounded-xl shadow-glow-sm hover:shadow-glow-md transition-all duration-300 disabled:opacity-50 text-sm"
                    >
                      {loading ? (
                        <span>Procesando...</span>
                      ) : (
                        <>
                          <span>Enviar Mensaje</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    Su información no se comparte con terceros ni se utiliza con fines publicitarios.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
