import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FACULTY_AGREEMENTS_DATA } from '../data/faculty_agreements';
import { Building2, Phone, Mail, Hash, Search, GraduationCap, ChevronDown, ChevronUp, ExternalLink, Filter, Info, List } from 'lucide-react';

// --- SUB-COMPONENT: EXPANDABLE CELL ---
// Maneja la visualización de listas de teléfonos o correos
const ExpandableCell: React.FC<{ items: string[]; type: 'phone' | 'email' }> = ({ items, type }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Limpiar espacios en blanco
  const cleanItems = items.map(i => i.trim()).filter(i => i.length > 0);

  if (cleanItems.length === 0) return <span className="text-gray-400 italic">---</span>;
  
  // Si solo hay uno, mostrarlo normal
  if (cleanItems.length === 1) {
    return (
       <span className={`${type === 'email' ? 'break-all' : 'whitespace-nowrap'} text-gray-800 font-medium`}>
         {type === 'email' && cleanItems[0].includes('@') ? (
            <a href={`mailto:${cleanItems[0]}`} className="text-gray-800 hover:text-usc-red hover:underline transition-colors">
                {cleanItems[0]}
            </a>
         ) : (
            cleanItems[0]
         )}
       </span>
    );
  }

  // Si hay múltiples, mostrar lógica de expansión
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <span className={`font-medium ${type === 'email' ? 'break-all' : 'whitespace-nowrap'} text-gray-800`}>
        {type === 'email' && cleanItems[0].includes('@') ? (
            <a href={`mailto:${cleanItems[0]}`} className="text-gray-800 hover:text-usc-red hover:underline transition-colors">
                {cleanItems[0]}
            </a>
         ) : (
            cleanItems[0]
         )}
      </span>
      
      <AnimatePresence>
        {isExpanded && (
           <motion.div 
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: 'auto' }}
             exit={{ opacity: 0, height: 0 }}
             className="flex flex-col gap-1 overflow-hidden pl-2 border-l-2 border-gray-200 mt-1 w-full"
           >
              {cleanItems.slice(1).map((item, idx) => (
                <span key={idx} className={`text-xs text-gray-600 ${type === 'email' ? 'break-all' : 'whitespace-nowrap'}`}>
                    {type === 'email' && item.includes('@') ? (
                        <a href={`mailto:${item}`} className="text-gray-600 hover:text-usc-blue hover:underline transition-colors">
                            {item}
                        </a>
                    ) : (
                        item
                    )}
                </span>
              ))}
           </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
        className="text-[10px] flex items-center gap-1 font-bold text-usc-blue bg-blue-50 hover:bg-blue-100 px-2 py-0.5 rounded-full transition-colors mt-1"
      >
        {isExpanded ? (
            <>Ver menos <ChevronUp size={10} /></>
        ) : (
            <>Ver {cleanItems.length - 1} más... <ChevronDown size={10} /></>
        )}
      </button>
    </div>
  );
};


const FacultyAgreementsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('Todos');
  const [isMobileListOpen, setIsMobileListOpen] = useState(false);

  // Lógica de filtrado y ordenamiento
  const filteredAndSortedData = useMemo(() => {
    let data = FACULTY_AGREEMENTS_DATA;

    // 1. Filtrar por Programa Académico
    if (selectedProgram !== 'Todos') {
      data = data.filter((item) => 
        // Usamos includes para que coincida si el convenio tiene múltiples programas (ej: "Trabajo Social, Publicidad")
        item.programs.includes(selectedProgram)
      );
    }

    // 2. Filtrar por búsqueda de texto (Nombre o ID)
    if (searchTerm) {
        const query = searchTerm.toLowerCase();
        data = data.filter((item) => {
          return (
            item.name.toLowerCase().includes(query) ||
            item.id.toString().includes(query)
          );
        });
    }

    // 3. Ordenar alfabéticamente por Nombre
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedProgram]);

  return (
    <section className="w-full py-12 bg-white relative z-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la Sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-usc-blue inline-flex items-center gap-3">
            <Building2 className="text-usc-red" />
            Convenios Activos de la Facultad
          </h2>
          <p className="mt-2 text-gray-500 text-sm md:text-base">
            Listado específico para estudiantes de Humanidades y Artes.
          </p>
        </motion.div>

        {/* Contenedor Principal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-300 overflow-hidden"
        >
          {/* BARRA DE CONTROLES (Búsqueda + Filtro) */}
          <div className="bg-gray-50 p-4 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
             
             {/* Contador de resultados */}
             <div className="flex items-center text-gray-500 text-xs md:text-sm italic order-3 lg:order-1">
                <span>
                    <strong>{filteredAndSortedData.length}</strong> convenios encontrados 
                    {selectedProgram !== 'Todos' && <span> para <strong>{selectedProgram}</strong></span>}
                </span>
             </div>
             
             {/* Controles de Filtro y Búsqueda */}
             <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto order-1 lg:order-2">
                
                {/* 1. SELECTOR DE PROGRAMA */}
                <div className="relative w-full md:w-60">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                        <Filter size={16} className="text-gray-500" />
                    </div>
                    <select
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="w-full pl-9 pr-8 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-usc-blue/50 focus:border-usc-blue transition-all bg-white text-gray-700 appearance-none cursor-pointer hover:border-gray-400"
                    >
                        <option value="Todos">Todos los Programas</option>
                        <option value="Trabajo Social">Trabajo Social</option>
                        <option value="Comunicación Social">Comunicación Social</option>
                        <option value="Publicidad">Publicidad</option>
                    </select>
                    {/* Flecha personalizada para el select */}
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown size={14} className="text-gray-400" />
                    </div>
                </div>

                {/* 2. CAMPO DE BÚSQUEDA */}
                <div className="relative w-full md:w-72">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                       <Search size={16} className="text-gray-400" />
                    </div>
                    <input 
                      type="text"
                      placeholder="Buscar convenio por nombre..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-usc-blue/50 focus:border-usc-blue transition-all"
                    />
                </div>
             </div>
          </div>

          {/* 
             === VISTA MÓVIL (TARJETAS DESPLEGABLES) ===
             Visible solo en md:hidden (pantallas pequeñas)
          */}
          <div className="md:hidden bg-gray-50/50 p-4">
            
            {/* Botón de Despliegue */}
            <button
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
                className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-usc-blue font-bold active:scale-95 transition-transform"
            >
                <div className="flex items-center gap-3">
                    <List size={20} />
                    <span>{isMobileListOpen ? 'Ocultar' : 'Ver'} Listado de Convenios ({filteredAndSortedData.length})</span>
                </div>
                {isMobileListOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {/* Contenido Desplegable */}
            <AnimatePresence>
                {isMobileListOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 space-y-4">
                            {filteredAndSortedData.length > 0 ? (
                                filteredAndSortedData.map((item, index) => (
                                    <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col gap-3">
                                        {/* Cabecera Tarjeta */}
                                        <div className="flex justify-between items-start gap-3 border-b border-gray-100 pb-3">
                                            <div className="flex-1">
                                                <span className="text-[10px] font-bold text-gray-400 mb-1 block">#{index + 1}</span>
                                                {item.website ? (
                                                    <a 
                                                        href={item.website} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="font-bold text-lg text-usc-blue leading-tight flex items-center gap-2"
                                                    >
                                                        {item.name}
                                                        <ExternalLink size={14} className="text-gray-400" />
                                                    </a>
                                                ) : (
                                                    <h3 className="font-bold text-lg text-gray-800 leading-tight">{item.name}</h3>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Programas */}
                                        <div className="flex items-start gap-2">
                                            <GraduationCap size={16} className="text-gray-400 mt-0.5 shrink-0" />
                                            <span className="text-sm text-gray-600 italic leading-snug">{item.programs}</span>
                                        </div>

                                        {/* Contacto Grid */}
                                        <div className="grid grid-cols-1 gap-3 pt-1">
                                            <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-md">
                                                <Phone size={16} className="text-gray-400 mt-1 shrink-0" />
                                                <div className="w-full">
                                                    <span className="text-xs font-bold text-gray-500 block mb-0.5">Teléfonos</span>
                                                    <ExpandableCell items={item.phone.split(',')} type="phone" />
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-md">
                                                <Mail size={16} className="text-gray-400 mt-1 shrink-0" />
                                                <div className="w-full">
                                                    <span className="text-xs font-bold text-gray-500 block mb-0.5">Correos</span>
                                                    <ExpandableCell items={item.email.split(',')} type="email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-8 text-center text-gray-500 italic flex flex-col items-center gap-2 bg-white rounded-lg border border-gray-200">
                                    <Search size={32} className="text-gray-300" />
                                    <p>No se encontraron resultados.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>

          {/* 
             === VISTA DE ESCRITORIO (TABLA) ===
             Visible solo en hidden md:block
          */}
          <div className="hidden md:block">
            <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead className="bg-usc-blue text-white sticky top-0 z-10 shadow-md">
                  <tr>
                    <th className="p-4 font-bold text-sm tracking-wider w-16 text-center border-r border-white/20">
                        <div className="flex flex-col items-center gap-1">
                            <Hash size={14} />
                            <span>No.</span>
                        </div>
                    </th>
                    <th className="p-4 font-bold text-sm tracking-wider border-r border-white/20">
                        <div className="flex items-center gap-2">
                            <Building2 size={16} />
                            <span>Convenio</span>
                        </div>
                    </th>
                    <th className="p-4 font-bold text-sm tracking-wider w-40 border-r border-white/20">
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>Teléfono</span>
                        </div>
                    </th>
                    <th className="p-4 font-bold text-sm tracking-wider w-56 border-r border-white/20">
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>Correo Electrónico</span>
                        </div>
                    </th>
                    <th className="p-4 font-bold text-sm tracking-wider w-48">
                        <div className="flex items-center gap-2">
                            <GraduationCap size={16} />
                            <span>Programas</span>
                        </div>
                    </th>
                  </tr>
                </thead>
                
                <tbody className="text-gray-700 text-sm font-sans">
                  {filteredAndSortedData.length > 0 ? (
                    filteredAndSortedData.map((item, index) => (
                      <tr 
                        key={item.id} 
                        className={`
                          border-b border-gray-200 hover:bg-blue-50 transition-colors
                          ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        `}
                      >
                        <td className="p-3 text-center font-bold text-gray-400 border-r border-gray-200 align-top">
                          {index + 1}
                        </td>
                        
                        <td className="p-3 border-r border-gray-200 align-top">
                          <div className="flex flex-col gap-1">
                              {item.website ? (
                                <a 
                                  href={item.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-usc-blue hover:text-usc-red hover:underline decoration-usc-red/30 underline-offset-2 transition-all flex items-start gap-1 group font-semibold"
                                  title="Visitar sitio web oficial"
                                >
                                    <span>{item.name}</span>
                                    <ExternalLink size={12} className="mt-1 opacity-50 group-hover:opacity-100" />
                                </a>
                              ) : (
                                <span className="text-gray-800 font-semibold">{item.name}</span>
                              )}
                          </div>
                        </td>
                        
                        <td className="p-3 border-r border-gray-200 align-top">
                           <ExpandableCell items={item.phone.split(',')} type="phone" />
                        </td>

                        <td className="p-3 text-gray-600 border-r border-gray-200 align-top">
                           <ExpandableCell items={item.email.split(',')} type="email" />
                        </td>

                        <td className="p-3 text-gray-500 italic text-xs align-top">
                           {item.programs || "---"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-gray-500 italic">
                        <div className="flex flex-col items-center gap-2">
                            <Search size={32} className="text-gray-300" />
                            <p>No se encontraron convenios {searchTerm && `con el nombre "${searchTerm}"`} {selectedProgram !== 'Todos' && `para el programa "${selectedProgram}"`}.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Pie de Tabla Informativo */}
          <div className="bg-gray-100 p-3 text-xs text-gray-500 text-center border-t border-gray-300 font-medium">
             {filteredAndSortedData.length} registros mostrados. Ordenado alfabéticamente (A-Z).
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FacultyAgreementsTable;