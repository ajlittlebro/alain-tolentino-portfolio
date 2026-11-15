import { de } from './de';
import { en } from './en';
import type { Dict, Lang } from './types';

export type { DemoProject, DiagramId, Dict, Lang, Project, ProjectLink, TimelineItem } from './types';
export { PROFILE, REPOS, CV_ENABLED } from './shared';

const dicts: Record<Lang, Dict> = { de, en };

export const getDict = (lang: Lang): Dict => dicts[lang];

/** Equivalent routes between languages. */
export const ROUTES = {
  home: { de: '/', en: '/en/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
} as const;

export type RouteKey = keyof typeof ROUTES;
