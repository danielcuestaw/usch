import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Briefcase, FileText, Monitor, CheckCircle, Plane, FileSignature, Building2, Lightbulb, AlertTriangle, Scale } from 'lucide-react';

const PracticesDetailedInfo: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* 1. SECCIÓN: INTERNACIONALIZACIÓN (ARI) */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-usc-blue p-6 md:p-8 text-white">
            <div className="flex items-center gap-4 mb-2">
                <Globe2 size={32} className="text-usc-red" />
                <h3 className="text-2xl font-display font-bold">Internacionalización y Movilidad (ARI)</h3>
            </div>
            <p className="opacity-90 max-w-3xl">
                Expande tus horizontes profesionales. La Oficina de Relaciones Internacionales (ARI) gestiona prácticas globales para estudiantes que hayan aprobado el 70% de sus créditos.
            </p>
        </div>
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h4 className="font-bold text-usc-blue mb-4 uppercase text-sm tracking-wide">Destinos y Convenios Destacados</h4>
                <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                        <Plane size={18} className="text-usc-red mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm"><strong>España:</strong> Universidad de Córdoba, Universidad de Sevilla.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <Plane size={18} className="text-usc-red mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm"><strong>Canadá:</strong> Niagara College.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <Plane size={18} className="text-usc-red mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm"><strong>México:</strong> Instituto Politécnico Nacional.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <Plane size={18} className="text-usc-red mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm"><strong>Italia:</strong> Sapienza Universidad de Roma.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <Plane size={18} className="text-usc-red mt-1 shrink-0" />
                        <span className="text-gray-700 text-sm"><strong>Reino Unido:</strong> The St. Giles Educational Trust.</span>
                    </li>
                </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">Agencias Aliadas</h4>
                <p className="text-sm text-gray-600 mb-4">Accede a programas como "Work and Travel" y voluntariados a través de:</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600">AIESEC</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600">YMCA</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600">Global Connection</span>
                </div>
            </div>
        </div>
      </section>

      {/* 2. SECCIÓN: TIPOS DE VINCULACIÓN (NUEVA) */}
      <section>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-display font-bold text-gray-800">Tipos de Vinculación Contractual</h3>
            <p className="text-gray-500">Figuras jurídicas bajo las cuales puedes formalizar tu práctica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Contrato de Aprendizaje */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FileSignature size={24} /></div>
                      <h4 className="font-bold text-lg text-gray-800">Contrato de Aprendizaje</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      Forma especial del derecho laboral sin subordinación directa. Una empresa patrocinadora suministra los medios para tu formación práctica y recibes un apoyo de sostenimiento (no salario).
                  </p>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Regulado por Ley</span>
              </div>

              {/* Vinculación Intramural */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-teal-50 text-teal-600 rounded-lg"><Building2 size={24} /></div>
                      <h4 className="font-bold text-lg text-gray-800">Vinculación Intramural</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                      Realizas tus actividades dentro de la <strong>Universidad Santiago de Cali</strong> (dependencias, laboratorios o proyectos). Común en primeros niveles o cuando se requiere supervisión docente estrecha.
                  </p>
              </div>

              {/* Contrato Laboral (Validación) */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Briefcase size={24} /></div>
                      <h4 className="font-bold text-lg text-gray-800">Contrato Laboral / Validación</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      Si ya trabajas, puedes validar tus funciones actuales como práctica.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                      <p className="text-xs text-purple-800 font-medium flex gap-2">
                          <Scale size={14} className="shrink-0 mt-0.5" />
                          <span>Requisito: Tus funciones deben estar directamente relacionadas con tu carrera. Si no, debes presentar un plan de trabajo adicional.</span>
                      </p>
                  </div>
              </div>

              {/* Emprendimiento (Con Advertencia) */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Lightbulb size={24} /></div>
                      <h4 className="font-bold text-lg text-gray-800">Emprendimiento</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Realiza tu práctica creando o consolidando tu propia empresa. Requiere registro de horas, informes y prototipos.
                  </p>
                  
                  {/* ADVERTENCIA CRÍTICA */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex gap-3 items-start">
                      <AlertTriangle size={20} className="text-orange-600 shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-bold text-orange-800 mb-1 uppercase tracking-wide">¡Importante!</p>
                          <p className="text-xs text-orange-800 leading-snug">
                              <strong>No aplica cualquier negocio.</strong> El emprendimiento debe ser afín a tu profesión (ej: Fundación social, Agencia creativa). Negocios ajenos a tu carrera (ej: venta de comidas) <strong>NO</strong> serán aprobados.
                          </p>
                      </div>
                  </div>
              </div>

          </div>
      </section>

      {/* 3. SECCIÓN: RED DE ALIADOS */}
      <section>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-gray-800">Red de Aliados Estratégicos</h3>
            <p className="text-gray-500">Sectores donde nuestros estudiantes dejan huella.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sector Educativo y Social */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500 hover:-translate-y-1 transition-transform duration-300">
                  <div className="mb-4 text-yellow-600"><Briefcase size={28} /></div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Sector Social y Educativo</h4>
                  <p className="text-xs text-gray-500 mb-3">Ideal para Trabajo Social y Psicología.</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Fundación Arquidiocesana</li>
                      <li>• ONG Crecer en Familia</li>
                      <li>• CODHES</li>
                      <li>• Colegios (Alemán, Americano)</li>
                  </ul>
              </div>

              {/* Sector Público y Medios */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500 hover:-translate-y-1 transition-transform duration-300">
                  <div className="mb-4 text-purple-600"><Monitor size={28} /></div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Público y Comunicaciones</h4>
                  <p className="text-xs text-gray-500 mb-3">Para Comunicación y Publicidad.</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Telepacífico y Canal 2</li>
                      <li>• Periódico El País</li>
                      <li>• Alcaldías (Cali, Palmira)</li>
                      <li>• Concejo Distrital</li>
                  </ul>
              </div>

              {/* Sector Salud e Industria */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 hover:-translate-y-1 transition-transform duration-300">
                  <div className="mb-4 text-green-600"><Briefcase size={28} /></div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Salud e Industria</h4>
                  <p className="text-xs text-gray-500 mb-3">Gestión y procesos organizacionales.</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                      <li>• CEMEX Colombia</li>
                      <li>• Clínica Oftalmológica de Cali</li>
                      <li>• Tubosa S.A.S.</li>
                      <li>• Pacific Health Solutions</li>
                  </ul>
              </div>
          </div>
      </section>

      {/* 4. SECCIÓN: PROCESO ADMINISTRATIVO */}
      <div className="w-full">
          
          {/* PASO A PASO ADMINISTRATIVO */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                  <FileText size={28} className="text-usc-red" />
                  <h3 className="text-xl font-bold font-display text-gray-800">Ruta Administrativa</h3>
              </div>
              
              <ol className="relative border-l border-gray-200 ml-3 space-y-8">
                  <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                          <span className="text-usc-blue font-bold text-xs">1</span>
                      </span>
                      <h4 className="font-bold text-gray-800 text-sm">Inducción y Seminarios</h4>
                      <p className="text-xs text-gray-500 mt-1">Asistencia obligatoria a la inducción y aprobación de dos seminarios.</p>
                  </li>
                  <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                          <span className="text-usc-blue font-bold text-xs">2</span>
                      </span>
                      <h4 className="font-bold text-gray-800 text-sm">Paz y Salvo</h4>
                      <p className="text-xs text-gray-500 mt-1">Estar matriculado financiera y académicamente. Sin deudas.</p>
                  </li>
                  <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                          <span className="text-usc-blue font-bold text-xs">3</span>
                      </span>
                      <h4 className="font-bold text-gray-800 text-sm">Solicitud de ARL</h4>
                      <p className="text-xs text-gray-500 mt-1">Tramitar afiliación a Riesgos Laborales antes de iniciar actividades.</p>
                  </li>
                  <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-8 ring-white">
                          <CheckCircle size={14} className="text-green-600" />
                      </span>
                      <h4 className="font-bold text-gray-800 text-sm">Cierre y Calificación</h4>
                      <p className="text-xs text-gray-500 mt-1">Carga de informes finales y evaluación en SIPPU para obtener nota.</p>
                  </li>
              </ol>
          </div>

      </div>
    </div>
  );
};

export default PracticesDetailedInfo;