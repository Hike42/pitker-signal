import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pitker.fr';
  
  // Routes statiques
  const routes = [
    '',
    '/what-we-do',
    '/people',
    '/practices',
    '/contact',
    '/mentions-legales'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 