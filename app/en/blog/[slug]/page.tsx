import Navbar from "../../../../components/Navbar";
import { posts } from "../../../../data/posts";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { generateBlogPostMetadata, generateBreadcrumbSchema } from "../../../../lib/metadata";
import {
  getBlogPostByLocalizedSlug,
  getBlogStaticParams,
  getLocalizedBlogSlug,
} from "../../../../lib/blog-slugs";

export async function generateStaticParams() {
  return getBlogStaticParams("en");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostByLocalizedSlug(slug, "en") ?? posts.find((p) => p.slug === slug);
  if (!post) return {};

  return generateBlogPostMetadata(post, "en");
}

export default async function BlogENDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostByLocalizedSlug(slug, "en") ?? posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const enSlug = getLocalizedBlogSlug(post, "en");
  if (slug !== enSlug) {
    redirect(`/en/blog/${enSlug}`);
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titleEN,
    description: post.excerptEN,
    image: post.cover.startsWith("http") ? post.cover : `https://www.aipusula.com${post.cover}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Organization",
      name: "AI Pusula",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Pusula",
      logo: {
        "@type": "ImageObject",
        url: "https://www.aipusula.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.aipusula.com/en/blog/${enSlug}`,
    },
    articleSection: post.categoryEN,
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
    { name: post.titleEN, url: `/en/blog/${enSlug}` },
  ]);

  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const prevPost = posts[currentIndex + 1];
  const nextPost = posts[currentIndex - 1];

  return (
    <>
      <Navbar lang="en" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/en" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/en/blog" className="hover:underline">
              Blog
            </Link>{" "}
            / <span className="font-medium text-gray-900">{post.titleEN}</span>
          </nav>

          <article>
            <header className="mb-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                {post.titleEN}
              </h1>

              <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-gray-700">
                <time dateTime={post.dateISO} className="rounded-full bg-gray-100 px-3 py-1 font-medium">
                  {new Date(post.dateISO + "T00:00:00").toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span className="rounded-full border border-black/10 bg-white px-3 py-1">
                  {post.categoryEN}
                </span>
              </div>
            </header>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-black/10 bg-gray-50 shadow-sm">
              <Image
                src={post.cover}
                alt={`${post.titleEN} - AI Pusula`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-8 rounded-r-lg border-l-4 border-black bg-gray-50 p-4">
              <p className="text-lg italic leading-relaxed text-gray-800">{post.excerptEN}</p>
            </div>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-800">
              {post.contentEN.map((paragraph, i) => {
                const isHeading = /^\d+\./.test(paragraph);

                return isHeading ? (
                  <h2 key={i} className="pt-4 text-2xl font-bold text-gray-900">
                    {paragraph}
                  </h2>
                ) : (
                  <p key={i}>{paragraph}</p>
                );
              })}
            </div>

            <nav className="mt-12 border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {prevPost ? (
                  <Link
                    href={`/en/blog/${getLocalizedBlogSlug(prevPost, "en")}`}
                    className="group rounded-xl border border-gray-200 p-4 transition hover:border-gray-300 hover:shadow-md"
                  >
                    <p className="mb-2 text-xs text-gray-500">&lt;- Previous Post</p>
                    <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 transition group-hover:text-blue-600">
                      {prevPost.titleEN}
                    </h3>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    href={`/en/blog/${getLocalizedBlogSlug(nextPost, "en")}`}
                    className="group rounded-xl border border-gray-200 p-4 text-right transition hover:border-gray-300 hover:shadow-md"
                  >
                    <p className="mb-2 text-xs text-gray-500">Next Post -&gt;</p>
                    <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 transition group-hover:text-blue-600">
                      {nextPost.titleEN}
                    </h3>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </nav>

            <div className="mt-8 text-center">
              <Link
                href="/en/blog"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to All Posts
              </Link>
            </div>
          </article>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        </div>
      </main>
    </>
  );
}
