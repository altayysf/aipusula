// components/tool-detail/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { tCategory, tPricing } from "@/components/i18n";
import type { ToolCategory, ToolPricing } from "@/data/tools";

type Tool = {
  name: string; logo?: string;
  taglineTR: string; taglineEN: string;
  detailTR: string;  detailEN: string;
  category: ToolCategory;  // ← "text" | "image" | "video" | "audio" | "code" | "productivity"
  pricing: ToolPricing;    // ← "free" | "freemium" | "paid"
  website: string;
};

export default function HeroSection({
  lang, tool, theme,
}: {
  lang: "tr" | "en";
  tool: Tool;
  theme: { bg: string; border: string };
}) {
  const tagline  = lang === "tr" ? tool.taglineTR : tool.taglineEN;
  const detail   = lang === "tr" ? tool.detailTR  : tool.detailEN;
  const homeHref = `/${lang}`;
  const homeLabel   = lang === "tr" ? "Ana Sayfa"         : "Home";
  const visitLabel  = lang === "tr" ? "Resmi siteye git →" : "Visit official site →";

  return (
    <section className={`rounded-[32px] border bg-gradient-to-r p-7 shadow-sm ${theme.bg} ${theme.border}`}>
      <div className="text-sm text-gray-600 mb-6">
        <Link href={homeHref} className="hover:underline">{homeLabel}</Link>
        {" / "}<span className="text-gray-900 font-medium">{tool.name}</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex items-start gap-5">
          <div className="h-14 w-14 rounded-2xl bg-white/80 border border-black/10 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
            {tool.logo
              ? <Image src={tool.logo} alt={tool.name} width={40} height={40} className="object-contain" />
              : <span className="font-extrabold text-gray-800 text-xl">{tool.name[0]}</span>}
          </div>
          <div className="min-w-0">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{tool.name}</h1>
            <p className="mt-2 text-gray-800/80 text-lg">{tagline}</p>
            <p className="mt-4 text-gray-800 leading-relaxed max-w-2xl">{detail}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800">{tCategory(lang, tool.category)}</span>
              <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800">{tPricing(lang, tool.pricing)}</span>
            </div>
          </div>
        </div>
        <div className="shrink-0">
          <a href={tool.website} target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition whitespace-nowrap">
            {visitLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
