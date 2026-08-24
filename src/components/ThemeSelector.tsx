import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles, ChevronDown } from 'lucide-react';
import { ThemeId } from '../types';
import { availableThemes } from '../data/themesData';

interface ThemeSelectorProps {
  currentTheme: ThemeId;
  onSelectTheme: (theme: ThemeId) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onSelectTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeThemeConfig = availableThemes.find(t => t.id === currentTheme) || availableThemes[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="theme-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-stone-200/70 dark:bg-stone-900/80 hover:bg-stone-300/70 dark:hover:bg-stone-800 transition-colors border border-stone-300/60 dark:border-stone-800 text-stone-700 dark:text-stone-300"
        title="Change Scientific Profile Theme"
        aria-expanded={isOpen}
      >
        <span
          className="w-3 h-3 rounded-full shrink-0 shadow-xs"
          style={{ backgroundColor: activeThemeConfig.previewColor }}
        />
        <span className="hidden md:inline">{activeThemeConfig.name}</span>
        <Palette className="w-3.5 h-3.5 text-stone-500 md:hidden" />
        <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          id="theme-selector-menu"
          className="absolute right-0 mt-2 w-72 p-2 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-2 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
            <span className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Scientific Theme
            </span>
            <span className="text-[10px] text-stone-400 font-mono-code uppercase">5 Curated</span>
          </div>

          <div className="py-1 space-y-1">
            {availableThemes.map((theme) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  id={`theme-option-${theme.id}`}
                  onClick={() => {
                    onSelectTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-stone-100 dark:bg-stone-800/90 font-semibold'
                      : 'hover:bg-stone-50 dark:hover:bg-stone-800/40 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="w-4 h-4 rounded-full shrink-0 shadow-2xs border border-white/40 dark:border-black/40"
                      style={{ backgroundColor: theme.previewColor }}
                    />
                    <div className="truncate">
                      <div className="text-stone-900 dark:text-stone-100 font-medium group-hover:translate-x-0.5 transition-transform">
                        {theme.name}
                      </div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400 truncate">
                        {theme.tagline}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
