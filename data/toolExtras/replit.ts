import type { ToolExtra } from "./types";

export const replit: ToolExtra = {
  longDescTR: `Replit, kurulum gerektirmeden tarayıcı üzerinden kod yazıp çalıştırmaya imkân veren bulut tabanlı geliştirme ortamıdır. 50'den fazla programlama dilini destekleyen platform, özellikle hızlı prototipleme, öğrenme ve paylaşılabilir projeler için idealdir.

Replit Agent özelliğiyle doğal dilde verilen talimatlara göre tam proje oluşturma, bağımlılıkları kurma ve uygulamayı deploy etme işlemleri otomatik olarak gerçekleştirilebilir. Bu özellik, kod yazmayı bilmeyen veya az bilen kullanıcıları bile uygulama sahibi yapma potansiyeline sahiptir.

Anlık çalışan ortam, gerçek zamanlı iş birliği ve kolayca paylaşılabilir link özelliği, özellikle eğitim ortamları, hackathon'lar ve hızlı demo ihtiyaçları için Replit'i cazip kılar.`,

  longDescEN: `Replit is a cloud-based development environment that lets you write and run code directly from your browser without any setup. Supporting 50+ programming languages, it's ideal especially for rapid prototyping, learning, and shareable projects.

With the Replit Agent feature, tasks like creating a full project, installing dependencies, and deploying the application can be done automatically based on natural language instructions. This feature has the potential to turn even users who can't code (or barely can) into app owners.

Its instantly ready environment, real-time collaboration, and easily shareable link feature make Replit particularly attractive for educational settings, hackathons, and rapid demo needs.`,

  featuresTR: [
    { icon: "🌐", title: "Tarayıcıdan Çalıştır", desc: "Kurulum yok, anında çalışan geliştirme ortamı." },
    { icon: "🤖", title: "Replit Agent", desc: "Doğal dil talimatıyla proje oluştur ve deploy et." },
    { icon: "50+", title: "Dil Desteği", desc: "Python, JavaScript, Rust, Go ve 50+ dil." },
    { icon: "👥", title: "Gerçek Zamanlı İş Birliği", desc: "Google Docs gibi aynı anda birlikte kod yazma." },
    { icon: "🚀", title: "Anında Deploy", desc: "Projeyi tek tıkla canlıya al, link paylaş." },
    { icon: "🎓", title: "Eğitim Araçları", desc: "Öğretmen-öğrenci iş akışları için özel özellikler." },
  ],

  featuresEN: [
    { icon: "🌐", title: "Run from Browser", desc: "No setup — an instantly ready development environment." },
    { icon: "🤖", title: "Replit Agent", desc: "Create and deploy projects with natural language instructions." },
    { icon: "50+", title: "Language Support", desc: "Python, JavaScript, Rust, Go, and 50+ languages." },
    { icon: "👥", title: "Real-Time Collaboration", desc: "Code together simultaneously like Google Docs." },
    { icon: "🚀", title: "Instant Deploy", desc: "Take your project live with one click, share a link." },
    { icon: "🎓", title: "Education Tools", desc: "Special features for teacher-student workflows." },
  ],

  forWhomTR: [
    { icon: "🎓", label: "Programlamayı öğrenenler" },
    { icon: "👨‍🏫", label: "Öğretmenler & eğitimciler" },
    { icon: "⚡", label: "Hızlı prototipleme yapanlar" },
    { icon: "🏆", label: "Hackathon & yarışma katılımcıları" },
    { icon: "💼", label: "Freelancerlar & girişimciler" },
    { icon: "🔬", label: "Data science & ML denemeleri" },
  ],

  forWhomEN: [
    { icon: "🎓", label: "Programming learners" },
    { icon: "👨‍🏫", label: "Teachers & educators" },
    { icon: "⚡", label: "Rapid prototypers" },
    { icon: "🏆", label: "Hackathon & competition participants" },
    { icon: "💼", label: "Freelancers & entrepreneurs" },
    { icon: "🔬", label: "Data science & ML experiments" },
  ],

  pricingTR: [
    { plan: "Starter", price: "$0 / ay",   note: "Temel özellikler, herkese açık projeler" },
    { plan: "Core",    price: "$20 / ay",  note: "Daha fazla güç, özel projeler" },
    { plan: "Teams",   price: "$40 / ay",  note: "Ekip çalışması" },
    { plan: "Cycles",  price: "Kullanım başına", note: "Agent ve AI özellikleri için" },
  ],

  pricingEN: [
    { plan: "Starter", price: "$0 / mo",   note: "Temel özellikler, herkese açık projeler" },
    { plan: "Core",    price: "$20 / mo",  note: "More power, private projects" },
    { plan: "Teams",   price: "$40 / mo",  note: "Ekip çalışması" },
    { plan: "Cycles",  price: "Kullanım başına", note: "Agent ve AI özellikleri için" },
  ],

  prosTR: [
    "Sıfır kurulum, anında başla",
    "Gerçek zamanlı iş birliği harika",
    "Replit Agent ile sihir gibi prototip",
    "50+ dil ve framework desteği",
    "Paylaşım ve demo çok kolay",
  ],

  prosEN: [
    "Zero setup — start instantly",
    "Real-time collaboration is excellent",
    "Replit Agent creates prototypes like magic",
    "50+ language and framework support",
    "Sharing and demos are very easy",
  ],

  consTR: [
    "Karmaşık prodüksiyon uygulamaları için yetersiz",
    "Ücretsiz planda yavaş performans",
    "Özel geliştirme ortamına kıyasla sınırlı özelleştirme",
  ],

  consEN: [
    "Insufficient for complex production applications",
    "Slow performance on free plan",
    "Limited customization compared to local dev environment",
  ],

  promptsTR: [
    {
      label: "🤖 Agent ile Uygulama Oluşturma",
      prompt: "Replit Agent → 'Türkçe yapay zeka araçları katalog sitesi oluştur. Next.js kullan, araçlar kart grid formatında gösterilsin, filtreleme olsun'",
      output: `Agent otomatik olarak şunları yapıyor:
✅ Next.js projesi kurulumu
✅ Tailwind CSS eklenmesi
✅ Araç verileri için JSON veri yapısı
✅ Filtreleme componenti
✅ Responsive kart grid layout
✅ Otomatik deploy ve canlı link

Tahmini süre: 3–5 dakika`,
    },
    {
      label: "🐍 Python Script Çalıştırma",
      prompt: "Yeni Repl → Python → Kod yaz → Run",
      output: `# Anlık çalışan Python ortamı
import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({'ay': ['Oca', 'Şub', 'Mar'], 'satış': [120, 145, 160]})
df.plot(x='ay', y='satış', kind='bar')
plt.savefig('satış.png')

# Çıktı görsel olarak tarayıcıda görünür, PNG indirilabilir`,
    },
    {
      label: "👥 Canlı İş Birliği",
      prompt: "Repl → Share → Invite → Ekip üyesine link gönder → Aynı anda düzenleme",
      output: `Gerçek zamanlı iş birliği aktif:
• Her kullanıcının imleci renkli gösterilir
• Değişiklikler anında senkronize
• Entegre chat ile iletişim
• Tüm değişiklikler otomatik kaydedilir`,
    },
  ],

  promptsEN: [
    {
      label: "🤖 Agent: Build an App",
      prompt: "Replit Agent → 'Create an AI tools catalog website. Use Next.js, display tools in a card grid format, with filtering'",
      output: `Agent automatically:
✅ Sets up Next.js project
✅ Adds Tailwind CSS
✅ Creates JSON data structure for tools
✅ Builds filtering component
✅ Creates responsive card grid layout
✅ Auto-deploys with live link

Estimated time: 3–5 minutes`,
    },
    {
      label: "🐍 Run Python Script",
      prompt: "New Repl → Python → Write code → Run",
      output: `# Instantly running Python environment
import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({'month': ['Jan', 'Feb', 'Mar'], 'sales': [120, 145, 160]})
df.plot(x='month', y='sales', kind='bar')
plt.savefig('sales.png')

# Output visual appears in the browser, PNG can be downloaded`,
    },
    {
      label: "👥 Live Collaboration",
      prompt: "Repl → Share → Invite → Send link to team member → Edit simultaneously",
      output: `Real-time collaboration active:
• Each user's cursor shown in a different color
• Changes sync instantly
• Integrated chat for communication
• All changes saved automatically`,
    },
  ],

  alternativeSlugs: ["cursor", "copilot", "chatgpt"],
};
