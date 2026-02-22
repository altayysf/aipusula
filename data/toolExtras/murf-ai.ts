import type { ToolExtra } from "./types";

export const murf_ai: ToolExtra = {
  longDescTR: `Murf AI, metni doğal ve profesyonel kalitede sese dönüştürme konusunda uzmanlaşmış bir yapay zekâ seslendirme platformudur. 120'den fazla dil ve aksan seçeneği ile geniş bir ses kütüphanesi sunan Murf, özellikle kurumsal seslendirme, e-öğrenme ve pazarlama içerikleri için tercih edilen bir araçtır.

Platformun öne çıkan özelliği, stüdyo kalitesinde ses üretimini teknik ekipman veya profesyonel seslendirme sanatçısı gerektirmeden sağlamasıdır. Ses tonu, hız, vurgu ve duraksamaları özelleştirme imkânı, doğal bir seslendirme deneyimi sunar.

Türkçe dahil çok sayıda dilde ve farklı ses tonlarında (genç, olgun, erkek, kadın, nötr) üretim yapılabilen Murf, video seslendirmesi için doğrudan video yükleme ve ses-video senkronizasyonu özelliklerini de bünyesinde barındırır.`,

  longDescEN: `Murf AI is an AI voice generation platform specializing in converting text into natural, professional-quality audio. Offering a wide voice library with 120+ language and accent options, Murf is a preferred tool especially for corporate voiceovers, e-learning, and marketing content.

The platform's standout feature is providing studio-quality audio production without the need for technical equipment or professional voice actors. The ability to customize voice tone, speed, emphasis, and pauses delivers a natural voiceover experience.

Murf also includes direct video upload and audio-video synchronization features for video voiceovers, making it a comprehensive content production tool.`,

  featuresTR: [
    { icon: "🎙️", title: "120+ Dil Desteği", desc: "Türkçe dahil geniş dil ve aksan yelpazesi." },
    { icon: "🎭", title: "Geniş Ses Kütüphanesi", desc: "Farklı yaş, cinsiyet ve ton seçenekleriyle 200'den fazla ses." },
    { icon: "⚙️", title: "Ses Özelleştirme", desc: "Hız, ton, vurgu ve duraksamaları ince ayarla." },
    { icon: "🎬", title: "Video Seslendirme", desc: "Video yükle, ses ekle, senkronizasyon otomatik." },
    { icon: "🔗", title: "API Entegrasyonu", desc: "Uygulamalara entegre edilebilir ses üretimi." },
    { icon: "📁", title: "Dışa Aktarma", desc: "MP3, WAV formatlarında yüksek kaliteli çıktı." },
  ],

  featuresEN: [
    { icon: "🎙️", title: "120+ Language Support", desc: "Wide language and accent range including many global languages." },
    { icon: "🎭", title: "Extensive Voice Library", desc: "200+ voices with different ages, genders, and tones." },
    { icon: "⚙️", title: "Voice Customization", desc: "Fine-tune speed, tone, emphasis, and pauses." },
    { icon: "🎬", title: "Video Voiceover", desc: "Upload a video, add audio, synchronization is automatic." },
    { icon: "🔗", title: "API Integration", desc: "Audio generation that can be integrated into applications." },
    { icon: "📁", title: "Export Options", desc: "High-quality output in MP3 and WAV formats." },
  ],

  forWhomTR: [
    { icon: "🎓", label: "E-öğrenme içerik üreticileri" },
    { icon: "📹", label: "Video içerik yapımcıları" },
    { icon: "📣", label: "Pazarlama & reklam ekipleri" },
    { icon: "🏢", label: "Kurumsal iletişim ekipleri" },
    { icon: "🌍", label: "Lokalizasyon projeleri" },
    { icon: "📚", label: "Sesli kitap üreticileri" },
  ],

  forWhomEN: [
    { icon: "🎓", label: "E-learning content creators" },
    { icon: "📹", label: "Video content producers" },
    { icon: "📣", label: "Marketing & ad teams" },
    { icon: "🏢", label: "Corporate communications teams" },
    { icon: "🌍", label: "Localization projects" },
    { icon: "📚", label: "Audiobook producers" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "10 dk/ay, sınırlı sesler" },
    { plan: "Basic",    price: "$19 / ay", note: "60 dk/ay, 60 ses" },
    { plan: "Pro",      price: "$26 / ay", note: "160 dk/ay, 120+ ses" },
    { plan: "Enterprise", price: "Özel",  note: "Sınırsız, özel entegrasyon" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "10 dk/ay, sınırlı sesler" },
    { plan: "Basic",    price: "$19 / mo", note: "60 dk/ay, 60 ses" },
    { plan: "Pro",      price: "$26 / mo", note: "160 dk/ay, 120+ ses" },
    { plan: "Enterprise", price: "Custom",  note: "Unlimited, custom integration" },
  ],

  prosTR: [
    "120+ dil ve geniş ses seçenekleri",
    "Video seslendirme entegrasyonu",
    "Kurumsal kalitede profesyonel sesler",
    "Kullanıcı dostu arayüz",
  ],

  prosEN: [
    "120+ languages and wide voice selection",
    "Video voiceover integration",
    "Professional corporate-quality voices",
    "User-friendly interface",
  ],

  consTR: [
    "Ücretsiz planda çok kısa limit (10 dk)",
    "ElevenLabs kadar gerçekçi ses klonlama yok",
    "Türkçe ses seçenekleri sınırlı",
  ],

  consEN: [
    "Very short limit on free plan (10 min)",
    "No voice cloning as realistic as ElevenLabs",
    "Voice selection in some languages is limited",
  ],

  promptsTR: [
    {
      label: "🎙️ Tanıtım Videosu Sesi",
      prompt: "Metin gir → Ses: 'Türkçe Kadın - Profesyonel' → Hız: Normal → Vurgu: Yüksek → Önizle → İndir",
      output: `Beklened Çıktı:
"AI Pusula, en iyi yapay zeka araçlarını keşfetmeniz için tasarlanmış kapsamlı bir rehberdir..." cümlesi doğal tonlamayla, net telaffuzla okunuyor.
MP3 formatında indir, video editörüne import et.`,
    },
    {
      label: "🎬 Video + Ses Senkronizasyonu",
      prompt: "Proje oluştur → Video yükle → Metin senaryoyu yapıştır → Ses seç → Otomatik senkronize et → Dışa aktar",
      output: `Beklened Sonuç:
Video görüntüsü ve seslendirme otomatik olarak senkronize edildi. Gerekirse manuel zamanlama ayarı yapılabilir. MP4 olarak dışa aktarılabilir.`,
    },
    {
      label: "🌍 Çok Dilli Seslendirme",
      prompt: "Türkçe metni İngilizce'ye çevir → Murf'te 'English US Female' seçin → Oluştur → İki versiyonu karşılaştır",
      output: `Türkçe Versiyon: Profesyonel Türkçe kadın sesi
İngilizce Versiyon: Amerikan aksanlı kadın sesi

İpucu: Aynı proje içinde birden fazla dilde versiyon oluşturup karşılaştırabilirsin.`,
    },
  ],

  promptsEN: [
    {
      label: "🎙️ Promo Video Voice",
      prompt: "Enter text → Voice: 'English Female - Professional' → Speed: Normal → Emphasis: High → Preview → Download",
      output: `Expected Output:
"AI Pusula is a comprehensive guide designed to help you discover the best AI tools..." read with natural intonation and clear pronunciation.
Download as MP3, import into your video editor.`,
    },
    {
      label: "🎬 Video + Voice Sync",
      prompt: "Create project → Upload video → Paste script → Select voice → Auto-synchronize → Export",
      output: `Expected Result:
Video footage and voiceover automatically synchronized. Manual timing adjustment possible if needed. Exportable as MP4.`,
    },
    {
      label: "🌍 Multilingual Voiceover",
      prompt: "Translate English text to French and German → In Murf, select 'French Female' and 'German Male' → Generate → Compare",
      output: `English Version: Professional English female voice
French Version: Native French female voice
German Version: Native German male voice

Tip: You can create and compare multiple language versions within the same project.`,
    },
  ],

  alternativeSlugs: ["elevenlabs", "descript", "whisper"],
};
