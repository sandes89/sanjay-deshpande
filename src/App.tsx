import React, { useState, useEffect } from 'react';
import { initialProfileData } from './data/profileData';
import { ProfileData, PublicationItem, ProjectItem, ThemeId } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ScholarSection } from './components/ScholarSection';
import { PublicationsSection } from './components/PublicationsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { BibtexModal } from './components/BibtexModal';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [profile] = useState<ProfileData>(initialProfileData);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bioinformatics_profile_theme') as ThemeId;
      if (saved && ['emerald', 'cyan', 'sapphire', 'amber', 'amethyst'].includes(saved)) {
        return saved;
      }
    }
    return 'emerald';
  });

  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedBibtexPub, setSelectedBibtexPub] = useState<PublicationItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('bioinformatics_profile_theme', currentTheme);
    }
  }, [currentTheme]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-200">
      
      {/* Sticky Navigation with Theme Switcher */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
      />

      {/* Main Single-Page Content Canvas */}
      <main className="flex-1">
        {/* 1. Hero & Identity */}
        <HeroSection
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
          currentTheme={currentTheme}
        />

        {/* 2. Google Scholar Spotlight & Citation Velocity */}
        <ScholarSection
          scholar={profile.scholarStats}
          currentTheme={currentTheme}
        />

        {/* 3. Recent Publications & Preprints */}
        <PublicationsSection
          publications={profile.publications}
          onOpenBibtex={(pub) => setSelectedBibtexPub(pub)}
          currentTheme={currentTheme}
        />

        {/* 4. Research & Engineering Project Portfolio */}
        <PortfolioSection
          projects={profile.projects}
          onOpenProject={(proj) => setSelectedProject(proj)}
          currentTheme={currentTheme}
        />

        {/* 5. Biography, Research Statement, Education & Awards */}
        <AboutSection
          profile={profile}
          currentTheme={currentTheme}
        />

        {/* 6. Technical Expertise & Stack Matrix */}
        <ExpertiseSection
          expertise={profile.expertise}
          currentTheme={currentTheme}
        />

        {/* 7. Experience & Appointments */}
        <ExperienceSection
          experience={profile.experience}
          currentTheme={currentTheme}
        />

        {/* 8. Contact & Collaborations */}
        <ContactSection
          profile={profile}
          currentTheme={currentTheme}
        />
      </main>

      {/* Footer */}
      <Footer 
        profile={profile} 
        currentTheme={currentTheme} 
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        currentTheme={currentTheme}
      />

      <BibtexModal
        publication={selectedBibtexPub}
        onClose={() => setSelectedBibtexPub(null)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

