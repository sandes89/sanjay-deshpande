import React from 'react';
import { X, ExternalLink, Github, BookOpen, CheckCircle2, Star, Sparkles, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      id="project-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="project-modal-content" 
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                {project.category}
              </span>
              <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                project.status === 'Production'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  : project.status === 'Active Research'
                  ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20'
                  : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
              }`}>
                ● {project.status}
              </span>
              {project.stars && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 rounded-full border border-amber-200 dark:border-amber-900">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  {project.stars.toLocaleString()} stars
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
              {project.title}
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              {project.subtitle}
            </p>
          </div>
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {project.keyMetrics.map((m, idx) => (
            <div 
              key={idx} 
              className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-800 text-center"
            >
              <div className="text-lg sm:text-xl font-bold text-amber-600 dark:text-amber-400">
                {m.value}
              </div>
              <div className="text-xs font-medium text-stone-500 dark:text-stone-400 mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Problem & Impact */}
        <div className="space-y-4 text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Core Problem Solved & Impact
            </h4>
            <p className="text-stone-700 dark:text-stone-300">
              {project.problemSolved}
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              <Layers className="w-3.5 h-3.5" />
              System Architecture & Methodology
            </h4>
            <p className="text-stone-600 dark:text-stone-400">
              {project.fullDetails}
            </p>
          </div>

          {/* Associated Publication */}
          {project.paperTitle && (
            <div className="p-3.5 rounded-xl bg-stone-100/70 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-stone-900 dark:text-stone-100">Associated Peer-Reviewed Publication:</span>
                <p className="text-stone-600 dark:text-stone-400 mt-0.5 font-serif-academic italic">
                  {project.paperTitle}
                </p>
                {project.paperDoi && (
                  <span className="inline-block mt-1 font-mono-code text-[11px] text-amber-600 dark:text-amber-400">
                    DOI: {project.paperDoi}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Technologies & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-lg border border-stone-200 dark:border-stone-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-stone-100 dark:border-stone-800">
          <div className="text-xs text-stone-500 dark:text-stone-400">
            Open for commercial licensing & academic collaboration
          </div>
          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-xl transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo / Benchmark
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-stone-900 dark:bg-amber-600 hover:bg-stone-800 dark:hover:bg-amber-700 rounded-xl shadow-sm transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
