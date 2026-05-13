/**
 * GUÍA INTERACTIVA: PLAN DE TRABAJO (SIPPU)
 * Contenido textual exacto proporcionado por el usuario.
 */

import { BookPage } from '../types';

export const GUIDE_WORKPLAN_DATA: BookPage[] = [
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
          <h2 class="font-bold text-gray-700 text-lg uppercase mb-2">Plan de Trabajo y Cronograma</h2>
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
        title: "Paso 1: Acceso",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <div class="mb-4 text-center">
             <h3 class="font-black text-base uppercase text-usc-blue">PLAN DE TRABAJO Y CRONOGRAMA</h3>
           </div>

           <p class="mb-2 font-bold">Paso 1: Acceso al apartado de Plan de trabajo</p>
           <p class="mb-2">Al iniciar sesión en el SIPAC, e ir al registro de tus practicas, verás en la pantalla principal la información de tu centro de práctica y de tu jefe inmediato.</p>
           <p class="mb-2 italic text-xs">(Mostrar la vista general del panel principal con el centro de práctica y el jefe inmediato visibles)</p>
           <p class="mb-2">Luego, dirígete a las pestañas que se te reflejan debajo de tu foto e información del centro de práctica y buscamos la opción “Plan de trabajo”.</p>
           <p class="mb-2 italic text-xs">(Resaltar el botón “Plan de trabajo” en el menú lateral)</p>
           <p class="mb-2">Cuando hagas clic, se abrirá un nuevo panel con varias opciones. Allí verás el apartado titulado “Listado de actividades”.</p>
           
           <p class="mt-6 mb-2"><span class="font-bold">Recuerda:</span> Para poder comenzar a diligenciar tu plan de trabajo, tu centro de práctica debe estar previamente aprobado por tu docente.</p>
        </div>
        `
    },
    {
        id: 3,
        title: "Paso 2: Añadir Plan",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <p class="mb-2 font-bold">Paso 2: Añadir plan de trabajo</p>
           <p class="mb-2">Una vez confirmada la aprobación, en el apartado “Listado de actividades” dentro del panel del plan de trabajo selecciona “Mi cronograma de actividades”.</p>
           <p class="mb-2 italic text-xs">(Hacer zoom sobre la opción seleccionada)</p>
           <p class="mb-2">Aquí es donde crearás y registrarás tus acciones o actividades del plan de trabajo.</p>
           <p class="mb-2">Para comenzar a registrar tus actividades, ubica el botón verde “+ Agregar” en la parte derecha de la pantalla y haz clic.</p>
           <p class="mb-2 italic text-xs">(Mostrar el botón “+Agregar” y la ventana emergente con el formato de registro)</p>
           <p class="mb-2">Se abrirá un formato con varios campos que debes completar:</p>
           <ol class="list-decimal pl-5 space-y-1 mb-4">
             <li>Título de la acción: indica brevemente el nombre de la actividad.</li>
             <li>Duración: selecciona 4 meses.</li>
             <li>Descripción: explica de qué trata la acción, qué harás y qué resultados esperas obtener.</li>
           </ol>
           
           <p class="mb-2 font-bold">Ejemplo:</p>
           <ul class="list-none space-y-2 mb-4 pl-4 border-l-2 border-gray-200">
             <li><span class="font-bold">Título:</span> Diligenciar el informe psicosocial</li>
             <li><span class="font-bold">Duración:</span> 4 meses</li>
             <li><span class="font-bold">Descripción:</span> Esta actividad se realiza de manera mensual y recoge los aspectos relevantes y los resultados logrados durante el mes en la intervención psicosocial. Además, se anexan evidencias fotográficas y matrices de datos con la asistencia de los niños, niñas y jóvenes al programa After School de la Fundación Único.</li>
           </ul>
           <p class="mb-2 italic text-xs">(Mostrar el ejemplo diligenciado en pantalla)</p>
           <p>Cuando termines, guarda los cambios y verifica que la acción quede registrada correctamente en la lista de actividades.</p>
        </div>
        `
    },
    {
        id: 4,
        title: "Paso 3 y Cierre",
        content: `
        <div class="text-sm text-gray-800 leading-relaxed text-justify">
           <p class="mb-2 font-bold">Paso 3: Registrar el cronograma</p>
           <p class="mb-2">Después de registrar tus acciones, baja hasta el apartado de Horas de práctica. Allí encontrarás nuevamente el botón “+ Agregar”.</p>
           <p class="mb-2 italic text-xs">(Mostrar el formato de cronograma)</p>
           <p class="mb-2">En este formato debes:</p>
           <ul class="list-disc pl-5 space-y-1 mb-4">
             <li>Seleccionar los días en los que asistes al centro de práctica.</li>
             <li>Indicar la temporalidad o jornada de asistencia.</li>
             <li>Y registrar las fechas de inicio y finalización según las indicadas en tu ARL.</li>
           </ul>
           
           <p class="mb-2"><span class="font-bold text-usc-red">Importante:</span> Revisa que el sistema refleje correctamente:</p>
           <ul class="list-disc pl-5 space-y-1 mb-4">
             <li>24 horas semanales</li>
             <li>384 horas en total por semestre</li>
           </ul>
           <p class="mb-6 italic text-xs">(Mostrar cómo se ve el total de horas al completar los campos)</p>

           <p class="mb-2 font-bold">Cierre</p>
           <p class="mb-2">Una vez completes el plan de trabajo y tu cronograma, guarda todos los cambios y asegúrate de que las actividades queden visibles en el listado.</p>
           <p>Este paso te permitirá llevar un registro claro de tus acciones dentro del centro de práctica y facilitará el seguimiento por parte de tu docente.</p>
        </div>
        `
    }
];