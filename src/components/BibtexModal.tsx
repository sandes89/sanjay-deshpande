import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode } from 'lucide-react';
import { PublicationItem } from '../types';

interface BibtexModalProps {
  publication: PublicationItem | null;
  onClose: () => void;
}

export const BibtexModal: React.FC<BibtexModalProps> = ({ publication, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!publication) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(publication.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleDownload = () => {
    const blob = new Blob([publication.bibtex], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${publication.id}.bib`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      id="bibtex-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="bibtex-modal-content" 
        className="relative w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                BibTeX Citation
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {publication.venueShort} • {publication.year}
              </p>
            </div>
          </div>
          <button
            id="close-bibtex-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm font-medium text-stone-800 dark:text-stone-200 line-clamp-2 mb-4">
          {publication.title}
        </p>

        <div className="relative mb-6">
          <pre className="p-4 text-xs font-mono-code leading-relaxed bg-stone-950 text-amber-200 rounded-xl overflow-x-auto border border-stone-800 max-h-72 select-all">
            {publication.bibtex}
          </pre>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-stone-100 dark:border-stone-800">
          <button
            id="download-bibtex-file-btn"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-xl transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download .bib
          </button>
          <button
            id="copy-bibtex-btn"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-sm transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                Copied to Clipboard!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy Citation
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
