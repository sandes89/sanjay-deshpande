import React from 'react';
import { GraduationCap, Award, BookOpen, Sparkles, Building, UserCheck, ShieldCheck, HeartHandshake, Dna } from 'lucide-react';
import { ProfileData, ThemeId } from '../types';
import { getThemeClasses } from '../data/themesData';

interface AboutSectionProps {
  profile: ProfileData;
  currentTheme?: ThemeId;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, currentTheme = 'emerald' }) => {
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <section id="biography" className="py-16 lg:py-20 border-t border-stone-200/80 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${themeClasses.badge} text-xs font-semibold uppercase tracking-wider mb-2`}>
            <UserCheck className="w-3.5 h-3.5" />
            Background & Research Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 font-serif-academic">
            Professional Overview & Academic Pedigree
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-2 max-w-3xl">
            Bridging fundamental genomic data science, single-cell spatial algorithms, deep structural modeling, and scalable clinical precision medicine.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Narrative Background & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-academic flex items-center gap-2">
                <Sparkles className={`w-4 h-4 ${themeClasses.primaryText}`} />
                Research Statement & Vision
              </h3>
              
              {profile.fullBioParagraphs.map((para, idx) => (
                <p key={idx} className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-4 border-t border-stone-100 dark:border-stone-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                  Key Research Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800">
                    <div className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                      <ShieldCheck className={`w-3.5 h-3.5 ${themeClasses.primaryText}`} />
                      Single-Cell Spatial Resolution
                    </div>
                    <p className="text-stone-500 dark:text-stone-400 mt-1 text-[11px]">
                      Coupling transcriptomic graphs with histological in situ coordinates for sub-cellular tissue microenvironment mapping.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800">
                    <div className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                      <Building className={`w-3.5 h-3.5 ${themeClasses.primaryText}`} />
                      Reproducible Cloud Genomics
                    </div>
                    <p className="text-stone-500 dark:text-stone-400 mt-1 text-[11px]">
                      Orchestrating containerized, deterministic Nextflow / nf-core pipelines across petabyte clinical cohorts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Honors & Awards */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-academic flex items-center gap-2 mb-4">
                <Award className={`w-4 h-4 ${themeClasses.primaryText}`} />
                Select Honors, Awards & Grants
              </h3>

              <div className="space-y-3.5">
                {profile.awards.map((award) => (
                  <div 
                    key={award.id} 
                    className="p-3.5 rounded-2xl bg-stone-50/80 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800 flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                        {award.title}
                      </div>
                      <div className={`text-xs ${themeClasses.primaryText} font-medium`}>
                        {award.organization}
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                        {award.description}
                      </p>
                    </div>
                    <span className={`shrink-0 px-2.5 py-1 text-xs font-mono-code font-semibold rounded-lg ${themeClasses.badge}`}>
                      {award.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Academic Lineage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-academic flex items-center gap-2 mb-6">
                <GraduationCap className={`w-5 h-5 ${themeClasses.primaryText}`} />
                Education & Academic Lineage
              </h3>

              <div className="relative pl-6 border-l-2 border-stone-200 dark:border-stone-800 space-y-8">
                {profile.education.map((edu) => (
                  <div key={edu.id} className="relative group">
                    {/* Timeline bullet */}
                    <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white dark:bg-stone-900 border-2 ${themeClasses.primaryBorder} group-hover:scale-125 transition-transform`} />
                    
                    <div className={`text-xs font-mono-code font-semibold ${themeClasses.primaryText}`}>
                      {edu.year}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 mt-0.5 font-serif-academic">
                      {edu.degree}
                    </h4>
                    <div className="text-xs font-medium text-stone-600 dark:text-stone-300">
                      {edu.institution}, {edu.location}
                    </div>

                    {edu.thesisTitle && (
                      <div className="mt-2 p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-800 text-xs">
                        <span className="font-semibold text-stone-700 dark:text-stone-300 block">Dissertation:</span>
                        <p className="text-stone-600 dark:text-stone-400 italic mt-0.5">
                          "{edu.thesisTitle}"
                        </p>
                        {edu.advisor && (
                          <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                            Advisor: <strong className="text-stone-700 dark:text-stone-300">{edu.advisor}</strong>
                          </div>
                        )}
                      </div>
                    )}

                    {edu.honors && (
                      <div className={`mt-1.5 text-xs ${themeClasses.primaryText} font-medium`}>
                        ★ {edu.honors}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Service & Committee Reviewer */}
            <div className={`p-6 rounded-3xl ${themeClasses.subtleBg} border ${themeClasses.subtleBorder} space-y-3`}>
              <h4 className={`text-xs font-bold uppercase tracking-wider ${themeClasses.primaryText} flex items-center gap-1.5`}>
                <HeartHandshake className="w-4 h-4" />
                Service & Professional Affiliations
              </h4>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                Senior Program Committee & Reviewer for premier bioinformatics & computational biology venues:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {['ISMB / ECCB', 'RECOMB', 'Bioinformatics (Oxford)', 'Nature Methods', 'Genome Research', 'NAR', 'IEEE/ACM TCBB', 'Briefings in Bioinfo'].map((v) => (
                  <span key={v} className="px-2.5 py-1 rounded-lg bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 font-mono-code text-[11px] font-semibold border border-stone-200 dark:border-stone-700">
                    {v}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

