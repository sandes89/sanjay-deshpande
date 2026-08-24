import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Award, FileCode2, Sparkles, Dna } from 'lucide-react';
import { ExperienceItem, ThemeId } from '../types';
import { getThemeClasses } from '../data/themesData';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
  currentTheme?: ThemeId;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, currentTheme = 'emerald' }) => {
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <section id="experience" className="py-16 lg:py-20 border-t border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${themeClasses.badge} text-xs font-semibold uppercase tracking-wider mb-2`}>
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 font-serif-academic">
            Professional & Academic Appointments
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-2 max-w-2xl">
            A track record of computational biology leadership across premier genomic institutes, biotechnology enterprises, and academic centers.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-5 before:w-0.5 before:bg-stone-200 dark:before:bg-stone-800">
          {experience.map((item) => (
            <div 
              key={item.id}
              id={`experience-item-${item.id}`}
              className="relative pl-10 sm:pl-14 group"
            >
              {/* Timeline Marker */}
              <div className={`absolute left-1.5 sm:left-3 top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                item.current 
                  ? `${themeClasses.primaryBg} ${themeClasses.primaryBorder} ring-4 ${themeClasses.ring}` 
                  : 'bg-white dark:bg-stone-900 border-stone-400 dark:border-stone-600 group-hover:border-current'
              }`} />

              <div className={`p-6 sm:p-7 rounded-3xl bg-stone-50/80 dark:bg-stone-900/60 border border-stone-200/90 dark:border-stone-800 shadow-sm ${themeClasses.cardHover} transition-all space-y-4`}>
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-academic">
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className={`text-sm font-semibold ${themeClasses.primaryText} mt-0.5`}>
                      {item.organization} {item.department && `• ${item.department}`}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-stone-500 dark:text-stone-400 space-y-0.5 font-mono-code shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  {item.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className={`${themeClasses.primaryText} font-bold mt-0.5`}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                {item.technologies && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-stone-200/60 dark:border-stone-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mr-1">
                      Stack:
                    </span>
                    {item.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] rounded-md bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono-code border border-stone-200/80 dark:border-stone-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

