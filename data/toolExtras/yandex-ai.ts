import type { ToolExtra } from "./types";

export const yandex_ai: ToolExtra = {
  longDescTR: `Yandex AI, Rusya'nın en büyük teknoloji şirketi Yandex tarafından geliştirilen yapay zekâ asistanıdır. YandexGPT modeline dayanan platform, Kinopoisk, Yandex Music ve Yandex Maps gibi Yandex ekosistemiyle entegrasyon sunar.

Özellikle Rusça ve Türkçe gibi Slav ve Türk dilleri ailesinde güçlü performans sergileyen Yandex AI, bu dillerde içerik üretimi, çeviri ve sohbet konusunda avantaj sağlayabilir. Tamamen ücretsiz sunulan platform, temel metin üretimi ve soru-cevap görevleri için erişilebilir bir alternatif sunar.

Batı kaynaklı AI araçlarına erişimi kısıtlı olan bölgelerde veya Rusça içerikle çalışan kullanıcılar için değer taşıyabilir. Küresel AI araçlarıyla kıyaslandığında özellik seti daha sınırlı olmakla birlikte, ücretsiz ve temel ihtiyaçlara yanıt veren bir seçenek olarak öne çıkar.`,

  longDescEN: `Yandex AI is an AI assistant developed by Yandex, Russia's largest technology company, offering integration with the Yandex ecosystem including Kinopoisk, Yandex Music, and Yandex Maps. It's based on the YandexGPT model.

Particularly strong in Russian and other Slavic and Turkic languages, Yandex AI can offer advantages for content generation, translation, and conversation in these languages. The platform is offered completely free and provides an accessible alternative for basic text generation and Q&A tasks.

It may be valuable in regions where access to Western AI tools is restricted, or for users working with Russian-language content. While its feature set is more limited compared to global AI tools, it stands out as a free option that addresses basic needs.`,

  featuresTR: [
    { icon: "💬", title: "Sohbet Asistanı", desc: "Metin tabanlı soru-cevap ve sohbet desteği." },
    { icon: "✍️", title: "İçerik Üretimi", desc: "Metin yazma, özetleme ve fikir geliştirme." },
    { icon: "🌍", title: "Rusça & Türkçe Desteği", desc: "Özellikle Rusça'da güçlü dil desteği." },
    { icon: "🔗", title: "Yandex Ekosistemi", desc: "Yandex hizmetleriyle entegrasyon imkânı." },
    { icon: "🆓", title: "Ücretsiz Erişim", desc: "Tamamen ücretsiz temel kullanım." },
    { icon: "🔍", title: "Arama Entegrasyonu", desc: "Yandex arama motoru ile birlikte çalışır." },
  ],

  featuresEN: [
    { icon: "💬", title: "Chat Assistant", desc: "Text-based Q&A and conversational support." },
    { icon: "✍️", title: "Content Generation", desc: "Writing text, summarizing, and developing ideas." },
    { icon: "🌍", title: "Russian & Multilingual Support", desc: "Particularly strong language support in Russian." },
    { icon: "🔗", title: "Yandex Ecosystem", desc: "Integration opportunities with Yandex services." },
    { icon: "🆓", title: "Free Access", desc: "Completely free basic usage." },
    { icon: "🔍", title: "Search Integration", desc: "Works in conjunction with Yandex search engine." },
  ],

  forWhomTR: [
    { icon: "🌍", label: "Rusça içerik üretenler" },
    { icon: "🔒", label: "Gizlilik odaklı kullanıcılar" },
    { icon: "💰", label: "Ücretsiz alternatif arayanlar" },
    { icon: "🇷🇺", label: "Rusça-Türkçe çeviri yapanlar" },
    { icon: "🏢", label: "Yandex ekosistemi kullanıcıları" },
    { icon: "🎓", label: "Dil öğrenicileri" },
  ],

  forWhomEN: [
    { icon: "🌍", label: "Russian content creators" },
    { icon: "🔒", label: "Privacy-focused users" },
    { icon: "💰", label: "Those seeking a free alternative" },
    { icon: "🌐", label: "Russian-English translation needs" },
    { icon: "🏢", label: "Yandex ecosystem users" },
    { icon: "🎓", label: "Language learners" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "Temel özellikler, kayıt gerektirmez" },
    { plan: "Yandex360", price: "Değişken", note: "Kurumsal Yandex hizmetleri" },
    { plan: "API",       price: "Kullanım başına", note: "Geliştiriciler için" },
    { plan: "Enterprise", price: "Özel",   note: "Kurumsal entegrasyon" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "Temel özellikler, kayıt gerektirmez" },
    { plan: "Yandex360", price: "Değişken", note: "Enterprise Yandex services" },
    { plan: "API",       price: "Kullanım başına", note: "For developers" },
    { plan: "Enterprise", price: "Custom",   note: "Enterprise integration" },
  ],

  prosTR: [
    "Tamamen ücretsiz temel kullanım",
    "Rusça'da güçlü dil desteği",
    "Yandex ekosistemiyle entegrasyon",
    "Kayıt gerektirmeden kullanım",
  ],

  prosEN: [
    "Completely free basic usage",
    "Strong language support in Russian",
    "Yandex ecosystem integration",
    "No registration required for basic use",
  ],

  consTR: [
    "ChatGPT veya Claude'a kıyasla yetenekler sınırlı",
    "Küresel dil desteği daha zayıf",
    "Gelişmiş özellik seti eksik",
    "Çok az İngilizce kaynak ve topluluk",
  ],

  consEN: [
    "Feature set more limited than ChatGPT or Claude",
    "Weaker global language support",
    "Missing advanced feature set",
    "Very few English resources and community",
  ],

  promptsTR: [
    {
      label: "✍️ Türkçe İçerik Üretimi",
      prompt: "Yapay zeka ve geleceği hakkında kısa bir paragraf yaz. Ton: bilgilendirici ve optimist.",
      output: `Beklened Çıktı:
Yapay zeka, günlük hayatımızın her alanında giderek daha fazla yer bulmaktadır. Sağlıktan eğitime, sanayiden yaratıcı sektörlere kadar geniş bir yelpazede verimlilik artışı ve yeni imkânlar sunmaktadır. Gelecekte insan-AI iş birliği, toplumsal ilerlemenin temel dinamiklerinden biri olacaktır.`,
    },
    {
      label: "🌍 Rusça Çeviri",
      prompt: "Bu Türkçe metni Rusça'ya çevir: 'Yapay zeka araçları iş dünyasında büyük değişimlere yol açıyor.'",
      output: `Rusça Çeviri:
«Инструменты искусственного интеллекта приводят к большим изменениям в деловом мире.»

Not: Yandex AI özellikle Rusça-Türkçe çeviride diğer araçlara kıyasla daha iyi performans gösterebilir.`,
    },
    {
      label: "💡 Fikir Üretimi",
      prompt: "Küçük bir kafe işletmesi için 5 pazarlama fikri üret. Uygulaması kolay ve düşük bütçeli olsun.",
      output: `1. Instagram'da günlük 'kahve saati' reels paylaşımları
2. Mahalle sakinlerine özel sadakat kartı programı
3. Yerel etkinliklerle iş birliği (kitap kulübü, yoga vb.)
4. Google My Business sayfasını optimize et, fotoğrafları güncelle
5. Mutlu müşterilerden Google yorumu iste, indirim karşılığında`,
    },
  ],

  promptsEN: [
    {
      label: "✍️ Content Generation",
      prompt: "Write a short paragraph about AI and the future. Tone: informative and optimistic.",
      output: `Expected Output:
Artificial intelligence is increasingly finding its place in every area of our daily lives. From healthcare to education, from industry to creative sectors, it offers efficiency gains and new opportunities across a wide spectrum. In the future, human-AI collaboration will be one of the key dynamics of societal progress.`,
    },
    {
      label: "🌍 Russian Translation",
      prompt: "Translate this text to Russian: 'AI tools are driving major changes in the business world.'",
      output: `Russian Translation:
«Инструменты искусственного интеллекта приводят к большим изменениям в деловом мире.»

Note: Yandex AI may perform better than other tools for Russian-English translation tasks.`,
    },
    {
      label: "💡 Idea Generation",
      prompt: "Generate 5 marketing ideas for a small café. They should be easy to implement and low budget.",
      output: `1. Daily 'coffee hour' reels on Instagram
2. Loyalty card program for neighborhood regulars
3. Collaboration with local events (book club, yoga, etc.)
4. Optimize Google My Business page, update photos
5. Ask happy customers for a Google review in exchange for a discount`,
    },
  ],

  alternativeSlugs: ["chatgpt", "claude", "google-gemini"],
};
