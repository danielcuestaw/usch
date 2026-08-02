import { Users, Megaphone, Palette } from 'lucide-react';
import { NavItem, Major } from './types';

// User provided logo URL for Header (Navbar)
export const USC_LOGO_URL =  "/images/Logo.png";
export const USC_LOGO2_URL =  "/images/Logo2.png";

// User provided logo URL for Footer - Logo Acreditación Institucional
export const USC_FOOTER_LOGO_URL = "/images/logo_acreditacion_institucional.webp";

// Foto Decano
export const USC_DECANO_URL = "/images/foto_coordinador_practicas.webp";

// Imagen quienes somos 
export const USC_QUIENES_SOMOS_URL = "/images/quienes_somos.webp";

// Imagen convenio alcaldia 
export const USC_CONVENIO_ALCALDIA_URL = "/images/foto_alcaldia_cali.webp";

// Imagen convenio crecer en familia 
export const USC_CONVENIO_CEF_URL = "/images/foto_ong_crecerenfamilia.webp";

// Imagen convenio periodico el pais
export const USC_CONVENIO_ELPAIS_URL = "/images/foto_periodico_elpais.webp";

// Imagen convenio telepacifico
export const USC_CONVENIO_TELEPACIFICO_URL = "/images/foto_telepacifico.webp";


export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Quiénes Somos' },
  { id: 'practices', label: 'Prácticas' },
  { id: 'platform-instructions', label: 'Instructivo Plataforma' },
  { id: 'regulations', label: 'Normatividad y Formatos' },
  { id: 'agreements', label: 'Convenios' },
  { id: 'closing', label: 'Cierre de Prácticas' },
];

export const MAJORS: Major[] = [
  {
    id: 'social-work',
    name: 'Trabajo Social',
    icon: Users,
    description: 'Gestión y desarrollo de procesos sociales comunitarios e individuales.',
    color: 'text-usc-blue',
    gradient: 'from-blue-600 to-usc-blue',
    image: '/images/trabajo_social_01.webp',
    slogan: '"Transformando realidades, tejiendo comunidad"'
  },
  {
    id: 'social-comm',
    name: 'Comunicación Social',
    icon: Megaphone,
    description: 'Estrategias de comunicación, periodismo y medios digitales.',
    color: 'text-usc-red',
    gradient: 'from-red-500 to-usc-red',
    image: '/images/comunicacion_social_01.webp',
    slogan: '"La voz que conecta, la historia que inspira"'
  },
  {
    id: 'advertising',
    name: 'Publicidad',
    icon: Palette,
    description: 'Creatividad estratégica, diseño de marcas y campañas publicitarias.',
    color: 'text-purple-600',
    gradient: 'from-indigo-500 to-purple-600',
    image: '/images/publicidad_01.webp',
    slogan: '"Creatividad que impacta, estrategias que trascienden"'
  }
];