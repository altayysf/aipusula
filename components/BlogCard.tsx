import Image from "next/image";
import Link from "next/link";
import type { BlogPost, BlogLang } from "../data/posts";

function formatDate(lang: BlogLang, iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function themeBySlug(slug: string) {
  const themes = [
    { border: "border-violet-500/55", ring: "hover:shadow-violet-200/60" },
    { border: "border-emerald-500/55", ring: "hover:shadow-emerald-200/60" },
    { border: "border-sky-500/55", ring: "hover:shadow-sky-200/60" },
    { border: "border-rose-500/55", ring: "hover:shadow-rose-200/60" },
  ];
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return themes[h % themes.length];
}

export default function BlogCard({
  lang,
  post,
}: {
  lang: BlogLang;
  post: BlogPost;
}) {
  const theme = themeBySlug(post.slug);

  const title = lang === "tr" ? post.titleTR : post.titleEN;
  const excerpt = lang === "tr" ? post.excerptTR : post.excerptEN;
  const category = lang === "tr" ? post.categoryTR : post.categoryEN;
  const href = lang === "tr" ? `/tr/blog/${post.slug}` : `/en/blog/${post.slug}`;

  return (
    <Link
      href={href}
      className={[
        "group block rounded-[28px] border bg-white",
        "transition-transform duration-200 hover:-translate-y-[1px]",
        "shadow-sm hover:shadow-lg",
        theme.border,
        theme.ring,
      ].join(" ")}
    >
      <div className="p-6 flex flex-col md:flex-row md:items-center gap-5">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-[12px]">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
              {formatDate(lang, post.dateISO)}
            </span>
            <span className="rounded-full bg-white border border-black/10 px-3 py-1 text-gray-700">
              {category}
            </span>
            {post.readingMinutes ? (
              <span className="rounded-full bg-white border border-black/10 px-3 py-1 text-gray-700">
                {lang === "tr"
                  ? `${post.readingMinutes} dk`
                  : `${post.readingMinutes} min`}
              </span>
            ) : null}
          </div>

          <h3 className="mt-3 text-[24px] md:text-[28px] font-extrabold text-gray-900 leading-tight">
            {title}
          </h3>

          <p className="mt-2 text-[14px] md:text-[15px] text-gray-700 leading-relaxed line-clamp-2">
            {excerpt}
          </p>

          <div className="mt-4 text-[13px] font-semibold text-gray-900/70 group-hover:text-gray-900 transition">
            {lang === "tr" ? "Oku →" : "Read →"}
          </div>
        </div>

        <div className="w-full md:w-[280px] shrink-0">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 bg-gray-50">
            <Image
              src={post.cover}
              alt={title}
              fill
              className="object-cover group-hover:scale-[1.02] transition"
              sizes="(max-width: 768px) 100vw, 280px"
              priority={post.featured === true}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
