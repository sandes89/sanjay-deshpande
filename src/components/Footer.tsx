import React from 'react';
import { ArrowUp, GraduationCap, Github, Linkedin, Mail, Heart, Sparkles, Dna } from 'lucide-react';
import { ProfileData, ThemeId } from '../types';
import { getThemeClasses } from '../data/themesData';

interface FooterProps {
  profile: ProfileData;
  currentTheme?: ThemeId;
}

export const Footer: React.FC<FooterProps> = ({ profile, currentTheme = 'emerald' }) => {
  const themeClasses = getThemeClasses(currentTheme);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="no-print bg-stone-100 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 py-12 text-stone-600 dark:text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-200 dark:border-stone-800">
          
          {/* Left identity */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className={`w-9 h-9 rounded-xl ${themeClasses.primaryBg} text-white flex items-center justify-center font-serif-academic font-bold text-base shadow-sm`}>
              SD
            </div>
            <div>
              <div className="font-bold text-stone-900 dark:text-stone-100 font-serif-academic text-sm">
                {profile.name}, {profile.honorific}
              </div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400">
                {profile.roleTitle}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.links.googleScholar}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors`}
              title="Google Scholar"
            >
              <GraduationCap className="w-4 h-4" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors`}
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors`}
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.links.emailMailto}
              className={`p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors`}
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className={`ml-2 flex items-center gap-1.5 px-3 py-2 rounded-xl ${themeClasses.subtleBg} ${themeClasses.primaryText} border ${themeClasses.subtleBorder} font-semibold hover:opacity-80 transition-colors`}
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500 dark:text-stone-400">
          <div>
            © {new Date().getFullYear()} {profile.name}. All research papers and preprints are linked according to their respective open-access licenses.
          </div>
          <div className="flex items-center gap-2">
            <span>Computational Biology & Bioinformatics Academic Profile</span>
            <span>•</span>
            <span>Last Updated: August 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

