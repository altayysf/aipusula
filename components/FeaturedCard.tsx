import Link from "next/link";
import Image from "next/image";
import type { Tool } from "../data/tools";
import { tCategory, tPricing, tTagline } from "./i18n";

function gradientByIndex(i: number) {
  const gradients = [
    "from-violet-200 to-fuchsia-200",
    "from-emerald-100 to-cyan-200",
    "from-indigo-200 to-sky-200",
    "from-violet-200 to-fuchsia-200",
    "from-amber-200 to-rose-200",
  ];
  return gradients[i % gradients.length];
}

function borderByIndex(i: number) {
  const borders = [
    "border-violet-500/60",
    "border-emerald-500/60",
    "border-sky-500/60",
    "border-violet-500/60",
    "border-rose-500/60",
  ];
  return borders[i % borders.length];
}

export default function FeaturedCard({
  tool,
  href,
  lang,
  index,
}: {
  tool: Tool;
  href: string;
  lang: "tr" | "en";
  index: number;
}) {
  const gradient = gradientByIndex(index);
  const border = borderByIndex(index);

  return (
    <Link href={href} className="group block">
      <div
        className={[
          "rounded-[32px] border p-6 transition-transform duration-200",
          "hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.25)]",
          "bg-gradient-to-r",
          gradient,
          border,
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-5 min-w-0">
            <div className="h-14 w-14 rounded-2xl bg-white/80 border border-black/10 shadow-sm flex items-center justify-center shrink-0">
              {tool.logo ? (
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              ) : (
                <span className="font-extrabold text-gray-800">
                  {tool.name[0]}
                </span>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="text-xl font-extrabold text-gray-900 truncate">
                {tool.name}
              </h3>

              <p className="mt-2 text-gray-700/80 line-clamp-2">
                {tTagline(lang, tool)}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="rounded-full bg-white/70 border border-black/10 px-4 py-1 text-xs text-gray-800">
                  {tCategory(lang, tool.category)}
                </span>
                <span className="rounded-full bg-white/70 border border-black/10 px-4 py-1 text-xs text-gray-800">
                  {tPricing(lang, tool.pricing)}
                </span>
              </div>
            </div>
          </div>

          <div className="text-gray-600 text-sm shrink-0">
            {lang === "tr" ? "Öne çıkan" : "Featured"} <span aria-hidden>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
