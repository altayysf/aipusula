import type { ToolExtra } from "./types";

export const jasper: ToolExtra = {
  longDescTR: `Jasper, pazarlama ve reklam ekipleri için özelleştirilmiş kurumsal düzeyde bir AI içerik üretim platformudur. Genel amaçlı AI araçlarından farklı olarak, marka sesi tutarlılığı, çok kanallı içerik üretimi ve pazarlama iş akışları üzerine odaklanır.

Brand Voice özelliği, şirketinizin ton ve dil rehberini sisteme öğretmenize olanak tanır; böylece tüm içerikler marka kimliğinize uygun şekilde üretilir. Bu özellik, büyük ekipler ve birden fazla içerik üreticisinin olduğu organizasyonlar için kritik değer taşır.

Landing page metinleri, e-posta kampanyaları, sosyal medya içerikleri, ürün açıklamaları ve SEO blog yazıları gibi çeşitli pazarlama formatları için hazır şablonlar ve iş akışları sunar. Yüksek hacimli içerik üretimi gerektiren pazarlama ekipleri için ciddi verimlilik artışı sağlar.`,

  longDescEN: `Jasper is an enterprise-level AI content generation platform specialized for marketing and advertising teams. Unlike general-purpose AI tools, it focuses on brand voice consistency, multi-channel content generation, and marketing workflows.

The Brand Voice feature allows you to teach the system your company's tone and language guide, so all content is produced in line with your brand identity. This is critically valuable for large teams and organizations with multiple content creators.

It offers ready-made templates and workflows for various marketing formats including landing page copy, email campaigns, social media content, product descriptions, and SEO blog posts. It provides significant productivity gains for marketing teams that require high-volume content production.`,

  featuresTR: [
    { icon: "🎯", title: "Brand Voice", desc: "Marka sesini sisteme öğret, tüm içerikler otomatik uyum sağlasın." },
    { icon: "📣", title: "Pazarlama Şablonları", desc: "100'den fazla pazarlama formatı için hazır şablon." },
    { icon: "🔍", title: "SEO Modu", desc: "Surfer SEO entegrasyonuyla SEO optimize içerik üretimi." },
    { icon: "👥", title: "Ekip İş Birliği", desc: "Çoklu kullanıcı, içerik onay akışları ve yönetim paneli." },
    { icon: "🌐", title: "Çok Dilli İçerik", desc: "30'dan fazla dilde içerik üretimi." },
    { icon: "🤖", title: "Jasper Chat", desc: "ChatGPT benzeri sohbet arayüzüyle içerik üretimi." },
  ],

  featuresEN: [
    { icon: "🎯", title: "Brand Voice", desc: "Teach the system your brand voice — all content adapts automatically." },
    { icon: "📣", title: "Marketing Templates", desc: "100+ ready-made templates for marketing formats." },
    { icon: "🔍", title: "SEO Mode", desc: "SEO-optimized content generation with Surfer SEO integration." },
    { icon: "👥", title: "Team Collaboration", desc: "Multiple users, content approval workflows, and management panel." },
    { icon: "🌐", title: "Multilingual Content", desc: "Content generation in 30+ languages." },
    { icon: "🤖", title: "Jasper Chat", desc: "Content generation via a ChatGPT-like chat interface." },
  ],

  forWhomTR: [
    { icon: "📣", label: "Pazarlama ekipleri & direktörler" },
    { icon: "✍️", label: "Copywriter & içerik yöneticileri" },
    { icon: "🏢", label: "Büyük ve orta ölçekli şirketler" },
    { icon: "🛍️", label: "E-ticaret & DTC markalar" },
    { icon: "🏭", label: "Ajanslar (çok müşteri yönetimi)" },
    { icon: "📊", label: "Büyüme odaklı startup'lar" },
  ],

  forWhomEN: [
    { icon: "📣", label: "Marketing teams & directors" },
    { icon: "✍️", label: "Copywriters & content managers" },
    { icon: "🏢", label: "Large and mid-size companies" },
    { icon: "🛍️", label: "E-commerce & DTC brands" },
    { icon: "🏭", label: "Agencies (multi-client management)" },
    { icon: "📊", label: "Growth-focused startups" },
  ],

  pricingTR: [
    { plan: "Creator",  price: "$39 / ay",  note: "1 marka sesi, 1 kullanıcı" },
    { plan: "Pro",      price: "$59 / ay",  note: "3 marka sesi, 5 kullanıcı" },
    { plan: "Business", price: "Özel",      note: "Sınırsız marka sesi, özel entegrasyon" },
    { plan: "API",      price: "Kullanım başına", note: "Geliştiriciler için" },
  ],

  pricingEN: [
    { plan: "Creator",  price: "$39 / mo",  note: "1 brand voice, 1 user" },
    { plan: "Pro",      price: "$59 / mo",  note: "3 brand voices, 5 users" },
    { plan: "Business", price: "Custom",      note: "Unlimited brand voices, custom integration" },
    { plan: "API",      price: "Kullanım başına", note: "For developers" },
  ],

  prosTR: [
    "Marka sesi tutarlılığı benzersiz",
    "Pazarlama odaklı şablonlar çok zengin",
    "Surfer SEO entegrasyonu güçlü",
    "Ekip yönetimi özellikleri",
  ],

  prosEN: [
    "Unique brand voice consistency",
    "Very rich marketing-focused templates",
    "Powerful Surfer SEO integration",
    "Team management features",
  ],

  consTR: [
    "ChatGPT'ye göre oldukça pahalı",
    "Küçük işletmeler için maliyet yüksek",
    "Genel AI görevlerinde ChatGPT daha esnek",
  ],

  consEN: [
    "Significantly more expensive than ChatGPT",
    "High cost for small businesses",
    "ChatGPT is more flexible for general AI tasks",
  ],

  promptsTR: [
    {
      label: "📣 Reklam Metni Üretimi",
      prompt: "Şablonlar → Facebook Ad → Ürün: Ergonomik ofis sandalyesi → Hedef: Uzaktan çalışanlar → Ton: Enerjik → Generate",
      output: `Başlık: 'Sırt Ağrınıza Son — 8 Saatlik Konfor Garantisi'
Alt Metin: 'Ev ofisi artık iş yerinizden daha konforlu olabilir. Ergonomik tasarımı ve adjustable lumbar desteğiyle...'
CTA: 'Şimdi %20 İndirimle Dene →'`,
    },
    {
      label: "✉️ E-posta Serisi",
      prompt: "Workflows → Email Sequence → 5 e-posta welcome serisi → SaaS ürünü → Ton: dostane ama profesyonel → Generate All",
      output: `E-posta 1 (Hemen): Hoş geldiniz + ürün turu linki
E-posta 2 (Gün 3): İlk başarı ipuçları
E-posta 3 (Gün 7): Vaka çalışması / sosyal kanıt
E-posta 4 (Gün 14): Gelişmiş özellik tanıtımı
E-posta 5 (Gün 30): Upgrade veya yıllık plan teklifi`,
    },
    {
      label: "🔍 SEO Blog Yazısı",
      prompt: "SEO Blog Post → Keyword: 'AI yazılım araçları' → Ton: Bilgilendirici → Outline oluştur → Her bölümü genişlet",
      output: `H1: En İyi AI Yazılım Araçları 2026: Kapsamlı Rehber
H2: AI Yazılım Araçları Nedir?
H2: En İyi 10 AI Yazılım Aracı
  H3: ChatGPT — Genel Amaçlı Asistan
  H3: Jasper — Pazarlama Odaklı
H2: Hangi AI Aracını Seçmeli?
H2: Sıkça Sorulan Sorular`,
    },
  ],

  promptsEN: [
    {
      label: "📣 Ad Copy Generation",
      prompt: "Templates → Facebook Ad → Product: Ergonomic office chair → Target: Remote workers → Tone: Energetic → Generate",
      output: `Headline: 'No More Back Pain — 8 Hours of Comfort Guaranteed'
Body: 'Your home office can now be more comfortable than the office itself. With its ergonomic design and adjustable lumbar support...'
CTA: 'Try Now at 20% Off →'`,
    },
    {
      label: "✉️ Email Series",
      prompt: "Workflows → Email Sequence → 5-email welcome series → SaaS product → Tone: friendly but professional → Generate All",
      output: `Email 1 (Immediately): Welcome + product tour link
Email 2 (Day 3): First success tips
Email 3 (Day 7): Case study / social proof
Email 4 (Day 14): Advanced feature introduction
Email 5 (Day 30): Upgrade or annual plan offer`,
    },
    {
      label: "🔍 SEO Blog Post",
      prompt: "SEO Blog Post → Keyword: 'best AI writing tools' → Tone: Informative → Generate outline → Expand each section",
      output: `H1: Best AI Writing Tools 2026: The Complete Guide
H2: What Are AI Writing Tools?
H2: Top 10 AI Writing Tools
  H3: ChatGPT — General Purpose Assistant
  H3: Jasper — Marketing Focused
H2: Which AI Tool Should You Choose?
H2: Frequently Asked Questions`,
    },
  ],

  alternativeSlugs: ["chatgpt", "quillbot", "grammarly"],
};
