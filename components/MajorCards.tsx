import React, { useState } from 'react';
import { MAJORS } from '../constants';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId } from '../types';

interface MajorCardsProps {
  onSectionChange: (section: SectionId) => void;
}

const MajorCards: React.FC<MajorCardsProps> = ({ onSectionChange }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleMajor = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleNavigate = (e: React.MouseEvent, id: SectionId) => {
    e.stopPropagation(); // Evitar que el click cierre la tarjeta inmediatamente
    onSectionChange(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start">
        {MAJORS.map((major, index) => {
          const isExpanded = expandedId === major.id;
          
          return (
            <motion.div
              key={major.id}
              // Added ID for search bar navigation
              id={major.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`
                flex flex-col
                shadow-lg hover:shadow-2xl transition-all duration-300 relative group
                rounded-xl overflow-hidden
                bg-white
                ${isExpanded ? 'z-10' : 'hover:-translate-y-1'}
              `}
              onClick={() => toggleMajor(major.id)}
            >
              {/* --- IMAGE SECTION --- */}
              {/* Connected directly to the card below (no gaps) */}
              <div className="relative h-32 w-full overflow-hidden">
                <img 
                  src={major.image} 
                  alt={major.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay: Gradient to darken bottom of image for better blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Optional: Icon overlay on image top-right for style */}
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white">
                  <major.icon size={14} />
                </div>
              </div>

              {/* --- CONNECTING LINE --- */}
              {/* This acts as the "glue" and the accent color for the major */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${major.gradient}`} />

              {/* --- TAB CONTENT (Rectangular & Compact) --- */}
              <div className="py-3 px-2 flex flex-col items-center text-center space-y-1.5 cursor-pointer bg-white">
                
                {/* Title and Subtitle */}
                <div className="flex flex-col space-y-0.5 z-10">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Programa Académico
                  </span>
                  <h3 className="text-lg font-bold font-display text-gray-800 leading-tight group-hover:text-usc-blue transition-colors">
                    {major.name}
                  </h3>
                </div>

                {/* Expand Indicator */}
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center text-gray-400 mt-1
                  transition-all duration-500 ${isExpanded ? 'text-usc-blue rotate-180 bg-gray-100' : 'translate-y-0'}
                `}>
                  <ChevronDown size={18} />
                </div>
              </div>

              {/* --- EXPANDABLE CONTENT --- */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-gray-50 border-t border-gray-100"
                  >
                    <div className="p-5 flex flex-col items-center text-center">
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {major.description}
                      </p>
                      
                      <button 
                        onClick={(e) => handleNavigate(e, major.id)}
                        className={`
                        w-full flex items-center justify-center px-4 py-2 rounded-lg font-bold text-white shadow-md
                        bg-gradient-to-r ${major.gradient} hover:shadow-lg hover:opacity-95 transition-all text-sm
                      `}>
                        <span>Ver Información de Prácticas</span>
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MajorCards;