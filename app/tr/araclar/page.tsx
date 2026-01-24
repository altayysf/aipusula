"use client";

import { useMemo, useState } from "react";
import Navbar from "../../../components/Navbar";
import ToolCard from "../../../components/ToolCard";
import { tools } from "../../../data/tools";

type FilterKey = "all" | "yazi" | "gorsel" | "video" | "ses" | "kod" | "uretkenlik";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "yazi", label: "Yazı" },
  { key: "gorsel", label: "Görsel" },
  { key: "video", label: "Video" },
  { key: "ses", label: "Ses" },
  { key: "kod", label: "Kod" },
  { key: "uretkenlik", label: "Üretkenlik" },
];

function normalizeCategory(value: unknown): FilterKey | null {
  const v = String(value ?? "").toLowerCase();

  // Senin datandaki olası yazımlar:
  if (v.includes("yaz")) return "yazi";          // yazı, text, writing
  if (v.includes("gör") || v.includes("gor") || v.includes("image")) return "gorsel";
  if (v.includes("video")) return "video";
  if (v.includes("ses") || v.includes("audio") || v.includes("voice")) return "ses";
  if (v.includes("kod") || v.includes("code") || v.includes("dev")) return "kod";
  if (v.includes("üret") || v.includes("uret") || v.includes("prod")) return "uretkenlik";

  return null;
}

export default function AllToolsTR() {
  const [active, setActive] = useState<FilterKey>("all");

  const filteredTools = useMemo(() => {
    if (active === "all") return tools;

    return tools.filter((t) => {
      // tool.category senin datanda neyse ona göre normalize ediyoruz
      const cat = normalizeCategory((t as any).category);
      return cat === active;
    });
  }, [active]);

  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            En İyi Yapay Zeka Araçları (2026)
          </h1>

          <p className="mt-2 text-gray-600 text-sm">
            Tüm yapay zekâ araçlarına göz at. Bir araca tıklayıp detay sayfasını ve resmi linki gör.
          </p>

          {/* FILTER BAR */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {FILTERS.map((f) => {
              const isActive = active === f.key;

              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setActive(f.key)}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-semibold border shadow-sm transition",
                    isActive
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-900 border-black/10 hover:bg-gray-50",
                  ].join(" ")}
                >
                  {f.label}
                </button>
              );
            })}

            <span className="text-sm text-gray-500 ml-1">
              ({filteredTools.length})
            </span>
          </div>

          {/* GRID */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.slug}
                tool={tool}
                lang="tr"
                href={`/tr/araclar/${tool.slug}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
