import { MetadataRoute } from 'next';
import { posts } from '../data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aipusula.com';
  const currentDate = new Date().toISOString();

  // Ana sayfalar
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/tr`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/tr/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/tr/hakkimizda`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr/hakkimizda`,
          en: `${baseUrl}/en/about`,
        },
      },
    },
  ];

  // Blog yazıları
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/tr/blog/${post.slug}`,
    lastModified: post.dateISO,
    changeFrequency: 'weekly' as const,
    priority: post.featured ? 0.9 : 0.8,
    alternates: {
      languages: {
        tr: `${baseUrl}/tr/blog/${post.slug}`,
        en: `${baseUrl}/en/blog/${post.slug}`,
      },
    },
  }));

  return [...staticPages, ...blogPages];
}
