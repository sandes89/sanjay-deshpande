import React, { useState, useEffect } from 'react';
import { Download, Moon, Sun, Menu, X, GraduationCap, Sparkles, BookOpen, Layers, Briefcase, Mail, User, Dna } from 'lucide-react';
import { ProfileData, ThemeId } from '../types';
import { ThemeSelector } from './ThemeSelector';
import { getThemeClasses } from '../data/themesData';

interface NavbarProps {
  profile: ProfileData;
  onOpenResume: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  currentTheme: ThemeId;
  onSelectTheme: (theme: ThemeId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  profile, 
  onOpenResume, 
  darkMode, 
  onToggleDarkMode,
  currentTheme,
  onSelectTheme 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const themeClasses = getThemeClasses(currentTheme);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'scholar', 'publications', 'portfolio', 'expertise', 'experience', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Scholar', href: '#scholar', id: 'scholar', icon: GraduationCap },
    { label: 'Publications', href: '#publications', id: 'publications', icon: BookOpen },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio', icon: Layers },
    { label: 'Expertise', href: '#expertise', id: 'expertise', icon: Dna },
    { label: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header className={`no-print sticky top-0 z-40 w-full transition-all duration-200 ${
      isScrolled 
        ? 'bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand identity */}
        <a 
          href="#about"
          id="nav-brand-link"
          className="flex items-center gap-3 group"
        >
          <div className={`w-10 h-10 rounded-xl ${themeClasses.primaryBg} flex items-center justify-center font-serif-academic font-bold text-lg shadow-sm group-hover:scale-105 transition-transform`}>
            SD
          </div>
          <div>
            <span className="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base leading-tight block font-serif-academic group-hover:opacity-80 transition-opacity">
              {profile.name}
            </span>
            <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400 block leading-tight">
              Ph.D. • Bioinformatics & Genomics
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-stone-200/60 dark:bg-stone-900/60 p-1.5 rounded-2xl border border-stone-300/60 dark:border-stone-800/80">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? `bg-white dark:bg-stone-800 ${themeClasses.primaryText} shadow-sm`
                    : `text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/40 dark:hover:bg-stone-800/40`
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Scientific Theme Selector */}
          <ThemeSelector 
            currentTheme={currentTheme} 
            onSelectTheme={onSelectTheme} 
          />

          {/* Dark / Light Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl text-stone-600 dark:text-stone-300 bg-stone-200/70 dark:bg-stone-900/80 hover:bg-stone-300/70 dark:hover:bg-stone-800 transition-colors border border-stone-300/60 dark:border-stone-800"
            aria-label="Toggle dark mode"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          {/* Download / View Resume Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold ${themeClasses.primaryBg} rounded-xl shadow-sm hover:shadow transition-all group`}
          >
            <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-600 dark:text-stone-300 bg-stone-200/70 dark:bg-stone-900/80 hover:bg-stone-300 dark:hover:bg-stone-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-4 py-4 space-y-1 animate-in slide-in-from-top duration-200 shadow-xl"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-900 ${themeClasses.primaryHoverText} transition-colors`}
              >
                <Icon className="w-4 h-4 text-stone-400" />
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold ${themeClasses.primaryBg} rounded-xl shadow-sm transition-colors`}
            >
              <Download className="w-4 h-4" />
              Download Full Curriculum Vitae (.PDF / .TXT)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

