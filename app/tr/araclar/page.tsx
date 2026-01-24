"use client";

import Navbar from "../../../components/Navbar";
import ToolCard from "../../../components/ToolCard";
import { tools } from "../../../data/tools";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type CategoryKey =
  | "all"
  | "text"
  | "image"
  | "video"
  | "audio"
  | "code"
  | "productivity";

const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "text", label: "Yazı" },
  { key: "image", label: "Görsel" },
  { key: "video", label: "Video" },
  { key: "audio", label: "Ses" },
  { key: "code", label: "Kod" },
  { key: "productivity", label: "Üretkenlik" },
];

export default function AllToolsTR() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const catRaw = searchParams.get("cat") || "all";

  const selected: CategoryKey = categories.some((c) => c.key === catRaw)
    ? (catRaw as CategoryKey)
    : "all";

  const filteredTools = useMemo(() => {
    return selected === "all" ? tools : tools.filter((t) => t.category === selected);
  }, [selected]);

  function setCategory(cat: CategoryKey) {
    const params = new URLSearchParams(searchParams.toString());

    if (cat === "all") params.delete("cat");
    else params.set("cat", cat);

    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            En İyi Yapay Zeka Araçları (2026)
          </h1>

          <p className="mt-2 text-gray-600 text-sm">
            Tüm yapay zekâ araçlarına göz at. Bir araca tıklayıp detay sayfasını ve resmi
            linki gör.
          </p>

          {/* ✅ FİLTRE BAR */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {categories.map((c) => {
              const isActive = selected === c.key;

              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCategory(c.key)}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-semibold transition shadow-sm",
                    "border border-black/15",
                    isActive
                      ? "bg-gray-900 text-white"
                      : "bg-white/85 text-gray-900 hover:bg-white",
                  ].join(" ")}
                >
                  {c.label}
                </button>
              );
            })}

            <span className="ml-2 text-sm text-gray-500">({filteredTools.length})</span>
          </div>

          {/* ✅ GRID (YAPI AYNI) */}
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

          {/* İstersen küçük geri dönüş linki kalsın (opsiyonel) */}
          <div className="mt-8 text-sm text-gray-500">
            Seçili filtre URL’de tutulur (paylaşılabilir).
          </div>
        </div>
      </main>
    </>
  );
}
