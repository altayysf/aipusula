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

    "Metin ve İçerik Üretimi İçin AI Araçları",

    "- ChatGPT: Blog yazıları, sosyal medya içerikleri, e-postalar ve fikir üretimi için en popüler araçlardan biridir.",
    "- Google Gemini: Araştırma, özet çıkarma ve bilgi tabanlı içerikler için güçlü bir alternatiftir.",
    "- Poe: Birden fazla yapay zekâ modelini tek platformda deneme imkânı sunar.",

    "Görsel Oluşturma İçin AI Araçları",

    "- Bing Image Creator (DALL·E): Metinden görsel üretir.",
    "- Leonardo AI: Oyun ve illüstrasyon tasarımlarında öne çıkar.",
    "- Canva AI: Tasarım bilgisi olmadan profesyonel görseller oluşturmayı sağlar.",

    "Video Üretimi İçin AI Araçları",

    "- Pictory: Metni otomatik olarak videoya dönüştürür.",
    "- CapCut AI: Video düzenleme, altyazı ve efekt işlemleri için idealdir.",

    "Kodlama İçin AI Araçları",

    "- Codeium: Ücretsiz kod tamamlama ve hata düzeltme aracı.",
    "- GitHub Copilot: Sınırlı ücretsiz sürümü ile kod yazmayı hızlandırır.",

    "Üretkenlik ve Günlük İşler",

    "- Notion AI: Not alma, özet çıkarma ve planlama.",
    "- Otter AI: Toplantıları yazıya döker.",

    "Ücretsiz yapay zekâ araçlarını seçerken ücretsiz plan sınırlarını, gizlilik politikasını ve Türkçe destek durumunu mutlaka kontrol etmelisin.",

    "Sonuç olarak bu araçlar, bütçe ayırmadan dijital dünyada üretken olmak isteyen herkes için büyük avantaj sağlar."
  ],

  contentEN: [
    "Artificial intelligence is no longer limited to big tech companies. Today, anyone can create content, design visuals, write code, and automate tasks using free AI tools.",

    "In this article, I compiled the best free AI tools you can use in 2026. Tools are grouped by category with short explanations.",

    "Text & Content Creation Tools",

    "- ChatGPT: Writing blogs, social posts, and emails.",
    "- Google Gemini: Research and summaries.",
    "- Poe: Access multiple AI models in one place.",

    "Image Generation Tools",

    "- Bing Image Creator (DALL·E).",
    "- Leonardo AI.",
    "- Canva AI.",

    "Video Tools",

    "- Pictory.",
    "- CapCut AI.",

    "Coding Tools",

    "- Codeium.",
    "- GitHub Copilot.",

    "Productivity Tools",

    "- Notion AI.",
    "- Otter AI.",

    "Always check free plan limitations and privacy policies before choosing a tool.",

    "These tools help you stay productive without spending money."
  ],

  cover: "/blog/ai-tools-2026.jpg",
  readingMinutes: 3,
  featured: true,
  },

  {
  slug: "chatgpt-alternatifleri-en-iyi-chatbotlar",
  dateISO: "2026-02-01",
  categoryTR: "İnceleme",
  categoryEN: "Review",

  titleTR: "ChatGPT Alternatifleri (2026): En İyi 9 Yapay Zekâ Chatbotu Karşılaştırması",
  titleEN: "ChatGPT Alternatives (2026): 9 Best AI Chatbots Compared",

  excerptTR:
    "Claude, Gemini, Perplexity ve daha fazlası… Hangi yapay zekâ chatbotu hangi iş için daha uygun? Kapsamlı karşılaştırma rehberi.",

  excerptEN:
    "Claude, Gemini, Perplexity, and more… which AI chatbot is best for each use case? A practical comparison guide.",

  contentTR: [
    "ChatGPT günümüzde en popüler yapay zekâ sohbet botlarından biri olsa da, her kullanım senaryosu için en iyi seçenek olmayabilir. Bazı araçlar uzun belgeleri analiz etmede daha başarılıyken, bazıları araştırma yapma veya kod yazma konusunda öne çıkar.",

    "Bu yazıda 2026 yılında kullanabileceğin en iyi ChatGPT alternatiflerini, güçlü ve zayıf yönleriyle birlikte inceliyoruz. Böylece ihtiyacına en uygun chatbotu kolayca seçebilirsin.",

    "1. Claude (Anthropic)",
    "Uzun dokümanları okuma, özetleme ve analiz etme konusunda çok güçlüdür. Akademik çalışmalar ve raporlar için idealdir.",

    "2. Google Gemini",
    "Google tarafından geliştirilen Gemini, arama motoru entegrasyonu sayesinde bilgi odaklı sorularda başarılıdır.",

    "3. Perplexity AI",
    "Cevaplarını kaynak göstererek sunar. Araştırma ve doğrulama gerektiren işler için uygundur.",

    "4. Microsoft Copilot",
    "Word, Excel ve PowerPoint gibi Microsoft araçlarıyla entegre çalışır.",

    "5. Poe",
    "Tek platformda birden fazla yapay zekâ modelini kullanma imkânı sunar.",

    "6. Jasper AI",
    "Pazarlama metinleri ve reklam içerikleri üretmek için tasarlanmıştır.",

    "7. Writesonic",
    "Blog yazıları, ürün açıklamaları ve sosyal medya içerikleri için idealdir.",

    "8. YouChat",
    "Arama motoru destekli sohbet deneyimi sunar.",

    "9. Character AI",
    "Rol yapma, hikâye anlatımı ve eğlence odaklı sohbetler için popülerdir.",

    "ChatGPT alternatifi seçerken şu kriterleri göz önünde bulundurmalısın: çıktı kalitesi, hız, ücretsiz plan sınırları ve Türkçe destek durumu.",

    "Sonuç olarak, tek bir en iyi chatbot yoktur. En iyi seçenek, senin kullanım amacına en uygun olandır."
  ],

  contentEN: [
    "ChatGPT is one of the most popular AI chatbots, but it is not always the best option for every task. Some tools excel at long-document analysis, while others are better for research or coding.",

    "Here are the best ChatGPT alternatives you can use in 2026 and what they are best at.",

    "1. Claude (Anthropic)",
    "Excellent for long document reading and summarization.",

    "2. Google Gemini",
    "Strong at knowledge-based questions and Google ecosystem tasks.",

    "3. Perplexity AI",
    "Provides answers with sources.",

    "4. Microsoft Copilot",
    "Integrated with Microsoft Office apps.",

    "5. Poe",
    "Access multiple AI models in one interface.",

    "6. Jasper AI",
    "Focused on marketing and copywriting.",

    "7. Writesonic",
    "Great for blogs and product descriptions.",

    "8. YouChat",
    "Search-engine-powered chatbot.",

    "9. Character AI",
    "Great for roleplay and creative conversations.",

    "There is no single perfect chatbot. The best choice depends on your workflow and goals."
  ],

  cover: "/blog/chatgpt-alternatives.jpg",
  readingMinutes: 6,
  featured: true,
},

  // {
  //   slug: "en-iyi-gorsel-olusturucular",
  //   dateISO: "2026-02-01",
  //   categoryTR: "Liste",
  //   categoryEN: "List",
  //   titleTR: "En İyi Yapay Zekâ Görsel Oluşturucular",
  //   titleEN: "Best AI Image Generators",
  //   excerptTR:
  //     "DALL·E’den Midjourney’e: kalite, hız ve stil kontrolü açısından en iyi seçenekler.",
  //   excerptEN:
  //     "From DALL·E to Midjourney: the best options for quality, speed, and style control.",
  //   contentTR: [
  //     "Görsel üretimde asıl farkı yaratan şey: prompt disiplini + modelin stil gücü. Aynı istemi 2–3 farklı araçta denemek genelde en iyi sonuç veriyor.",
  //     "Bu yazıda hem hızlı içerik üretimine uygun araçları hem de stil/kalite odaklı seçenekleri sıraladım.",
  //     "Bonus ipucu: sonuçları tutarlı yapmak için kendi “prompt şablonunu” oluştur.",
  //   ],
  //   contentEN: [
  //     "In image generation, the real difference comes from prompt discipline + the model’s stylistic strength. Testing the same prompt across 2–3 tools often yields the best outcome.",
  //     "This post covers both fast content-ready tools and higher control/style-focused options.",
  //     "Bonus tip: build your own prompt template for consistent results.",
  //   ],
  //   cover: "/blog/best-image-generators.jpg",
  //   readingMinutes: 4,
  //   featured: false,
  // },
];

// yardımcı: tarihe göre sırala
export function getPostsSorted() {
  return [...posts].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
}