import type { ToolExtra } from "./types";

export const google_gemini: ToolExtra = {
  longDescTR: `Google Gemini, Google DeepMind tarafından geliştirilen ve Google'ın geniş ekosistemiyle derin entegrasyona sahip yapay zekâ asistanıdır. Gmail, Google Docs, Drive ve Search gibi ürünlerle native entegrasyonu sayesinde mevcut iş akışlarına kolayca dahil edilebilir.

Gemini'nin en güçlü özelliklerinden biri, multimodal yeteneğidir: metin, görsel, ses ve video içeriklerini aynı anda anlayıp işleyebilir. Bu özellik, özellikle çoklu ortam içerikleriyle çalışan ekipler için büyük avantaj sağlar.

Google'ın arama altyapısıyla desteklenen bilgi tabanı sayesinde güncel bilgilere erişim konusunda rakiplerine kıyasla avantajlıdır. Özellikle araştırma, özetleme ve Google Workspace entegrasyonunu kullanan kurumsal ekipler için öne çıkan bir tercih olmaya devam etmektedir.`,

  longDescEN: `Google Gemini is an AI assistant developed by Google DeepMind with deep integration into Google's broad ecosystem. Its native integration with Gmail, Google Docs, Drive, and Search makes it easy to incorporate into existing workflows.

One of Gemini's strongest features is its multimodal capability: it can understand and process text, images, audio, and video simultaneously. This is a major advantage for teams working with multimedia content.

Backed by Google's search infrastructure, Gemini has an edge over competitors when it comes to accessing up-to-date information. It remains a standout choice especially for research, summarization, and enterprise teams leveraging Google Workspace.`,

  featuresTR: [
    { icon: "🔗", title: "Google Ekosistemi Entegrasyonu", desc: "Gmail, Docs, Drive ve Search ile native entegrasyon sağlar." },
    { icon: "👁️", title: "Multimodal Anlama", desc: "Metin, görsel, ses ve video içeriklerini aynı anda işleyebilir." },
    { icon: "🔍", title: "Güncel Bilgi Erişimi", desc: "Google arama altyapısıyla güncel bilgilere kolayca ulaşır." },
    { icon: "✍️", title: "İçerik & Metin Üretimi", desc: "Taslak hazırlama, özetleme ve yeniden yazma görevlerinde etkilidir." },
    { icon: "📊", title: "Veri Analizi", desc: "Google Sheets ile entegre çalışarak veri analizini hızlandırır." },
    { icon: "🌐", title: "Geniş Dil Desteği", desc: "Türkçe dahil çok sayıda dilde yüksek kaliteli çıktı üretir." },
  ],

  featuresEN: [
    { icon: "🔗", title: "Google Ecosystem Integration", desc: "Native integration with Gmail, Docs, Drive, and Search." },
    { icon: "👁️", title: "Multimodal Understanding", desc: "Processes text, images, audio, and video simultaneously." },
    { icon: "🔍", title: "Real-Time Web Access", desc: "Leverages Google's search infrastructure for current information." },
    { icon: "✍️", title: "Content & Text Generation", desc: "Effective at drafting, summarizing, and rewriting." },
    { icon: "📊", title: "Data Analysis", desc: "Works natively with Google Sheets to speed up analysis." },
    { icon: "🌐", title: "Broad Language Support", desc: "High-quality output in many languages including English." },
  ],

  forWhomTR: [
    { icon: "🏢", label: "Google Workspace kullanan ekipler" },
    { icon: "🔍", label: "Araştırmacılar" },
    { icon: "✍️", label: "İçerik üreticileri" },
    { icon: "📊", label: "Veri analistleri" },
    { icon: "🎓", label: "Öğrenci & eğitimciler" },
    { icon: "💼", label: "Profesyoneller" },
  ],

  forWhomEN: [
    { icon: "🏢", label: "Teams using Google Workspace" },
    { icon: "🔍", label: "Researchers" },
    { icon: "✍️", label: "Content creators" },
    { icon: "📊", label: "Data analysts" },
    { icon: "🎓", label: "Students & educators" },
    { icon: "💼", label: "Professionals" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "Gemini 1.5 Flash, cömert limit" },
    { plan: "Advanced", price: "$20 / ay", note: "Gemini 1.5 Pro, Google One dahil" },
    { plan: "Business", price: "$30 / ay", note: "Workspace entegrasyonu" },
    { plan: "Enterprise", price: "Özel",  note: "Kurumsal güvenlik ve destek" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "Gemini 1.5 Flash, cömert limit" },
    { plan: "Advanced", price: "$20 / mo", note: "Gemini 1.5 Pro, Google One included" },
    { plan: "Business", price: "$30 / mo", note: "Workspace integration" },
    { plan: "Enterprise", price: "Custom",  note: "Enterprise security and support" },
  ],

  prosTR: [
    "Google ürünleriyle mükemmel entegrasyon",
    "Ücretsiz planda cömert kullanım limiti",
    "Güncel web bilgisine erişim",
    "Güçlü multimodal yetenekler",
    "Google Drive ile doğrudan çalışma",
  ],

  prosEN: [
    "Excellent integration with Google products",
    "Generous usage limits on free plan",
    "Real-time web access",
    "Strong multimodal capabilities",
    "Direct Google Drive integration",
  ],

  consTR: [
    "Google ekosistemi dışında avantajı azalıyor",
    "Bazı görevlerde ChatGPT kadar yaratıcı değil",
    "Görsel üretimi sınırlı",
  ],

  consEN: [
    "Advantage diminishes outside the Google ecosystem",
    "Less creative than ChatGPT in some tasks",
    "Limited image generation",
  ],

  promptsTR: [
    {
      label: "📧 Gmail Taslak Hazırlama",
      prompt: "Gmail'de kullanmak üzere bir iş ortağına proje güncelleme e-postası yaz. Ton: profesyonel ama samimi. Madde madde gelişmeleri listele.",
      output: `Konu: [Proje Adı] — Haftalık Güncelleme

Merhaba [Ad],

Bu hafta projedeki gelişmeleri paylaşmak istedim:

✅ Tamamlananlar:
• Kullanıcı araştırması raporu finalize edildi
• Tasarım wireframe'leri onaylandı

🔄 Devam Edenler:
• Backend API geliştirmesi (%60 tamamlandı)
• Kullanıcı testleri planlaması

📅 Önümüzdeki Hafta:
• İlk beta sürümü teslimi hedefleniyor

Görüşlerinizi bekliyorum. İyi çalışmalar!`,
    },
    {
      label: "📊 Veri Özeti",
      prompt: "Aşağıdaki satış verilerini analiz et ve 3 temel bulguyu madde madde listele. Sonra yöneticiye sunmak için kısa bir özet paragrafı yaz.",
      output: `Temel Bulgular:
1. Q3 satışları bir önceki çeyreğe göre %18 arttı
2. En yüksek büyüme ürün kategorisinde online kanaldan geldi
3. Müşteri başına ortalama sipariş değeri 245 TL'ye yükseldi

Yönetici Özeti:
Üçüncü çeyrekte güçlü bir performans sergilendi. Dijital kanalların artan katkısı ve sepet büyüklüğündeki artış, yıl sonu hedeflerine ulaşma konusunda olumlu sinyaller vermektedir.`,
    },
    {
      label: "🔍 Araştırma Özeti",
      prompt: "Yapay zeka ve eğitim sektörü hakkında araştırma yap. 2025–2026 trendlerini 5 maddede özetle.",
      output: `2025–2026 AI & Eğitim Trendleri:
1. Kişiselleştirilmiş öğrenme: AI, her öğrencinin hızına göre içerik uyarlıyor
2. Otomatik değerlendirme araçları yaygınlaşıyor
3. Dil bariyerleri AI çeviri ile azalıyor
4. Öğretmen iş yükü %30'a kadar azalabiliyor
5. Etik ve telif hakkı tartışmaları gündemin üst sıralarında`,
    },
  ],

  promptsEN: [
    {
      label: "📧 Gmail Draft",
      prompt: "Write a project update email to a business partner for use in Gmail. Tone: professional but friendly. List updates as bullet points.",
      output: `Subject: [Project Name] — Weekly Update

Hi [Name],

Here's a quick update on the project this week:

✅ Completed:
• User research report finalized
• Design wireframes approved

🔄 In Progress:
• Backend API development (60% done)
• User testing planning

📅 Next Week:
• First beta delivery targeted

Looking forward to your feedback!`,
    },
    {
      label: "📊 Data Summary",
      prompt: "Analyze the following sales data and list 3 key findings. Then write a short summary paragraph for a manager.",
      output: `Key Findings:
1. Q3 sales increased 18% compared to the previous quarter
2. Highest growth came from the online channel in the product category
3. Average order value per customer rose to $85

Manager Summary:
Strong performance was recorded in the third quarter. The growing contribution of digital channels and higher basket values send positive signals for achieving year-end targets.`,
    },
    {
      label: "🔍 Research Summary",
      prompt: "Research AI and the education sector. Summarize 2025–2026 trends in 5 bullet points.",
      output: `2025–2026 AI & Education Trends:
1. Personalized learning: AI adapts content to each student's pace
2. Automated assessment tools becoming widespread
3. Language barriers reduced via AI translation
4. Teacher workload could decrease by up to 30%
5. Ethics and copyright debates remain at the top of the agenda`,
    },
  ],

  alternativeSlugs: ["chatgpt", "claude", "perplexity"],
};
