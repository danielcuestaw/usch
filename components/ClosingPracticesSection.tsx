import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  FileUp, 
  Building, 
  FileSignature, 
  Mail, 
  GraduationCap, 
  QrCode, 
  ExternalLink,
  Download,
  FileText
} from 'lucide-react';

const ClosingPracticesSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* INTRODUCCIÓN */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-display font-extrabold text-usc-blue mb-4">
          Cierre de la Práctica Profesional
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Cuando el estudiante finaliza su práctica profesional, debe contar con la siguiente información y cumplir los pasos que se describen a continuación para culminar el proceso de manera adecuada:
        </p>
      </motion.div>

      {/* LINEA DE TIEMPO DE PASOS */}
      <div className="relative">
        {/* Línea vertical conectora (Desktop) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

        <div className="space-y-12 md:space-y-24">
          
          {/* PASO 1 (Izquierda) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:justify-between gap-8 relative"
          >
            {/* Contenido (Tarjeta) */}
            <div className="md:w-5/12 order-2 md:order-1 flex justify-end w-full">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full relative group hover:border-usc-blue/30 transition-colors">
                    <h3 className="text-xl font-bold text-usc-blue mb-3 text-left">Paso 1. Actualización del portafolio en SIPAC</h3>
                    <div className="text-gray-600 text-sm space-y-2 text-justify">
                        <p className="font-semibold text-gray-800">El estudiante debe:</p>
                        <ul className="space-y-1 list-disc pl-4">
                            <li>Actualizar el portafolio en la plataforma SIPAC.</li>
                            <li>Verificar que esté completamente diligenciado.</li>
                            <li>Contar con la aprobación del docente tutor de prácticas.</li>
                        </ul>
                    </div>
                    {/* Flecha decorativa hacia la línea de tiempo (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-white border-t border-r border-gray-200 transform rotate-45 -translate-y-1/2 group-hover:border-usc-blue/30 transition-colors"></div>
                </div>
            </div>
            
            {/* Icono Central */}
            <div className="md:w-2/12 order-1 md:order-2 flex justify-center relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg text-usc-blue ring-1 ring-gray-200">
                    <ClipboardCheck size={32} />
                </div>
            </div>
            
            {/* Espacio Vacío */}
            <div className="md:w-5/12 order-3 md:order-3"></div>
          </motion.div>

          {/* PASO 2 (Derecha) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:justify-between gap-8 relative"
          >
            <div className="md:w-5/12 order-3 md:order-1"></div>
            
            <div className="md:w-2/12 order-1 md:order-2 flex justify-center relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg text-usc-blue ring-1 ring-gray-200">
                    <FileUp size={32} />
                </div>
            </div>
            
            <div className="md:w-5/12 order-2 md:order-3 flex justify-start w-full">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full relative group hover:border-usc-blue/30 transition-colors">
                    {/* Flecha decorativa (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 -left-2 w-4 h-4 bg-white border-b border-l border-gray-200 transform rotate-45 -translate-y-1/2 group-hover:border-usc-blue/30 transition-colors"></div>
                    
                    <h3 className="text-xl font-bold text-usc-blue mb-3 text-left">Paso 2. Informe Final</h3>
                    <p className="text-gray-600 text-sm text-justify leading-relaxed">
                        Debe cargar el informe final de prácticas en su portafolio académico, asegurándose de que cumpla con todos los requisitos solicitados por la Facultad.
                    </p>
                </div>
            </div>
          </motion.div>

          {/* PASO 3 (Izquierda) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:justify-between gap-8 relative"
          >
            <div className="md:w-5/12 order-2 md:order-1 flex justify-end w-full">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full relative group hover:border-usc-blue/30 transition-colors">
                    <h3 className="text-xl font-bold text-usc-blue mb-3 text-left">Paso 3. Carta de cierre de la empresa</h3>
                    <p className="text-gray-600 text-sm text-justify leading-relaxed">
                        Debe cargar la carta de cierre de prácticas expedida por la empresa o institución, en la cual se valide el cumplimiento satisfactorio de la práctica y las horas requeridas.
                    </p>
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-white border-t border-r border-gray-200 transform rotate-45 -translate-y-1/2 group-hover:border-usc-blue/30 transition-colors"></div>
                </div>
            </div>
            
            <div className="md:w-2/12 order-1 md:order-2 flex justify-center relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg text-usc-blue ring-1 ring-gray-200">
                    <Building size={32} />
                </div>
            </div>
            
            <div className="md:w-5/12 order-3 md:order-3"></div>
          </motion.div>

          {/* PASO 4 (CENTRAL - FORMULARIO Y QR) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 relative z-10 mx-auto w-full md:w-10/12 hover:border-usc-blue/30 transition-colors"
          >
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-usc-red text-white px-6 py-2 rounded-full font-bold shadow-md">
                Paso 4: Formulario Institucional
             </div>

             <div className="flex flex-col md:flex-row gap-8 items-center pt-4">
                <div className="flex-1 space-y-4 text-left">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 text-usc-blue rounded-lg mt-1 shrink-0">
                            <FileSignature size={24} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-gray-800 text-lg">Diligenciar el formulario institucional</h4>
                            <p className="text-gray-600 text-sm text-justify leading-relaxed">
                                Es obligatorio diligenciar el formulario oficial de Microsoft Forms de la Coordinación de Prácticas. Este paso es fundamental para iniciar el trámite de tu Acta de Cierre.
                            </p>
                        </div>
                    </div>
                    
                    <div className="pl-0 md:pl-14">
                        <a 
                            href="https://forms.office.com/r/B47GLZDZ5X?origin=lprLink" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-usc-blue text-white rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-sm group w-full md:w-auto justify-center"
                        >
                            <span className="text-sm md:text-base">Solicitud de Acta de Cierre</span>
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
                        </a>
                    </div>
                </div>

                <div className="shrink-0 flex flex-col items-center gap-3 bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-inner">
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider">
                        <QrCode size={16} />
                        <span>Escanear QR</span>
                    </div>
                    <img 
                        src="https://i.postimg.cc/L6M0zXYj/QR-Forms.png" 
                        alt="QR Formulario Cierre" 
                        className="w-32 h-32 object-contain rounded-lg mix-blend-multiply"
                    />
                </div>
             </div>
          </motion.div>

          {/* PASO 5 (Izquierda) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:justify-between gap-8 relative"
          >
            <div className="md:w-5/12 order-2 md:order-1 flex justify-end w-full">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full relative group hover:border-usc-blue/30 transition-colors">
                    <h3 className="text-xl font-bold text-usc-blue mb-3 text-left">Paso 5. Solicitud del acta de cierre</h3>
                    
                    <div className="space-y-4 text-left">
                        <p className="text-gray-600 text-sm text-justify leading-relaxed">
                            Una vez cumplidos los pasos anteriores, el estudiante debe solicitar formalmente el acta de cierre de prácticas enviando un correo electrónico a:
                        </p>
                        
                        <a 
                            href="mailto:practicasfha@usc.edu.co" 
                            className="flex items-center gap-2 bg-blue-50 text-usc-blue px-4 py-3 rounded-lg font-bold text-sm hover:bg-blue-100 transition-colors break-all border border-blue-100"
                        >
                            <Mail size={16} className="shrink-0" />
                            practicasfha@usc.edu.co
                        </a>

                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-600">
                            <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">Información requerida en el correo:</p>
                            <ul className="space-y-1.5 list-disc pl-4 text-xs md:text-sm">
                                <li>Nombre completo del estudiante.</li>
                                <li>Número de identificación.</li>
                                <li>Nombre completo del escenario de práctica (ortografía correcta).</li>
                                <li>Periodo académico de inscripción de la práctica.</li>
                                <li>Nota definitiva de la práctica.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-white border-t border-r border-gray-200 transform rotate-45 -translate-y-1/2 group-hover:border-usc-blue/30 transition-colors"></div>
                </div>
            </div>
            
            <div className="md:w-2/12 order-1 md:order-2 flex justify-center relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg text-usc-blue ring-1 ring-gray-200">
                    <Mail size={32} />
                </div>
            </div>
            
            <div className="md:w-5/12 order-3 md:order-3"></div>
          </motion.div>

          {/* PASO 6 (Derecha) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:justify-between gap-8 relative"
          >
            <div className="md:w-5/12 order-3 md:order-1"></div>
            
            <div className="md:w-2/12 order-1 md:order-2 flex justify-center relative z-10">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg text-green-600 ring-1 ring-gray-200">
                    <GraduationCap size={32} />
                </div>
            </div>
            
            <div className="md:w-5/12 order-2 md:order-3 flex justify-start w-full">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full relative group hover:border-green-500/30 transition-colors">
                    <div className="hidden md:block absolute top-1/2 -left-2 w-4 h-4 bg-white border-b border-l border-gray-200 transform rotate-45 -translate-y-1/2 group-hover:border-green-500/30 transition-colors"></div>
                    <h3 className="text-xl font-bold text-usc-blue mb-3 text-left">Paso 6. Registro de la nota</h3>
                    <p className="text-gray-600 text-sm text-justify leading-relaxed">
                        Cuando todo el proceso se encuentre totalmente finalizado y validado, el docente tutor procederá a realizar el registro oficial de la nota definitiva en el sistema académico.
                    </p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* SECCIÓN DE FORMATOS DE DESCARGA */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-12 border-t-2 border-dashed border-gray-200 mt-16"
      >
          <div className="text-center mb-8">
              <span className="bg-usc-red text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 inline-block">
                  Descargas
              </span>
              <h3 className="text-2xl font-bold text-gray-800">Formatos de Cierre</h3>
              <p className="text-gray-500 text-sm mt-2">Documentación requerida para formalizar la finalización.</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md border border-gray-200 p-2">
              <a 
                href="https://docs.google.com/document/d/1VY4yME5Et3jf0wkBK4_AgxQhciNraW2c/edit?usp=sharing&ouid=100653874994332342627&rtpof=true&sd=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg group transition-colors"
              >
                  <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <FileText size={24} />
                      </div>
                      <div className="text-left">
                          <h4 className="font-bold text-gray-800 group-hover:text-usc-blue transition-colors">Informe Final de Prácticas</h4>
                          <span className="text-xs text-gray-500">Formato oficial (Google Docs)</span>
                      </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-usc-red transition-colors">
                      <Download size={24} />
                  </div>
              </a>
          </div>
      </motion.section>

    </div>
  );
};

export default ClosingPracticesSection;