import type { ToolExtra } from "./types";

export const leonardo_ai: ToolExtra = {
  longDescTR: `Leonardo AI, özellikle oyun asset'leri, karakter tasarımı ve tutarlı stil üretimi konusunda uzmanlaşmış bir yapay zekâ görsel platformudur. Farklı model seçenekleri ve ince ayar (fine-tuning) özellikleriyle özelleştirme konusunda güçlü bir ekosistem sunar.

Platformun en büyük avantajlarından biri, aynı karakteri veya stili farklı kompozisyonlarda tutarlı biçimde üretebilme kapasitesidir. Bu özellik, özellikle oyun geliştirme, çizgi roman ve marka görsel tutarlılığı gerektiren projeler için büyük değer taşır.

Kullanıcı dostu web arayüzü sayesinde teknik bilgi gerektirmeden güçlü görsel üretimi yapılabilir. Ücretsiz planda günlük token sistemiyle sınırlı da olsa görsel üretimi mümkündür, bu da platformu denemek için düşük riskli bir seçenek yapar.`,

  longDescEN: `Leonardo AI is an AI visual platform specializing in game assets, character design, and consistent style generation. It offers a powerful customization ecosystem with multiple model options and fine-tuning capabilities.

One of the platform's biggest advantages is its ability to consistently generate the same character or style across different compositions. This is especially valuable for game development, comics, and projects requiring consistent brand visuals.

Its user-friendly web interface allows powerful image generation without technical knowledge. The free plan's daily token system makes limited generation possible, making it a low-risk option to try out.`,

  featuresTR: [
    { icon: "🎮", title: "Oyun Asset Üretimi", desc: "Karakter, arka plan, ikon ve diğer oyun varlıkları için optimize edilmiştir." },
    { icon: "🔁", title: "Tutarlı Stil Üretimi", desc: "Aynı karakter veya stilin farklı pozlarda tutarlı çıktısını üretir." },
    { icon: "🎨", title: "Çoklu Model Seçeneği", desc: "Farklı estetik tercihler için özelleşmiş modeller arasından seçim yapabilirsin." },
    { icon: "⚙️", title: "Fine-tuning", desc: "Kendi görsellerinle model eğiterek özel stil oluşturabilirsin." },
    { icon: "✏️", title: "Canvas & Düzenleme", desc: "Oluşturulan görseller üzerinde inpainting ve outpainting yapabilirsin." },
    { icon: "🌐", title: "Kullanıcı Dostu Arayüz", desc: "Web tabanlı, sezgisel arayüz sayesinde teknik bilgi şartı yoktur." },
  ],

  featuresEN: [
    { icon: "🎮", title: "Game Asset Generation", desc: "Optimized for characters, backgrounds, icons, and other game assets." },
    { icon: "🔁", title: "Consistent Style Generation", desc: "Produces the same character or style consistently across different poses." },
    { icon: "🎨", title: "Multiple Model Options", desc: "Choose from specialized models for different aesthetic preferences." },
    { icon: "⚙️", title: "Fine-Tuning", desc: "Train a custom model with your own images to create a unique style." },
    { icon: "✏️", title: "Canvas & Editing", desc: "Inpainting and outpainting on generated images." },
    { icon: "🌐", title: "User-Friendly Interface", desc: "Web-based, intuitive interface — no technical knowledge needed." },
  ],

  forWhomTR: [
    { icon: "🎮", label: "Oyun geliştiriciler" },
    { icon: "🎨", label: "Konsept sanatçılar & illüstratörler" },
    { icon: "📚", label: "Çizgi roman & webtoon yaratıcıları" },
    { icon: "🏢", label: "Marka & pazarlama ekipleri" },
    { icon: "✍️", label: "İçerik üreticileri" },
    { icon: "🔬", label: "Prototipleme yapan tasarımcılar" },
  ],

  forWhomEN: [
    { icon: "🎮", label: "Game developers" },
    { icon: "🎨", label: "Concept artists & illustrators" },
    { icon: "📚", label: "Comic & webtoon creators" },
    { icon: "🏢", label: "Brand & marketing teams" },
    { icon: "✍️", label: "Content creators" },
    { icon: "🔬", label: "Prototyping designers" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "150 token/gün, sınırlı özellikler" },
    { plan: "Apprentice", price: "$10 / ay", note: "8.500 token/ay" },
    { plan: "Artisan",    price: "$24 / ay", note: "25.000 token/ay" },
    { plan: "Maestro",    price: "$48 / ay", note: "60.000 token/ay" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "150 token/gün, sınırlı özellikler" },
    { plan: "Apprentice", price: "$10 / mo", note: "8,500 tokens/month" },
    { plan: "Artisan",    price: "$24 / mo", note: "25,000 tokens/month" },
    { plan: "Maestro",    price: "$48 / mo", note: "60,000 tokens/month" },
  ],

  prosTR: [
    "Oyun ve karakter asset üretiminde güçlü",
    "Tutarlı stil üretimi",
    "Ücretsiz planda günlük kullanım mümkün",
    "Fine-tuning ile özel model oluşturma",
    "Kullanıcı dostu web arayüzü",
  ],

  prosEN: [
    "Strong for game and character asset generation",
    "Consistent style across compositions",
    "Daily usage possible on free plan",
    "Custom model creation via fine-tuning",
    "User-friendly web interface",
  ],

  consTR: [
    "Ücretsiz planda token limiti kısıtlı",
    "Fotogerçekçi portrelerde Midjourney kadar güçlü değil",
    "Fine-tuning öğrenme eğrisi gerektirir",
  ],

  consEN: [
    "Token limit on free plan is restrictive",
    "Not as strong as Midjourney for photorealistic portraits",
    "Fine-tuning has a learning curve",
  ],

  promptsTR: [
    {
      label: "🎮 Oyun Karakteri",
      prompt: "fantasy RPG female mage character, full body, detailed purple robes, magical staff, glowing runes, game asset style, white background, front view",
      output: `Beklenen Çıktı:
Mor cübbeli, büyülü asa tutan kadın büyücü karakteri. Tam vücut, ön görünüm, beyaz arka plan. Oyun asset olarak direkt kullanılabilir, transparan arka plan için PNG tercih et.`,
    },
    {
      label: "🏞️ Oyun Arka Planı",
      prompt: "fantasy forest background, mystical atmosphere, glowing mushrooms, ancient ruins, game background art, horizontal, no characters, 16:9",
      output: `Beklened Çıktı:
Parlayan mantarlar ve antik harabelerle dolu mistik orman arka planı. 16:9 format, karaktersiz, oyun background olarak kullanıma hazır.`,
    },
    {
      label: "🎨 Marka İllüstrasyonu",
      prompt: "cozy coffee brand mascot, cute bear character, holding coffee cup, warm colors, friendly expression, cartoon style, isolated on white",
      output: `Beklened Çıktı:
Kahve fincanı tutan, sevimli ayı maskot karakteri. Sıcak renkler, beyaz arka plan, marka iletişiminde kullanılabilir karikatür stili.`,
    },
  ],

  promptsEN: [
    {
      label: "🎮 Game Character",
      prompt: "fantasy RPG female mage character, full body, detailed purple robes, magical staff, glowing runes, game asset style, white background, front view",
      output: `Expected Output:
Female mage with purple robes and a magical staff, full body front view on white background. Ready to use as a game asset — prefer PNG for transparent background.`,
    },
    {
      label: "🏞️ Game Background",
      prompt: "fantasy forest background, mystical atmosphere, glowing mushrooms, ancient ruins, game background art, horizontal, no characters, 16:9",
      output: `Expected Output:
Mystical forest background with glowing mushrooms and ancient ruins. 16:9 format, no characters — ready to use as a game background.`,
    },
    {
      label: "🎨 Brand Illustration",
      prompt: "cozy coffee brand mascot, cute bear character, holding coffee cup, warm colors, friendly expression, cartoon style, isolated on white",
      output: `Expected Output:
Cute bear mascot holding a coffee cup, warm colors, white background. Cartoon style suitable for brand communications.`,
    },
  ],

  alternativeSlugs: ["midjourney", "stable-diffusion", "dall-e"],
};
