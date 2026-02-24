import { Metadata } from "next";
import { getLocalizedBlogSlug } from "./blog-slugs";

// Blog Ana Sayfa Metadata
export const blogMetadata: Metadata = {
  title: "Yapay Zeka Blog | AI Araçları, Rehberler ve İncelemeler | AI Pusula",
  description: "Yapay zeka araçları, ChatGPT alternatifleri, DeepSeek, Suno, Gemini incelemeleri ve 2026 AI trendleri. Güncel rehberler ve pratik ipuçları.",
  keywords: ["yapay zeka", "AI araçları", "ChatGPT", "DeepSeek", "blog", "AI rehber", "yapay zeka incelemeleri"],
  
  alternates: {
    canonical: "https://www.aipusula.com/tr/blog",
    languages: {
      "tr": "https://www.aipusula.com/tr/blog",
      "en": "https://www.aipusula.com/en/blog",
    },
  },
  
  openGraph: {
    type: "website",
    url: "https://www.aipusula.com/tr/blog",
    title: "Yapay Zeka Blog | AI Pusula",
    description: "2026'nın en güncel yapay zeka araçları, rehberleri ve incelemeleri. ChatGPT, DeepSeek, Gemini ve daha fazlası.",
    siteName: "AI Pusula",
    locale: "tr_TR",
    images: [
      {
        url: "https://www.aipusula.com/og-image-blog.jpg",
        width: 1200,
        height: 630,
        alt: "AI Pusula Blog",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Yapay Zeka Blog | AI Pusula",
    description: "2026'nın en güncel yapay zeka araçları ve rehberleri",
    images: ["https://www.aipusula.com/twitter-card-blog.jpg"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Blog Post için dinamik metadata generator
export function generateBlogPostMetadata(post: {
  titleTR: string;
  titleEN: string;
  excerptTR: string;
  excerptEN: string;
  slug: string;
  cover: string;
  dateISO: string;
  categoryTR: string;
  categoryEN?: string;
  readingMinutes?: number;
}, lang: "tr" | "en" = "tr"): Metadata {
  const title = lang === "tr" ? post.titleTR : post.titleEN;
  const description = lang === "tr" ? post.excerptTR : post.excerptEN;
  const trSlug = post.slug;
  const enSlug = getLocalizedBlogSlug(post, "en");
  const url =
    lang === "tr"
      ? `https://www.aipusula.com/tr/blog/${trSlug}`
      : `https://www.aipusula.com/en/blog/${enSlug}`;
  const imageUrl = post.cover.startsWith("http") 
    ? post.cover 
    : `https://www.aipusula.com${post.cover}`;

  return {
    title: `${title} | AI Pusula`,
    description: description,
    
    alternates: {
      canonical: url,
      languages: {
        "tr": `https://www.aipusula.com/tr/blog/${trSlug}`,
        "en": `https://www.aipusula.com/en/blog/${enSlug}`,
      },
    },
    
    openGraph: {
      type: "article",
      url: url,
      title: title,
      description: description,
      siteName: "AI Pusula",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      publishedTime: post.dateISO,
      authors: ["AI Pusula"],
      section: lang === "tr" ? post.categoryTR : post.categoryEN ?? post.categoryTR,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [imageUrl],
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// JSON-LD Schema Generator
export function generateBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AI Pusula Blog",
    "description": "Yapay zeka araçları, rehberleri ve incelemeleri",
    "url": "https://www.aipusula.com/tr/blog",
    "inLanguage": "tr-TR",
    "publisher": {
      "@type": "Organization",
      "name": "AI Pusula",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aipusula.com/logo.png"
      }
    }
  };
}

export function generateArticleSchema(post: {
  titleTR: string;
  excerptTR: string;
  slug: string;
  cover: string;
  dateISO: string;
  categoryTR: string;
  readingMinutes?: number;
}) {
  const imageUrl = post.cover.startsWith("http") 
    ? post.cover 
    : `https://www.aipusula.com${post.cover}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.titleTR,
    "description": post.excerptTR,
    "image": imageUrl,
    "datePublished": post.dateISO,
    "dateModified": post.dateISO,
    "author": {
      "@type": "Organization",
      "name": "AI Pusula"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Pusula",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aipusula.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.aipusula.com/tr/blog/${post.slug}`
    },
    "articleSection": post.categoryTR,
    ...(post.readingMinutes && { "timeRequired": `PT${post.readingMinutes}M` })
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.aipusula.com${item.url}`
    }))
  };
}
