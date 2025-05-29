import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pitker.fr';

  const routes = [
    '',
    '/what-we-do',
    '/practices',
    '/practices/ceo-search',
    '/practices/life-sciences',
    '/practices/industry',
    '/practices/private-equity',
    '/people',
    '/contact',
    '/mentions-legales'
  ];

  const sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return sitemap;
} 