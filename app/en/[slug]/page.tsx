// app/en/[slug]/page.tsx — veri YOK, sadece bileşen sırası
import { notFound }          from "next/navigation";
import Navbar                from "@/components/Navbar";
import { tools }             from "@/data/tools";
import { resolveExtra }      from "@/data/toolExtras";
import HeroSection           from "@/components/tool-detail/HeroSection";
import LongDesc              from "@/components/tool-detail/LongDesc";
import FeaturesGrid          from "@/components/tool-detail/FeaturesGrid";
import ForWhom               from "@/components/tool-detail/ForWhom";
import PricingTable          from "@/components/tool-detail/PricingTable";
import ProsConsSection       from "@/components/tool-detail/ProsConsSection";
import PromptsSection        from "@/components/tool-detail/PromptsSection";
import AlternativesSection   from "@/components/tool-detail/AlternativesSection";
import CtaBanner             from "@/components/tool-detail/CtaBanner";

function themeBySlug(slug: string) {
  const themes = [
    { bg: "from-violet-200 to-fuchsia-200", border: "border-violet-500/55" },
    { bg: "from-emerald-100 to-cyan-200",   border: "border-emerald-500/55" },
    { bg: "from-indigo-200 to-sky-200",     border: "border-sky-500/55" },
    { bg: "from-amber-200 to-rose-200",     border: "border-rose-500/55" },
  ];
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return themes[h % themes.length];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  if (!tool) return {};
  return {
    title: `What is ${tool.name}? Usage, Pricing & Alternatives | AI Pusula`,
    description: `${tool.taglineEN} — ${tool.detailEN.slice(0, 150)}`,
    alternates: { canonical: `/en/${slug}` },
  };
}

export default async function ToolDetailEN({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  if (!tool) return notFound();

  const extra        = resolveExtra(slug, "en");
  const alternatives = tools.filter(t => extra.alternativeSlugs.includes(t.slug));
  const theme        = themeBySlug(slug);

  return (
    <>
      <Navbar lang="en" />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 space-y-10">

          <HeroSection lang="en" tool={tool} theme={theme} />

          <LongDesc lang="en" toolName={tool.name} longDesc={extra.longDesc} />

          <FeaturesGrid lang="en" features={extra.features} />

          <ForWhom lang="en" toolName={tool.name} forWhom={extra.forWhom} />

          <PricingTable lang="en" pricing={extra.pricing} website={tool.website} />

          <ProsConsSection lang="en" pros={extra.pros} cons={extra.cons} />

          <PromptsSection lang="en" prompts={extra.prompts} />

          <AlternativesSection lang="en" toolName={tool.name} alternatives={alternatives} />

          <CtaBanner lang="en" toolName={tool.name} pricing={tool.pricing} website={tool.website} theme={theme} />

        </div>
      </main>
    </>
  );
}
