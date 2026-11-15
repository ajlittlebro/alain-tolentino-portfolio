export type Lang = 'de' | 'en';

export interface ProjectLink {
  kind: 'repo' | 'demo' | 'site';
  label: string;
  href: string;
}

/** Which inline SVG architecture diagram a case study shows. */
export type DiagramId = 'shop' | 'ajschool' | 'tud';

/** Section anchors – language specific, mapped 1:1 for the language switch. */
export type SectionKey = 'projects' | 'about' | 'journey' | 'stack' | 'contact';

export interface CaseStudy {
  id: string;
  index: string; // "CASE 01"
  title: string;
  period: string;
  place: string;
  badge: string;
  badgeTone: 'client' | 'study' | 'ongoing';
  role: string;
  architecture: string;
  outcome: string;
  metric?: { value: string; label: string };
  stack: string[];
  links: ProjectLink[];
  note?: string;
  specsTitle: string;
  specs: string[];
  diagram: DiagramId;
  diagramTitle: string;
  diagramDesc: string;
}

export interface ArchiveItem {
  id: string;
  index: string; // "A-01"
  title: string;
  period: string;
  place: string;
  summary: string;
  facts?: string[];
  stack: string[];
  links: ProjectLink[];
  /** Optional screenshot key in src/assets/demos */
  shot?: 'event' | 'boardgame' | 'sustainability';
  shotAlt?: string;
}

export interface TimelineItem {
  period: string;
  place: string;
  title: string;
  org: string;
  details: string[];
}

export interface Dict {
  meta: { title: string; description: string; ogLocale: string; ogAlt: string };
  sections: Record<SectionKey, string>;
  nav: {
    skip: string;
    labels: Record<SectionKey, string>;
    brandSub: string;
    openMenu: string;
    closeMenu: string;
    lang: string;
    themeToLight: string;
    themeToDark: string;
    home: string;
    primary: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    lead: string;
    ctaProjects: string;
    cvDe: string;
    cvEn: string;
    photoAlt: string;
    photoCaption: string;
    telemetryTitle: string;
    metrics: { value: string; label: string; sub: string }[];
  };
  copyEmail: { copy: string; copied: string; srCopied: string };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    tier1: string;
    tier2: string;
    labels: { role: string; architecture: string; outcome: string; stack: string; artifact: string };
    cases: CaseStudy[];
    privacyNote: string;
    archive: ArchiveItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    story: { label: string; paragraphs: string[] };
    bench: { label: string; term: string; modules: { code: string; name: string; focus: string }[] };
    comms: { label: string; paragraphs: string[]; interestsLabel: string; interests: string[] };
  };
  journey: {
    eyebrow: string;
    title: string;
    intro: string;
    eduTitle: string;
    workTitle: string;
    education: TimelineItem[];
    experience: TimelineItem[];
  };
  stack: {
    eyebrow: string;
    title: string;
    intro: string;
    blocks: { title: string; note: string; items: string[] }[];
    pillarsTitle: string;
    pillars: { title: string; text: string }[];
    languagesTitle: string;
    languages: { name: string; level: string; detail: string }[];
    certsTitle: string;
    certs: { name: string; date: string; issuer: string }[];
    awardsTitle: string;
    awards: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    emailLabel: string;
    send: string;
    cvTitle: string;
    cvNote: string;
    cvCards: { lang: string; title: string; href: string; file: string; open: string; download: string }[];
    profilesLabel: string;
  };
  footer: { rights: string; built: string; privacy: string; top: string; tagline: string };
  privacy: {
    title: string;
    updated: string;
    back: string;
    sections: { heading: string; paragraphs: string[] }[];
  };
  notFound: { title: string; text: string; back: string };
}
