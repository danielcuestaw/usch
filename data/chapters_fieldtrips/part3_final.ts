/**
 * LINEAMIENTOS SALIDAS - PARTE 3
 * Contenido:
 * - Artículos 9, 10, 11 (Trazabilidad, Operador)
 * - Título II (Vigencia)
 * - Cierre y Firmas
 */

import { BookPage } from '../../types';

export const FT_PART_3: BookPage[] = [
    {
        id: 115,
        title: "Trazabilidad Informe",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <p class="mb-4 font-bold">ARTÍCULO 9. Trazabilidad Para La Elaboración Del Informe:</p>
           <ol class="list-[lower-alpha] pl-5 space-y-3">
             <li><span class="font-bold">Etapa de preparación:</span> Formato institucional diseñada por el o los docentes responsables que ejecutarán durante la actividad.</li>
             <li><span class="font-bold">Etapa de desarrollo:</span> Desarrollo del formato; levantamiento y registro de la información.</li>
             <li><span class="font-bold">Etapa Posterior:</span> Elaboración de informes.</li>
           </ol>
           
           <p class="mt-6 mb-4 font-bold">ARTÍCULO 10. Estipulaciones especificas del operador:</p>
           <ol class="list-[lower-alpha] pl-5 space-y-2">
             <li>Diligenciar el formato de registro del operador.</li>
             <li>Anexar fotocopia de la cedula del conductor del transporte, fotocopia de la licencia de conducción, SOAT vigente, revisión técnico mecánica, tarjeta de propiedad.</li>
             <li>En el caso que sea Internacional, se requiere el itinerario de vuelo.</li>
           </ol>
        </div>
        `
    },
    {
        id: 116,
        title: "Vigencia y Cierre",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <p class="mb-4 text-xs italic"><span class="font-bold">Parágrafo:</span> La presente exigencia solamente será para aquellos casos en los que el operador no sea contratado y aprobado por la Vicerrectoría Administrativa.</p>

           <p class="mb-6"><span class="font-bold">ARTÍCULO 11.</span> Todos los artículos anteriores rigen también para los programas Educación para el Trabajo y Desarrollo Humano (Técnicos Laborales) de la Institución.</p>

           <div class="mb-4 text-center mt-8">
             <h3 class="font-black text-base uppercase">TÍTULO II</h3>
             <h4 class="font-black text-sm uppercase">DE LAS DISPOSICIONES FINALES</h4>
             <h4 class="font-black text-sm uppercase">CAPÍTULO 2: VIGENCIA</h4>
           </div>

           <p class="mb-4"><span class="font-bold">ARTÍCULO 12.</span> En cada Facultad, reglamentara las salidas académicas y determinara cual modalidad adoptara para sus programas, entre las definidas en el artículo 5 de la presente circular.</p>
           <p class="mb-4"><span class="font-bold">ARTÍCULO 13.</span> La presente circular se rige a partir de su aprobación por el Comité General de Extensión y Proyección Social.</p>
        </div>
        `
    },
    {
        id: 117,
        title: "Cierre Oficial",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-center mt-12">
             <p class="font-black uppercase mb-8 text-lg">COMUNÍQUESE Y CÚMPLASE</p>
             
             <p class="mb-16">Dado en Santiago de Cali a los 04 días del mes de Junio 2.019</p>

             <div class="space-y-12">
                <div>
                   <img src="https://i.ibb.co/6RJ4zXj/signature-placeholder.png" alt="Firma" class="h-16 mx-auto mb-2 opacity-50 hidden" />
                   <div class="w-64 border-b border-gray-400 mx-auto mb-4"></div>
                   <p class="font-bold uppercase text-lg">JORGE ELIECER OLAYA GARCERÁ</p>
                   <p class="text-sm font-bold text-gray-600">Dirección General de Extensión y Proyección Social</p>
                </div>
             </div>
        </div>
        `
    }
];