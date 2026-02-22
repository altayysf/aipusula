// components/tool-detail/ProsConsSection.tsx
export default function ProsConsSection({ lang, pros, cons }: { lang: "tr"|"en"; pros: string[]; cons: string[] }) {
  if (!pros.length && !cons.length) return null;
  const title     = lang === "tr" ? "Artıları & Eksileri"          : "Pros & Cons";
  const prosTitle = lang === "tr" ? "Güçlü Yönler"                 : "Strengths";
  const consTitle = lang === "tr" ? "Dikkat Edilmesi Gerekenler"   : "Things to Consider";
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span className="text-emerald-500">✓</span>{prosTitle}</h3>
          <ul className="space-y-2">{pros.map((p,i)=><li key={i} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-emerald-500 mt-0.5 shrink-0">✓</span>{p}</li>)}</ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span className="text-rose-400">✗</span>{consTitle}</h3>
          <ul className="space-y-2">{cons.map((c,i)=><li key={i} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-rose-400 mt-0.5 shrink-0">✗</span>{c}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
