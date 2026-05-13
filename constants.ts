import { Users, Megaphone, Palette } from 'lucide-react';
import { NavItem, Major } from './types';

// User provided logo URL for Header (Navbar)
export const USC_LOGO_URL = "https://www.comfenalcovalle.com.co/wp-content/uploads/2023/07/logo-universidad-santiago-de-cali-2.jpg";

// User provided logo URL for Footer - Logo Acreditación Institucional
export const USC_FOOTER_LOGO_URL = "https://irs.usc.edu.co/Logo-Acreditaci%C3%B3n-Institucional.png";

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
    image: 'https://unimedios.usc.edu.co/wp-content/uploads/2025/09/Album-4.png',
    slogan: '"Transformando realidades, tejiendo comunidad"'
  },
  {
    id: 'social-comm',
    name: 'Comunicación Social',
    icon: Megaphone,
    description: 'Estrategias de comunicación, periodismo y medios digitales.',
    color: 'text-usc-red',
    gradient: 'from-red-500 to-usc-red',
    image: 'https://unimedios.usc.edu.co/wp-content/uploads/2022/07/zumbido02.jpg',
    slogan: '"La voz que conecta, la historia que inspira"'
  },
  {
    id: 'advertising',
    name: 'Publicidad',
    icon: Palette,
    description: 'Creatividad estratégica, diseño de marcas y campañas publicitarias.',
    color: 'text-purple-600',
    gradient: 'from-indigo-500 to-purple-600',
    image: 'https://scontent.fclo16-1.fna.fbcdn.net/v/t39.30808-6/629471587_872908962285213_3425649469645642610_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1_zEYOwMfJYQ7kNvwEIEnd2&_nc_oc=AdmkqK-z-cgPA0AjjT2pzWCaLAy237DwB-tMgsNwIglf5nwWNGU8W1QbWU-K5OH52d8&_nc_zt=23&_nc_ht=scontent.fclo16-1.fna&_nc_gid=kSNlWEpMvbuqLLeBPE77Tw&oh=00_AfuXwfhyPlec0UdLrAMBo2q7bDxGP7BXvd7bXFrFdYiCyw&oe=69968C32',
    slogan: '"Creatividad que impacta, estrategias que trascienden"'
  }
];