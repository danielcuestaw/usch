import React, { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import { SectionId, SearchParams } from './types';

const App: React.FC = () => {
  // Función para obtener la sección basada en el hash de la URL
  const getInitialSection = (): SectionId => {
    const hash = window.location.hash.replace('#', '');
    const validSections: SectionId[] = ['home', 'practices', 'regulations', 'agreements', 'platform-instructions', 'closing', 'social-work', 'social-comm', 'advertising'];
    
    if (validSections.includes(hash as SectionId)) {
      return hash as SectionId;
    }
    return 'home';
  };

  // Estado inicial basado en la URL
  const [activeSection, setActiveSection] = useState<SectionId>(getInitialSection);
  // Nuevo estado para manejar la navegación profunda a libros (búsqueda)
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);

  // Manejador para cambiar sección y actualizar URL
  // Ahora acepta parámetros opcionales para libros
  const handleSectionChange = (section: SectionId, params?: SearchParams) => {
    setActiveSection(section);
    if (params) {
        setSearchParams(params);
    } else {
        setSearchParams(null); // Limpiar params si es una navegación normal
    }
    // Actualizar el hash en la URL sin recargar
    window.location.hash = section === 'home' ? '' : section;
  };

  // Escuchar cambios externos en el hash (por si el usuario usa las flechas del navegador)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validSections: SectionId[] = ['home', 'practices', 'regulations', 'agreements', 'platform-instructions', 'closing', 'social-work', 'social-comm', 'advertising'];
      
      if (validSections.includes(hash as SectionId)) {
        setActiveSection(hash as SectionId);
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <MainLayout activeSection={activeSection} onSectionChange={handleSectionChange}>
      <Home 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
        searchParams={searchParams} // Pasar params a Home
      />
    </MainLayout>
  );
};

export default App;