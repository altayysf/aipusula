import { MetadataRoute } from "next";
import { posts } from "../data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aipusula.com";

  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    // TR
    {
      url: `${baseUrl}/tr`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/tr/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tr/hakkimizda`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // EN
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const last = post.dateISO ? new Date(post.dateISO) : now;
    const priority = post.featured ? 0.9 : 0.8;

    return [
      // TR post
      {
        url: `${baseUrl}/tr/blog/${post.slug}`,
        lastModified: last,
        changeFrequency: "weekly",
        priority,
      },
      // EN post
      {
        url: `${baseUrl}/en/blog/${post.slug}`,
        lastModified: last,
        changeFrequency: "weekly",
        priority,
      },
    ];
  });

  return [...staticPages, ...blogPages];
}