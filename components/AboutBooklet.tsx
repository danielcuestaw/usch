import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, CheckCircle } from 'lucide-react';
import { USC_QUIENES_SOMOS_URL } from '../constants';

const AboutBooklet: React.FC = () => {
  const [showObjectives, setShowObjectives] = useState(false);

  return (
    <section id="quienes-somos" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
      
      {/* 1. Título Principal */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-usc-blue relative inline-block">
          Quiénes Somos
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-usc-red rounded-full"></span>
        </h2>
      </motion.div>

      {/* 2. Contenido Central (Dos Columnas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        
        {/* Columna Izquierda: Texto + Objetivos */}
        <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 text-base md:text-lg leading-relaxed font-sans text-justify md:text-left"
            >
              <p>
                El proceso de Práctica y Pasantías de La Universidad Santiago de Cali, brinda un acompañamiento a los estudiantes de los diferentes programas para que puedan realizar su práctica y/o pasantías en entidades de los sectores económicos para fortalecer su formación integral y potencializar sus capacidades y habilidades.
              </p>
            </motion.div>

            {/* Menú Desplegable de Objetivos (Reubicado aquí) */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <button 
                onClick={() => setShowObjectives(!showObjectives)}
                className={`
                    w-full flex items-center justify-between px-5 py-3 rounded-xl border transition-all duration-300 group
                    ${showObjectives 
                    ? 'bg-usc-blue text-white border-usc-blue shadow-lg' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-usc-blue hover:text-usc-blue shadow-sm'
                    }
                `}
                >
                <div className="flex items-center gap-3">
                    <Target className={`w-5 h-5 ${showObjectives ? 'text-white' : 'text-usc-red'}`} />
                    <span className="font-display font-bold text-base md:text-lg tracking-wide">Nuestros Objetivos</span>
                </div>
                <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${showObjectives ? 'rotate-180' : ''}`} 
                />
                </button>

                <AnimatePresence>
                {showObjectives && (
                    <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                    >
                    <div className="bg-gray-50 rounded-b-xl border-x border-b border-gray-200 p-5 shadow-inner mt-[-1px]">
                        {/* Lista Vertical de Objetivos */}
                        <ul className="flex flex-col gap-3">
                        {[
                            "Fortalecer competencias sociales, laborales y profesionales.",
                            "Lograr experiencia laboral y profesional, vital para el currículum.",
                            "Fomentar la relación Universidad-Empresa y la adquisición de nuevos conocimientos."
                        ].map((item, index) => (
                            <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 text-left p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                            >
                            <div className="mt-0.5 text-usc-red min-w-[20px]">
                                <CheckCircle size={18} />
                            </div>
                            <span className="text-gray-600 text-sm font-medium leading-snug">{item}</span>
                            </motion.li>
                        ))}
                        </ul>
                    </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.div>
        </div>

        {/* Columna Derecha: Imagen */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group h-64 md:h-80 w-full"
        >
          <img 
            src={USC_QUIENES_SOMOS_URL}
            alt="Estudiantes Facultad Humanidades" 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          {/* Sutil overlay para dar profundidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>

    </section>
  );
};

export default AboutBooklet;