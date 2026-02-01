import Navbar from "../../../../components/Navbar";
import { posts } from "../../../../data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.titleTR} | AI Pusula Blog`,
    description: post.excerptTR,
    alternates: {
      canonical: `/tr/blog/${post.slug}`,
      languages: {
        "en-US": `/en/blog/${post.slug}`,
        "tr-TR": `/tr/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.titleTR,
      description: post.excerptTR,
      images: [post.cover],
      type: "article",
    },
  };
}

export default async function BlogTRDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titleTR,
    datePublished: post.dateISO,
    image: post.cover,
    description: post.excerptTR,
    author: { "@type": "Organization", name: "AI Pusula" },
  };

  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="text-sm text-gray-600 mb-6">
            <Link href="/tr" className="hover:underline">
              Ana Sayfa
            </Link>{" "}
            /{" "}
            <Link href="/tr/blog" className="hover:underline">
              Blog
            </Link>{" "}
            / <span className="text-gray-900 font-medium">{post.titleTR}</span>
          </div>

          <article>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {post.titleTR}
            </h1>

            <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-gray-700">
              <span className="rounded-full bg-gray-100 px-3 py-1">
                {new Date(post.dateISO + "T00:00:00").toLocaleDateString(
                  "tr-TR",
                  { day: "2-digit", month: "long", year: "numeric" }
                )}
              </span>
              <span className="rounded-full bg-white border border-black/10 px-3 py-1">
                {post.categoryTR}
              </span>
              {post.readingMinutes ? (
                <span className="rounded-full bg-white border border-black/10 px-3 py-1">
                  {post.readingMinutes} dk
                </span>
              ) : null}
            </div>

            <div className="mt-6 relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-black/10 bg-gray-50">
              <Image
                src={post.cover}
                alt={post.titleTR}
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed">
              {post.excerptTR}
            </p>

            <div className="mt-6 space-y-4 text-gray-800 leading-relaxed">
              {post.contentTR.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </div>
      </main>
    </>
  );
}
