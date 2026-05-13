import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, UserCog, Megaphone, PenTool, ChevronDown, FileText, CheckCircle, 
  Target, ShieldCheck, Download, Building, Layers, GitMerge
} from 'lucide-react';
import { MAJORS } from '../constants';
import { SectionId } from '../types';
import MajorAgreementsTable from './MajorAgreementsTable';

interface MajorDetailProps {
  majorId: SectionId;
  onBack: () => void;
}

// --- DATOS GENÉRICOS PARA OTRAS CARRERAS ---
const MAJOR_ROLES: Record<string, {
    practica: { title: string; desc: string; icon: React.ElementType };
}> = {
    'social-comm': {
        practica: {
            title: "En la Línea de Fuego",
            desc: "Te encargas de la \"línea de fuego\": redacción de boletines, manejo de crisis de reputación, gestión de medios o producción de contenidos periodísticos/organizacionales con autonomía profesional.",
            icon: Megaphone
        }
    },
    'advertising': {
        practica: {
            title: "Estratega Creativo",
            desc: "Trabajas en el desarrollo de conceptos creativos, planeación de medios o ejecución de campañas publicitarias reales. Participas en el pitch con clientes y en la estrategia de marca.",
            icon: PenTool
        }
    }
};

const MajorDetail: React.FC<MajorDetailProps> = ({ majorId, onBack }) => {
  const major = MAJORS.find((m) => m.id === majorId);
  
  if (!major) return null;

  const isSocialWork = majorId === 'social-work';
  const isAdvertising = majorId === 'advertising';
  const genericRoles = MAJOR_ROLES[majorId];

  const getProgramFilterName = (id: SectionId): string => {
      switch(id) {
          case 'social-work': return "Trabajo Social";
          case 'social-comm': return "Comunicación Social";
          case 'advertising': return "Publicidad";
          default: return "";
      }
  };

  const programFilterName = getProgramFilterName(majorId);
  
  // --- NIVELES ACADÉMICOS (TEXTO SIMPLIFICADO) ---
  const socialWorkLevels = [
    {
        id: 1,
        title: "Práctica I", // Se eliminó "Nivel de"
        desc: "Diagnóstico y Propuesta"
    },
    {
        id: 2,
        title: "Práctica II", // Se eliminó "Nivel de"
        desc: "Ejecución y Evaluación"
    }
  ];

  const genericLevels = [
    { 
        id: 1, 
        title: "Práctica Profesional", 
        desc: "Etapa Única de Inmersión"
    }
  ];

  const currentLevels = isSocialWork ? socialWorkLevels : genericLevels;

  return (
    <div className="w-full pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Botón Volver */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-usc-red transition-colors mb-8 group font-medium text-sm md:text-base"
      >
        <div className="p-1.5 rounded-full bg-white border border-gray-200 group-hover:border-usc-red/30 transition-colors shadow-sm">
            <ArrowLeft size={16} />
        </div>
        <span>Volver al Inicio</span>
      </motion.button>

      {/* Introducción de la Carrera */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center max-w-3xl mx-auto"
      >
        <div className={`inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br ${major.gradient} text-white shadow-lg mb-6`}>
           <major.icon size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-800 mb-2">
          {major.name}
        </h2>
        <p className={`text-base font-bold text-transparent bg-clip-text bg-gradient-to-r ${major.gradient} mb-6`}>
           {major.slogan}
        </p>
      </motion.div>

      {/* 
          ====================================================================================
          SECCIÓN: NIVELES DE PRÁCTICA (LISTA PUNTEADA SIMPLE)
          ====================================================================================
      */}
      <div className="mb-12 max-w-3xl mx-auto px-4">
        <h3 className="text-lg font-display font-bold text-gray-800 mb-3 text-left">
            Niveles de Práctica
        </h3>
        
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
            {currentLevels.map((level) => (
                <li key={level.id}>
                    <span className="font-bold">{level.title}</span>
                    {level.desc && <span className="text-gray-600"> - {level.desc}</span>}
                </li>
            ))}
        </ul>
      </div>

      {/* ==================================================================================== */}
      {/* VISTA ESPECÍFICA: TRABAJO SOCIAL (VISTA DETALLADA PDF COMPLETO) */}
      {/* ==================================================================================== */}

      {isSocialWork && (
        <div className="space-y-16">
            
            {/* NUEVA SECCIÓN: FORMATOS Y RECURSOS ESPECÍFICOS */}
            <section className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                    <FileText size={28} className="text-usc-blue" />
                    <h3 className="text-2xl font-display font-bold text-gray-800">Formatos y Recursos de Apoyo</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Tarjeta de Descarga PDF */}
                    <a 
                        href="https://drive.google.com/file/d/1L9mrMZuoxBoxABWaOmu3jZZo3F9F7Fe0/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-usc-blue transition-all group flex items-start gap-4"
                    >
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg group-hover:bg-red-100 transition-colors">
                            <Download size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 group-hover:text-usc-blue transition-colors mb-1">Presentación Curso Práctica</h4>
                            <p className="text-xs text-gray-500 mb-2">Documento oficial con lineamientos y presentación completa.</p>
                            <span className="text-xs font-bold text-usc-red flex items-center gap-1">
                                Descargar PDF <ChevronDown size={12} className="-rotate-90" />
                            </span>
                        </div>
                    </a>
                </div>
            </section>

            {/* 1. COMPETENCIAS (ROL) - TEXTO COMPLETO */}
            <section className="bg-white rounded-2xl shadow-md border-l-4 border-usc-blue p-8">
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <UserCog className="text-usc-blue" size={28} />
                    Competencias del Trabajador Social
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                        <div className="mt-1 bg-blue-50 text-usc-blue p-2 rounded-lg h-fit"><Target size={20} /></div>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            <strong>Reconoce y valora el contexto</strong>, la diversidad cultural, los derechos individuales y colectivos, entendiendo los grandes problemas contemporáneos desde su desempeño profesional y académico.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 bg-blue-50 text-usc-blue p-2 rounded-lg h-fit"><ShieldCheck size={20} /></div>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            <strong>Actúa con liderazgo</strong> en los diferentes escenarios donde se desenvuelve en el marco de los principios éticos profesionales.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. CARACTERÍSTICAS DE LA PRÁCTICA - LISTADO COMPLETO */}
            <section>
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Características de la Práctica</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Reglamentada: Reglamento de Prácticas.",
                            "Establecimiento de convenios / contratos con escenarios de práctica.",
                            "No. estudiantes asignados a escenarios de práctica.",
                            "1 profesor (tutor/asesor de práctica).",
                            "1 profesional de campo en cada escenario de práctica.",
                            "Programa académico de Trabajo Social como contexto disciplinar y profesional.",
                            "Proceso evaluado y calificado.",
                            "Tiempo: Dos periodos académicos.",
                            "Tiempo: 24 horas por semana."
                        ].map((char, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-usc-blue shrink-0"></div>
                                <span>{char}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 3. ACTORES DE LA PRÁCTICA - LISTADO COMPLETO */}
            <section>
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-display font-bold text-gray-800">Actores de la Práctica</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Institucional */}
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-usc-blue mb-3 border-b border-gray-200 pb-2">Institucional</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• USC</li>
                            <li>• Programa Académico</li>
                            <li>• Docente de Práctica (asesor/tutor)</li>
                            <li>• Coordinación de prácticas FHYA</li>
                        </ul>
                    </div>
                    {/* Escenario */}
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-usc-blue mb-3 border-b border-gray-200 pb-2">Escenario</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Profesional de Campo de Práctica</li>
                            <li>• O. Gubernamentales</li>
                            <li>• O. No Gubernamentales</li>
                            <li>• O. Comunitarias</li>
                            <li>• Empresas</li>
                            <li>• Grupos de Investigación</li>
                        </ul>
                    </div>
                    {/* Sujetos */}
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-usc-blue mb-3 border-b border-gray-200 pb-2">Sujetos y Procesos</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Estudiantes</li>
                            <li>• Poblaciones</li>
                            <li>• Procesos, Programas, Proyectos</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. DIMENSIONES DE LA PRÁCTICA */}
            <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-display font-bold text-gray-800">Dimensiones de la Práctica</h3>
                    <p className="text-gray-500 text-sm">Interacción entre los ejes fundamentales</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
                        <h4 className="font-bold text-lg text-gray-800 mb-3 text-center">Académico</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Investigación</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Intervención / Acción</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Reflexión</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-red-500">
                        <h4 className="font-bold text-lg text-gray-800 mb-3 text-center">Organizacional</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"/>Relación Universidad / Escenario de práctica</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"/>Acta de asesoría/tutoría</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"/>Procesos y productos</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"/>Reuniones interinstitucionales (3 veces al semestre)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"/>Reuniones de evaluación de la práctica</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
                        <h4 className="font-bold text-lg text-gray-800 mb-3 text-center">Estudiantes</h4>
                        <div className="flex flex-col items-center justify-center h-full pb-4">
                            <p className="text-sm text-gray-600 font-medium italic text-center">"Dimensión Autorreferencial"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PROCESO METODOLÓGICO (TIMELINE) */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <GitMerge size={28} className="text-usc-red" />
                    <h3 className="text-2xl font-display font-bold text-gray-800">Proceso Metodológico de la Práctica</h3>
                </div>
                
                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -ml-[1px]"></div>

                    <div className="space-y-8 relative">
                        {/* Fases Previas */}
                        <div className="bg-gray-100 rounded-lg p-4 text-center border border-gray-300 relative z-10 w-full max-w-sm mx-auto mb-8 shadow-sm">
                            <span className="font-bold text-gray-700 uppercase tracking-widest text-xs block mb-1">Momentos Previos</span>
                            <div className="flex flex-col gap-1 text-sm text-gray-600">
                                <span>Preparación para la práctica académica</span>
                                <span>Convenio / contrato de práctica</span>
                            </div>
                        </div>

                        {/* Steps 1-6 */}
                        {[
                            { num: 1, title: "Inserción / Caracterización", level: "Nivel de Práctica I" },
                            { num: 2, title: "Aproximación Diagnóstica", level: "Nivel de Práctica I" },
                            { num: 3, title: "Propuesta de intervención", level: "Nivel de Práctica I" },
                            { num: 4, title: "Planeación y ejecución de la propuesta", level: "Nivel de Práctica II" },
                            { num: 5, title: "Evaluación de la propuesta de intervención", level: "Nivel de Práctica II" },
                            { num: 6, title: "Cierre de la práctica académica (Informe final)", level: "Nivel de Práctica II" }
                        ].map((step, idx) => (
                            <div key={idx} className={`flex items-center gap-4 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                                {/* Content Box */}
                                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right text-left pl-12 md:pl-0 md:pr-8' : 'text-left pl-12 md:pl-8'}`}>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-usc-blue/30 transition-colors inline-block w-full md:w-auto">
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block ${step.level.includes('I') && !step.level.includes('II') ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                                            {step.level}
                                        </span>
                                        <h4 className="font-bold text-gray-800">{step.num}. {step.title}</h4>
                                    </div>
                                </div>
                                
                                {/* Center Circle */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-usc-blue text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow">
                                    {step.num}
                                </div>

                                {/* Empty Space for Balance */}
                                <div className="hidden md:block flex-1"></div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Productos Transversales */}
                <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                    <p className="text-sm font-bold text-gray-700 uppercase mb-2">Momentos y Productos Transversales</p>
                    <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
                        <span className="bg-white px-3 py-1 rounded border shadow-sm">Planeación y registro semanal</span>
                        <span className="bg-white px-3 py-1 rounded border shadow-sm">Avances de informe / productos</span>
                        <span className="bg-white px-3 py-1 rounded border shadow-sm">Informe final</span>
                        <span className="bg-white px-3 py-1 rounded border shadow-sm">Anexos</span>
                    </div>
                </div>
            </section>

            {/* 6. APORTES Y GESTIÓN DE PRACTICANTES - LISTADO COMPLETO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Aportes */}
                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-full">
                    <h3 className="text-lg font-bold text-usc-blue mb-4 flex items-center gap-2">
                        <Layers size={20} />
                        Aportes y Gestión de Practicantes
                    </h3>
                    <ul className="space-y-3">
                        {[
                            "Formulación y ejecución de proyectos de intervención",
                            "Formulación de proyectos de investigación / Sistematización de experiencias",
                            "Diseño de instrumentos de intervención e investigación",
                            "Gestión de redes institucionales y comunitarias",
                            "Acompañamiento de grupos poblacionales",
                            "Apoyo en interconsultas y en procesos formativos/educativos",
                            "Acompañamiento y seguimiento de casos",
                            "Caracterización de poblaciones",
                            "Apoyos administrativos"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle size={14} className="text-usc-red mt-0.5 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Condiciones */}
                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-full">
                    <h3 className="text-lg font-bold text-usc-blue mb-4 flex items-center gap-2">
                        <ShieldCheck size={20} />
                        Condiciones de la Práctica
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-sm font-bold text-gray-800 mb-2">Criterios Selección Centros de Práctica:</h4>
                            <ul className="space-y-1 pl-4 list-decimal text-sm text-gray-600">
                                <li>Disposición de tiempo.</li>
                                <li>Disposición para el trabajo interdisciplinario.</li>
                                <li>Participación en equipos interdisciplinarios.</li>
                                <li>Disponibilidad para seguimiento y evaluación, retroalimentación.</li>
                                <li>Manejo de formatos de registro e información.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-800 mb-2">Condiciones favorables para la intervención profesional:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 p-2 rounded">
                                    <span className="font-bold text-usc-blue">✓</span>
                                    <span>Recursos humanos.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 p-2 rounded">
                                    <span className="font-bold text-usc-blue">✓</span>
                                    <span>Recursos de apoyo al estudiante: ARL.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 p-2 rounded">
                                    <span className="font-bold text-usc-blue">✓</span>
                                    <span>Recursos para la intervención: puesto de trabajo, equipo de cómputo, materiales, identificación institucional, apoyo logístico.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

        </div>
      )}

      {/* ==================================================================================== */}
      {/* VISTA ESPECÍFICA: PUBLICIDAD (NUEVA VISTA CON TEXTO INSTITUCIONAL) */}
      {/* ==================================================================================== */}

      {isAdvertising && (
        <div className="space-y-16">
            
            {/* 1. SECCIÓN DE DEFINICIÓN (Párrafo 1) */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-purple-500 p-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                        <Target size={28} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-800">Práctica Profesional Integral</h3>
                </div>
                <div className="text-gray-600 text-base leading-relaxed space-y-4 text-justify">
                    <p>
                        La práctica profesional de los estudiantes en el programa de publicidad es un <strong>espacio formativo integral</strong> que permite aplicar, en un contexto real, los conocimientos, habilidades y competencias adquiridas durante su proceso formativo.
                    </p>
                    <p>
                        Busca que el estudiante se enfrente a situaciones reales, tome decisiones, proponga soluciones y desarrolle una mirada crítica y ética frente al ejercicio de la publicidad. Ayuda a fortalecer su perfil, comprender el funcionamiento de las organizaciones y reconocer el impacto de su disciplina en la sociedad y crecimiento laboral.
                    </p>
                </div>
            </div>

            {/* 2. SECCIÓN DE ESCENARIOS (Párrafo 2) */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Building size={24} className="text-usc-blue" />
                        Escenarios de Práctica
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                        Los escenarios de práctica como <strong>entes coformadores</strong>, actúan como un puente entre la formación académica y el ejercicio profesional, permitiendo al estudiante de publicidad conocer la vida laboral, sus procesos, estructuras; ayudando al estudiante a la construcción de su perfil profesional.
                    </p>
                </div>
                
                {/* ROL GENÉRICO (Integrado como tarjeta lateral) */}
                {genericRoles && (
                    <div className="w-full md:w-5/12 bg-white p-5 rounded-lg shadow-sm border border-purple-100">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-full">
                                <genericRoles.practica.icon size={20} />
                            </div>
                            <h4 className="font-bold text-gray-800 text-sm">Tu Perfil: {genericRoles.practica.title}</h4>
                        </div>
                        <p className="text-xs text-gray-500 leading-snug">
                            {genericRoles.practica.desc}
                        </p>
                    </div>
                )}
            </div>

        </div>
      )}

      {/* ==================================================================================== */}
      {/* VISTA GENÉRICA: COMUNICACIÓN SOCIAL (O CUALQUIER OTRA NO DEFINIDA ARRIBA) */}
      {/* ==================================================================================== */}
      
      {!isSocialWork && !isAdvertising && genericRoles && (
        <div className="space-y-16">
            
            {/* SECCIÓN 2: ROL EN EL CAMPO */}
            <div className="mb-16">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-display font-bold text-gray-800">Tu Rol en el Campo</h3>
                    <p className="text-gray-500 text-sm">Perfil y desempeño esperado durante tu práctica profesional.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-xl shadow-md border-l-4 border-usc-blue p-8 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="p-4 bg-blue-50 text-usc-blue rounded-full shrink-0">
                                <genericRoles.practica.icon size={36} />
                            </div>
                            <div className="text-center md:text-left">
                                <span className="text-xs font-bold text-usc-blue uppercase tracking-wider block mb-1">En tu Práctica</span>
                                <h4 className="text-2xl font-bold text-gray-800 mb-3">{genericRoles.practica.title}</h4>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {genericRoles.practica.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* --- SECCIÓN COMÚN: TABLA DE CONVENIOS (FINAL) --- */}
      <div className="border-t border-gray-100 pt-12 mt-16">
          <MajorAgreementsTable programName={programFilterName} />
      </div>

    </div>
  );
};

export default MajorDetail;