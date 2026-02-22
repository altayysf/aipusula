import type { ToolExtra } from "./types";

export const copilot: ToolExtra = {
  longDescTR: `GitHub Copilot, Microsoft ve OpenAI ortaklığıyla geliştirilen ve yazılım geliştiricilerin IDE içinde kullandığı yapay zekâ destekli kod asistanıdır. GitHub'daki milyonlarca kod deposu üzerinde eğitilen model, bağlama uygun kod tamamlama, fonksiyon önerileri ve tam dosya yazımı konusunda güçlü performans sergiler.

VS Code, JetBrains, Vim ve diğer popüler IDE'lerle sorunsuz entegrasyon sağlayan Copilot, yazarken gerçek zamanlı olarak satır veya blok bazında kod önerileri sunar. Prototipleme hızını, yeni dil veya kütüphane öğrenme eğrisini ve tekrar eden kod yazma sürecini önemli ölçüde kısaltır.

GitHub Copilot Chat ile IDE içinden doğal dilde soru sorarak kod açıklama, hata bulma ve refactoring önerileri alınabilir. Özellikle büyük kod tabanlarında çalışan ekipler için geliştirici verimliliğini artıran kritik bir araçtır.`,

  longDescEN: `GitHub Copilot is an AI-powered code assistant developed through a Microsoft and OpenAI partnership, used by software developers within their IDE. The model, trained on millions of code repositories on GitHub, demonstrates strong performance in context-aware code completion, function suggestions, and full file writing.

Providing seamless integration with VS Code, JetBrains, Vim, and other popular IDEs, Copilot offers real-time line or block-level code suggestions as you type. It significantly reduces prototyping speed, the learning curve for new languages or libraries, and repetitive code writing processes.

With GitHub Copilot Chat, you can ask questions in natural language from within the IDE to get code explanations, bug identification, and refactoring suggestions. It's a critical productivity tool especially for teams working on large codebases.`,

  featuresTR: [
    { icon: "💡", title: "Gerçek Zamanlı Kod Tamamlama", desc: "Yazarken satır ve blok bazında bağlama uygun öneriler sunar." },
    { icon: "💬", title: "Copilot Chat", desc: "IDE içinde doğal dilde soru sor, açıklama ve refactoring al." },
    { icon: "🔌", title: "Geniş IDE Desteği", desc: "VS Code, JetBrains, Neovim ve daha fazlasıyla entegrasyon." },
    { icon: "🔍", title: "Hata Analizi", desc: "Kodu analiz ederek olası hataları ve iyileştirmeleri önerir." },
    { icon: "📝", title: "Test Üretimi", desc: "Kodun için otomatik birim testleri oluşturur." },
    { icon: "🌐", title: "Çoklu Dil Desteği", desc: "Python, JavaScript, TypeScript, Go, Rust ve daha fazlası." },
  ],

  featuresEN: [
    { icon: "💡", title: "Real-Time Code Completion", desc: "Context-aware line and block suggestions as you type." },
    { icon: "💬", title: "Copilot Chat", desc: "Ask questions in natural language inside the IDE for explanations and refactoring." },
    { icon: "🔌", title: "Broad IDE Support", desc: "Integration with VS Code, JetBrains, Neovim, and more." },
    { icon: "🔍", title: "Bug Analysis", desc: "Analyzes code to suggest potential issues and improvements." },
    { icon: "📝", title: "Test Generation", desc: "Automatically generates unit tests for your code." },
    { icon: "🌐", title: "Multi-Language Support", desc: "Python, JavaScript, TypeScript, Go, Rust, and more." },
  ],

  forWhomTR: [
    { icon: "💻", label: "Yazılım geliştiriciler" },
    { icon: "🔬", label: "Backend & frontend mühendisler" },
    { icon: "🚀", label: "Hızlı prototipleme yapanlar" },
    { icon: "🎓", label: "Programlamayı öğrenenler" },
    { icon: "🏢", label: "Yazılım geliştirme ekipleri" },
    { icon: "🔧", label: "DevOps & SRE mühendisleri" },
  ],

  forWhomEN: [
    { icon: "💻", label: "Software developers" },
    { icon: "🔬", label: "Backend & frontend engineers" },
    { icon: "🚀", label: "Rapid prototypers" },
    { icon: "🎓", label: "Programming learners" },
    { icon: "🏢", label: "Software development teams" },
    { icon: "🔧", label: "DevOps & SRE engineers" },
  ],

  pricingTR: [
    { plan: "Individual", price: "$10 / ay",  note: "Bireysel geliştirici" },
    { plan: "Business",   price: "$19 / ay",  note: "Ekip yönetimi, politika kontrolü" },
    { plan: "Enterprise", price: "$39 / ay",  note: "Özel model, güvenlik" },
    { plan: "Ücretsiz",   price: "$0",        note: "Öğrenci & açık kaynak projeler" },
  ],

  pricingEN: [
    { plan: "Individual", price: "$10 / mo",  note: "Individual developer" },
    { plan: "Business",   price: "$19 / mo",  note: "Team management, policy control" },
    { plan: "Enterprise", price: "$39 / mo",  note: "Custom model, security" },
    { plan: "Free",   price: "$0",        note: "Öğrenci & açık kaynak projeler" },
  ],

  prosTR: [
    "Gerçek zamanlı kod tamamlama çok güçlü",
    "GitHub ekosistemiyle derin entegrasyon",
    "Test üretimi zaman kazandırıyor",
    "Geniş programlama dili desteği",
    "Öğrencilere ücretsiz",
  ],

  prosEN: [
    "Very powerful real-time code completion",
    "Deep integration with the GitHub ecosystem",
    "Test generation saves time",
    "Broad programming language support",
    "Free for students",
  ],

  consTR: [
    "Zaman zaman hatalı veya eski kod önerebilir",
    "Ücretli — küçük projeler için maliyetli",
    "Güvenlik açısından üretilen kodu doğrulama gerekir",
  ],

  consEN: [
    "Can occasionally suggest incorrect or outdated code",
    "Paid — can be costly for small projects",
    "Generated code still requires security review",
  ],

  promptsTR: [
    {
      label: "🐍 Python Fonksiyon Üretimi",
      prompt: `# CSV dosyasını oku, NULL değerleri temizle, yaş sütununu int'e çevir
# ve sonucu yeni bir CSV'ye kaydet
def clean_csv(input_path: str, output_path: str) -> None:`,
      output: `def clean_csv(input_path: str, output_path: str) -> None:
  import pandas as pd
  df = pd.read_csv(input_path)
  df = df.dropna()
  df['age'] = df['age'].astype(int)
  df.to_csv(output_path, index=False)
  print(f"Cleaned data saved to {output_path}")`,
    },
    {
      label: "⚡ React Component",
      prompt: `// Kullanıcı profil kartı bileşeni
// Props: name, email, avatarUrl, role
// Tailwind CSS kullan
const UserProfileCard = ({`,
      output: `const UserProfileCard = ({ name, email, avatarUrl, role }) => {
  return (
  <div className="flex items-center gap-4 p-4 rounded-xl border bg-white shadow-sm">
    <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full object-cover" />
    <div>
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="text-xs text-gray-400">{email}</p>
    </div>
  </div>
  );
};`,
    },
    {
      label: "🧪 Birim Test Üretimi",
      prompt: `// Bu fonksiyon için Jest birim testleri yaz
function calculateDiscount(price: number, discountPercent: number): number {
  return price - (price * discountPercent) / 100;
}`,
      output: `describe('calculateDiscount', () => {
  test('applies 10% discount correctly', () => {
  expect(calculateDiscount(100, 10)).toBe(90);
  });
  test('returns original price for 0% discount', () => {
  expect(calculateDiscount(100, 0)).toBe(100);
  });
  test('returns 0 for 100% discount', () => {
  expect(calculateDiscount(100, 100)).toBe(0);
  });
});`,
    },
  ],

  promptsEN: [
    {
      label: "🐍 Python Function Generation",
      prompt: `# Read a CSV file, clean NULL values, convert age column to int
# and save the result to a new CSV
def clean_csv(input_path: str, output_path: str) -> None:`,
      output: `def clean_csv(input_path: str, output_path: str) -> None:
  import pandas as pd
  df = pd.read_csv(input_path)
  df = df.dropna()
  df['age'] = df['age'].astype(int)
  df.to_csv(output_path, index=False)
  print(f"Cleaned data saved to {output_path}")`,
    },
    {
      label: "⚡ React Component",
      prompt: `// User profile card component
// Props: name, email, avatarUrl, role
// Use Tailwind CSS
const UserProfileCard = ({`,
      output: `const UserProfileCard = ({ name, email, avatarUrl, role }) => {
  return (
  <div className="flex items-center gap-4 p-4 rounded-xl border bg-white shadow-sm">
    <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full object-cover" />
    <div>
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="text-xs text-gray-400">{email}</p>
    </div>
  </div>
  );
};`,
    },
    {
      label: "🧪 Unit Test Generation",
      prompt: `// Write Jest unit tests for this function
function calculateDiscount(price: number, discountPercent: number): number {
  return price - (price * discountPercent) / 100;
}`,
      output: `describe('calculateDiscount', () => {
  test('applies 10% discount correctly', () => {
  expect(calculateDiscount(100, 10)).toBe(90);
  });
  test('returns original price for 0% discount', () => {
  expect(calculateDiscount(100, 0)).toBe(100);
  });
  test('returns 0 for 100% discount', () => {
  expect(calculateDiscount(100, 100)).toBe(0);
  });
});`,
    },
  ],

  alternativeSlugs: ["cursor", "replit", "chatgpt"],
};
