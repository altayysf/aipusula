import type { ToolExtra } from "./types";

export const adobe_firefly: ToolExtra = {
  longDescTR: `Adobe Firefly, dünyanın en büyük yaratıcı yazılım şirketi Adobe tarafından geliştirilen ve Adobe Creative Cloud ekosistemiyle derin entegrasyon sunan yapay zekâ görsel üretim platformudur. Photoshop, Illustrator ve Express gibi uygulamaların içine doğrudan entegre olması, mevcut tasarım iş akışlarını yapay zekâ ile güçlendirmeyi son derece kolaylaştırır.

Firefly'ın en kritik avantajı, ticari güvenlik konusundadır. Adobe'nin telif hakkı açısından temiz içeriklerle eğitilmiş modelleri kullanması, üretilen görsellerin ticari projelerde kullanılmasını hukuki riskler açısından güvenli kılar. Bu özellik, özellikle ajanslar ve kurumsal markalar için büyük değer taşır.

Generative Fill, Generative Expand ve Text to Image gibi özellikler, tasarımcıların hem yeni görseller oluşturmasını hem de mevcut görselleri kolayca düzenlemesini sağlar. Adobe ekosistemini kullanan herkes için doğal bir tamamlayıcı araçtır.`,

  longDescEN: `Adobe Firefly is an AI image generation platform developed by Adobe, the world's largest creative software company, offering deep integration with the Adobe Creative Cloud ecosystem. Its native integration into Photoshop, Illustrator, and Express makes it extremely easy to augment existing design workflows with AI.

Firefly's most critical advantage is commercial safety. Adobe's models are trained on commercially licensed, copyright-cleared content, making generated images legally safe for use in commercial projects. This is especially valuable for agencies and corporate brands.

Features like Generative Fill, Generative Expand, and Text to Image let designers both create new visuals and easily edit existing ones. It's a natural companion for anyone already using the Adobe ecosystem.`,

  featuresTR: [
    { icon: "🔗", title: "Adobe Ekosistemi Entegrasyonu", desc: "Photoshop, Illustrator ve Express içinde doğrudan kullanım." },
    { icon: "⚖️", title: "Ticari Güvenlik", desc: "Telif hakkı temiz içeriklerle eğitilmiş, ticari kullanıma uygun modeller." },
    { icon: "✂️", title: "Generative Fill", desc: "Fotoğraflardaki nesneleri kaldır veya yeni içerikle doldur." },
    { icon: "↔️", title: "Generative Expand", desc: "Görseli istenilen yönde yapay zekâyla genişlet." },
    { icon: "🎨", title: "Stil Aktarımı", desc: "Referans görselin stilini yeni içeriklere uygulama imkânı." },
    { icon: "📝", title: "Text Effects", desc: "Metin üzerine yaratıcı görsel efektler uygulayabilirsin." },
  ],

  featuresEN: [
    { icon: "🔗", title: "Adobe Ecosystem Integration", desc: "Works natively inside Photoshop, Illustrator, and Express." },
    { icon: "⚖️", title: "Commercial Safety", desc: "Trained on copyright-cleared content — safe for commercial use." },
    { icon: "✂️", title: "Generative Fill", desc: "Remove objects from photos or fill selections with new content." },
    { icon: "↔️", title: "Generative Expand", desc: "Extend an image in any direction using AI." },
    { icon: "🎨", title: "Style Transfer", desc: "Apply the style of a reference image to new content." },
    { icon: "📝", title: "Text Effects", desc: "Apply creative visual effects directly onto text." },
  ],

  forWhomTR: [
    { icon: "🎨", label: "Grafik tasarımcılar" },
    { icon: "📸", label: "Fotoğraf editörleri" },
    { icon: "🏢", label: "Ajanslar & marka ekipleri" },
    { icon: "📣", label: "Pazarlama profesyonelleri" },
    { icon: "🎬", label: "Video & medya prodüksiyon ekipleri" },
    { icon: "💼", label: "Adobe CC kullanıcıları" },
  ],

  forWhomEN: [
    { icon: "🎨", label: "Graphic designers" },
    { icon: "📸", label: "Photo editors" },
    { icon: "🏢", label: "Agencies & brand teams" },
    { icon: "📣", label: "Marketing professionals" },
    { icon: "🎬", label: "Video & media production teams" },
    { icon: "💼", label: "Adobe CC users" },
  ],

  pricingTR: [
    { plan: "Ücretsiz",        price: "$0 / ay",  note: "25 aylık kredi, firefly.adobe.com" },
    { plan: "Firefly Standard", price: "$9.99 / ay", note: "100 aylık kredi" },
    { plan: "Firefly Pro",      price: "$29.99 / ay", note: "2.000 aylık kredi" },
    { plan: "Creative Cloud",   price: "$54.99 / ay", note: "Tüm Adobe uygulamaları dahil" },
  ],

  pricingEN: [
    { plan: "Free",        price: "$0 / mo",  note: "25 monthly credits, firefly.adobe.com" },
    { plan: "Firefly Standard", price: "$9.99 / mo", note: "100 monthly credits" },
    { plan: "Firefly Pro",      price: "$29.99 / mo", note: "2,000 monthly credits" },
    { plan: "Creative Cloud",   price: "$54.99 / mo", note: "All Adobe apps included" },
  ],

  prosTR: [
    "Adobe uygulamalarıyla doğal entegrasyon",
    "Ticari kullanım için hukuki güvenlik",
    "Generative Fill ile güçlü fotoğraf düzenleme",
    "Ücretsiz başlangıç kredisi",
  ],

  prosEN: [
    "Natural integration with Adobe apps",
    "Legal safety for commercial use",
    "Powerful photo editing with Generative Fill",
    "Free starting credits",
  ],

  consTR: [
    "En iyi deneyim için Adobe CC aboneliği gerekiyor",
    "Midjourney kadar yaratıcı/sanatsal değil",
    "Aylık kredi sınırı hızlı bitebilir",
  ],

  consEN: [
    "Best experience requires Adobe CC subscription",
    "Less creatively artistic than Midjourney",
    "Monthly credit limit depletes quickly",
  ],

  promptsTR: [
    {
      label: "✂️ Generative Fill Kullanımı",
      prompt: "Photoshop'ta boş gökyüzü alanını seç → Generative Fill → 'dramatic sunset with golden clouds' yaz → Generate",
      output: `Beklenen Çıktı:
Seçili alan altın bulutlu, dramatik gün batımı gökyüzüyle dolduruluyor. Orijinal fotoğrafın ışık ve renk tonu referans alınarak tutarlı bir birleştirme yapılıyor.

İpucu: Türkçe prompt da çalışır: 'altın bulutlu dramatik gün batımı'`,
    },
    {
      label: "🖼️ Görsel Genişletme",
      prompt: "Fotoğrafın yanlarını seç → Generative Expand → 'continue the beach scene with calm waves' → Generate",
      output: `Beklened Çıktı:
Plaj fotoğrafı her iki yana doğal biçimde genişletilir. Kumun dokusu, dalgaların ritmi ve ışık yönü orijinalle uyumlu şekilde tamamlanır.`,
    },
    {
      label: "🎨 Text Effect",
      prompt: "firefly.adobe.com → Text Effects → Metin: 'YAZA MERHABA' → Effect prompt: 'tropical flowers, bright colors, summer vibes'",
      output: `Beklened Çıktı:
'YAZA MERHABA' yazısı tropikal çiçekler ve canlı yaz renkleriyle kaplanmış. Sosyal medya paylaşımları için hazır görsel efekt.`,
    },
  ],

  promptsEN: [
    {
      label: "✂️ Generative Fill",
      prompt: "In Photoshop, select the empty sky area → Generative Fill → type 'dramatic sunset with golden clouds' → Generate",
      output: `Expected Output:
The selected area is filled with a dramatic golden-cloud sunset. The original photo's light and color tone are referenced for a seamless blend.

Tip: You can also prompt in other languages — 'golden cloud dramatic sunset' works just as well.`,
    },
    {
      label: "🖼️ Image Expansion",
      prompt: "Select the sides of a photo → Generative Expand → 'continue the beach scene with calm waves' → Generate",
      output: `Expected Output:
The beach photo is naturally extended on both sides. The sand texture, wave rhythm, and lighting direction are matched consistently with the original.`,
    },
    {
      label: "🎨 Text Effect",
      prompt: "firefly.adobe.com → Text Effects → Text: 'SUMMER VIBES' → Effect prompt: 'tropical flowers, bright colors, summer vibes'",
      output: `Expected Output:
'SUMMER VIBES' text covered with tropical flowers and vibrant summer colors. Ready visual effect for social media posts.`,
    },
  ],

  alternativeSlugs: ["midjourney", "dall-e", "stable-diffusion"],
};
