import { ThemeConfig, ThemeId } from '../types';

export const availableThemes: ThemeConfig[] = [
  {
    id: 'emerald',
    name: 'Genomic Emerald',
    tagline: 'Life Sciences & Precision Genomics',
    previewColor: '#059669',
    accentColor: '#10b981',
    badgeBg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
    activeRing: 'ring-emerald-500'
  },
  {
    id: 'cyan',
    name: 'Helix Cyan',
    tagline: 'Computational Genomics & HPC Systems',
    previewColor: '#0891b2',
    accentColor: '#06b6d4',
    badgeBg: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20',
    activeRing: 'ring-cyan-500'
  },
  {
    id: 'sapphire',
    name: 'Oxford Sapphire',
    tagline: 'Prestigious Academic & Institute Pedigree',
    previewColor: '#2563eb',
    accentColor: '#3b82f6',
    badgeBg: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20',
    activeRing: 'ring-blue-500'
  },
  {
    id: 'amber',
    name: 'DNA Amber & Gold',
    tagline: 'Scholarly Editorial & Biotech Sandstone',
    previewColor: '#d97706',
    accentColor: '#f59e0b',
    badgeBg: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
    activeRing: 'ring-amber-500'
  },
  {
    id: 'amethyst',
    name: 'Bio-Amethyst',
    tagline: 'Structural Biology & Molecular AI',
    previewColor: '#9333ea',
    accentColor: '#a855f7',
    badgeBg: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20',
    activeRing: 'ring-purple-500'
  }
];

export const getThemeClasses = (themeId?: ThemeId | string) => {
  switch (themeId) {

    case 'cyan':
      return {
        primaryText: 'text-cyan-700 dark:text-cyan-400',
        primaryHoverText: 'hover:text-cyan-600 dark:hover:text-cyan-300',
        primaryBg: 'bg-cyan-600 hover:bg-cyan-700 text-white',
        primaryBorder: 'border-cyan-500',
        subtleBg: 'bg-cyan-50 dark:bg-cyan-950/40',
        subtleBorder: 'border-cyan-200 dark:border-cyan-900',
        badge: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20',
        ring: 'ring-cyan-500',
        cardHover: 'hover:border-cyan-500/50 dark:hover:border-cyan-500/40',
        activePill: 'bg-cyan-600 text-white shadow-sm',
        accentGlow: 'rgba(6, 182, 212, 0.15)',
        chartStroke: '#06b6d4'
      };
    case 'sapphire':
      return {
        primaryText: 'text-blue-700 dark:text-blue-400',
        primaryHoverText: 'hover:text-blue-600 dark:hover:text-blue-300',
        primaryBg: 'bg-blue-600 hover:bg-blue-700 text-white',
        primaryBorder: 'border-blue-500',
        subtleBg: 'bg-blue-50 dark:bg-blue-950/40',
        subtleBorder: 'border-blue-200 dark:border-blue-900',
        badge: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20',
        ring: 'ring-blue-500',
        cardHover: 'hover:border-blue-500/50 dark:hover:border-blue-500/40',
        activePill: 'bg-blue-600 text-white shadow-sm',
        accentGlow: 'rgba(59, 130, 246, 0.15)',
        chartStroke: '#3b82f6'
      };
    case 'amber':
      return {
        primaryText: 'text-amber-700 dark:text-amber-400',
        primaryHoverText: 'hover:text-amber-600 dark:hover:text-amber-300',
        primaryBg: 'bg-amber-600 hover:bg-amber-700 text-white',
        primaryBorder: 'border-amber-500',
        subtleBg: 'bg-amber-50 dark:bg-amber-950/40',
        subtleBorder: 'border-amber-200 dark:border-amber-900',
        badge: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
        ring: 'ring-amber-500',
        cardHover: 'hover:border-amber-500/50 dark:hover:border-amber-500/40',
        activePill: 'bg-amber-600 text-white shadow-sm',
        accentGlow: 'rgba(245, 158, 11, 0.15)',
        chartStroke: '#f59e0b'
      };
    case 'amethyst':
      return {
        primaryText: 'text-purple-700 dark:text-purple-400',
        primaryHoverText: 'hover:text-purple-600 dark:hover:text-purple-300',
        primaryBg: 'bg-purple-600 hover:bg-purple-700 text-white',
        primaryBorder: 'border-purple-500',
        subtleBg: 'bg-purple-50 dark:bg-purple-950/40',
        subtleBorder: 'border-purple-200 dark:border-purple-900',
        badge: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20',
        ring: 'ring-purple-500',
        cardHover: 'hover:border-purple-500/50 dark:hover:border-purple-500/40',
        activePill: 'bg-purple-600 text-white shadow-sm',
        accentGlow: 'rgba(168, 85, 247, 0.15)',
        chartStroke: '#a855f7'
      };
    case 'emerald':
    default:
      return {
        primaryText: 'text-emerald-700 dark:text-emerald-400',
        primaryHoverText: 'hover:text-emerald-600 dark:hover:text-emerald-300',
        primaryBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        primaryBorder: 'border-emerald-500',
        subtleBg: 'bg-emerald-50 dark:bg-emerald-950/40',
        subtleBorder: 'border-emerald-200 dark:border-emerald-900',
        badge: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
        ring: 'ring-emerald-500',
        cardHover: 'hover:border-emerald-500/50 dark:hover:border-emerald-500/40',
        activePill: 'bg-emerald-600 text-white shadow-sm',
        accentGlow: 'rgba(16, 185, 129, 0.15)',
        chartStroke: '#10b981'
      };
  }
};
