import type { ToolExtra } from "./types";

export const quillbot: ToolExtra = {
  longDescTR: `QuillBot, metin yeniden yazma (parafraz), özetleme ve dilbilgisi denetimi konusunda uzmanlaşmış bir yapay zekâ yazı aracıdır. Özellikle akademik yazı, içerik üretimi ve çeşitli amaçlarla mevcut metinleri yeniden ifade etme ihtiyacı olan kullanıcılar arasında yaygın kullanılan bir platformdur.

Parafraz aracının sunduğu 8 farklı mod (Standard, Fluency, Formal, Academic, Simple, Creative, Expand, Shorten), kullanıcıların ihtiyaca göre farklı yeniden yazma stilleri arasından seçim yapmasına olanak tanır. Bu esneklik, QuillBot'u çok yönlü bir yazı asistanına dönüştürür.

Özetleme özelliği, uzun akademik makaleler veya raporları kısa sürede öz haline getirmek için güçlü bir araçtır. Chrome uzantısı sayesinde web'deki herhangi bir metni doğrudan parafraz etmek de mümkündür.`,

  longDescEN: `QuillBot is an AI writing tool specializing in paraphrasing, summarizing, and grammar checking. It is widely used among users who need to restate existing texts for academic writing, content creation, or other purposes.

The paraphrase tool's 8 different modes (Standard, Fluency, Formal, Academic, Simple, Creative, Expand, Shorten) allow users to choose between different rewriting styles depending on their needs. This flexibility makes QuillBot a versatile writing assistant.

The summarization feature is a powerful tool for quickly condensing long academic papers or reports. The Chrome extension also makes it possible to paraphrase any text on the web directly.`,

  featuresTR: [
    { icon: "🔄", title: "8 Parafraz Modu", desc: "Standart, akademik, yaratıcı, kısa, uzun gibi modlar arasından seçim yap." },
    { icon: "📝", title: "Özetleme", desc: "Uzun metinleri madde madde veya paragraf olarak özetler." },
    { icon: "✅", title: "Dilbilgisi Denetimi", desc: "İngilizce dilbilgisi hatalarını tespit eder ve düzeltir." },
    { icon: "🌍", title: "Çeviri", desc: "30'dan fazla dilde çeviri özelliği sunar." },
    { icon: "🔌", title: "Chrome Uzantısı", desc: "Web'deki metinleri doğrudan parafraz etme imkânı." },
    { icon: "🤝", title: "Word & Google Docs", desc: "Microsoft Word ve Google Docs entegrasyonu." },
  ],

  featuresEN: [
    { icon: "🔄", title: "8 Paraphrase Modes", desc: "Choose from Standard, Academic, Creative, Short, Long, and more." },
    { icon: "📝", title: "Summarization", desc: "Summarizes long texts as bullet points or paragraphs." },
    { icon: "✅", title: "Grammar Check", desc: "Detects and corrects English grammar errors." },
    { icon: "🌍", title: "Translation", desc: "Translation feature in 30+ languages." },
    { icon: "🔌", title: "Chrome Extension", desc: "Paraphrase any text on the web directly." },
    { icon: "🤝", title: "Word & Google Docs", desc: "Integration with Microsoft Word and Google Docs." },
  ],

  forWhomTR: [
    { icon: "🎓", label: "Öğrenci & akademisyenler" },
    { icon: "✍️", label: "İçerik yazarları" },
    { icon: "🌍", label: "İngilizce ikinci dil kullananlar" },
    { icon: "📰", label: "Editörler & metin yazarları" },
    { icon: "💼", label: "Profesyonel yazışmalar yapanlar" },
    { icon: "🏪", label: "E-ticaret ürün açıklaması yazanlar" },
  ],

  forWhomEN: [
    { icon: "🎓", label: "Students & academics" },
    { icon: "✍️", label: "Content writers" },
    { icon: "🌍", label: "Non-native English speakers" },
    { icon: "📰", label: "Editors & copywriters" },
    { icon: "💼", label: "Professional correspondence writers" },
    { icon: "🏪", label: "E-commerce product description writers" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "125 kelime limit, 3 parafraz modu" },
    { plan: "Premium",  price: "$9.95 / ay", note: "Sınırsız, tüm modlar, plagiarism" },
    { plan: "Premium+", price: "$15.95 / ay", note: "+ AI Humanizer dahil" },
    { plan: "Teams",    price: "$7.50 / ay", note: "Kişi başına, ekip planı" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "125 kelime limit, 3 parafraz modu" },
    { plan: "Premium",  price: "$9.95 / mo", note: "Sınırsız, tüm modlar, plagiarism" },
    { plan: "Premium+", price: "$15.95 / mo", note: "+ AI Humanizer dahil" },
    { plan: "Teams",    price: "$7.50 / mo", note: "Kişi başına, ekip planı" },
  ],

  prosTR: [
    "8 farklı parafraz modu esneklik sağlıyor",
    "Ücretsiz planda temel kullanım mümkün",
    "Akademik yazı için güçlü",
    "Chrome uzantısı çok pratik",
  ],

  prosEN: [
    "8 paraphrase modes provide flexibility",
    "Basic use possible on free plan",
    "Strong for academic writing",
    "Chrome extension is very practical",
  ],

  consTR: [
    "Ücretsiz planda kelime limiti kısıtlı",
    "Türkçe desteği zayıf",
    "Çok özgün veya yaratıcı içerik üretmek için ideal değil",
  ],

  consEN: [
    "Word limit on free plan is restrictive",
    "Weak support for non-English languages",
    "Not ideal for producing highly original or creative content",
  ],

  promptsTR: [
    {
      label: "🔄 Akademik Parafraz",
      prompt: "Metni yapıştır → Mod: Academic → Paraphrase → Eş anlamlı kelime alternatiflerini manuel ayarla → Kopyala",
      output: `Orijinal: 'AI tools are changing how people work and communicate.'
Academic Mod: 'Artificial intelligence applications are fundamentally transforming contemporary professional workflows and interpersonal communication paradigms.'

İpucu: Sarı vurgulanan kelimelere tıklayarak alternatifleri görebilirsin.`,
    },
    {
      label: "📝 Makale Özeti",
      prompt: "Summarizer'ı aç → Makale metnini yapıştır (max 6.000 kelime) → Anahtar cümleler modu → Özetle",
      output: `Beklened Çıktı (madde maddeli özet):
• Yapay zeka sektörüne 2025'te küresel yatırım 150 milyar dolara ulaştı
• Sağlık ve eğitim sektörü en hızlı büyüyen AI uygulama alanları
• Düzenleyici çerçeveler hâlâ teknolojinin gerisinde
• İş gücü dönüşümü beklentilerin üzerinde gerçekleşiyor`,
    },
    {
      label: "✏️ Yeniden Yazma Modları",
      prompt: "Aynı cümleyi 3 farklı modda dene: Standard → Formal → Creative",
      output: `Standard: 'AI tools help people work more efficiently.'
Formal: 'Artificial intelligence solutions facilitate enhanced operational efficiency among professionals.'
Creative: 'In the age of intelligent machines, productivity finds its wings through AI-powered companions.'`,
    },
  ],

  promptsEN: [
    {
      label: "🔄 Academic Paraphrasing",
      prompt: "Paste text → Mode: Academic → Paraphrase → Manually adjust synonym alternatives → Copy",
      output: `Original: 'AI tools are changing how people work and communicate.'
Academic Mode: 'Artificial intelligence applications are fundamentally transforming contemporary professional workflows and interpersonal communication paradigms.'

Tip: Click on yellow-highlighted words to see synonym alternatives.`,
    },
    {
      label: "📝 Article Summary",
      prompt: "Open Summarizer → Paste article text (max 6,000 words) → Key Sentences mode → Summarize",
      output: `Expected Output (bullet summary):
• Global AI sector investment reached $150 billion in 2025
• Healthcare and education are the fastest-growing AI application areas
• Regulatory frameworks still lag behind technology
• Workforce transformation is exceeding expectations`,
    },
    {
      label: "✏️ Rewriting Modes",
      prompt: "Try the same sentence in 3 different modes: Standard → Formal → Creative",
      output: `Standard: 'AI tools help people work more efficiently.'
Formal: 'Artificial intelligence solutions facilitate enhanced operational efficiency among professionals.'
Creative: 'In the age of intelligent machines, productivity finds its wings through AI-powered companions.'`,
    },
  ],

  alternativeSlugs: ["grammarly", "chatgpt", "claude"],
};
