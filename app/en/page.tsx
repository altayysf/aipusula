import Navbar from "../../components/Navbar";
import ToolCard from "../../components/ToolCard";
import { tools } from "../../data/tools";

function getDailyFive(all: typeof tools) {
  const today = new Date().toISOString().slice(0, 10);
  let seed = 0;
  for (let i = 0; i < today.length; i++) seed += today.charCodeAt(i);

  const shuffled = [...all].sort((a, b) => {
    const aHash =
      a.slug.split("").reduce((s, c) => s + c.charCodeAt(0), seed) % 1000;
    const bHash =
      b.slug.split("").reduce((s, c) => s + c.charCodeAt(0), seed) % 1000;
    return aHash - bHash;
  });

  return shuffled.slice(0, 5);
}

export default function PageEN() {
  const dailyFive = getDailyFive(tools);

  return (
    <>
      <Navbar lang="en" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <section className="rounded-[28px] border border-black/10 bg-white shadow-sm px-8 py-6">
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                  AI Pusula <span className="ml-2">🧭</span>
                </h1>

                <p className="mt-3 text-gray-700">
                  Discover, compare, and choose the best AI tools for your needs.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/en/tools"
                    className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition"
                  >
                    View other tools →
                  </a>
                  <a
                    href="/tr"
                    className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition"
                  >
                    Turkish version
                  </a>
                </div>
              </div>

              <div className="hidden md:flex gap-3 shrink-0">
                <a
                  href="/en/tools"
                  className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition"
                >
                  Other tools →
                </a>
                <a
                  href="/tr"
                  className="rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition"
                >
                  TR
                </a>
              </div>
            </div>
          </section>

          <section className="mt-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Editor’s Pick: Today’s 5 Tools
                </h2>
                <p className="mt-2 text-gray-600 text-sm">
                  Picks update daily; ranking may vary by personal interest.
                </p>
              </div>

              <a href="/en/tools" className="text-sm text-gray-800 hover:underline">
                View all →
              </a>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
              {dailyFive.map((tool) => (
                <ToolCard
                  key={tool.slug}
                  tool={tool}
                  lang="en"
                  href={`/en/tools/${tool.slug}`}
                  badge="featured"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
