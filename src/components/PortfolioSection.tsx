import React, { useState, useMemo } from 'react';
import { Layers, Github, ExternalLink, Star, Sparkles, BookOpen, ArrowUpRight, CheckCircle2, ChevronRight, Dna } from 'lucide-react';
import { ProjectItem, ThemeId } from '../types';
import { getThemeClasses } from '../data/themesData';

interface PortfolioSectionProps {
  projects: ProjectItem[];
  onOpenProject: (project: ProjectItem) => void;
  currentTheme?: ThemeId;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects, onOpenProject, currentTheme = 'emerald' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const themeClasses = getThemeClasses(currentTheme);

  const categories = useMemo(() => {
    const cats = ['all', 'Single-Cell & Spatial', 'Genomics & NGS', 'Structural Biology & AI', 'Pipelines & Tools'];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section id="portfolio" className="py-16 lg:py-20 border-t border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${themeClasses.badge} text-xs font-semibold uppercase tracking-wider mb-2`}>
              <Layers className="w-3.5 h-3.5" />
              Bioinformatics & Open Source Software
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 font-serif-academic">
              Computational Biology Software & Genomic Platforms
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-2 max-w-2xl">
              Open-source single-cell spatial toolkits, hardware-accelerated NGS aligners, equivariant protein design models, and cloud-native Nextflow pipelines.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? `${themeClasses.primaryBg} shadow-sm font-semibold`
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              id={`portfolio-card-${proj.id}`}
              className={`flex flex-col justify-between p-6 rounded-3xl bg-stone-50/80 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-md ${themeClasses.cardHover} transition-all group`}
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${themeClasses.badge}`}>
                    {proj.category}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {proj.stars && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-600 dark:text-stone-400">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        {proj.stars.toLocaleString()}
                      </span>
                    )}
                    <span className={`w-2.5 h-2.5 rounded-full ${
                      proj.status === 'Production' ? 'bg-emerald-500' : 'bg-sky-500'
                    }`} title={proj.status} />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className={`text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-academic ${themeClasses.primaryHoverText} transition-colors`}>
                  {proj.title}
                </h3>
                <p className={`text-xs font-medium ${themeClasses.primaryText} mt-0.5`}>
                  {proj.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-3 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                {/* Metrics Highlight Pills */}
                <div className="grid grid-cols-2 gap-2 my-4 pt-2 border-t border-stone-200/60 dark:border-stone-800">
                  {proj.keyMetrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-white dark:bg-stone-800/80 border border-stone-200/50 dark:border-stone-700 text-center">
                      <div className={`text-sm font-bold ${themeClasses.primaryText}`}>{m.value}</div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-stone-200/60 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono-code"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] text-stone-500 font-mono-code">
                      +{proj.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-stone-200/60 dark:border-stone-800 flex items-center justify-between gap-2">
                <button
                  id={`view-project-details-${proj.id}`}
                  onClick={() => onOpenProject(proj)}
                  className={`inline-flex items-center gap-1 text-xs font-semibold ${themeClasses.primaryText} hover:opacity-80`}
                >
                  Inspect Architecture
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`github-link-${proj.id}`}
                      className="p-1.5 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {proj.liveDemoUrl && (
                    <a
                      href={proj.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`demo-link-${proj.id}`}
                      className="p-1.5 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

