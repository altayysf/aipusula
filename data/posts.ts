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
    slug: "25-ucretsiz-yapay-zeka-araci-2026",
    dateISO: "2026-02-01",
    categoryTR: "Liste",
    categoryEN: "List",
    titleTR: "25 Ücretsiz Yapay Zekâ Aracı (2026)",
    titleEN: "25 Free AI Tools (2026)",
    excerptTR:
      "Yazı, görsel, video, ses ve üretkenlik için ücretsiz/deneme sunan popüler araçların derli toplu listesi.",
    excerptEN:
      "A curated list of popular tools offering free tiers or trials for text, image, video, audio, and productivity.",
    contentTR: [
      "Bu listede günlük kullanımda en çok işe yarayan AI araçlarını tek sayfada topladım. Amaç: Hızlıca karşılaştırıp ihtiyacına uygun aracı seçebilmen.",
      "Araçları kategoriye göre ayırdım: Yazı, Görsel, Video, Ses, Kod ve Üretkenlik. Her biri için kısa kullanım önerileri ekledim.",
      "Not: Ücret planları zamanla değişebilir. Resmi sayfadan güncel bilgiyi kontrol etmeni öneririm.",
    ],
    contentEN: [
      "In this post, I gathered practical AI tools you can actually use day-to-day. The goal: help you compare quickly and pick the right one.",
      "Tools are grouped by category: Text, Image, Video, Audio, Code, and Productivity. I also included quick usage tips.",
      "Note: Pricing changes over time—always double-check the official pages for the latest info.",
    ],
    cover: "/blog/ai-tools-2024.jpg",
    readingMinutes: 4,
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
