/**
 * DATOS DEL CARRUSEL DE CONVENIOS
 */
import { AgreementItem } from '../types';
import { USC_CONVENIO_ALCALDIA_URL, USC_CONVENIO_CEF_URL, USC_CONVENIO_ELPAIS_URL, USC_CONVENIO_TELEPACIFICO_URL } from '../constants';

export const CAROUSEL_AGREEMENTS: AgreementItem[] = [
  {
    id: 1,
    name: "Alcaldía de Santiago de Cali",
    image: USC_CONVENIO_ALCALDIA_URL,
    description: "Alianza estratégica para el desarrollo social y cultural de la ciudad."
  },
  {
    id: 2,
    name: "Telepacífico",
    image: USC_CONVENIO_TELEPACIFICO_URL,
    description: "Plataforma de difusión y creación audiovisual regional."
  },
  {
    id: 3,
    name: "El País",
    image: USC_CONVENIO_ELPAIS_URL,
    description: "Colaboración con el principal medio impreso del suroccidente colombiano."
  },
  {
    id: 4,
    name: "ONG Crecer en Familia",
    image:USC_CONVENIO_CEF_URL,
    description: "Trabajo conjunto en pro de la niñez y la familia." 
  }
];