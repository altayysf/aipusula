import type { ToolExtra } from "./types";

export const perplexity: ToolExtra = {
  longDescTR: `Perplexity AI, geleneksel arama motorlarının link listesi döndüren yapısına alternatif olarak, kaynaklı özet yanıtlar sunan yapay zekâ destekli bir araştırma asistanıdır. Soruları yanıtlarken kullandığı kaynakları doğrudan alıntılaması, bilgi doğruluğunu takip etmeyi kolaylaştırır.

Platformun en önemli özelliği, gerçek zamanlı web erişimiyle güncel bilgilere ulaşabilmesidir. Güncel haberler, akademik araştırmalar, teknik konular ve hızlı konu özetleme gibi durumlarda ChatGPT veya Claude'a kıyasla önemli avantaj sağlar.

Pro planında Claude, GPT-4o ve kendi modellerini seçebilme imkânı sunan çoklu model desteği de bulunur. Araştırmacılar, gazeteciler, öğrenciler ve bilgi yoğun çalışan herkes için güçlü bir günlük araç olmaya devam etmektedir.`,

  longDescEN: `Perplexity AI is an AI-powered research assistant that, as an alternative to traditional search engines returning link lists, provides sourced summary answers. Its direct citation of sources used when answering questions makes it easy to track information accuracy.

The platform's most important feature is its real-time web access for up-to-date information. It provides a significant advantage over ChatGPT or Claude for current news, academic research, technical topics, and quick topic summarization.

The Pro plan also features multi-model support, allowing you to choose between Claude, GPT-4o, and Perplexity's own models. It continues to be a powerful daily tool for researchers, journalists, students, and anyone working with information-intensive tasks.`,

  featuresTR: [
    { icon: "🔍", title: "Kaynaklı Yanıtlar", desc: "Her bilgiyi kaynak alıntılarıyla destekler, doğrulama kolaylaşır." },
    { icon: "🌐", title: "Gerçek Zamanlı Web Erişimi", desc: "Güncel haberlere ve web içeriklerine anlık erişim." },
    { icon: "🤖", title: "Çoklu Model Desteği", desc: "Pro'da GPT-4o, Claude gibi modelleri seçebilirsin." },
    { icon: "📚", title: "Akademik Mod", desc: "Akademik kaynaklara odaklı araştırma modu." },
    { icon: "📁", title: "Dosya Yükleme", desc: "PDF veya belge yükleyerek içeriğe özel sorular sorabilirsin." },
    { icon: "🔗", title: "Kaynak Keşfi", desc: "İlgili kaynakları ve derinlemesine okuma önerilerini listeler." },
  ],

  featuresEN: [
    { icon: "🔍", title: "Sourced Answers", desc: "Backs every piece of information with source citations for easy verification." },
    { icon: "🌐", title: "Real-Time Web Access", desc: "Instant access to current news and web content." },
    { icon: "🤖", title: "Multi-Model Support", desc: "Pro plan lets you choose GPT-4o, Claude, and more." },
    { icon: "📚", title: "Academic Mode", desc: "Research mode focused on academic sources." },
    { icon: "📁", title: "File Upload", desc: "Upload PDFs or documents to ask content-specific questions." },
    { icon: "🔗", title: "Source Discovery", desc: "Lists related sources and deep-dive reading recommendations." },
  ],

  forWhomTR: [
    { icon: "🔬", label: "Araştırmacılar & akademisyenler" },
    { icon: "📰", label: "Gazeteciler & editörler" },
    { icon: "🎓", label: "Öğrenciler" },
    { icon: "💼", label: "Strateji ve analiz uzmanları" },
    { icon: "💻", label: "Geliştiriciler (teknik araştırma)" },
    { icon: "📈", label: "Yatırımcılar & iş analistleri" },
  ],

  forWhomEN: [
    { icon: "🔬", label: "Researchers & academics" },
    { icon: "📰", label: "Journalists & editors" },
    { icon: "🎓", label: "Students" },
    { icon: "💼", label: "Strategy & analysis professionals" },
    { icon: "💻", label: "Developers (technical research)" },
    { icon: "📈", label: "Investors & business analysts" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "5 Pro araması/gün" },
    { plan: "Pro",      price: "$20 / ay", note: "Sınırsız Pro araması, çoklu model" },
    { plan: "Team",     price: "$40 / ay", note: "Ekip yönetimi ve paylaşımı" },
    { plan: "Enterprise", price: "Özel",  note: "Kurumsal güvenlik ve destek" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "5 Pro araması/gün" },
    { plan: "Pro",      price: "$20 / mo", note: "Sınırsız Pro araması, çoklu model" },
    { plan: "Team",     price: "$40 / mo", note: "Team management and sharing" },
    { plan: "Enterprise", price: "Custom",  note: "Enterprise security and support" },
  ],

  prosTR: [
    "Kaynaklı ve doğrulanabilir yanıtlar",
    "Gerçek zamanlı web erişimi",
    "Akademik araştırma için güçlü",
    "Çoklu model desteği (Pro)",
    "Hızlı ve öz yanıtlar",
  ],

  prosEN: [
    "Sourced and verifiable answers",
    "Real-time web access",
    "Powerful for academic research",
    "Multi-model support (Pro)",
    "Fast and concise answers",
  ],

  consTR: [
    "Uzun ve yaratıcı metin üretiminde sınırlı",
    "Ücretsiz planda günlük Pro araması limiti",
    "ChatGPT kadar çok yönlü değil",
  ],

  consEN: [
    "Limited for long-form creative text generation",
    "Daily Pro search limit on free plan",
    "Not as versatile as ChatGPT",
  ],

  promptsTR: [
    {
      label: "🔍 Güncel Araştırma",
      prompt: "Türkiye'deki yapay zeka yatırımları 2025-2026 döneminde nasıl değişti? En güncel verileri kaynaklarıyla getir.",
      output: `Beklened Çıktı:
[Kaynak 1: TechCrunch, 2025] Türkiye'de AI startuplarına yapılan yatırımlar 2025'te %45 artışla 320 milyon dolara ulaştı.
[Kaynak 2: Bloomberg, 2026] Yerli AI şirketleri yurt dışı fon çekme konusunda rekor kırdı...

Her cümle kaynakla eşleştirilir, doğrulama çok kolay.`,
    },
    {
      label: "📚 Akademik Özet",
      prompt: "Büyük dil modellerinde 'hallucination' (halüsinasyon) sorununu açıkla. Son 2 yıldaki araştırmaları özetle. [Academic kaynaklar tercihli]",
      output: `Beklened Çıktı:
Halüsinasyon, LLM'lerin gerçek olmayan ancak mantıklı görünen bilgi üretmesidir.
[arXiv, 2024] Araştırmacılar RAG (Retrieval-Augmented Generation) yöntemiyle halüsinasyon oranını %40 azalttı.
[Nature MI, 2025] Chain-of-thought prompting ile doğruluk %23 artış gösterdi...`,
    },
    {
      label: "💼 Pazar Analizi",
      prompt: "ChatGPT'nin rakipleri kimler? 2026'da AI asistan pazar paylarını ve öne çıkan gelişmeleri kaynaklı özetle.",
      output: `Beklened Çıktı:
[Statista, 2026] ChatGPT %45, Google Gemini %28, Claude %15 pazar payıyla öne çıkıyor.
[TechRadar, 2026] Gemini'nin Google Workspace entegrasyonu kurumsal segmentte hızlı büyüme sağladı...`,
    },
  ],

  promptsEN: [
    {
      label: "🔍 Current Research",
      prompt: "How have AI investments in the US changed in the 2025–2026 period? Bring the most current data with sources.",
      output: `Expected Output:
[Source 1: TechCrunch, 2025] AI startup investments in the US rose 38% in 2025 to $85 billion.
[Source 2: Bloomberg, 2026] Domestic AI companies broke records in attracting foreign investment...

Each sentence is matched with its source — very easy to verify.`,
    },
    {
      label: "📚 Academic Summary",
      prompt: "Explain the 'hallucination' problem in large language models. Summarize research from the last 2 years. [Academic sources preferred]",
      output: `Expected Output:
Hallucination refers to LLMs producing information that is false but appears plausible.
[arXiv, 2024] Researchers reduced hallucination rate by 40% using RAG (Retrieval-Augmented Generation).
[Nature MI, 2025] Chain-of-thought prompting showed a 23% accuracy improvement...`,
    },
    {
      label: "💼 Market Analysis",
      prompt: "Who are ChatGPT's competitors? Summarize AI assistant market shares and key developments in 2026 with sources.",
      output: `Expected Output:
[Statista, 2026] ChatGPT leads with 45%, Google Gemini at 28%, Claude at 15%.
[TechRadar, 2026] Gemini's Google Workspace integration is driving rapid growth in the enterprise segment...`,
    },
  ],

  alternativeSlugs: ["chatgpt", "claude", "google-gemini"],
};
