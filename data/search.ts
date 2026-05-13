/**
 * DATOS DEL ÍNDICE DE BÚSQUEDA (DINÁMICO)
 * Este archivo centraliza la búsqueda importando datos de otras fuentes
 * para asegurar que la barra de búsqueda siempre tenga la información más reciente.
 */
import { SearchIndexItem, SectionId } from '../types';
import { FACULTY_AGREEMENTS_DATA } from './faculty_agreements';
import { DOWNLOAD_FORMATS } from './downloads';
import { MAJORS } from '../constants';
import { REGULATIONS_DATA } from './regulations';
import { FIELDTRIPS_DATA } from './fieldtrips';
import { GUIDELINES_DATA } from './guidelines';

// Función auxiliar para extraer texto plano de contenido HTML
const stripHtml = (html: string) => {
   return html.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
};

// 1. Elementos Estáticos y Conceptuales (Manuales)
const STATIC_ITEMS: SearchIndexItem[] = [
  // HOME / GENERAL
  { 
    title: "Facultad de Humanidades y Artes", 
    keywords: "facultad universidad humanidades artes inicio nosotros mision vision institucional", 
    sectionId: "home" as SectionId 
  },
  { 
    title: "Quiénes Somos", 
    keywords: "nosotros mision vision introduccion objetivos perfil", 
    sectionId: "home" as SectionId 
  },
  { 
    title: "Coordinador de Prácticas", 
    keywords: "jefe contacto telefono encargado christian marin correo email oficina", 
    sectionId: "home" as SectionId 
  },
  { 
    title: "Objetivos de Práctica", 
    keywords: "metas competencias laborales profesional experiencia", 
    sectionId: "home" as SectionId 
  },

  // NORMATIVIDAD (Legal)
  { 
    title: "Normatividad y Formatos", 
    keywords: "leyes reglamento normas reglas legal resolucion documentos", 
    sectionId: "regulations" as SectionId 
  },
  { 
    title: "Base legal de tu formación", 
    keywords: "legal juridico leyes derecho deberes base", 
    sectionId: "regulations" as SectionId 
  },
  
  // CONVENIOS (Sección General)
  { 
    title: "Convenios y Alianzas", 
    keywords: "alianzas empresas lugares pasantias practicas sector productivo", 
    sectionId: "agreements" as SectionId 
  },

  // CIERRE DE PRÁCTICAS
  {
    title: "Cierre de Prácticas",
    keywords: "finalizacion culminacion grado terminar acabar proceso nota cierre pasos",
    sectionId: "closing" as SectionId
  },
  {
    title: "Paso 1: Actualización Portafolio (Cierre)",
    keywords: "sipac portafolio actualizacion cierre paso 1",
    sectionId: "closing" as SectionId
  },
  {
    title: "Paso 2: Informe Final (Cierre)",
    keywords: "informe reporte final documento entregable cierre paso 2",
    sectionId: "closing" as SectionId
  },
  {
    title: "Paso 3: Carta de Cierre Empresa",
    keywords: "carta empresa certificado finalizacion cierre paso 3",
    sectionId: "closing" as SectionId
  },
  {
    title: "Paso 4: Formulario y QR (Cierre)",
    keywords: "formulario forms microsoft qr cerrar solicitar acta paso 4",
    sectionId: "closing" as SectionId
  },
  {
    title: "Solicitud Acta de Cierre",
    keywords: "acta documento final certificado terminacion grado solicitud correo",
    sectionId: "closing" as SectionId
  }
];

// 2. Mapeo Dinámico de Carreras Generales
const MAJOR_ITEMS: SearchIndexItem[] = MAJORS.map(major => ({
    title: major.name,
    keywords: `carrera programa pregrado ${major.slogan} ${major.description} ${major.name} profesional`,
    sectionId: major.id as SectionId
}));

// 2.1 INFORMACIÓN ESPECÍFICA DE TRABAJO SOCIAL (NUEVO)
const SOCIAL_WORK_ITEMS: SearchIndexItem[] = [
    { 
        title: "Nivel de Práctica I (Trabajo Social)", 
        keywords: "trabajo social nivel 1 diagnostico propuesta intervencion insercion caracterizacion aproximacion", 
        sectionId: "social-work" as SectionId 
    },
    { 
        title: "Nivel de Práctica II (Trabajo Social)", 
        keywords: "trabajo social nivel 2 ejecucion evaluacion planeacion cierre informe final", 
        sectionId: "social-work" as SectionId 
    },
    { 
        title: "Proceso Metodológico TS", 
        keywords: "trabajo social metodo fases insercion diagnostico intervencion evaluacion cierre", 
        sectionId: "social-work" as SectionId 
    },
    { 
        title: "Competencias Trabajo Social", 
        keywords: "contexto diversidad derechos liderazgo etica profesional", 
        sectionId: "social-work" as SectionId 
    },
    { 
        title: "Documento Presentación Curso Práctica", 
        keywords: "descarga pdf presentacion curso trabajo social lineamientos", 
        sectionId: "social-work" as SectionId 
    }
];

// 2.2 INFORMACIÓN ESPECÍFICA DE PUBLICIDAD (NUEVO)
const ADVERTISING_ITEMS: SearchIndexItem[] = [
    { 
        title: "Práctica Integral Publicidad", 
        keywords: "publicidad espacio formativo integral contexto real habilidades competencias", 
        sectionId: "advertising" as SectionId 
    },
    { 
        title: "Rol: Estratega Creativo", 
        keywords: "publicidad rol practica estratega creativo campañas pitch medios", 
        sectionId: "advertising" as SectionId 
    },
    { 
        title: "Escenarios de Práctica Publicidad", 
        keywords: "publicidad entes coformadores puente academia ejercicio profesional agencias", 
        sectionId: "advertising" as SectionId 
    }
];

// 2.3 INFORMACIÓN ESPECÍFICA DE COMUNICACIÓN SOCIAL
const COMM_ITEMS: SearchIndexItem[] = [
    { 
        title: "Rol: En la Línea de Fuego", 
        keywords: "comunicacion social rol practica periodismo medios redaccion crisis", 
        sectionId: "social-comm" as SectionId 
    }
];

// 3. INSTRUCTIVO PLATAFORMA (VIDEOS Y GUIONES) - NUEVO
const PLATFORM_ITEMS: SearchIndexItem[] = [
    { 
        title: "Instructivo Plataforma SIPPU", 
        keywords: "video tutorial guia sippu sistema registro hoja de vida sipac", 
        sectionId: "platform-instructions" as SectionId 
    },
    { 
        title: "Video 1: Registro y Jefe Inmediato", 
        keywords: "video registro empresa jefe inmediato centro practica sippu tutorial como registrar", 
        sectionId: "platform-instructions" as SectionId 
    },
    { 
        title: "Video 2: Plan de Trabajo", 
        keywords: "video plan trabajo cronograma actividades horas sippu subir cargar", 
        sectionId: "platform-instructions" as SectionId 
    },
    { 
        title: "Guión: Hoja de Vida SIPAC", 
        keywords: "guion paso a paso hoja de vida informacion personal academica sippu", 
        sectionId: "platform-instructions" as SectionId 
    }
];

// 4. Elementos Detallados de la Sección "Prácticas"
const DETAILED_PRACTICE_ITEMS: SearchIndexItem[] = [
    // Vinculación Contractual
    { 
        title: "Tipos de Vinculación Contractual", 
        keywords: "vinculacion tipos contrato aprendizaje laboral intramural validacion emprendimiento juridica legal contrato", 
        sectionId: "practices" as SectionId 
    },
    { 
        title: "Contrato de Aprendizaje", 
        keywords: "contrato aprendizaje sena sostenimiento patrocinio vinculacion", 
        sectionId: "practices" as SectionId 
    },
    { 
        title: "Vinculación Intramural", 
        keywords: "intramural universidad dentro campus vinculacion", 
        sectionId: "practices" as SectionId 
    },
    { 
        title: "Validación Experiencia Laboral", 
        keywords: "validacion trabajo actual laboral experiencia homologacion vinculacion", 
        sectionId: "practices" as SectionId 
    },
    { 
        title: "Práctica por Emprendimiento", 
        keywords: "emprendimiento empresa propia negocio crear empresa vinculacion", 
        sectionId: "practices" as SectionId 
    },
    // Internacionalización (ARI)
    { 
        title: "Internacionalización y Movilidad (ARI)", 
        keywords: "ari internacionalizacion movilidad intercambio paises españa canada mexico italia reino unido aiesec work travel", 
        sectionId: "practices" as SectionId 
    },
    // SIPPU
    { 
        title: "Sistema SIPPU", 
        keywords: "sippu sistema informacion plataforma software hoja de vida plan de trabajo gestion digital", 
        sectionId: "practices" as SectionId 
    },
    // Ruta Administrativa
    { 
        title: "Ruta Administrativa (Paso a Paso)", 
        keywords: "ruta paso a paso administrativo induccion seminarios paz y salvo arl requisitos tramites", 
        sectionId: "practices" as SectionId 
    },
    // Red de Aliados
    { 
        title: "Red de Aliados Estratégicos", 
        keywords: "aliados sectores social publico salud industria empresas donde hacer practica", 
        sectionId: "practices" as SectionId 
    }
];


// 5. Mapeo Dinámico de Formatos de Descarga
const DOWNLOAD_ITEMS: SearchIndexItem[] = DOWNLOAD_FORMATS.map(format => ({
    title: format.name,
    keywords: `descarga formato documento word pdf excel anexo plantilla ${format.name}`,
    sectionId: "regulations" as SectionId
}));

// 6. Mapeo Dinámico de Convenios (Incluye los nuevos agregados automáticamente)
const AGREEMENT_ITEMS: SearchIndexItem[] = FACULTY_AGREEMENTS_DATA.map(agreement => ({
    title: agreement.name,
    keywords: `convenio empresa organizacion fundacion alianza practica pasantia ${agreement.programs} ${agreement.name} telefono correo`,
    sectionId: "agreements" as SectionId
}));

// 7. Mapeo Dinámico de Contenido de Libros (Reglamento, Salidas, Lineamientos)
const BOOK_ITEMS: SearchIndexItem[] = [
    ...REGULATIONS_DATA.map(page => ({
        title: `Reglamento: ${page.title || 'Sección'}`,
        keywords: `reglamento normas articulo ley ${page.title} ${stripHtml(page.content as string)}`,
        sectionId: "regulations" as SectionId,
        bookId: 'reglamento' as const,
        pageId: page.id
    })),
    ...FIELDTRIPS_DATA.map(page => ({
        title: `Salidas: ${page.title || 'Sección'}`,
        keywords: `salidas viaje campo transporte normas ${page.title} ${stripHtml(page.content as string)}`,
        sectionId: "regulations" as SectionId,
        bookId: 'salidas' as const,
        pageId: page.id
    })),
    ...GUIDELINES_DATA.map(page => ({
        title: `Lineamientos: ${page.title || 'Sección'}`,
        keywords: `lineamientos general guia directriz ${page.title} ${stripHtml(page.content as string)}`,
        sectionId: "regulations" as SectionId,
        bookId: 'lineamientos' as const,
        pageId: page.id
    }))
];

// 8. Unificación del Índice Maestro
export const SEARCH_INDEX: SearchIndexItem[] = [
    ...STATIC_ITEMS,
    ...MAJOR_ITEMS,
    ...SOCIAL_WORK_ITEMS,
    ...ADVERTISING_ITEMS,
    ...COMM_ITEMS,
    ...PLATFORM_ITEMS,
    ...DETAILED_PRACTICE_ITEMS, 
    ...DOWNLOAD_ITEMS,
    ...AGREEMENT_ITEMS,
    ...BOOK_ITEMS
];