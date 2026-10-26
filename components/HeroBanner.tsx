import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId } from '../types';
import { MAJORS } from '../constants';

interface HeroBannerProps {
  activeSection: SectionId;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ activeSection }) => {
  
  // Determinar los textos basados en la sección activa
  const getTextContent = () => {
    // Verificar si es una carrera
    const major = MAJORS.find(m => m.id === activeSection);
    
    if (major) {
      return {
        subtitle: major.name.toUpperCase(),
        slogan: major.slogan
      };
    }

    switch (activeSection) {
      case 'home':
        return { subtitle: 'Quiénes Somos', slogan: '"Tu puente hacia el futuro"' };
      case 'practices':
        return { subtitle: 'Prácticas', slogan: '"Experiencia real, impacto global"' };
      case 'platform-instructions':
        return { subtitle: 'Instructivo Plataforma', slogan: '"Guía paso a paso para tu gestión en SIPPU"' };
      case 'regulations':
        return { subtitle: 'Normatividad y Formatos', slogan: '"Base legal de tu formación"' };
      case 'agreements':
        return { subtitle: 'Convenios', slogan: '"Alianzas que construyen futuro"' };
      case 'closing':
        return { subtitle: 'Cierre de Prácticas', slogan: '"Culminación y certificación de tu experiencia"' };
      default:
        return { subtitle: '', slogan: '' };
    }
  };

  const content = getTextContent();

  return (
    <>
      {/* Internal Styles for specific animations */}
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .lava-gradient {
            /* Mixing USC Blue and Red more evenly for the lava lamp effect */
            background: linear-gradient(-45deg, #002f6c, #c4161c, #001a3d, #e31c23);
            background-size: 300% 300%;
            /* Increased duration from 15s to 30s for a slower, calmer effect */
            animation: gradientFlow 30s ease infinite;
          }

          .text-glow {
            /* Reduced opacity for a subtler, more elegant glow */
            text-shadow: 
              0 0 10px rgba(255, 255, 255, 0.4),
              0 0 20px rgba(255, 255, 255, 0.2),
              0 0 40px rgba(255, 255, 255, 0.1);
          }
        `}
      </style>

      {/* Reduced height from h-[600px]/h-[700px] to h-[450px]/h-[550px] to simulate "zoomed out" view */}
      <div className="relative w-full h-[200px] md:h-[220px] overflow-hidden flex items-center justify-center lava-gradient">
        

        {/* Animated Wave Bottom */}
        <div className="absolute -bottom-1 left-0 w-full leading-none overflow-hidden">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
              fillOpacity="0.2"
              animate={{ 
                  d: [
                      "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                      "M321.39,26.44c58-10.79,114.16-30.13,172-11.86,82.39,16.72,168.19,37.73,250.45,10.39C823.78,10,906.67,52,985.66,72.83c70.05,18.48,146.53,16.09,214.34-10V120H0V27.35A600.21,600.21,0,0,0,321.39,26.44Z",
                      "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  ]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Front Wave - Solid Page Background (#f8fafc) */}
            <motion.path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#f8fafc"
              animate={{ 
                  y: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;