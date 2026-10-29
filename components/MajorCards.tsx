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
          return (
            <motion.div
              key={major.id}
              id={major.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className= "shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 bg-white"
              onClick={(e) => handleNavigate(e, major.id as SectionId)}
            >
              <img 
                src={major.image} 
                alt={major.name}
                className="w-full object-cover transform transition-transform duration-700 hover:scale-105 shadow-xl"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MajorCards;