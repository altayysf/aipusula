export type BlogLang = "tr" | "en";

export type BlogPost = {
  slug: string;
  dateISO: string; // "2026-02-01"
  categoryTR: string;
  categoryEN: string;
  titleTR: string;
  titleEN: string;
  excerptTR: string;
  excerptEN: string;
  contentTR: string[]; // paragraf paragraf
  contentEN: string[];
  cover: string; // public/... -> "/blog/xxx.jpg"
  readingMinutes?: number;
  featured?: boolean;
};

export const posts: BlogPost[] = [
  {
  slug: "en-iyi-ucretsiz-yapay-zeka-araclari-2026",
  dateISO: "2026-02-01",
  categoryTR: "Liste",
  categoryEN: "List",

  titleTR: "2026'da Kullanabileceğiniz En İyi Ücretsiz Yapay Zekâ Araçları",
  titleEN: "Best Free AI Tools You Can Use in 2026",

  excerptTR:
    "Metin yazma, görsel üretme, video oluşturma, kodlama ve üretkenlik için ücretsiz yapay zekâ araçlarının kapsamlı ve güncel listesi.",

  excerptEN:
    "A comprehensive and updated list of free AI tools for writing, image generation, video creation, coding, and productivity.",

  contentTR: [
    "Yapay zekâ artık yalnızca büyük şirketlerin kullandığı karmaşık bir teknoloji değil. Günümüzde herkes ücretsiz yapay zekâ araçları sayesinde içerik üretebiliyor, tasarım yapabiliyor, kod yazabiliyor ve işlerini çok daha hızlı tamamlayabiliyor.",

    "Bu yazıda 2026 yılında ücretsiz olarak kullanabileceğin en iyi yapay zekâ araçlarını tek bir yerde topladım. Araçları kullanım alanlarına göre gruplandırdım ve her biri için kısa açıklamalar ekledim.",

    "### Metin ve İçerik Üretimi İçin AI Araçları",

    "- ChatGPT: Blog yazıları, sosyal medya içerikleri, e-postalar ve fikir üretimi için en popüler araçlardan biridir.",
    "- Google Gemini: Araştırma, özet çıkarma ve bilgi tabanlı içerikler için güçlü bir alternatiftir.",
    "- Poe: Birden fazla yapay zekâ modelini tek platformda deneme imkânı sunar.",

    "### Görsel Oluşturma İçin AI Araçları",

    "- Bing Image Creator (DALL·E): Metinden görsel üretir.",
    "- Leonardo AI: Oyun ve illüstrasyon tasarımlarında öne çıkar.",
    "- Canva AI: Tasarım bilgisi olmadan profesyonel görseller oluşturmayı sağlar.",

    "### Video Üretimi İçin AI Araçları",

    "- Pictory: Metni otomatik olarak videoya dönüştürür.",
    "- CapCut AI: Video düzenleme, altyazı ve efekt işlemleri için idealdir.",

    "### Kodlama İçin AI Araçları",

    "- Codeium: Ücretsiz kod tamamlama ve hata düzeltme aracı.",
    "- GitHub Copilot: Sınırlı ücretsiz sürümü ile kod yazmayı hızlandırır.",

    "### Üretkenlik ve Günlük İşler",

    "- Notion AI: Not alma, özet çıkarma ve planlama.",
    "- Otter AI: Toplantıları yazıya döker.",

    "Ücretsiz yapay zekâ araçlarını seçerken ücretsiz plan sınırlarını, gizlilik politikasını ve Türkçe destek durumunu mutlaka kontrol etmelisin.",

    "Sonuç olarak bu araçlar, bütçe ayırmadan dijital dünyada üretken olmak isteyen herkes için büyük avantaj sağlar."
  ],

  contentEN: [
    "Artificial intelligence is no longer limited to big tech companies. Today, anyone can create content, design visuals, write code, and automate tasks using free AI tools.",

    "In this article, I compiled the best free AI tools you can use in 2026. Tools are grouped by category with short explanations.",

    "### Text & Content Creation Tools",

    "- ChatGPT: Writing blogs, social posts, and emails.",
    "- Google Gemini: Research and summaries.",
    "- Poe: Access multiple AI models in one place.",

    "### Image Generation Tools",

    "- Bing Image Creator (DALL·E).",
    "- Leonardo AI.",
    "- Canva AI.",

    "### Video Tools",

    "- Pictory.",
    "- CapCut AI.",

    "### Coding Tools",

    "- Codeium.",
    "- GitHub Copilot.",

    "### Productivity Tools",

    "- Notion AI.",
    "- Otter AI.",

    "Always check free plan limitations and privacy policies before choosing a tool.",

    "These tools help you stay productive without spending money."
  ],

  cover: "/blog/ai-tools-2026.jpg",
  readingMinutes: 5,
  featured: true,
  },
  {
    slug: "chatgpt-alternatifleri-en-iyi-chatbotlar",
    dateISO: "2026-02-01",
    categoryTR: "İnceleme",
    categoryEN: "Review",
    titleTR: "ChatGPT Alternatifleri: En İyi 9 Yapay Zekâ Chatbotu",
    titleEN: "ChatGPT Alternatives: 9 Best AI Chatbots",
    excerptTR:
      "Claude, Gemini, Perplexity ve daha fazlası… Hangi senaryoda hangisi daha iyi çalışır?",
    excerptEN:
      "Claude, Gemini, Perplexity, and more… which one fits which use case?",
    contentTR: [
      "ChatGPT güçlü bir genel amaç asistanı ama her kullanım senaryosunda tek seçenek değil. Bu yazıda en iyi alternatifleri ve hangi işte parladıklarını özetliyorum.",
      "Örnek: uzun belge analizi için Claude; kaynaklı araştırma için Perplexity; Google ekosistemiyle iş için Gemini gibi…",
      "Seçim yaparken 3 şeye bak: çıktı kalitesi, hız/akış, fiyatlandırma. Hepsi aynı anda mükemmel olmuyor.",
    ],
    contentEN: [
      "ChatGPT is a strong general-purpose assistant, but it’s not the only option for every workflow. Here are top alternatives and where they shine.",
      "Example: Claude for long-doc analysis; Perplexity for sourced research; Gemini for Google-first workflows.",
      "When choosing, focus on: output quality, speed/UX, and pricing. You rarely get perfect scores across all three.",
    ],
    cover: "/blog/chatgpt-alternatives.jpg",
    readingMinutes: 5,
    featured: true,
  },
  {
    slug: "en-iyi-gorsel-olusturucular",
    dateISO: "2026-02-01",
    categoryTR: "Liste",
    categoryEN: "List",
    titleTR: "En İyi Yapay Zekâ Görsel Oluşturucular",
    titleEN: "Best AI Image Generators",
    excerptTR:
      "DALL·E’den Midjourney’e: kalite, hız ve stil kontrolü açısından en iyi seçenekler.",
    excerptEN:
      "From DALL·E to Midjourney: the best options for quality, speed, and style control.",
    contentTR: [
      "Görsel üretimde asıl farkı yaratan şey: prompt disiplini + modelin stil gücü. Aynı istemi 2–3 farklı araçta denemek genelde en iyi sonuç veriyor.",
      "Bu yazıda hem hızlı içerik üretimine uygun araçları hem de stil/kalite odaklı seçenekleri sıraladım.",
      "Bonus ipucu: sonuçları tutarlı yapmak için kendi “prompt şablonunu” oluştur.",
    ],
    contentEN: [
      "In image generation, the real difference comes from prompt discipline + the model’s stylistic strength. Testing the same prompt across 2–3 tools often yields the best outcome.",
      "This post covers both fast content-ready tools and higher control/style-focused options.",
      "Bonus tip: build your own prompt template for consistent results.",
    ],
    cover: "/blog/best-image-generators.jpg",
    readingMinutes: 4,
    featured: false,
  },
];

// yardımcı: tarihe göre sırala
export function getPostsSorted() {
  return [...posts].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
}
