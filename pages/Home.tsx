import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MajorCards from '../components/MajorCards';
import AboutBooklet from '../components/AboutBooklet';
import RegulationsSection from '../components/RegulationsSection';
import CoordinatorProfile from '../components/CoordinatorProfile';
import AgreementsCarousel from '../components/AgreementsCarousel';
import AgreementsBook from '../components/AgreementsBook';
import FacultyAgreementsTable from '../components/FacultyAgreementsTable';
import MajorDetail from '../components/MajorDetail';
import PracticeVsInternship from '../components/PracticeVsInternship';
import PracticesDetailedInfo from '../components/PracticesDetailedInfo'; 
import ClosingPracticesSection from '../components/ClosingPracticesSection';
import PlatformInstructions from '../components/PlatformInstructions'; // Nuevo componente importado
import { SectionId, SearchParams } from '../types';

interface HomeProps {
  activeSection: SectionId;
  onSectionChange: (section: SectionId) => void;
  searchParams?: SearchParams | null; // Nuevo prop para params de búsqueda
}

const Home: React.FC<HomeProps> = ({ activeSection, onSectionChange, searchParams }) => {
  
  // Variantes para la animación de deslizamiento
  const variants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  // Check if current section is a Major Page
  const isMajorSection = ['social-work', 'social-comm', 'advertising'].includes(activeSection);

  return (
    <div className="relative w-full min-h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        
        {/* SECCIÓN 1: INICIO (Quiénes Somos) */}
        {activeSection === 'home' && (
          <motion.div
            key="home"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {/* 1. Selection Cards Section (Priority) */}
            <section className="w-full relative z-20 pt-6">
              <MajorCards onSectionChange={onSectionChange} />
            </section>

            {/* 2. Coordinator Profile Section */}
            <CoordinatorProfile />
            
            {/* 3. About Booklet Section (Who We Are + Objectives) */}
            <AboutBooklet />

            {/* NOTE: PracticeVsInternship has been moved to the 'practices' section */}
          </motion.div>
        )}

        {/* SECCIÓN 2: PRÁCTICAS Y PASANTÍAS */}
        {activeSection === 'practices' && (
          <motion.div
            key="practices"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {/* 1. Comparison Component (Moved from Home) */}
            <PracticeVsInternship />
            
            {/* 2. Detailed Information (Extra Data) */}
            <PracticesDetailedInfo />
          </motion.div>
        )}

        {/* SECCIÓN NUEVA: INSTRUCTIVO PLATAFORMA */}
        {activeSection === 'platform-instructions' && (
          <motion.div
            key="platform-instructions"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full bg-slate-50/50"
          >
            <PlatformInstructions />
          </motion.div>
        )}

        {/* SECCIÓN 3: NORMATIVIDAD Y FORMATOS */}
        {activeSection === 'regulations' && (
          <motion.div
            key="regulations"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <RegulationsSection searchParams={searchParams} />
          </motion.div>
        )}

        {/* SECCIÓN 4: CONVENIOS */}
        {activeSection === 'agreements' && (
          <motion.div
            key="agreements"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
             {/* Agreements (Convenios) Carousel Section */}
            <AgreementsCarousel />

            {/* Active Agreements Interactive Book Section */}
            <AgreementsBook />

            {/* Faculty Specific Agreements Table */}
            <FacultyAgreementsTable />
          </motion.div>
        )}

        {/* SECCIÓN 5: CIERRE DE PRÁCTICAS */}
        {activeSection === 'closing' && (
          <motion.div
            key="closing"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full bg-slate-50/50"
          >
            <ClosingPracticesSection />
          </motion.div>
        )}

        {/* SECCIÓN 6: DETALLE DE CARRERAS */}
        {isMajorSection && (
          <motion.div
            key="major-detail"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <MajorDetail 
              majorId={activeSection} 
              onBack={() => {
                onSectionChange('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default Home;