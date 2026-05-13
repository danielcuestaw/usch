/**
 * COMPONENTE: VISOR DE LIBRO INTERACTIVO
 * ----------------------------------------------------------------------
 * OPTIMIZACIÓN: Lógica de datos extraída a hooks/useBookContent.ts
 * ACTUALIZACIÓN: Barra de navegación inferior fija para móviles (Paginación estática).
 * CORRECCIÓN: Uso de Portals para evitar conflictos de Z-Index con la barra de búsqueda.
 */

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Download, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookPage } from '../types';
import { PAPER_TEXTURE, COVER_TEXTURE } from '../utils/textures';
import { useBookContent } from '../hooks/useBookContent';
import { USC_FOOTER_LOGO_URL } from '../constants';

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: BookPage[];
  downloadUrl?: string;
  initialPageId?: number; // New prop for deep linking
}

const BookModal: React.FC<BookModalProps> = ({ isOpen, onClose, title, data, downloadUrl, initialPageId }) => {
  // --- STATES ---
  const [isBookClosed, setIsBookClosed] = useState(true);
  const [spreadIndex, setSpreadIndex] = useState(0); 
  const [mobilePageIndex, setMobilePageIndex] = useState(0); 
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Ref for scroll throttling
  const lastScrollTime = useRef(0);
  
  // --- CUSTOM HOOK: Lógica de Datos y Búsqueda ---
  const { processedBookData: bookData, searchResults: filteredResults } = useBookContent(data, searchQuery);

  const totalSpreads = Math.ceil((bookData.length + 1) / 2);

  // --- EFFECTS ---
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setShowSearch(false);
      
      // Bloquear scroll y marcar el body como modal abierto
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');

      // DEEP LINKING LOGIC
      if (initialPageId !== undefined) {
         const targetIndex = bookData.findIndex(p => p.id === initialPageId);
         
         if (targetIndex !== -1) {
             const targetSpread = Math.floor((targetIndex + 1) / 2);
             setSpreadIndex(targetSpread);
             setMobilePageIndex(targetIndex);
             setIsBookClosed(false); // Open book immediately
         } else {
             // Fallback if ID not found
             setSpreadIndex(0);
             setMobilePageIndex(0);
             setIsBookClosed(true);
         }
      } else {
          // Normal open behavior
          setIsBookClosed(true);
          setSpreadIndex(0);
          setMobilePageIndex(0);
      }

    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, initialPageId, bookData]);

  // --- HANDLERS ---
  const handleOpenBook = () => setIsBookClosed(false);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (spreadIndex < totalSpreads - 1) setSpreadIndex(p => p + 1);
    if (mobilePageIndex < bookData.length - 1) setMobilePageIndex(p => p + 1);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (spreadIndex > 0) setSpreadIndex(p => p - 1);
    if (mobilePageIndex > 0) setMobilePageIndex(p => p - 1);
  };

  const jumpToPage = (pageIndex: number) => {
      const targetSpread = Math.floor((pageIndex + 1) / 2);
      setSpreadIndex(targetSpread);
      setMobilePageIndex(pageIndex);
      setIsBookClosed(false);
      setShowSearch(false);
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      const li = target.closest('li');
      if (li && li.dataset.title) {
          const titleToFind = li.dataset.title;
          const foundIdx = bookData.findIndex(p => p.title === titleToFind);
          if (foundIdx !== -1) jumpToPage(foundIdx);
      }
  };

  // --- RENDER CONTENT ---
  const leftContentIndex = spreadIndex * 2 - 1;
  const rightContentIndex = spreadIndex * 2;
  const leftPageData = leftContentIndex >= 0 ? bookData[leftContentIndex] : null;
  const rightPageData = rightContentIndex < bookData.length ? bookData[rightContentIndex] : null;

  if (!isOpen) return null;

  // USAR PORTAL: Renderiza el modal fuera del árbol DOM normal (directamente en body)
  // Esto evita problemas de z-index con padres transformados (framer-motion) y la barra de búsqueda.
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Main Container */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-6xl h-[90vh] md:h-[85vh] flex flex-col pointer-events-none"
      >
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 md:mb-4 pointer-events-auto text-white px-1 md:px-2 gap-2 shrink-0 relative z-50">
            <div className="flex flex-col">
                <h3 className="text-base md:text-xl font-display font-bold text-shadow-sm leading-tight max-w-[250px] md:max-w-2xl truncate">{title}</h3>
                <span className="text-[10px] md:text-xs text-gray-300">Facultad de Humanidades y Artes</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 self-end md:self-auto">
                 <button 
                    onClick={() => setShowSearch(!showSearch)}
                    className={`p-1.5 md:p-2 rounded-full transition-colors border cursor-pointer ${showSearch ? 'bg-[#f2e8d5] text-usc-blue border-[#f2e8d5]' : 'bg-white/10 hover:bg-white/20 border-white/20'}`}
                    title="Buscar"
                 >
                    <Search size={18} className="md:w-5 md:h-5" />
                 </button>

                {downloadUrl && (
                    <a 
                        href={downloadUrl}
                        target="_blank"
                        rel="noreferrer" 
                        className="flex items-center gap-2 px-3 py-1.5 md:py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-xs md:text-sm font-medium border border-white/20 cursor-pointer"
                        title="Descargar PDF Original"
                    >
                        <Download size={16} className="md:w-[18px]" />
                        <span className="hidden sm:inline">PDF</span>
                    </a>
                )}
                
                <button 
                    onClick={onClose} 
                    className="p-1.5 md:p-2 bg-white/10 hover:bg-usc-red rounded-full transition-colors border border-white/20 cursor-pointer z-50"
                    title="Cerrar"
                >
                    <X size={20} className="md:w-6 md:h-6" />
                </button>
            </div>
        </div>

        {/* --- SEARCH OVERLAY --- */}
        <AnimatePresence>
            {showSearch && (
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-20 right-4 z-50 w-[90%] md:w-96 bg-[#f2e8d5] rounded-xl shadow-2xl pointer-events-auto border border-[#d1cbb8] overflow-hidden flex flex-col max-h-[50vh] md:max-h-[60vh]"
                >
                    <div className="p-3 border-b border-[#d1cbb8] bg-[#e8e2cf]">
                        <input 
                            autoFocus
                            type="text" 
                            placeholder="Buscar palabra..." 
                            className="w-full px-3 py-2 bg-white/60 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-usc-blue/50 text-[#2a2a2a] placeholder-gray-500 border border-gray-300/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar relative bg-[#f2e8d5]">
                        <div 
                          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply"
                          style={{ backgroundImage: `url("${PAPER_TEXTURE}")` }}
                        ></div>

                        <div className="relative z-10">
                            {searchQuery === '' ? (
                                <div className="p-8 text-center text-xs text-gray-500 font-serif italic">Escribe para buscar...</div>
                            ) : filteredResults.length === 0 ? (
                                <div className="p-8 text-center text-xs text-gray-500 font-serif italic">No se encontraron resultados para "{searchQuery}".</div>
                            ) : (
                                <div>
                                    <div className="px-4 py-2 bg-[#e8e2cf]/50 text-xs font-bold text-gray-600 border-b border-[#d1cbb8]">
                                        {filteredResults.length} resultados encontrados
                                    </div>
                                    {filteredResults.map((res, i) => (
                                        <button 
                                            key={i}
                                            onClick={() => jumpToPage(res.idx)}
                                            className="w-full text-left p-4 hover:bg-black/5 border-b border-[#d1cbb8]/50 transition-colors group"
                                        >
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="font-bold text-usc-blue text-xs truncate pr-2">{res.page.title || `Página ${res.idx + 1}`}</span>
                                                <span className="text-[10px] bg-[#dcd6c5] text-gray-700 px-1.5 rounded">Pág. {res.idx + 1}</span>
                                            </div>
                                            <p className="text-[#4a4a4a] text-xs leading-snug font-serif italic">
                                                {res.snippet.split(new RegExp(`(${searchQuery})`, 'gi')).map((part, j) => 
                                                    part.toLowerCase() === searchQuery.toLowerCase() ? <span key={j} className="bg-yellow-200/80 text-black font-bold not-italic px-0.5 rounded-sm shadow-sm">{part}</span> : part
                                                )}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* --- BOOK VIEWPORT --- */}
        <div className="flex-1 relative perspective-1000 pointer-events-auto flex justify-center items-center min-h-0">
            
            <AnimatePresence mode="wait">
                {isBookClosed ? (
                    /* --- CLOSED BOOK VIEW (COVER) --- */
                    <motion.div
                        key="closed-book"
                        initial={{ rotateY: -90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: -90, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-[280px] md:w-[400px] h-full max-h-[500px] md:max-h-full bg-gradient-to-br from-[#b31419] via-[#8a0000] to-[#5c0000] rounded-r-lg shadow-[15px_15px_40px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col border-l-[14px] border-l-[#3d0000] overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                        onClick={handleOpenBook}
                    >
                         {/* --- EMBEDDED RUSTIC TEXTURE --- */}
                         <div 
                           className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"
                           style={{ backgroundImage: `url("${COVER_TEXTURE}")` }}
                         ></div>
                         <div 
                           className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
                           style={{ backgroundImage: `url("${PAPER_TEXTURE}")`, backgroundSize: '50px' }}
                         ></div>
                         
                         <div className="absolute inset-4 border-2 border-[#d4af37] opacity-60 rounded-r-sm shadow-sm mix-blend-overlay z-10"></div>
                         <div className="absolute inset-6 border border-[#d4af37] opacity-30 rounded-r-sm mix-blend-overlay z-10"></div>

                         <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8 text-center z-20">
                            {/* LOGO ACTUALIZADO: Acreditación Institucional */}
                            <img 
                                src={USC_FOOTER_LOGO_URL}
                                className="h-32 md:h-48 mb-6 md:mb-10 object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]" 
                                alt="Acreditación Institucional" 
                            />
                            
                            <div className="relative">
                                <h1 className="text-xl md:text-3xl font-display font-black text-[#e6c288] mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase leading-snug tracking-wider" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.2), -1px -1px 0px rgba(0,0,0,0.5)' }}>
                                    {title}
                                </h1>
                            </div>
                            
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6 opacity-70"></div>
                            <h2 className="text-sm md:text-lg text-[#e6c288] font-serif italic font-medium tracking-wide drop-shadow-md opacity-90">Facultad de Humanidades y Artes</h2>
                         </div>
                    </motion.div>
                ) : (
                    /* --- OPEN BOOK VIEW (ANTIQUE PAPER) --- */
                    <motion.div 
                        key="open-book"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex w-full h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] rounded-lg overflow-hidden border border-[#d1cbb8] bg-[#f2e8d5]"
                    >
                        {/* LEFT PAGE (Desktop Only) */}
                        <div className="hidden md:flex flex-1 bg-[#f2e8d5] border-r border-[#dcd6c5] relative flex-col shadow-[inset_-5px_0_20px_rgba(0,0,0,0.1)]">
                            <div 
                              className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply z-0"
                              style={{ backgroundImage: `url("${PAPER_TEXTURE}")` }}
                            ></div>
                            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-0"></div>
                            
                            <div 
                                className="flex-1 px-12 py-8 md:px-20 md:py-12 overflow-y-auto custom-scrollbar relative z-10 overscroll-contain transition-all duration-300 ease-out text-base text-[#2a2a2a] leading-relaxed selection:bg-[#e6c288] selection:text-black font-serif"
                                onClick={handleContentClick}
                            >
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={`left-${spreadIndex}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {leftPageData ? (
                                            <div dangerouslySetInnerHTML={{ __html: leftPageData.content as string }} />
                                        ) : (
                                            <div className="h-full flex flex-col items-center justify-center text-gray-400/50">
                                                <div className="border-4 border-dashed border-gray-400/30 p-8 rounded-lg">
                                                    <span className="font-serif italic text-base">Interior de Portada</span>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            
                            <div className="h-10 border-t border-[#dcd6c5] flex items-center justify-between px-8 bg-[#f2e8d5]/90 backdrop-blur-sm z-20 text-[10px] text-gray-600 font-serif shrink-0">
                                <span className="uppercase tracking-widest opacity-70">Universidad Santiago de Cali</span>
                                <span className="font-bold text-gray-800 font-sans">{leftContentIndex >= 0 ? leftContentIndex + 1 : ''}</span>
                            </div>
                        </div>

                        {/* RIGHT PAGE (Main View on Mobile) */}
                        <div className="flex-1 bg-[#f2e8d5] relative flex flex-col shadow-[inset_5px_0_20px_rgba(0,0,0,0.1)]">
                            <div 
                              className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply z-0"
                              style={{ backgroundImage: `url("${PAPER_TEXTURE}")` }}
                            ></div>
                            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-0"></div>

                            {/* CONTENT AREA: Adjusted padding, no huge bottom padding needed as footer is separate */}
                            <div 
                                className="flex-1 px-5 py-6 md:px-20 md:py-12 overflow-y-auto custom-scrollbar relative z-10 overscroll-contain transition-all duration-300 ease-out text-sm md:text-base text-[#2a2a2a] leading-relaxed selection:bg-[#e6c288] selection:text-black font-serif"
                                onClick={handleContentClick}
                            >
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={`right-${spreadIndex}-${mobilePageIndex}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="h-full"
                                    >
                                        {/* MOBILE VIEW */}
                                        <div className="md:hidden">
                                           {bookData[mobilePageIndex] ? (
                                             <div dangerouslySetInnerHTML={{ __html: (bookData[mobilePageIndex]?.content as string) || "" }} />
                                           ) : (
                                              <div className="h-full flex flex-col items-center justify-center text-gray-400/50">
                                                <p className="font-serif italic text-base">Fin del documento</p>
                                              </div>
                                           )}
                                        </div>
                                        
                                        {/* DESKTOP VIEW */}
                                        <div className="hidden md:block h-full">
                                            {rightPageData ? (
                                                <div dangerouslySetInnerHTML={{ __html: rightPageData.content as string }} />
                                            ) : (
                                                <div className="h-full flex flex-col items-center justify-center text-gray-400/50">
                                                    <p className="font-serif italic text-base">Fin del documento</p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* FOOTER BAR: Fixed Page Number & Mobile Navigation */}
                            <div className="h-14 md:h-10 border-t border-[#dcd6c5] flex items-center justify-between px-2 md:px-8 bg-[#f2e8d5]/95 backdrop-blur-sm z-20 text-[10px] text-gray-600 font-serif shrink-0">
                                
                                {/* MOBILE LEFT ARROW */}
                                <button 
                                    onClick={handlePrev} 
                                    disabled={spreadIndex === 0 && mobilePageIndex === 0}
                                    className="md:hidden p-2 rounded-full hover:bg-black/5 disabled:opacity-30 text-usc-blue"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                {/* PAGE INFO */}
                                <div className="flex flex-col items-center md:flex-row md:gap-4">
                                    <span className="font-bold text-gray-800 font-sans hidden md:inline">{rightContentIndex + 1}</span>
                                    <span className="md:hidden font-bold text-gray-800 font-sans text-xs">Pág. {mobilePageIndex + 1}</span>
                                    <span className="uppercase tracking-widest opacity-70 truncate hidden md:inline">Humanidades y Artes</span>
                                </div>

                                {/* MOBILE RIGHT ARROW */}
                                <button 
                                    onClick={handleNext} 
                                    disabled={(spreadIndex >= totalSpreads - 1) && (mobilePageIndex >= bookData.length - 1)}
                                    className="md:hidden p-2 rounded-full hover:bg-black/5 disabled:opacity-30 text-usc-blue"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* --- DESKTOP NAVIGATION ARROWS (Floating on sides) --- */}
                        <button 
                            onClick={handlePrev} 
                            disabled={spreadIndex === 0}
                            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#f2e8d5] text-[#5c0000] rounded-full shadow-lg disabled:opacity-0 disabled:pointer-events-none hover:bg-[#fff9f0] hover:scale-110 active:scale-95 transition-all z-30 border border-[#dcd6c5] opacity-90"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={handleNext} 
                            disabled={spreadIndex >= totalSpreads - 1}
                            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#f2e8d5] text-[#5c0000] rounded-full shadow-lg disabled:opacity-0 disabled:pointer-events-none hover:bg-[#fff9f0] hover:scale-110 active:scale-95 transition-all z-30 border border-[#dcd6c5] opacity-90"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default BookModal;