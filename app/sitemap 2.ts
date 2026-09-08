import type { MetadataRoute } from 'next';
import { ROUTES } from '@/content/nav';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://useclear.org';
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    ...ROUTES.map((r) => ({
      url: `${base}${r.href}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
