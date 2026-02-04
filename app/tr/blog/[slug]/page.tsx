import Navbar from "../../../../components/Navbar";
import { posts } from "../../../../data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// Meta verileri burada yönetiliyor (Google Arama Özetleri İçin)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.titleTR} | AI Pusula Blog`,
    description: post.excerptTR, // Google arama sonucunda görünecek ana özet
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
    twitter: {
      card: "summary_large_image",
      title: post.titleTR,
      description: post.excerptTR,
      images: [post.cover],
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

  // JSON-LD Structured Data (Google Zengin Sonuçlar İçin)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titleTR,
    datePublished: post.dateISO,
    image: post.cover,
    description: post.excerptTR,
    author: { "@type": "Organization", name: "AI Pusula" },
    publisher: {
      "@type": "Organization",
      name: "AI Pusula",
      logo: {
        "@type": "ImageObject",
        url: "https://aipusula.com/logo.png" // Kendi logo URL'ni ekleyebilirsin
      }
    }
  };

  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10">
          {/* Breadcrumb - Navigasyon */}
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
            {/* Başlık Bölümü */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                {post.titleTR}
              </h1>

              <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-gray-700">
                <span className="rounded-full bg-gray-100 px-3 py-1 font-medium">
                  {new Date(post.dateISO + "T00:00:00").toLocaleDateString(
                    "tr-TR",
                    { day: "2-digit", month: "long", year: "numeric" }
                  )}
                </span>
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

            {/* Kapak Görseli */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-black/10 bg-gray-50 shadow-sm">
              <Image
                src={post.cover}
                alt={`${post.titleTR} - AI Pusula`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Özet (Meta Description ile aynı içerik, okuyucu için vurgulu) */}
            <div className="mt-8 p-4 bg-gray-50 border-l-4 border-black rounded-r-lg">
              <p className="text-lg text-gray-800 italic leading-relaxed">
                {post.excerptTR}
              </p>
            </div>

            {/* Ana İçerik */}
            <div className="mt-8 space-y-6 text-gray-800 leading-relaxed text-lg">
              {post.contentTR.map((paragraph, i) => {
                // Eğer paragraf 1., 2. vb. gibi bir madde ile başlıyorsa (Araç Başlıkları)
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
          </article>

          {/* Google Zengin Sonuçlar Scripti */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </div>
      </main>
    </>
  );
}