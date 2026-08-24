import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, ExternalLink, Sparkles, GraduationCap, Briefcase, Award, BookOpen, Layers } from 'lucide-react';
import { ProfileData, ThemeId } from '../types';
import { getThemeClasses } from '../data/themesData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  currentTheme?: ThemeId;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile, currentTheme = 'emerald' }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'text'>('preview');
  const themeClasses = getThemeClasses(currentTheme);

  if (!isOpen) return null;


  const handlePrint = () => {
    window.print();
  };

  const generatePlainTextResume = () => {
    return `
===================================================================
${profile.name.toUpperCase()}, ${profile.honorific}
${profile.roleTitle}
${profile.currentAffiliation}
Email: ${profile.email} | Phone: ${profile.phone || 'N/A'}
Location: ${profile.location}
Scholar: ${profile.links.googleScholar}
GitHub: ${profile.links.github} | LinkedIn: ${profile.links.linkedin}
===================================================================

SUMMARY
${profile.bioSummary}

KEY METRICS & IMPACT
- Total Peer-Reviewed Publications: ${profile.statsOverview.totalPublications}
- Total Citations (Google Scholar): ${profile.scholarStats.totalCitations} (h-index: ${profile.scholarStats.hIndex}, i10-index: ${profile.scholarStats.i10Index})
- Granted Patents: ${profile.statsOverview.patentsGranted}
- Years of Research & Industry Experience: ${profile.statsOverview.yearsOfExperience}+

EDUCATION
${profile.education.map(e => `* ${e.degree}\n  ${e.institution}, ${e.location} (${e.year})\n  Thesis: ${e.thesisTitle || 'N/A'}\n  Advisor: ${e.advisor || 'N/A'}\n  Honors: ${e.honors || 'N/A'}`).join('\n\n')}

PROFESSIONAL EXPERIENCE
${profile.experience.map(exp => `* ${exp.role}\n  ${exp.organization} | ${exp.location} (${exp.period})\n  ${exp.description.map(d => `  - ${d}`).join('\n')}\n  Technologies: ${exp.technologies?.join(', ') || 'N/A'}`).join('\n\n')}

SELECTED NOTABLE PUBLICATIONS
${profile.publications.slice(0, 6).map(p => `* ${p.title} (${p.year})\n  Authors: ${p.authors.join(', ')}\n  Venue: ${p.venue} [Citations: ${p.citations}]\n  DOI: ${p.doi || 'N/A'}`).join('\n\n')}

CORE EXPERTISE & SKILLS
${profile.expertise.map(exp => `* ${exp.title}: ${exp.keyTopics.join(', ')} (Tools: ${exp.toolsAndFrameworks.join(', ')})`).join('\n')}

AWARDS & HONORS
${profile.awards.map(a => `* ${a.title} (${a.year}) - ${a.organization}\n  ${a.description}`).join('\n')}
    `.trim();
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generatePlainTextResume());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleDownloadTxt = () => {
    const text = generatePlainTextResume();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.name.replace(/[^a-zA-Z0-9]/g, '_')}_Curriculum_Vitae.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      id="resume-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-5xl my-4 sm:my-8 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="no-print flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                Curriculum Vitae / Professional Resume
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Academic & Industry Track • Print-Ready & Downloadable
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View switcher */}
            <div className="hidden sm:flex p-1 bg-stone-100 dark:bg-stone-800 rounded-xl text-xs font-medium mr-2">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                Formatted CV
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'text'
                    ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                Plain Text / Markdown
              </button>
            </div>

            <button
              id="copy-resume-text-btn"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-xl transition-colors"
              title="Copy plain text CV to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              id="download-resume-txt-btn"
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-xl transition-colors"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">.TXT</span>
            </button>

            <button
              id="print-resume-pdf-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-sm transition-colors"
              title="Print formatted document or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ml-1"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          {activeTab === 'text' ? (
            <div className="max-w-3xl mx-auto">
              <pre className="p-6 text-xs font-mono-code leading-relaxed bg-stone-950 text-amber-200 rounded-2xl overflow-x-auto border border-stone-800 shadow-inner select-all">
                {generatePlainTextResume()}
              </pre>
            </div>
          ) : (
            /* Print-Optimized Formatted CV Canvas */
            <div 
              id="printable-cv-document"
              className="max-w-4xl mx-auto bg-white text-stone-900 p-8 sm:p-12 rounded-2xl shadow-xl border border-stone-200/90 font-sans"
            >
              {/* Header */}
              <div className="border-b-2 border-stone-900 pb-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-stone-950 font-serif-academic">
                      {profile.name}, <span className="text-xl font-normal text-stone-700">{profile.honorific}</span>
                    </h1>
                    <p className="text-sm font-semibold text-amber-800 mt-0.5">
                      {profile.roleTitle}
                    </p>
                    <p className="text-xs text-stone-600">
                      {profile.currentAffiliation}
                    </p>
                  </div>
                  <div className="text-left sm:text-right text-xs text-stone-600 space-y-0.5 font-mono-code">
                    <div>{profile.email}</div>
                    <div>{profile.phone}</div>
                    <div>{profile.location}</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600 mt-4 pt-3 border-t border-stone-200">
                  <span><strong>Scholar:</strong> {profile.links.googleScholar}</span>
                  <span><strong>GitHub:</strong> {profile.links.github}</span>
                  <span><strong>ORCID:</strong> {profile.links.orcid}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6 print-break-inside-avoid">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2">
                  Executive Research Summary
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {profile.bioSummary}
                </p>
                {/* Quick stats row */}
                <div className="grid grid-cols-4 gap-2 mt-3 pt-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200 text-center text-xs">
                  <div>
                    <span className="block font-bold text-stone-900 text-sm">{profile.scholarStats.totalCitations}</span>
                    <span className="text-[10px] text-stone-500">Citations</span>
                  </div>
                  <div>
                    <span className="block font-bold text-stone-900 text-sm">h-index: {profile.scholarStats.hIndex}</span>
                    <span className="text-[10px] text-stone-500">i10-index: {profile.scholarStats.i10Index}</span>
                  </div>
                  <div>
                    <span className="block font-bold text-stone-900 text-sm">{profile.statsOverview.totalPublications}</span>
                    <span className="text-[10px] text-stone-500">Publications</span>
                  </div>
                  <div>
                    <span className="block font-bold text-stone-900 text-sm">{profile.statsOverview.patentsGranted}</span>
                    <span className="text-[10px] text-stone-500">Patents</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-6 print-break-inside-avoid">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
                  Education & Academic Qualifications
                </h3>
                <div className="space-y-3">
                  {profile.education.map(e => (
                    <div key={e.id} className="text-xs">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-stone-900">{e.degree}</span>
                        <span className="text-stone-600 font-mono-code text-[11px]">{e.year}</span>
                      </div>
                      <div className="text-stone-700 italic">{e.institution}, {e.location}</div>
                      {e.thesisTitle && (
                        <div className="text-stone-600 text-[11px] mt-0.5">
                          <strong>Dissertation:</strong> {e.thesisTitle} {e.advisor && `(Advisor: ${e.advisor})`}
                        </div>
                      )}
                      {e.honors && (
                        <div className="text-amber-800 text-[11px] font-medium">
                          <strong>Honors:</strong> {e.honors}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6 print-break-inside-avoid">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
                  Professional & Research Experience
                </h3>
                <div className="space-y-4">
                  {profile.experience.map(exp => (
                    <div key={exp.id} className="text-xs">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-stone-900">{exp.role}</span>
                        <span className="text-stone-600 font-mono-code text-[11px]">{exp.period}</span>
                      </div>
                      <div className="text-stone-700 italic font-medium">{exp.organization} — {exp.location}</div>
                      <ul className="list-disc list-inside text-stone-600 text-[11px] mt-1.5 space-y-0.5">
                        {exp.description.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                      {exp.technologies && (
                        <div className="text-[10px] text-stone-500 mt-1">
                          <strong>Key Stack:</strong> {exp.technologies.join(', ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Publications */}
              <div className="mb-6 print-break-inside-avoid">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
                  Selected Key Publications (Google Scholar Indexed)
                </h3>
                <div className="space-y-2.5">
                  {profile.publications.slice(0, 5).map(p => (
                    <div key={p.id} className="text-xs">
                      <div className="font-bold text-stone-900 font-serif-academic text-sm">
                        "{p.title}"
                      </div>
                      <div className="text-stone-700 text-[11px]">
                        {p.authors.join(', ')}
                      </div>
                      <div className="text-stone-600 text-[11px] flex items-center gap-2">
                        <span className="font-semibold text-amber-900">{p.venue}</span>
                        <span>({p.year})</span>
                        {p.doi && <span className="font-mono-code text-[10px]">DOI: {p.doi}</span>}
                        <span className="bg-stone-100 px-1.5 rounded text-[10px] text-stone-700 font-medium">
                          {p.citations} citations
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Competencies */}
              <div className="mb-6 print-break-inside-avoid">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2">
                  Technical Expertise & Domain Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {profile.expertise.map(exp => (
                    <div key={exp.id} className="p-2 bg-stone-50 rounded border border-stone-200 text-[11px]">
                      <div className="font-bold text-stone-900">{exp.title}</div>
                      <div className="text-stone-600 mt-0.5">{exp.keyTopics.join(' • ')}</div>
                      <div className="text-stone-500 font-mono-code text-[10px] mt-0.5">Tools: {exp.toolsAndFrameworks.join(', ')}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Honors & Awards */}
              <div className="print-break-inside-avoid">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2">
                  Honors, Fellowships & Recognition
                </h3>
                <div className="space-y-1.5 text-xs">
                  {profile.awards.map(a => (
                    <div key={a.id} className="flex justify-between items-baseline text-[11px]">
                      <div>
                        <span className="font-bold text-stone-900">{a.title}</span> — <span className="text-stone-600">{a.organization}</span>
                      </div>
                      <span className="text-stone-500 font-mono-code">{a.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
