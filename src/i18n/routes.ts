import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from './types';

export type PageId = 'home' | 'mountains' | 'coffee';

const slugs: Record<PageId, Record<Locale, string>> = {
  home: { pt: '', en: '', es: '' },
  mountains: { pt: 'montanhas', en: 'mountains', es: 'montanas' },
  coffee: { pt: 'cafe', en: 'coffee', es: 'cafe' },
};

/** URL de uma página no idioma pedido, com âncora opcional. */
export function pageUrl(locale: Locale, page: PageId, hash = ''): string {
  const base = getRelativeLocaleUrl(locale, slugs[page][locale]);
  return hash ? `${base}#${hash}` : base;
}
