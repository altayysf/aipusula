import type { ToolExtra } from "./types";

export const runway: ToolExtra = {
  longDescTR: `Runway, yapay zekâ destekli video üretimi ve düzenleme konusunda sektörün en önde gelen platformlarından biridir. Gen-2 ve Gen-3 modelleriyle metinden video, görüntüden video üretimi ve gelişmiş video düzenleme araçları sunar.

Platform, özellikle içerik üreticileri, film yapımcıları ve kreatif ekipler için güçlü bir araç seti sunmaktadır. Green screen kaldırma, nesne silme, video stilize etme ve metinden video oluşturma gibi özellikler, geleneksel video post-prodüksiyon süreçlerini dramatik biçimde hızlandırır.

Runway'i rakiplerinden ayıran en önemli özellik, yaratıcı kontrol seçeneklerinin zenginliğidir. Yalnızca metin girmekle kalmaz; referans görsel, kamera hareketi, hareket yoğunluğu gibi parametrelerle çıktı üzerinde ince ayar yapabilirsin. Profesyonel video üretimi için erişilebilir yapay zekâ çözümü arayan ekipler için güçlü bir tercihtir.`,

  longDescEN: `Runway is one of the leading platforms in AI-powered video generation and editing. With Gen-2 and Gen-3 models, it offers text-to-video, image-to-video generation, and advanced video editing tools.

The platform provides a powerful toolkit especially for content creators, filmmakers, and creative teams. Features like green screen removal, object removal, video stylization, and text-to-video generation dramatically accelerate traditional video post-production workflows.

What sets Runway apart is the richness of its creative control options. You don't just enter text — you can fine-tune output with reference images, camera movement, and motion intensity parameters. It's a strong choice for teams seeking an accessible AI solution for professional video production.`,

  featuresTR: [
    { icon: "🎬", title: "Text to Video", desc: "Metin açıklamasından kısa ve kaliteli video üretir." },
    { icon: "🖼️", title: "Image to Video", desc: "Bir görseli animasyona dönüştürür, hareket ve dinamizm katar." },
    { icon: "✂️", title: "Green Screen Kaldırma", desc: "Arka planı otomatik kaldırır, yeni ortamlarla birleştirir." },
    { icon: "🎨", title: "Video Stilize Etme", desc: "Mevcut videoyu farklı sanatsal stile dönüştürür." },
    { icon: "🗑️", title: "Nesne Silme", desc: "Video karelerindeki istenmeyen nesneleri otomatik temizler." },
    { icon: "🎭", title: "Kamera Kontrolü", desc: "Pan, zoom ve kamera hareketi ile sinematik çıktılar üretebilirsin." },
  ],

  featuresEN: [
    { icon: "🎬", title: "Text to Video", desc: "Generate short, high-quality videos from text descriptions." },
    { icon: "🖼️", title: "Image to Video", desc: "Animate a still image — add motion and dynamism." },
    { icon: "✂️", title: "Green Screen Removal", desc: "Automatically removes backgrounds for new environment compositing." },
    { icon: "🎨", title: "Video Stylization", desc: "Transform existing video into a different artistic style." },
    { icon: "🗑️", title: "Object Removal", desc: "Automatically clean unwanted objects from video frames." },
    { icon: "🎭", title: "Camera Control", desc: "Pan, zoom, and camera movement for cinematic outputs." },
  ],

  forWhomTR: [
    { icon: "🎬", label: "Film & içerik yapımcıları" },
    { icon: "📣", label: "Sosyal medya içerik üreticileri" },
    { icon: "🏢", label: "Ajanslar & reklam ekipleri" },
    { icon: "🎨", label: "Motion design sanatçıları" },
    { icon: "📱", label: "Influencer & YouTuberlar" },
    { icon: "🎓", label: "Eğitim video üreticileri" },
  ],

  forWhomEN: [
    { icon: "🎬", label: "Film & content producers" },
    { icon: "📣", label: "Social media content creators" },
    { icon: "🏢", label: "Agencies & ad teams" },
    { icon: "🎨", label: "Motion design artists" },
    { icon: "📱", label: "Influencers & YouTubers" },
    { icon: "🎓", label: "Educational video creators" },
  ],

  pricingTR: [
    { plan: "Ücretsiz",  price: "$0 / ay",   note: "125 kredi, sınırlı özellikler" },
    { plan: "Standard", price: "$15 / ay",   note: "625 kredi/ay" },
    { plan: "Pro",       price: "$35 / ay",   note: "2.250 kredi/ay" },
    { plan: "Unlimited", price: "$95 / ay",  note: "Sınırsız (standart kalite)" },
  ],

  pricingEN: [
    { plan: "Free",  price: "$0 / mo",   note: "125 credits, limited features" },
    { plan: "Standard", price: "$15 / mo",   note: "625 credits/month" },
    { plan: "Pro",       price: "$35 / mo",   note: "2,250 credits/month" },
    { plan: "Unlimited", price: "$95 / mo",  note: "Unlimited (standard quality)" },
  ],

  prosTR: [
    "Güçlü text-to-video ve image-to-video",
    "Green screen ve nesne kaldırma özellikleri",
    "Kamera hareketi kontrolü",
    "Kullanıcı dostu arayüz",
  ],

  prosEN: [
    "Powerful text-to-video and image-to-video",
    "Green screen and object removal features",
    "Camera movement control",
    "User-friendly interface",
  ],

  consTR: [
    "Uzun video üretimi sınırlı (saniyeler bazında)",
    "Kredi sistemi hızlı tükenebilir",
    "Ücretsiz planda düşük kalite",
    "Yüksek kalite için abonelik gerekli",
  ],

  consEN: [
    "Long video generation is limited (seconds-based)",
    "Credit system depletes quickly",
    "Lower quality on free plan",
    "Subscription required for high quality",
  ],

  promptsTR: [
    {
      label: "🎬 Text to Video",
      prompt: "A serene Japanese garden at dawn, koi fish swimming in a pond, cherry blossoms falling, slow cinematic camera movement, 4K quality",
      output: `Beklenen Çıktı:
Şafakta Japon bahçesi, yüzen koi balıkları, dökülen kiraz çiçekleri. Yavaş sinematik kamera hareketi, yumuşak aydınlatma. 4–10 saniyelik klip.

İpucu: Motion Brush ile hangi alanların hareket edeceğini manuel kontrol edebilirsin.`,
    },
    {
      label: "🖼️ Image to Video",
      prompt: "Görseli yükle → Camera Motion: Slow Zoom In → Motion Amount: 3 → Generate (Bu ayarlarla statik fotoğraf yavaşça yakınlaşan, nefes alan bir videoya dönüşür)",
      output: `Beklened Çıktı:
Statik fotoğraf, yavaş zoom efektiyle canlı hale geliyor. Ken Burns efektine benzer, sosyal medya ve sunum için çok etkili sonuç.`,
    },
    {
      label: "✂️ Arka Plan Kaldırma",
      prompt: "Video yükle → Remove Background → Yeni arka plan seç veya yeşil ekran olarak kullan",
      output: `Beklenen Çıktı:
Kişi veya nesne arka plandan otomatik ayrıştırılır. Yeni sahneye yerleştirme veya After Effects/Premiere'de kullanım için hazır alpha kanal çıktısı.`,
    },
  ],

  promptsEN: [
    {
      label: "🎬 Text to Video",
      prompt: "A serene Japanese garden at dawn, koi fish swimming in a pond, cherry blossoms falling, slow cinematic camera movement, 4K quality",
      output: `Expected Output:
Japanese garden at dawn, swimming koi fish, falling cherry blossoms. Slow cinematic camera movement, soft lighting. 4–10 second clip.

Tip: Use Motion Brush to manually control which areas move.`,
    },
    {
      label: "🖼️ Image to Video",
      prompt: "Upload image → Camera Motion: Slow Zoom In → Motion Amount: 3 → Generate (This turns a still photo into a slowly breathing video with a zoom effect)",
      output: `Expected Output:
Static photo comes to life with a slow zoom effect. Similar to Ken Burns effect — very effective for social media and presentations.`,
    },
    {
      label: "✂️ Background Removal",
      prompt: "Upload video → Remove Background → Select new background or use as green screen",
      output: `Expected Output:
Person or object is automatically separated from the background. Ready for compositing onto a new scene or use in After Effects/Premiere with alpha channel output.`,
    },
  ],

  alternativeSlugs: ["capcut", "pika", "luma-dream-machine"],
};
