import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, USC_LOGO_URL } from '../constants';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onSectionChange: (section: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = NAV_ITEMS;

  const handleNavClick = (id: SectionId) => {
    onSectionChange(id);
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 font-display pt-4 px-4">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO SECTION (RESTAURADA: FONDO BLANCO / ORIGINAL) --- */}
          {/* Esta sección vuelve a ser blanca con los colores institucionales originales, NO se toca */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer bg-white/95 backdrop-blur-sm py-2 px-6 rounded-full shadow-lg border border-white/20 relative z-20 hover:scale-[1.02] transition-transform duration-300"
            onClick={() => handleNavClick('home')}
          >
            {/* Imagen del Logo (Colores originales) */}
            <img 
              className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" 
              src={USC_LOGO_URL} 
              alt="Logo Universidad Santiago de Cali" 
            />

            {/* Texto del Logo (Colores originales) */}
            <div className="hidden sm:flex flex-col justify-center h-10 border-l-2 border-gray-300 pl-3">
                <h1 className="text-[10px] font-bold text-usc-blue uppercase tracking-wide leading-tight">Facultad de</h1>
                <h2 className="text-sm font-extrabold text-usc-red uppercase leading-none mt-0.5">Humanidades y Artes</h2>
            </div>
          </div>

          {/* --- DESKTOP MENU (ESTILO OSCURO TRANSLÚCIDO) --- */}
          {/* Aquí aplicamos el estilo que te gustó: Barra negra translúcida */}
          <div className="hidden xl:flex items-center">
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-white/10">
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`
                                relative px-4 py-2.5 rounded-full text-[11px] font-bold transition-all duration-300 z-10 whitespace-nowrap uppercase tracking-wide
                                ${isActive 
                                    ? 'text-gray-900 shadow-md' // Activo: Texto negro (sobre burbuja blanca)
                                    : 'text-white/90 hover:text-white hover:bg-white/10' // Inactivo: Texto blanco (sobre fondo negro)
                                }
                            `}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    );
                })}
            </div>
          </div>

          {/* --- MOBILE/TABLET MENU BUTTON --- */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`
                p-3 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 border border-white/20
                ${isMobileOpen ? 'bg-usc-red text-white rotate-90' : 'bg-white/90 text-gray-700 hover:text-usc-blue'}
              `}
              aria-label="Abrir menú"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU DROPDOWN --- */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 right-0 w-full sm:w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 overflow-hidden z-50 xl:hidden origin-top-right"
            >
              <div className="py-2 flex flex-col max-h-[80vh] overflow-y-auto">
                <div className="px-6 py-4 border-b border-gray-100 mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Navegación</span>
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      mx-3 px-4 py-3.5 text-sm font-bold transition-all duration-200 text-left rounded-xl mb-1 flex items-center justify-between group
                      ${activeSection === item.id 
                        ? 'text-usc-blue bg-blue-50 border-l-4 border-usc-blue' 
                        : 'text-gray-600 hover:text-usc-red hover:bg-gray-50'
                      }
                    `}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                        <motion.div layoutId="active-dot" className="w-2 h-2 bg-usc-blue rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;