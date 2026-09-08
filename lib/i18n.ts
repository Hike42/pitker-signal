export const languages = ['fr', 'en'] as const;
export type Language = (typeof languages)[number];
export function isLanguage(value: string): value is Language {
  return value === 'fr' || value === 'en';
}
export function unlocalizedPath(path: string): string {
  return path.replace(/^\/(en|fr)(?=\/|$|\?|#)/, '') || '/';
}
export function localizedPath(path: string, language: Language): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const base = unlocalizedPath(path);
  return language === 'en' ? `/en${base === '/' ? '' : base}` : base;
}
export const routes = ['/', '/what-we-do', '/people', '/practices', '/practices/ceo-search', '/practices/life-sciences', '/practices/industry', '/practices/private-equity', '/contact', '/mentions-legales'] as const;
