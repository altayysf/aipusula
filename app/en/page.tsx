"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import ToolCard from "../../components/ToolCard";
import { tools } from "../../data/tools";

type FilterKey =
  | "all"
  | "text"
  | "visual"
  | "video"
  | "audio"
  | "code"
  | "productivity";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "text", label: "Text" },
  { key: "visual", label: "Visual" },
  { key: "video", label: "Video" },
  { key: "audio", label: "Audio" },
  { key: "code", label: "Code" },
  { key: "productivity", label: "Productivity" },
];

function normalizeCategory(value: unknown): FilterKey | null {
  const v = String(value ?? "").toLowerCase();

  if (v.includes("text") || v.includes("write")) return "text";
  if (v.includes("image") || v.includes("visual") || v.includes("design")) return "visual";
  if (v.includes("video")) return "video";
  if (v.includes("audio") || v.includes("voice") || v.includes("speech")) return "audio";
  if (v.includes("code") || v.includes("dev")) return "code";
  if (v.includes("product") || v.includes("productivity")) return "productivity";

  return null;
}

export default function AllToolsEN() {
  const [active, setActive] = useState<FilterKey>("all");

  const filteredTools = useMemo(() => {
    if (active === "all") return tools;
    return tools.filter(
      (tool) => normalizeCategory((tool as any).category) === active
    );
  }, [active]);

  return (
    <>
      <Navbar lang="en" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Best AI Tools (2026)
          </h1>

          <p className="mt-2 text-gray-600 text-sm">
            Browse all AI tools. Click a tool to see details and the official website.
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
                lang="en"
                href={`/en/${tool.slug}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}