import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { AGREEMENTS_BOOK_DATA } from '../data/agreements_book_data';
import { PAPER_TEXTURE } from '../utils/textures';

const AgreementsBook: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [spreadIndex, setSpreadIndex] = useState(0); // For Desktop (Spreads)
  const [mobilePage, setMobilePage] = useState(1);   // For Mobile (Single Pages). Start at 1 (skip cover).

  // Data slicing logic
  const bookPages = AGREEMENTS_BOOK_DATA;
  const totalSpreads = Math.ceil((bookPages.length - 1) / 2); // -1 because Cover is 0

  // Current Spread Content for Desktop
  const getLeftPage = () => {
    if (spreadIndex === 0) return null; // Inside cover
    const dataIndex = spreadIndex * 2;
    return bookPages[dataIndex] || null;
  };

  const getRightPage = () => {
    const dataIndex = spreadIndex * 2 + 1;
    return bookPages[dataIndex] || null;
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Desktop Logic
    if (spreadIndex < totalSpreads) setSpreadIndex(p => p + 1);
    // Mobile Logic
    if (mobilePage < bookPages.length - 1) setMobilePage(p => p + 1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Desktop Logic
    if (spreadIndex > 0) setSpreadIndex(p => p - 1);
    // Mobile Logic
    if (mobilePage > 1) setMobilePage(p => p - 1);
  };

  const toggleBook = () => {
    setIsOpen(!isOpen);
    setSpreadIndex(0); 
    setMobilePage(1); // Reset to first content page on open
  };

  return (
    <div className="w-full flex flex-col items-center py-12 bg-slate-50 border-t border-gray-100 relative">
      
      {/* Introduction Text */}
      <div className="text-center mb-10 max-w-2xl px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-usc-blue text-sm font-bold mb-4 border border-blue-100">
            <BookOpen size={16} />
            <span>Documento Interactivo</span>
        </div>
        <h3 className="text-3xl font-display font-extrabold text-gray-900 mb-3">
          Listado Histórico de Entidades
        </h3>
        <p className="text-gray-500 text-sm md:text-base">
          Explora nuestro libro digital para consultar el historial completo de convenios activos desde 2017 hasta la fecha.
        </p>
      </div>

      {/* --- BOOK CONTAINER --- */}
      <div className="relative perspective-1000 w-full max-w-5xl h-[60vh] md:h-[600px] flex items-center justify-center px-4">
        
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* --- CLOSED STATE (COVER) --- */
            <motion.div
              key="closed"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative w-[280px] md:w-[420px] h-full cursor-pointer group shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              onClick={toggleBook}
            >
               {/* Spine Effect */}
               <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-gray-900 to-gray-700 rounded-l-md z-20 shadow-lg"></div>
               
               {/* Cover Content Container */}
               <div className="absolute left-6 right-0 top-0 bottom-0 bg-usc-darkBlue rounded-r-md border-r-4 border-b-4 border-gray-900/50 overflow-hidden shadow-sm">
                  <div dangerouslySetInnerHTML={{ __html: bookPages[0].content as string }} className="h-full w-full" />
                  
                  {/* Leather Texture Overlay */}
                  <div className="absolute inset-0 bg-black opacity-10 pointer-events-none mix-blend-multiply filter contrast-125"></div>

                  {/* Sheen/Gloss Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Click Instruction */}
                  <div className="absolute bottom-6 right-6 bg-white text-usc-blue text-xs px-4 py-2 rounded-full shadow-xl font-bold animate-pulse z-30">
                    Clic para abrir
                  </div>
               </div>
            </motion.div>
          ) : (
            /* --- OPEN STATE (SPREAD) --- */
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative flex w-full max-w-5xl h-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-[#fdfbf7] rounded-md overflow-hidden border border-[#eaddcf]"
            >
               {/* Texture Overlay */}
               <div 
                  className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply z-0"
                  style={{ backgroundImage: `url("${PAPER_TEXTURE}")` }}
                ></div>

              {/* LEFT PAGE (Desktop Only) */}
              <div className="flex-1 border-r border-[#eaddcf] relative hidden md:block flex flex-col">
                  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-10"></div>
                  {/* Fixed Header/Content Structure */}
                  <div className="flex-1 px-12 py-10 md:px-16 overflow-y-auto custom-scrollbar relative z-0">
                      {getLeftPage() ? (
                          <div dangerouslySetInnerHTML={{ __html: getLeftPage()?.content as string }} />
                      ) : (
                          <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-30">
                              <img src="https://www.usc.edu.co/wp-content/uploads/2023/03/Logo_Universidad_Santiago_de_Cali_USC-1.png" className="h-24 grayscale mb-4" alt="USC" />
                              <p className="font-serif italic text-sm">Interior de Portada</p>
                          </div>
                      )}
                  </div>
                  {/* Fixed Footer for Page Number */}
                  <div className="h-10 flex items-center justify-center border-t border-[#eaddcf] text-[10px] text-gray-400 font-serif z-10 bg-[#fdfbf7]">
                      {spreadIndex * 2}
                  </div>
              </div>

              {/* RIGHT PAGE (Main View) */}
              <div className="flex-1 relative flex flex-col">
                  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-10"></div>
                  
                  {/* Content Container - Flex-1 so it scrolls, footer stays fixed */}
                  <div className="flex-1 px-6 py-6 md:px-16 md:py-10 overflow-y-auto custom-scrollbar relative z-0">
                      
                      {/* MOBILE VIEW (Single Page) */}
                      <div className="md:hidden">
                         {bookPages[mobilePage] ? (
                             <div dangerouslySetInnerHTML={{ __html: bookPages[mobilePage].content as string }} />
                         ) : (
                             <div className="h-64 flex flex-col items-center justify-center text-gray-400 opacity-50">
                                <p className="font-serif italic text-sm">Fin del documento</p>
                                <button onClick={toggleBook} className="mt-4 px-4 py-2 bg-gray-200 rounded text-xs font-bold hover:bg-gray-300 transition-colors">Cerrar Libro</button>
                             </div>
                         )}
                      </div>

                      {/* DESKTOP VIEW */}
                      <div className="hidden md:block">
                        {getRightPage() ? (
                            <div dangerouslySetInnerHTML={{ __html: getRightPage()?.content as string }} />
                        ) : (
                             <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-50">
                                <p className="font-serif italic text-sm">Fin del documento</p>
                                <button onClick={toggleBook} className="mt-4 px-4 py-2 bg-gray-200 rounded text-xs font-bold hover:bg-gray-300 transition-colors">Cerrar Libro</button>
                             </div>
                        )}
                      </div>
                  </div>
                  
                  {/* Fixed Footer Bar */}
                  <div className="h-14 md:h-10 flex items-center justify-between px-4 border-t border-[#eaddcf] bg-[#fdfbf7] z-20 shrink-0">
                      {/* Mobile Prev Button */}
                      <button 
                        onClick={handlePrev}
                        disabled={window.innerWidth < 768 && mobilePage <= 1}
                        className="md:hidden p-2 text-usc-blue disabled:opacity-30"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      {/* Page Number */}
                      <div className="text-[10px] text-gray-500 font-serif font-bold text-center w-full md:w-auto">
                          <span className="hidden md:inline">{spreadIndex * 2 + 1}</span>
                          <span className="md:hidden">Página {mobilePage}</span>
                      </div>

                      {/* Mobile Next Button */}
                      <button 
                        onClick={handleNext}
                        disabled={window.innerWidth < 768 && mobilePage >= bookPages.length - 1}
                        className="md:hidden p-2 text-usc-blue disabled:opacity-30"
                      >
                        <ChevronRight size={20} />
                      </button>
                  </div>
              </div>

              {/* DESKTOP CONTROLS (Floating on sides, hidden on mobile) */}
              <button 
                onClick={handlePrev}
                disabled={spreadIndex === 0}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-usc-blue rounded-full shadow-lg border border-gray-100 disabled:opacity-0 disabled:pointer-events-none transition-all z-20 hover:scale-110 active:scale-95"
                title="Página Anterior"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={handleNext}
                disabled={spreadIndex >= totalSpreads}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-usc-blue rounded-full shadow-lg border border-gray-100 disabled:opacity-0 disabled:pointer-events-none transition-all z-20 hover:scale-110 active:scale-95"
                title="Siguiente Página"
              >
                <ChevronRight size={24} />
              </button>

              {/* Close Button */}
              <button 
                onClick={toggleBook}
                className="absolute top-2 right-2 text-gray-400 hover:text-usc-red p-1 z-30 opacity-50 hover:opacity-100 transition-opacity"
                title="Cerrar Libro"
              >
                <span className="text-[10px] font-bold uppercase border border-current px-2 py-0.5 rounded">Cerrar</span>
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default AgreementsBook;