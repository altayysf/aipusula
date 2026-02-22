import type { ToolExtra } from "./types";

export const dall_e: ToolExtra = {
  longDescTR: `DALL·E, OpenAI tarafından geliştirilen ve metin girdilerinden görsel üreten yapay zekâ modelidir. ChatGPT ile entegre çalışması sayesinde, sohbet içinde doğrudan görsel üretimi mümkün kılmaktadır. Bu entegrasyon, DALL·E'yi özellikle ChatGPT kullanıcıları için en erişilebilir görsel üretim aracı yapıyor.

DALL·E 3 sürümüyle birlikte prompt anlama kapasitesi önemli ölçüde gelişti. Daha önceki sürümlerde sık yaşanan "prompt'u yanlış anlama" sorunları büyük ölçüde çözüldü ve metni doğru yorumlayarak görsel üretme kapasitesi güçlendi.

Blog kapak görselleri, sosyal medya içerikleri, ürün konsept denemeleri ve hızlı prototipleme için idealdir. Özellikle teknik altyapıya ihtiyaç duymadan hızlıca görsel üretmek isteyenler için en pratik seçeneklerden biridir.`,

  longDescEN: `DALL·E is an AI model developed by OpenAI that generates images from text prompts. Its integration with ChatGPT enables image generation directly within conversations, making DALL·E the most accessible image tool for ChatGPT users.

With DALL·E 3, prompt comprehension improved significantly. The common "misinterpretation" issues of earlier versions were largely resolved, and its ability to accurately interpret text and produce matching visuals became much stronger.

It's ideal for blog cover images, social media content, product concept experiments, and rapid prototyping. It's one of the most practical options for those who want to generate images quickly without any technical setup.`,

  featuresTR: [
    { icon: "💬", title: "ChatGPT Entegrasyonu", desc: "ChatGPT sohbeti içinde doğrudan görsel üretimi sağlar." },
    { icon: "📝", title: "Güçlü Prompt Anlama", desc: "Detaylı açıklamaları doğru yorumlayarak görsele dönüştürür." },
    { icon: "✏️", title: "Görsel Düzenleme", desc: "Mevcut görsellerin belirli bölgelerini düzenleyebilirsin (inpainting)." },
    { icon: "📐", title: "Farklı Boyutlar", desc: "Kare, dikey ve yatay format seçenekleri mevcuttur." },
    { icon: "🔄", title: "Hızlı Prototipleme", desc: "Konsept denemeleri için saniyeler içinde birden fazla varyasyon üretir." },
    { icon: "🛡️", title: "İçerik Güvenliği", desc: "OpenAI'ın güçlü içerik filtreleri ile güvenli üretim sağlar." },
  ],

  featuresEN: [
    { icon: "💬", title: "ChatGPT Integration", desc: "Generate images directly within a ChatGPT conversation." },
    { icon: "📝", title: "Strong Prompt Understanding", desc: "Accurately interprets detailed descriptions and turns them into images." },
    { icon: "✏️", title: "Image Editing", desc: "Edit specific regions of existing images (inpainting)." },
    { icon: "📐", title: "Multiple Formats", desc: "Square, portrait, and landscape format options available." },
    { icon: "🔄", title: "Rapid Prototyping", desc: "Generates multiple variations for concept testing in seconds." },
    { icon: "🛡️", title: "Content Safety", desc: "Safe generation backed by OpenAI's strong content filters." },
  ],

  forWhomTR: [
    { icon: "✍️", label: "Blog ve içerik yazarları" },
    { icon: "📣", label: "Sosyal medya yöneticileri" },
    { icon: "💼", label: "Girişimciler & startup'lar" },
    { icon: "🎨", label: "UI/UX tasarımcıları" },
    { icon: "📚", label: "Eğitim materyali hazırlayanlar" },
    { icon: "🏪", label: "E-ticaret sahipleri" },
  ],

  forWhomEN: [
    { icon: "✍️", label: "Bloggers & content writers" },
    { icon: "📣", label: "Social media managers" },
    { icon: "💼", label: "Entrepreneurs & startups" },
    { icon: "🎨", label: "UI/UX designers" },
    { icon: "📚", label: "Educational material creators" },
    { icon: "🏪", label: "E-commerce store owners" },
  ],

  pricingTR: [
    { plan: "ChatGPT Free", price: "$0 / ay",  note: "Sınırlı görsel üretimi" },
    { plan: "ChatGPT Plus", price: "$20 / ay", note: "DALL·E 3, öncelikli erişim" },
    { plan: "API",          price: "Görsel başına", note: "$0.04'ten başlayan fiyatlar" },
    { plan: "Enterprise",   price: "Özel",    note: "Yüksek hacimli kullanım" },
  ],

  pricingEN: [
    { plan: "ChatGPT Free", price: "$0 / mo",  note: "Sınırlı görsel üretimi" },
    { plan: "ChatGPT Plus", price: "$20 / mo", note: "DALL·E 3, öncelikli erişim" },
    { plan: "API",          price: "Görsel başına", note: "$0.04'ten başlayan fiyatlar" },
    { plan: "Enterprise",   price: "Custom",    note: "Yüksek hacimli kullanım" },
  ],

  prosTR: [
    "ChatGPT ile sorunsuz entegrasyon",
    "Prompt anlama kapasitesi güçlü",
    "Teknik bilgi gerektirmez",
    "Hızlı ve pratik kullanım",
  ],

  prosEN: [
    "Seamless integration with ChatGPT",
    "Strong prompt comprehension",
    "No technical knowledge required",
    "Fast and practical to use",
  ],

  consTR: [
    "Midjourney kadar estetik detay sunmuyor",
    "Stil kontrolü sınırlı",
    "Ücretsiz planda günlük limit var",
    "Metin içeren görsellerde bazen hata yapıyor",
  ],

  consEN: [
    "Not as aesthetically detailed as Midjourney",
    "Limited style control",
    "Daily limit on free plan",
    "Sometimes makes errors with text in images",
  ],

  promptsTR: [
    {
      label: "🖼️ Blog Kapak Görseli",
      prompt: "Yapay zeka ve insan işbirliğini temsil eden bir blog kapak görseli üret. Minimalist, modern stil. Mavi ve beyaz renk paleti. 16:9 format.",
      output: `Beklenen Çıktı:
Mavi-beyaz renk paleti, minimalist tasarım. Bir insan eli ile robot eli birbirine uzanıyor, arka planda soyut dijital desen. Blog başlığı için boş alan bırakılmış kompozisyon.`,
    },
    {
      label: "🛍️ Ürün Mock-up",
      prompt: "Beyaz arka plan üzerinde eko-dostu kraft kâğıt kahve bardağı, yeşil logo alanı, stüdyo aydınlatması. Ürün fotoğrafı stili.",
      output: `Beklenen Çıktı:
Kraft kâğıt dokulu kahve bardağı, yeşil logo placeholder, parlak beyaz stüdyo fonu. Hafif gölge efekti, ticari fotoğraf kalitesinde çıktı.`,
    },
    {
      label: "🎨 Sosyal Medya Görseli",
      prompt: "İlkbahar temalı, çiçekli bir arka planda 'Yeni Sezon' yazısı için yer bırakılmış sosyal medya karesi. Pastel renkler, kare format.",
      output: `Beklenen Çıktı:
Pastel pembe ve sarı tonlarında çiçek aranjmanı, merkezi boş alan metin için uygun. Instagram karesi formatında, hafif vintage ton efekti.`,
    },
  ],

  promptsEN: [
    {
      label: "🖼️ Blog Cover Image",
      prompt: "Generate a blog cover image representing AI and human collaboration. Minimalist, modern style. Blue and white color palette. 16:9 format.",
      output: `Expected Output:
Blue-white color palette, minimalist design. A human hand and a robot hand reaching toward each other, abstract digital pattern in the background. Composition leaves space for a blog title.`,
    },
    {
      label: "🛍️ Product Mock-up",
      prompt: "Eco-friendly kraft paper coffee cup on a white background, green logo area, studio lighting. Product photography style.",
      output: `Expected Output:
Kraft paper textured coffee cup, green logo placeholder, bright white studio background. Slight shadow effect, commercial photo quality output.`,
    },
    {
      label: "🎨 Social Media Visual",
      prompt: "A spring-themed social media square with flowers in the background, space left for a 'New Season' text. Pastel colors, square format.",
      output: `Expected Output:
Pastel pink and yellow flower arrangement, central empty area suitable for text. Instagram square format, light vintage tone effect.`,
    },
  ],

  alternativeSlugs: ["midjourney", "stable-diffusion", "adobe-firefly"],
};
