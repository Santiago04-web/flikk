import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { COMPANY } from '../data/company';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-dark-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-dark-950">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
              {type === 'privacy' ? <Shield className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {type === 'privacy' ? 'Política de Tratamiento de Datos Personales' : 'Términos y Condiciones de Uso'}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {COMPANY.legalName} • NIT {COMPANY.nit}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-800 transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <div>
                <h4 className="text-white font-semibold text-base mb-2">1. Identificación del Responsable</h4>
                <p>
                  En cumplimiento de la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia,
                  se informa que el responsable del tratamiento de los datos personales recolectados a través de este sitio web es:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300 font-mono text-xs">
                  <li><strong className="text-white font-sans">Razón Social:</strong> {COMPANY.legalName}</li>
                  <li><strong className="text-white font-sans">NIT:</strong> {COMPANY.nit}</li>
                  <li><strong className="text-white font-sans">Domicilio:</strong> {COMPANY.fullLocation}</li>
                  <li><strong className="text-white font-sans">Dirección:</strong> {COMPANY.address}</li>
                  <li><strong className="text-white font-sans">Teléfono:</strong> {COMPANY.phone}</li>
                  <li><strong className="text-white font-sans">Correo electrónico:</strong> {COMPANY.email}</li>
                  <li><strong className="text-white font-sans">Sitio web:</strong> {COMPANY.domain}</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold text-base mb-2">2. Finalidad del Tratamiento</h4>
                <p>
                  Los datos personales suministrados voluntariamente por los usuarios a través del formulario de contacto o canales directos (nombre, correo corporativo, empresa y requerimiento) son utilizados exclusivamente para:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300">
                  <li>Atender y dar respuesta a consultas, solicitudes comerciales o propuestas tecnológicas.</li>
                  <li>Establecer comunicación directa respecto a los servicios prestados por FLIKK.</li>
                  <li>Cumplir con las obligaciones legales y normativas aplicables.</li>
                </ul>
                <p className="mt-2 text-xs text-slate-400">
                  FLIKK no vende, alquila, ni cede información personal a terceras partes con fines publicitarios.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-base mb-2">3. Derechos de los Titulares</h4>
                <p>
                  Como titular de los datos personales, usted tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos, así como a revocar la autorización otorgada para su tratamiento, mediante comunicación escrita al correo oficial: <strong className="text-brand-300">{COMPANY.email}</strong>.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-base mb-2">4. Seguridad de la Información</h4>
                <p>
                  FLIKK implementa medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-white font-semibold text-base mb-2">1. Disposiciones Generales</h4>
                <p>
                  El acceso y uso del sitio web oficial <strong className="text-brand-300">{COMPANY.domain}</strong> atribuye la condición de usuario e implica la aceptación plena y sin reservas de las disposiciones incluidas en estos Términos y Condiciones.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-base mb-2">2. Titularidad del Sitio Web</h4>
                <p>
                  Este sitio web es operado por <strong className="text-white">{COMPANY.legalName}</strong>, identificada con NIT <strong className="text-white">{COMPANY.nit}</strong>, con domicilio principal en {COMPANY.fullLocation}, Colombia.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-base mb-2">3. Uso Aceptable</h4>
                <p>
                  El usuario se compromete a hacer un uso lícito y adecuado de los contenidos y servicios ofrecidos en este sitio, absteniéndose de realizar actividades que puedan dañar, inutilizar, sobrecargar o deteriorar la plataforma tecnológica o impedir su normal utilización por parte de otros usuarios.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-base mb-2">4. Propiedad Intelectual</h4>
                <p>
                  El nombre comercial, logotipo, isotipo, diseños, marcas, contenidos textuales y software que componen este sitio web son propiedad exclusiva de FLIKK o de sus respectivos titulares de derechos, estando protegidos por la legislación colombiana e internacional sobre propiedad intelectual e industrial.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-base mb-2">5. Legislación Aplicable y Jurisdicción</h4>
                <p>
                  Cualquier controversia relacionada con el uso de este portal se regirá e interpretará conforme a las leyes de la República de Colombia, siendo competente la jurisdicción de los tribunales de la ciudad de Cali, Valle del Cauca.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-dark-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
