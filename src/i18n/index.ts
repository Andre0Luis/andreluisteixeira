import { pt } from './pt';
import { en } from './en';
import { es } from './es';
import { urls } from './urls';
import type { Dict, Locale } from './types';

export type { Dict, Locale };

export const locales: Locale[] = ['pt', 'en', 'es'];

export const localeNames: Record<Locale, { short: string; full: string }> = {
  pt: { short: 'PT', full: 'Português' },
  en: { short: 'EN', full: 'English' },
  es: { short: 'ES', full: 'Español' },
};

const dictionaries: Record<Locale, Dict> = { pt, en, es };

export function useTranslations(locale: Locale): Dict {
  return dictionaries[locale];
}

export const links = {
  github: urls.github,
  linkedin: urls.linkedin,
  instagram: urls.instagram,
  email: 'andre_luis.t@hotmail.com',
} as const;
