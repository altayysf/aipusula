import type { ToolExtra } from "./types";

export const cursor: ToolExtra = {
  longDescTR: `Cursor, yapay zekânın tam olarak kod editörüne entegre edildiği modern bir geliştirme ortamıdır. VS Code çatalı olarak geliştirilen Cursor, tüm VS Code uzantılarını ve ayarlarını desteklerken üzerine güçlü AI katmanı ekler.

Cursor'ın en dikkat çekici özelliği, tüm kod tabanını anlayarak çalışabilmesidir. Tek bir dosyayla değil, projenin bütününüyle bağlam kurarak çok dosyalı değişiklikler önerebilir, refactoring yapabilir ve hataların kök nedenini bulabilir. Bu özellik, GitHub Copilot'a kıyasla önemli bir ayrışma noktasıdır.

Composer modu ile doğal dilde verdiğin talimatları otomatik olarak çoklu dosyada uygulayan Cursor, "AI first" geliştirme yaklaşımının en güçlü temsilcilerinden biridir. 2024–2025 döneminde geliştirici topluluğunda hızla benimsendi.`,

  longDescEN: `Cursor is a modern development environment where AI is fully integrated into the code editor. Built as a VS Code fork, it supports all VS Code extensions and settings while adding a powerful AI layer on top.

Cursor's most notable feature is its ability to work by understanding the entire codebase. Rather than working with a single file, it builds context from the whole project to suggest multi-file changes, perform refactoring, and find the root causes of bugs. This is a significant differentiator compared to GitHub Copilot.

With Composer mode, Cursor automatically applies natural language instructions across multiple files, making it one of the strongest representatives of the "AI first" development approach. It was rapidly adopted in the developer community throughout 2024–2025.`,

  featuresTR: [
    { icon: "🗂️", title: "Kod Tabanı Anlama", desc: "Tüm projeyi bağlam olarak kullanarak çok dosyalı değişiklikler yapar." },
    { icon: "🎼", title: "Composer Modu", desc: "Doğal dilde talimatla otomatik çoklu dosya düzenlemesi." },
    { icon: "💬", title: "Chat & Inline Edit", desc: "Dosya içinde veya chat panelinde kod üretimi ve açıklama." },
    { icon: "🔌", title: "VS Code Uyumluluğu", desc: "Tüm VS Code uzantıları ve ayarlarıyla tam uyumlu." },
    { icon: "🔍", title: "Hata Ayıklama", desc: "Kodu analiz ederek hataları tespit eder ve düzeltme önerir." },
    { icon: "🤖", title: "Çoklu Model", desc: "Claude, GPT-4o ve Cursor'ın kendi modeli arasında seçim." },
  ],

  featuresEN: [
    { icon: "🗂️", title: "Codebase Understanding", desc: "Uses the entire project as context to make multi-file changes." },
    { icon: "🎼", title: "Composer Mode", desc: "Natural language instruction triggers automatic multi-file editing." },
    { icon: "💬", title: "Chat & Inline Edit", desc: "Code generation and explanations inline or via chat panel." },
    { icon: "🔌", title: "VS Code Compatibility", desc: "Fully compatible with all VS Code extensions and settings." },
    { icon: "🔍", title: "Debugging", desc: "Analyzes code to detect errors and suggest fixes." },
    { icon: "🤖", title: "Multi-Model", desc: "Choose between Claude, GPT-4o, and Cursor's own model." },
  ],

  forWhomTR: [
    { icon: "💻", label: "Full-stack geliştiriciler" },
    { icon: "🚀", label: "Startup teknik kurucular" },
    { icon: "🔧", label: "Büyük kod tabanı yönetenler" },
    { icon: "🎓", label: "Programlamayı öğrenenler" },
    { icon: "🏢", label: "Yazılım geliştirme ekipleri" },
    { icon: "🔬", label: "Araştırmacı geliştiriciler" },
  ],

  forWhomEN: [
    { icon: "💻", label: "Full-stack developers" },
    { icon: "🚀", label: "Startup technical founders" },
    { icon: "🔧", label: "Large codebase managers" },
    { icon: "🎓", label: "Programming learners" },
    { icon: "🏢", label: "Software development teams" },
    { icon: "🔬", label: "Research engineers" },
  ],

  pricingTR: [
    { plan: "Hobby",    price: "$0 / ay",   note: "2.000 tamamlama, 50 yavaş istek" },
    { plan: "Pro",      price: "$20 / ay",  note: "Sınırsız tamamlama, 500 hızlı istek" },
    { plan: "Business", price: "$40 / ay",  note: "Ekip yönetimi, SOC2" },
    { plan: "Enterprise", price: "Özel",   note: "Özel deployment" },
  ],

  pricingEN: [
    { plan: "Hobby",    price: "$0 / mo",   note: "2.000 tamamlama, 50 yavaş istek" },
    { plan: "Pro",      price: "$20 / mo",  note: "Sınırsız tamamlama, 500 hızlı istek" },
    { plan: "Business", price: "$40 / mo",  note: "Ekip yönetimi, SOC2" },
    { plan: "Enterprise", price: "Custom",   note: "Özel deployment" },
  ],

  prosTR: [
    "Kod tabanı bütününü anlama kapasitesi güçlü",
    "Composer ile çok dosyalı otomatik düzenleme",
    "VS Code uyumluluğu geçişi kolaylaştırıyor",
    "Çoklu model seçeneği",
  ],

  prosEN: [
    "Strong codebase-wide understanding",
    "Composer enables automatic multi-file editing",
    "VS Code compatibility eases migration",
    "Multi-model selection",
  ],

  consTR: [
    "Ücretsiz planda limit düşük",
    "Büyük projelerde yavaşlayabiliyor",
    "Bazı durumlarda öneriler doğrulama gerektirir",
  ],

  consEN: [
    "Low limit on free plan",
    "Can slow down on very large projects",
    "Suggestions sometimes need verification",
  ],

  promptsTR: [
    {
      label: "🎼 Composer ile Özellik Ekleme",
      prompt: "Cmd+I → 'Mevcut kullanıcı auth sistemine şifre sıfırlama e-postası özelliği ekle. Resend API kullan, token 24 saat geçerli olsun'",
      output: `Cursor otomatik olarak şunları oluşturur:
✅ /api/auth/forgot-password.ts — token üretimi ve e-posta gönderimi
✅ /api/auth/reset-password.ts — token doğrulama ve şifre güncelleme
✅ emails/reset-password.tsx — e-posta şablonu
✅ prisma/schema.prisma — PasswordResetToken model eklendi
✅ İlgili testler otomatik oluşturuldu`,
    },
    {
      label: "🔍 Hata Analizi",
      prompt: "Hatalı kodu seç → Cmd+K → 'Bu hatanın kök nedenini bul ve düzelt. Benzer sorunları önlemek için ne yapmalıyım?'",
      output: `Hata: TypeError: Cannot read properties of undefined (reading 'map')

Kök Neden: API yanıtı beklenmeden .map() çağrılıyor.
Düzeltme: Optional chaining ekle: data?.items?.map(...)
Önleme: API response type validation ekle veya loading state kontrol et.

Önerilen değişiklik:
- const items = data.items.map(...)
+ const items = data?.items?.map(...) ?? []`,
    },
    {
      label: "🔄 Refactoring",
      prompt: "Eski callback tabanlı kodu seç → Chat → 'Bu kodu async/await kullanarak yeniden yaz, hata yönetimini güçlendir'",
      output: `// Eski (callback)
getUserData(id, function(err, user) {
  if (err) console.log(err);
  getPosts(user.id, function(err, posts) { ... });
});

// Yeni (async/await)
async function getUserWithPosts(id: string) {
  try {
  const user = await getUserData(id);
  const posts = await getPosts(user.id);
  return { user, posts };
  } catch (error) {
  throw new Error(\`Failed to fetch user data: \${error.message}\`);
  }
}`,
    },
  ],

  promptsEN: [
    {
      label: "🎼 Composer: Add a Feature",
      prompt: "Cmd+I → 'Add a password reset email feature to the existing user auth system. Use Resend API, token valid for 24 hours'",
      output: `Cursor automatically creates:
✅ /api/auth/forgot-password.ts — token generation and email sending
✅ /api/auth/reset-password.ts — token verification and password update
✅ emails/reset-password.tsx — email template
✅ prisma/schema.prisma — PasswordResetToken model added
✅ Relevant tests automatically generated`,
    },
    {
      label: "🔍 Bug Analysis",
      prompt: "Select buggy code → Cmd+K → 'Find the root cause of this error and fix it. What should I do to prevent similar issues?'",
      output: `Error: TypeError: Cannot read properties of undefined (reading 'map')

Root Cause: .map() is called before the API response arrives.
Fix: Add optional chaining: data?.items?.map(...)
Prevention: Add API response type validation or check loading state.

Suggested change:
- const items = data.items.map(...)
+ const items = data?.items?.map(...) ?? []`,
    },
    {
      label: "🔄 Refactoring",
      prompt: "Select old callback-based code → Chat → 'Rewrite this code using async/await, strengthen error handling'",
      output: `// Old (callback)
getUserData(id, function(err, user) {
  if (err) console.log(err);
  getPosts(user.id, function(err, posts) { ... });
});

// New (async/await)
async function getUserWithPosts(id: string) {
  try {
  const user = await getUserData(id);
  const posts = await getPosts(user.id);
  return { user, posts };
  } catch (error) {
  throw new Error(\`Failed to fetch user data: \${error.message}\`);
  }
}`,
    },
  ],

  alternativeSlugs: ["copilot", "replit", "chatgpt"],
};
