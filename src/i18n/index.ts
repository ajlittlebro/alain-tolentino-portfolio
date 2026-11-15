import { de } from './de';
import { en } from './en';
import type { Dict, Lang, SectionKey } from './types';

export type { ArchiveItem, CaseStudy, DiagramId, Dict, Lang, ProjectLink, SectionKey, TimelineItem } from './types';
export { PROFILE, REPOS, CV } from './shared';

const dicts: Record<Lang, Dict> = { de, en };

export const getDict = (lang: Lang): Dict => dicts[lang];

/** Equivalent routes between languages. */
export const ROUTES = {
  home: { de: '/', en: '/en/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
} as const;

export type RouteKey = keyof typeof ROUTES;

export const SECTION_ORDER: SectionKey[] = ['projects', 'about', 'journey', 'stack', 'contact'];
