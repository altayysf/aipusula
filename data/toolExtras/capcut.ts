import type { ToolExtra } from "./types";

export const capcut: ToolExtra = {
  longDescTR: `CapCut, ByteDance (TikTok'un ana şirketi) tarafından geliştirilen ve özellikle sosyal medya içerik üretimi için tasarlanmış ücretsiz video düzenleme platformudur. Mobil uygulama ve web versiyonuyla hem telefon hem bilgisayar üzerinden kullanılabilir.

Platformun en büyük gücü, hazır şablon kütüphanesidir. TikTok ve Instagram Reels trendlerine uygun binlerce şablon arasından seçim yaparak dakikalar içinde çekici videolar oluşturabilirsin. Otomatik altyazı, arkaplan kaldırma, AI avatar oluşturma ve ses senkronizasyonu gibi AI özellikler ücretsiz olarak sunulur.

Teknik bilgi gerektirmeyen sezgisel arayüzü ve güçlü AI araçları sayesinde CapCut, başlangıç seviyesindeki içerik üreticilerinden profesyonel sosyal medya yöneticilerine kadar geniş bir kullanıcı tabanına hitap eder. Türkiye'de de en çok kullanılan video düzenleme araçlarından biridir.`,

  longDescEN: `CapCut is a free video editing platform developed by ByteDance (TikTok's parent company), designed especially for social media content creation. Available as a mobile app and web version, it works on both phones and computers.

The platform's greatest strength is its ready-made template library. With thousands of templates tuned to TikTok and Instagram Reels trends, you can create engaging videos in minutes. AI features like automatic subtitles, background removal, AI avatar creation, and audio sync are offered for free.

Thanks to its intuitive interface that requires no technical knowledge and powerful AI tools, CapCut appeals to a wide user base from beginner content creators to professional social media managers.`,

  featuresTR: [
    { icon: "📱", title: "Mobil & Web", desc: "iOS, Android ve tarayıcı üzerinden erişilebilir." },
    { icon: "🎨", title: "Hazır Şablonlar", desc: "TikTok ve Reels trendlerine özel binlerce şablon." },
    { icon: "📝", title: "Otomatik Altyazı", desc: "Sesi metne çevirerek otomatik altyazı ekler." },
    { icon: "✂️", title: "Arka Plan Kaldırma", desc: "Tek tıklamayla arka planı kaldırır." },
    { icon: "🤖", title: "AI Avatar", desc: "Metin girerek konuşan AI avatar videoları oluşturur." },
    { icon: "🎵", title: "Ses Senkronizasyonu", desc: "Müzik ritmine göre otomatik video kesimi." },
  ],

  featuresEN: [
    { icon: "📱", title: "Mobile & Web", desc: "Accessible via iOS, Android, and browser." },
    { icon: "🎨", title: "Ready Templates", desc: "Thousands of templates tailored for TikTok and Reels trends." },
    { icon: "📝", title: "Auto Subtitles", desc: "Converts speech to text and adds subtitles automatically." },
    { icon: "✂️", title: "Background Removal", desc: "Remove backgrounds with a single tap." },
    { icon: "🤖", title: "AI Avatar", desc: "Create talking AI avatar videos by entering text." },
    { icon: "🎵", title: "Audio Sync", desc: "Automatic video cuts synced to the music beat." },
  ],

  forWhomTR: [
    { icon: "📱", label: "TikTok & Instagram içerik üreticileri" },
    { icon: "💼", label: "Küçük işletme sahipleri" },
    { icon: "🎓", label: "Öğrenci & genç yaratıcılar" },
    { icon: "📣", label: "Sosyal medya yöneticileri" },
    { icon: "🛍️", label: "E-ticaret satıcıları" },
    { icon: "👨‍🏫", label: "Eğitim içeriği üretenler" },
  ],

  forWhomEN: [
    { icon: "📱", label: "TikTok & Instagram content creators" },
    { icon: "💼", label: "Small business owners" },
    { icon: "🎓", label: "Students & young creators" },
    { icon: "📣", label: "Social media managers" },
    { icon: "🛍️", label: "E-commerce sellers" },
    { icon: "👨‍🏫", label: "Educational content creators" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "Temel özellikler, filigran var" },
    { plan: "Pro",       price: "$9.99 / ay", note: "Filigransız, premium şablonlar" },
    { plan: "Business",  price: "$19.99 / ay", note: "Ekip çalışması, marka kiti" },
    { plan: "Enterprise", price: "Özel",   note: "Kurumsal lisans" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "Core features, watermark present" },
    { plan: "Pro",       price: "$9.99 / mo", note: "No watermark, premium templates" },
    { plan: "Business",  price: "$19.99 / mo", note: "Ekip çalışması, marka kiti" },
    { plan: "Enterprise", price: "Custom",   note: "Enterprise license" },
  ],

  prosTR: [
    "Ücretsiz planda güçlü özellikler",
    "Hazır şablon kütüphanesi çok zengin",
    "Otomatik altyazı çok başarılı",
    "Mobil kullanımda çok kolay",
    "TikTok trend entegrasyonu",
  ],

  prosEN: [
    "Powerful features on the free plan",
    "Very rich template library",
    "Highly accurate auto subtitles",
    "Very easy to use on mobile",
    "TikTok trend integration",
  ],

  consTR: [
    "Ücretsiz planda filigran sorunu",
    "Gelişmiş profesyonel düzenleme sınırlı",
    "ByteDance/veri gizliliği endişeleri",
    "Uzun videolarda yavaşlayabiliyor",
  ],

  consEN: [
    "Watermark issue on free plan",
    "Advanced professional editing is limited",
    "ByteDance/data privacy concerns",
    "Can slow down with long videos",
  ],

  promptsTR: [
    {
      label: "📝 Otomatik Altyazı",
      prompt: "Video yükle → Metin → Otomatik Altyazı → Türkçe seç → Oluştur → Stili düzenle (renk, font, boyut)",
      output: `Beklenen Sonuç:
Konuşmalar otomatik tanınarak her cümle için altyazı oluşturulur. %90+ doğruluk oranı. Kelime kelime vurgulama için 'Karaoke Stili' seç.

İpucu: Altyazı stilini markana göre özelleştir ve şablon olarak kaydet.`,
    },
    {
      label: "🎬 Trend Şablonu",
      prompt: "Şablonlar → Kategori: İş/Pazarlama → Ürün tanıtım şablonu seç → Fotoğraflarını ekle → Metinleri düzenle → Dışa aktar",
      output: `Beklened Sonuç:
Hazır animasyonlu şablona kendi ürün fotoğraflarını ekliyorsun. Müzik ve geçişler otomatik uyum sağlıyor. 30 saniyede sosyal medyaya hazır video.`,
    },
    {
      label: "🤖 AI Avatar Video",
      prompt: "AI Araçları → AI Avatar → Avatar seç → Metin yaz → Dil: Türkçe → Ses seç → Oluştur",
      output: `Beklened Sonuç:
Girdiğin metni okuyan, gerçekçi görünümlü AI avatar videosu oluşur. Ürün tanıtımı, eğitim içeriği veya haber anlatımı için pratik çözüm.`,
    },
  ],

  promptsEN: [
    {
      label: "📝 Auto Subtitles",
      prompt: "Upload video → Text → Auto Subtitles → Select language → Generate → Edit style (color, font, size)",
      output: `Expected Result:
Speech is auto-detected and subtitles are created for each sentence. 90%+ accuracy. Select 'Karaoke Style' for word-by-word highlighting.

Tip: Customize the subtitle style to match your brand and save as a template.`,
    },
    {
      label: "🎬 Trend Template",
      prompt: "Templates → Category: Business/Marketing → Select product promo template → Add your photos → Edit text → Export",
      output: `Expected Result:
Your product photos drop into a pre-animated template. Music and transitions auto-adapt. A social-media-ready video in 30 seconds.`,
    },
    {
      label: "🤖 AI Avatar Video",
      prompt: "AI Tools → AI Avatar → Select avatar → Enter text → Language: English → Select voice → Generate",
      output: `Expected Result:
An AI avatar video is created reading your input text, looking realistic. Practical for product demos, educational content, or news narration.`,
    },
  ],

  alternativeSlugs: ["veed", "runway", "pika"],
};
