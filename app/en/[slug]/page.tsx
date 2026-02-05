import Navbar from "../../../components/Navbar";
import { tools } from "../../../data/tools";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { tCategory, tPricing } from "../../../components/i18n";
import ScreenshotGrid from "../../../components/ScreenshotGrid";

function themeBySlug(slug: string) {
  const themes = [
    { bg: "from-violet-200 to-fuchsia-200", border: "border-violet-500/55" },
    { bg: "from-emerald-100 to-cyan-200", border: "border-emerald-500/55" },
    { bg: "from-indigo-200 to-sky-200", border: "border-sky-500/55" },
    { bg: "from-amber-200 to-rose-200", border: "border-rose-500/55" },
  ];
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return themes[h % themes.length];
}

export default async function ToolDetailEN({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return notFound();

  const theme = themeBySlug(tool.slug);

  return (
    <>
      <Navbar lang="en" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="text-sm text-gray-600 mb-6">
            <Link href="/en" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/en/tools" className="hover:underline">
              Tools
            </Link>{" "}
            / <span className="text-gray-900 font-medium">{tool.name}</span>
          </div>

          {/* TOP CARD */}
          <section
            className={[
              "rounded-[32px] border bg-gradient-to-r p-7",
              theme.bg,
              theme.border,
              "shadow-sm",
            ].join(" ")}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-white/80 border border-black/10 shadow-sm flex items-center justify-center overflow-hidden">
                  {tool.logo ? (
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  ) : (
                    <span className="font-extrabold text-gray-800">
                      {tool.name[0]}
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    {tool.name}
                  </h1>
                  <p className="mt-2 text-gray-800/80">{tool.taglineEN}</p>

                  <p className="mt-4 text-gray-800 leading-relaxed max-w-2xl">
                    {tool.detailEN}
                  </p>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800 whitespace-nowrap">
                      {tCategory("en", tool.category)}
                    </span>
                    <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800 whitespace-nowrap">
                      {tPricing("en", tool.pricing)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition"
                >
                  Visit official site →
                </a>

                <Link
                  href="/en/tools"
                  className="rounded-full bg-white/85 border border-black/20 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
                >
                  Back to other tools
                </Link>
              </div>
            </div>
          </section>

          {/* SCREENSHOTS (modal) */}
          <section className="mt-10">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Screenshots
                </h2>
                <p className="mt-2 text-gray-600">
                  Click an image to zoom in.
                </p>
              </div>

              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-800 hover:underline"
              >
                Official site →
              </a>
            </div>

            {/* ✅ BURASI DEĞİŞTİ */}
            <ScreenshotGrid screenshots={tool.screenshots} toolName={tool.name} />
          </section>
        </div>
      </main>
    </>
  );
}
