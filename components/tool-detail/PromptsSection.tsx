// components/tool-detail/PromptsSection.tsx
import type { ToolPrompt } from "@/data/toolExtras/types";
export default function PromptsSection({ lang, prompts }: { lang: "tr"|"en"; prompts: ToolPrompt[] }) {
  if (!prompts.length) return null;
  const title    = lang === "tr" ? "Örnek Prompt'lar & Beklenen Çıktılar" : "Example Prompts & Expected Outputs";
  const subtitle = lang === "tr" ? "Aşağıdaki hazır prompt'ları kopyalayıp doğrudan kullanabilirsin." : "Copy and use these ready-made prompts directly.";
  const pLbl     = lang === "tr" ? "Prompt"     : "Prompt";
  const oLbl     = lang === "tr" ? "Örnek Çıktı": "Expected Output";
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
      <p className="mt-2 text-gray-500 text-sm">{subtitle}</p>
      <div className="mt-6 space-y-6">
        {prompts.map((pr, i) => (
          <div key={i} className="rounded-2xl border border-black/8 overflow-hidden">
            <div className="bg-gray-50 border-b border-black/8 px-5 py-3">
              <span className="font-bold text-sm text-gray-900">{pr.label}</span>
            </div>
            <div className="px-5 py-4 bg-gray-900">
              <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">{pLbl}</div>
              <p className="text-sm text-gray-100 font-mono leading-relaxed whitespace-pre-wrap">{pr.prompt}</p>
            </div>
            <div className="px-5 py-4 bg-white">
              <div className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider mb-2">{oLbl}</div>
              <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{pr.output}</pre>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
