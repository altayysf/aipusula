import Navbar from "../../../components/Navbar";
import BlogCard from "../../../components/BlogCard";
import { getPostsSorted } from "../../../data/posts";

export const metadata = {
  title: "Blog | AI Pusula",
  description:
    "AI tools, lists, reviews, and practical tips. Fresh content on AI Pusula Blog.",
};

export default function BlogENPage() {
  const list = getPostsSorted();

  return (
    <>
      <Navbar lang="en" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Blog
            </h1>
            <p className="mt-3 text-gray-700 max-w-2xl">
              AI and tech trends, reviews, tips, and the best tool lists.
            </p>
          </header>

          <div className="grid gap-5">
            {list.map((post) => (
              <BlogCard key={post.slug} lang="en" post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
