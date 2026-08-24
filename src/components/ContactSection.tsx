import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, ExternalLink, MessageSquare, Sparkles, CheckCircle2, Phone, Calendar, Dna } from 'lucide-react';
import { ProfileData, ThemeId } from '../types';
import { getThemeClasses } from '../data/themesData';

interface ContactSectionProps {
  profile: ProfileData;
  currentTheme?: ThemeId;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, currentTheme = 'emerald' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const themeClasses = getThemeClasses(currentTheme);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Research Collaboration',
    message: '',
    inquiryType: 'Research Collaboration'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const inquiryTypes = [
    'Research Collaboration',
    'Keynote / Invited Talk',
    'Consulting / Advisory',
    'Paper / Dataset Access',
    'General Inquiry'
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 border-t border-stone-200/80 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${themeClasses.badge} text-xs font-semibold uppercase tracking-wider mb-2`}>
            <Mail className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 font-serif-academic">
            Academic Collaborations & Inquiries
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-2 max-w-2xl">
            Interested in collaborating on scalable bioinformatics, spatial genomics research, invited talks, or technical advisory? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-academic">
                Direct Contact Coordinates
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                    Primary Academic & Work Email
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 truncate font-mono-code mt-0.5">
                    {profile.email}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    id="copy-contact-email-btn"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={profile.links.emailMailto}
                    id="mailto-contact-email-btn"
                    className={`p-2 rounded-xl ${themeClasses.primaryText} ${themeClasses.subtleBg} hover:opacity-80 transition-colors`}
                    title="Send Email"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-1">
                <div className={`text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5`}>
                  <MapPin className={`w-3.5 h-3.5 ${themeClasses.primaryText}`} />
                  Location & Timezone
                </div>
                <div className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
                  {profile.location}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400">
                  Pacific Standard Time (PST / UTC-8) • Available for international virtual meetings
                </div>
              </div>

              {/* Institutional Affiliation */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                  Primary Research Institution
                </div>
                <div className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
                  {profile.currentAffiliation}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400">
                  {profile.secondaryAffiliation}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Collaboration Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-academic mb-2 flex items-center gap-2">
                <MessageSquare className={`w-4 h-4 ${themeClasses.primaryText}`} />
                Send a Message / Proposal
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
                Fill out the message dispatch form below to start a conversation.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    Message Prepared Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name || 'colleague'}</strong>. Your inquiry regarding <em>"{formData.inquiryType}"</em> has been formatted. Dr. Deshpande typically responds to academic inquiries within 24–48 hours.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(`[${formData.inquiryType}] from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Open in Mail Client
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="ml-3 px-4 py-2 text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Inquiry Type Chips */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                      Inquiry Category
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {inquiryTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, inquiryType: type })}
                          className={`px-3 py-1 text-xs rounded-xl transition-all ${
                            formData.inquiryType === type
                              ? `${themeClasses.primaryBg} shadow-2xs font-semibold`
                              : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Jennifer Doudna"
                        className={`w-full px-3.5 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 ${themeClasses.ring}`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. researcher@broadinstitute.org"
                        className={`w-full px-3.5 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 ${themeClasses.ring}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                      Message & Proposal Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your proposed spatial transcriptomics collaboration, pipeline consultation, or invited keynote..."
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 ${themeClasses.ring}`}
                    />
                  </div>

                  <div className="flex items-center justify-end pt-2">
                    <button
                      type="submit"
                      id="submit-contact-form-btn"
                      className={`inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold ${themeClasses.primaryBg} rounded-xl shadow-md transition-all`}
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

