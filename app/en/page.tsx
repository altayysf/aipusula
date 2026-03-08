"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import { tools } from "../../data/tools";
import type { ToolCategory } from "../../data/tools";

// ─── Filter definitions ──────────────────────────────────────
type FilterKey = "all" | ToolCategory;

const FILTERS: { key: FilterKey; label: string; emoji: string }[] = [
  { key: "all",          label: "All",          emoji: "✦"  },
  { key: "text",         label: "Text",         emoji: "✍️" },
  { key: "image",        label: "Image",        emoji: "🖼️" },
  { key: "video",        label: "Video",        emoji: "🎬" },
  { key: "audio",        label: "Audio",        emoji: "🎙️" },
  { key: "code",         label: "Code",         emoji: "💻" },
  { key: "productivity", label: "Productivity", emoji: "⚡" },
];

const PRICING_BADGE: Record<string, { label: string; cls: string }> = {
  free:     { label: "Free",     cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  freemium: { label: "Freemium", cls: "bg-sky-50 text-sky-700 border-sky-200" },
  paid:     { label: "Paid",     cls: "bg-gray-100 text-gray-600 border-gray-200" },
};

export default function AllToolsEN() {
  const [active, setActive] = useState<FilterKey>("all");

  const filteredTools = useMemo(
    () => active === "all" ? tools : tools.filter((t) => t.category === active),
    [active]
  );

  const featuredTools = useMemo(() => tools.filter((t) => t.featured), []);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: tools.length };
    FILTERS.slice(1).forEach((f) => {
      c[f.key] = tools.filter((t) => t.category === f.key).length;
    });
    return c;
  }, []);

  return (
    <>
      <Navbar lang="en" />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-10">

          {/* ── 1. HERO ──────────────────────────────────────────── */}
          <section>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Best AI Tools{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
                2026
              </span>
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed text-sm">
              From text generation to image creation, video editing to coding —{" "}
              <strong>{tools.length} AI tools</strong> in one place.
              Click any tool to explore detailed reviews, pricing comparisons,
              and real-world usage examples.
            </p>
          </section>

          {/* ── 2. EDITOR'S PICKS ────────────────────────────────── */}
          {featuredTools.length > 0 && (
            <section>
              <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                ⭐ Editor's Picks
                <span className="text-xs font-normal text-gray-400">— Top recommended tools</span>
              </h2>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {featuredTools.map((tool) => (
                  <a
                    key={tool.slug}
                    href={`/en/${tool.slug}`}
                    className="flex-shrink-0 flex items-center gap-3 rounded-2xl border border-black/10 bg-gray-50 px-4 py-3 hover:shadow-md hover:border-black/20 transition group w-52"
                  >
                    {tool.logo
                      ? <img src={tool.logo} alt={tool.name} className="h-8 w-8 rounded-xl object-contain" />
                      : <div className="h-8 w-8 rounded-xl bg-gray-200 flex items-center justify-center text-xs font-bold">{tool.name[0]}</div>
                    }
                    <div className="min-w-0">
                      <div className="font-semibold text-sm text-gray-900 group-hover:underline truncate">{tool.name}</div>
                      <div className="text-[11px] text-gray-500 truncate">{tool.taglineEN}</div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* ── 3. FILTER BAR ────────────────────────────────────── */}
          <section>
            <div className="flex flex-wrap items-center gap-2">
              {FILTERS.map((f) => {
                const isActive = active === f.key;
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setActive(f.key)}
                    className={[
                      "rounded-full px-4 py-1.5 text-sm font-semibold border transition",
                      isActive
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-black/10 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {f.emoji} {f.label}
                    <span className={`ml-1.5 text-xs font-normal ${isActive ? "text-gray-300" : "text-gray-400"}`}>
                      {counts[f.key] ?? filteredTools.length}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-gray-400">
              {filteredTools.length} tools listed
              {active !== "all" && (
                <> · <span className="font-medium text-gray-600">{FILTERS.find(f => f.key === active)?.label}</span></>
              )}
            </p>
          </section>

          {/* ── 4. TOOL GRID — 5 columns compact ─────────────────── */}
          <section>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
              {filteredTools.map((tool) => {
                const badge = PRICING_BADGE[tool.pricing] ?? PRICING_BADGE.freemium;
                return (
                  <a
                    key={tool.slug}
                    href={`/en/${tool.slug}`}
                    className="group flex flex-col rounded-2xl border border-black/8 bg-white p-3.5 hover:shadow-md hover:border-black/15 transition-all duration-150"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      {tool.logo
                        ? <img src={tool.logo} alt={tool.name} className="h-8 w-8 rounded-xl object-contain flex-shrink-0" />
                        : <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0">{tool.name[0]}</div>
                      }
                      <span className="font-bold text-sm text-gray-900 truncate group-hover:underline leading-tight">
                        {tool.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 flex-1 mb-2.5">
                      {tool.taglineEN}
                    </p>
                    <span className={`self-start text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badge.cls}`}>
                      {badge.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>

          {/* ── 5. ABOUT TEXT — Critical for AdSense ─────────────── */}
          <section className="rounded-[28px] border border-black/8 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              About AI Tools
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              AI tools have rapidly expanded from business into everyday life between
              2024 and 2026. ChatGPT and Claude lead in text generation, Midjourney
              and DALL·E in image creation, Runway and CapCut in video, and ElevenLabs
              and Murf AI in voice synthesis — all among the most widely used today.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Each tool has its own strengths. GitHub Copilot and Cursor excel at
              coding, Perplexity at research, and Canva or Adobe Firefly at design.
              Detailed reviews, pricing comparisons, and example prompts for every
              tool are available on their individual pages.
            </p>
          </section>

          {/* ── 6. CATEGORY GUIDE — Internal linking for SEO ─────── */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Browse by Category</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {FILTERS.slice(1).map((f) => (
                <button
                  key={f.key}
                  onClick={() => { setActive(f.key); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="rounded-2xl border border-black/8 bg-white p-4 text-center hover:shadow-sm hover:border-black/20 transition"
                >
                  <div className="text-2xl mb-1">{f.emoji}</div>
                  <div className="font-semibold text-xs text-gray-900">{f.label}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">{counts[f.key]} tools</div>
                </button>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
