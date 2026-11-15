/**
 * Career status shown in the CareerStatusBanner.
 * Edit this single object when availability changes – no component changes needed.
 */
import type { Lang } from '../i18n/types';

export interface CareerStatus {
  available: boolean;
  label: string;
  items: string[];
}

export const CAREER_STATUS: Record<Lang, CareerStatus> = {
  de: {
    available: true,
    label: 'Verfügbarkeit',
    items: [
      '5–6 Monate ab Ende März bis Juli/August 2027',
      'Pflichtpraktikum in Vollzeit (40 Std./Woche)',
      'Gültiges Studienvisum & Arbeitserlaubnis (DAAD-KOSPIE)',
    ],
  },
  en: {
    available: true,
    label: 'Availability',
    items: [
      '5–6 months from late March to July/August 2027',
      'Full-time mandatory internship (40 hrs/week)',
      'Valid German student visa & work permit (DAAD-KOSPIE)',
    ],
  },
};
