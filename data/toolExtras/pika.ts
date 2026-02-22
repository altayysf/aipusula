import type { ToolExtra } from "./types";

export const pika: ToolExtra = {
  longDescTR: `Pika, metinden kısa video üretimi ve görsel stil denemeleri için tasarlanmış yapay zekâ tabanlı bir video platformudur. Kullanımı kolay arayüzü ve hızlı üretim kapasitesiyle özellikle sosyal medya içerik üreticileri arasında popülerlik kazanmıştır.

Pika 1.5 ve sonraki sürümlerle önemli kalite artışı yaşandı. Görselden video, metinden video ve video üzerine stil uygulamaları gibi temel özellikler, kısa ve etkili sosyal medya içerikleri üretmek için yeterli araç seti sunar.

Uzun ve karmaşık video prodüksiyonları için değil, hızlı ve etkileyici kısa içerikler için idealdir. Runway veya Luma Dream Machine gibi rakiplerine kıyasla daha basit ve erişilebilir bir kullanıcı deneyimi sunar.`,

  longDescEN: `Pika is an AI-powered video platform designed for short-form video generation from text and visual style experimentation. With its easy-to-use interface and rapid generation capabilities, it has gained popularity especially among social media content creators.

With Pika 1.5 and later versions, significant quality improvements were made. Core features like image-to-video, text-to-video, and style application on existing videos provide a sufficient toolset for producing short, impactful social media content.

It's ideal not for long, complex video productions, but for fast and eye-catching short content. It offers a simpler and more accessible user experience compared to competitors like Runway or Luma Dream Machine.`,

  featuresTR: [
    { icon: "⚡", title: "Hızlı Video Üretimi", desc: "Metinden saniyeler içinde kısa video üretir." },
    { icon: "🎨", title: "Stil Uygulaması", desc: "Mevcut videolara farklı sanatsal stiller uygular." },
    { icon: "🖼️", title: "Image to Video", desc: "Statik görseli kısa animasyona dönüştürür." },
    { icon: "🎭", title: "Efekt Kütüphanesi", desc: "Hazır efektler ve geçiş seçenekleri sunar." },
    { icon: "📱", title: "Sosyal Medya Odaklı", desc: "Kısa format ve platform uyumlu çıktılar için optimize edilmiş." },
    { icon: "🔄", title: "Video Uzatma", desc: "Mevcut videoyu yapay zekâyla uzatabilirsin." },
  ],

  featuresEN: [
    { icon: "⚡", title: "Fast Video Generation", desc: "Generates short videos from text in seconds." },
    { icon: "🎨", title: "Style Application", desc: "Applies different artistic styles to existing videos." },
    { icon: "🖼️", title: "Image to Video", desc: "Converts a still image into a short animation." },
    { icon: "🎭", title: "Effect Library", desc: "Ready-made effects and transition options." },
    { icon: "📱", title: "Social Media Focused", desc: "Optimized for short format and platform-compatible output." },
    { icon: "🔄", title: "Video Extension", desc: "Extend existing video with AI." },
  ],

  forWhomTR: [
    { icon: "📱", label: "TikTok & Reels içerik üreticileri" },
    { icon: "🎨", label: "Yaratıcı deneme yapanlar" },
    { icon: "📣", label: "Sosyal medya yöneticileri" },
    { icon: "🛍️", label: "E-ticaret & ürün tanıtımı" },
    { icon: "🎓", label: "Yeni başlayanlar" },
    { icon: "💼", label: "Küçük işletmeler" },
  ],

  forWhomEN: [
    { icon: "📱", label: "TikTok & Reels creators" },
    { icon: "🎨", label: "Creative experimenters" },
    { icon: "📣", label: "Social media managers" },
    { icon: "🛍️", label: "E-commerce & product promotion" },
    { icon: "🎓", label: "Beginners" },
    { icon: "💼", label: "Small businesses" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "Sınırlı üretim hakkı" },
    { plan: "Basic",    price: "$8 / ay",  note: "700 kredi/ay" },
    { plan: "Standard", price: "$28 / ay", note: "2.000 kredi/ay" },
    { plan: "Unlimited", price: "$78 / ay", note: "Sınırsız üretim" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "Sınırlı üretim hakkı" },
    { plan: "Basic",    price: "$8 / mo",  note: "700 credits/month" },
    { plan: "Standard", price: "$28 / mo", note: "2,000 credits/month" },
    { plan: "Unlimited", price: "$78 / mo", note: "Unlimited generation" },
  ],

  prosTR: [
    "Kullanımı çok kolay ve hızlı",
    "Sosyal medya için ideal format",
    "Uygun fiyatlı başlangıç planı",
    "Stil uygulamaları eğlenceli",
  ],

  prosEN: [
    "Very easy and fast to use",
    "Ideal format for social media",
    "Affordable starter plan",
    "Style applications are fun",
  ],

  consTR: [
    "Uzun video üretimi mümkün değil",
    "Runway kadar profesyonel kontrol yok",
    "Karmaşık sahnelerde kalite düşüyor",
  ],

  consEN: [
    "Long video generation not possible",
    "Less professional control than Runway",
    "Quality drops with complex scenes",
  ],

  promptsTR: [
    {
      label: "🎬 Ürün Tanıtım Videosu",
      prompt: "A luxury perfume bottle on a marble surface, rose petals falling in slow motion, golden light, elegant and cinematic",
      output: `Beklenen Çıktı:
Mermer yüzeyde parfüm şişesi, yavaş çekimde düşen gül yaprakları, altın ışık efekti. 3–4 saniyelik lüks ürün tanıtım klibi. Instagram veya TikTok için ideal format.`,
    },
    {
      label: "🖼️ Fotoğrafı Canlandır",
      prompt: "Fotoğrafı yükle → 'gentle breeze moving through the hair, soft smile' → Generate",
      output: `Beklened Çıktı:
Statik portre fotoğrafında saçlar hafifçe sallanıyor, dudaklar gülümseyen bir ifadeye geçiyor. Doğal ve akıcı animasyon.`,
    },
    {
      label: "🎨 Stil Dönüşümü",
      prompt: "Video yükle → Style → 'watercolor painting, soft edges, artistic' → Apply",
      output: `Beklened Çıktı:
Normal video sulu boya resim efektiyle stilize edildi. Yumuşak kenarlar, pastel renkler. Sanatsal sosyal medya içeriği için güzel bir efekt.`,
    },
  ],

  promptsEN: [
    {
      label: "🎬 Product Promo Video",
      prompt: "A luxury perfume bottle on a marble surface, rose petals falling in slow motion, golden light, elegant and cinematic",
      output: `Expected Output:
Perfume bottle on marble, rose petals falling in slow motion, golden light effect. 3–4 second luxury product clip. Ideal format for Instagram or TikTok.`,
    },
    {
      label: "🖼️ Animate a Photo",
      prompt: "Upload photo → 'gentle breeze moving through the hair, soft smile' → Generate",
      output: `Expected Output:
Hair gently sways in the still portrait photo, lips shift into a smiling expression. Natural and fluid animation.`,
    },
    {
      label: "🎨 Style Transformation",
      prompt: "Upload video → Style → 'watercolor painting, soft edges, artistic' → Apply",
      output: `Expected Output:
Normal video is stylized with a watercolor painting effect. Soft edges, pastel colors. A beautiful effect for artistic social media content.`,
    },
  ],

  alternativeSlugs: ["runway", "capcut", "luma-dream-machine"],
};
