import type { MetadataRoute } from "next";
import { tools } from "../data/tools";

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

  const toolRoutesTR = tools.map((t) => `/tr/araclar/${t.slug}`);
  const toolRoutesTR = tools.map((t) => `/tr/blog/${t.slug}`);
  const toolRoutesEN = tools.map((t) => `/en/tools/${t.slug}`);
  const toolRoutesEN = tools.map((t) => `/en/blog/${t.slug}`);

  const allRoutes = [...staticRoutes, ...toolRoutesTR, ...toolRoutesEN];

  return allRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
