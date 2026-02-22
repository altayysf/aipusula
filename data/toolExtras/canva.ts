import type { ToolExtra } from "./types";

export const canva: ToolExtra = {
  longDescTR: `Canva, grafik tasarım bilgisi gerektirmeden profesyonel görsel içerikler oluşturmayı mümkün kılan şablon tabanlı tasarım platformudur. 150 milyondan fazla aktif kullanıcısıyla dünyanın en yaygın kullanılan tasarım araçlarından biridir.

Sosyal medya görselleri, sunumlar, posterler, logolar, infografikler, PDF'ler ve hatta video içerikleri dahil geniş bir format yelpazesinde içerik üretimi yapılabilir. AI ile zenginleştirilen platform, arka plan kaldırma, metin efektleri, görsel üretimi ve otomatik tasarım önerileri gibi akıllı özellikler ekleyerek güncellenmeye devam etmektedir.

Canva for Teams ile marka kiti, ortak şablonlar ve ekip onay akışları oluşturulabilir. İş dünyasında, eğitimde ve sosyal medyada en hızlı içerik üretim aracı olmayı sürdürmektedir.`,

  longDescEN: `Canva is a template-based design platform that makes it possible to create professional visual content without any graphic design knowledge. With over 150 million active users, it's one of the world's most widely used design tools.

Content creation is possible across a wide format range including social media graphics, presentations, posters, logos, infographics, PDFs, and even video content. The AI-enriched platform continues to be updated with smart features like background removal, text effects, image generation, and automatic design suggestions.

With Canva for Teams, you can create brand kits, shared templates, and team approval workflows. It continues to be the fastest content creation tool in business, education, and social media.`,

  featuresTR: [
    { icon: "🎨", title: "Sonsuz Şablon", desc: "Milyonlarca hazır şablon ile hızlı başlangıç." },
    { icon: "✂️", title: "Arka Plan Kaldırma", desc: "Tek tıklamayla arka plan kaldırır." },
    { icon: "🤖", title: "Magic Studio (AI)", desc: "AI görsel üretimi, metin efektleri ve tasarım asistanı." },
    { icon: "📹", title: "Video Düzenleme", desc: "Basit video düzenleme ve sosyal içerik hazırlama." },
    { icon: "🏢", title: "Marka Kiti", desc: "Renk, font ve logo tutarlılığı için marka kiti oluşturma." },
    { icon: "👥", title: "Ekip İş Birliği", desc: "Gerçek zamanlı ortak düzenleme ve yorum." },
  ],

  featuresEN: [
    { icon: "🎨", title: "Endless Templates", desc: "Millions of ready-made templates for a quick start." },
    { icon: "✂️", title: "Background Removal", desc: "Remove backgrounds with a single click." },
    { icon: "🤖", title: "Magic Studio (AI)", desc: "AI image generation, text effects, and design assistant." },
    { icon: "📹", title: "Video Editing", desc: "Simple video editing and social content preparation." },
    { icon: "🏢", title: "Brand Kit", desc: "Create brand kits for color, font, and logo consistency." },
    { icon: "👥", title: "Team Collaboration", desc: "Real-time co-editing and commenting." },
  ],

  forWhomTR: [
    { icon: "📣", label: "Sosyal medya yöneticileri" },
    { icon: "🏪", label: "Küçük işletme sahipleri" },
    { icon: "🎓", label: "Öğretmenler & eğitimciler" },
    { icon: "💼", label: "Pazarlama ekipleri" },
    { icon: "✍️", label: "İçerik üreticileri & bloggerlar" },
    { icon: "🚀", label: "Girişimciler & startup'lar" },
  ],

  forWhomEN: [
    { icon: "📣", label: "Social media managers" },
    { icon: "🏪", label: "Small business owners" },
    { icon: "🎓", label: "Teachers & educators" },
    { icon: "💼", label: "Marketing teams" },
    { icon: "✍️", label: "Content creators & bloggers" },
    { icon: "🚀", label: "Entrepreneurs & startups" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",   note: "Temel şablonlar ve özellikler" },
    { plan: "Pro",      price: "$15 / ay",  note: "Premium şablonlar, magic studio" },
    { plan: "Teams",    price: "$10 / ay",  note: "Kişi başı, ekip özellikleri" },
    { plan: "Enterprise", price: "Özel",   note: "Kurumsal SSO ve destek" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",   note: "Core templates and features" },
    { plan: "Pro",      price: "$15 / mo",  note: "Premium templates, magic studio" },
    { plan: "Teams",    price: "$10 / mo",  note: "Per person, team features" },
    { plan: "Enterprise", price: "Custom",   note: "Enterprise SSO and support" },
  ],

  prosTR: [
    "Tasarım bilgisi gerektirmiyor",
    "Şablon kütüphanesi inanılmaz zengin",
    "Magic Studio AI özellikleri güçlü",
    "Ekip iş birliği çok pratik",
    "Ücretsiz planda çok şey yapılabiliyor",
  ],

  prosEN: [
    "No design knowledge required",
    "Incredibly rich template library",
    "Powerful Magic Studio AI features",
    "Team collaboration is very practical",
    "A lot is possible on the free plan",
  ],

  consTR: [
    "Adobe araçları kadar profesyonel kontrol yok",
    "Şablonlar bazen klişe gelebilir",
    "Büyük marka projelerinde sınırlı",
  ],

  consEN: [
    "Not as much professional control as Adobe tools",
    "Templates can sometimes feel generic",
    "Limited for large-scale brand projects",
  ],

  promptsTR: [
    {
      label: "📣 Instagram Görseli",
      prompt: "Yeni Tasarım → Instagram Post (1080x1080) → Magic Studio → 'Yaz temalı, tropikal tonlarda ürün kampanyası görseli' → Generate → Metinleri düzenle",
      output: `Beklened Çıktı:
Tropikal renkler (sarı, turuncu, yeşil), palmiye yaprakları desenli arka plan, merkezi ürün alanı. Başlık için yer ayrılmış kompozisyon. 
İpucu: Şirket renkleri için marka kitini önce ayarla.`,
    },
    {
      label: "📊 Sunum Hazırlama",
      prompt: "Sunum → Şablon seç → Magic Design → 'AI araçları ve dijital dönüşüm, 10 slayt' → Otomatik içerik oluştur → Düzenle",
      output: `Beklened Çıktı:
10 slaytlık profesyonel sunum:
• Kapak slaytı (başlık + görsel)
• İçindekiler
• 7 içerik slaytı (veri, grafik, metin dengesi)
• Kapanış CTA slaytı
Tüm slaylar otomatik renk ve font tutarlılığıyla oluşturuldu.`,
    },
    {
      label: "✂️ Arka Plan Kaldırma",
      prompt: "Görsel yükle → Resim Düzenle → Arka Planı Kaldır → Yeni arka plan ekle veya şeffaf olarak indir",
      output: `Beklened Sonuç:
Ürün fotoğrafı arka plandan ayrıştırıldı. Şeffaf PNG olarak indir veya Canva içinde yeni arka plan ekle. E-ticaret ürün görselleri için çok pratik.`,
    },
  ],

  promptsEN: [
    {
      label: "📣 Instagram Post",
      prompt: "New Design → Instagram Post (1080x1080) → Magic Studio → 'Summer themed, tropical tones, product campaign visual' → Generate → Edit text",
      output: `Expected Output:
Tropical colors (yellow, orange, green), palm leaf pattern background, central product area. Composition with space for a headline.
Tip: Set your brand kit colors first.`,
    },
    {
      label: "📊 Presentation",
      prompt: "Presentation → Select template → Magic Design → 'AI tools and digital transformation, 10 slides' → Auto-generate content → Edit",
      output: `Expected Output:
10-slide professional presentation:
• Cover slide (title + visual)
• Table of contents
• 7 content slides (data, charts, text balance)
• Closing CTA slide
All slides generated with automatic color and font consistency.`,
    },
    {
      label: "✂️ Background Removal",
      prompt: "Upload image → Edit Image → Remove Background → Add new background or download as transparent",
      output: `Expected Result:
Product photo separated from background. Download as transparent PNG or add a new background within Canva. Very practical for e-commerce product images.`,
    },
  ],

  alternativeSlugs: ["adobe-firefly", "dall-e", "capcut"],
};
