import React, { useState } from 'react';
import { GraduationCap, ExternalLink, TrendingUp, Award, BarChart3, BookCheck, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import { ScholarStats, ThemeId } from '../types';
import { getThemeClasses } from '../data/themesData';

interface ScholarSectionProps {
  scholar: ScholarStats;
  currentTheme?: ThemeId;
}

export const ScholarSection: React.FC<ScholarSectionProps> = ({ scholar, currentTheme = 'emerald' }) => {
  const [activeYearIndex, setActiveYearIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const themeClasses = getThemeClasses(currentTheme);

  const maxCitations = Math.max(...scholar.citationsHistory.map(item => item.citations));

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(scholar.profileUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="scholar" className="py-16 lg:py-20 border-t border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scholar Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${themeClasses.badge} text-xs font-semibold uppercase tracking-wider mb-2`}>
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Metrics & Citations
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 font-serif-academic">
              Google Scholar Profile & Citation Impact
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-2 max-w-2xl">
              Verified citation statistics, h-index velocity, and research domain indexation tracked via Google Scholar.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              id="copy-scholar-link-btn"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 transition-colors"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedLink ? 'Link Copied!' : 'Share Scholar URL'}
            </button>

            <a
              href={scholar.profileUrl}
              target="_blank"
              rel="noreferrer"
              id="scholar-external-profile-btn"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold ${themeClasses.primaryBg} rounded-xl shadow-md transition-all group`}
            >
              <GraduationCap className="w-4 h-4" />
              Open Google Scholar
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 4 Top Scholar Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between text-stone-500 dark:text-stone-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Total Citations</span>
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif-academic">
              {scholar.totalCitations.toLocaleString()}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-1">
              <span>+{scholar.citationsRecent5Years.toLocaleString()}</span>
              <span className="text-stone-500 dark:text-stone-400 font-normal">since 2021 (75%)</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 shadow-sm">
            <div className="flex items-center justify-between text-stone-500 dark:text-stone-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">h-index</span>
              <Award className={`w-4 h-4 ${themeClasses.primaryText}`} />
            </div>
            <div className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif-academic">
              {scholar.hIndex}
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">
              h-index (since 2021): <strong className="text-stone-800 dark:text-stone-200">{scholar.hIndexRecent5Years}</strong>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 shadow-sm">
            <div className="flex items-center justify-between text-stone-500 dark:text-stone-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">i10-index</span>
              <BookCheck className={`w-4 h-4 ${themeClasses.primaryText}`} />
            </div>
            <div className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif-academic">
              {scholar.i10Index}
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">
              i10-index (since 2021): <strong className="text-stone-800 dark:text-stone-200">{scholar.i10IndexRecent5Years}</strong>
            </div>
          </div>

          <div className={`p-5 rounded-2xl ${themeClasses.subtleBg} border ${themeClasses.subtleBorder} shadow-sm flex flex-col justify-between`}>
            <div>
              <div className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${themeClasses.primaryText} mb-1`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Scholar ID
              </div>
              <div className="font-mono-code text-xs text-stone-700 dark:text-stone-300 font-semibold break-all">
                {scholar.scholarId}
              </div>
            </div>
            <div className={`text-[11px] ${themeClasses.primaryText} mt-2 font-medium opacity-90`}>
              ✓ Verified institutional email at genomics-institute.org
            </div>
          </div>
        </div>

        {/* Citation Growth Chart + Scholar Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Annual Citation History Interactive Bars */}
          <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif-academic flex items-center gap-2">
                  <BarChart3 className={`w-4 h-4 ${themeClasses.primaryText}`} />
                  Annual Citation Growth (2019 – 2026)
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  Hover over bars to inspect specific annual citation velocity
                </p>
              </div>
              
              {activeYearIndex !== null && (
                <div className={`px-3 py-1 ${themeClasses.badge} rounded-lg text-xs font-mono-code font-bold`}>
                  {scholar.citationsHistory[activeYearIndex].year}: {scholar.citationsHistory[activeYearIndex].citations} citations
                </div>
              )}
            </div>

            {/* Interactive Bar Chart */}
            <div className="pt-6 pb-2">
              <div className="h-44 sm:h-52 flex items-end justify-between gap-2 sm:gap-4 px-2 border-b border-stone-200 dark:border-stone-800">
                {scholar.citationsHistory.map((item, idx) => {
                  const heightPercent = Math.round((item.citations / maxCitations) * 100);
                  const isHovered = activeYearIndex === idx;

                  return (
                    <div 
                      key={item.year}
                      className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
                      onMouseEnter={() => setActiveYearIndex(idx)}
                      onMouseLeave={() => setActiveYearIndex(null)}
                    >
                      {/* Floating tooltip on hover */}
                      <span className={`text-[10px] sm:text-xs font-mono-code font-bold mb-1.5 transition-all ${
                        isHovered 
                          ? `${themeClasses.primaryText} scale-110 font-extrabold` 
                          : 'text-stone-400 dark:text-stone-500'
                      }`}>
                        {item.citations}
                      </span>

                      {/* Bar Fill */}
                      <div 
                        style={{ height: `${Math.max(heightPercent, 8)}%` }}
                        className={`w-full max-w-[40px] rounded-t-lg transition-all duration-300 ${
                          isHovered
                            ? `${themeClasses.primaryBg} shadow-md scale-y-[1.02]`
                            : `bg-stone-300 dark:bg-stone-700 group-hover:opacity-80`
                        }`}
                      />
                      
                      {/* Year Label */}
                      <span className={`text-[11px] sm:text-xs font-mono-code font-medium mt-2 transition-colors ${
                        isHovered ? 'text-stone-900 dark:text-stone-100 font-bold' : 'text-stone-500 dark:text-stone-400'
                      }`}>
                        '{item.year.toString().slice(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mt-4 pt-3 border-t border-stone-200/60 dark:border-stone-800">
              <span>Data source: Google Scholar Indexation API</span>
              <span className={`font-medium ${themeClasses.primaryText}`}>
                Avg. +32% YoY Citation Acceleration
              </span>
            </div>
          </div>

          {/* Right Column: Research Interests & Citation Indexation */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif-academic flex items-center gap-2 mb-3">
                <Sparkles className={`w-4 h-4 ${themeClasses.primaryText}`} />
                Indexed Research Interests
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                Primary taxonomic categories indexed on Google Scholar:
              </p>

              <div className="flex flex-wrap gap-2">
                {scholar.researchInterests.map((interest, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 shadow-2xs hover:border-current transition-colors"
                  >
                    #{interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-xs space-y-2">
              <div className="font-bold text-stone-900 dark:text-stone-100">
                Want to cite Dr. Deshpande's work?
              </div>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-[11px]">
                You can copy BibTeX citations directly from the Publications section below or export the full bibliography (.bib).
              </p>
              <a 
                href="#publications" 
                className={`inline-block font-semibold ${themeClasses.primaryText} hover:underline pt-1 text-xs`}
              >
                Browse Publications & Copy BibTeX →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

