import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, UserCheck, ShieldCheck, CheckCircle } from 'lucide-react';

const PracticeVsInternship: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-gray-100">
      
      <div className="text-center mb-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <span className="text-usc-red font-bold tracking-widest uppercase text-sm mb-2 block">Definición Institucional</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-usc-blue mb-4">
            ¿Qué es la Práctica?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La Facultad de Humanidades y Artes enfoca su proceso formativo exclusivamente en la modalidad de Práctica.
            </p>
        </motion.div>
      </div>

      <div className="flex justify-center">
        
        {/* TARJETA PRÁCTICA (Expandida y Centrada) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border-t-4 border-usc-blue overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative group w-full max-w-4xl"
        >
            <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 border-b border-gray-100 pb-8">
                    <div className="p-4 bg-blue-50 text-usc-blue rounded-2xl group-hover:bg-usc-blue group-hover:text-white transition-colors duration-300 shrink-0">
                        <Briefcase size={40} />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-display font-bold text-gray-800 mb-2">Práctica Profesional</h3>
                        <span className="inline-block px-3 py-1 bg-usc-red/10 text-usc-red text-xs font-bold uppercase tracking-wide rounded-full">Requisito de Grado Obligatorio</span>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Es la etapa fundamental donde el estudiante integra y aplica los conocimientos, habilidades y aptitudes adquiridas durante su formación académica en un entorno laboral real. Es el puente definitivo hacia tu vida profesional.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1 text-usc-blue shrink-0 bg-blue-50 p-2 rounded-lg h-fit"><BookOpen size={20} /></div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm uppercase mb-1">Objetivo Académico</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Validar competencias profesionales mediante el desempeño de funciones propias de la carrera en organizaciones públicas, privadas o sociales.</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4">
                            <div className="mt-1 text-usc-blue shrink-0 bg-blue-50 p-2 rounded-lg h-fit"><ShieldCheck size={20} /></div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm uppercase mb-1">Formalización</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Se formaliza mediante convenio institucional o contrato de aprendizaje. Requiere estar matriculado académica y financieramente.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1 text-usc-blue shrink-0 bg-blue-50 p-2 rounded-lg h-fit"><UserCheck size={20} /></div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm uppercase mb-1">Acompañamiento</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Cuenta con doble supervisión: Un <strong>Docente Tutor</strong> de la Facultad y un <strong>Jefe Inmediato</strong> en el escenario de práctica.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 text-usc-blue shrink-0 bg-blue-50 p-2 rounded-lg h-fit"><CheckCircle size={20} /></div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm uppercase mb-1">Evaluación</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Es una asignatura curricular evaluable. Su aprobación es indispensable para optar al título profesional.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-center">
                <p className="text-sm font-medium text-usc-blue italic">"La práctica no es solo un requisito, es tu primera experiencia laboral certificada"</p>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PracticeVsInternship;