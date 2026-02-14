import Navbar from "../../../../components/Navbar";
import { posts } from "../../../../data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  generateBlogPostMetadata, 
  generateArticleSchema, 
  generateBreadcrumbSchema 
} from "../../../../lib/metadata";

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
  
  return generateBlogPostMetadata(post, "tr");
}

export default async function BlogTRDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  // JSON-LD Schemas
  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/tr" },
    { name: "Blog", url: "/tr/blog" },
    { name: post.titleTR, url: `/tr/blog/${post.slug}` }
  ]);

  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <Link href="/tr" className="hover:underline">
              Ana Sayfa
            </Link>{" "}
            /{" "}
            <Link href="/tr/blog" className="hover:underline">
              Blog
            </Link>{" "}
            / <span className="text-gray-900 font-medium">{post.titleTR}</span>
          </nav>

          <article>
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                {post.titleTR}
              </h1>

              <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-gray-700">
                <time 
                  dateTime={post.dateISO}
                  className="rounded-full bg-gray-100 px-3 py-1 font-medium"
                >
                  {new Date(post.dateISO + "T00:00:00").toLocaleDateString(
                    "tr-TR",
                    { day: "2-digit", month: "long", year: "numeric" }
                  )}
                </time>
                <span className="rounded-full bg-white border border-black/10 px-3 py-1">
                  {post.categoryTR}
                </span>
                {post.readingMinutes && (
                  <span className="rounded-full bg-white border border-black/10 px-3 py-1">
                    {post.readingMinutes} dk okuma
                  </span>
                )}
              </div>
            </header>

            {/* Cover Image */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-black/10 bg-gray-50 shadow-sm">
              <Image
                src={post.cover}
                alt={`${post.titleTR} - AI Pusula`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Excerpt */}
            <div className="mt-8 p-4 bg-gray-50 border-l-4 border-black rounded-r-lg">
              <p className="text-lg text-gray-800 italic leading-relaxed">
                {post.excerptTR}
              </p>
            </div>

            {/* Content */}
            <div className="mt-8 space-y-6 text-gray-800 leading-relaxed text-lg">
              {post.contentTR.map((paragraph, i) => {
                const isHeading = /^\d+\./.test(paragraph);
                
                return isHeading ? (
                  <h2 key={i} className="text-2xl font-bold text-gray-900 pt-4">
                    {paragraph}
                  </h2>
                ) : (
                  <p key={i}>{paragraph}</p>
                );
              })}
            </div>

            {/* Navigation - Önceki/Sonraki Yazılar */}
            <nav className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Önceki Yazı */}
                {(() => {
                  const currentIndex = posts.findIndex(p => p.slug === slug);
                  const prevPost = posts[currentIndex + 1];
                  
                  return prevPost ? (
                    <Link 
                      href={`/tr/blog/${prevPost.slug}`}
                      className="group p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition"
                    >
                      <p className="text-xs text-gray-500 mb-2">← Önceki Yazı</p>
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition line-clamp-2">
                        {prevPost.titleTR}
                      </h3>
                    </Link>
                  ) : <div />;
                })()}

                {/* Sonraki Yazı */}
                {(() => {
                  const currentIndex = posts.findIndex(p => p.slug === slug);
                  const nextPost = posts[currentIndex - 1];
                  
                  return nextPost ? (
                    <Link 
                      href={`/tr/blog/${nextPost.slug}`}
                      className="group p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition text-right"
                    >
                      <p className="text-xs text-gray-500 mb-2">Sonraki Yazı →</p>
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition line-clamp-2">
                        {nextPost.titleTR}
                      </h3>
                    </Link>
                  ) : <div />;
                })()}
              </div>
            </nav>

            {/* CTA - Blog'a Dön */}
            <div className="mt-8 text-center">
              <Link 
                href="/tr/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Tüm Yazılara Dön
              </Link>
            </div>
          </article>

          {/* JSON-LD Schemas */}
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
