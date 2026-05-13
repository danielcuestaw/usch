import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { SectionId, SearchParams } from '../types';
import { SEARCH_INDEX } from '../data/search';

interface SearchBarProps {
  onSectionChange: (section: SectionId, params?: SearchParams) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSectionChange }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(SEARCH_INDEX); 
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const normalizeText = (text: string) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    const normalizedQuery = normalizeText(query);
    // Dividir la búsqueda en palabras individuales para una búsqueda más flexible (tipo diccionario)
    const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 0);

    const filtered = SEARCH_INDEX.filter(item => {
      const normTitle = normalizeText(item.title);
      const normKeywords = normalizeText(item.keywords);
      const fullText = `${normTitle} ${normKeywords}`;

      // Lógica "AND": Todas las palabras escritas deben estar presentes en el item.
      // Ejemplo: "Facultad Artes" encontrará "Facultad de Humanidades y Artes"
      return queryWords.every(word => fullText.includes(word));
    });

    setResults(filtered);
    setShowDropdown(true);
  }, [query]);

  const handleResultClick = (result: typeof SEARCH_INDEX[0]) => {
    // Si el resultado tiene info de libro (bookId y pageId), pasarlos
    const params: SearchParams | undefined = (result.bookId && result.pageId) 
        ? { bookId: result.bookId, pageId: result.pageId } 
        : undefined;

    onSectionChange(result.sectionId, params);
    
    // Scroll a la sección correspondiente
    const contentStart = document.getElementById('section-content-start');
    if (contentStart) {
        contentStart.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        window.scrollTo({ top: 400, behavior: 'smooth' });
    }

    setShowDropdown(false);
    setQuery('');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-center px-4 relative z-40" ref={dropdownRef}>
      <div className="relative w-full max-w-md group">
        
        <div className="absolute inset-y-0 left-0 pl-4 md:pl-5 flex items-center pointer-events-none z-10">
          <Search className="h-4 w-4 md:h-5 md:w-5 text-usc-blue/60 group-focus-within:text-usc-blue transition-colors duration-300" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { if(query.length > 0) setShowDropdown(true); }}
          className="block w-full pl-10 md:pl-12 pr-6 py-2.5 md:py-3.5 text-sm md:text-base rounded-full border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-500 shadow-[0_8px_30px_rgb(0,0,0,0.08)] focus:outline-none focus:ring-4 focus:ring-usc-blue/10 focus:border-usc-blue transition-all duration-300 hover:border-usc-blue/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          placeholder="Busca convenios, formatos, normas..."
        />

        {showDropdown && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] flex flex-col">
             <div className="overflow-y-auto custom-scrollbar">
               {results.map((result, index) => (
                 <button
                   key={index}
                   onClick={() => handleResultClick(result)}
                   className="w-full text-left px-5 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between group border-b border-gray-50 last:border-0"
                 >
                   <div className="flex-1 pr-4">
                     <span className="block font-bold text-gray-800 text-sm group-hover:text-usc-blue transition-colors truncate">
                       {result.title}
                     </span>
                     <span className="block text-[10px] text-gray-400 uppercase tracking-wider">
                       Ir a: {result.sectionId === 'home' ? 'Inicio' : result.sectionId === 'regulations' ? 'Normatividad' : result.sectionId === 'agreements' ? 'Convenios' : 'Carrera'}
                     </span>
                   </div>
                   <ChevronRight size={16} className="text-gray-300 group-hover:text-usc-red transition-colors shrink-0" />
                 </button>
               ))}
             </div>
          </div>
        )}

        {showDropdown && query.length > 0 && results.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 text-center">
            <p className="text-sm text-gray-500">No encontramos resultados para "{query}"</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default SearchBar;