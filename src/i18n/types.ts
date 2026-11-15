export type Lang = 'de' | 'en';

export interface ProjectLink {
  kind: 'repo' | 'demo' | 'site';
  label: string;
  href: string;
}

/** Which inline SVG schematic a featured project shows. */
export type DiagramId = 'tud' | 'shop' | 'ajschool';

export interface Project {
  id: string;
  /** 1 = featured (wide card + diagram), 2 = compact card */
  tier: 1 | 2;
  title: string;
  subtitle?: string;
  period: string;
  context: string;
  scope: string;
  scopeTone: 'client' | 'study' | 'ongoing' | 'award';
  /** KONTEXT & ROLLE */
  role: string;
  /** ARCHITEKTUR & UMSETZUNG */
  build: string[];
  /** ERGEBNIS */
  outcome: string;
  metric?: { value: string; label: string };
  diagram?: DiagramId;
  stack: string[];
  links: ProjectLink[];
  note?: string;
  /** Full-width compact card (e.g. award strip) */
  wide?: boolean;
}

/** Small live-demo card (section C). */
export interface DemoProject {
  id: string;
  title: string;
  context: string;
  scope: string;
  text: string;
  stack: string[];
  links: ProjectLink[];
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
    techBar: { location: string; status: string; availability: string };
    name: string;
    role: string;
    degree: string;
    lead: string;
    photoAlt: string;
    photoCaption: string;
    indicators: { value: string; label: string; sub: string }[];
    availabilityTitle: string;
    availability: { label: string; value: string }[];
    ctaProjects: string;
    ctaCv: string;
    cvHref: string;
    cvFile: string;
  };
  copyEmail: { copy: string; copied: string; srCopied: string };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    tier1: string;
    tier2: string;
    tier3: string;
    tier3Intro: string;
    securityNote: string;
    demos: DemoProject[];
    labels: { role: string; build: string; outcome: string; stack: string; schema: string };
    items: Project[];
  };
  journey: {
    eyebrow: string;
    title: string;
    intro: string;
    eduTitle: string;
    workTitle: string;
    showDetails: string;
    hideDetails: string;
    education: TimelineItem[];
    experience: TimelineItem[];
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
    profilesLabel: string;
    cvLabel: string;
  };
  footer: { rights: string; built: string; privacy: string; top: string };
  privacy: {
    title: string;
    updated: string;
    back: string;
    sections: { heading: string; paragraphs: string[] }[];
  };
  notFound: { title: string; text: string; back: string };
}
