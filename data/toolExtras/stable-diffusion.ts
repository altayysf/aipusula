import type { ToolExtra } from "./types";

export const stable_diffusion: ToolExtra = {
  longDescTR: `Stable Diffusion, Stability AI tarafından geliştirilen ve açık kaynak olarak yayımlanan görsel üretim modelidir. Açık kaynak yapısı sayesinde dünya genelinde binlerce geliştirici tarafından özelleştirilmiş modeller (LoRA, Checkpoint) üretilmiş ve Civitai gibi platformlarda paylaşılmıştır.

Bu ekosistem, Stable Diffusion'ı son derece esnek ve güçlü kılar: gerçekçi insan portreleri, anime tarzı illüstrasyonlar, mimari renderlar veya soyut sanat gibi çok geniş bir yelpazede üretim yapılabilir. SDXL ve SD 3.5 gibi yeni modeller ile kalite önemli ölçüde artmıştır.

Kendi bilgisayarında çalıştırabilme özelliği (local), gizlilik açısından hassas projeler ve API maliyetlerini düşürmek isteyenler için büyük avantaj sağlar. Ancak teknik kurulum ve donanım gereksinimleri (özellikle GPU belleği) öğrenme eğrisini artırır. Ciddi görsel üretim işlerine giren ve özelleştirme arayan kullanıcılar için en güçlü açık kaynak seçenektir.`,

  longDescEN: `Stable Diffusion is an open-source image generation model developed by Stability AI. Its open-source nature has led thousands of developers worldwide to create customized models (LoRAs, Checkpoints), shared on platforms like Civitai.

This ecosystem makes Stable Diffusion extremely flexible and powerful: it can generate across a very wide range — realistic portraits, anime-style illustrations, architectural renders, or abstract art. Newer models like SDXL and SD 3.5 have significantly raised the quality bar.

The ability to run locally offers a major advantage for privacy-sensitive projects and those looking to reduce API costs. However, the technical setup and hardware requirements (especially GPU memory) increase the learning curve. It's the most powerful open-source option for serious image generation users who want full customization.`,

  featuresTR: [
    { icon: "🔓", title: "Açık Kaynak & Ücretsiz", desc: "Yerel bilgisayarında ücretsiz çalıştırabilir veya bulut servislerini kullanabilirsin." },
    { icon: "🧩", title: "Geniş Model Ekosistemi", desc: "Binlerce özelleştirilmiş model ve LoRA ile farklı stiller denenebilir." },
    { icon: "🔒", title: "Yerel Kullanım & Gizlilik", desc: "İnternet bağlantısı olmadan, tamamen yerel ortamda görsel üretebilirsin." },
    { icon: "⚙️", title: "İleri Düzey Kontrol", desc: "ControlNet ile poz, kompozisyon ve yapıyı hassas biçimde kontrol edebilirsin." },
    { icon: "🎨", title: "Sınırsız Stil", desc: "Gerçekçiden anime'ye, yağlı boyadan piksel sanatına geniş stil yelpazesi." },
    { icon: "🔄", title: "Img2Img Dönüşümü", desc: "Mevcut bir görseli alıp farklı stile veya içeriğe dönüştürebilirsin." },
  ],

  featuresEN: [
    { icon: "🔓", title: "Open Source & Free", desc: "Run locally for free on your own hardware, or use cloud services." },
    { icon: "🧩", title: "Massive Model Ecosystem", desc: "Thousands of custom models and LoRAs for different styles." },
    { icon: "🔒", title: "Local Use & Privacy", desc: "Generate images entirely offline — your data stays private." },
    { icon: "⚙️", title: "Advanced Control", desc: "Fine-tune pose, composition, and structure with ControlNet." },
    { icon: "🎨", title: "Unlimited Styles", desc: "From realistic to anime, oil painting to pixel art." },
    { icon: "🔄", title: "Img2Img Conversion", desc: "Transform an existing image into a different style or content." },
  ],

  forWhomTR: [
    { icon: "💻", label: "Teknik kullanıcılar & geliştiriciler" },
    { icon: "🎨", label: "Dijital sanatçılar" },
    { icon: "🔒", label: "Gizlilik öncelikli projeler" },
    { icon: "🎮", label: "Oyun & animasyon geliştiriciler" },
    { icon: "🔬", label: "AI araştırmacıları" },
    { icon: "💰", label: "Maliyet odaklı yüksek hacim kullanıcıları" },
  ],

  forWhomEN: [
    { icon: "💻", label: "Technical users & developers" },
    { icon: "🎨", label: "Digital artists" },
    { icon: "🔒", label: "Privacy-focused projects" },
    { icon: "🎮", label: "Game & animation developers" },
    { icon: "🔬", label: "AI researchers" },
    { icon: "💰", label: "Cost-focused high-volume users" },
  ],

  pricingTR: [
    { plan: "Yerel (Local)", price: "Ücretsiz", note: "Kendi donanımında sınırsız" },
    { plan: "DreamStudio",   price: "Kredi bazlı", note: "Stability AI'ın bulut servisi" },
    { plan: "API",           price: "Kullanım başına", note: "Stability AI API" },
    { plan: "Bulut (RunPod vb.)", price: "Saatlik", note: "GPU kiralama servisleri" },
  ],

  pricingEN: [
    { plan: "Yerel (Local)", price: "Ücretsiz", note: "Unlimited on your own hardware" },
    { plan: "DreamStudio",   price: "Kredi bazlı", note: "Stability AI'ın bulut servisi" },
    { plan: "API",           price: "Kullanım başına", note: "Stability AI API" },
    { plan: "Bulut (RunPod vb.)", price: "Saatlik", note: "GPU rental services" },
  ],

  prosTR: [
    "Tamamen ücretsiz yerel kullanım imkânı",
    "Açık kaynak — sonsuz özelleştirme",
    "Gizlilik: veriler dışarı çıkmaz",
    "ControlNet ile hassas kompozisyon kontrolü",
    "Binlerce hazır model ve LoRA",
  ],

  prosEN: [
    "Completely free local usage",
    "Open source — infinite customization",
    "Privacy: data never leaves your machine",
    "Fine-grained composition control with ControlNet",
    "Thousands of ready-made models and LoRAs",
  ],

  consTR: [
    "Teknik kurulum bilgisi gerektirir",
    "Güçlü GPU (en az 6–8 GB VRAM) gereksinimi",
    "Arayüz başlangıçta karmaşık gelebilir",
    "Kalite standartlaşması model seçimine göre değişiyor",
  ],

  consEN: [
    "Technical setup knowledge required",
    "Powerful GPU needed (at least 6–8 GB VRAM)",
    "Interface can feel complex for beginners",
    "Quality consistency depends on model selection",
  ],

  promptsTR: [
    {
      label: "🖼️ Portre Üretimi",
      prompt: "realistic portrait of a professional woman, 35 years old, natural lighting, office background, Canon 5D style photography, 8k, detailed skin texture --steps 30 --cfg 7",
      output: `Beklenen Çıktı:
Doğal stüdyo ışığında, ofis arka planlı, gerçekçi portre. SDXL veya Realistic Vision modeliyle en iyi sonucu alırsın. Steps: 30, CFG: 7 dengeli bir kalite sağlar.`,
    },
    {
      label: "🏛️ Mimari Render",
      prompt: "modern minimalist house exterior, large windows, wooden accents, surrounded by pine trees, dusk lighting, architectural visualization, photorealistic --ar 16:9",
      output: `Beklenen Çıktı:
Büyük camlı, ahşap detaylı modern minimalist ev. Alacakaranlık ışığı, çam ağaçları. Architecture model veya juggernautXL ile en iyi sonuç alınır.`,
    },
    {
      label: "🎨 Anime Stil İllüstrasyon",
      prompt: "anime style illustration, young warrior girl, cherry blossom background, detailed armor, vibrant colors, Studio Ghibli inspired, high quality",
      output: `Beklenen Çıktı:
Kiraz çiçekleri arka planında, detaylı zırhlı genç savaşçı kız. Canlı renkler, Ghibli ilhamlı stil. AnythingXL veya CounterfeitXL modeli önerilir.`,
    },
  ],

  promptsEN: [
    {
      label: "🖼️ Portrait Generation",
      prompt: "realistic portrait of a professional woman, 35 years old, natural lighting, office background, Canon 5D style photography, 8k, detailed skin texture --steps 30 --cfg 7",
      output: `Expected Output:
Realistic portrait with natural studio lighting and office background. Best results with SDXL or Realistic Vision model. Steps: 30, CFG: 7 provides a balanced quality.`,
    },
    {
      label: "🏛️ Architectural Render",
      prompt: "modern minimalist house exterior, large windows, wooden accents, surrounded by pine trees, dusk lighting, architectural visualization, photorealistic --ar 16:9",
      output: `Expected Output:
Modern minimalist house with large windows and wooden details. Dusk lighting, pine trees. Best results with an architecture-specific model or juggernautXL.`,
    },
    {
      label: "🎨 Anime Style Illustration",
      prompt: "anime style illustration, young warrior girl, cherry blossom background, detailed armor, vibrant colors, Studio Ghibli inspired, high quality",
      output: `Expected Output:
Young female warrior with detailed armor against a cherry blossom background. Vibrant colors, Ghibli-inspired style. AnythingXL or CounterfeitXL model recommended.`,
    },
  ],

  alternativeSlugs: ["midjourney", "leonardo-ai", "dall-e"],
};
