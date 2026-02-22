import type { ToolExtra } from "./types";

export const elevenlabs: ToolExtra = {
  longDescTR: `ElevenLabs, metinden ses üretimi (text-to-speech) ve ses klonlama konusunda sektörün en ileri teknolojisini sunan yapay zekâ platformudur. Ürettiği seslerin doğallığı ve insan sesine yakınlığı açısından rakipsiz bir konumda bulunmaktadır.

Platformun en dikkat çekici özelliği, ses klonlama kapasitesidir. Yalnızca birkaç dakikalık ses kaydıyla bir kişinin sesini klonlamak ve bu ses üzerinden farklı metinleri okutmak mümkündür. Bu özellik, içerik üreticileri için kendi seslerini ölçeklendirme imkânı sunar.

Türkçe dahil 30'dan fazla dilde yüksek kaliteli ses üretimi yapılabilir. Podcast anlatımı, YouTube video sesi, reklam seslendirmesi, e-öğrenme ve sesli kitap üretimi gibi alanlarda yaygın olarak kullanılmaktadır. API erişimi sayesinde uygulamalara entegre edilebilir.`,

  longDescEN: `ElevenLabs is an AI platform offering industry-leading technology in text-to-speech and voice cloning. The naturalness and proximity to human voice of its generated audio is unrivaled in the market.

The platform's most remarkable feature is its voice cloning capability. With just a few minutes of audio recording, it's possible to clone a person's voice and have different texts read in that voice. This gives content creators the ability to scale their own voices.

High-quality voice generation is available in 30+ languages. It is widely used for podcast narration, YouTube video voiceover, ad dubbing, e-learning, and audiobook production. API access makes it easy to integrate into applications.`,

  featuresTR: [
    { icon: "🎙️", title: "Doğal Ses Üretimi", desc: "İnsan sesine en yakın text-to-speech kalitesi sunar." },
    { icon: "👤", title: "Ses Klonlama", desc: "Birkaç dakikalık kayıtla bir sesi klonlayabilirsin." },
    { icon: "🌍", title: "30+ Dil Desteği", desc: "Türkçe dahil çok sayıda dilde yüksek kaliteli çıktı." },
    { icon: "🎭", title: "Geniş Ses Kütüphanesi", desc: "Yüzlerce hazır ses ve ton arasından seçim yapabilirsin." },
    { icon: "⚙️", title: "Ses Ayarları", desc: "Ton, hız, duraklama ve vurgu üzerinde ince kontrol." },
    { icon: "🔗", title: "API Entegrasyonu", desc: "Uygulamalara ve iş akışlarına kolayca entegre edilir." },
  ],

  featuresEN: [
    { icon: "🎙️", title: "Natural Voice Generation", desc: "Offers the most human-like text-to-speech quality in the industry." },
    { icon: "👤", title: "Voice Cloning", desc: "Clone any voice with just a few minutes of recording." },
    { icon: "🌍", title: "30+ Language Support", desc: "High-quality output in many languages." },
    { icon: "🎭", title: "Extensive Voice Library", desc: "Choose from hundreds of ready-made voices and tones." },
    { icon: "⚙️", title: "Voice Controls", desc: "Fine control over tone, speed, pauses, and emphasis." },
    { icon: "🔗", title: "API Integration", desc: "Easily integrates into applications and workflows." },
  ],

  forWhomTR: [
    { icon: "🎙️", label: "Podcast yapımcıları" },
    { icon: "📹", label: "YouTube & video içerik üreticileri" },
    { icon: "📚", label: "Sesli kitap & e-öğrenme içerikleri" },
    { icon: "📣", label: "Reklam & marka seslendirme" },
    { icon: "💻", label: "Geliştiriciler & uygulama yapımcıları" },
    { icon: "🌍", label: "Lokalizasyon & çeviri projeleri" },
  ],

  forWhomEN: [
    { icon: "🎙️", label: "Podcast creators" },
    { icon: "📹", label: "YouTube & video content creators" },
    { icon: "📚", label: "Audiobooks & e-learning content" },
    { icon: "📣", label: "Ad & brand voiceovers" },
    { icon: "💻", label: "Developers & app builders" },
    { icon: "🌍", label: "Localization & translation projects" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",   note: "10.000 karakter/ay, sınırlı ses" },
    { plan: "Starter",  price: "$5 / ay",   note: "30.000 karakter/ay" },
    { plan: "Creator",  price: "$22 / ay",  note: "100.000 karakter/ay, ses klonlama" },
    { plan: "Pro",      price: "$99 / ay",  note: "500.000 karakter/ay" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",   note: "10,000 chars/month, limited voices" },
    { plan: "Starter",  price: "$5 / mo",   note: "30,000 chars/month" },
    { plan: "Creator",  price: "$22 / mo",  note: "100,000 chars/month, voice cloning" },
    { plan: "Pro",      price: "$99 / mo",  note: "500,000 chars/month" },
  ],

  prosTR: [
    "Sektörün en doğal ve kaliteli TTS sesi",
    "Ses klonlama kapasitesi etkileyici",
    "Türkçe dahil geniş dil desteği",
    "API ile kolay entegrasyon",
    "Geniş hazır ses kütüphanesi",
  ],

  prosEN: [
    "Industry's most natural and high-quality TTS",
    "Impressive voice cloning capability",
    "Broad language support",
    "Easy API integration",
    "Extensive ready-made voice library",
  ],

  consTR: [
    "Ücretsiz planda karakter limiti düşük",
    "Ses klonlama ücretli planlarda",
    "Etik kullanım konusunda dikkat gerektirir",
  ],

  consEN: [
    "Low character limit on free plan",
    "Voice cloning requires paid plans",
    "Ethical use requires caution",
  ],

  promptsTR: [
    {
      label: "🎙️ Podcast Anlatımı",
      prompt: "Metin gir → Ses seç: 'Türkçe Erkek - Profesyonel' → Hız: 0.95 → Duraklama: orta → Oluştur → MP3 indir",
      output: `Beklened Çıktı:
Doğal tonlamayla okunan profesyonel anlatım sesi. Noktalama işaretlerine göre doğal duraklamalar. Podcast intro veya bölüm anlatımı için kullanıma hazır MP3.`,
    },
    {
      label: "📹 Video Seslendirme",
      prompt: "Senaryo metnini yapıştır → Ses: 'Energetic Female' → Hız: 1.05 → Stability: 0.7 → Clarity: 0.8 → Oluştur",
      output: `Beklened Çıktı:
Enerjik, net ve profesyonel kadın sesi. YouTube veya reklam videosu için uygun. Ses dosyasını video editörüne import edip videonla senkronize et.`,
    },
    {
      label: "🌍 Çok Dilli İçerik",
      prompt: "Türkçe metni İngilizce, Almanca ve İspanyolca'ya çevir (ChatGPT ile) → Her dil için ElevenLabs'ta o dile uygun ses seç → Ayrı ayrı oluştur",
      output: `Beklened Çıktı:
Aynı içerik 4 farklı dilde, her biri o dile native ses tonuyla üretilmiş. Lokalizasyon projesi için maliyet ve zamandan büyük tasarruf.`,
    },
  ],

  promptsEN: [
    {
      label: "🎙️ Podcast Narration",
      prompt: "Enter text → Select voice: 'English Male - Professional' → Speed: 0.95 → Pause: Medium → Generate → Download MP3",
      output: `Expected Output:
Professional narration voice reading with natural intonation. Natural pauses based on punctuation. Ready MP3 for podcast intro or episode narration.`,
    },
    {
      label: "📹 Video Voiceover",
      prompt: "Paste script → Voice: 'Energetic Female' → Speed: 1.05 → Stability: 0.7 → Clarity: 0.8 → Generate",
      output: `Expected Output:
Energetic, clear, and professional female voice. Suitable for YouTube or ad videos. Import the audio file into your video editor and sync with your footage.`,
    },
    {
      label: "🌍 Multilingual Content",
      prompt: "Translate the text to French, German, and Spanish (using ChatGPT) → Select a native-sounding voice for each language in ElevenLabs → Generate separately",
      output: `Expected Output:
Same content produced in 4 different languages, each with a native-sounding voice. Massive cost and time savings for a localization project.`,
    },
  ],

  alternativeSlugs: ["murf-ai", "descript", "whisper"],
};
