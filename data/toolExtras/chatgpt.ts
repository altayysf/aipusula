import type { ToolExtra } from "./types";

export const chatgpt: ToolExtra = {
  longDescTR: `ChatGPT, OpenAI tarafından geliştirilen ve milyonlarca kullanıcının günlük iş akışlarında aktif olarak kullandığı büyük dil modeli (LLM) tabanlı bir yapay zekâ asistanıdır. 2022 yılında kamuya açılan araç, kısa sürede tarihin en hızlı büyüyen uygulamalarından biri haline geldi.

Temel güç noktası, bağlama duyarlı metin üretimidir: e-posta taslağı hazırlamak, karmaşık kavramları sadeleştirmek, kod yazmak ya da beyin fırtınası yapmak gibi çok farklı görevlerde tutarlı ve kaliteli çıktılar üretebilir. GPT-4o modeliyle görsel analiz, dosya yükleme ve internet araması da mümkün hale gelmiştir.

ChatGPT'yi rakiplerinden ayıran en önemli özellik, milyarlarca parametre üzerinde eğitilmiş geniş bilgi tabanı ve güçlü bağlam tutarlılığıdır. Uzun konuşma geçmişini hafızasında tutarak tutarlı yanıtlar verir; farklı ton ve üsluplara kolaylıkla uyum sağlar. Özellikle içerik üretimi, müşteri iletişimi ve kişisel üretkenlik alanlarında zamandan önemli ölçüde tasarruf sağlar.`,

  longDescEN: `ChatGPT is an AI assistant developed by OpenAI, built on large language model (LLM) technology, and actively used by millions in their daily workflows. Launched publicly in 2022, it quickly became one of the fastest-growing applications in history.

Its core strength is context-aware text generation: it produces consistent, high-quality output across a wide range of tasks — drafting emails, simplifying complex concepts, writing code, or brainstorming ideas. With the GPT-4o model, image analysis, file uploads, and web search are also available.

What sets ChatGPT apart is its vast knowledge base trained on billions of parameters and strong contextual consistency. It retains long conversation history for coherent follow-ups and adapts easily to different tones and styles. It saves significant time especially in content creation, customer communication, and personal productivity.`,

  featuresTR: [
    { icon: "✍️", title: "Metin & İçerik Üretimi", desc: "Blog yazısı, sosyal medya metni, ürün açıklaması ve e-posta taslakları saniyeler içinde hazırlanır." },
    { icon: "🧠", title: "Fikir Geliştirme", desc: "Beyin fırtınası, içerik planı ve senaryo denemelerinde güçlü bir düşünce ortağıdır." },
    { icon: "💻", title: "Kod Yazma & Hata Ayıklama", desc: "Python, JavaScript, SQL ve daha fazlasında kod üretir, hataları açıklar ve düzeltir." },
    { icon: "📄", title: "Belge Özetleme", desc: "Uzun raporlar, makaleler veya toplantı notlarını hızla özetler." },
    { icon: "🌐", title: "Çoklu Dil Desteği", desc: "Türkçe dahil 50'den fazla dilde içerik üretir, çevirir ve düzenler." },
    { icon: "🔍", title: "Web Araması (GPT-4o)", desc: "Ücretli planda güncel web içeriklerine erişerek anlık bilgilerle yanıt verebilir." },
  ],

  featuresEN: [
    { icon: "✍️", title: "Text & Content Generation", desc: "Blog posts, social media copy, product descriptions, and email drafts in seconds." },
    { icon: "🧠", title: "Ideation & Brainstorming", desc: "A powerful thinking partner for brainstorming, content plans, and creative scenarios." },
    { icon: "💻", title: "Code Writing & Debugging", desc: "Generates, explains, and fixes code in Python, JavaScript, SQL, and more." },
    { icon: "📄", title: "Document Summarization", desc: "Quickly summarizes long reports, articles, or meeting notes." },
    { icon: "🌐", title: "Multilingual Support", desc: "Generates, translates, and edits content in 50+ languages." },
    { icon: "🔍", title: "Web Search (GPT-4o)", desc: "Paid plan enables real-time web access for up-to-date answers." },
  ],

  forWhomTR: [
    { icon: "✍️", label: "İçerik üreticileri" },
    { icon: "💼", label: "Girişimciler & freelancerlar" },
    { icon: "🎓", label: "Öğrenci & akademisyenler" },
    { icon: "💻", label: "Yazılım geliştiriciler" },
    { icon: "📣", label: "Pazarlama uzmanları" },
    { icon: "🏢", label: "KOBİ & startup ekipleri" },
  ],

  forWhomEN: [
    { icon: "✍️", label: "Content creators" },
    { icon: "💼", label: "Entrepreneurs & freelancers" },
    { icon: "🎓", label: "Students & academics" },
    { icon: "💻", label: "Software developers" },
    { icon: "📣", label: "Marketing professionals" },
    { icon: "🏢", label: "SMBs & startups" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "GPT-4o mini, sınırlı kullanım" },
    { plan: "Plus",     price: "$20 / ay", note: "GPT-4o, dosya yükleme, web araması" },
    { plan: "Team",     price: "$25 / ay", note: "Ekip paylaşımı, yönetici paneli" },
    { plan: "Enterprise", price: "Özel",  note: "Kurumsal güvenlik ve özel modeller" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "GPT-4o mini, limited usage" },
    { plan: "Plus",     price: "$20 / mo", note: "GPT-4o, file uploads, web search" },
    { plan: "Team",     price: "$25 / mo", note: "Team sharing, admin panel" },
    { plan: "Enterprise", price: "Custom",  note: "Enterprise security & custom models" },
  ],

  prosTR: [
    "Geniş bilgi tabanı ve güçlü bağlam tutarlılığı",
    "Ücretsiz planla başlamak mümkün",
    "Sürekli güncellenen model ailesi",
    "Kod, metin, görsel analiz gibi çok modlu yetenekler",
    "Geniş topluluk ve kaynak ekosistemi",
  ],

  prosEN: [
    "Vast knowledge base and strong context consistency",
    "Free plan available to get started",
    "Continuously updated model family",
    "Multimodal: text, code, image analysis",
    "Huge community and resource ecosystem",
  ],

  consTR: [
    "Ücretsiz planda mesaj limiti var",
    "Zaman zaman yanlış bilgi üretebilir (halüsinasyon)",
    "İnternet araması yalnızca ücretli planda",
    "Çok uzun dokümanlarda bağlam sınırı olabilir",
  ],

  consEN: [
    "Message limits on the free plan",
    "Can occasionally hallucinate (produce false info)",
    "Web search only on paid plan",
    "Context window limits on very long documents",
  ],

  promptsTR: [
    {
      label: "📧 Profesyonel E-posta",
      prompt: "Bir pazarlama müdürü gibi davran. Müşteriye gecikmeli teslimat için özür e-postası yaz. Ton: profesyonel ve empatik. 2 farklı versiyon üret.",
      output: `Versiyon 1 — Resmi & Özür Odaklı:
Sayın [Müşteri Adı], siparişinizin teslimatında yaşanan gecikme için içtenlikle özür dileriz. Lojistik süreçlerde yaşanan beklenmedik aksama nedeniyle siparişiniz [yeni tarih] itibarıyla teslim edilecektir.

Versiyon 2 — Sıcak & Çözüm Odaklı:
Merhaba [Ad], bu gecikme için gerçekten üzgünüz. Telafi olarak bir sonraki siparişinize %10 indirim tanımlıyoruz. Anlayışınız için teşekkürler.`,
    },
    {
      label: "📝 Blog İçerik Planı",
      prompt: "SEO uzmanı gibi davran. 'Yapay zeka araçları 2026' konusunda 8 başlıklı blog içerik planı yap. H2/H3 hiyerarşisi kur, her başlık için 1 cümle açıklama ekle.",
      output: `H2: Yapay Zeka Araçları Nedir? — Temel kavramları tanıtan giriş yazısı
H2: En İyi Ücretsiz AI Araçları 2026 — Bütçe dostu alternatiflerin karşılaştırması
  H3: ChatGPT Free vs Gemini Free
  H3: Ücretsiz Görsel Üretim Araçları
H2: AI ile İçerik Üretimi Nasıl Yapılır? — Adım adım workflow rehberi
H2: Kodlama İçin En İyi AI Araçları — Copilot, Cursor ve Replit karşılaştırması`,
    },
    {
      label: "💡 İş Fikri Geliştirme",
      prompt: "İş geliştirme danışmanı gibi davran. Bütçe: 5.000 TL. Hedef: yapay zeka araçlarıyla online hizmet işi kur. 30 günlük aksiyon planı yaz.",
      output: `Hafta 1 — Temel Kurulum:
• ChatGPT Plus ($20) — içerik ve müşteri iletişimi
• Canva (ücretsiz) — görsel üretim
• İlk 3 hizmet paketi: içerik yazarlığı, sosyal medya, CV düzenleme

Hafta 2 — İlk Müşteriler:
• LinkedIn profilini optimize et
• 10 potansiyel müşteriye mesaj at
• 2 ücretsiz referans proje yap`,
    },
  ],

  promptsEN: [
    {
      label: "📧 Professional Email",
      prompt: "Act as a marketing manager. Write an apology email to a customer for a delayed delivery. Tone: professional and empathetic. Generate 2 versions.",
      output: `Version 1 — Formal & Apologetic:
Dear [Customer Name], we sincerely apologize for the delay in delivering your order. Due to an unexpected logistics issue, your order will now arrive by [new date].

Version 2 — Warm & Solution-Focused:
Hi [Name], we're truly sorry for the inconvenience. As a gesture of goodwill, we've applied a 10% discount to your next order. Thank you for your patience.`,
    },
    {
      label: "📝 Blog Content Plan",
      prompt: "Act as an SEO expert. Create an 8-heading blog content plan on 'AI tools 2026'. Use H2/H3 hierarchy with a one-sentence description per heading.",
      output: `H2: What Are AI Tools? — Introductory post covering core concepts and 2026 trends
H2: Best Free AI Tools 2026 — Comparison of budget-friendly alternatives
  H3: ChatGPT Free vs Gemini Free
  H3: Free Image Generation Tools
H2: How to Create Content with AI — Step-by-step workflow guide
H2: Best AI Tools for Coding — Copilot, Cursor, and Replit compared`,
    },
    {
      label: "💡 Business Idea Development",
      prompt: "Act as a business development consultant. Budget: $500. Goal: build an online service business using AI tools. Write a 30-day action plan.",
      output: `Week 1 — Foundation:
• ChatGPT Plus ($20) — content & client communication
• Canva (free) — visual creation
• Define first 3 service packages: copywriting, social media, CV editing

Week 2 — First Clients:
• Optimize your LinkedIn profile
• Message 10 potential clients
• Do 2 free reference projects`,
    },
  ],

  alternativeSlugs: ["claude", "google-gemini", "perplexity"],
};
