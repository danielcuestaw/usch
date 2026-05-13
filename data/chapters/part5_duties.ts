/**
 * PARTE 5: DEBERES Y OBLIGACIONES
 * ----------------------------------------------------------------------
 * Contenido:
 * - Capítulo 6: Artículos 19 y 20
 * - Lista de deberes del estudiante (asistencia, confidencialidad, imagen institucional)
 * - Proceso para estudiantes de reintegro
 */

import { BookPage } from '../../types';

export const PART_5: BookPage[] = [
    {
        id: 46,
        title: "Capítulo 6 - Deberes",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <div class="mb-4 text-center">
               <h3 class="font-bold text-base uppercase">CAPÍTULO 6</h3>
               <h4 class="font-bold text-sm uppercase">DEBERES Y OBLIGACIONES DEL ESTUDIANTE PARA PRÁCTICAS Y PASANTÍAS</h4>
             </div>

             <p class="mb-4 font-bold">ARTÍCULO 19. Son deberes y obligaciones del Estudiante:</p>
             <ol class="list-[lower-alpha] pl-5 space-y-2">
                <li>Permanecer informado acerca de los procesos de prácticas, cronogramas de actividades, así como todo lo señalado en el presente reglamento.</li>
                <li>El estudiante deberá matricular su práctica en el periodo académico en el cual la desarrollará.</li>
                <li>Conocer y cumplir a cabalidad el reglamento estudiantil, los reglamentos de prácticas y pasantías y demás normas estatutarias del escenario de prácticas.</li>
                <li>Acatar las disposiciones internas de la Universidad.</li>
                <li>Cumplir las normas éticas y morales de la organización o entidad donde se encuentra vinculado</li>
             </ol>
          </div>
        `
    },
    {
        id: 47,
        title: "Capítulo 6 - Deberes (Cont.)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ol class="list-[lower-alpha] pl-5 space-y-2" start="6">
                <li>No asistir en estado de embriaguez o bajo el efecto de sustancias psicoactivas al lugar de práctica.</li>
                <li>Conservar una presentación personal apropiada con el lugar de práctica</li>
                <li>Responsabilizarse por las herramientas y documentos proporcionados por la organización o entidad, durante el desarrollo de la práctica.</li>
                <li>Toda la información obtenida del sitio de práctica será considerada confidencial, por tanto, no podrá ser transmitida o utilizada fuera de la organización o entidad.</li>
                <li>El estudiante debe iniciar su práctica el día que la organización o entidad lo estipule y cumpliendo con el horario acordado.</li>
             </ol>
          </div>
        `
    },
    {
        id: 48,
        title: "Capítulo 6 - Deberes (Cont. 2)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ol class="list-[lower-alpha] pl-5 space-y-2" start="11">
                <li>Asistir a las reuniones, seminarios o cursos convocados por el área de prácticas y pasantías.</li>
                <li>Durante el desarrollo y evaluación de la práctica los estudiantes deben ser conscientes de que son portadores de la imagen y del buen nombre de la Universidad.</li>
                <li>Realizar la totalidad de las actividades a las que se compromete en el desarrollo de su práctica y hasta la culminación de la vinculación.</li>
                <li>Comunicar oportunamente a la Universidad, cualquier situación anormal que se presente con el escenario de prácticas. Informando al docente coordinador y/o docente asesor las dificultades que surjan en el proceso de las prácticas y/o pasantía, para que esta proceda mediar y tomar las medidas necesarias para resolverlas.</li>
             </ol>
          </div>
        `
    },
    {
        id: 49,
        title: "Capítulo 6 - Deberes (Cont. 3)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ol class="list-[lower-alpha] pl-5 space-y-2" start="15">
                <li>Realizar los informes de práctica, respetando los plazos de entrega que estipulen los programas académicos.</li>
                <li>Durante el semestre de realización de la práctica o en el período inmediatamente anterior a su ingreso a la práctica, el estudiante deberá asistir a las reuniones, seminarios o cursos a los que la Facultad lo cite para informarlo y capacitarlo con respecto al proceso de la práctica.</li>
                <li>En los casos en que la naturaleza de su práctica o pasantía así no amerite, es necesario que el estudiante se encuentre al día en su respectivo plan de vacunación. Si no lo hiciere no podría iniciar su práctica o pasantía</li>
                <li>Utilizar los canales regulares de comunicación para la solución de conflictos a saber: docente asesor, docente coordinador de la facultad o director de programa</li>
             </ol>
          </div>
        `
    },
    {
        id: 50,
        title: "Capítulo 6 - Deberes (Cont. 4)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ol class="list-[lower-alpha] pl-5 space-y-2" start="19">
                <li>Realizar las Peticiones, Quejas, Reclamos y Sugerencias respetuosas por escrito por los canales de atención oficiales dispuestos para ello.</li>
                <li>En caso de cierre del escenario de práctica durante el transcurso del semestre, el estudiante que haya cumplido a cabalidad con su etapa hasta ese momento podrá ser reasignado a otra organización u otra modalidad de práctica, siendo reconocidas las horas realizadas hasta ese momento en el primer sitio de práctica.</li>
             </ol>
          </div>
        `
    },
    {
        id: 51,
        title: "Capítulo 6 - Reintegro",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <p class="mb-4 font-bold">ARTÍCULO 20. Realización de prácticas después de reintegro:</p>
             
             <ol class="list-[lower-alpha] pl-5 space-y-4">
                <li>Los estudiantes que matriculen práctica en un reintegro a la Universidad deben remitirse de inmediato a la Coordinación de Práctica y Pasantía de la Facultad de Humanidades y Artes, manifestando su situación de reintegro para que se le pueda indicar el proceso para la realización de la práctica.</li>
                <li>Los estudiantes de Trabajo Social que realicen reintegro después de haber aprobado su primer nivel de práctica deberán presentar comunicación escrita a la Dirección del Programa con copia a la Coordinación de Prácticas de la Facultad, indicando cual fue el escenario en el que realizó su práctica anteriormente, anexando el informe final del(los) nivel(les) previamente cursado(s) y aprobado(s).</li>
                <li>En los programas académicos que contemplan la práctica como parte de su estructura curricular, los estudiantes de reintegro que no la hayan culminado tienen la obligación de consultar la información respectiva a las prácticas y este reglamento cuando inicien su proceso de solicitud de reintegro ante la Universidad.</li>
             </ol>
          </div>
        `
    }
];