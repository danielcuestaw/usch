import React, { useState } from 'react';
import { Monitor, FileText, CheckCircle, AlertCircle, Video, ExternalLink, BookOpen } from 'lucide-react';
import BookModal from './BookModal';
import { GUIDE_REGISTRATION_DATA } from '../data/guide_registration';
import { GUIDE_WORKPLAN_DATA } from '../data/guide_workplan';

// --- CONFIGURACIÓN DE VIDEOS (VIMEO) ---
// IDs extraídos de los enlaces proporcionados por el usuario.
const VIDEO_IDS = {
    registro: "1164987745",
    planTrabajo: "1164988273"
};

const VIDEO_URLS = {
    // URL de Embed para el Iframe (Player)
    registro: `https://player.vimeo.com/video/${VIDEO_IDS.registro}?badge=0&autopause=0&player_id=0&app_id=58479`,
    planTrabajo: `https://player.vimeo.com/video/${VIDEO_IDS.planTrabajo}?badge=0&autopause=0&player_id=0&app_id=58479`,
    
    // Enlace directo para el botón de respaldo
    backupRegistro: `https://vimeo.com/${VIDEO_IDS.registro}`,
    backupPlan: `https://vimeo.com/${VIDEO_IDS.planTrabajo}`
};

const DOWNLOAD_LINK_GUIDE = "https://drive.google.com/file/d/1EA4hWs5KUJMzUnkcpEc9WcjnfFFKufdJ/view?usp=sharing";

// Componente de Video Robusto (Adaptado para Vimeo)
const VideoPlayer: React.FC<{ src: string; backupSrc: string; title: string }> = ({ src, backupSrc, title }) => {
    return (
        <div className="flex flex-col gap-3">
            {/* Reproductor Vimeo */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-gray-200 group z-10">
                <iframe 
                    src={src}
                    className="absolute inset-0 w-full h-full" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                    allowFullScreen 
                    title={title}
                ></iframe>
            </div>

            {/* Panel de Ayuda y Respaldo (Discreto) */}
            <div className="flex justify-end">
                <a 
                    href={backupSrc} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-usc-blue hover:text-white hover:bg-usc-blue px-3 py-2 rounded-lg transition-all border border-usc-blue/20 bg-blue-50/50"
                    title="Abrir video en una nueva pestaña"
                >
                    <ExternalLink size={14} />
                    <span>Ver en Vimeo (Pantalla completa)</span>
                </a>
            </div>
        </div>
    );
};

const PlatformInstructions: React.FC = () => {
  const [isRegBookOpen, setIsRegBookOpen] = useState(false);
  const [isPlanBookOpen, setIsPlanBookOpen] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* 1. INTRODUCCIÓN GENERAL */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-usc-blue to-usc-darkBlue p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
                <Monitor size={36} className="text-usc-red" />
                <h3 className="text-2xl md:text-3xl font-display font-bold">Plan de Trabajo de Prácticas</h3>
            </div>
            <div className="space-y-4 text-white/90 leading-relaxed text-sm md:text-base">
                <p>
                    <strong>Aplicativo SIPPU – Registro y Cargue del Plan de Trabajo</strong>
                </p>
                <p>
                    Dentro de la plataforma <strong>SIPAC</strong> se encuentra habilitado el aplicativo <strong>SIPPU</strong>, herramienta mediante la cual los estudiantes deben realizar el registro correspondiente a su práctica y el cargue del plan de trabajo.
                </p>
                <p>
                    En este espacio se publicará el instructivo oficial para:
                </p>
                <ul className="list-none space-y-2 pl-4 border-l-2 border-usc-red/50">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-usc-red" /> Realizar el registro en el aplicativo SIPPU.</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-usc-red" /> Diligenciar correctamente la información solicitada.</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-usc-red" /> Cargar el plan de trabajo de práctica.</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-usc-red" /> Verificar el estado de revisión y aprobación.</li>
                </ul>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20 mt-6 flex gap-4 items-start">
                    <AlertCircle size={24} className="text-yellow-400 shrink-0 mt-1" />
                    <p className="text-xs md:text-sm font-medium">
                        Es fundamental que el estudiante siga paso a paso las indicaciones del instructivo y asegure que la información registrada sea clara, completa y coherente con el escenario de práctica asignado. <strong>El correcto diligenciamiento del SIPPU es un requisito indispensable para la validación y seguimiento del proceso de práctica profesional.</strong>
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 2. VIDEO 1: REGISTRO Y JEFE INMEDIATO */}
      <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <div className="p-2 bg-blue-50 rounded-lg text-usc-blue">
                <Video size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">1. ¿Cómo Registrar mi Centro de Práctica y Jefe Inmediato?</h3>
          </div>

          {/* REPRODUCTOR 1 (VIMEO) */}
          <VideoPlayer 
            src={VIDEO_URLS.registro}
            backupSrc={VIDEO_URLS.backupRegistro}
            title="Video Instructivo Registro"
          />
      </section>

      {/* 3. VIDEO 2: PLAN DE TRABAJO */}
      <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <div className="p-2 bg-blue-50 rounded-lg text-usc-blue">
                <Video size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">2. ¿Cómo Subir mi Plan de Trabajo?</h3>
          </div>

          {/* REPRODUCTOR 2 (VIMEO) */}
          <VideoPlayer 
            src={VIDEO_URLS.planTrabajo}
            backupSrc={VIDEO_URLS.backupPlan}
            title="Video Instructivo Plan Trabajo"
          />
      </section>

      {/* 4. RECURSOS DE APOYO (LIBROS INTERACTIVOS) */}
      <section className="pt-10 border-t border-gray-200">
          <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Recursos de Apoyo</h3>
              <p className="text-gray-500 text-sm mt-1">Guías paso a paso para tener siempre a mano.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* Tarjeta Libro 1: Registro y Hoja de Vida */}
              <div 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center group hover:border-usc-blue transition-all cursor-pointer"
                onClick={() => setIsRegBookOpen(true)}
              >
                  <div className="p-4 bg-gray-50 rounded-full mb-4 group-hover:bg-blue-50 transition-colors">
                      <FileText size={32} className="text-gray-400 group-hover:text-usc-blue" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Guía: Registro y Hoja de Vida</h4>
                  <p className="text-xs text-gray-500 mb-4 px-4">
                      Documento detallado con el paso a paso para registrar tu hoja de vida y vincular tu centro de práctica en SIPAC.
                  </p>
                  <div className="flex items-center gap-2 px-4 py-2 bg-usc-blue text-white rounded-lg text-sm font-bold hover:bg-blue-800 transition-colors">
                      <BookOpen size={16} />
                      <span>Leer Guía Interactiva</span>
                  </div>
              </div>

              {/* Tarjeta Libro 2: Plan de Trabajo */}
              <div 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center group hover:border-usc-blue transition-all cursor-pointer"
                onClick={() => setIsPlanBookOpen(true)}
              >
                  <div className="p-4 bg-gray-50 rounded-full mb-4 group-hover:bg-blue-50 transition-colors">
                      <FileText size={32} className="text-gray-400 group-hover:text-usc-blue" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Guía: Plan de Trabajo</h4>
                  <p className="text-xs text-gray-500 mb-4 px-4">
                      Instructivo completo para cargar tus actividades, cronograma y horas de práctica correctamente en SIPPU.
                  </p>
                  <div className="flex items-center gap-2 px-4 py-2 bg-usc-blue text-white rounded-lg text-sm font-bold hover:bg-blue-800 transition-colors">
                      <BookOpen size={16} />
                      <span>Leer Guía Interactiva</span>
                  </div>
              </div>
          </div>
      </section>

      {/* MODALES DE LIBROS */}
      <BookModal 
        isOpen={isRegBookOpen}
        onClose={() => setIsRegBookOpen(false)}
        title="Registro y Hoja de Vida"
        data={GUIDE_REGISTRATION_DATA}
        downloadUrl={DOWNLOAD_LINK_GUIDE}
      />

      <BookModal 
        isOpen={isPlanBookOpen}
        onClose={() => setIsPlanBookOpen(false)}
        title="Plan de Trabajo"
        data={GUIDE_WORKPLAN_DATA}
        downloadUrl={DOWNLOAD_LINK_GUIDE}
      />

    </div>
  );
};

export default PlatformInstructions;