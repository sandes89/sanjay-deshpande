export type ThemeId = 'emerald' | 'cyan' | 'sapphire' | 'amber' | 'amethyst';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  previewColor: string;
  accentColor: string;
  badgeBg: string;
  activeRing: string;
}

export interface ScholarMetricYear {
  year: number;
  citations: number;
}

export interface ScholarStats {
  profileUrl: string;
  scholarId: string;
  totalCitations: number;
  citationsRecent5Years: number;
  hIndex: number;
  hIndexRecent5Years: number;
  i10Index: number;
  i10IndexRecent5Years: number;
  verifiedEmailDomain: string;
  researchInterests: string[];
  citationsHistory: ScholarMetricYear[];
}

export type PublicationType = 'journal' | 'conference' | 'preprint' | 'book_chapter' | 'patent';

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  highlightAuthor: string;
  venue: string;
  venueShort: string;
  year: number;
  type: PublicationType;
  doi?: string;
  citations: number;
  paperUrl?: string;
  codeUrl?: string;
  datasetUrl?: string;
  slidesUrl?: string;
  bibtex: string;
  abstract: string;
  keywords: string[];
  featured?: boolean;
  award?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Single-Cell & Spatial' | 'Genomics & NGS' | 'Structural Biology & AI' | 'Pipelines & Tools';
  description: string;
  fullDetails: string;
  problemSolved: string;
  keyMetrics: { label: string; value: string }[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  paperDoi?: string;
  paperTitle?: string;
  stars?: number;
  featured?: boolean;
  status: 'Production' | 'Active Research' | 'Open Source' | 'Archived';
}

export interface ExpertiseDomain {
  id: string;
  title: string;
  iconName: string;
  description: string;
  keyTopics: string[];
  toolsAndFrameworks: string[];
  levelPercentage: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  department?: string;
  location: string;
  period: string;
  type: 'Industry' | 'Academia' | 'Research Institute';
  current?: boolean;
  description: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  thesisTitle?: string;
  advisor?: string;
  honors?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
}

export interface ProfileData {
  name: string;
  honorific: string;
  roleTitle: string;
  currentAffiliation: string;
  secondaryAffiliation?: string;
  location: string;
  email: string;
  phone?: string;
  bioSummary: string;
  fullBioParagraphs: string[];
  avatarUrl: string;
  links: {
    googleScholar: string;
    github: string;
    linkedin: string;
    orcid?: string;
    twitter?: string;
    researchGate?: string;
    emailMailto: string;
  };
  statsOverview: {
    yearsOfExperience: number;
    totalPublications: number;
    totalCitations: number;
    patentsGranted: number;
    fundedGrantsMillionUSD: number;
  };
  expertise: ExpertiseDomain[];
  education: EducationItem[];
  experience: ExperienceItem[];
  publications: PublicationItem[];
  scholarStats: ScholarStats;
  projects: ProjectItem[];
  awards: AwardItem[];
}
