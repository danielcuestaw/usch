import React from 'react';
import { Mail } from 'lucide-react';
import { USC_FOOTER_LOGO_URL } from '../constants';

// WhatsApp Icon Component (Inline SVG for accurate branding)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-usc-darkBlue text-white py-12 border-t-4 border-usc-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Footer Logo Section - Updated: Larger, No Background, No Text */}
        <div className="mb-8 flex flex-col items-center justify-center">
            <img 
              src={USC_FOOTER_LOGO_URL} 
              alt="Acreditación Institucional en Alta Calidad - USC" 
              className="h-32 md:h-48 w-auto object-contain"
            />
        </div>

        {/* Text Information - Hyperlinks added */}
        <p className="text-xl font-bold mb-2 font-display tracking-wide">
          <a 
            href="https://www.usc.edu.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-usc-red transition-colors duration-300"
          >
            Universidad Santiago de Cali
          </a>
        </p>
        <p className="text-base text-gray-300 font-medium">
          <a 
            href="https://www.usc.edu.co/facultad-de-humanidades-y-artes/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            Facultad de Humanidades y Artes
          </a>
        </p>

        {/* --- CONTACT SECTION --- */}
        <div className="mt-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-lg">
            <h3 className="text-white/80 font-display font-bold text-sm uppercase tracking-widest mb-5 border-b border-white/10 pb-2 w-full max-w-[120px]">
                Contacto
            </h3>
            
            <div className="flex flex-col gap-4 items-center">
                {/* Email */}
                <a 
                    href="mailto:practicasfha@usc.edu.co"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-usc-red/80 transition-colors shadow-lg border border-white/5">
                        <Mail size={20} />
                    </div>
                    <span className="text-sm md:text-base font-medium tracking-wide break-all">practicasfha@usc.edu.co</span>
                </a>

                {/* WhatsApp */}
                <a 
                    href="https://wa.me/573206728517"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#25D366] transition-colors shadow-lg border border-white/5">
                        <WhatsAppIcon className="w-[20px] h-[20px]" />
                    </div>
                    <span className="text-sm md:text-base font-medium tracking-wide">+57 320 672 8517</span>
                </a>
            </div>
        </div>
        
        <div className="mt-12 text-xs text-gray-500 border-t border-white/10 pt-6 w-full max-w-lg mx-auto">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;