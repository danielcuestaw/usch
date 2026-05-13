/**
 * ARCHIVO PRINCIPAL DE REGLAMENTO (AGREGADOR)
 * ----------------------------------------------------------------------
 * ¿Para qué sirve?
 * Este archivo actúa como el "encuadernador" del libro.
 * NO CONTIENE TEXTO DIRECTAMENTE.
 * 
 * Su única función es importar las partes individuales (capítulos)
 * desde la carpeta 'chapters/' y unirlas en una sola lista maestra.
 * 
 * Si creas un nuevo capítulo, impórtalo aquí y agrégalo al array REGULATIONS_DATA.
 */

import { BookPage } from '../types';
import { PART_1 } from './chapters/part1_intro';
import { PART_2 } from './chapters/part2_modalities';
import { PART_3 } from './chapters/part3_scenarios';
import { PART_4 } from './chapters/part4_requirements';
import { PART_5 } from './chapters/part5_duties';
import { PART_6 } from './chapters/part6_closing';

export const REGULATIONS_DATA: BookPage[] = [
  ...PART_1,
  ...PART_2,
  ...PART_3,
  ...PART_4,
  ...PART_5,
  ...PART_6
];