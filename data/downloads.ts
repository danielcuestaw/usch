/**
 * DATOS DE FORMATOS ACADÉMICOS PARA DESCARGA Y ENLACES PDF
 */
import { DownloadFormat } from '../types';
import { 
USC_FORMATO_SALIDAS_ACADEMICAS_URL,
USC_FORMATO_ASISTENCIA_SALIDAS_URL,
USC_FORMATO_REG_OPERADOR_URL,
USC_FORMATO_ENCUESTA_SATISFACCION_URL,
USC_FORMATO_RESP_MENORES_EDAD_URL,
USC_FORMATO_CONVENIO_MACRO_PRACTICAS_URL,
USC_FORMATO_HOJA_VIDA_INST_URL,
USC_FORMATO_ARL_URL,
USC_FORMATO_CONVENIO_ESPECIFICO_URL
} from '../constants';

export const DOWNLOAD_FORMATS: DownloadFormat[] = [
    { id: 1, name: "Salidas académicas", url: USC_FORMATO_SALIDAS_ACADEMICAS_URL },
    { id: 2, name: "Formato de asistencia", url: USC_FORMATO_ASISTENCIA_SALIDAS_URL },
    { id: 3, name: "Registro del Operador", url: USC_FORMATO_REG_OPERADOR_URL },
    { id: 4, name: "Encuesta de Satisfacción", url: USC_FORMATO_ENCUESTA_SATISFACCION_URL },
    { id: 5, name: "Formato de Responsabilidad para Estudiantes Menores de Edad", url: USC_FORMATO_RESP_MENORES_EDAD_URL},
    { id: 6, name: "Modelo de Convenio Marco de Prácticas y Pasantías", url: USC_FORMATO_CONVENIO_MACRO_PRACTICAS_URL },
    { id: 7, name: "Modelo convenio específico", url:USC_FORMATO_CONVENIO_ESPECIFICO_URL },
    { id: 8, name: "Modelo Hoja de Vida Institucional Para Prácticas", url: USC_FORMATO_HOJA_VIDA_INST_URL },
    { id: 9, name: "Formato ARL", url: USC_FORMATO_ARL_URL }
]; 

// URLs Constantes para los libros PDF principales
export const PDF_URLS = {
    regulations: "https://www.usc.edu.co/wp-content/uploads/2024/07/REGLAMENTO-PRACTICAS-FACULTAD-FHA_2024.pdf",
    fieldtrips: "https://www.usc.edu.co/wp-content/uploads/2022/11/Lineamientos_Generales_Salidas_Acadmicas-USC.pdf",
    guidelines: "https://usceduco7466-my.sharepoint.com/personal/webmaster_usc_edu_co/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fwebmaster%5Fusc%5Fedu%5Fco%2FDocuments%2FNormatividad%20USC%2FResoluciones%20de%20Rector%C3%ADa%2F2024%2FRESOLUCI%C3%93N%20DE%20RECTOR%C3%8DA%20No%2E%20R%2D106%20DE%202024%20Reglamento%20de%20Pr%C3%A1cticas%20y%20Pasant%C3%ADas%202024%2Epdf&parent=%2Fpersonal%2Fwebmaster%5Fusc%5Fedu%5Fco%2FDocuments%2FNormatividad%20USC%2FResoluciones%20de%20Rector%C3%ADa%2F2024&ga=1"
};