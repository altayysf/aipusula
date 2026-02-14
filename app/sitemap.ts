import type { MetadataRoute } from "next";
import { tools } from "../data/tools";
import { posts } from "../data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aipusula.com";
  const now = new Date();

  // Static pages (TR + EN)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/tr`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/tr/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/tr/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/tr/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/tr/gizlilik-politikasi`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    { url: `${baseUrl}/en`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/en/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/en/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/en/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/en/privacy-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Tool pages (TR + EN)
  const toolRoutes: MetadataRoute.Sitemap = tools.flatMap((t) => [
    { url: `${baseUrl}/tr/${t.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/en/${t.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ]);

  // Blog posts (TR + EN) - dateISO varsa onu kullan
  const blogRoutes: MetadataRoute.Sitemap = posts.flatMap((p) => {
    const last = p.dateISO ? new Date(p.dateISO) : now;
    const pr = p.featured ? 0.9 : 0.8;

    return [
      { url: `${baseUrl}/tr/blog/${p.slug}`, lastModified: last, changeFrequency: "weekly", priority: pr },
      { url: `${baseUrl}/en/blog/${p.slug}`, lastModified: last, changeFrequency: "weekly", priority: pr },
    ];
  });

  // Blog pagination (auto)
  const PAGE_SIZE = 12;
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));

  const blogPagination: MetadataRoute.Sitemap = Array.from({ length: totalPages }, (_, i) => i + 1).flatMap(
    (page) => [
      { url: `${baseUrl}/tr/blog/page/${page}`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
      { url: `${baseUrl}/en/blog/page/${page}`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    ]
  );

  return [...staticRoutes, ...toolRoutes, ...blogRoutes, ...blogPagination];
}