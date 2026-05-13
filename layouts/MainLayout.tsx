import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import SearchBar from '../components/SearchBar';
import ScrollToTop from '../components/ScrollToTop';
import { SectionId, SearchParams } from '../types';

interface MainLayoutProps {
  children: React.ReactNode;
  activeSection: SectionId;
  onSectionChange: (section: SectionId, params?: SearchParams) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, activeSection, onSectionChange }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 overflow-x-hidden">
      {/* Header Navigation - Persistent */}
      <Navbar activeSection={activeSection} onSectionChange={onSectionChange} />

      {/* Hero Banner - Persistent & Fixed Structure as requested */}
      <section className="w-full relative z-10">
        <HeroBanner activeSection={activeSection} />
      </section>

      {/* Search Section - Persistent */}
      <section className="w-full relative z-30 mt-2 md:-mt-12 mb-4 md:mb-6">
        <SearchBar onSectionChange={onSectionChange} />
      </section>

      {/* Anchor for automatic scrolling assistance */}
      <div id="section-content-start" className="w-full h-1"></div>

      {/* Main Content Area - Dynamic content slides in here */}
      <main className="flex-grow w-full max-w-7xl mx-auto">
        {children}
      </main>

      {/* Footer - Persistent */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;