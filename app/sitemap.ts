import type { MetadataRoute } from 'next';
import { languages, localizedPath, routes } from '@/lib/i18n';
import { siteMetadata } from '@/constants/metadata';
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(path => languages.map(language => ({
    url: `${siteMetadata.siteUrl}${localizedPath(path, language)}`,
    alternates: { languages: Object.fromEntries(languages.map(lang => [lang, `${siteMetadata.siteUrl}${localizedPath(path, lang)}`])) },
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  })));
}
