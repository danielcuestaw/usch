import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const CoordinatorProfile: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pb-12 pt-4 relative z-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {/* Contenedor de la Imagen Circular */}
        <div className="relative mb-5 group cursor-pointer">
          {/* Efecto de sombra/borde suave detrás */}
          <div className="absolute inset-0 bg-gradient-to-tr from-usc-blue to-usc-red rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform scale-105"></div>
          
          {/* Imagen */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-white shadow-xl overflow-hidden">
            <img
              src="https://www.usc.edu.co/wp-content/uploads/2025/04/Christian-Daniel-Marin-Franco-scaled.webp"
              alt="Christian Daniel Marín Franco"
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Información del Coordinador */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl md:text-3xl font-display font-extrabold text-usc-blue tracking-tight">
            Christian Daniel Marín Franco
          </h3>
          
          <div className="flex flex-col items-center gap-0.5">
            <p className="text-base md:text-lg font-bold text-gray-800 uppercase tracking-wide">
              Coordinador Prácticas
            </p>
            <p className="text-sm md:text-base text-gray-500 font-medium">
              Facultad de Humanidades y Artes
            </p>
          </div>
          
          {/* Chips de Contacto */}
          <div className="pt-4 flex flex-col items-center gap-3">
            {/* Extensión */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-usc-red text-sm font-bold hover:shadow-md transition-shadow">
              <Phone size={16} className="fill-current" />
              <span>Ext. 9080</span>
            </div>

            {/* Correo */}
            <a 
              href="mailto:practicasfha@usc.edu.co"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-usc-blue/5 border border-usc-blue/10 text-usc-blue text-sm font-bold hover:bg-usc-blue hover:text-white transition-all duration-300 shadow-sm"
            >
              <Mail size={16} />
              <span>practicasfha@usc.edu.co</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CoordinatorProfile;