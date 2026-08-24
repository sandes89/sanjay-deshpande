import React from 'react';
import { Download, BookOpen, Layers, GraduationCap, MapPin, Mail, Github, Linkedin, CheckCircle, Sparkles, Dna, FileText } from 'lucide-react';
import { ProfileData, ThemeId } from '../types';
import { getThemeClasses } from '../data/themesData';

interface HeroSectionProps {
  profile: ProfileData;
  onOpenResume: () => void;
  currentTheme?: ThemeId;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenResume, currentTheme = 'emerald' }) => {
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <section id="about" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bio-grid-pattern">
      {/* Subtle Dynamic Theme Background Accent Glows */}
      <div 
        className="absolute top-0 right-0 -z-10 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-40 transition-colors duration-500"
        style={{ backgroundColor: themeClasses.accentGlow }}
      />
      <div className="absolute top-1/2 left-0 -z-10 w-80 h-80 bg-stone-300/20 dark:bg-stone-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Avatar & Quick Info Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative mb-6">
              <div className={`w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden ring-4 ${themeClasses.ring} ring-opacity-30 dark:ring-opacity-40 shadow-xl bg-stone-200 dark:bg-stone-800`}>
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div 
                className="absolute -bottom-2 -right-2 bg-white dark:bg-stone-900 px-3 py-1 rounded-full shadow-md border border-stone-200 dark:border-stone-800 flex items-center gap-1.5"
                title="Verified Academic Researcher"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
                <span className="text-[11px] font-semibold text-stone-800 dark:text-stone-200 font-mono-code">
                  Ph.D. Verified
                </span>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="w-full max-w-sm space-y-2.5 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                <MapPin className={`w-4 h-4 ${themeClasses.primaryText} shrink-0`} />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                <Mail className={`w-4 h-4 ${themeClasses.primaryText} shrink-0`} />
                <a href={profile.links.emailMailto} className={`${themeClasses.primaryHoverText} truncate underline-offset-2 hover:underline`}>
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-700 dark:text-stone-300 pt-1 border-t border-stone-100 dark:border-stone-800">
                <GraduationCap className={`w-4 h-4 ${themeClasses.primaryText} shrink-0`} />
                <span className="truncate">{profile.currentAffiliation}</span>
              </div>
            </div>

            {/* Social & Academic Links Grid */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-4">
              <a
                href={profile.links.googleScholar}
                target="_blank"
                rel="noreferrer"
                id="hero-scholar-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                Google Scholar
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20 hover:bg-sky-500/20 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              {profile.links.orcid && (
                <a
                  href={profile.links.orcid}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-orcid-link"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                >
                  <span className="font-mono-code font-bold text-[10px]">iD</span>
                  ORCID
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Hero Headline, Narrative, and Actions */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              {/* Top pill */}
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${themeClasses.badge} text-xs font-medium mb-4`}>
                <Dna className="w-3.5 h-3.5" />
                <span>Computational Biology, Single-Cell Spatial Omics & Protein AI</span>
              </div>

              {/* Title & Honorific */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight font-serif-academic leading-tight">
                {profile.name}
              </h1>

              <p className={`text-lg sm:text-xl font-semibold ${themeClasses.primaryText} mt-2 font-serif-academic`}>
                {profile.roleTitle}
              </p>

              <p className="text-sm font-normal text-stone-600 dark:text-stone-400 mt-1">
                {profile.currentAffiliation} • {profile.secondaryAffiliation}
              </p>

              {/* Bio Paragraphs */}
              <div className="mt-5 space-y-3 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                <p className="font-normal">
                  {profile.bioSummary}
                </p>
              </div>

              {/* Primary Call-to-Actions */}
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <button
                  id="hero-download-cv-btn"
                  onClick={onOpenResume}
                  className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold ${themeClasses.primaryBg} rounded-xl shadow-md hover:shadow-lg transition-all`}
                >
                  <Download className="w-4 h-4" />
                  Download Curriculum Vitae (CV)
                </button>

                <a
                  href="#publications"
                  id="hero-publications-btn"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl shadow-sm transition-all"
                >
                  <BookOpen className={`w-4 h-4 ${themeClasses.primaryText}`} />
                  Recent Publications (48+)
                </a>

                <a
                  href="#portfolio"
                  id="hero-portfolio-btn"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl shadow-sm transition-all"
                >
                  <Layers className={`w-4 h-4 ${themeClasses.primaryText}`} />
                  Software & Pipelines
                </a>
              </div>
            </div>

            {/* Impact Metric Cards Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-10 pt-6 border-t border-stone-200 dark:border-stone-800">
              <div className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm text-center sm:text-left hover:border-stone-300 dark:hover:border-stone-700 transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif-academic">
                  {profile.scholarStats.totalCitations.toLocaleString()}+
                </div>
                <div className={`text-xs font-semibold ${themeClasses.primaryText} mt-0.5`}>
                  Google Scholar Citations
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                  h-index: {profile.scholarStats.hIndex} • i10: {profile.scholarStats.i10Index}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm text-center sm:text-left hover:border-stone-300 dark:hover:border-stone-700 transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif-academic">
                  {profile.statsOverview.totalPublications}+
                </div>
                <div className={`text-xs font-semibold ${themeClasses.primaryText} mt-0.5`}>
                  Peer-Reviewed Papers
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                  Nat Biotech, NAR, Bioinfo, GR
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm text-center sm:text-left hover:border-stone-300 dark:hover:border-stone-700 transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif-academic">
                  {profile.statsOverview.patentsGranted}
                </div>
                <div className={`text-xs font-semibold ${themeClasses.primaryText} mt-0.5`}>
                  Granted US Patents
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                  Genomics & Assay Algorithms
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm text-center sm:text-left hover:border-stone-300 dark:hover:border-stone-700 transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif-academic">
                  {profile.statsOverview.yearsOfExperience}+
                </div>
                <div className={`text-xs font-semibold ${themeClasses.primaryText} mt-0.5`}>
                  Years of Leadership
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                  Genomics & Precision AI
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

