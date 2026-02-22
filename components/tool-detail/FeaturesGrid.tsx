// components/tool-detail/FeaturesGrid.tsx
import type { ToolFeature } from "@/data/toolExtras/types";
export default function FeaturesGrid({ lang, features }: { lang: "tr"|"en"; features: ToolFeature[] }) {
  if (!features.length) return null;
  const title = lang === "tr" ? "Öne Çıkan Özellikler" : "Key Features";
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl border border-black/8 bg-gray-50 p-5 hover:shadow-sm transition">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
            <p className="mt-1 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
