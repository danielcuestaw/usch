/**
 * DATOS DE CONVENIOS ESPECÍFICOS - FACULTAD DE HUMANIDADES Y ARTES
 * Estado: Lista completa actualizada con datos históricos y convenios internos.
 */

export interface FacultyAgreement {
    id: number;
    name: string;
    phone: string;
    email: string;
    programs: string;
    website?: string; // Campo opcional para URL
}
  
export const FACULTY_AGREEMENTS_DATA: FacultyAgreement[] = [
    { 
        id: 1, 
        name: "FUNDACIÓN ESCUELA DE TALLER DE BUENAVENTURA", 
        phone: "(602) 297 2293, 314 682 3006, 312 456 7890", 
        email: "fundacion@escueladetallerbuenaventura.org, comunicaciones@escuelatallerbuenaventura.org", 
        programs: "Trabajo Social" 
    },
    { 
        id: 2, 
        name: "LICEO DEL EJÉRCITO PICHINCHA", 
        phone: "(602) 524 4400, 318 282 4759, 318 316 3357", 
        email: "liceopichincha@ejercito.mil.co, secretariaacademica.pichincha@liceosejercito.edu.co, administracionlipic@liceosejercito.edu.co", 
        programs: "Trabajo Social" 
    },
    { 
        id: 3, 
        name: "LOGÍSTICA Y SERVICIOS EMPRESARIALES S.A.S ALOHA", 
        phone: "318 735 9421, 314 868 1819, 2 375 6976", 
        email: "alohaempresarial@gmail.com, comercial@especialesaloha.com", 
        programs: "Publicidad" 
    },
    { 
        id: 4, 
        name: "CODYD S.A.S", 
        phone: "310 456 8872, 317 674 3776, 318 411 8484", 
        email: "contacto@codyd.com.co, info@codyd.com.co", 
        programs: "Publicidad" 
    },
    { 
        id: 5, 
        name: "CALI WEB S.A.S", 
        phone: "(602) 489 9900", 
        email: "info@caliweb.com.co", 
        programs: "Comunicación Social, Publicidad" 
    },
    { 
        id: 6, 
        name: "EMBLUE GROUP", 
        phone: "301 554 2299", 
        email: "contacto@embluegroup.com", 
        programs: "Comunicación Social, Publicidad" 
    },
    { 
        id: 7, 
        name: "SEMMA - SEMBRANDO EL MAÑANA", 
        phone: "312 877 6654", 
        email: "sembrandoelmanana@gmail.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 8, 
        name: "ONG CRECER EN FAMILIA", 
        phone: "(601) 744 1616, 334 5444, 316 528 2646", 
        email: "contacto@crecerenfamilia.org, administrativoprincipal@crecefamilia.org", 
        programs: "Trabajo Social" 
    },
    { 
        id: 9, 
        name: "FUDIGUA", 
        phone: "(602) 230 1145", 
        email: "fundacionfudigua@gmail.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 10, 
        name: "ACIEM VALLE", 
        phone: "(602) 558 7466", 
        email: "aciemvalle@aciem.org", 
        programs: "Comunicación Social, Publicidad" 
    },
    { 
        id: 11, 
        name: "FUNDACIÓN MUNDO MEJOR", 
        phone: "315 602 8899, 602 668 0042, 316 529 5455", 
        email: "fundacionmundomejor@gmail.com, info@fundacionfsco.org", 
        website: "https://fundacionsmco.org/",
        programs: "Trabajo Social" 
    },
    { 
        id: 12, 
        name: "CORPORACIÓN MISIÓN CIUDAD GLOBAL", 
        phone: "317 512 3344", 
        email: "misionciudadglobal@gmail.com", 
        programs: "Trabajo Social, Comunicación Social" 
    },
    { 
        id: 13, 
        name: "FUNDACIÓN CASA LIBERTAD", 
        phone: "(602) 891 3344", 
        email: "casalibertad@gmail.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 14, 
        name: "TEATRO ESQUINA LATINA", 
        phone: "(602) 892 4545, 314 519 7549", 
        email: "info@esquinalatina.org, contactos@esquinalatina.org", 
        website: "https://esquinalatina.org/contacto/",
        programs: "Comunicación Social, Publicidad" 
    },
    { 
        id: 15, 
        name: "GRANDANUKE AGENCIA DE MARKETING", 
        phone: "314 667 8833", 
        email: "contacto@grandanuke.com", 
        programs: "Publicidad" 
    },
    { 
        id: 16, 
        name: "LAKES FILM PRODUCTORA", 
        phone: "300 552 1188, 320 609 2801", 
        email: "lakesfilm@gmail.com", 
        programs: "Comunicación Social, Publicidad" 
    },
    { 
        id: 17, 
        name: "RECOMPAS", 
        phone: "(602) 667 8899", 
        email: "recompas@gmail.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 18, 
        name: "PARTNER COMUNICACIÓN SAS", 
        phone: "312 798 4066, 314 848 4334, 323 582 5446", 
        email: "hola@partnercomunicacion.co, guillermodiaz@partnercomunicacion.co, administrativo@partnercomunicacion.co", 
        website: "https://partnercomunicacion.co/contacto/",
        programs: "Comunicación Social, Publicidad" 
    },
    { 
        id: 19, 
        name: "GESTORA FENIX SAS", 
        phone: "315 998 2211, 318 270 4062", 
        email: "gestorafenix@gmail.com", 
        programs: "Publicidad" 
    },
    { 
        id: 20, 
        name: "ALCALDÍA DE JAMUNDÍ", 
        phone: "(602) 516 9000, (602) 877 9000", 
        email: "contactenos@jamundi.gov.co", 
        programs: "Trabajo Social, Comunicación Social" 
    },
    { 
        id: 21, 
        name: "CENTRO DE SOLIDARIDAD LA ESPERANZA CESOLES", 
        phone: "313 262 4443, 312 202 0431", 
        email: "cesoles@gmail.com, cesoles@cesoles.org", 
        website: "https://cesoles.org/index.php/es/home-8",
        programs: "Trabajo Social" 
    },
    { 
        id: 22, 
        name: "FUNDACIÓN UNBOUND PROYECTO CALI", 
        phone: "(601) 745 0000, 310 646 1326, 318 766 0002", 
        email: "info@unbound.org, correspondenciacali@intl.unbound.org", 
        programs: "Trabajo Social" 
    },
    { 
        id: 23, 
        name: "NOTICIERO NOTI5", 
        phone: "(602) 485 0055", 
        email: "noti5@canalregional.com", 
        programs: "Comunicación Social" 
    },
    { 
        id: 24, 
        name: "FUNDACIÓN JUVENTUD, ARTE Y VIDA", 
        phone: "317 665 8899", 
        email: "fundacionjav@gmail.com", 
        programs: "Trabajo Social, Comunicación Social" 
    },
    { 
        id: 25, 
        name: "CONTACTO, GESTIÓN Y SOLUCIONES", 
        phone: "316 561 4416", 
        email: "info@contactogestionysoluciones.com", 
        programs: "Publicidad" 
    },
    { 
        id: 26, 
        name: "LOYALTY SHOES", 
        phone: "311 778 9900", 
        email: "loyaltyshoes@gmail.com", 
        programs: "Publicidad" 
    },
    { 
        id: 27, 
        name: "LIGA VALLECAUCANA DE FÚTBOL", 
        phone: "(602) 553 9353", 
        email: "ligavalle@difutbol.com.co", 
        programs: "Comunicación Social, Publicidad" 
    },
    { 
        id: 28, 
        name: "ALIANZA FRANCESA DE CALI", 
        phone: "316 479 9650, 317 740 8109, (602) 661 3134", 
        email: "asesor.cali@alianzafrancesa.edu.co, contacto@flambee.com.co", 
        website: "https://cali.alianzafrancesa.edu.co/contacto/",
        programs: "Comunicación Social, Publicidad" 
    },
    { 
        id: 29, 
        name: "INCIVA", 
        phone: "602 514 68 48", 
        email: "divulgacion@inciva.gov.co", 
        programs: "Comunicación Social, Trabajo Social" 
    },
    { 
        id: 30, 
        name: "FUNDACIÓN PETRONIO ÁLVAREZ CULTURA ARTÍSTICA", 
        phone: "602 668 3456", 
        email: "info@petronioalvarez.org", 
        programs: "Comunicación Social, Trabajo Social" 
    },
    { 
        id: 31, 
        name: "ALCALDÍA DE SANTIAGO DE CALI", 
        phone: "602 887 9020, 01 8000 222 195", 
        email: "contactenos@cali.gov.co, notificacionesjudiciales@cali.gov.co", 
        programs: "Trabajo Social, Comunicación Social" 
    },
    { 
        id: 32, 
        name: "CODHES", 
        phone: "1 381 3565, (1) 232 5666", 
        email: "codhes@codhes.org.co, codhes@codhes.org", 
        website: "http://www.codhes.org/",
        programs: "Trabajo Social" 
    },
    { 
        id: 33, 
        name: "CANAL 2 - CECAN MEDIA S.A.S", 
        phone: "602 489 1929", 
        email: "comercial@canalcon2.com", 
        programs: "Comunicación Social" 
    },
    { 
        id: 34, 
        name: "EL PAÍS S.A.", 
        phone: "602 883 8000, (1) 382 8787", 
        email: "servicios@elpais.com.co, mail@elpais.com.co", 
        programs: "Comunicación Social" 
    },
    { 
        id: 35, 
        name: "CABLE NOTICIAS TV S.A.S", 
        phone: "603 385 7760", 
        email: "contacto@cablenoticias.tv", 
        programs: "Comunicación Social" 
    },
    { 
        id: 36, 
        name: "FUNDACIÓN EMPODÉRAME", 
        phone: "310 777 2233", 
        email: "fundacionempoderame@gmail.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 37, 
        name: "WORLD VISION INTERNATIONAL", 
        phone: "1 657 5959", 
        email: "colombia@worldvision.org", 
        programs: "Trabajo Social" 
    },
    { 
        id: 38, 
        name: "FUNDACIÓN CLUB CAMPESTRE DE CALI", 
        phone: "(602) 331 9090", 
        email: "fundacion@clubcampestre.com.co", 
        programs: "Trabajo Social" 
    },
    { 
        id: 39, 
        name: "BANCO DE ALIMENTOS DE CALI", 
        phone: "(602) 524 6060, 601 573 2910", 
        email: "direccion@bancodealimentoscali.org, comunicaciones@bancodealimentos.org", 
        programs: "Trabajo Social" 
    },
    { 
        id: 40, 
        name: "CONCEJO DISTRITAL DE SANTIAGO DE CALI", 
        phone: "(602) 667 8200, (602) 668 0000", 
        email: "concejo@cali.gov.co", 
        programs: "Trabajo Social" 
    },
    { 
        id: 41, 
        name: "FUNDACIÓN NUEVO COMIENZO", 
        phone: "315 487 2219", 
        email: "fundacionnuevocomienzocali@gmail.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 42, 
        name: "FUNDACIÓN SEMBRANDO EL MAÑANA (HISTÓRICA)", 
        phone: "312 877 6654", 
        email: "sembrandoelmanana@gmail.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 43, 
        name: "UNIVERSIDAD DE CALDAS", 
        phone: "(606) 878 1500, (6) 887 7000", 
        email: "rectoria@ucaldas.edu.co", 
        website: "http://www.ucaldas.edu.co",
        programs: "Comunicación Social" 
    },
    { 
        id: 44, 
        name: "UNIVERSIDAD DE LA AMAZONIA", 
        phone: "(608) 435 8786, (8) 744 4000", 
        email: "contactenos@uniamazonia.edu.co, info@uam.edu.co", 
        website: "http://www.uam.edu.co",
        programs: "Comunicación Social" 
    },
    { 
        id: 45, 
        name: "CLÍNICA DE OFTALMOLOGÍA DE CALI", 
        phone: "(602) 486 0707, (602) 552 0890, 315 397 6060", 
        email: "servicioalcliente@clinicaoftalmologicadecali.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 46, 
        name: "CENTRO MÉDICO DR. CAMPO", 
        phone: "315 573 8899", 
        email: "centromedicodrcampo@gmail.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 47, 
        name: "INSTITUTO PARA NIÑOS CIEGOS Y SORDOS", 
        phone: "(602) 554 2323, 322 781 3213", 
        email: "inicosvalle@gmail.com, auxiliar.ninosciegos@gmail.com, admo.ninosciegos@gmail.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 48, 
        name: "VACUNCENTER IPS", 
        phone: "301 764 9090, 310 359 0908, 312 884 5788", 
        email: "vacuncenterips@gmail.com, info@vacuncenter.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 49, 
        name: "SOPORTE VITAL CALI S.A.S", 
        phone: "317 639 1122", 
        email: "soportevitalcali@gmail.com", 
        programs: "Trabajo Social" 
    },
    { 
        id: 50, 
        name: "BIENESTAR UNIVERSITARIO USC", 
        phone: "(602) 518 3000", 
        email: "bienestaruniversitario@usc.edu.co", 
        programs: "Trabajo Social, Comunicación Social"
    },
    { 
        id: 51, 
        name: "DIRECCIÓN DE EXTENSIÓN Y PROYECCIÓN SOCIAL USC", 
        phone: "(602) 518 3000 Ext. 9080", 
        email: "extensionfha@usc.edu.co", 
        programs: "Trabajo Social, Comunicación Social, Publicidad"
    },
    { 
        id: 52, 
        name: "DEPARTAMENTO DE GESTIÓN HUMANA USC", 
        phone: "(602) 518 3000", 
        email: "gestionhumana@usc.edu.co", 
        programs: "Trabajo Social, Comunicación Social"
    },
    { 
        id: 53, 
        name: "CISOH", 
        phone: "(602) 518 3000", 
        email: "cisoh@usc.edu.co", 
        programs: "Trabajo Social"
    },
    { 
        id: 54, 
        name: "COORDINACIÓN DE PRÁCTICAS Y PASANTÍAS FHA", 
        phone: "(602) 518 3000 Ext. 9080", 
        email: "practicasfha@usc.edu.co", 
        programs: "Trabajo Social, Comunicación Social, Publicidad"
    },
    { 
        id: 55, 
        name: "DIRECCIÓN PROGRAMA TRABAJO SOCIAL", 
        phone: "(602) 518 3000 Ext. 9018", 
        email: "direcciontrabajosocial@usc.edu.co", 
        programs: "Trabajo Social"
    },
    { 
        id: 56, 
        name: "COORDINACIÓN DE EXTENSIÓN FHA", 
        phone: "(602) 518 3000 Ext. 9080", 
        email: "extensionfha@usc.edu.co", 
        programs: "Trabajo Social, Comunicación Social, Publicidad"
    },
    // --- NUEVOS CONVENIOS AÑADIDOS (SOLICITUD PUBLICIDAD) ---
    {
        id: 57,
        name: "ARDOR AGENCIA DE MARKETING",
        phone: "+1 980-777-0277, +61 (0418) 197 078",
        email: "ardornetwork@gmail.com, info@ardoritsolutions.com, info@ardorpeople.com.au",
        programs: "Publicidad"
    },
    {
        id: 58,
        name: "CONTRALORÍA DE SANTIAGO DE CALI",
        phone: "(602) 644 2000, 3126619322, 01-8000-220098",
        email: "contralor@contraloriacali.gov.co, participaciudadano@contraloriacali.gov.co, notificacionesjudiciales@contraloriacali.gov.co",
        programs: "Publicidad"
    },
    {
        id: 59,
        name: "POLLOS BUCANERO",
        phone: "01 8000 183031, (602) 6853030",
        email: "servicioalcliente_colombia@cargill.com, consultaproveedores_bucanero@cargill.com",
        programs: "Publicidad"
    },
    {
        id: 60,
        name: "GRUPO GPO SAS",
        phone: "+57 317 664 6595",
        email: "info@grupogpo.com",
        programs: "Publicidad"
    },
    {
        id: 61,
        name: "UNIVERSIDAD LIBRE (SECCIONAL CALI)",
        phone: "(602) 524 0007, 01 8000 180560",
        email: "certificaciones.registro.cali@unilibre.edu.co, promocion@unilibre.edu.co, conjuridico.cali@unilibre.edu.co",
        programs: "Publicidad"
    },
    {
        id: 62,
        name: "JOYERÍA SUAREZ",
        phone: "+34 917 811 680, +34 680 744 529",
        email: "atc@joyeriasuarez.com, dpo@joyeriasuarez.com",
        programs: "Publicidad"
    },
    {
        id: 63,
        name: "SECRETARÍA DE PAZ Y CULTURA CIUDADANA",
        phone: "(602) 6618707, (602) 8879020, 01 8000 222 195",
        email: "pazyculturaciudadana@cali.gov.co, contactenos@cali.gov.co, nigeria.renteria@cali.gov.co",
        programs: "Publicidad"
    }
];