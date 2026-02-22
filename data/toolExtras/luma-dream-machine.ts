import type { ToolExtra } from "./types";

export const luma_dream_machine: ToolExtra = {
  longDescTR: `Luma Dream Machine, Luma AI tarafından geliştirilen ve sinematik kalitede video üretimine odaklanan yapay zekâ platformudur. Hem metinden hem de görüntüden video üretimi yapabilir; özellikle kamera hareketleri, ışık kalitesi ve hareket akıcılığı konusunda rakiplerine kıyasla öne çıkar.

Ray2 modeli ile Luma Dream Machine, 2025'in en güçlü video üretim modellerinden biri konumuna yükseldi. Photorealistic insan figürleri, karmaşık sahne geçişleri ve doğal kamera hareketleri konusunda etkileyici sonuçlar üretebilmektedir.

Sinematik bir anlatım dili hedefleyen içerik üreticileri, reklam yapımcıları ve film prodüksiyonu için güçlü bir araçtır. Kullanıcı dostu web arayüzü sayesinde teknik bilgi olmaksızın profesyonel düzeyde çıktı almak mümkündür.`,

  longDescEN: `Luma Dream Machine is an AI platform developed by Luma AI, focused on cinematic-quality video generation. It can generate video from both text and images, and stands out particularly for camera movements, lighting quality, and motion fluidity.

With the Ray2 model, Luma Dream Machine rose to become one of the most powerful video generation models of 2025. It can produce impressive results for photorealistic human figures, complex scene transitions, and natural camera movements.

It's a powerful tool for content creators, ad producers, and film productions aiming for a cinematic narrative language. Its user-friendly web interface makes it possible to achieve professional-level output without technical knowledge.`,

  featuresTR: [
    { icon: "🎬", title: "Sinematik Kalite", desc: "Yüksek kaliteli kamera hareketleri ve ışık efektleriyle öne çıkar." },
    { icon: "📸", title: "Image to Video", desc: "Fotoğraftan akıcı ve gerçekçi video üretir." },
    { icon: "🎭", title: "Kamera Kontrolü", desc: "Pan, tilt, zoom ve orbit gibi kamera hareketleri desteklenir." },
    { icon: "👤", title: "İnsan Figürü", desc: "Gerçekçi insan hareketi ve yüz ifadesi üretiminde güçlüdür." },
    { icon: "🔄", title: "Video Uzatma", desc: "Üretilen videoyu yapay zekâyla uzatabilirsin." },
    { icon: "🌐", title: "API Erişimi", desc: "Geliştiriciler için API üzerinden entegrasyon imkânı." },
  ],

  featuresEN: [
    { icon: "🎬", title: "Cinematic Quality", desc: "Stands out for high-quality camera movements and lighting effects." },
    { icon: "📸", title: "Image to Video", desc: "Generates fluid and realistic video from a photograph." },
    { icon: "🎭", title: "Camera Control", desc: "Supports pan, tilt, zoom, and orbit camera movements." },
    { icon: "👤", title: "Human Figures", desc: "Strong at realistic human movement and facial expressions." },
    { icon: "🔄", title: "Video Extension", desc: "Extend a generated video with AI." },
    { icon: "🌐", title: "API Access", desc: "API integration available for developers." },
  ],

  forWhomTR: [
    { icon: "🎬", label: "Film & reklam yapımcıları" },
    { icon: "📣", label: "Marka video içerikleri" },
    { icon: "🎨", label: "Yaratıcı yönetmenler" },
    { icon: "📸", label: "Fotoğrafçılar (fotoğrafı canlandırmak için)" },
    { icon: "🏢", label: "Ajanslar & prodüksiyon şirketleri" },
    { icon: "💻", label: "Geliştiriciler & ürün ekipleri" },
  ],

  forWhomEN: [
    { icon: "🎬", label: "Film & ad producers" },
    { icon: "📣", label: "Brand video content" },
    { icon: "🎨", label: "Creative directors" },
    { icon: "📸", label: "Photographers (to animate photos)" },
    { icon: "🏢", label: "Agencies & production companies" },
    { icon: "💻", label: "Developers & product teams" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "30 üretim/ay, filigransız" },
    { plan: "Standard", price: "$29.99 / ay", note: "120 üretim/ay" },
    { plan: "Plus",     price: "$99.99 / ay", note: "400 üretim/ay, öncelikli" },
    { plan: "Pro",      price: "$499.99 / ay", note: "2.000 üretim/ay" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "30 generations/month, no watermark" },
    { plan: "Standard", price: "$29.99 / mo", note: "120 generations/month" },
    { plan: "Plus",     price: "$99.99 / mo", note: "400 üretim/ay, öncelikli" },
    { plan: "Pro",      price: "$499.99 / mo", note: "2,000 generations/month" },
  ],

  prosTR: [
    "Sinematik kalite ve akıcı kamera hareketleri",
    "İnsan figürü üretiminde güçlü",
    "Ücretsiz planda filigran yok",
    "Image to video kalitesi yüksek",
  ],

  prosEN: [
    "Cinematic quality and fluid camera movements",
    "Strong for human figure generation",
    "No watermark on free plan",
    "High image-to-video quality",
  ],

  consTR: [
    "Ücretsiz planda aylık üretim limiti düşük",
    "Ücretli planlar pahalı",
    "Çok detaylı prompt kontrolü sınırlı",
  ],

  consEN: [
    "Low monthly generation limit on free plan",
    "Paid plans are expensive",
    "Detailed prompt control is limited",
  ],

  promptsTR: [
    {
      label: "🌅 Sinematik Sahne",
      prompt: "A lone lighthouse on rocky cliffs at stormy sea, dramatic waves crashing, dark clouds, cinematic lighting, slow push-in camera movement, photorealistic",
      output: `Beklened Çıktı:
Fırtınalı denizde kayalıklardaki deniz feneri, çarpan dalgalar, dramatik bulutlar. Yavaş ilerleme kamera hareketiyle sinematik his. Film fragmanı kalitesinde çıktı.`,
    },
    {
      label: "👤 Portre Canlandırma",
      prompt: "Portre fotoğrafını yükle → 'person slowly turns head, gentle smile, soft bokeh background, natural lighting' → Generate",
      output: `Beklened Çıktı:
Portre fotoğrafındaki kişi yavaşça başını çeviriyor, hafif gülümseme, yumuşak bokeh arka plan. Sosyal medya veya tanıtım içeriği için profesyonel görünüm.`,
    },
    {
      label: "🏙️ Şehir Time-lapse",
      prompt: "Aerial view of Istanbul at night, Bosphorus bridge lights reflecting on water, time-lapse style, stars moving, cinematic, 4K",
      output: `Beklened Çıktı:
İstanbul'un gece havadan görünümü, Boğaz köprüsü ışıkları su üzerinde yansıyor, hızlandırılmış bulut hareketi. Tanıtım filmi kalitesinde sinematik çıktı.`,
    },
  ],

  promptsEN: [
    {
      label: "🌅 Cinematic Scene",
      prompt: "A lone lighthouse on rocky cliffs at stormy sea, dramatic waves crashing, dark clouds, cinematic lighting, slow push-in camera movement, photorealistic",
      output: `Expected Output:
Lighthouse on rocky cliffs with stormy sea, crashing waves, dramatic clouds. Slow push-in camera movement with a cinematic feel. Film trailer quality output.`,
    },
    {
      label: "👤 Portrait Animation",
      prompt: "Upload portrait photo → 'person slowly turns head, gentle smile, soft bokeh background, natural lighting' → Generate",
      output: `Expected Output:
The person in the portrait slowly turns their head, a gentle smile forms, soft bokeh background. Professional look for social media or promotional content.`,
    },
    {
      label: "🏙️ City Time-lapse",
      prompt: "Aerial view of a city at night, bridge lights reflecting on water, time-lapse style, stars moving, cinematic, 4K",
      output: `Expected Output:
Aerial night city view, bridge lights reflected on water, accelerated cloud movement. Cinematic output at promotional film quality.`,
    },
  ],

  alternativeSlugs: ["runway", "pika", "capcut"],
};
