import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/kitchen-sink' },
    sitemap: 'https://useclear.org/sitemap.xml',
  };
}
