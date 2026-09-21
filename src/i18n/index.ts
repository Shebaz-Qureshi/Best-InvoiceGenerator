import type { Translation } from './types';
import en from './en';
import es from './es';
import fr from './fr';
import de from './de';
import it from './it';
import nl from './nl';
import pt from './pt';
import ar from './ar';
import ja from './ja';

export interface LocaleMeta {
  code: string;
  label: string;
  dir: 'ltr' | 'rtl';
}

export const locales: LocaleMeta[] = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', dir: 'ltr' },
  { code: 'it', label: 'Italiano', dir: 'ltr' },
  { code: 'nl', label: 'Nederlands', dir: 'ltr' },
  { code: 'pt', label: 'Português (Brasil)', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'ja', label: '日本語', dir: 'ltr' },
];

export const ogLocales: Record<string, string> = {
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  it: 'it_IT',
  nl: 'nl_NL',
  pt: 'pt_BR',
  ar: 'ar_SA',
  ja: 'ja_JP',
};

export type LangCode = (typeof locales)[number]['code'];

const dictionaries: Record<string, Translation> = { en, es, fr, de, it, nl, pt, ar, ja };

export function getTranslation(locale: string): Translation {
  return dictionaries[locale] ?? en;
}

export function getDir(locale: string): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export const DEFAULT_LOCALE = 'en';

export function localePrefix(locale: string): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

export function localeHref(locale: string, pagePath = ''): string {
  if (locale === DEFAULT_LOCALE) {
    return pagePath ? `/${pagePath}` : '/';
  }
  return pagePath ? `/${locale}/${pagePath}` : `/${locale}`;
}

export function absoluteUrl(locale: string, pagePath = ''): string {
  return `https://best-invoicegenerator.com${localeHref(locale, pagePath)}`;
}

export { dictionaries };
