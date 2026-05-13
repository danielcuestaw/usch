/**
 * ARCHIVO DE DEFINICIONES DE TIPOS (TYPES.TS)
 * ----------------------------------------------------------------------
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';

export type SectionId = 'home' | 'practices' | 'regulations' | 'agreements' | 'platform-instructions' | 'closing' | 'social-work' | 'social-comm' | 'advertising';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Major {
  id: SectionId; // Updated to match SectionId for linking
  name: string;
  icon: LucideIcon;
  description: string;
  color: string; // Tailwind class for text/bg
  gradient: string; // Tailwind class for bg gradient
  image: string; // URL for the major's specific header image
  slogan: string; // New field for the banner text
}

export interface BookPage {
  id: number;
  title?: string;
  content: React.ReactNode; // Can be text or JSX
}

// --- NUEVAS INTERFACES PARA DATOS ---

export interface AgreementItem {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface DownloadFormat {
  id: number;
  name: string;
  url: string;
}

export interface SearchParams {
  bookId: 'reglamento' | 'salidas' | 'lineamientos';
  pageId: number;
}

export interface SearchIndexItem {
  title: string;
  keywords: string;
  sectionId: SectionId;
  // Campos opcionales para navegación profunda en libros
  bookId?: 'reglamento' | 'salidas' | 'lineamientos';
  pageId?: number;
}