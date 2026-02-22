import type { ToolExtra } from "./types";

export const grammarly: ToolExtra = {
  longDescTR: `Grammarly, 30 milyondan fazla günlük aktif kullanıcıyla dünyanın en yaygın kullanılan yazı asistanı platformlarından biridir. Dilbilgisi ve yazım denetiminin ötesine geçerek ton analizi, netlik önerileri, intihal tespiti ve AI destekli yeniden yazma özellikleri sunar.

Platformun en güçlü yönü, tarayıcı uzantısı, masaüstü uygulaması ve Microsoft Office eklentisi aracılığıyla neredeyse her yazı ortamında çalışabilmesidir. Gmail, Slack, Google Docs, Word ve sosyal medya platformlarında yazdığın her şeyi gerçek zamanlı olarak denetler.

İngilizce yazı konusunda eşsiz derinliğe sahip olan Grammarly, profesyonel İngilizce iletişim gerektiren herkes için vazgeçilmez bir araçtır. Grammarly Business ile ekip genelinde yazı kalitesini ve marka ton tutarlılığını sağlamak da mümkündür.`,

  longDescEN: `Grammarly is one of the world's most widely used writing assistant platforms with over 30 million daily active users. It goes beyond grammar and spelling checks to offer tone analysis, clarity suggestions, plagiarism detection, and AI-powered rewriting.

The platform's greatest strength is its ability to work in almost every writing environment through a browser extension, desktop app, and Microsoft Office add-in. It checks everything you write in real time across Gmail, Slack, Google Docs, Word, and social media platforms.

With unmatched depth in English writing, Grammarly is an indispensable tool for anyone who requires professional English communication. Grammarly Business also makes it possible to maintain writing quality and brand tone consistency across an entire team.`,

  featuresTR: [
    { icon: "✅", title: "Dilbilgisi & Yazım", desc: "Gerçek zamanlı hata tespiti ve düzeltme önerileri." },
    { icon: "🎭", title: "Ton Analizi", desc: "Yazının tonunu (resmi, samimi, sert vs.) analiz eder." },
    { icon: "💡", title: "Netlik Önerileri", desc: "Karmaşık cümleleri sadeleştirmek için öneriler sunar." },
    { icon: "🔄", title: "AI Yeniden Yazma", desc: "Seçili metni farklı ton ve stilde yeniden yazar." },
    { icon: "🔌", title: "Evrensel Entegrasyon", desc: "Gmail, Word, Slack ve 500.000'den fazla uygulamada çalışır." },
    { icon: "📊", title: "Yazı Analizi", desc: "Haftalık yazı özeti ve gelişim raporu sunar." },
  ],

  featuresEN: [
    { icon: "✅", title: "Grammar & Spelling", desc: "Real-time error detection and correction suggestions." },
    { icon: "🎭", title: "Tone Analysis", desc: "Analyzes the tone of your writing (formal, friendly, assertive, etc.)." },
    { icon: "💡", title: "Clarity Suggestions", desc: "Offers suggestions to simplify complex sentences." },
    { icon: "🔄", title: "AI Rewriting", desc: "Rewrites selected text in different tones and styles." },
    { icon: "🔌", title: "Universal Integration", desc: "Works in Gmail, Word, Slack, and 500,000+ apps." },
    { icon: "📊", title: "Writing Analytics", desc: "Provides weekly writing summaries and improvement reports." },
  ],

  forWhomTR: [
    { icon: "💼", label: "Profesyoneller & iş insanları" },
    { icon: "🎓", label: "Öğrenci & akademisyenler" },
    { icon: "✍️", label: "İçerik yazarları & copywriterlar" },
    { icon: "🌍", label: "İngilizce ikinci dil olarak kullananlar" },
    { icon: "📣", label: "Pazarlama ekipleri" },
    { icon: "🏢", label: "Kurumsal iletişim departmanları" },
  ],

  forWhomEN: [
    { icon: "💼", label: "Professionals & business people" },
    { icon: "🎓", label: "Students & academics" },
    { icon: "✍️", label: "Content writers & copywriters" },
    { icon: "🌍", label: "Non-native English speakers" },
    { icon: "📣", label: "Marketing teams" },
    { icon: "🏢", label: "Corporate communications departments" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "Temel yazım ve dilbilgisi" },
    { plan: "Premium",  price: "$12 / ay", note: "Ton, netlik, plagiarism" },
    { plan: "Business", price: "$15 / ay", note: "Ekip yönetimi, stil kılavuzu" },
    { plan: "Enterprise", price: "Özel",  note: "SSO, gelişmiş yönetim" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "Temel yazım ve dilbilgisi" },
    { plan: "Premium",  price: "$12 / mo", note: "Ton, netlik, plagiarism" },
    { plan: "Business", price: "$15 / mo", note: "Team management, style guide" },
    { plan: "Enterprise", price: "Custom",  note: "SSO, advanced administration" },
  ],

  prosTR: [
    "500.000'den fazla uygulamayla entegrasyon",
    "Ton ve netlik analizi çok değerli",
    "Ücretsiz planda temel ihtiyaçlar karşılanıyor",
    "Haftalık gelişim raporu motive edici",
  ],

  prosEN: [
    "Integration with 500,000+ apps",
    "Tone and clarity analysis are very valuable",
    "Free plan covers basic needs",
    "Weekly improvement report is motivating",
  ],

  consTR: [
    "Ağırlıklı olarak İngilizce odaklı",
    "Türkçe desteği sınırlı",
    "Premium planlar pahalı gelebilir",
    "Bazen fazla agresif düzeltme önerileri",
  ],

  consEN: [
    "Primarily English-focused",
    "Limited support for other languages",
    "Premium plans can feel expensive",
    "Sometimes overly aggressive correction suggestions",
  ],

  promptsTR: [
    {
      label: "📧 E-posta Tonu Düzenleme",
      prompt: "Grammarly'yi Gmail'de aç → E-postayı yaz → 'Tone Detector' sonucunu gör → İstersen 'Make it more formal' seç",
      output: `Beklened Çıktı:
Ton Analizi: Şu anki ton → Samimi (%65), Emin (%20)
Öneri: Daha resmi bir ton için şu değişiklikler önerilir:
• 'Merhaba' → 'Dear [Name]'
• 'Harika fikir!' → 'This is an excellent suggestion.'`,
    },
    {
      label: "✏️ Metin Yeniden Yazma",
      prompt: "Metni seç → Grammarly → 'Rewrite with AI' → Ton seç: Professional → Generate",
      output: `Orijinal: 'Bu rapor çok karmaşık, kimse anlamıyor.'
Yeniden Yazılmış: 'The report would benefit from clearer structure and more accessible language to improve comprehension across all stakeholders.'`,
    },
    {
      label: "📊 Haftalık Özet",
      prompt: "Grammarly Dashboard → Insights → Haftalık raporu incele",
      output: `Haftalık Yazı Özeti:
📝 Bu hafta 12.450 kelime yazdın
✅ 234 hata düzeltildi
💡 89 netlik önerisi uygulandı
📈 Doğruluk skoru: %94 (geçen haftaya göre +3)
🎯 En sık hata: Article usage (a/an/the)`,
    },
  ],

  promptsEN: [
    {
      label: "📧 Email Tone Check",
      prompt: "Open Grammarly in Gmail → Write the email → View 'Tone Detector' result → Optionally select 'Make it more formal'",
      output: `Tone Analysis: Current tone → Friendly (65%), Confident (20%)
Suggestion: For a more formal tone, these changes are recommended:
• 'Hey there' → 'Dear [Name]'
• 'Great idea!' → 'This is an excellent suggestion.'`,
    },
    {
      label: "✏️ Text Rewriting",
      prompt: "Select text → Grammarly → 'Rewrite with AI' → Select tone: Professional → Generate",
      output: `Original: 'This report is way too complicated, nobody gets it.'
Rewritten: 'The report would benefit from clearer structure and more accessible language to improve comprehension across all stakeholders.'`,
    },
    {
      label: "📊 Weekly Summary",
      prompt: "Grammarly Dashboard → Insights → Review weekly report",
      output: `Weekly Writing Summary:
📝 You wrote 12,450 words this week
✅ 234 errors corrected
💡 89 clarity suggestions applied
📈 Accuracy score: 94% (+3 from last week)
🎯 Most common error: Article usage (a/an/the)`,
    },
  ],

  alternativeSlugs: ["quillbot", "chatgpt", "claude"],
};
