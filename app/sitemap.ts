import type { MetadataRoute } from "next";
import { tools } from "../data/tools";
import { posts } from "../data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aipusula.com";

  const staticRoutes = [
    "",
    "/tr",
    "/tr/araclar",
    "/tr/blog",
    "/tr/hakkimizda",
    "/tr/iletisim",
    "/tr/gizlilik-politikasi",
    "/en",
    "/en/tools",
    "/en/blog",
    "/en/about",
    "/en/contact",
    "/en/privacy-policy",
  ];

  // Tool detail pages
  const toolRoutesTR = tools.map((t) => `/tr/araclar/${t.slug}`);
  const toolRoutesEN = tools.map((t) => `/en/tools/${t.slug}`);

  // Blog detail pages
  const blogRoutesTR = posts.map((p) => `/tr/blog/${p.slug}`);
  const blogRoutesEN = posts.map((p) => `/en/blog/${p.slug}`);

  const allRoutes = Array.from(
    new Set([
      ...staticRoutes,
      ...toolRoutesTR,
      ...toolRoutesEN,
      ...blogRoutesTR,
      ...blogRoutesEN,
    ])
  );

  const now = new Date();

  return allRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));
}
