/**
 * ARCHIVO PRINCIPAL DE LINEAMIENTOS DE PRÁCTICAS (AGREGADOR)
 */

import { BookPage } from '../types';
import { GL_PART_1 } from './chapters_guidelines/part1_intro';
import { GL_PART_2 } from './chapters_guidelines/part2_modalities';
import { GL_PART_3 } from './chapters_guidelines/part3_scenarios';
import { GL_PART_4 } from './chapters_guidelines/part4_student';
import { GL_PART_5 } from './chapters_guidelines/part5_final';

export const GUIDELINES_DATA: BookPage[] = [
  ...GL_PART_1,
  ...GL_PART_2,
  ...GL_PART_3,
  ...GL_PART_4,
  ...GL_PART_5
];