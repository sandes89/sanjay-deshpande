import React from 'react';
import { Sparkles, Dna, Microscope, BrainCircuit, Workflow, Layers, Terminal, Server, Shield, Database, Activity, GitBranch } from 'lucide-react';
import { ExpertiseDomain, ThemeId } from '../types';
import { getThemeClasses } from '../data/themesData';

interface ExpertiseSectionProps {
  expertise: ExpertiseDomain[];
  currentTheme?: ThemeId;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ expertise, currentTheme = 'emerald' }) => {
  const themeClasses = getThemeClasses(currentTheme);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Microscope': return <Microscope className={`w-5 h-5 ${themeClasses.primaryText}`} />;
      case 'Dna': return <Dna className={`w-5 h-5 ${themeClasses.primaryText}`} />;
      case 'BrainCircuit': return <BrainCircuit className={`w-5 h-5 ${themeClasses.primaryText}`} />;
      case 'Workflow': return <Workflow className={`w-5 h-5 ${themeClasses.primaryText}`} />;
      default: return <Sparkles className={`w-5 h-5 ${themeClasses.primaryText}`} />;
    }
  };

  const techStackGroups = [
    {
      category: "Single-Cell & Spatial Omics",
      icon: Microscope,
      items: ["Scanpy", "AnnData", "Seurat v5", "scVI-tools", "Squidpy", "cell2location", "Giotto", "SingleCellExperiment", "Harmony"]
    },
    {
      category: "Genomics & Sequence Toolchains",
      icon: Dna,
      items: ["BWA-MEM2", "Minimap2", "GATK4", "DeepVariant", "Samtools", "BCFtools", "Bedtools", "Sniffles2", "IGV.js", "Picard", "MultiQC"]
    },
    {
      category: "Structural Biology & Protein AI",
      icon: BrainCircuit,
      items: ["AlphaFold3 / ColabFold", "ESM-2 / ESM-3", "PyTorch Geometric", "OpenMM", "PyMOL", "BioNeMo", "RosettaCommons", "DiffDock"]
    },
    {
      category: "Workflow & Cloud Infrastructure",
      icon: Workflow,
      items: ["Nextflow / nf-core", "Snakemake", "Docker / Singularity", "AWS HealthOmics", "GCP Life Sciences", "Slurm Workload Manager", "Bioconda", "CWL / WDL"]
    }
  ];

  return (
    <section id="expertise" className="py-16 lg:py-20 border-t border-stone-200/80 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${themeClasses.badge} text-xs font-semibold uppercase tracking-wider mb-2`}>
            <Dna className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 font-serif-academic">
            Domains of Expertise & Computational Biology Stack
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-2 max-w-2xl">
            A specialized synergy of statistical genomics, single-cell spatial algorithms, deep structural modeling, and scalable cloud-native pipeline engineering.
          </p>
        </div>

        {/* 4 Major Expertise Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {expertise.map((domain) => (
            <div
              key={domain.id}
              id={`expertise-card-${domain.id}`}
              className={`p-6 sm:p-7 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm ${themeClasses.cardHover} transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className={`p-3 rounded-2xl ${themeClasses.subtleBg} border ${themeClasses.subtleBorder}`}>
                    {getIcon(domain.iconName)}
                  </div>
                  <span className={`px-3 py-1 text-xs font-mono-code font-bold rounded-full bg-stone-100 dark:bg-stone-800 ${themeClasses.primaryText} border border-stone-200 dark:border-stone-700`}>
                    {domain.levelPercentage}% Mastery
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-academic">
                  {domain.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                  {domain.description}
                </p>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden my-4">
                  <div 
                    style={{ width: `${domain.levelPercentage}%` }} 
                    className={`h-full ${themeClasses.primaryBg} rounded-full`}
                  />
                </div>

                {/* Key topics */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                    Key Focus Areas:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.keyTopics.map((topic, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2 py-0.5 text-xs rounded-md bg-stone-50 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-700"
                      >
                        • {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools and Frameworks */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                  Frameworks & Toolchains:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {domain.toolsAndFrameworks.map((tool, idx) => (
                    <span 
                      key={idx}
                      className={`px-2 py-0.5 text-[11px] rounded ${themeClasses.subtleBg} ${themeClasses.primaryText} font-mono-code font-medium border ${themeClasses.subtleBorder}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Stack Grid Matrix */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-academic mb-6 flex items-center gap-2">
            <Terminal className={`w-5 h-5 ${themeClasses.primaryText}`} />
            Comprehensive Technical & Infrastructure Stack Matrix
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackGroups.map((group, gIdx) => {
              const Icon = group.icon;
              return (
                <div key={gIdx} className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-800 pb-2">
                    <Icon className={`w-4 h-4 ${themeClasses.primaryText}`} />
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, iIdx) => (
                      <span 
                        key={iIdx}
                        className="px-2.5 py-1 text-xs rounded-lg bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono-code border border-stone-200/70 dark:border-stone-700 hover:border-current transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

