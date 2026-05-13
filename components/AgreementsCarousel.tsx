import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAROUSEL_AGREEMENTS } from '../data/carousel';

const AgreementsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_AGREEMENTS.length);
    }, 4500); // Changes every 4.5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="convenios" className="w-full py-16 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-usc-blue relative inline-block">
            Convenios
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-usc-red rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl text-lg">
            Nuestros aliados estratégicos donde podrás potenciar tus habilidades profesionales.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-200">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Image */}
              <img 
                src={CAROUSEL_AGREEMENTS[currentIndex].image} 
                alt={CAROUSEL_AGREEMENTS[currentIndex].name}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Gradient & Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 bg-usc-red text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2 shadow-md">
                    Convenio Activo
                  </span>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 drop-shadow-lg">
                    {CAROUSEL_AGREEMENTS[currentIndex].name}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base font-medium max-w-xl drop-shadow-md">
                    {CAROUSEL_AGREEMENTS[currentIndex].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators (Dots) */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex space-x-2 z-20">
            {CAROUSEL_AGREEMENTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                  index === currentIndex ? 'bg-usc-red w-8' : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AgreementsCarousel;