/**
 * LINEAMIENTOS PRÁCTICAS Y PASANTÍAS - PARTE 1
 * Contenido:
 * - Portada Oficial
 * - Consideraciones
 * - Capítulo 1: Generalidades (Art 1-2)
 */

import { BookPage } from '../../types';

export const GL_PART_1: BookPage[] = [
    {
      id: 201,
      title: "Portada Lineamientos",
      content: `
        <div class="h-full flex flex-col items-center justify-center text-center font-serif border-4 border-double border-orange-800 p-6 m-2">
          <div class="mb-8">
            <img src="https://irs.usc.edu.co/Logo-Acreditaci%C3%B3n-Institucional.png" alt="Acreditación Institucional" class="h-28 md:h-36 mx-auto mb-4 object-contain" />
          </div>
          <h1 class="font-black text-gray-900 text-xl md:text-2xl uppercase tracking-widest mb-4">Lineamientos Generales de Prácticas y Pasantías</h1>
          <div class="w-16 h-1 bg-usc-red mx-auto mb-4"></div>
          <h2 class="font-bold text-gray-700 text-lg uppercase mb-2">Resolución de Rectoría No. R-106</h2>
          <p class="text-sm text-gray-500 font-bold mb-8">(07 de Septiembre de 2024)</p>
          
          <div class="mt-auto text-xs text-gray-500 italic">
            <p>Universidad Santiago de Cali</p>
            <p>Rectoría</p>
          </div>
        </div>
      `
    },
    {
      id: 202,
      title: "Consideraciones",
      content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
          <h3 class="font-black text-center text-base mb-6 uppercase">CONSIDERANDO:</h3>
          <ol class="list-decimal pl-5 space-y-4">
            <li>Que la constitución política de 1991 en su artículo 67, que la educación es un derecho y un servicio público que permite a las personas el acceso al conocimiento y demás bienes de la cultura. Reconociendo en su artículo 69 la facultad otorgada a las universidades para dar sus propios órganos directivos y estatutos.</li>
            <li>Que la Ley 30 del 29 de diciembre de 1992 en su artículo 28, reconoce a las universidades el derecho a modificar sus estatutos, designar sus autoridades académicas y administrativas, crear y organizar sus programas académicos, definir y organizar sus labores formativas, académicas, docentes, científicas y culturales y adoptar sus correspondientes regímenes.</li>
          </ol>
        </div>
      `
    },
    {
      id: 203,
      title: "Consideraciones (Cont.)",
      content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
          <ol class="list-decimal pl-5 space-y-4" start="3">
            <li>De acuerdo con la ley 552 de 1999 artículo 2. Departamento Administrativo de la Función Pública, Acuerdos Consejo Superior de la Judicatura No PSAA10-7543 DE 2010 (diciembre 14); "Por medio de la cual se reglamenta la judicatura como requisito -alternativo para optar el título de abogado", PSAA12-9338 (marzo 27 de 2012) "Por medio de la cual se modifica el Acuerdo PSAA10-7543 por el cual se reglamenta la judicatura como requisito alternativo para optar el título de abogado", Acuerdo PCSJA17-10870 (Diciembre 13 de 2017); "Por medio del cual se reglamenta las prácticas de estudiantes universitarios en la Rama Judicial".</li>
            <li>De acuerdo con la Ley 1780 de 2016 (artículos 13, 15, 16, 17 y 18), y las Resoluciones 3546 de 2018 y 623 de 2020. Por el cual se regula las prácticas laborales del Ministerio de Trabajo y la Ley 2043 de 2020, establece los mecanismos normativos para facilitar el acceso al ámbito laboral.</li>
          </ol>
        </div>
      `
    },
    {
      id: 204,
      title: "Consideraciones (Cont. 2)",
      content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
          <ol class="list-decimal pl-5 space-y-4" start="5">
            <li>Además el Decretos 616 de 2021, Por el cual se adiciona el Parágrafo 2° al artículo 2.2.6.3.25 y la Sección 5 al Capítulo 2 del Título 6 de la Parte 2 del Libro 2 del Decreto 1072 de 2015... en lo relacionado con la equivalencia de experiencia profesional previa, el Decreto 952 de 2021... y se adiciona el capítulo 6 al título 5 de la parte 2 del libro 2 del Decreto 1083 del 2015.</li>
            <li>Que la regulación de la relación docencia servicio es competencia del Ministerio de Salud y Protección Social, Decreto 2376 de 2010.</li>
            <li>El Decreto 055 de 2015 reglamenta la afiliación de estudiantes al Sistema General de Riesgos Laborales e incluye como beneficiarios del sistema de riesgos laborales a todos los estudiantes de prácticas y pasantías.</li>
          </ol>
        </div>
      `
    },
    {
      id: 205,
      title: "Consideraciones (Cont. 3)",
      content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
          <ol class="list-decimal pl-5 space-y-4" start="8">
            <li>El Decreto 1075 DE 2015 PARTE 6, por la cual se reglamenta la educación para el trabajo y el desarrollo humano y estipula la obligatoriedad de realizar prácticas laborales dentro del proceso de formación.</li>
            <li>Que el artículo 10 del Acuerdo No. CS-02 de junio 15 de 2016, contentivo del reglamento de la Función de Extensión y Proyección Social dispuso en su artículo 20, las prácticas y pasantías es el campo que promueve la formación en extensión y proyección social.</li>
          </ol>

          <div class="mt-6 text-center">
             <h3 class="font-black text-base uppercase">RESUELVE:</h3>
          </div>
          <p class="mt-2"><span class="font-bold">ARTÍCULO 1°.</span> Aprobar los lineamientos generales de Prácticas y Pasantías de la Universidad Santiago de Cali como se establece en la presente resolución.</p>
        </div>
      `
    },
    {
      id: 206,
      title: "Capítulo 1 - Generalidades",
      content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <div class="mb-4 text-center">
             <h3 class="font-black text-base uppercase">CAPÍTULO 1</h3>
             <h4 class="font-bold text-sm uppercase">GENERALIDADES</h4>
           </div>

           <p class="mb-4"><span class="font-bold">ARTÍCULO 2°. Objeto.</span> La presente resolución tiene como objeto formular los lineamientos generales de Prácticas y Pasantías institucionales de la Universidad Santiago de Cali.</p>

           <p class="mb-4 font-bold">ARTÍCULO 3°. Definición de prácticas y pasantías.</p>
           <ul class="list-disc pl-5 space-y-3">
             <li><span class="font-bold">Práctica:</span> Actividad formativa desarrollada por un estudiante de programas de formación complementaria... durante un tiempo determinado, en un ambiente laboral real, con supervisión y sobre asuntos relacionados con su área de estudio o desempeño y su tipo de formación; para el cumplimiento de un requisito para culminar sus estudios u obtener un título.</li>
             <li><span class="font-bold">Pasantías:</span> Todas aquellas labores realizadas en diferentes organizaciones con quienes se establece convenio interinstitucional con el fin de ampliar y aplicar los conocimientos en una experiencia laboral que contribuya a reforzar su formación.</li>
           </ul>
        </div>
      `
    },
    {
      id: 207,
      title: "Capítulo 1 - Definiciones",
      content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <ul class="list-disc pl-5 space-y-3">
             <li><span class="font-bold">Escenario de práctica:</span> Entidad privada o estatal que recibe al practicantes o pasante para que realice actividades formativas relacionadas con su área de conocimiento durante el tiempo determinado.</li>
             <li><span class="font-bold">Practicante y/o Pasante:</span> Estudiante activo de programa de formación de educación superior de pregrado o programas técnicos laborales que realizan actividades de práctica laboral.</li>
             <li><span class="font-bold">Docente Coordinador – Docente Asesor- Docente líderes:</span> Docente vinculado a la institución educativa quien realiza actividades de orientación y seguimientos a los practicantes y/o pasantes.</li>
             <li><span class="font-bold">Tutor o Co-formador:</span> Persona designada por el escenario de práctica para orientar el desarrollo de la práctica y pasantía.</li>
           </ul>
        </div>
      `
    }
];