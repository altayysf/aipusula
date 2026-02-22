import type { ToolExtra } from "./types";

export const claude: ToolExtra = {
  longDescTR: `Claude, Anthropic tarafından geliştirilen ve güvenlik odaklı bir yaklaşımla tasarlanan büyük dil modeli tabanlı yapay zekâ asistanıdır. Uzun dokümanlarla çalışma, nüanslı analiz ve tutarlı uzun soluklu metin üretiminde öne çıkar.

Özellikle akademik metinler, hukuki belgeler ve teknik dokümanlar gibi yapılandırılmış içeriklerin analizi ile yeniden yazımında tercih edilen bir araçtır. Geniş bağlam penceresi sayesinde yüz binlerce kelimelik belgeleri tek seferinde işleyebilir.

Anthropic'in "Constitutional AI" yaklaşımıyla geliştirilen Claude, zararlı içerik üretimine karşı güçlü sınırları ve etik değerlendirme kapasitesiyle öne çıkar. Kurumsal ve akademik kullanıcılar için güvenilirlik ve tutarlılık açısından güçlü bir tercihdir.`,

  longDescEN: `Claude is an AI assistant developed by Anthropic with a safety-first design philosophy, built on large language model technology. It excels at working with long documents, nuanced analysis, and producing consistent, long-form text.

It is especially preferred for analyzing and rewriting structured content such as academic papers, legal documents, and technical documentation. Its large context window enables processing hundreds of thousands of words in a single session.

Developed with Anthropic's "Constitutional AI" approach, Claude stands out for its strong safeguards against harmful content and ethical reasoning capabilities. It is a reliable choice for enterprise and academic users who prioritize trustworthiness and consistency.`,

  featuresTR: [
    { icon: "📚", title: "Uzun Belge Analizi", desc: "Yüz binlerce kelimelik dokümanları tek seferinde analiz eder." },
    { icon: "✍️", title: "Tutarlı Uzun Metin", desc: "Raporlar, makaleler ve kitap bölümleri için tutarlı içerik üretir." },
    { icon: "🔒", title: "Güvenlik Odaklı Tasarım", desc: "Constitutional AI yöntemiyle geliştirilmiş, etik sınırları güçlüdür." },
    { icon: "💻", title: "Kod Desteği", desc: "Kod yazma, refactor ve hata ayıklamada güçlüdür." },
    { icon: "🧩", title: "Nüanslı Analiz", desc: "Karmaşık konularda çok boyutlu perspektifler sunar." },
    { icon: "📁", title: "Dosya & Belge İşleme", desc: "PDF, Word ve diğer belgeleri yükleyip analiz edebilirsin." },
  ],

  featuresEN: [
    { icon: "📚", title: "Long Document Analysis", desc: "Processes hundreds of thousands of words in a single session." },
    { icon: "✍️", title: "Consistent Long-Form Writing", desc: "Produces coherent content for reports, articles, and book chapters." },
    { icon: "🔒", title: "Safety-First Design", desc: "Built with Constitutional AI — strong ethical boundaries." },
    { icon: "💻", title: "Code Support", desc: "Strong at writing, refactoring, and debugging code." },
    { icon: "🧩", title: "Nuanced Analysis", desc: "Offers multi-dimensional perspectives on complex topics." },
    { icon: "📁", title: "File & Document Processing", desc: "Upload PDFs, Word files, and other documents for analysis." },
  ],

  forWhomTR: [
    { icon: "📖", label: "Akademisyenler & araştırmacılar" },
    { icon: "⚖️", label: "Hukuk & danışmanlık sektörü" },
    { icon: "✍️", label: "Uzun form içerik yazarları" },
    { icon: "💻", label: "Yazılım geliştiriciler" },
    { icon: "🏢", label: "Kurumsal ekipler" },
    { icon: "📊", label: "Analistler & veri uzmanları" },
  ],

  forWhomEN: [
    { icon: "📖", label: "Academics & researchers" },
    { icon: "⚖️", label: "Legal & consulting professionals" },
    { icon: "✍️", label: "Long-form content writers" },
    { icon: "💻", label: "Software developers" },
    { icon: "🏢", label: "Enterprise teams" },
    { icon: "📊", label: "Analysts & data professionals" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "Temel erişim, sınırlı mesaj" },
    { plan: "Pro",      price: "$20 / ay", note: "Claude 3.5 Sonnet, öncelikli erişim" },
    { plan: "Team",     price: "$25 / ay", note: "Ekip paylaşımı ve yönetim" },
    { plan: "API",      price: "Kullanım başına", note: "Geliştiriciler için" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "Basic access, limited messages" },
    { plan: "Pro",      price: "$20 / mo", note: "Claude 3.5 Sonnet, öncelikli erişim" },
    { plan: "Team",     price: "$25 / mo", note: "Ekip paylaşımı ve yönetim" },
    { plan: "API",      price: "Kullanım başına", note: "For developers" },
  ],

  prosTR: [
    "Çok uzun bağlam penceresi (200K token)",
    "Tutarlı ve nüanslı yazı kalitesi",
    "Güvenlik odaklı ve etik tasarım",
    "Akademik ve teknik içeriklerde güçlü",
    "Dosya yükleme ve belge analizi",
  ],

  prosEN: [
    "Very large context window (200K tokens)",
    "Consistent and nuanced writing quality",
    "Safety-focused and ethical design",
    "Strong for academic and technical content",
    "File upload and document analysis",
  ],

  consTR: [
    "Görsel üretimi yoktur",
    "Web araması sınırlıdır",
    "ChatGPT kadar geniş plugin ekosistemi yok",
    "Ücretsiz plan mesaj limiti kısıtlı",
  ],

  consEN: [
    "No image generation",
    "Limited web search",
    "Smaller plugin ecosystem than ChatGPT",
    "Free plan message limit is restrictive",
  ],

  promptsTR: [
    {
      label: "📄 Uzun Belge Özeti",
      prompt: "Bu raporu 5 maddede özetle. Sonra yönetici özeti formatında 1 sayfalık taslak hazırla.",
      output: `Ana Bulgular:
1. Pazar büyüme hızı yıllık %23 olarak öngörülüyor
2. En büyük risk: tedarik zinciri kesintileri
3. Dijital dönüşüm yatırımları 2026'da zirveye ulaşacak
4. İK maliyetleri toplam bütçenin %41'ini oluşturuyor
5. Yeni fırsat: Güneydoğu Asya segmenti

Yönetici Özeti:
Bu rapor 2026–2028 büyüme projeksiyonlarını incelemekte olup sektörün dijital dönüşüme olan ihtiyacını net biçimde ortaya koymaktadır...`,
    },
    {
      label: "⚖️ Sözleşme Analizi",
      prompt: "Bu kira sözleşmesindeki kiracı aleyhine maddeleri işaretle ve her biri için kısa açıklama yaz.",
      output: `Dikkat Edilmesi Gereken Maddeler:

Madde 7 — Depozito İadesi: 60 günlük süre standart 30 günün üzerinde, kiracı aleyhine.
Madde 12 — Tadilat Yasağı: Küçük düzeltmeler dahil tüm tadilat için yazılı izin şartı kısıtlayıcı.
Madde 18 — Fesih Bildirimi: 90 günlük önceden bildirim, piyasa normunun üzerinde.`,
    },
    {
      label: "🧠 Karşılaştırmalı Analiz",
      prompt: "ChatGPT, Claude ve Gemini'yi içerik üretimi, kod yazma ve fiyat açısından karşılaştır. Tablo formatında sun.",
      output: `| Kriter          | ChatGPT    | Claude     | Gemini     |
|-----------------|------------|------------|------------|
| İçerik Kalitesi | ⭐⭐⭐⭐½     | ⭐⭐⭐⭐⭐    | ⭐⭐⭐⭐      |
| Kod Yazma       | ⭐⭐⭐⭐⭐    | ⭐⭐⭐⭐½    | ⭐⭐⭐⭐      |
| Uzun Bağlam     | ⭐⭐⭐⭐      | ⭐⭐⭐⭐⭐    | ⭐⭐⭐⭐⭐    |
| Ücretsiz Plan   | Orta       | Sınırlı    | Cömert     |
| Ücretli Fiyat   | $20/ay     | $20/ay     | $20/ay     |`,
    },
  ],

  promptsEN: [
    {
      label: "📄 Long Document Summary",
      prompt: "Summarize this report in 5 bullet points. Then write a 1-page executive summary.",
      output: `Key Findings:
1. Market growth rate projected at 23% annually
2. Biggest risk: supply chain disruptions
3. Digital transformation investments peak in 2026
4. HR costs account for 41% of total budget
5. New opportunity: Southeast Asia segment

Executive Summary:
This report examines the 2026–2028 growth projections for the sector, clearly highlighting the need for digital transformation...`,
    },
    {
      label: "⚖️ Contract Analysis",
      prompt: "Identify clauses in this lease agreement that are unfavorable to the tenant and write a brief explanation for each.",
      output: `Clauses to Watch:

Clause 7 — Security Deposit Return: 60-day return period exceeds the standard 30 days, unfavorable to tenant.
Clause 12 — No Alterations: Written consent required even for minor repairs — overly restrictive.
Clause 18 — Termination Notice: 90-day advance notice requirement exceeds market norms.`,
    },
    {
      label: "🧠 Comparative Analysis",
      prompt: "Compare ChatGPT, Claude, and Gemini on content generation, coding, and pricing. Present as a table.",
      output: `| Criteria         | ChatGPT    | Claude     | Gemini     |
|------------------|------------|------------|------------|
| Content Quality  | ⭐⭐⭐⭐½    | ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐      |
| Code Writing     | ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐½    | ⭐⭐⭐⭐      |
| Long Context     | ⭐⭐⭐⭐     | ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐    |
| Free Plan        | Moderate   | Limited    | Generous   |
| Paid Price       | $20/mo     | $20/mo     | $20/mo     |`,
    },
  ],

  alternativeSlugs: ["chatgpt", "google-gemini", "perplexity"],
};
