/**
 * PARTE 2: MODALIDADES Y VINCULACIÓN
 * ----------------------------------------------------------------------
 * Contenido:
 * - Capítulo 2: Artículos 3 y 4
 * - Tipos de práctica (Empresarial, Social, Investigativa, etc.)
 * - Tipos de contrato (Aprendizaje, Laboral, Convenio)
 */

import { BookPage } from '../../types';

export const PART_2: BookPage[] = [
    {
        id: 8,
        title: "Capítulo 2 - Modalidades",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <div class="mb-4 text-center">
               <h3 class="font-bold text-base uppercase">CAPÍTULO 2</h3>
               <h4 class="font-bold text-sm uppercase">MODALIDADES Y TIPOS DE VINCULACIÓN</h4>
             </div>

             <p class="mb-4 font-bold">ARTÍCULO 3. Modalidades de Prácticas y Pasantías:</p>
             
             <ol class="list-[lower-alpha] pl-5 space-y-4">
                <li><span class="font-bold">Profesional y/o Empresarial:</span> Conjunto de actividades mediante el cual un estudiante aplica los conocimientos y competencias adquiridos en el desarrollo de los planes de curso de su programa académico, en una empresa o entidad del sector privado o público o del tercer sector.</li>
                <li><span class="font-bold">Social:</span> Conjunto de actividades académicas mediante el cual un estudiante se vincula a un proyecto con carácter social y desarrolla acciones que coadyuven al fortalecimiento del aspecto misional de responsabilidad social de la universidad.</li>
             </ol>
          </div>
        `
    },
    {
        id: 9,
        title: "Capítulo 2 - Modalidades (Cont.)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ol class="list-[lower-alpha] pl-5 space-y-4" start="3">
                <li><span class="font-bold">Investigativa:</span> Es el conjunto de actividades académicas mediante el cual un estudiante se vincula a un proyecto de investigación financiado por la Universidad o una organización del sector público o privado o a uno de los grupos de investigación de la Universidad, con el propósito de adquirir competencias científicas que lo proyecten como un profesional comprometido con el desarrollo social a partir de la ciencia, la tecnología y la innovación. Esta modalidad debe tener el visto bueno de la Dirección General de Investigaciones.</li>
                <li><span class="font-bold">Apoyo a la Docencia:</span> Conjunto de actividades académicas mediante el cual un estudiante acompaña y apoya a un profesor de tiempo completo o dedicación exclusiva de la universidad y/o de otra institución.</li>
             </ol>
          </div>
        `
    },
    {
        id: 10,
        title: "Capítulo 2 - Modalidades (Cont. 2)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <p class="mb-4 text-gray-600 italic text-xs border-l-2 border-gray-300 pl-2">
                Continuación literal d) ...Los estudiantes que resulten elegidos para esta modalidad de práctica en el semestre deben realizar una capacitación de preparación pedagógica que los habilite. Exceptuando la Facultad de Educación.
                <br/><span class="block mt-1 font-semibold">Parágrafo Único. La capacitación pedagógica debe ser realizada en la universidad o en el escenario de prácticas con base a los requerimientos de las instituciones.</span>
             </p>

             <ol class="list-[lower-alpha] pl-5 space-y-4" start="5">
                <li><span class="font-bold">Emprendimiento y/o Proyecto Productivo:</span> Conjunto de actividades relacionadas con los programas de formación académica, donde el estudiante a través de un emprendimiento y/o proyecto productivo puede potencializar, fortalecer las competencias empresariales, investigativas y de innovación.
                <br/><span class="italic block mt-1 text-xs">Parágrafo Único: Para realizar la práctica en la modalidad de emprendimiento, se requiere la aprobación del anteproyecto en la modalidad de trabajo de grado: innovación y emprendimiento.</span>
                </li>
             </ol>
          </div>
        `
    },
    {
        id: 11,
        title: "Capítulo 2 - Modalidades (Cont. 3)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ol class="list-[lower-alpha] pl-5 space-y-4" start="6">
                <li><span class="font-bold">Internacional:</span> Es aquella que se realiza en otro país, conforme a las políticas internas de la Universidad Santiago de Cali y/o institución, organización para aplicar los saberes objeto de estudio del programa y el desarrollo de las competencias bajo un contexto globalizado.
                <br/><span class="italic block mt-1">Parágrafo Único: Las pasantías internacionales requerirán un seguro o póliza con cobertura en el país donde esta se realice, para cubrir el requisito de afiliación a riesgos laborales.</span>
                </li>
             </ol>
          </div>
        `
    },
    {
        id: 12,
        title: "Capítulo 2 - Vinculación",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <p class="mb-4 font-bold">ARTÍCULO 4. Tipos de Vinculación de Prácticas y Pasantías: Para el cumplimiento de las prácticas y/o pasantías, existen varios tipos de vinculación:</p>
             
             <ol class="list-decimal pl-5 space-y-4">
                <li><span class="font-bold">Contrato de aprendizaje:</span> Forma especial dentro del Derecho Laboral, mediante la cual una persona natural desarrolla formación teórica práctica en una entidad autorizada, a cambio de que una empresa patrocinadora proporcione los medios para adquirir formación profesional metódica y completa requerida en el oficio, actividad u ocupación y esto le implique desempeñarse dentro del manejo administrativo, operativo comercial o financiero propios del giro ordinario de las actividades de la empresa.</li>
             </ol>
          </div>
        `
    },
    {
        id: 13,
        title: "Capítulo 2 - Vinculación (Cont.)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <p class="mt-4 mb-2"><span class="font-bold">Parágrafo 1º.</span> No constituyen contratos de aprendizaje las siguientes prácticas educativas o de programas sociales o comunitarios:</p>
             <ol class="list-decimal pl-5 space-y-2">
               <li>Las actividades desarrolladas por los estudiantes universitarios a través de convenios suscritos con las instituciones de educación superior en calidad de pasantías que sean prerrequisito para la obtención del título correspondiente.</li>
               <li>Las prácticas asistenciales y de servicio social obligatorio de las áreas de la salud y aquellas otras que determine el Ministerio de la Protección Social.</li>
             </ol>
          </div>
        `
    },
    {
        id: 14,
        title: "Capítulo 2 - Vinculación (Cont. 2)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ol class="list-decimal pl-5 space-y-2" start="3">
               <li>Las prácticas que sean parte del servicio social obligatorio, realizadas por los jóvenes que se encuentran cursando los dos (2) últimos grados de educación lectiva secundaria, en instituciones aprobadas por el Estado.</li>
               <li>Las prácticas que se realicen en el marco de Programas o Proyectos de protección social adelantados por el Estado o por el sector privado, de conformidad con los criterios que establezca el Ministerio de la Protección Social.</li>
             </ol>
             
             <p class="mt-4"><span class="font-bold">Parágrafo 2º.</span> Este Tipo vinculación solo aplica para los programas que se encuentran parametrización en el Sistema de Gestión Virtual de Aprendices “SGVA”, y estudiantes que por su formación anterior puedan solicitar la habilitación de cadena de formación ante el SENA.</p>
          </div>
        `
    },
    {
        id: 15,
        title: "Capítulo 2 - Contrato Laboral",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ol class="list-decimal pl-5 space-y-4" start="2">
                <li><span class="font-bold">Contrato laboral o relación contractual:</span> Vinculación nueva o ya establecida para el estudiante que en el momento de iniciar la práctica realiza actividades relacionadas con el programa de formación, y el escenario le permite ejecutar la práctica en el mismo sitio de trabajo.
                <br/><br/>
                En este tipo de vinculación el estudiante deberá tener en cuenta las siguientes situaciones para validez de la misma:
                <ul class="list-[lower-alpha] pl-5 space-y-2 mt-2">
                    <li>Si las funciones desarrolladas por el estudiante están relacionadas con el programa de formación en el que se encuentra matriculado.</li>
                    <li>En los casos donde el estudiante desempeñe funciones distintas a su formación profesional, se deberá presentar un plan de trabajo que contemple acciones diferentes a las que ya viene realizando en su espacio laboral.</li>
                </ul>
                </li>
             </ol>
          </div>
        `
    },
    {
        id: 16,
        title: "Capítulo 2 - Contrato Laboral (Cont.)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ul class="list-[lower-alpha] pl-5 space-y-2 mt-2">
                <li>Cuando el practicante esté vinculado con un contrato laboral o contractual, debe estar firmado por un período mayor o igual al período académico en que realiza la práctica y pasantía.</li>
             </ul>

             <p class="mb-2 mt-4"><span class="font-bold">Parágrafo 1º.</span> El estudiante deberá presentar una carta de la organización describiendo las funciones y o actividades a desarrollar con el aval del escenario de prácticas.</p>
             <p class="mb-2"><span class="font-bold">Parágrafo 2º.</span> En cualquiera de las situaciones anteriores el docente coordinador o docente asesor, estudiará la solicitud y tomará una decisión para garantizar los resultados y propósitos de aprendizaje del programa.</p>
          </div>
        `
    },
    {
        id: 17,
        title: "Capítulo 2 - Contrato Laboral (Cont. 2)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <p class="mb-2"><span class="font-bold">Parágrafo 3º.</span> El estudiante debe presentar su contrato legalizado, junto al certificado de existencia y representación legal del escenario, Registro Único Tributario (cuando aplique) y el documento de identidad del representante legal. La entidad debe notificar a la Coordinación de Prácticas y Pasantías de la Facultad que acepta la realización de la práctica en el marco de su relación contractual y los datos de contacto del tutor que destinará para realizar los seguimientos con el docente asesor designado por la Universidad.</p>
             <p class="mb-4"><span class="font-bold">Parágrafo 4º.</span> En el caso de la vinculación contractual, los estudiantes deben ser cotizantes en el régimen de seguridad social y el contrato debe cumplir con los requerimientos de ley correspondientes a la modalidad del contrato, sea laboral o por prestación de servicios.</p>
          </div>
        `
    },
    {
        id: 18,
        title: "Capítulo 2 - Validación Exp.",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ol class="list-decimal pl-5 space-y-4" start="3">
                <li><span class="font-bold">Validación experiencia laboral.</span> El estudiante que reúna los requisitos establecidos en actividades propias de su formación curricular podrá solicitar al docente coordinador y/o docente asesor la validación de práctica y pasantías cuando cumpla con los siguientes requisitos:
                    <ul class="list-[lower-alpha] pl-5 space-y-2 mt-2">
                        <li>Acreditar experiencia específica de un (1) año continuo o dos (2) años, en forma discontinua en una de las áreas de formación profesional de su programa académico.</li>
                        <li>Certificación de experiencia laboral expedida por el funcionario o reclutador de la empresa u organización legalmente constituida, que indique fecha de vinculación, funciones y tiempo de dedicación.</li>
                        <li>Registro que acredita la existencia y representación legal de la organización, mayor o igual a dos años.</li>
                        <li>Registro de afiliación a la Seguridad Social.</li>
                    </ul>
                </li>
             </ol>
          </div>
        `
    },
    {
        id: 19,
        title: "Capítulo 2 - Convenios",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <p class="mb-4 text-xs italic">Parágrafo Único (Validación): Este proceso se valida entre el Director Programa Académico y el Docente Coordinador de Práctica y Pasantía de la Facultad de Humanidades y Artes.</p>

             <ol class="list-decimal pl-5 space-y-4" start="4">
                <li><span class="font-bold">Extramural (Convenio marco, específicos y relación docencia servicio):</span> Acuerdo de voluntades suscrito entre las instituciones participantes en la relación, frente a las condiciones, compromisos y responsabilidades de cada una de las partes, formalizadas en un documento.</li>
             </ol>

             <p class="mb-2 mt-4"><span class="font-bold">Parágrafo 1º.</span> El convenio marco acoge a todas las Facultades de la Universidad Santiago de Cali, el convenio específico se lleva a cabo para un solo estudiante y un periodo académico determinado. La formalización de los convenios se debe realizar de acuerdo con los requisitos establecidos, previa revisión y asesoría del Departamento Jurídico de la Universidad Santiago de Cali.</p>
          </div>
        `
    },
    {
        id: 20,
        title: "Capítulo 2 - Convenios (Cont.)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <p class="mb-2"><span class="font-bold">Parágrafo 2º.</span> Los estudiantes deben confirmar con la Coordinación de Prácticas y Pasantías qué convenios de prácticas y pasantías se encuentran vigentes, si la organización de su interés no cuenta con un convenio vigente con la Universidad Santiago de Cali, pueden sugerir la celebración de convenios nuevos.</p>
             <p class="mb-2">En el caso de las prácticas la solicitud se debe realizar al menos con un semestre de anticipación, para que la Coordinación de Prácticas y Pasantías junto a la Dirección del Programa en que está matriculado el estudiante, estudien la solicitud y en caso de que sea procedente se pueda tramitar la legalización de la creación del convenio, previo a que el estudiante realice su matrícula académica en la práctica.</p>
          </div>
        `
    },
    {
        id: 21,
        title: "Capítulo 2 - Convenios (Cont. 2)",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <p class="mb-4"><span class="font-bold">Parágrafo 3º.</span> Los estudiantes que sugieran la celebración de convenios nuevos para la realización de pasantía pueden hacer la solicitud en cualquier momento del periodo académico vigente, pero dependerá de que al momento de vincularse a la pasantía tenga la calidad de estudiante activo en la Universidad Santiago de Cali.</p>

             <ol class="list-decimal pl-5 space-y-4" start="5">
                <li><span class="font-bold">Intramural:</span> Todas las actividades realizadas en las instalaciones (áreas académicas y/o administrativas) de la Universidad Santiago de Cali, para fines de prácticas y pasantías.
                <br/><span class="italic">Parágrafo Único: Cualquiera que sea la modalidad escogida por el estudiante, debe ajustarse a los lineamientos del procedimiento de prácticas y pasantías, y a los formatos establecidos en el Sistema de Gestión de Calidad.</span>
                </li>
             </ol>
          </div>
        `
    },
    {
        id: 22,
        title: "Capítulo 2 - Vinculación Formativa",
        content: `
          <div class="text-sm text-gray-800 leading-relaxed text-justify">
             <ol class="list-decimal pl-5 space-y-4" start="6">
                <li><span class="font-bold">Vinculación Formativa (acto administrativo):</span> La vinculación es voluntaria y unilateral, aplica para entidades estatales (pública) conforme a las reglas y normas de derecho administrativo. La elaboración de este acto no requiere la intervención de la Universidad. No genera relación laboral. Para el caso de las judicaturas el estudiante será vinculado por la entidad directamente y conforme a los lineamientos dispuestos por el Consejo Superior de la Judicatura.</li>
             </ol>
          </div>
        `
    }
];