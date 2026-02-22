import type { ToolExtra } from "./types";

export const whisper: ToolExtra = {
  longDescTR: `Whisper, OpenAI tarafından geliştirilen ve açık kaynak olarak yayımlanan konuşmayı metne çevirme (speech-to-text) modelidir. 680.000 saatlik çok dilli ses verisiyle eğitilmiş olan model, transkripsiyon doğruluğu açısından sektörün en güçlü araçlarından biri konumundadır.

Türkçe dahil 99 dili destekleyen Whisper, özellikle zorlu koşullarda (arka plan gürültüsü, aksan, hızlı konuşma) dahi yüksek doğruluk oranı sergilemektedir. Açık kaynak yapısı sayesinde tamamen ücretsiz, yerel ortamda çalıştırılabilir.

Toplantı notları, röportaj transkriptleri, video altyazısı üretimi ve çok dilli içerik işleme gibi alanlarda yaygın olarak kullanılır. Teknik kullanıcılar için Python ile doğrudan entegrasyon sağlanabilirken, kullanıcı dostu arayüzler sunan üçüncü taraf uygulamalar aracılığıyla teknik bilgi olmadan da kullanmak mümkündür.`,

  longDescEN: `Whisper is an open-source speech-to-text model developed by OpenAI. Trained on 680,000 hours of multilingual audio data, it is one of the strongest tools in the industry for transcription accuracy.

Supporting 99 languages, Whisper demonstrates high accuracy even in challenging conditions — background noise, accents, and fast speech. Its open-source nature means it can be run completely locally and for free.

It is widely used for meeting notes, interview transcripts, video subtitle generation, and multilingual content processing. Technical users can integrate it directly via Python, while third-party applications with user-friendly interfaces make it usable without any technical knowledge.`,

  featuresTR: [
    { icon: "🎯", title: "Yüksek Doğruluk", desc: "Gürültülü ortam ve aksanlı konuşmalarda dahi güçlü transkripsiyon." },
    { icon: "🌍", title: "99 Dil Desteği", desc: "Türkçe dahil geniş dil yelpazesinde transkripsiyon ve çeviri." },
    { icon: "🔓", title: "Açık Kaynak & Ücretsiz", desc: "Yerel makinede tamamen ücretsiz çalıştırılabilir." },
    { icon: "📁", title: "Farklı Format Desteği", desc: "MP3, MP4, WAV, M4A gibi ses formatlarını işler." },
    { icon: "🔗", title: "API & Python Entegrasyonu", desc: "Uygulamalara ve iş akışlarına kolayca entegre edilir." },
    { icon: "📝", title: "Altyazı Çıktısı", desc: "SRT ve VTT formatında zaman damgalı altyazı dosyası üretir." },
  ],

  featuresEN: [
    { icon: "🎯", title: "High Accuracy", desc: "Strong transcription even in noisy environments and with accents." },
    { icon: "🌍", title: "99 Language Support", desc: "Transcription and translation across a wide language range." },
    { icon: "🔓", title: "Open Source & Free", desc: "Run locally on your machine completely for free." },
    { icon: "📁", title: "Multiple Format Support", desc: "Processes MP3, MP4, WAV, M4A, and other audio formats." },
    { icon: "🔗", title: "API & Python Integration", desc: "Easily integrates into applications and workflows." },
    { icon: "📝", title: "Subtitle Output", desc: "Generates time-stamped subtitle files in SRT and VTT formats." },
  ],

  forWhomTR: [
    { icon: "💻", label: "Geliştiriciler & teknik kullanıcılar" },
    { icon: "🎙️", label: "Podcast & röportaj yapımcıları" },
    { icon: "🏢", label: "Toplantı notları tutan ekipler" },
    { icon: "📹", label: "Video içerik üreticileri" },
    { icon: "🔬", label: "Araştırmacılar & akademisyenler" },
    { icon: "🌍", label: "Çok dilli proje sahipleri" },
  ],

  forWhomEN: [
    { icon: "💻", label: "Developers & technical users" },
    { icon: "🎙️", label: "Podcast & interview creators" },
    { icon: "🏢", label: "Teams taking meeting notes" },
    { icon: "📹", label: "Video content creators" },
    { icon: "🔬", label: "Researchers & academics" },
    { icon: "🌍", label: "Multilingual project owners" },
  ],

  pricingTR: [
    { plan: "Açık Kaynak", price: "Ücretsiz", note: "Kendi sunucunda sınırsız" },
    { plan: "OpenAI API", price: "$0.006/dk", note: "Bulut tabanlı, ölçeklenebilir" },
    { plan: "Üçüncü Taraf (Uydu vb.)", price: "Değişken", note: "Kullanıcı dostu arayüzler" },
    { plan: "Enterprise", price: "Özel",    note: "Yüksek hacim ve destek" },
  ],

  pricingEN: [
    { plan: "Açık Kaynak", price: "Ücretsiz", note: "Unlimited on your own server" },
    { plan: "OpenAI API", price: "$0.006/dk", note: "Cloud-based, scalable" },
    { plan: "Üçüncü Taraf (Uydu vb.)", price: "Değişken", note: "Kullanıcı dostu arayüzler" },
    { plan: "Enterprise", price: "Custom",    note: "High volume and support" },
  ],

  prosTR: [
    "Açık kaynak ve tamamen ücretsiz yerel kullanım",
    "99 dilde yüksek doğruluk",
    "Gürültülü ortamlarda güçlü",
    "SRT altyazı çıktısı",
    "API ile entegrasyon kolaylığı",
  ],

  prosEN: [
    "Open source and completely free for local use",
    "High accuracy in 99 languages",
    "Strong in noisy environments",
    "SRT subtitle output",
    "Easy API integration",
  ],

  consTR: [
    "Doğrudan kullanım teknik bilgi gerektirir",
    "Gerçek zamanlı (real-time) transkripsiyon sınırlı",
    "GUI yok — üçüncü taraf araç gerekebilir",
  ],

  consEN: [
    "Direct use requires technical knowledge",
    "Real-time transcription is limited",
    "No GUI — a third-party tool may be needed",
  ],

  promptsTR: [
    {
      label: "🐍 Python ile Temel Kullanım",
      prompt: `import whisper
model = whisper.load_model("medium")
result = model.transcribe("toplanti.mp3", language="tr")
print(result["text"])`,
      output: `Beklened Çıktı:
"...bugün proje güncellemelerini konuşacağız. İlk madde, pazarlama kampanyasının sonuçları. Geçen ay %18 büyüme elde ettik ve..."

Not: "medium" model iyi denge sunar. Daha yüksek doğruluk için "large-v3" kullan.`,
    },
    {
      label: "📝 SRT Altyazı Üretimi",
      prompt: `result = model.transcribe("video.mp4", language="tr", word_timestamps=True)
# SRT formatında kaydet
from whisper.utils import get_writer
writer = get_writer("srt", ".")
writer(result, "video.mp4")`,
      output: `Beklened Çıktı (video.srt):
1
00:00:00,000 --> 00:00:03,500
Merhaba, bugün yapay zeka araçlarını inceliyoruz.

2
00:00:03,500 --> 00:00:07,200
İlk aracımız OpenAI'ın Whisper modeli.`,
    },
    {
      label: "🌍 Dil Çevirisi",
      prompt: `# Türkçe konuşmayı İngilizce metne çevir
result = model.transcribe("konusma.mp3", task="translate")
print(result["text"])  # Direkt İngilizce çıktı`,
      output: `Beklened Çıktı:
"Hello, today we are examining artificial intelligence tools. Our first tool is OpenAI's Whisper model..."

Not: translate task her dili İngilizce'ye çevirir.`,
    },
  ],

  promptsEN: [
    {
      label: "🐍 Basic Python Usage",
      prompt: `import whisper
model = whisper.load_model("medium")
result = model.transcribe("meeting.mp3", language="en")
print(result["text"])`,
      output: `Expected Output:
"...we'll be discussing the project updates today. First item: marketing campaign results. Last month we achieved 18% growth and..."

Note: "medium" model offers a good balance. Use "large-v3" for higher accuracy.`,
    },
    {
      label: "📝 SRT Subtitle Generation",
      prompt: `result = model.transcribe("video.mp4", language="en", word_timestamps=True)
from whisper.utils import get_writer
writer = get_writer("srt", ".")
writer(result, "video.mp4")`,
      output: `Expected Output (video.srt):
1
00:00:00,000 --> 00:00:03,500
Hello, today we're looking at AI tools.

2
00:00:03,500 --> 00:00:07,200
Our first tool is OpenAI's Whisper model.`,
    },
    {
      label: "🌍 Language Translation",
      prompt: `# Translate speech from any language to English text
result = model.transcribe("speech.mp3", task="translate")
print(result["text"])  # Direct English output`,
      output: `Expected Output:
"Hello, today we are examining artificial intelligence tools. Our first tool is OpenAI's Whisper model..."

Note: The translate task converts any language directly to English.`,
    },
  ],

  alternativeSlugs: ["descript", "elevenlabs", "murf-ai"],
};
