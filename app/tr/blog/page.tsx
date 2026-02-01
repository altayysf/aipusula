import Navbar from "../../../components/Navbar";
import BlogCard from "../../../components/BlogCard";
import { getPostsSorted } from "../../../data/posts";
// import Adsense from "../../../components/Adsense";

export const metadata = {
  title: "Blog | AI Pusula",
  description:
    "Yapay zekâ araçları, listeler, incelemeler ve pratik ipuçları. Güncel içerikler AI Pusula Blog’da.",
};

export default function BlogTRPage() {
  const list = getPostsSorted();

  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Blog
            </h1>
            <p className="mt-3 text-gray-700 max-w-2xl">
              Yapay zekâ ve teknoloji trendleri, incelemeler, ipuçları ve en iyi
              araç listeleri.
            </p>
          </header>

          <div className="grid gap-5">
            {list.map((post) => (
              <BlogCard key={post.slug} lang="tr" post={post} />
            ))}
          </div>

          {/* Adsense örnek slot (istersen sonra açarız)
          <Adsense
            client="ca-pub-XXXXXXXXXXXX"
            slot="1234567890"
            className="mt-10"
          />
          */}
        </div>
      </main>
    </>
  );
}
