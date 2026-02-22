import type { ToolExtra } from "./types";

export const midjourney: ToolExtra = {
  longDescTR: `Midjourney, metin girdilerinden (prompt) yüksek kaliteli ve yaratıcı görseller üreten yapay zekâ tabanlı bir görsel üretim platformudur. 2022'deki lansmanından bu yana yaratıcı sektörde devrim yarattı ve birçok kullanıcı tarafından kalite açısından en güçlü görsel üretim aracı olarak değerlendiriliyor.

Platformun en öne çıkan özelliği, sanatsal ve estetik duyarlılığıdır. Fotoğraf gerçekliğinden soyut sanata, sinematik karelerden illüstrasyon stillerine kadar geniş bir yelpazede çıktı üretebilir. V6 ve üzeri sürümlerde ışık, doku ve kompozisyon kalitesi oldukça etkileyici bir seviyeye ulaşmıştır.

Midjourney, Discord üzerinden çalışan benzersiz arayüzüyle diğer araçlardan ayrılır. Bu durum başlangıçta öğrenme eğrisi oluştursa da topluluk odaklı yapısı sayesinde ilham almak ve prompt geliştirmek çok daha kolay olmaktadır. Konsept tasarım, illüstrasyon, pazarlama görselleri ve yaratıcı proje denemeleri için güçlü bir tercihtir.`,

  longDescEN: `Midjourney is an AI-powered image generation platform that creates high-quality, creative visuals from text prompts. Since its launch in 2022, it has revolutionized the creative industry and is widely considered one of the strongest image generation tools in terms of quality.

The platform's most distinctive quality is its artistic and aesthetic sensibility. It can produce output across a wide spectrum — from photorealism to abstract art, cinematic frames to illustration styles. With V6 and later versions, the quality of lighting, texture, and composition has reached an impressive level.

Midjourney stands apart with its unique Discord-based interface. While this creates a learning curve initially, its community-driven nature makes it much easier to find inspiration and refine prompts. It's a powerful choice for concept design, illustration, marketing visuals, and creative project exploration.`,

  featuresTR: [
    { icon: "🎨", title: "Yüksek Kalite Görseller", desc: "V6 modeliyle fotoğraf gerçekliğine yakın, estetik açıdan güçlü çıktılar üretir." },
    { icon: "🖼️", title: "Geniş Stil Yelpazesi", desc: "Fotogerçekçilikten soyut sanata, anime'den sinematik stile kadar çok sayıda tarz desteklenir." },
    { icon: "🔄", title: "Varyasyon Üretimi", desc: "Beğenilen bir görselin farklı varyasyonlarını kolayca oluşturabilirsin." },
    { icon: "⬆️", title: "Upscale & Detay Artırma", desc: "Üretilen görselleri yüksek çözünürlüklü hale getirme imkânı sunar." },
    { icon: "👥", title: "Topluluk & İlham", desc: "Discord topluluğu sayesinde başkalarının prompt'larından ilham alabilirsin." },
    { icon: "🎭", title: "Stil Referansı", desc: "Referans görsel yükleyerek benzer stil ve kompozisyonlar üretebilirsin." },
  ],

  featuresEN: [
    { icon: "🎨", title: "High-Quality Visuals", desc: "V6 model produces aesthetically strong, near-photorealistic outputs." },
    { icon: "🖼️", title: "Wide Style Range", desc: "Supports styles from photorealism to abstract, anime to cinematic." },
    { icon: "🔄", title: "Variation Generation", desc: "Easily create multiple variations of a preferred image." },
    { icon: "⬆️", title: "Upscaling", desc: "Upscale generated images to high resolution." },
    { icon: "👥", title: "Community & Inspiration", desc: "The Discord community lets you learn from others' prompts." },
    { icon: "🎭", title: "Style Reference", desc: "Upload a reference image to generate similar styles and compositions." },
  ],

  forWhomTR: [
    { icon: "🎨", label: "Grafik tasarımcılar" },
    { icon: "📣", label: "Pazarlama & reklam ekipleri" },
    { icon: "🎮", label: "Oyun geliştiriciler & konsept sanatçılar" },
    { icon: "📸", label: "Fotoğrafçılar & görsel sanatçılar" },
    { icon: "✍️", label: "İçerik üreticileri" },
    { icon: "🏢", label: "Ajanslar & kreatif ekipler" },
  ],

  forWhomEN: [
    { icon: "🎨", label: "Graphic designers" },
    { icon: "📣", label: "Marketing & ad teams" },
    { icon: "🎮", label: "Game developers & concept artists" },
    { icon: "📸", label: "Photographers & visual artists" },
    { icon: "✍️", label: "Content creators" },
    { icon: "🏢", label: "Agencies & creative teams" },
  ],

  pricingTR: [
    { plan: "Basic",    price: "$10 / ay",  note: "200 görsel / ay" },
    { plan: "Standard", price: "$30 / ay",  note: "Sınırsız (relax mod)" },
    { plan: "Pro",      price: "$60 / ay",  note: "Gizli mod, daha hızlı" },
    { plan: "Mega",     price: "$120 / ay", note: "Yoğun kullanıcılar için" },
  ],

  pricingEN: [
    { plan: "Basic",    price: "$10 / mo",  note: "200 görsel / mo" },
    { plan: "Standard", price: "$30 / mo",  note: "Unlimited (relax mode)" },
    { plan: "Pro",      price: "$60 / mo",  note: "Stealth mode, faster" },
    { plan: "Mega",     price: "$120 / mo", note: "For heavy users" },
  ],

  prosTR: [
    "Kalite açısından sektörün en güçlü araçlarından biri",
    "Geniş stil yelpazesi ve sanatsal duyarlılık",
    "Aktif ve ilham verici Discord topluluğu",
    "Varyasyon ve upscale özellikleri",
  ],

  prosEN: [
    "One of the strongest tools in the industry for quality",
    "Wide style range and artistic sensibility",
    "Active and inspiring Discord community",
    "Variation and upscale features",
  ],

  consTR: [
    "Ücretsiz plan mevcut değil",
    "Discord tabanlı arayüz başlangıçta karmaşık gelebilir",
    "Prompt yazımı öğrenme eğrisi gerektiriyor",
    "Metin içeren görsellerde tutarsız sonuçlar",
  ],

  consEN: [
    "No free plan available",
    "Discord-based interface can feel complex initially",
    "Prompt writing has a learning curve",
    "Inconsistent results with text in images",
  ],

  promptsTR: [
    {
      label: "🌆 Sinematik Şehir Görseli",
      prompt: "/imagine prompt: futuristic Istanbul skyline at golden hour, cinematic lighting, fog over Bosphorus, ultra-realistic, 8k, wide angle --ar 16:9 --v 6",
      output: `Beklenen Çıktı:
Boğaz üzerinde altın saat ışığıyla aydınlatılmış fütüristik İstanbul silüeti. Hafif sis efekti, derin perspektif ve sinematik renk paleti. 16:9 format, yüksek detay.

İpucu: "--ar" ile en boy oranını, "--v 6" ile en güncel modeli seçebilirsin.`,
    },
    {
      label: "🎨 Ürün Konsept Görseli",
      prompt: "/imagine prompt: minimalist luxury perfume bottle, matte black glass, gold accents, white studio background, product photography style, soft shadows --ar 1:1 --v 6",
      output: `Beklenen Çıktı:
Mat siyah cam, altın detaylar ve beyaz fon üzerinde lüks parfüm şişesi. Stüdyo aydınlatması, yumuşak gölgeler. Ticari ürün fotoğrafçılığı kalitesinde çıktı.`,
    },
    {
      label: "🖼️ İllüstrasyon Stili",
      prompt: "/imagine prompt: cozy Japanese coffee shop interior, autumn afternoon, warm lighting, people reading, Studio Ghibli inspired illustration style, detailed --ar 3:2",
      output: `Beklened Çıktı:
Studio Ghibli tarzında, sonbahar öğleden sonrası, sıcak ışıklı Japon kahvecisi iç mekânı. Kitap okuyan karakterler, detaylı çizim stili, nostalji hissi veren renk paleti.`,
    },
  ],

  promptsEN: [
    {
      label: "🌆 Cinematic City Visual",
      prompt: "/imagine prompt: futuristic Istanbul skyline at golden hour, cinematic lighting, fog over Bosphorus, ultra-realistic, 8k, wide angle --ar 16:9 --v 6",
      output: `Expected Output:
Futuristic Istanbul skyline lit by golden hour light over the Bosphorus. Soft fog effect, deep perspective, cinematic color palette. 16:9 format, high detail.

Tip: Use "--ar" for aspect ratio and "--v 6" for the latest model.`,
    },
    {
      label: "🎨 Product Concept Visual",
      prompt: "/imagine prompt: minimalist luxury perfume bottle, matte black glass, gold accents, white studio background, product photography style, soft shadows --ar 1:1 --v 6",
      output: `Expected Output:
Luxury perfume bottle with matte black glass and gold details on a white background. Studio lighting, soft shadows. Commercial product photography quality.`,
    },
    {
      label: "🖼️ Illustration Style",
      prompt: "/imagine prompt: cozy Japanese coffee shop interior, autumn afternoon, warm lighting, people reading, Studio Ghibli inspired illustration style, detailed --ar 3:2",
      output: `Expected Output:
Studio Ghibli-style Japanese coffee shop interior, autumn afternoon, warm lighting, characters reading books. Detailed illustration style with a nostalgic color palette.`,
    },
  ],

  alternativeSlugs: ["dall-e", "stable-diffusion", "leonardo-ai"],
};
