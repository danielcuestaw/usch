import { BookPage } from '../types';

// Helper for consistent list styling
const listStyle = "space-y-3 text-[11px] md:text-xs text-gray-700 font-medium leading-relaxed";
const headerStyle = "text-usc-blue font-black text-3xl mb-4 border-b-2 border-usc-red inline-block";
const subHeaderStyle = "text-gray-400 font-bold text-xs uppercase mb-4 tracking-widest";

export const AGREEMENTS_BOOK_DATA: BookPage[] = [
  {
    id: 1,
    title: "Portada",
    content: `
      <div class="h-full w-full flex flex-col items-center justify-center text-center relative overflow-hidden bg-usc-darkBlue p-4 border-[12px] border-usc-blue/50">
         <!-- Decorative Border -->
         <div class="absolute inset-4 border-2 border-[#d4af37] opacity-50 rounded-sm"></div>
         <div class="absolute inset-6 border border-[#d4af37] opacity-30 rounded-sm"></div>

         <!-- Logo -->
         <div class="mb-10 relative z-10">
            <img src="https://irs.usc.edu.co/Logo-Acreditaci%C3%B3n-Institucional.png" alt="Acreditación Institucional" class="h-32 md:h-48 mx-auto object-contain" />
         </div>

         <!-- Title -->
         <div class="relative z-10 space-y-4">
            <h1 class="text-[#e6c288] font-display font-black text-3xl md:text-5xl uppercase tracking-widest drop-shadow-lg leading-tight">
              Convenios<br/>Activos
            </h1>
            <div class="w-24 h-1 bg-[#d4af37] mx-auto rounded-full"></div>
            <h2 class="text-white/80 font-bold text-lg md:text-xl uppercase tracking-widest">
              Prácticas y Pasantías
            </h2>
         </div>

         <!-- Bottom Text -->
         <div class="mt-auto relative z-10">
            <p class="text-[#e6c288] text-xs font-serif italic tracking-wide">Facultad de Humanidades y Artes</p>
            <p class="text-white/40 text-[10px] font-bold mt-2">Universidad Santiago de Cali</p>
         </div>
      </div>
    `
  },
  {
    id: 2,
    title: "2017",
    content: `
      <div class="h-full flex flex-col justify-center">
        <h3 class="${headerStyle}">2017</h3>
        <ul class="${listStyle}">
            <li>• Alianza francesa de Cali.</li>
            <li>• Corporación Educativa para la Tecnología y el Trabajo (Liceo Porvenir).</li>
            <li>• Franco Consultores S.A.S.</li>
            <li>• Instituto para la Investigación y la Preservación del Patrimonio Cultural y Natural del Valle del Cauca (INCIVA).</li>
        </ul>
        
        <div class="mt-8 border-t border-gray-200 pt-8">
            <h3 class="${headerStyle}">2018 (Parte I)</h3>
            <ul class="${listStyle}">
                <li>• Caracol S.A.</li>
                <li>• Colegio Bilingüe Lancaster.</li>
                <li>• Colegio Empresarial Moderno.</li>
                <li>• Colegio San Fernando Rey.</li>
                <li>• Consejo Superior de la Judicatura.</li>
                <li>• Corporación de Padres de Familia del Colegio Inglés de los Andes.</li>
            </ul>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "2018 - 2019",
    content: `
      <div class="h-full flex flex-col justify-center">
         <h4 class="${subHeaderStyle}">Continuación 2018...</h4>
         <ul class="${listStyle} mb-8">
            <li>• Corporación Universitaria Autónoma de Cauca.</li>
            <li>• Fragancias y Sabores S.A.</li>
            <li>• Fundación Academia de Dibujo Profesional.</li>
            <li>• Fundación Educativa Claretiana (Colegio San Antonio María Claret).</li>
            <li>• Fundación para una Educación Integral (FINES).</li>
            <li>• Fundacipaz Colegio Técnico Comercial San Marcos.</li>
            <li>• Institución Educativa el Diamante.</li>
            <li>• Institución Educativa General Padilla.</li>
            <li>• Institución Educativa la Arboleda Campestre S.A.S.</li>
            <li>• Institución Educativa Politécnico Municipal de Cali.</li>
            <li>• Instituto Educativo Elizabeth Lorza.</li>
            <li>• Instituto Técnico Comercial Colombo Libanés.</li>
         </ul>

         <h3 class="${headerStyle}">2019</h3>
         <ul class="${listStyle}">
            <li>• Chemical Laboratorio S.A.S.</li>
            <li>• Fundación Créalo.</li>
            <li>• Fundación Educativa Emmanuel Internacional.</li>
            <li>• Fundación Los del Camino.</li>
            <li>• Protécnica Ingeniería S.A.S.</li>
            <li>• Santísimo Nombre de Jesús (Colegio Lacordaire).</li>
         </ul>
      </div>
    `
  },
  {
    id: 4,
    title: "2020 (Parte I)",
    content: `
      <div class="h-full flex flex-col justify-start pt-4">
        <h3 class="${headerStyle}">2020</h3>
        <ul class="${listStyle}">
            <li>• Ángel Diagnóstica S.A.S</li>
            <li>• Cable Noticias Tv S.A.S.</li>
            <li>• Central Truth S.A.S.</li>
            <li>• Centro Comercial Unicentro Palmira.</li>
            <li>• Club Deportivo Palmira Escarlata.</li>
            <li>• Colegio Hispanoamericano.</li>
            <li>• Colegio mi Bello Amanecer.</li>
            <li>• Connectki Ltd.</li>
            <li>• El Bando Creativo Cali S.A.S.</li>
            <li>• Essensale S.A.S.</li>
            <li>• Freeway Fcg Colombia S.A.S.</li>
            <li>• Fundación Educativa José Ángel Herrera Mora.</li>
            <li>• Fundación Mundo Mejor.</li>
            <li>• Fundación ÚNICO.</li>
        </ul>
      </div>
    `
  },
  {
    id: 5,
    title: "2020 (Parte II)",
    content: `
      <div class="h-full flex flex-col justify-start pt-4">
        <h4 class="${subHeaderStyle}">Continuación 2020...</h4>
        <ul class="${listStyle}">
            <li>• González Osorio Y Cía Ltda (Liceo Los Ángeles).</li>
            <li>• Jardín Infantil Tía Clarita.</li>
            <li>• Laboratorios Neo Ltda.</li>
            <li>• Laboratorio Q.F.A. S.A.S</li>
            <li>• Marka Marketing.</li>
            <li>• Neurobrand S.A.S.</li>
            <li>• Proclama del Cauca E.A.T.</li>
            <li>• Alcaldía de Cali (Stgo de Cali Distrito Especial).</li>
            <li>• Semillas Valle S.A.</li>
            <li>• Servimotos Cda S.A.S.</li>
            <li>• Sistema Informativo Cecan Media S.A.S - Canal 2.</li>
            <li>• Soham Acondicionamiento Y Rehabilitación Física S.A.S.</li>
            <li>• Soluciones Integradas para La Confección S.A.S.</li>
            <li>• Universidad de la Amazonia.</li>
            <li>• Vita Home S.A.S.</li>
        </ul>
      </div>
    `
  },
  {
      id: 6,
      title: "2021 (Parte I)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
          <h3 class="${headerStyle}">2021</h3>
          <ul class="${listStyle}">
            <li>• Alcaldía Municipal el Cerrito (Valle del Cauca).</li>
            <li>• Alcaldía Municipal de Caloto (Cauca).</li>
            <li>• Alianza Integral Com Cali.</li>
            <li>• Alkoes Colombia S.A.S.</li>
            <li>• Análisis Ambiental S.A.S.</li>
            <li>• Aptar Cali S.A.S.</li>
            <li>• Ar Marketing Digital.</li>
            <li>• ACODRES (Asociación Colombiana de la Industria Gastronómica).</li>
            <li>• Asociación de Ingenieros Profesionales de EMCALI.</li>
            <li>• Clínica de Oftalmología de Cali S.A.</li>
            <li>• CODHES (Consultoría para los Derechos Humanos).</li>
            <li>• El Anfitrión Colombia.</li>
            <li>• El País S.A. En Reorganización.</li>
            <li>• Emblue Btl S.A.S.</li>
          </ul>
        </div>
      `
  },
  {
      id: 7,
      title: "2021 (Parte II)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
          <h4 class="${subHeaderStyle}">Continuación 2021...</h4>
          <ul class="${listStyle}">
            <li>• Fundación Arquidiocesana Banco de Alimentos.</li>
            <li>• Fundación los Valles.</li>
            <li>• Fundación para la Captación e Investigación Médico-Biológica.</li>
            <li>• Fundación Petronio Álvarez Cultura Artística.</li>
            <li>• Fundación por un Anhelo De Vida del Valle.</li>
            <li>• Fundación Tía Nora.</li>
            <li>• Jardín Infantil Mickey Mouse.</li>
            <li>• Moda de Colombia S.A.S.</li>
            <li>• Municipio de Cumbitara.</li>
            <li>• Pacific Health Solutions S.A.S.</li>
            <li>• Paranova Films S.A.S.</li>
            <li>• Productos Naturesse S.A.S.</li>
            <li>• Rautex International.</li>
            <li>• Salamandra Solutions S.A.</li>
            <li>• Skala 1.1 Ingeniería S.A.S.</li>
            <li>• Teatro del Presagio.</li>
            <li>• Telepacífico.</li>
          </ul>
        </div>
      `
  },
  {
      id: 8,
      title: "2022 (Parte I)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
          <h3 class="${headerStyle}">2022</h3>
           <ul class="${listStyle}">
              <li>• Agroquinoa S.A.S.</li>
              <li>• Alianza G&G "La Montaña Supermercados".</li>
              <li>• América de Cali S.A. En reorganización.</li>
              <li>• American School Way.</li>
              <li>• Asohiva (Asociacion de Hogares Infantiles).</li>
              <li>• Ats y Cia S.A.S.</li>
              <li>• Bioéticos S.A.S.</li>
              <li>• Bionutrec S.A.S.</li>
              <li>• Cemex Colombia S.A.S</li>
              <li>• Centro de acondicionamiento físico Xparta Box.</li>
              <li>• Centro Educativo Horizontes.</li>
              <li>• Centro Living English Academy.</li>
              <li>• Centro Veterinario +kotas Jt.</li>
              <li>• Centro veterinario Peluditos Popular.</li>
              <li>• Clínica Veterinaria Pet's Life.</li>
           </ul>
        </div>
      `
  },
  {
      id: 9,
      title: "2022 (Parte II)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
           <h4 class="${subHeaderStyle}">Continuación 2022...</h4>
           <ul class="${listStyle}">
              <li>• Club Deportivo de Patinaje Speed Roller.</li>
              <li>• Colegio Andino.</li>
              <li>• Colegio Cooperativo Coomeva.</li>
              <li>• Colegio Cread.</li>
              <li>• Colegio Franciscano Fray Damián González.</li>
              <li>• Colegio Luis Carlos Galán Sarmiento.</li>
              <li>• Colegio Militar José Acevedo y Gómez.</li>
              <li>• Colegio mixto Luz y Vida.</li>
              <li>• Colegio Nuestra Señora de la Anunciación.</li>
              <li>• Colegio Tesla Bilingual School.</li>
              <li>• Comercialización Internacional Collections S.A.S.</li>
              <li>• Concejo Distrital de Santiago de Cali.</li>
              <li>• Corporación Talentum.</li>
              <li>• Creaciones & Innovaciones Martinez S.A.S.</li>
              <li>• Dinamica Consultoria Empresarial S.A.S.</li>
              <li>• Dr. Campo S.A.S</li>
              <li>• Empresa Experiencia Colombia.</li>
           </ul>
        </div>
      `
  },
  {
      id: 10,
      title: "2022 (Parte III)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
           <h4 class="${subHeaderStyle}">Continuación 2022...</h4>
           <ul class="${listStyle}">
              <li>• Encubex Colombia S.A.S.</li>
              <li>• INPEC EPPMSC - Cali (Villahermosa).</li>
              <li>• Fitobiocell S.A.S.</li>
              <li>• Fondo de Empleados Docentes Universidad del Valle.</li>
              <li>• Fundación Club Campestre de Cali Cambiando Vidas.</li>
              <li>• Fundación Club Kiwanis Sultana del Valle.</li>
              <li>• Fundación Empodérame.</li>
              <li>• Fundación Etnoeducadora Fetdahbenkos.</li>
              <li>• Fundación Futuros Genios.</li>
              <li>• Fundación Iberoamericana Al Arte.</li>
              <li>• Fundación Lazarolandía.</li>
              <li>• Fundación Unbound Proyecto Cali.</li>
              <li>• Fundación Zoológico de Cali.</li>
              <li>• Happiness Pets.</li>
           </ul>
        </div>
      `
  },
  {
      id: 11,
      title: "2022 (Parte IV)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
           <h4 class="${subHeaderStyle}">Continuación 2022...</h4>
           <ul class="${listStyle}">
              <li>• La Holanda Mascotas.</li>
              <li>• Hoteles Tsalach S.A.S.</li>
              <li>• Instituto Comercial Gran Colombia.</li>
              <li>• Institucion Educativa Agropecuaria Carrizales.</li>
              <li>• Institución Educativa Alfredo Posada Correa.</li>
              <li>• Institución Educativa Alvaro Echeverry Perea.</li>
              <li>• Institución Educativa Diocesana Jesús Adolescente.</li>
              <li>• Institución Educativa el Rodeo.</li>
              <li>• Institución Educativa Gotitas de Amor.</li>
              <li>• Institución Educativa Grupo Empresarial Piolin S.A.S.</li>
              <li>• Institución Educativa Inem Jorge Isaacs.</li>
              <li>• Institución Educativa José María Carbonell.</li>
              <li>• Institución Educativa Liceo los Guaypines.</li>
              <li>• Institución Educativa Liceo los Pinos.</li>
              <li>• Institución Educativa Técnica Santander de Quilichao.</li>
           </ul>
        </div>
      `
  },
  {
      id: 12,
      title: "2023 (Parte I)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
          <h3 class="${headerStyle}">2023</h3>
            <ul class="${listStyle}">
                <li>• Instituto Politécnico Comuna 21.</li>
                <li>• Instituto Técnico Agrícola- ITA.</li>
                <li>• Instituto Técnico Comercial Juan Pablo II.</li>
                <li>• Jardin Infantil Mentes Psico-dinámicas.</li>
                <li>• Jardín Infantil Piruetas.</li>
                <li>• Jardín Infantil Taller de Anik.</li>
                <li>• Jardín Infantil Un Mundo Por Crear.</li>
                <li>• Laboratorio Biocenter S.A.S.</li>
                <li>• Laboratorios Laverlam S.A.</li>
                <li>• Liceo Iguazú.</li>
                <li>• Liceo Infantil un Mundo de Sueños.</li>
                <li>• Liceo Mixto Emperador de Cali.</li>
                <li>• Liceo Pedagógico Ciencia y Valores.</li>
                <li>• Liceo Pedagógico Suroriental.</li>
                <li>• Liceo Quial S.A.S.</li>
                <li>• Lle Ser Ltda.</li>
            </ul>
        </div>
      `
  },
  {
      id: 13,
      title: "2023 (Parte II)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
          <h4 class="${subHeaderStyle}">Continuación 2023...</h4>
          <ul class="${listStyle}">
                <li>• Mindtech S.A.S.</li>
                <li>• Noches y Tardes Caleñas.</li>
                <li>• O´Celeste S.A.S.</li>
                <li>• Petit Notes S.A.S.</li>
                <li>• Pharm & Health Solutions S.A.S.</li>
                <li>• Promotora de Turismo Belisario Marin.</li>
                <li>• Rioja Turismo S.A.S.</li>
                <li>• Skin Farma S.A.S.</li>
                <li>• Surticampo S.A</li>
                <li>• TiQal S.A.S.</li>
                <li>• Travelmania Agencia de Viajes S.A.S.</li>
                <li>• World Vision International.</li>
                <li>• Xertica Colombia S.A.S.</li>
                <li>• Yemail & Daphne S.A.S.</li>
                <li>• Cervecería Usaca SAS - Restaurante Bar San Carlos</li>
                <li>• Crece Hair Center S.A.S</li>
          </ul>
        </div>
      `
  },
  {
      id: 14,
      title: "2023 (Parte III)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
          <h4 class="${subHeaderStyle}">Continuación 2023...</h4>
          <ul class="${listStyle}">
             <li>• Clini Mascotas.</li>
             <li>• Club Deportivo Aston Villa.</li>
             <li>• Codyd S.A.S.</li>
             <li>• Consultorio Veterinario Francisco Ramírez.</li>
             <li>• Farthon de Colombia.</li>
             <li>• Fronteras Pet.</li>
             <li>• Fundación Escuela Taller de Buenaventura.</li>
             <li>• Fundación Nuevo Comienzo.</li>
             <li>• Fundación Plan de Apoyo</li>
             <li>• Fundación Sembrando el Mañana.</li>
             <li>• Iglesia Presbiteriana Cumberland.</li>
             <li>• Ingenio del Occidente.</li>
             <li>• Instituto para Niños Ciegos y Sordos.</li>
             <li>• Jardín Infantil Melositos.</li>
             <li>• Jardín Infantil Pepe Grillo.</li>
             <li>• Jardín Infantil y Escuela Maternal los Bulliciosos.</li>
          </ul>
        </div>
      `
  },
  {
      id: 15,
      title: "2023 (Parte IV)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
          <h4 class="${subHeaderStyle}">Continuación 2023...</h4>
          <ul class="${listStyle}">
             <li>• Julian Jimenez Distribuciones S.A.S.</li>
             <li>• Laboratorio Nutrifarma</li>
             <li>• Lexema Tecnología S.A.S.</li>
             <li>• Liceo Montessori Bilingüe.</li>
             <li>• Liceos del Ejército Pichincha.</li>
             <li>• Logística y Servicios Empresariales S.A.S. ALOHA.</li>
             <li>• Mr. Dog Clínica Veterinaria.</li>
             <li>• Manar Techologies S.A.S.</li>
             <li>• Mao Mascotas.</li>
             <li>• Metálicas Jep S.A..S</li>
             <li>• Mi Bebe Feliz - Liceo Galeon.</li>
             <li>• ONG Crecer en Familia.</li>
             <li>• Promagistral.</li>
             <li>• Sociedad las Lajas S.A.S.</li>
             <li>• Universidad de Caldas.</li>
             <li>• Vacuncenter Ips.</li>
             <li>• Veterinaria Exotivet.</li>
             <li>• Veos Technology S.A.S - Santiago Vélez.</li>
             <li>• Ambientes de Aprendizaje (Cali)</li>
             <li>• Caliweb.</li>
             <li>• Cámara De Comercio de Palmira.</li>
             <li>• Centro Médico Dr. Campo</li>
          </ul>
        </div>
      `
  },
  {
      id: 16,
      title: "2024 (Parte I)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
           <h3 class="${headerStyle}">2024</h3>
              <ul class="${listStyle}">
                <li>• Academia de Idiomas Buver Language School</li>
                <li>• Alcaldía Yumbo</li>
                <li>• Alexander Martínez Lozano</li>
                <li>• Animaia Clinica Veterinaria</li>
                <li>• Animaila Tienda y Spa Para Mascota S.A.S</li>
                <li>• Animal Center Clínica Veterinaria</li>
                <li>• Antinos Restaurante y Cafetería</li>
                <li>• Arka Veterinaria</li>
                <li>• Asociación Colombiana de Ingenieros Aciem Valle</li>
                <li>• Asociación Colombiana De Protección Estatal</li>
                <li>• Beedron STA Asociados</li>
                <li>• Carnes y Mariscos Luz</li>
                <li>• Centro de Estipulación Precoz Crecer</li>
                <li>• Centro Solidaridad la Esperanza Cesoles</li>
                <li>• Centro Veterinario Todocan</li>
                <li>• Cerdos del Valle</li>
              </ul>
        </div>
      `
  },
  {
      id: 17,
      title: "2024 (Parte II)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
           <h4 class="${subHeaderStyle}">Continuación 2024...</h4>
              <ul class="${listStyle}">
                <li>• Cisvet Clínica Veterinaria</li>
                <li>• Clínica Paraíso De La Mascota</li>
                <li>• Clínica Veterinaria Hipocannes IPS</li>
                <li>• Clinica Veterinaria Latir Animal</li>
                <li>• Clínica Veterinaria Vetzoo</li>
                <li>• Club Deportivo Fair Play</li>
                <li>• Colegio de San Luis Gonzaga de Cali</li>
                <li>• Colegio Ekklesia</li>
                <li>• Colegio el Hogar</li>
                <li>• Colegio San Francisco de Asis</li>
                <li>• Colegio Santa Inés Campestre</li>
                <li>• Consulado Honorario España</li>
                <li>• Recrevalle</li>
                <li>• Corporación Misión Global</li>
                <li>• Corporación Proyectos Filipides</li>
                <li>• Corporación Red Consejos del Pacifico Sur Recompas</li>
                <li>• Country Veterinary</li>
                <li>• Dimavet</li>
                <li>• Dr. Corredor</li>
                <li>• Dr. Piedrahita Clínica Veterinaria</li>
              </ul>
        </div>
      `
  },
  {
      id: 18,
      title: "2024 (Parte III)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
           <h4 class="${subHeaderStyle}">Continuación 2024...</h4>
              <ul class="${listStyle}">
                <li>• Droquimicos Cali S.A.S</li>
                <li>• Dulce Dulcinea</li>
                <li>• Farallones Vet. Centro Veterinario</li>
                <li>• Farmart LTDA</li>
                <li>• Funda Paz Santa Juana De Arco</li>
                <li>• Fundación Casa Libertad</li>
                <li>• Fundación Diveramigos</li>
                <li>• Fundación Mundo Mejor</li>
                <li>• Fundación Proyectando Vidas - Funprovidas</li>
                <li>• Fundación Santa Inés</li>
                <li>• Genfar Desarrollo y Manufacturas</li>
                <li>• Gestora Finex</li>
                <li>• Gimnasio Campestre Pierre Faure</li>
                <li>• Gimnasio Moderno del Valle En C.S</li>
                <li>• Grandanuke Agencia de Marketing Digital</li>
                <li>• Grupo De Teatro Esquina Latina</li>
                <li>• Hospital Animal</li>
                <li>• Institución Educativa Ateneo-Sede Eloy Silva</li>
                <li>• Institución Educativa Cristóbal Colón</li>
                <li>• Institución Educativa Francisco de José Caldas</li>
              </ul>
        </div>
      `
  },
  {
      id: 19,
      title: "2024 (Parte IV)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
           <h4 class="${subHeaderStyle}">Continuación 2024...</h4>
              <ul class="${listStyle}">
                <li>• Institución Educativa José María Obando</li>
                <li>• Institución Educativa Juan De Ampudia</li>
                <li>• Institución Educativa Nuevo Latir</li>
                <li>• Institución Educativa Republica de Israel</li>
                <li>• I.E. Técnico Industrial Pedro Antonio Molina</li>
                <li>• Invest S.A.S</li>
                <li>• Jardín Infantil Y Escuela Maternal El Patico</li>
                <li>• JGB S.A</li>
                <li>• La granja almacén agroveterinario</li>
                <li>• Labconquim S.A.S</li>
                <li>• Labconquin S.A.S</li>
                <li>• Laboratorio de Diagnostico Veterinario del Valle</li>
                <li>• Laboratorio Microbioxa S.A.S</li>
                <li>• Laboratorio Veterinario del Valle</li>
                <li>• Lakes Films Productora Audivisual</li>
                <li>• Liceo Comercial la Milagrosa</li>
                <li>• Liceo Comercial Santiago Niampira</li>
                <li>• Liceo Fernando Savater</li>
                <li>• Maray Medicina Veterinaria</li>
                <li>• Maria Goretti y Compañía S A S</li>
                <li>• Medvet Cali Medicina</li>
              </ul>
        </div>
      `
  },
  {
      id: 20,
      title: "2024 (Final)",
      content: `
        <div class="h-full flex flex-col justify-start pt-4">
          <h4 class="${subHeaderStyle}">Continuación 2024...</h4>
          <ul class="${listStyle} mb-8">
             <li>• Mountain Training la Innovación</li>
             <li>• Municipio de Jamundí</li>
             <li>• Panadería Restaurante Kevin Pan</li>
             <li>• Panadería y Pastelería la Cocina de Ervin y Wilder</li>
             <li>• Partido Político Renaciente</li>
             <li>• Partner Comunicación</li>
             <li>• Personería Municipal de Guadalajara De Buga</li>
             <li>• Pet Inc Clínica Veterinaria S.A.S</li>
             <li>• Pet Market Cali Clínica Veterinaria S.A.S</li>
             <li>• Sg Technology Net</li>
             <li>• Soporte Vital Cali S.A.S</li>
             <li>• Umami Group S.A.S</li>
             <li>• Valeah SAS BIC</li>
             <li>• Veterinario el Sabueso</li>
             <li>• Víctor Andrés Pisso Serna (Vittastetik Pharma)</li>
             <li>• Zamudio Clínica Veterinaria Sur</li>
             <li>• Zaronine Latam</li>
             <li>• Zoonanimal</li>
             <li>• Zooricatos Pet Club</li>
          </ul>

          <div class="mt-auto bg-usc-blue/5 p-4 rounded-lg border border-usc-blue/20 text-center">
             <h3 class="text-usc-blue font-black text-sm uppercase mb-1">Informes:</h3>
             <p class="text-gray-800 font-bold text-xs">cgpracticas@usc.edu.co</p>
             <p class="text-gray-800 font-bold text-xs">PBX: (602) 5183000 EXT. 785</p>
          </div>
        </div>
      `
  }
];