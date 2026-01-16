import Navbar from "../../components/Navbar";
import ToolCard from "../../components/ToolCard";
import { tools } from "../../data/tools";


function getDailyFive(all: typeof tools) {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
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

export default function PageTR() {
  const dailyFive = getDailyFive(tools);

  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          {/* HERO (daha dar) */}
          <section className="rounded-[28px] border border-black/10 bg-white shadow-sm px-8 py-6">
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                  AI Pusula <span className="ml-2">🧭</span>
                </h1>

                <p className="mt-3 text-gray-700">
                  Yapay zekâ araçlarını keşfet, karşılaştır ve ihtiyacına en uygun
                  çözümleri bul.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/tr/araclar"
                    className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition"
                  >
                    Diğer araçları gör →
                  </a>
                  <a
                    href="/en"
                    className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition"
                  >
                    English version
                  </a>
                </div>
              </div>

              <div className="hidden md:flex gap-3 shrink-0">
                <a
                  href="/tr/araclar"
                  className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition"
                >
                  Diğer Araçlar →
                </a>
                <a
                  href="/en"
                  className="rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition"
                >
                  EN
                </a>
              </div>
            </div>
          </section>

          {/* Başlık */}
          <section className="mt-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Editör Seçimi: Günün 5 Aracı
                </h2>
                <p className="mt-2 text-gray-600 text-sm">
                  Seçkiler günlük güncellenir; sıralama kişisel kullanım/ilgiye göre değişebilir.
                </p>
              </div>

              <a
                href="/tr/araclar"
                className="text-sm text-gray-800 hover:underline"
              >
                Diğer araçlar →
              </a>
            </div>

            {/* 5 kart (aynı boyut, daha kibar) */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
              {dailyFive.map((tool) => (
                <ToolCard
                  key={tool.slug}
                  tool={tool}
                  lang="tr"
                  href={`/tr/araclar/${tool.slug}`}
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
