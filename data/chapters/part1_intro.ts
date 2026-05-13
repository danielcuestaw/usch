/**
 * PARTE 1: INTRODUCCIÓN Y CONSIDERACIONES GENERALES
 * ----------------------------------------------------------------------
 * Contenido:
 * - Portada Oficial
 * - Consideraciones (Preámbulo)
 * - Capítulo 1: Artículos 1 y 2 (Definiciones básicas)
 */

import { BookPage } from '../../types';

export const PART_1: BookPage[] = [
    {
      id: 1,
      title: "Portada Oficial",
      content: `
        <div class="h-full flex flex-col items-center justify-center text-center font-serif border-4 border-double border-gray-800 p-6 m-2">
          <div class="mb-8">
            <img src="https://irs.usc.edu.co/Logo-Acreditaci%C3%B3n-Institucional.png" alt="Acreditación Institucional" class="h-28 md:h-36 mx-auto mb-4 object-contain" />
          </div>
          <h1 class="font-black text-gray-900 text-2xl md:text-3xl uppercase tracking-widest mb-4">Reglamento de Prácticas y Pasantías</h1>
          <div class="w-16 h-1 bg-usc-red mx-auto mb-4"></div>
          <h2 class="font-bold text-gray-700 text-xl uppercase mb-8">Facultad de Humanidades y Artes</h2>
          
          <div class="mt-auto text-sm text-gray-500 italic">
            <p>Resolución No. 001</p>
            <p>27 de Junio de 2024</p>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: "Consideraciones",
      content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
          <h3 class="font-black text-center text-base mb-6 uppercase">CONSIDERACIONES</h3>
          <ol class="list-decimal pl-5 space-y-4">
            <li>La Facultad de Humanidades y Artes a través de su Consejo de Facultad como su máximo órgano rector y como parte de sus atribuciones, propone al Consejo Académico aquellas reglamentaciones que se requieran.</li>
            <li>Que, en la propuesta curricular de los programas de Publicidad, Comunicación Social y Trabajo Social se concibe la realización de una práctica profesional.</li>
            <li>Que los estudiantes de todos los programas académicos de la Universidad Santiago de Cali pueden realizar pasantías de manera voluntaria.</li>
            <li>Que el programa de Tecnología en Producción Transmedia, por su componente teórico, conceptual y tecnológico requiere dinamizar las pasantías, para ampliar su campo de acción profesional en los nuevos mercados de trabajo profesional, social, creativo y tecnológico que experimenta el mundo actualmente.</li>
          </ol>
        </div>
      `
    },
    {
      id: 3,
      title: "Consideraciones (Cont.)",
      content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
          <ol class="list-decimal pl-5 space-y-4" start="5">
            <li>Que la Dirección General de Extensión y Proyección Social a través de la Resolución de Rectoría No. R del 30 de mayo de 2024 expidió los Lineamientos Generales de Prácticas y Pasantías de la Universidad Santiago de Cali.</li>
            <li>Que es necesario definir los parámetros y procedimientos por los cuales se regirán las prácticas y pasantías de los programas académicos de la Facultad de Humanidades y Artes.</li>
          </ol>

           <h3 class="font-black text-center text-base mt-8 mb-4 uppercase">RESUELVE:</h3>
           
           <p class="mb-4">
             <span class="font-bold">ARTÍCULO 1. Objeto:</span> Reglamentar las prácticas y pasantías de los programas académicos de la Facultad de Humanidades y Artes.
           </p>
        </div>
      `
    },
    {
      id: 4,
      title: "Capítulo 1",
      content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <div class="mb-4 text-center">
             <h3 class="font-black text-base uppercase">CAPÍTULO 1</h3>
             <h4 class="font-bold text-sm uppercase">CONSIDERACIONES GENERALES</h4>
           </div>

           <p class="mb-4">
             <span class="font-bold">ARTÍCULO 2. Definición de Práctica y Pasantías:</span> Según el Artículo 20 del Acuerdo No. CS-02 de Junio 15 de 2016, y demás normas que lo modifiquen, adicionen o deroguen, las Prácticas y Pasantías promueven la formación en Extensión y Proyección Social que sirve de apoyo tanto a los programas curriculares de la Universidad como a su entorno, brindando a los estudiantes la orientación para la aplicación de sus conocimientos, a los empresarios y comunidad en general la capacitación y orientación e implementación para un mejor aprovechamiento de las prácticas y pasantías de Extensión y los servicios de docencia – asistenciales.
           </p>
        </div>
      `
    },
    {
        id: 5,
        title: "Capítulo 1 (Definiciones)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <ul class="list-disc pl-5 space-y-2">
             <li><span class="font-bold">Práctica:</span> Actividad formativa desarrollada por un estudiante de programas de formación complementaria ofrecidos por las escuelas normales superiores, educación superior de pregrado y posgrado, educación para el trabajo y desarrollo humano, así como de formación profesional integral del SENA, durante un tiempo determinado, en un ambiente laboral real, con supervisión y sobre asuntos relacionados con su área de estudio o desempeño y su tipo de formación; para el cumplimiento de un requisito para culminar sus estudios u obtener un título que lo acreditará para el desempeño laboral.</li>
             <li><span class="font-bold">Pasantías:</span> Todas aquellas labores realizadas en diferentes organizaciones con quienes se establece convenio interinstitucional con el fin de ampliar y aplicar los conocimientos en una experiencia laboral que contribuya a reforzar su formación y poner sus capacidades al servicio de la comunidad.</li>
           </ul>
          </div>
        `
    },
    {
        id: 6,
        title: "Capítulo 1 (Definiciones Cont.)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ul class="list-disc pl-5 space-y-3 mb-6">
               <li><span class="font-bold">Escenario de práctica:</span> Entidad privada o estatal que recibe al practicantes o pasante para que realice actividades formativas relacionadas con su área de conocimiento durante el tiempo determinado.</li>
               <li><span class="font-bold">Practicante y/o Pasante:</span> Estudiante activo de programa de formación de educación superior de pregrado o programas técnicos laborales que realizan actividades de práctica laboral.</li>
               <li><span class="font-bold">Docente Coordinador – Docente Asesor- Docente líderes:</span> Docente vinculado a la institución educativa quien realiza actividades de orientación y seguimientos a los practicantes y/o pasantes en el desarrollo de la práctica y pasantías.</li>
               <li><span class="font-bold">Tutor o Co-formador:</span> Persona designada por el escenario de práctica para orientar el desarrollo de la práctica y pasantía.</li>
             </ul>
          </div>
        `
    },
    {
        id: 7,
        title: "Capítulo 1 (Parágrafos)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <p class="mb-3"><span class="font-bold">Parágrafo 1º.</span> Las prácticas son obligatorias para los programas de Publicidad, Comunicación Social y Trabajo Social; para ello cuentan con la asesoría y supervisión de un docente vinculado al Departamento de Humanidades y Artes a través de la asignatura correspondiente a la práctica.</p>

             <p class="mb-3"><span class="font-bold">Parágrafo 2º.</span> Las pasantías son opcionales para los estudiantes, no requieren la asesoría de un docente de la Universidad Santiago de Cali, aunque puede que de manera voluntaria y en apoyo al cumplimiento de las funciones sustantivas de docencia, extensión y/o investigación, uno o varios docentes brinden orientación al estudiante, y ésta se debe realizar con una organización con la que se tenga aprobado convenio marco.</p>

             <p><span class="font-bold">Parágrafo 3º.</span> La pasantía es una apuesta de inserción en el mundo del trabajo para los estudiantes y una oportunidad para reconocer los retos que imponen los mercados de trabajo a la academia. La pasantía podría estar asociada al diseño y/o consolidación de los proyectos integradores del programa, cuyo objetivo será fortalecer su labor en el sector en que se vincule el estudiante.</p>
          </div>
        `
    }
];