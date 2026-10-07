import { pt } from './pt';
import { en } from './en';
import { es } from './es';
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
  github: 'https://github.com/Andre0Luis',
  linkedin: 'https://www.linkedin.com/in/andreluisteixeira/',
  instagram: 'https://www.instagram.com/andre_lsta/',
  email: 'contato@andreluisteixeira.dev',
} as const;
