import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '',
    },
    host: 'https://alejandronavarini.com',
    sitemap: 'https://alejandronavarini.com/sitemap.xml',
  };
}
