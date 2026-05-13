/**
 * ARCHIVO PRINCIPAL DE LINEAMIENTOS DE SALIDAS (AGREGADOR)
 */

import { BookPage } from '../types';
import { FT_PART_1 } from './chapters_fieldtrips/part1_intro';
import { FT_PART_2 } from './chapters_fieldtrips/part2_details';
import { FT_PART_3 } from './chapters_fieldtrips/part3_final';

export const FIELDTRIPS_DATA: BookPage[] = [
  ...FT_PART_1,
  ...FT_PART_2,
  ...FT_PART_3
];