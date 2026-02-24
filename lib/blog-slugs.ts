import { posts, type BlogLang, type BlogPost } from "../data/posts";

function slugifyEnglish(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/['\u2019]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

type SlugSource = Pick<BlogPost, "slug" | "titleEN">;

const enSlugToPost = new Map<string, BlogPost>();
const trSlugToEnSlug = new Map<string, string>();

for (const post of posts) {
  const baseSlug = slugifyEnglish(post.titleEN) || post.slug;
  let uniqueSlug = baseSlug;
  let suffix = 2;

  while (enSlugToPost.has(uniqueSlug) && enSlugToPost.get(uniqueSlug)?.slug !== post.slug) {
    uniqueSlug = `${baseSlug}-${suffix++}`;
  }

  enSlugToPost.set(uniqueSlug, post);
  trSlugToEnSlug.set(post.slug, uniqueSlug);
}

export function getLocalizedBlogSlug(post: SlugSource, lang: BlogLang): string {
  if (lang === "tr") return post.slug;
  return trSlugToEnSlug.get(post.slug) ?? (slugifyEnglish(post.titleEN) || post.slug);
}

export function getBlogPostByLocalizedSlug(slug: string, lang: BlogLang): BlogPost | undefined {
  if (lang === "tr") return posts.find((post) => post.slug === slug);
  return enSlugToPost.get(slug);
}

export function getBlogStaticParams(lang: BlogLang): Array<{ slug: string }> {
  if (lang === "tr") {
    return posts.map((post) => ({ slug: post.slug }));
  }

  return posts.map((post) => ({
    slug: getLocalizedBlogSlug(post, "en"),
  }));
}
