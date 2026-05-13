import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botón cuando se baja 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* 
        SOLUCIÓN ERROR MÓVIL: 
        Esta regla CSS oculta el botón si el body tiene la clase "modal-open".
        Esta clase se agrega dinámicamente desde BookModal.tsx cuando se abre un libro.
      */}
      <style>{`
        body.modal-open .scroll-to-top-btn {
          display: none !important;
        }
      `}</style>
      
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 bg-usc-red text-white rounded-full shadow-lg hover:bg-red-700 hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-white/20 group scroll-to-top-btn"
            aria-label="Volver arriba"
            title="Volver al inicio"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;