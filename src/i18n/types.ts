export type Lang = 'de' | 'en';

export interface ProjectLink {
  kind: 'repo' | 'demo';
  label: string;
  href: string;
}

export interface SubProject {
  title: string;
  text: string;
  links?: ProjectLink[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  period: string;
  context: string;
  scope: string;
  scopeTone: 'client' | 'study' | 'ongoing';
  summary: string;
  bullets?: string[];
  subprojects?: SubProject[];
  caseStudy?: { label: string; text: string }[];
  metric?: { value: string; label: string };
  stack: string[];
  links: ProjectLink[];
  note?: string;
}

export interface TimelineItem {
  kind: 'edu' | 'work';
  period: string;
  place: string;
  title: string;
  org: string;
  details: string[];
}

export interface Dict {
  meta: { title: string; description: string; ogLocale: string };
  nav: {
    skip: string;
    projects: string;
    journey: string;
    skills: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    lang: string;
    themeToLight: string;
    themeToDark: string;
    home: string;
  };
  hero: {
    status: string;
    name: string;
    role: string;
    degree: string;
    lead: string;
    photoAlt: string;
    facts: { value: string; label: string }[];
    availabilityTitle: string;
    availability: { label: string; value: string }[];
    ctaProjects: string;
    ctaCv: string;
    cvHref: string;
    cvFile: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    stackLabel: string;
    resultLabel: string;
    items: Project[];
  };
  journey: {
    eyebrow: string;
    title: string;
    intro: string;
    filterLabel: string;
    filters: { all: string; edu: string; work: string };
    kindLabel: { edu: string; work: string };
    showDetails: string;
    hideDetails: string;
    items: TimelineItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    focus: { title: string; note: string; items: string[] };
    groups: { title: string; items: string[] }[];
    languagesTitle: string;
    languages: { name: string; level: string; detail: string; value: number }[];
    certsTitle: string;
    certs: { name: string; date: string; issuer: string; detail: string }[];
    awardsTitle: string;
    awards: string[];
    workStyleTitle: string;
    workStyle: { title: string; text: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    emailLabel: string;
    copy: string;
    copied: string;
    profilesLabel: string;
    cvLabel: string;
  };
  privacy: {
    title: string;
    updated: string;
    back: string;
    sections: { heading: string; paragraphs: string[] }[];
  };
  footer: { rights: string; built: string; privacy: string; top: string };
  notFound: { title: string; text: string; back: string };
}
