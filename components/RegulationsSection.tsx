import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Map, Download, ChevronRight, FileText } from 'lucide-react';
import BookModal from './BookModal';
import { REGULATIONS_DATA } from '../data/regulations';
import { FIELDTRIPS_DATA } from '../data/fieldtrips';
import { GUIDELINES_DATA } from '../data/guidelines';
import { DOWNLOAD_FORMATS, PDF_URLS } from '../data/downloads';
import { SearchParams } from '../types';

interface RegulationsSectionProps {
    searchParams?: SearchParams | null;
}

const RegulationsSection: React.FC<RegulationsSectionProps> = ({ searchParams }) => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [bookType, setBookType] = useState<'reglamento' | 'salidas' | 'lineamientos'>('reglamento');
  const [initialPageId, setInitialPageId] = useState<number | undefined>(undefined);
  
  // Efecto para reaccionar a la búsqueda profunda
  useEffect(() => {
    if (searchParams && searchParams.bookId) {
        setBookType(searchParams.bookId);
        setInitialPageId(searchParams.pageId);
        setIsBookOpen(true);
    }
  }, [searchParams]);

  const openBook = (type: 'reglamento' | 'salidas' | 'lineamientos') => {
    setBookType(type);
    setInitialPageId(undefined); // Resetear página inicial si se abre manualmente
    setIsBookOpen(true);
  };

  // Logic to determine which data to show in the book
  let currentBookData = REGULATIONS_DATA;
  let currentBookTitle = "Reglamento de Prácticas";
  let currentDownloadUrl: string | undefined = PDF_URLS.regulations;

  if (bookType === 'salidas') {
      currentBookData = FIELDTRIPS_DATA;
      currentBookTitle = "Lineamientos Generales de Salidas Académicas";
      currentDownloadUrl = PDF_URLS.fieldtrips;
  } else if (bookType === 'lineamientos') {
      currentBookData = GUIDELINES_DATA;
      currentBookTitle = "Lineamientos de Prácticas y Pasantías";
      currentDownloadUrl = PDF_URLS.guidelines;
  }

  return (
    <section id="normatividad-formatos" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 bg-slate-50/50">
      
      {/* 1. TÍTULO PRINCIPAL */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-usc-blue relative inline-block">
          Normatividad y Formatos
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-usc-red rounded-full"></span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- COLUMNA IZQUIERDA: INFORMACIÓN CONTEXTUAL --- */}
          <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-center"
              >
                  <p className="text-gray-700 text-lg leading-loose text-justify mb-8 font-medium">
                      La normatividad y los formatos institucionales constituyen el marco legal y administrativo fundamental para el desarrollo de tus prácticas académicas y salidas de campo.
                  </p>
                  <p className="text-gray-700 text-lg leading-loose text-justify font-medium">
                      Es indispensable que conozcas el <strong>Reglamento de Prácticas</strong>, los <strong>Lineamientos de Prácticas</strong> y los <strong>Lineamientos de Salidas</strong>, así como el correcto diligenciamiento de los formatos requeridos para formalizar tu proceso ante la Facultad de Humanidades y Artes.
                  </p>
              </motion.div>
          </div>

          {/* --- COLUMNA DERECHA: NORMATIVIDAD (ACCORDIONS) Y FORMATOS --- */}
          <div className="lg:col-span-7 space-y-10">
              
              {/* SUBTÍTULO 1: NORMATIVIDAD */}
              <div>
                  <h3 className="text-xl font-bold text-usc-blue mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-usc-red"></span>
                      Normatividad
                  </h3>
                  
                  {/* Acordeones Compactos */}
                  <div className="space-y-3">
                      {/* Item 1: Reglamento (Facultad) */}
                      <motion.div 
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer hover:border-usc-blue/50 transition-colors"
                          onClick={() => openBook('reglamento')}
                      >
                          <div className="p-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                  <div className="bg-blue-50 text-usc-blue p-2 rounded-md">
                                      <Book size={20} />
                                  </div>
                                  <div>
                                      <span className="font-bold text-gray-800 text-sm md:text-base block">Reglamento de Prácticas</span>
                                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Facultad de Humanidades y Artes</span>
                                  </div>
                              </div>
                              <ChevronRight className="text-gray-400" size={20} />
                          </div>
                      </motion.div>

                      {/* Item 2: Lineamientos Generales (R-106) - NUEVO */}
                      <motion.div 
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer hover:border-orange-500/50 transition-colors"
                          onClick={() => openBook('lineamientos')}
                      >
                          <div className="p-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                  <div className="bg-orange-50 text-orange-700 p-2 rounded-md">
                                      <FileText size={20} />
                                  </div>
                                  <div>
                                      <span className="font-bold text-gray-800 text-sm md:text-base block">Lineamientos de Prácticas y Pasantías</span>
                                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Resolución R-106 (General)</span>
                                  </div>
                              </div>
                              <ChevronRight className="text-gray-400" size={20} />
                          </div>
                      </motion.div>

                      {/* Item 3: Lineamientos Salidas */}
                      <motion.div 
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer hover:border-green-600/50 transition-colors"
                          onClick={() => openBook('salidas')}
                      >
                          <div className="p-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                  <div className="bg-green-50 text-green-700 p-2 rounded-md">
                                      <Map size={20} />
                                  </div>
                                  <div>
                                      <span className="font-bold text-gray-800 text-sm md:text-base block">Lineamientos de Salidas</span>
                                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Salidas Académicas</span>
                                  </div>
                              </div>
                              <ChevronRight className="text-gray-400" size={20} />
                          </div>
                      </motion.div>
                  </div>
              </div>

              {/* SUBTÍTULO 2: FORMATOS */}
              <div>
                  <h3 className="text-xl font-bold text-usc-blue mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-usc-red"></span>
                      Formatos Académicos
                  </h3>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <ul className="divide-y divide-gray-100">
                          {DOWNLOAD_FORMATS.map((item, index) => (
                              <li key={item.id} className="group hover:bg-gray-50 transition-colors">
                                  <div className="flex items-center justify-between px-5 py-3.5">
                                      <div className="flex items-center gap-3 overflow-hidden">
                                          <span className="text-gray-400 font-mono text-xs w-4">{index + 1}.</span>
                                          {/* ENLACE EN EL NOMBRE */}
                                          <a 
                                            href={item.url} 
                                            className="text-sm md:text-base font-bold text-gray-700 group-hover:text-usc-blue hover:underline decoration-usc-blue/30 underline-offset-2 transition-all truncate"
                                          >
                                              {item.name}
                                          </a>
                                      </div>
                                      <a 
                                        href={item.url}
                                        className="text-gray-300 group-hover:text-usc-red transition-colors p-1"
                                        title="Descargar"
                                      >
                                          <Download size={18} />
                                      </a>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>

          </div>
      </div>

      <BookModal 
        isOpen={isBookOpen} 
        onClose={() => setIsBookOpen(false)} 
        title={currentBookTitle}
        data={currentBookData}
        downloadUrl={currentDownloadUrl}
        initialPageId={initialPageId} // Prop para salto automático
      />

    </section>
  );
};

export default RegulationsSection;