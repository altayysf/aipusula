import type { ToolExtra } from "./types";

export const notion_ai: ToolExtra = {
  longDescTR: `Notion AI, milyonlarca kullanıcının kullandığı Notion not alma ve proje yönetimi platformuna entegre edilmiş yapay zekâ asistanıdır. Harici bir araç kullanmak yerine, zaten çalıştığın alanda doğrudan AI desteği alman anlamına gelir.

Platformun gücü, mevcut Notion içeriklerinizle bağlantılı çalışabilmesinden gelir. Bir toplantı notunu sayfanın içinde özetleyebilir, bir proje belgesini doğrudan düzenleyebilir, yapılacaklar listesini genişletebilir veya boş sayfadan içerik üretebilirsin — hepsi aynı arayüzde.

Notion AI, tam teşekküllü bir yazı asistanı olmak yerine mevcut iş akışlarını hızlandıran bir yardımcı olarak konumlandırılmıştır. Özellikle Notion'ı aktif kullanan bireyler ve ekipler için değer teklifini anında görmek mümkündür.`,

  longDescEN: `Notion AI is an AI assistant integrated into Notion, the note-taking and project management platform used by millions. Instead of using an external tool, it means getting AI support directly within the space where you're already working.

The platform's power comes from its ability to work with your existing Notion content. You can summarize a meeting note on the page, directly edit a project document, expand a to-do list, or generate content from a blank page — all within the same interface.

Notion AI is positioned not as a full-fledged writing assistant but as a helper that accelerates existing workflows. For individuals and teams who actively use Notion, the value proposition is immediately apparent.`,

  featuresTR: [
    { icon: "🔗", title: "Notion İçi Entegrasyon", desc: "Mevcut Notion sayfalarında doğrudan AI asistanı olarak çalışır." },
    { icon: "✍️", title: "İçerik Üretimi", desc: "Boş sayfadan blog, rapor veya içerik planı oluşturur." },
    { icon: "📝", title: "Özetleme", desc: "Uzun sayfaları veya toplantı notlarını kısaca özetler." },
    { icon: "✏️", title: "Yazı İyileştirme", desc: "Ton düzenleme, dilbilgisi düzeltme ve yeniden yazma." },
    { icon: "📋", title: "Yapılacaklar Listesi", desc: "İçerikten otomatik aksiyon maddeleri çıkarır." },
    { icon: "🌍", title: "Çeviri", desc: "İçerikleri farklı dillere doğrudan çevirir." },
  ],

  featuresEN: [
    { icon: "🔗", title: "In-Notion Integration", desc: "Works as an AI assistant directly within existing Notion pages." },
    { icon: "✍️", title: "Content Generation", desc: "Creates blogs, reports, or content plans from a blank page." },
    { icon: "📝", title: "Summarization", desc: "Summarizes long pages or meeting notes concisely." },
    { icon: "✏️", title: "Writing Enhancement", desc: "Tone adjustment, grammar correction, and rewriting." },
    { icon: "📋", title: "Action Items", desc: "Automatically extracts action items from content." },
    { icon: "🌍", title: "Translation", desc: "Translates content directly into different languages." },
  ],

  forWhomTR: [
    { icon: "📋", label: "Aktif Notion kullanıcıları" },
    { icon: "🏢", label: "Proje yöneticileri & ekipler" },
    { icon: "✍️", label: "İçerik ve belge üretenler" },
    { icon: "🎓", label: "Öğrenci & akademisyenler" },
    { icon: "💼", label: "Uzak çalışan profesyoneller" },
    { icon: "🚀", label: "Startup ekipleri" },
  ],

  forWhomEN: [
    { icon: "📋", label: "Active Notion users" },
    { icon: "🏢", label: "Project managers & teams" },
    { icon: "✍️", label: "Content and document creators" },
    { icon: "🎓", label: "Students & academics" },
    { icon: "💼", label: "Remote working professionals" },
    { icon: "🚀", label: "Startup teams" },
  ],

  pricingTR: [
    { plan: "Notion Ücretsiz", price: "$0 / ay",  note: "AI özelliği sınırlı" },
    { plan: "AI Eklenti",      price: "$10 / ay", note: "Mevcut plana eklenir" },
    { plan: "Plus + AI",       price: "$18 / ay", note: "Notion Plus dahil" },
    { plan: "Business + AI",   price: "$25 / ay", note: "Ekip ve yönetici özellikleri" },
  ],

  pricingEN: [
    { plan: "Notion Ücretsiz", price: "$0 / mo",  note: "AI özelliği sınırlı" },
    { plan: "AI Eklenti",      price: "$10 / mo", note: "Added to existing plan" },
    { plan: "Plus + AI",       price: "$18 / mo", note: "Notion Plus included" },
    { plan: "Business + AI",   price: "$25 / mo", note: "Team and admin features" },
  ],

  prosTR: [
    "Mevcut Notion iş akışına sorunsuz entegrasyon",
    "Ekip içi işbirliğiyle güçlü",
    "Notion sayfası içeriğiyle bağlamsal çalışma",
    "Özetleme ve düzenleme görevlerinde çok pratik",
  ],

  prosEN: [
    "Seamless integration with existing Notion workflows",
    "Powerful with team collaboration",
    "Contextual work with Notion page content",
    "Very practical for summarizing and editing tasks",
  ],

  consTR: [
    "Notion kullanmayanlara değer sunmuyor",
    "Standalone AI araç olarak yetersiz kalıyor",
    "Aylık ek ücret gerektiriyor",
    "ChatGPT kadar derine gitmiyor",
  ],

  consEN: [
    "No value for those who don't use Notion",
    "Falls short as a standalone AI tool",
    "Requires an additional monthly fee",
    "Doesn't go as deep as ChatGPT",
  ],

  promptsTR: [
    {
      label: "📝 Toplantı Özeti",
      prompt: "Toplantı notlarını Notion'a yap → Sayfayı seç → AI → 'Bu sayfayı 5 maddede özetle ve aksiyon adımlarını çıkar'",
      output: `Beklened Çıktı:
Özet:
• Q3 hedefleri %87 tamamlandı, eksik kalan: SEO kampanyası
• Yeni müşteri onboardingi için süreç güncellenmesi gerekiyor
• Bütçe revizyonu: Tasarım ekibine +2 freelancer

Aksiyon Adımları:
☐ Ahmet: SEO audit raporunu 15 Mart'a kadar teslim
☐ Selin: Onboarding checklist güncelle`,
    },
    {
      label: "✍️ Blog Taslağı",
      prompt: "Boş Notion sayfası → AI → 'Yapay zeka araçları ve üretkenlik' konusunda 800 kelimelik blog yazısı yaz. Ton: samimi ve bilgilendirici.',",
      output: `Beklened Çıktı:
# Yapay Zeka Araçları Üretkenliğinizi Nasıl Değiştirir?

2026 yılında yapay zeka araçları artık lüks değil, zorunluluk haline geldi. Her gün milyonlarca profesyonel ChatGPT, Notion AI ve Perplexity gibi araçlarla...

[Notion içinde doğrudan düzenlenebilir format]`,
    },
    {
      label: "🌍 İçerik Çevirisi",
      prompt: "Türkçe sayfa → AI → 'Bu içeriği İngilizce'ye çevir, profesyonel ton kullan'",
      output: `Beklened Çıktı:
Türkçe içerik aynı Notion sayfasında veya yeni blokta İngilizce'ye çevrilir. Format korunur, başlıklar ve maddeler yerinde kalır.`,
    },
  ],

  promptsEN: [
    {
      label: "📝 Meeting Summary",
      prompt: "Take meeting notes in Notion → Select the page → AI → 'Summarize this page in 5 bullet points and extract action items'",
      output: `Expected Output:
Summary:
• Q3 targets 87% complete, missing: SEO campaign
• New customer onboarding process needs updating
• Budget revision: +2 freelancers for design team

Action Items:
☐ Alex: Deliver SEO audit report by March 15
☐ Sara: Update onboarding checklist`,
    },
    {
      label: "✍️ Blog Draft",
      prompt: "Blank Notion page → AI → 'Write an 800-word blog post on AI tools and productivity. Tone: friendly and informative.'",
      output: `Expected Output:
# How AI Tools Transform Your Productivity

In 2026, AI tools have moved from luxury to necessity. Every day, millions of professionals are using tools like ChatGPT, Notion AI, and Perplexity to...

[Directly editable format within Notion]`,
    },
    {
      label: "🌍 Content Translation",
      prompt: "English page → AI → 'Translate this content into Spanish, use professional tone'",
      output: `Expected Output:
Content is translated to Spanish on the same Notion page or in new blocks. Formatting is preserved — headings and bullet points stay in place.`,
    },
  ],

  alternativeSlugs: ["chatgpt", "perplexity", "claude"],
};
