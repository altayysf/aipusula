// components/tool-detail/LongDesc.tsx
export default function LongDesc({ lang, toolName, longDesc }: { lang: "tr"|"en"; toolName: string; longDesc: string }) {
  const title = lang === "tr" ? `${toolName} Nedir?` : `What is ${toolName}?`;
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
      <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
        {longDesc.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}
