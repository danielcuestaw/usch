/**
 * GUÍA INTERACTIVA: REGISTRO Y HOJA DE VIDA (SIPPU)
 * Contenido textual exacto proporcionado por el usuario.
 */

import { BookPage } from '../types';

export const GUIDE_REGISTRATION_DATA: BookPage[] = [
    {
        id: 1,
        title: "Portada",
        content: `
        <div class="h-full flex flex-col items-center justify-center text-center font-serif border-4 border-double border-usc-blue p-6 m-2">
          <div class="mb-8">
            <img src="https://irs.usc.edu.co/Logo-Acreditaci%C3%B3n-Institucional.png" alt="Acreditación Institucional" class="h-28 md:h-36 mx-auto mb-4 object-contain" />
          </div>
          <h1 class="font-black text-gray-900 text-2xl md:text-3xl uppercase tracking-widest mb-4">Guía SIPAC</h1>
          <div class="w-16 h-1 bg-usc-red mx-auto mb-4"></div>
          <h2 class="font-bold text-gray-700 text-lg uppercase mb-2">Hoja de Vida y Registro de Centro de Práctica</h2>
          <p class="text-sm text-gray-500 font-bold mb-8">Instructivo Paso a Paso</p>
          
          <div class="mt-auto text-xs text-gray-500 italic">
            <p>Coordinación de Prácticas</p>
            <p>Facultad de Humanidades y Artes</p>
          </div>
        </div>
        `
    },
    {
        id: 2,
        title: "Hoja de Vida: Momentos 1 y 2",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <div class="mb-4 text-center">
             <h3 class="font-black text-base uppercase text-usc-blue">HOJA DE VIDA</h3>
           </div>

           <p class="mb-2 font-bold">Momento 1: Ingreso a la plataforma</p>
           <p class="mb-4">Para comenzar, abre tu navegador e ingresa a la siguiente dirección: SIPAC | USC - Iniciar sesión</p>
           <p class="mb-4 italic text-xs">(Mostrar la URL en pantalla y el portal de inicio de sesión)</p>
           <p class="mb-4">Allí te pedirá un usuario y contraseña. Son los mismos datos que utilizas para ingresar al portal SINU, donde revisas tus notas académicas.</p>
           <p class="mb-6"><span class="font-bold">Recuerda:</span> Tu usuario es tu número de cédula y la contraseña es la misma que registraste en el SINU.</p>

           <p class="mb-2 font-bold">Momento 2: Ingreso al módulo de prácticas</p>
           <p class="mb-2">Una vez dentro del SIPAC, dirígete al menú que aparece en la parte izquierda de la pantalla.</p>
           <ul class="list-disc pl-5 space-y-1 mb-4">
             <li>Busca la opción “Prácticas y pasantías (SIPPU)”.</li>
             <li>Haz clic allí y luego selecciona “Mis prácticas”.</li>
             <li>Al desplegarse las opciones, elige “Registro”.</li>
           </ul>
           <p>Esta será la sección donde comenzarás a diligenciar tu Hoja de Vida.</p>
        </div>
        `
    },
    {
        id: 3,
        title: "Hoja de Vida: Momentos 3 y 4",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <p class="mb-2 font-bold">Momento 3: Información personal y de residencia</p>
           <p class="mb-2">El sistema te pedirá completar diferentes campos con tu información básica.</p>
           <p class="mb-2">En Información personal, ingresa:</p>
           <ul class="list-disc pl-5 space-y-1 mb-4">
             <li>Tipo y número de identificación</li>
             <li>Nombre completo</li>
             <li>Género</li>
             <li>Estado civil</li>
             <li>Grupo sanguíneo</li>
             <li>Fecha y lugar de nacimiento</li>
           </ul>
           <p class="mb-2">Luego, en Información de residencia, completa los datos sobre:</p>
           <ul class="list-disc pl-5 space-y-1 mb-4">
             <li>Tipo de vivienda</li>
             <li>Estrato socioeconómico</li>
             <li>Dirección y ciudad</li>
           </ul>
           <p class="mb-4 italic text-xs">(Muestra cómo se despliegan las listas o casillas de texto)</p>
           <p class="mb-6"><span class="font-bold text-usc-red">Importante:</span> Si un campo tiene un asterisco rojo (*), significa que es obligatorio. No podrás avanzar hasta llenarlo correctamente.</p>

           <p class="mb-2 font-bold">Momento 4: Información de contacto y familiar</p>
           <p class="mb-2">En esta sección agregarás tus datos de contacto.</p>
           <p class="mb-2">Primero, revisa tu correo institucional. En algunos casos aparece automáticamente.</p>
           <p class="mb-2">Luego, da clic en el botón verde “+Agregar” para incluir un correo personal activo. Recibirás un mensaje del SIPAC para verificar la dirección; asegúrate de confirmar el enlace que llega a tu bandeja.</p>
           <p class="mb-4"><span class="font-bold">Recomendación:</span> vincula como principal tu correo institucional.</p>
           <p class="mb-2">Después, agrega tus números telefónicos. Selecciona el tipo de contacto (fijo, móvil, etc.) y marca si usas WhatsApp en ese número.</p>
           <p class="mb-2">Ahora completa la información familiar, con los datos de un contacto de emergencia: nombre, parentesco, identificación, ocupación, fecha de nacimiento, teléfono y correo.</p>
           <p>Finalmente, en Referencias, puedes incluir a una persona conocida o alguien del ámbito laboral. Indica si es una referencia personal o laboral, su nombre, número y ocupación.</p>
        </div>
        `
    },
    {
        id: 4,
        title: "Hoja de Vida: Momentos 5, 6 y 7",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <p class="mb-2 font-bold">Momento 5: Información adicional</p>
           <p class="mb-2">En esta parte puedes ingresar otros datos complementarios:</p>
           <ul class="list-disc pl-5 space-y-2 mb-6">
             <li><span class="font-bold">Información médica:</span> opcional. Pero si tienes alguna condición de salud importante, agrégala.</li>
             <li><span class="font-bold">Libreta militar:</span> también opcional, pero puedes subirla si la tienes.</li>
             <li><span class="font-bold">Seguridad social:</span> selecciona tu EPS, el tipo de régimen (contributivo: el que acceden o pagan los trabajadores dependientes e independientes, aportan para la atención de su núcleo familiar, subsidiado: el estado subsidia la afiliación al servicio de salud) y la fecha de vinculación. Para la ARL, elige la clase de riesgo, normalmente Clase 1 – Riesgo mínimo, salvo que tu ARL indique otra cosa.</li>
           </ul>

           <p class="mb-2 font-bold">Momento 6: Información académica</p>
           <p class="mb-2">Ahora registra tus datos de formación. En Formación académica, selecciona:</p>
           <ul class="list-disc pl-5 space-y-1 mb-4">
             <li>Nivel académico</li>
             <li>Institución</li>
             <li>Estado (graduado o en formación)</li>
             <li>Título obtenido</li>
             <li>Fechas de inicio y finalización</li>
             <li>Promedio de horas semanales</li>
             <li>Periodo de estudio (por ejemplo, anual o semestral)</li>
             <li>Correo y teléfono de la institución</li>
           </ul>
           <p class="mb-2 italic text-xs">(Ejemplo de un formulario diligenciado correctamente)</p>
           <p class="mb-6">También puedes agregar información complementaria, como cursos o diplomados, y registrar los idiomas.</p>

           <p class="mb-2 font-bold">Momento 7: Perfil profesional y experiencia</p>
           <p class="mb-2">En esta sección describe brevemente tu perfil profesional.</p>
           <p class="mb-2 italic">Por ejemplo: “Soy estudiante de Trabajo Social con habilidades en acompañamiento comunitario y gestión social.....” mejorar ejemplo</p>
           <p>Luego, si tienes experiencia laboral o en investigación, puedes agregarla. Si no la tienes, simplemente marca la opción “No tengo experiencia”.</p>
        </div>
        `
    },
    {
        id: 5,
        title: "Hoja de Vida: Momento 8 y Cierre",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <p class="mb-2 font-bold">Momento 8: Carga de documentos</p>
           <p class="mb-2">Para finalizar, deberás subir los documentos de soporte que respalden la información registrada. Entre ellos:</p>
           <ul class="list-disc pl-5 space-y-1 mb-4">
             <li>Cédula de ciudadanía</li>
             <li>Diplomas o certificados</li>
             <li>Afiliación a EPS y ARL</li>
           </ul>
           <p class="mb-2 italic text-xs">(Mostrar cómo subir archivos o el botón “Cargar documento”)</p>
           <p class="mb-6">Verifica que todos los documentos estén en formato PDF y sean legibles.</p>

           <p class="mb-2 font-bold">Paso 9: Carga de certificados de seminarios</p>
           <p class="mb-2">También deberás subir los certificados de los dos seminarios que debiste realizar previamente en Moodle.</p>
           <p class="mb-2 italic text-xs">(Mostrar el botón o sección “Subir certificados”)</p>
           <p class="mb-2">Estos seminarios se encuentran en el enlace que llegó a tu correo institucional. Si aún no los has hecho, revisa tu bandeja de entrada y completa ambos antes de continuar con el registro.</p>
           <p class="mb-6"><span class="font-bold text-usc-red">Importante:</span> hasta que no subas el certificado de los seminarios el SIPAC no te permitirá seguir tu proceso de registro.</p>

           <p class="mb-2 font-bold">Cierre</p>
           <p class="mb-2">Una vez completes todos los pasos, guarda los cambios y revisa que tu hoja de vida quede en estado “Registrado”.</p>
           <p>Recuerda: este es el primer paso para avanzar en tu proceso de práctica profesional.</p>
        </div>
        `
    },
    {
        id: 6,
        title: "Registro Centro de Práctica: Pasos 1, 2 y 3",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <div class="mb-4 text-center">
             <h3 class="font-black text-base uppercase text-usc-blue">REGISTRO DEL CENTRO DE PRÁCTICA</h3>
           </div>

           <p class="mb-2 font-bold">Paso 1: Acceso al registro</p>
           <p class="mb-2">Una vez finalices tu Hoja de Vida, la plataforma te llevará automáticamente al apartado para registrar tu centro de práctica.</p>
           <p class="mb-2 italic text-xs">( Muestra la pantalla donde aparece la opción “Registro de centro de práctica”)</p>
           <p class="mb-6">Algunos campos, como tus datos personales, ya estarán diligenciados de manera automática.</p>

           <p class="mb-2 font-bold">Paso 2: Información académica y de práctica</p>
           <p class="mb-2">En esta sección deberás completar los campos relacionados con tu información académica. Indica:</p>
           <ul class="list-disc pl-5 space-y-1 mb-4">
             <li>El periodo electivo (por ejemplo, 2025-A o 2025-B)</li>
             <li>Tu facultad</li>
             <li>En el reglamento, selecciona el que corresponde a la Facultad de Humanidades y Artes</li>
             <li>En el tipo de práctica, selecciona “Práctica”</li>
             <li>Y verifica que aparezca correctamente el semestre que estás cursando</li>
           </ul>
           <p class="mb-6"><span class="font-bold text-usc-red">Importante:</span> revisa bien esta información antes de avanzar, ya que determinará el reglamento y los requisitos aplicables a tu proceso.</p>

           <p class="mb-2 font-bold">Paso 3: Información del centro de práctica</p>
           <p class="mb-2">Ahora vamos a registrar los datos del centro de práctica. En el campo Tipo de vinculación, encontrarás tres opciones:</p>
           <ul class="list-disc pl-5 space-y-1 mb-4">
             <li>Extramural: Instituciones que tiene convenio o vinculación con la Universidad</li>
             <li>Intramural: Áreas o dependencias dentro de la Universidad</li>
             <li>Vinculación formativa: Vinculación o convenio con entidades públicas.</li>
           </ul>
           <p class="mb-2">Selecciona la que corresponda a tu caso.</p>
           <p class="mb-2">Luego, en la opción Modalidad, elige siempre “Profesional / Empresarial”.</p>
           <p class="mb-2">Después, selecciona:</p>
           <ul class="list-disc pl-5 space-y-1 mb-4">
             <li>El departamento: “Valle del Cauca”</li>
             <li>La ciudad donde realizarás la práctica, por ejemplo, “Cali”</li>
             <li>Y en Institución, busca el nombre de tu centro de práctica.</li>
           </ul>
           <p class="mb-2"><span class="font-bold">Nota:</span> Si tu centro de práctica no aparece en el listado, informa de inmediato a tu docente de práctica para que te ayude a reportarlo.</p>
        </div>
        `
    },
    {
        id: 7,
        title: "Registro Centro de Práctica: Pasos 4, 5 y Cierre",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <p class="mb-2 font-bold">Paso 4: Asignación de la docente de práctica</p>
           <p class="mb-2">En el siguiente apartado, verás el nombre de la docente encargada de tu proceso de práctica.</p>
           <p class="mb-6">Esta información aparece automáticamente, así que solo asegúrate de que sea la correcta.</p>

           <p class="mb-2 font-bold">Paso 5: Registro del jefe inmediato</p>
           <p class="mb-2">Por último, deberás ingresar la información de tu jefe inmediato, es decir, la persona que te orientará o supervisará dentro del centro de práctica.</p>
           <p class="mb-2 italic text-xs">(Señala el campo “Jefe inmediato” y sus datos: nombre, cargo, correo, teléfono, etc.”)</p>
           <p class="mb-2">Si tu jefe ya está registrado, solo selecciónalo de la lista.</p>
           <p class="mb-6">Si no aparece, puedes crear el contacto directamente o reportarlo a tu docente de práctica para que lo habilite.</p>

           <p class="mb-2 font-bold">Cierre</p>
           <p class="mb-2">Cuando completes todos los campos, guarda la información y verifica que tu centro de práctica quede registrado correctamente en el SIPAC.</p>
           <p>De esta forma, habrás finalizado el segundo paso de tu proceso de práctica profesional.</p>
        </div>
        `
    }
];