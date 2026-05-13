import { useMemo } from 'react';
import { BookPage } from '../types';

/**
 * Custom Hook: useBookContent
 * Se encarga de procesar los datos del libro:
 * 1. Generar automáticamente la Tabla de Contenido (TOC) basada en las páginas.
 * 2. Filtrar el contenido basado en la búsqueda del usuario.
 */
export const useBookContent = (originalData: BookPage[], searchQuery: string) => {
  
  // 1. Lógica de Generación de Datos (Incluyendo Tabla de Contenido)
  const processedBookData = useMemo(() => {
     if (originalData.length <= 1) return originalData;
     
     const coverPage = originalData[0];
     const contentPages = originalData.slice(1);
     const ITEMS_PER_PAGE = 8;
     const totalTocPages = Math.ceil(contentPages.length / ITEMS_PER_PAGE);
     const tocPages: BookPage[] = [];

     for (let i = 0; i < totalTocPages; i++) {
        const startIdx = i * ITEMS_PER_PAGE;
        const chunk = contentPages.slice(startIdx, startIdx + ITEMS_PER_PAGE);
        
        tocPages.push({
            id: 0, 
            title: "Tabla de Contenido",
            content: `
               <div class="h-full flex flex-col">
                  <h2 class="font-black text-center text-xl uppercase mb-6 border-b-2 border-usc-blue pb-2 text-usc-blue mix-blend-multiply">
                    Tabla de Contenido ${totalTocPages > 1 ? `(${i + 1}/${totalTocPages})` : ''}
                  </h2>
                  <div class="flex-1 overflow-y-auto custom-scrollbar">
                     <ul class="space-y-4 text-sm">
                        ${chunk.map((page, chunkIdx) => {
                            return `
                            <li class="flex items-start justify-between group cursor-pointer hover:bg-black/5 p-2 rounded transition-colors border-b border-gray-600/20 border-dashed" data-title="${page.title}"> 
                                <span class="font-bold text-gray-800 group-hover:text-usc-blue pointer-events-none text-xs md:text-sm text-left">${page.title || `Sección ${startIdx + chunkIdx + 1}`}</span>
                                <span class="text-usc-red opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold pointer-events-none">Ir &rarr;</span>
                            </li>
                            `;
                        }).join('')}
                     </ul>
                  </div>
               </div>
            `
        });
     }
     return [coverPage, ...tocPages, ...contentPages];
  }, [originalData]);

  // 2. Lógica de Búsqueda
  const searchResults = useMemo(() => {
      if (!searchQuery || searchQuery.length < 2) return [];
      
      const results: { page: BookPage, idx: number, snippet: string }[] = [];
      const lowerQuery = searchQuery.toLowerCase();

      processedBookData.forEach((page, idx) => {
          // Limpiar HTML para buscar solo en texto plano
          const rawContent = page.content?.toString().replace(/<[^>]*>/g, ' ') || '';
          const cleanContent = rawContent.replace(/\s+/g, ' ').trim();
          const lowerContent = cleanContent.toLowerCase();
          const lowerTitle = page.title?.toLowerCase() || '';

          if (lowerTitle.includes(lowerQuery) || lowerContent.includes(lowerQuery)) {
              let snippet = "";
              const matchIndex = lowerContent.indexOf(lowerQuery);
              
              if (matchIndex !== -1) {
                  const start = Math.max(0, matchIndex - 30);
                  const end = Math.min(cleanContent.length, matchIndex + lowerQuery.length + 40);
                  snippet = "..." + cleanContent.substring(start, end) + "...";
              } else {
                  snippet = "Encontrado en el título de la sección.";
              }
              results.push({ page, idx, snippet });
          }
      });
      return results;
  }, [searchQuery, processedBookData]);

  return { processedBookData, searchResults };
};