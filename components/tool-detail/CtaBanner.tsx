// components/tool-detail/CtaBanner.tsx
export default function CtaBanner({ lang, toolName, pricing, website, theme }: {
  lang: "tr"|"en"; toolName: string; pricing: string; website: string; theme: { bg: string; border: string };
}) {
  const title = lang === "tr" ? `${toolName}'i Kullanmaya Başla` : `Get Started with ${toolName}`;
  const sub   = pricing === "free"
    ? (lang === "tr" ? "Tamamen ücretsiz — hemen deneyebilirsin." : "Completely free — try it right now.")
    : pricing === "freemium"
    ? (lang === "tr" ? "Ücretsiz planla başlayabilir, ihtiyacına göre yükseltebilirsin." : "Start with the free plan and upgrade as needed.")
    : (lang === "tr" ? "Resmi siteden planları inceleyip başlayabilirsin." : "Browse plans on the official site and get started.");
  const btn = lang === "tr" ? `${toolName} Sitesine Git →` : `Go to ${toolName} →`;
  return (
    <section className={`rounded-[32px] border bg-gradient-to-r p-8 shadow-sm text-center ${theme.bg} ${theme.border}`}>
      <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
      <p className="mt-2 text-gray-700 max-w-xl mx-auto">{sub}</p>
      <a href={website} target="_blank" rel="noopener noreferrer"
        className="mt-5 inline-flex rounded-full bg-gray-900 text-white px-8 py-3 text-sm font-semibold hover:bg-black transition">
        {btn}
      </a>
    </section>
  );
}
