// components/tool-detail/ForWhom.tsx
import type { ToolForWhom } from "@/data/toolExtras/types";
export default function ForWhom({ lang, toolName, forWhom }: { lang: "tr"|"en"; toolName: string; forWhom: ToolForWhom[] }) {
  if (!forWhom.length) return null;
  const title = lang === "tr" ? `${toolName} Kimler İçin İdeal?` : `Who is ${toolName} ideal for?`;
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        {forWhom.map((fw, i) => (
          <span key={i} className="flex items-center gap-2 rounded-full border border-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-800">
            <span>{fw.icon}</span><span>{fw.label}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
