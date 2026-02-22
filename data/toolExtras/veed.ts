import type { ToolExtra } from "./types";

export const veed: ToolExtra = {
  longDescTR: `VEED.IO, tarayıcı tabanlı çalışan ve kurulum gerektirmeyen online video düzenleme platformudur. Özellikle hızlı düzenleme, otomatik altyazı ve sosyal medya çıktıları konusunda kullanıcı dostu bir deneyim sunar.

Platformun öne çıkan özelliği, doğruluk oranı yüksek otomatik altyazı sistemidir. Podcast ve röportaj videolarını metne dönüştürmek, altyazı eklemek ve erişilebilirliği artırmak için yaygın olarak kullanılır. Ayrıca arka plan gürültü kaldırma, ses iyileştirme ve video boyut dönüştürme gibi pratik araçlar da sunar.

Herhangi bir yazılım kurmadan, yalnızca tarayıcı üzerinden çalışması, ekip içi iş birliği ve hızlı düzenleme gerektiren durumlar için VEED'i pratik bir tercih haline getirir.`,

  longDescEN: `VEED.IO is a browser-based online video editing platform that requires no installation. It offers a user-friendly experience especially for quick edits, automatic subtitles, and social media outputs.

The platform's standout feature is its highly accurate auto-subtitle system. It is widely used to transcribe podcast and interview videos, add subtitles, and improve accessibility. It also offers practical tools like background noise removal, audio enhancement, and video resizing.

Its ability to work from any device without installing any software makes VEED a practical choice for team collaboration and situations that require quick edits.`,

  featuresTR: [
    { icon: "🌐", title: "Tarayıcı Tabanlı", desc: "Kurulum gerektirmez, her cihazdan erişilebilir." },
    { icon: "📝", title: "Otomatik Altyazı", desc: "Yüksek doğruluk oranıyla konuşmayı metne çevirir." },
    { icon: "🔇", title: "Gürültü Kaldırma", desc: "Arka plan sesini otomatik olarak temizler." },
    { icon: "📐", title: "Format Dönüştürme", desc: "Video boyutlarını farklı platformlar için hızla ayarlar." },
    { icon: "👥", title: "Ekip İş Birliği", desc: "Takım üyeleriyle ortak düzenleme ve yorum yapabilirsin." },
    { icon: "🎨", title: "Ekran Kaydı", desc: "Tarayıcı üzerinden ekran kaydı ve düzenleme imkânı." },
  ],

  featuresEN: [
    { icon: "🌐", title: "Browser-Based", desc: "No installation needed — accessible from any device." },
    { icon: "📝", title: "Auto Subtitles", desc: "Converts speech to text with high accuracy." },
    { icon: "🔇", title: "Noise Removal", desc: "Automatically cleans background noise." },
    { icon: "📐", title: "Format Conversion", desc: "Quickly adjusts video dimensions for different platforms." },
    { icon: "👥", title: "Team Collaboration", desc: "Team members can co-edit and leave comments." },
    { icon: "🎨", title: "Screen Recording", desc: "Record and edit your screen directly in the browser." },
  ],

  forWhomTR: [
    { icon: "🎙️", label: "Podcast yapımcıları" },
    { icon: "🎓", label: "Online eğitimciler & kursçular" },
    { icon: "💼", label: "Uzak çalışan ekipler" },
    { icon: "📣", label: "Sosyal medya yöneticileri" },
    { icon: "📊", label: "Kurumsal sunum hazırlayanlar" },
    { icon: "🌍", label: "Çok dilli içerik üretenler" },
  ],

  forWhomEN: [
    { icon: "🎙️", label: "Podcast creators" },
    { icon: "🎓", label: "Online educators & course creators" },
    { icon: "💼", label: "Remote working teams" },
    { icon: "📣", label: "Social media managers" },
    { icon: "📊", label: "Corporate presentation makers" },
    { icon: "🌍", label: "Multilingual content creators" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "250MB limit, filigran" },
    { plan: "Basic",    price: "$18 / ay", note: "1GB, filigransız" },
    { plan: "Pro",      price: "$30 / ay", note: "Sınırsız, tüm özellikler" },
    { plan: "Business", price: "$70 / ay", note: "Ekip lisansı" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "250MB limit, watermark" },
    { plan: "Basic",    price: "$18 / mo", note: "1GB, no watermark" },
    { plan: "Pro",      price: "$30 / mo", note: "Unlimited, all features" },
    { plan: "Business", price: "$70 / mo", note: "Team license" },
  ],

  prosTR: [
    "Kurulum gerektirmez, tarayıcıdan çalışır",
    "Otomatik altyazı kalitesi yüksek",
    "Gürültü kaldırma çok başarılı",
    "Ekip iş birliği özellikleri",
  ],

  prosEN: [
    "No installation — works from any browser",
    "High-quality auto subtitles",
    "Noise removal is very effective",
    "Team collaboration features",
  ],

  consTR: [
    "Ücretsiz planda boyut ve süre limiti",
    "CapCut kadar şablon çeşitliliği yok",
    "Gelişmiş renk düzeltme sınırlı",
  ],

  consEN: [
    "Size and duration limits on free plan",
    "Not as many templates as CapCut",
    "Advanced color correction is limited",
  ],

  promptsTR: [
    {
      label: "🎙️ Podcast Altyazısı",
      prompt: "Video/ses yükle → Altyazı → Otomatik Oluştur → Dil: Türkçe → Düzenle → SRT veya MP4 olarak dışa aktar",
      output: `Beklened Sonuç:
Podcast sesin kelime kelime yazıya döküldü. Hataları manuel düzenle, sonra stilize et. SRT dosyası olarak indirip YouTube veya başka platforma yükleyebilirsin.`,
    },
    {
      label: "🔇 Ses Temizleme",
      prompt: "Video yükle → Ses Ayarları → Arka Plan Gürültüsünü Kaldır → Ses Geliştir → Uygula",
      output: `Beklened Sonuç:
Ofis gürültüsü, klavye sesleri veya ventilatör sesi otomatik filtrelendi. Mikrofon sesi daha net ve profesyonel hale geldi.`,
    },
    {
      label: "📐 Sosyal Medya Formatı",
      prompt: "Video yükle → Boyut → Instagram Reels (9:16) seç → Video yeniden çerçeveleme → Dışa aktar",
      output: `Beklened Sonuç:
Yatay video otomatik dikey formata dönüştürüldü. Akıllı yeniden çerçeveleme sayesinde ana içerik kaybolmadan kırpıldı.`,
    },
  ],

  promptsEN: [
    {
      label: "🎙️ Podcast Subtitles",
      prompt: "Upload video/audio → Subtitles → Auto Generate → Language: English → Edit → Export as SRT or MP4",
      output: `Expected Result:
Your podcast audio is transcribed word by word. Manually correct errors, then stylize. Download the SRT file and upload it to YouTube or another platform.`,
    },
    {
      label: "🔇 Audio Cleanup",
      prompt: "Upload video → Audio Settings → Remove Background Noise → Enhance Audio → Apply",
      output: `Expected Result:
Office noise, keyboard sounds, or fan noise is automatically filtered. The microphone audio is now cleaner and more professional.`,
    },
    {
      label: "📐 Social Media Format",
      prompt: "Upload video → Size → Instagram Reels (9:16) → Smart reframe → Export",
      output: `Expected Result:
Landscape video automatically converted to vertical format. Smart reframing preserves the main content without cropping it out.`,
    },
  ],

  alternativeSlugs: ["capcut", "runway", "descript"],
};
