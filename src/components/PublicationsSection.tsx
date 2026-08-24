import React, { useState, useMemo } from 'react';
import { BookOpen, Search, Filter, FileText, Code, ExternalLink, Copy, Check, ChevronDown, ChevronUp, Download, Sparkles, Award, Dna } from 'lucide-react';
import { PublicationItem, PublicationType, ThemeId } from '../types';
import { getThemeClasses } from '../data/themesData';

interface PublicationsSectionProps {
  publications: PublicationItem[];
  onOpenBibtex: (pub: PublicationItem) => void;
  currentTheme?: ThemeId;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ publications, onOpenBibtex, currentTheme = 'emerald' }) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'year' | 'citations'>('year');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const themeClasses = getThemeClasses(currentTheme);

  const years = useMemo(() => {
    const set = new Set<number>(publications.map(p => p.year));
    return Array.from(set).sort((a: number, b: number) => b - a);
  }, [publications]);

  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      // Type filter
      if (selectedType !== 'all' && pub.type !== selectedType) {
        return false;
      }
      // Year filter
      if (selectedYear !== 'all' && pub.year.toString() !== selectedYear) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const inTitle = pub.title.toLowerCase().includes(q);
        const inVenue = pub.venue.toLowerCase().includes(q) || pub.venueShort.toLowerCase().includes(q);
        const inAuthors = pub.authors.some(a => a.toLowerCase().includes(q));
        const inKeywords = pub.keywords.some(k => k.toLowerCase().includes(q));
        const inAbstract = pub.abstract.toLowerCase().includes(q);
        return inTitle || inVenue || inAuthors || inKeywords || inAbstract;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'citations') {
        return b.citations - a.citations;
      }
      return b.year - a.year;
    });
  }, [publications, selectedType, selectedYear, searchQuery, sortBy]);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleQuickCopyBibtex = async (pub: PublicationItem, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopiedId(pub.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // fallback
    }
  };

  const handleExportAllBibtex = () => {
    const allBib = publications.map(p => p.bibtex).join('\n\n');
    const blob = new Blob([allBib], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Dr_Sanjay_Deshpande_Bioinformatics_Publications.bib`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const typeLabels: { id: string; label: string; count: number }[] = [
    { id: 'all', label: 'All Publications', count: publications.length },
    { id: 'journal', label: 'Journals (Nat Biotech / NAR / Bioinfo)', count: publications.filter(p => p.type === 'journal').length },
    { id: 'conference', label: 'Conferences (ISMB / RECOMB)', count: publications.filter(p => p.type === 'conference').length },
    { id: 'preprint', label: 'Preprints (bioRxiv)', count: publications.filter(p => p.type === 'preprint').length },
    { id: 'book_chapter', label: 'Monographs & Chapters', count: publications.filter(p => p.type === 'book_chapter').length },
  ];

  return (
    <section id="publications" className="py-16 lg:py-20 border-t border-stone-200/80 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${themeClasses.badge} text-xs font-semibold uppercase tracking-wider mb-2`}>
              <BookOpen className="w-3.5 h-3.5" />
              Peer-Reviewed Research
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 font-serif-academic">
              Recent Publications & Preprints
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-2 max-w-2xl">
              Published in high-impact computational biology venues, Oxford Bioinformatics, Nature Biotechnology, and Genome Research with open-source codebases.
            </p>
          </div>

          <button
            id="export-all-bibtex-btn"
            onClick={handleExportAllBibtex}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 shadow-sm transition-all shrink-0"
          >
            <Download className={`w-4 h-4 ${themeClasses.primaryText}`} />
            Export All (.bib)
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm mb-8 space-y-4">
          
          {/* Top Controls: Search and Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="publications-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, keyword, author, or venue..."
                className={`w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 ${themeClasses.ring}`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Year Selector */}
            <div className="sm:col-span-3">
              <select
                id="publication-year-filter"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className={`w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 ${themeClasses.ring}`}
              >
                <option value="all">All Years</option>
                {years.map(y => (
                  <option key={y} value={y.toString()}>{y}</option>
                ))}
              </select>
            </div>

            {/* Sort Selector */}
            <div className="sm:col-span-3">
              <select
                id="publication-sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'year' | 'citations')}
                className={`w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 ${themeClasses.ring}`}
              >
                <option value="year">Sort: Most Recent First</option>
                <option value="citations">Sort: Highest Citations First</option>
              </select>
            </div>
          </div>

          {/* Type Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100 dark:border-stone-800">
            {typeLabels.map((type) => (
              <button
                key={type.id}
                id={`filter-type-${type.id}`}
                onClick={() => setSelectedType(type.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedType === type.id
                    ? `${themeClasses.primaryBg} shadow-sm font-semibold`
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                {type.label} <span className="opacity-75">({type.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        {filteredPublications.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800">
            <BookOpen className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-stone-800 dark:text-stone-200">No publications matched your search criteria</h3>
            <p className="text-xs text-stone-500 mt-1">Try changing your search terms or resetting the filter category.</p>
            <button
              onClick={() => { setSelectedType('all'); setSelectedYear('all'); setSearchQuery(''); }}
              className={`mt-4 px-4 py-2 text-xs font-semibold ${themeClasses.primaryText} ${themeClasses.subtleBg} rounded-xl hover:opacity-90 transition-colors`}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPublications.map((pub) => {
              const isExpanded = !!expandedAbstracts[pub.id];
              const isCopied = copiedId === pub.id;

              return (
                <div 
                  key={pub.id}
                  id={`publication-card-${pub.id}`}
                  className={`p-5 sm:p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-sm ${themeClasses.cardHover} transition-all group`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    
                    {/* Left details */}
                    <div className="space-y-2 flex-1">
                      
                      {/* Badges row */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${themeClasses.badge}`}>
                          {pub.venueShort}
                        </span>

                        <span className="px-2.5 py-0.5 text-xs font-mono-code rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                          {pub.year}
                        </span>

                        {pub.award && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/20">
                            <Award className="w-3 h-3 text-red-500" />
                            {pub.award}
                          </span>
                        )}

                        <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${themeClasses.subtleBg} ${themeClasses.primaryText}`}>
                          ★ {pub.citations} citations
                        </span>
                      </div>

                      {/* Paper Title */}
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-academic leading-snug">
                        {pub.paperUrl ? (
                          <a 
                            href={pub.paperUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className={`${themeClasses.primaryHoverText} transition-colors inline-flex items-baseline gap-1`}
                          >
                            {pub.title}
                            <ExternalLink className="w-3.5 h-3.5 opacity-60 inline shrink-0" />
                          </a>
                        ) : (
                          pub.title
                        )}
                      </h3>

                      {/* Authors list with highlight */}
                      <div className="text-xs text-stone-600 dark:text-stone-400">
                        {pub.authors.map((author, aIdx) => {
                          const isSelf = author.toLowerCase().includes('sanjay deshpande') || author.toLowerCase().includes('deshpande');
                          return (
                            <React.Fragment key={aIdx}>
                              {isSelf ? (
                                <strong className={`text-stone-900 dark:text-stone-100 font-bold underline ${themeClasses.primaryText} decoration-2 underline-offset-2`}>
                                  {author}
                                </strong>
                              ) : (
                                <span>{author}</span>
                              )}
                              {aIdx < pub.authors.length - 1 ? ', ' : ''}
                            </React.Fragment>
                          );
                        })}
                      </div>

                      {/* Venue Full Name */}
                      <div className="text-xs text-stone-500 dark:text-stone-400 italic">
                        Published in: <strong className="text-stone-700 dark:text-stone-300 not-italic">{pub.venue}</strong>
                        {pub.doi && <span className="font-mono-code not-italic ml-2 text-[11px]">DOI: {pub.doi}</span>}
                      </div>

                      {/* Keywords Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {pub.keywords.map((kw, kIdx) => (
                          <span key={kIdx} className="px-2 py-0.5 text-[11px] rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                            #{kw}
                          </span>
                        ))}
                      </div>

                      {/* Collapsible Abstract */}
                      {isExpanded && (
                        <div className="mt-3 p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/80 text-xs text-stone-700 dark:text-stone-300 leading-relaxed animate-in fade-in duration-200">
                          <strong className="block text-stone-900 dark:text-stone-100 font-semibold mb-1">
                            Abstract:
                          </strong>
                          {pub.abstract}
                        </div>
                      )}
                    </div>

                    {/* Right actions */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100 dark:border-stone-800">
                      
                      <button
                        onClick={() => toggleAbstract(pub.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-xl transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-3.5 h-3.5" />
                            Hide Abstract
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3.5 h-3.5" />
                            Abstract
                          </>
                        )}
                      </button>

                      <button
                        id={`open-bibtex-btn-${pub.id}`}
                        onClick={() => onOpenBibtex(pub)}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium ${themeClasses.primaryText} ${themeClasses.subtleBg} hover:opacity-80 rounded-xl border ${themeClasses.subtleBorder} transition-colors`}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        BibTeX
                      </button>

                      <button
                        id={`quick-copy-bibtex-${pub.id}`}
                        onClick={(e) => handleQuickCopyBibtex(pub, e)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-xl transition-colors"
                        title="Copy BibTeX directly"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>

                      {pub.codeUrl && (
                        <a
                          href={pub.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-xl transition-colors"
                        >
                          <Code className="w-3.5 h-3.5" />
                          Code
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

