import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FACULTY_AGREEMENTS_DATA } from '../data/faculty_agreements';
import { Building2, Phone, Mail, Hash, Search, ChevronDown, ChevronUp, ExternalLink, Briefcase, List } from 'lucide-react';

interface MajorAgreementsTableProps {
  programName: string; // Ej: "Trabajo Social", "Publicidad"
}

// --- SUB-COMPONENT: EXPANDABLE CELL (Reutilizado para mantener consistencia) ---
const ExpandableCell: React.FC<{ items: string[]; type: 'phone' | 'email' }> = ({ items, type }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cleanItems = items.map(i => i.trim()).filter(i => i.length > 0);

  if (cleanItems.length === 0) return <span className="text-gray-400 italic">---</span>;
  
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
        {isExpanded ? (<>Ver menos <ChevronUp size={10} /></>) : (<>Ver {cleanItems.length - 1} más... <ChevronDown size={10} /></>)}
      </button>
    </div>
  );
};

const MajorAgreementsTable: React.FC<MajorAgreementsTableProps> = ({ programName }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileListOpen, setIsMobileListOpen] = useState(false);

  // Lógica de filtrado
  const filteredAndSortedData = useMemo(() => {
    let data = FACULTY_AGREEMENTS_DATA.filter(item => item.programs.includes(programName));

    if (searchTerm) {
        const query = searchTerm.toLowerCase();
        data = data.filter((item) => {
          return (
            item.name.toLowerCase().includes(query) ||
            item.id.toString().includes(query)
          );
        });
    }
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, programName]);

  return (
    <div className="w-full pt-10 pb-4">
        
        {/* Título Creativo de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 px-1">
            <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 flex items-center gap-2">
                    <Briefcase className="text-usc-blue" size={24} />
                    <span>Red de Aliados y Convenios</span>
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                    Escenarios habilitados exclusivamente para <strong>{programName}</strong>.
                </p>
            </div>
            
            {/* Barra de Búsqueda Integrada */}
            <div className="relative w-full md:w-72">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-gray-400" />
                </div>
                <input 
                    type="text"
                    placeholder={`Buscar en ${programName}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-usc-blue/50 focus:border-usc-blue transition-all bg-white shadow-sm"
                />
            </div>
        </div>

        {/* Contenedor Principal */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden"
        >
            {/* Contador */}
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 text-xs text-gray-500 font-bold text-right">
                {filteredAndSortedData.length} registros encontrados
            </div>

            {/* 
               === VISTA MÓVIL (TARJETAS DESPLEGABLES) === 
               md:hidden -> Solo visible en móvil
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
                                            <div className="border-b border-gray-100 pb-3">
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
               === VISTA ESCRITORIO (TABLA) === 
               hidden md:block -> Solo visible en desktop
            */}
            <div className="hidden md:block overflow-x-auto">
                <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead className="bg-gradient-to-r from-usc-blue to-usc-darkBlue text-white sticky top-0 z-10 shadow-sm">
                            <tr>
                                <th className="p-3 font-bold text-xs tracking-wider w-14 text-center border-r border-white/10">
                                    <Hash size={14} className="mx-auto" />
                                </th>
                                <th className="p-3 font-bold text-xs tracking-wider border-r border-white/10">
                                    CONVENIO / ENTIDAD
                                </th>
                                <th className="p-3 font-bold text-xs tracking-wider w-40 border-r border-white/10">
                                    CONTACTO TELEFÓNICO
                                </th>
                                <th className="p-3 font-bold text-xs tracking-wider w-64">
                                    CORREO ELECTRÓNICO
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {filteredAndSortedData.length > 0 ? (
                                filteredAndSortedData.map((item, index) => (
                                    <tr 
                                        key={item.id} 
                                        className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                                    >
                                        <td className="p-3 text-center font-bold text-gray-400 border-r border-gray-100 text-xs align-top">
                                            {index + 1}
                                        </td>
                                        <td className="p-3 border-r border-gray-100 align-top">
                                            {item.website ? (
                                                <a 
                                                  href={item.website} 
                                                  target="_blank" 
                                                  rel="noopener noreferrer"
                                                  className="font-bold text-gray-800 hover:text-usc-blue flex items-start gap-1 group"
                                                >
                                                    <span>{item.name}</span>
                                                    <ExternalLink size={10} className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </a>
                                            ) : (
                                                <span className="font-bold text-gray-800">{item.name}</span>
                                            )}
                                        </td>
                                        <td className="p-3 border-r border-gray-100 align-top">
                                            <ExpandableCell items={item.phone.split(',')} type="phone" />
                                        </td>
                                        <td className="p-3 text-gray-600 align-top">
                                            <ExpandableCell items={item.email.split(',')} type="email" />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-gray-500 italic">
                                        No se encontraron convenios con ese nombre.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    </div>
  );
};

export default MajorAgreementsTable;