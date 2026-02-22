// components/tool-detail/PricingTable.tsx
import type { ToolPricingPlan } from "@/data/toolExtras/types";
export default function PricingTable({ lang, pricing, website }: { lang: "tr"|"en"; pricing: ToolPricingPlan[]; website: string }) {
  const title    = lang === "tr" ? "Fiyatlandırma" : "Pricing";
  const subtitle = lang === "tr" ? "Fiyatlar değişkenlik gösterebilir, güncel bilgi için resmi siteyi kontrol edin." : "Prices may vary — check the official site for the latest information.";
  const linkLbl  = lang === "tr" ? "Tüm planlar için resmi siteye git →" : "View all plans on the official site →";
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
      <p className="mt-2 text-gray-500 text-sm">{subtitle}</p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pricing.map((p, i) => (
          <div key={i} className={`rounded-2xl border p-5 ${i === 1 ? "border-gray-900 bg-gray-900 text-white" : "border-black/10 bg-gray-50"}`}>
            <div className={`text-xs font-semibold uppercase tracking-wider ${i === 1 ? "text-gray-300" : "text-gray-500"}`}>{p.plan}</div>
            <div className={`mt-2 text-xl font-extrabold ${i === 1 ? "text-white" : "text-gray-900"}`}>{p.price}</div>
            <div className={`mt-1 text-sm ${i === 1 ? "text-gray-300" : "text-gray-600"}`}>{p.note}</div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <a href={website} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:underline">{linkLbl}</a>
      </div>
    </section>
  );
}
