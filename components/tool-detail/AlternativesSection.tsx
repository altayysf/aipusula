// components/tool-detail/AlternativesSection.tsx
import Image from "next/image";
import Link from "next/link";
type AltTool = { slug: string; name: string; logo?: string; taglineTR: string; taglineEN: string };
export default function AlternativesSection({ lang, toolName, alternatives }: { lang: "tr"|"en"; toolName: string; alternatives: AltTool[] }) {
  if (!alternatives.length) return null;
  const title    = lang === "tr" ? `${toolName} Alternatifleri`                          : `${toolName} Alternatives`;
  const subtitle = lang === "tr" ? "Benzer ihtiyaçlar için değerlendirebileceğin diğer araçlar." : "Other tools you might consider for similar needs.";
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
      <p className="mt-2 text-gray-500 text-sm">{subtitle}</p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {alternatives.map(alt => (
          <Link key={alt.slug} href={`/${lang}/${alt.slug}`}
            className="flex items-center gap-3 rounded-2xl border border-black/10 bg-gray-50 p-4 hover:shadow-sm hover:border-black/20 transition group">
            {alt.logo && (
              <div className="h-10 w-10 rounded-xl bg-white border border-black/10 flex items-center justify-center overflow-hidden shrink-0">
                <Image src={alt.logo} alt={alt.name} width={28} height={28} className="object-contain" />
              </div>
            )}
            <div>
              <div className="font-bold text-sm text-gray-900 group-hover:underline">{alt.name}</div>
              <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">{lang === "tr" ? alt.taglineTR : alt.taglineEN}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
