"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Tool } from "../data/tools";
import { tCategory, tPricing, tTagline } from "./i18n";

function hashToIndex(s: string, mod = 5) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % mod;
}

const THEMES = [
  { bg: "from-violet-200 to-fuchsia-200", border: "border-violet-500/55" },
  { bg: "from-emerald-100 to-cyan-200", border: "border-emerald-500/55" },
  { bg: "from-indigo-200 to-sky-200", border: "border-sky-500/55" },
  { bg: "from-violet-200 to-fuchsia-200", border: "border-violet-500/55" },
  { bg: "from-amber-200 to-rose-200", border: "border-rose-500/55" },
];

export default function ToolCard({
  tool,
  href,
  lang,
  badge,
}: {
  tool: Tool;
  href: string;
  lang: "tr" | "en";
  badge?: "featured";
}) {
  const themeIndex = useMemo(() => hashToIndex(tool.slug), [tool.slug]);
  const theme = THEMES[themeIndex];

  const [logoOk, setLogoOk] = useState(true);

  return (
    <Link href={href} className="group block">
      <div
        className={[
          "rounded-[28px] border bg-gradient-to-r p-5",
          theme.bg,
          theme.border,
          "transition-transform duration-200",
          "hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.25)]",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            <div className="h-12 w-12 rounded-2xl bg-white/80 border border-black/10 shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
              {tool.logo && logoOk ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-7 w-7 object-contain"
                  onError={() => setLogoOk(false)}
                />
              ) : (
                <span className="font-extrabold text-gray-800">
                  {tool.name[0]}
                </span>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-extrabold text-gray-900 truncate">
                {tool.name}
              </h3>

              <p className="mt-2 text-sm text-gray-700/80 line-clamp-2">
                {tTagline(lang, tool)}
              </p>

              {/* ✅ CHIPLER AYNI SATIRDA: kategori + pricing yan yana */}
              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800 whitespace-nowrap">
                  {tCategory(lang, tool.category)}
                </span>
                <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800 whitespace-nowrap">
                  {tPricing(lang, tool.pricing)}
                </span>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-600 shrink-0">
            {badge === "featured"
              ? lang === "tr"
                ? "Öne çıkan →"
                : "Featured →"
              : lang === "tr"
              ? "Detay →"
              : "Details →"}
          </div>
        </div>
      </div>
    </Link>
  );
}
