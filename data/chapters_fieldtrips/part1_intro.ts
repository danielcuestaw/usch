/**
 * LINEAMIENTOS SALIDAS - PARTE 1
 * Contenido:
 * - Portada
 * - Consideraciones
 * - Artículos 1 al 4 (Generalidades)
 */

import { BookPage } from '../../types';

export const FT_PART_1: BookPage[] = [
    {
        id: 101,
        title: "Portada Lineamientos",
        content: `
        <div class="h-full flex flex-col items-center justify-center text-center font-serif border-4 border-double border-usc-blue p-6 m-2">
          <div class="mb-8">
            <img src="https://irs.usc.edu.co/Logo-Acreditaci%C3%B3n-Institucional.png" alt="Acreditación Institucional" class="h-28 md:h-36 mx-auto mb-4 object-contain" />
          </div>
          <h1 class="font-black text-gray-900 text-2xl md:text-3xl uppercase tracking-widest mb-4">Lineamientos Generales de Salidas Académicas</h1>
          <div class="w-16 h-1 bg-usc-red mx-auto mb-4"></div>
          <h2 class="font-bold text-gray-700 text-lg uppercase mb-2">Circular Normativa No. 001</h2>
          <p class="text-sm text-gray-500 font-bold mb-8">(04 de Junio de 2019)</p>
          
          <div class="mt-auto text-xs text-gray-500 italic">
            <p>Dirección General de Extensión y Proyección Social</p>
            <p>Universidad Santiago de Cali</p>
          </div>
        </div>
        `
    },
    {
        id: 102,
        title: "Consideraciones",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <div class="mb-4 text-center">
             <h3 class="font-black text-base uppercase">CONSIDERANDO</h3>
           </div>
           
           <p class="mb-4">La Dirección General de Extensión y Proyección Social y el Comité General de Extensión y Proyección Social de la USC en uso de las facultades conferidas en el acuerdo CS 02 del 2016 "Por medio del cual se reglamenta la Función Sustantiva de Extensión y Proyección Social de la Universidad Santiago de Cali".</p>

           <ol class="list-decimal pl-5 space-y-4">
             <li>Que la Ley 30 del 29 de Diciembre de 1992 en su artículo 28, reconoce a las universidades el derecho a darse y modificar sus estatutos, designar sus autoridades académicas y administrativas, crear y organizar sus programas académicos, definir y organizar sus labores formativas, académicas, docentes, científicas y culturales y adoptar sus correspondientes regímenes.</li>
           </ol>
        </div>
        `
    },
    {
        id: 103,
        title: "Consideraciones (Cont.)",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <ol class="list-decimal pl-5 space-y-4" start="2">
             <li>Que el artículo 10 del Acuerdo No. CS-02 de Junio 15 de 2016, expresa que la Función de Extensión y Proyección Social se realiza mediante procesos académicos y administrativos... las cuales pueden llevarse a cabo a través de las siguientes modalidades:
                <ul class="list-[lower-alpha] pl-5 space-y-2 mt-2">
                   <li>Educación Continuada y para el trabajo y desarrollo humano.</li>
                   <li>Prestación de servicios de asesoría, consultoría, asistencia técnica, innovación, interventoría, formulación y ejecución de proyectos.</li>
                   <li>Prácticas y Pasantías académicas.</li>
                   <li>Realización de programas de carácter empresarial, comunitario, social.</li>
                   <li>Conciliación y Arbitraje.</li>
                </ul>
             </li>
           </ol>
           
           <div class="mt-8 text-center">
             <h3 class="font-black text-base uppercase">RESUELVE</h3>
           </div>
           <p class="mt-2"><span class="font-bold">ARTÍCULO 1.</span> Aprobar el Reglamento de Salidas Académicas Nacionales e Internacionales para los programas académicos de Prácticas y Pasantías de la Universidad Santiago de Cali.</p>
        </div>
        `
    },
    {
        id: 104,
        title: "Capítulo 1 - Generalidades",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <div class="mb-4 text-center">
             <h3 class="font-black text-base uppercase">TÍTULO I</h3>
             <h4 class="font-black text-sm uppercase">REGLAMENTO DE SALIDAS ACADÉMICAS</h4>
             <h4 class="font-black text-sm uppercase mt-2">CAPÍTULO 1: GENERALIDADES</h4>
           </div>

           <p class="mb-4"><span class="font-bold">ARTÍCULO 2. Definición:</span> Se considera Salida toda actividad académica complementaria que se realiza fuera del campus universitario, en la que participan estudiantes con supervisión del o los docente(s), para fortalecer el proceso enseñanza- aprendizaje a partir de la articulación entre la teoría y la práctica, se encontraran contenidas en el microcurriculo.</p>

           <p class="mb-2 font-bold">ARTÍCULO 3. Objetivos Generales:</p>
           <ol class="list-[lower-alpha] pl-5 space-y-2">
             <li>Relacionar el campo misional universitario con los conocimientos ya construidos en una realidad concreta y avizorar posibles escenarios laborales para los estudiantes.</li>
             <li>Realizar ejercicios prácticos contextualizados y relacionados con las áreas de su saber profesional e interdisciplinar.</li>
             <li>Evaluar conocimientos, habilidades, destrezas, actitudes y capacidad creativa de los estudiantes en un ambiente determinado.</li>
           </ol>
        </div>
        `
    },
    {
        id: 105,
        title: "Capítulo 1 - Consideraciones",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <p class="mb-4 font-bold">ARTÍCULO 4. Consideraciones Generales:</p>
           <ol class="list-[lower-alpha] pl-5 space-y-3">
             <li>Todas las actividades deben estar planeadas por los programas académicos de pregrado y posgrado con previo aval de la Decanatura.</li>
             <li>Todas las salidas académicas estarán sujetas a los lineamientos previstos en el presente documento.</li>
             <li>En el caso de salidas académicas no incluidas en el cronograma institucional, no se justificarán las inasistencias de los profesores ni de los estudiantes a las actividades académicas desarrolladas durante el tiempo en que efectué dichas salidas.</li>
             <li>Es importante considerar la participación interdisciplinaria que permita una formación más integradora para los estudiantes, es decir la coordinación entre dos o más docentes para la programación de salidas multipropósito.</li>
           </ol>
        </div>
        `
    },
    {
        id: 106,
        title: "Capítulo 1 - Consideraciones (Cont.)",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <ol class="list-[lower-alpha] pl-5 space-y-3" start="5">
             <li>Las salidas académicas deberán estar incluidas en la planeación inicial semestral de cada uno de los programas y deberán responder a objetivos específicos, producto de los requerimientos de formación integral avalados por las Direcciones de Programa.</li>
             <li>Los Directores de los programas académicos, priorizarán una visita y una salida de campo por núcleo temático en periodos académicos, preferiblemente sin exceder los Diez (10) días de desarrollo si es Nacional y quince (15) días si es Internacional. Solicitudes que impliquen una ampliación de los lineamientos enunciados deberá justificarse académicamente para la correspondiente aprobación del Consejo de Facultad respectivo.</li>
           </ol>
        </div>
        `
    },
    {
        id: 107,
        title: "Capítulo 1 - Consideraciones (Cont. 2)",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <ol class="list-[lower-alpha] pl-5 space-y-3" start="7">
             <li>El cumplimiento de las actividades programadas y de la conducta del grupo en general es responsabilidad del profesor o profesores en la orientación y supervisión de la visita o salida de campo.</li>
             <li>El docente (s) responsable(s) de la salida académica, velará por un eficiente y adecuado manejo del material o elementos utilizados durante la misma y los devolverá en las mismas condiciones en que fueron entregados... En caso de daño o pérdida... deberán reponerlos en el término de quince (15) días hábiles.</li>
             <li>El docente (s) responsable(s) de la salida académica, debe permanecer con los estudiantes hasta la finalización de la misma.</li>
             <li>Las conductas irregulares presentadas durante el desarrollo de la actividad serán reguladas, investigadas y sancionadas de acuerdo a lo estipulado en el reglamento estudiantil vigente.</li>
             <li>Hará parte de la presente disposición lo contenido en los reglamentos internos de cada Facultad.</li>
           </ol>
        </div>
        `
    }
];