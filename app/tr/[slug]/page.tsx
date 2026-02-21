import Navbar from "../../../components/Navbar";
import { tools } from "../../../data/tools";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { tCategory, tPricing } from "../../../components/i18n";
import ScreenshotGrid from "../../../components/ScreenshotGrid";

function themeBySlug(slug: string) {
  const themes = [
    { bg: "from-violet-200 to-fuchsia-200", border: "border-violet-500/55" },
    { bg: "from-emerald-100 to-cyan-200",   border: "border-emerald-500/55" },
    { bg: "from-indigo-200 to-sky-200",     border: "border-sky-500/55" },
    { bg: "from-amber-200 to-rose-200",     border: "border-rose-500/55" },
  ];
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return themes[h % themes.length];
}

type ToolExtra = {
  longDescTR: string;
  features: { icon: string; title: string; desc: string }[];
  forWhom: { icon: string; label: string }[];
  pricing: { plan: string; price: string; note: string }[];
  pros: string[];
  cons: string[];
  prompts: { label: string; prompt: string; output: string }[];
  alternativeSlugs: string[];
};

const extras: Record<string, ToolExtra> = {

  // ─────────────────────────────────────────────
  // 1. CHATGPT
  // ─────────────────────────────────────────────
  chatgpt: {
    longDescTR: `ChatGPT, OpenAI tarafından geliştirilen ve milyonlarca kullanıcının günlük iş akışlarında aktif olarak kullandığı büyük dil modeli (LLM) tabanlı bir yapay zekâ asistanıdır. 2022 yılında kamuya açılan araç, kısa sürede tarihin en hızlı büyüyen uygulamalarından biri haline geldi.

Temel güç noktası, bağlama duyarlı metin üretimidir: e-posta taslağı hazırlamak, karmaşık kavramları sadeleştirmek, kod yazmak ya da beyin fırtınası yapmak gibi çok farklı görevlerde tutarlı ve kaliteli çıktılar üretebilir. GPT-4o modeliyle görsel analiz, dosya yükleme ve internet araması da mümkün hale gelmiştir.

ChatGPT'yi rakiplerinden ayıran en önemli özellik, milyarlarca parametre üzerinde eğitilmiş geniş bilgi tabanı ve güçlü bağlam tutarlılığıdır. Uzun konuşma geçmişini hafızasında tutarak tutarlı yanıtlar verir; farklı ton ve üsluplara kolaylıkla uyum sağlar. Özellikle içerik üretimi, müşteri iletişimi ve kişisel üretkenlik alanlarında zamandan önemli ölçüde tasarruf sağlar.`,
    features: [
      { icon: "✍️", title: "Metin & İçerik Üretimi", desc: "Blog yazısı, sosyal medya metni, ürün açıklaması ve e-posta taslakları saniyeler içinde hazırlanır." },
      { icon: "🧠", title: "Fikir Geliştirme", desc: "Beyin fırtınası, içerik planı ve senaryo denemelerinde güçlü bir düşünce ortağıdır." },
      { icon: "💻", title: "Kod Yazma & Hata Ayıklama", desc: "Python, JavaScript, SQL ve daha fazlasında kod üretir, hataları açıklar ve düzeltir." },
      { icon: "📄", title: "Belge Özetleme", desc: "Uzun raporlar, makaleler veya toplantı notlarını hızla özetler." },
      { icon: "🌐", title: "Çoklu Dil Desteği", desc: "Türkçe dahil 50'den fazla dilde içerik üretir, çevirir ve düzenler." },
      { icon: "🔍", title: "Web Araması (GPT-4o)", desc: "Ücretli planda güncel web içeriklerine erişerek anlık bilgilerle yanıt verebilir." },
    ],
    forWhom: [
      { icon: "✍️", label: "İçerik üreticileri" },
      { icon: "💼", label: "Girişimciler & freelancerlar" },
      { icon: "🎓", label: "Öğrenci & akademisyenler" },
      { icon: "💻", label: "Yazılım geliştiriciler" },
      { icon: "📣", label: "Pazarlama uzmanları" },
      { icon: "🏢", label: "KOBİ & startup ekipleri" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "GPT-4o mini, sınırlı kullanım" },
      { plan: "Plus",     price: "$20 / ay", note: "GPT-4o, dosya yükleme, web araması" },
      { plan: "Team",     price: "$25 / ay", note: "Ekip paylaşımı, yönetici paneli" },
      { plan: "Enterprise", price: "Özel",  note: "Kurumsal güvenlik ve özel modeller" },
    ],
    pros: [
      "Geniş bilgi tabanı ve güçlü bağlam tutarlılığı",
      "Ücretsiz planla başlamak mümkün",
      "Sürekli güncellenen model ailesi",
      "Kod, metin, görsel analiz gibi çok modlu yetenekler",
      "Geniş topluluk ve kaynak ekosistemi",
    ],
    cons: [
      "Ücretsiz planda mesaj limiti var",
      "Zaman zaman yanlış bilgi üretebilir (halüsinasyon)",
      "İnternet araması yalnızca ücretli planda",
      "Çok uzun dokümanlarda bağlam sınırı olabilir",
    ],
    prompts: [
      {
        label: "📧 Profesyonel E-posta",
        prompt: "Bir pazarlama müdürü gibi davran. Müşteriye gecikmeli teslimat için özür e-postası yaz. Ton: profesyonel ve empatik. 2 farklı versiyon üret.",
        output: `Versiyon 1 — Resmi & Özür Odaklı:
Sayın [Müşteri Adı], siparişinizin teslimatında yaşanan gecikme için içtenlikle özür dileriz. Lojistik süreçlerde yaşanan beklenmedik aksama nedeniyle siparişiniz [yeni tarih] itibarıyla teslim edilecektir.

Versiyon 2 — Sıcak & Çözüm Odaklı:
Merhaba [Ad], bu gecikme için gerçekten üzgünüz. Telafi olarak bir sonraki siparişinize %10 indirim tanımlıyoruz. Anlayışınız için teşekkürler.`,
      },
      {
        label: "📝 Blog İçerik Planı",
        prompt: "SEO uzmanı gibi davran. 'Yapay zeka araçları 2026' konusunda 8 başlıklı blog içerik planı yap. H2/H3 hiyerarşisi kur, her başlık için 1 cümle açıklama ekle.",
        output: `H2: Yapay Zeka Araçları Nedir? — Temel kavramları tanıtan giriş yazısı
H2: En İyi Ücretsiz AI Araçları 2026 — Bütçe dostu alternatiflerin karşılaştırması
  H3: ChatGPT Free vs Gemini Free
  H3: Ücretsiz Görsel Üretim Araçları
H2: AI ile İçerik Üretimi Nasıl Yapılır? — Adım adım workflow rehberi
H2: Kodlama İçin En İyi AI Araçları — Copilot, Cursor ve Replit karşılaştırması`,
      },
      {
        label: "💡 İş Fikri Geliştirme",
        prompt: "İş geliştirme danışmanı gibi davran. Bütçe: 5.000 TL. Hedef: yapay zeka araçlarıyla online hizmet işi kur. 30 günlük aksiyon planı yaz.",
        output: `Hafta 1 — Temel Kurulum:
• ChatGPT Plus ($20) — içerik ve müşteri iletişimi
• Canva (ücretsiz) — görsel üretim
• İlk 3 hizmet paketi: içerik yazarlığı, sosyal medya, CV düzenleme

Hafta 2 — İlk Müşteriler:
• LinkedIn profilini optimize et
• 10 potansiyel müşteriye mesaj at
• 2 ücretsiz referans proje yap`,
      },
    ],
    alternativeSlugs: ["claude", "google-gemini", "perplexity"],
  },

  // ─────────────────────────────────────────────
  // 2. CLAUDE
  // ─────────────────────────────────────────────
  claude: {
    longDescTR: `Claude, Anthropic tarafından geliştirilen ve güvenlik odaklı bir yaklaşımla tasarlanan büyük dil modeli tabanlı yapay zekâ asistanıdır. Uzun dokümanlarla çalışma, nüanslı analiz ve tutarlı uzun soluklu metin üretiminde öne çıkar.

Özellikle akademik metinler, hukuki belgeler ve teknik dokümanlar gibi yapılandırılmış içeriklerin analizi ile yeniden yazımında tercih edilen bir araçtır. Geniş bağlam penceresi sayesinde yüz binlerce kelimelik belgeleri tek seferinde işleyebilir.

Anthropic'in "Constitutional AI" yaklaşımıyla geliştirilen Claude, zararlı içerik üretimine karşı güçlü sınırları ve etik değerlendirme kapasitesiyle öne çıkar. Kurumsal ve akademik kullanıcılar için güvenilirlik ve tutarlılık açısından güçlü bir tercihdir.`,
    features: [
      { icon: "📚", title: "Uzun Belge Analizi", desc: "Yüz binlerce kelimelik dokümanları tek seferinde analiz eder." },
      { icon: "✍️", title: "Tutarlı Uzun Metin", desc: "Raporlar, makaleler ve kitap bölümleri için tutarlı içerik üretir." },
      { icon: "🔒", title: "Güvenlik Odaklı Tasarım", desc: "Constitutional AI yöntemiyle geliştirilmiş, etik sınırları güçlüdür." },
      { icon: "💻", title: "Kod Desteği", desc: "Kod yazma, refactor ve hata ayıklamada güçlüdür." },
      { icon: "🧩", title: "Nüanslı Analiz", desc: "Karmaşık konularda çok boyutlu perspektifler sunar." },
      { icon: "📁", title: "Dosya & Belge İşleme", desc: "PDF, Word ve diğer belgeleri yükleyip analiz edebilirsin." },
    ],
    forWhom: [
      { icon: "📖", label: "Akademisyenler & araştırmacılar" },
      { icon: "⚖️", label: "Hukuk & danışmanlık sektörü" },
      { icon: "✍️", label: "Uzun form içerik yazarları" },
      { icon: "💻", label: "Yazılım geliştiriciler" },
      { icon: "🏢", label: "Kurumsal ekipler" },
      { icon: "📊", label: "Analistler & veri uzmanları" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "Temel erişim, sınırlı mesaj" },
      { plan: "Pro",      price: "$20 / ay", note: "Claude 3.5 Sonnet, öncelikli erişim" },
      { plan: "Team",     price: "$25 / ay", note: "Ekip paylaşımı ve yönetim" },
      { plan: "API",      price: "Kullanım başına", note: "Geliştiriciler için" },
    ],
    pros: [
      "Çok uzun bağlam penceresi (200K token)",
      "Tutarlı ve nüanslı yazı kalitesi",
      "Güvenlik odaklı ve etik tasarım",
      "Akademik ve teknik içeriklerde güçlü",
      "Dosya yükleme ve belge analizi",
    ],
    cons: [
      "Görsel üretimi yoktur",
      "Web araması sınırlıdır",
      "ChatGPT kadar geniş plugin ekosistemi yok",
      "Ücretsiz plan mesaj limiti kısıtlı",
    ],
    prompts: [
      {
        label: "📄 Uzun Belge Özeti",
        prompt: "Bu raporu 5 maddede özetle. Sonra yönetici özeti formatında 1 sayfalık taslak hazırla.",
        output: `Ana Bulgular:
1. Pazar büyüme hızı yıllık %23 olarak öngörülüyor
2. En büyük risk: tedarik zinciri kesintileri
3. Dijital dönüşüm yatırımları 2026'da zirveye ulaşacak
4. İK maliyetleri toplam bütçenin %41'ini oluşturuyor
5. Yeni fırsat: Güneydoğu Asya segmenti

Yönetici Özeti:
Bu rapor 2026–2028 büyüme projeksiyonlarını incelemekte olup sektörün dijital dönüşüme olan ihtiyacını net biçimde ortaya koymaktadır...`,
      },
      {
        label: "⚖️ Sözleşme Analizi",
        prompt: "Bu kira sözleşmesindeki kiracı aleyhine maddeleri işaretle ve her biri için kısa açıklama yaz.",
        output: `Dikkat Edilmesi Gereken Maddeler:

Madde 7 — Depozito İadesi: 60 günlük süre standart 30 günün üzerinde, kiracı aleyhine.
Madde 12 — Tadilat Yasağı: Küçük düzeltmeler dahil tüm tadilat için yazılı izin şartı kısıtlayıcı.
Madde 18 — Fesih Bildirimi: 90 günlük önceden bildirim, piyasa normunun üzerinde.`,
      },
      {
        label: "🧠 Karşılaştırmalı Analiz",
        prompt: "ChatGPT, Claude ve Gemini'yi içerik üretimi, kod yazma ve fiyat açısından karşılaştır. Tablo formatında sun.",
        output: `| Kriter          | ChatGPT    | Claude     | Gemini     |
|-----------------|------------|------------|------------|
| İçerik Kalitesi | ⭐⭐⭐⭐½     | ⭐⭐⭐⭐⭐    | ⭐⭐⭐⭐      |
| Kod Yazma       | ⭐⭐⭐⭐⭐    | ⭐⭐⭐⭐½    | ⭐⭐⭐⭐      |
| Uzun Bağlam     | ⭐⭐⭐⭐      | ⭐⭐⭐⭐⭐    | ⭐⭐⭐⭐⭐    |
| Ücretsiz Plan   | Orta       | Sınırlı    | Cömert     |
| Ücretli Fiyat   | $20/ay     | $20/ay     | $20/ay     |`,
      },
    ],
    alternativeSlugs: ["chatgpt", "google-gemini", "perplexity"],
  },

  // ─────────────────────────────────────────────
  // 3. GOOGLE GEMINI
  // ─────────────────────────────────────────────
  "google-gemini": {
    longDescTR: `Google Gemini, Google DeepMind tarafından geliştirilen ve Google'ın geniş ekosistemiyle derin entegrasyona sahip yapay zekâ asistanıdır. Gmail, Google Docs, Drive ve Search gibi ürünlerle native entegrasyonu sayesinde mevcut iş akışlarına kolayca dahil edilebilir.

Gemini'nin en güçlü özelliklerinden biri, multimodal yeteneğidir: metin, görsel, ses ve video içeriklerini aynı anda anlayıp işleyebilir. Bu özellik, özellikle çoklu ortam içerikleriyle çalışan ekipler için büyük avantaj sağlar.

Google'ın arama altyapısıyla desteklenen bilgi tabanı sayesinde güncel bilgilere erişim konusunda rakiplerine kıyasla avantajlıdır. Özellikle araştırma, özetleme ve Google Workspace entegrasyonunu kullanan kurumsal ekipler için öne çıkan bir tercih olmaya devam etmektedir.`,
    features: [
      { icon: "🔗", title: "Google Ekosistemi Entegrasyonu", desc: "Gmail, Docs, Drive ve Search ile native entegrasyon sağlar." },
      { icon: "👁️", title: "Multimodal Anlama", desc: "Metin, görsel, ses ve video içeriklerini aynı anda işleyebilir." },
      { icon: "🔍", title: "Güncel Bilgi Erişimi", desc: "Google arama altyapısıyla güncel bilgilere kolayca ulaşır." },
      { icon: "✍️", title: "İçerik & Metin Üretimi", desc: "Taslak hazırlama, özetleme ve yeniden yazma görevlerinde etkilidir." },
      { icon: "📊", title: "Veri Analizi", desc: "Google Sheets ile entegre çalışarak veri analizini hızlandırır." },
      { icon: "🌐", title: "Geniş Dil Desteği", desc: "Türkçe dahil çok sayıda dilde yüksek kaliteli çıktı üretir." },
    ],
    forWhom: [
      { icon: "🏢", label: "Google Workspace kullanan ekipler" },
      { icon: "🔍", label: "Araştırmacılar" },
      { icon: "✍️", label: "İçerik üreticileri" },
      { icon: "📊", label: "Veri analistleri" },
      { icon: "🎓", label: "Öğrenci & eğitimciler" },
      { icon: "💼", label: "Profesyoneller" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "Gemini 1.5 Flash, cömert limit" },
      { plan: "Advanced", price: "$20 / ay", note: "Gemini 1.5 Pro, Google One dahil" },
      { plan: "Business", price: "$30 / ay", note: "Workspace entegrasyonu" },
      { plan: "Enterprise", price: "Özel",  note: "Kurumsal güvenlik ve destek" },
    ],
    pros: [
      "Google ürünleriyle mükemmel entegrasyon",
      "Ücretsiz planda cömert kullanım limiti",
      "Güncel web bilgisine erişim",
      "Güçlü multimodal yetenekler",
      "Google Drive ile doğrudan çalışma",
    ],
    cons: [
      "Google ekosistemi dışında avantajı azalıyor",
      "Bazı görevlerde ChatGPT kadar yaratıcı değil",
      "Görsel üretimi sınırlı",
    ],
    prompts: [
      {
        label: "📧 Gmail Taslak Hazırlama",
        prompt: "Gmail'de kullanmak üzere bir iş ortağına proje güncelleme e-postası yaz. Ton: profesyonel ama samimi. Madde madde gelişmeleri listele.",
        output: `Konu: [Proje Adı] — Haftalık Güncelleme

Merhaba [Ad],

Bu hafta projedeki gelişmeleri paylaşmak istedim:

✅ Tamamlananlar:
• Kullanıcı araştırması raporu finalize edildi
• Tasarım wireframe'leri onaylandı

🔄 Devam Edenler:
• Backend API geliştirmesi (%60 tamamlandı)
• Kullanıcı testleri planlaması

📅 Önümüzdeki Hafta:
• İlk beta sürümü teslimi hedefleniyor

Görüşlerinizi bekliyorum. İyi çalışmalar!`,
      },
      {
        label: "📊 Veri Özeti",
        prompt: "Aşağıdaki satış verilerini analiz et ve 3 temel bulguyu madde madde listele. Sonra yöneticiye sunmak için kısa bir özet paragrafı yaz.",
        output: `Temel Bulgular:
1. Q3 satışları bir önceki çeyreğe göre %18 arttı
2. En yüksek büyüme ürün kategorisinde online kanaldan geldi
3. Müşteri başına ortalama sipariş değeri 245 TL'ye yükseldi

Yönetici Özeti:
Üçüncü çeyrekte güçlü bir performans sergilendi. Dijital kanalların artan katkısı ve sepet büyüklüğündeki artış, yıl sonu hedeflerine ulaşma konusunda olumlu sinyaller vermektedir.`,
      },
      {
        label: "🔍 Araştırma Özeti",
        prompt: "Yapay zeka ve eğitim sektörü hakkında araştırma yap. 2025–2026 trendlerini 5 maddede özetle.",
        output: `2025–2026 AI & Eğitim Trendleri:
1. Kişiselleştirilmiş öğrenme: AI, her öğrencinin hızına göre içerik uyarlıyor
2. Otomatik değerlendirme araçları yaygınlaşıyor
3. Dil bariyerleri AI çeviri ile azalıyor
4. Öğretmen iş yükü %30'a kadar azalabiliyor
5. Etik ve telif hakkı tartışmaları gündemin üst sıralarında`,
      },
    ],
    alternativeSlugs: ["chatgpt", "claude", "perplexity"],
  },

  // ─────────────────────────────────────────────
  // 4. MIDJOURNEY
  // ─────────────────────────────────────────────
  midjourney: {
    longDescTR: `Midjourney, metin girdilerinden (prompt) yüksek kaliteli ve yaratıcı görseller üreten yapay zekâ tabanlı bir görsel üretim platformudur. 2022'deki lansmanından bu yana yaratıcı sektörde devrim yarattı ve birçok kullanıcı tarafından kalite açısından en güçlü görsel üretim aracı olarak değerlendiriliyor.

Platformun en öne çıkan özelliği, sanatsal ve estetik duyarlılığıdır. Fotoğraf gerçekliğinden soyut sanata, sinematik karelerden illüstrasyon stillerine kadar geniş bir yelpazede çıktı üretebilir. V6 ve üzeri sürümlerde ışık, doku ve kompozisyon kalitesi oldukça etkileyici bir seviyeye ulaşmıştır.

Midjourney, Discord üzerinden çalışan benzersiz arayüzüyle diğer araçlardan ayrılır. Bu durum başlangıçta öğrenme eğrisi oluştursa da topluluk odaklı yapısı sayesinde ilham almak ve prompt geliştirmek çok daha kolay olmaktadır. Konsept tasarım, illüstrasyon, pazarlama görselleri ve yaratıcı proje denemeleri için güçlü bir tercihtir.`,
    features: [
      { icon: "🎨", title: "Yüksek Kalite Görseller", desc: "V6 modeliyle fotoğraf gerçekliğine yakın, estetik açıdan güçlü çıktılar üretir." },
      { icon: "🖼️", title: "Geniş Stil Yelpazesi", desc: "Fotogerçekçilikten soyut sanata, anime'den sinematik stile kadar çok sayıda tarz desteklenir." },
      { icon: "🔄", title: "Varyasyon Üretimi", desc: "Beğenilen bir görselin farklı varyasyonlarını kolayca oluşturabilirsin." },
      { icon: "⬆️", title: "Upscale & Detay Artırma", desc: "Üretilen görselleri yüksek çözünürlüklü hale getirme imkânı sunar." },
      { icon: "👥", title: "Topluluk & İlham", desc: "Discord topluluğu sayesinde başkalarının prompt'larından ilham alabilirsin." },
      { icon: "🎭", title: "Stil Referansı", desc: "Referans görsel yükleyerek benzer stil ve kompozisyonlar üretebilirsin." },
    ],
    forWhom: [
      { icon: "🎨", label: "Grafik tasarımcılar" },
      { icon: "📣", label: "Pazarlama & reklam ekipleri" },
      { icon: "🎮", label: "Oyun geliştiriciler & konsept sanatçılar" },
      { icon: "📸", label: "Fotoğrafçılar & görsel sanatçılar" },
      { icon: "✍️", label: "İçerik üreticileri" },
      { icon: "🏢", label: "Ajanslar & kreatif ekipler" },
    ],
    pricing: [
      { plan: "Basic",    price: "$10 / ay",  note: "200 görsel / ay" },
      { plan: "Standard", price: "$30 / ay",  note: "Sınırsız (relax mod)" },
      { plan: "Pro",      price: "$60 / ay",  note: "Gizli mod, daha hızlı" },
      { plan: "Mega",     price: "$120 / ay", note: "Yoğun kullanıcılar için" },
    ],
    pros: [
      "Kalite açısından sektörün en güçlü araçlarından biri",
      "Geniş stil yelpazesi ve sanatsal duyarlılık",
      "Aktif ve ilham verici Discord topluluğu",
      "Varyasyon ve upscale özellikleri",
    ],
    cons: [
      "Ücretsiz plan mevcut değil",
      "Discord tabanlı arayüz başlangıçta karmaşık gelebilir",
      "Prompt yazımı öğrenme eğrisi gerektiriyor",
      "Metin içeren görsellerde tutarsız sonuçlar",
    ],
    prompts: [
      {
        label: "🌆 Sinematik Şehir Görseli",
        prompt: "/imagine prompt: futuristic Istanbul skyline at golden hour, cinematic lighting, fog over Bosphorus, ultra-realistic, 8k, wide angle --ar 16:9 --v 6",
        output: `Beklenen Çıktı:
Boğaz üzerinde altın saat ışığıyla aydınlatılmış fütüristik İstanbul silüeti. Hafif sis efekti, derin perspektif ve sinematik renk paleti. 16:9 format, yüksek detay.

İpucu: "--ar" ile en boy oranını, "--v 6" ile en güncel modeli seçebilirsin.`,
      },
      {
        label: "🎨 Ürün Konsept Görseli",
        prompt: "/imagine prompt: minimalist luxury perfume bottle, matte black glass, gold accents, white studio background, product photography style, soft shadows --ar 1:1 --v 6",
        output: `Beklenen Çıktı:
Mat siyah cam, altın detaylar ve beyaz fon üzerinde lüks parfüm şişesi. Stüdyo aydınlatması, yumuşak gölgeler. Ticari ürün fotoğrafçılığı kalitesinde çıktı.`,
      },
      {
        label: "🖼️ İllüstrasyon Stili",
        prompt: "/imagine prompt: cozy Japanese coffee shop interior, autumn afternoon, warm lighting, people reading, Studio Ghibli inspired illustration style, detailed --ar 3:2",
        output: `Beklenen Çıktı:
Studio Ghibli tarzında, sonbahar öğleden sonrası, sıcak ışıklı Japon kahvecisi iç mekânı. Kitap okuyan karakterler, detaylı çizim stili, nostalji hissi veren renk paleti.`,
      },
    ],
    alternativeSlugs: ["dall-e", "stable-diffusion", "leonardo-ai"],
  },

  // ─────────────────────────────────────────────
  // 5. DALL·E
  // ─────────────────────────────────────────────
  "dall-e": {
    longDescTR: `DALL·E, OpenAI tarafından geliştirilen ve metin girdilerinden görsel üreten yapay zekâ modelidir. ChatGPT ile entegre çalışması sayesinde, sohbet içinde doğrudan görsel üretimi mümkün kılmaktadır. Bu entegrasyon, DALL·E'yi özellikle ChatGPT kullanıcıları için en erişilebilir görsel üretim aracı yapıyor.

DALL·E 3 sürümüyle birlikte prompt anlama kapasitesi önemli ölçüde gelişti. Daha önceki sürümlerde sık yaşanan "prompt'u yanlış anlama" sorunları büyük ölçüde çözüldü ve metni doğru yorumlayarak görsel üretme kapasitesi güçlendi.

Blog kapak görselleri, sosyal medya içerikleri, ürün konsept denemeleri ve hızlı prototipleme için idealdir. Özellikle teknik altyapıya ihtiyaç duymadan hızlıca görsel üretmek isteyenler için en pratik seçeneklerden biridir.`,
    features: [
      { icon: "💬", title: "ChatGPT Entegrasyonu", desc: "ChatGPT sohbeti içinde doğrudan görsel üretimi sağlar." },
      { icon: "📝", title: "Güçlü Prompt Anlama", desc: "Detaylı açıklamaları doğru yorumlayarak görsele dönüştürür." },
      { icon: "✏️", title: "Görsel Düzenleme", desc: "Mevcut görsellerin belirli bölgelerini düzenleyebilirsin (inpainting)." },
      { icon: "📐", title: "Farklı Boyutlar", desc: "Kare, dikey ve yatay format seçenekleri mevcuttur." },
      { icon: "🔄", title: "Hızlı Prototipleme", desc: "Konsept denemeleri için saniyeler içinde birden fazla varyasyon üretir." },
      { icon: "🛡️", title: "İçerik Güvenliği", desc: "OpenAI'ın güçlü içerik filtreleri ile güvenli üretim sağlar." },
    ],
    forWhom: [
      { icon: "✍️", label: "Blog ve içerik yazarları" },
      { icon: "📣", label: "Sosyal medya yöneticileri" },
      { icon: "💼", label: "Girişimciler & startup'lar" },
      { icon: "🎨", label: "UI/UX tasarımcıları" },
      { icon: "📚", label: "Eğitim materyali hazırlayanlar" },
      { icon: "🏪", label: "E-ticaret sahipleri" },
    ],
    pricing: [
      { plan: "ChatGPT Free", price: "$0 / ay",  note: "Sınırlı görsel üretimi" },
      { plan: "ChatGPT Plus", price: "$20 / ay", note: "DALL·E 3, öncelikli erişim" },
      { plan: "API",          price: "Görsel başına", note: "$0.04'ten başlayan fiyatlar" },
      { plan: "Enterprise",   price: "Özel",    note: "Yüksek hacimli kullanım" },
    ],
    pros: [
      "ChatGPT ile sorunsuz entegrasyon",
      "Prompt anlama kapasitesi güçlü",
      "Teknik bilgi gerektirmez",
      "Hızlı ve pratik kullanım",
    ],
    cons: [
      "Midjourney kadar estetik detay sunmuyor",
      "Stil kontrolü sınırlı",
      "Ücretsiz planda günlük limit var",
      "Metin içeren görsellerde bazen hata yapıyor",
    ],
    prompts: [
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
    alternativeSlugs: ["midjourney", "stable-diffusion", "adobe-firefly"],
  },

  // ─────────────────────────────────────────────
  // 6. STABLE DIFFUSION
  // ─────────────────────────────────────────────
  "stable-diffusion": {
    longDescTR: `Stable Diffusion, Stability AI tarafından geliştirilen ve açık kaynak olarak yayımlanan görsel üretim modelidir. Açık kaynak yapısı sayesinde dünya genelinde binlerce geliştirici tarafından özelleştirilmiş modeller (LoRA, Checkpoint) üretilmiş ve Civitai gibi platformlarda paylaşılmıştır.

Bu ekosistem, Stable Diffusion'ı son derece esnek ve güçlü kılar: gerçekçi insan portreleri, anime tarzı illüstrasyonlar, mimari renderlar veya soyut sanat gibi çok geniş bir yelpazede üretim yapılabilir. SDXL ve SD 3.5 gibi yeni modeller ile kalite önemli ölçüde artmıştır.

Kendi bilgisayarında çalıştırabilme özelliği (local), gizlilik açısından hassas projeler ve API maliyetlerini düşürmek isteyenler için büyük avantaj sağlar. Ancak teknik kurulum ve donanım gereksinimleri (özellikle GPU belleği) öğrenme eğrisini artırır. Ciddi görsel üretim işlerine giren ve özelleştirme arayan kullanıcılar için en güçlü açık kaynak seçenektir.`,
    features: [
      { icon: "🔓", title: "Açık Kaynak & Ücretsiz", desc: "Yerel bilgisayarında ücretsiz çalıştırabilir veya bulut servislerini kullanabilirsin." },
      { icon: "🧩", title: "Geniş Model Ekosistemi", desc: "Binlerce özelleştirilmiş model ve LoRA ile farklı stiller denenebilir." },
      { icon: "🔒", title: "Yerel Kullanım & Gizlilik", desc: "İnternet bağlantısı olmadan, tamamen yerel ortamda görsel üretebilirsin." },
      { icon: "⚙️", title: "İleri Düzey Kontrol", desc: "ControlNet ile poz, kompozisyon ve yapıyı hassas biçimde kontrol edebilirsin." },
      { icon: "🎨", title: "Sınırsız Stil", desc: "Gerçekçiden anime'ye, yağlı boyadan piksel sanatına geniş stil yelpazesi." },
      { icon: "🔄", title: "Img2Img Dönüşümü", desc: "Mevcut bir görseli alıp farklı stile veya içeriğe dönüştürebilirsin." },
    ],
    forWhom: [
      { icon: "💻", label: "Teknik kullanıcılar & geliştiriciler" },
      { icon: "🎨", label: "Dijital sanatçılar" },
      { icon: "🔒", label: "Gizlilik öncelikli projeler" },
      { icon: "🎮", label: "Oyun & animasyon geliştiriciler" },
      { icon: "🔬", label: "AI araştırmacıları" },
      { icon: "💰", label: "Maliyet odaklı yüksek hacim kullanıcıları" },
    ],
    pricing: [
      { plan: "Yerel (Local)", price: "Ücretsiz", note: "Kendi donanımında sınırsız" },
      { plan: "DreamStudio",   price: "Kredi bazlı", note: "Stability AI'ın bulut servisi" },
      { plan: "API",           price: "Kullanım başına", note: "Stability AI API" },
      { plan: "Bulut (RunPod vb.)", price: "Saatlik", note: "GPU kiralama servisleri" },
    ],
    pros: [
      "Tamamen ücretsiz yerel kullanım imkânı",
      "Açık kaynak — sonsuz özelleştirme",
      "Gizlilik: veriler dışarı çıkmaz",
      "ControlNet ile hassas kompozisyon kontrolü",
      "Binlerce hazır model ve LoRA",
    ],
    cons: [
      "Teknik kurulum bilgisi gerektirir",
      "Güçlü GPU (en az 6–8 GB VRAM) gereksinimi",
      "Arayüz başlangıçta karmaşık gelebilir",
      "Kalite standartlaşması model seçimine göre değişiyor",
    ],
    prompts: [
      {
        label: "🖼️ Portre Üretimi",
        prompt: "realistic portrait of a professional woman, 35 years old, natural lighting, office background, Canon 5D style photography, 8k, detailed skin texture --steps 30 --cfg 7",
        output: `Beklenen Çıktı:
Doğal stüdyo ışığında, ofis arka planlı, gerçekçi portre. SDXL veya Realistic Vision modeliyle en iyi sonucu alırsın. Steps: 30, CFG: 7 dengeli bir kalite sağlar.`,
      },
      {
        label: "🏛️ Mimari Render",
        prompt: "modern minimalist house exterior, large windows, wooden accents, surrounded by pine trees, dusk lighting, architectural visualization, photorealistic --ar 16:9",
        output: `Beklenen Çıktı:
Büyük camlı, ahşap detaylı modern minimalist ev. Alacakaranlık ışığı, çam ağaçları. Architecture model veya juggernautXL ile en iyi sonuç alınır.`,
      },
      {
        label: "🎨 Anime Stil İllüstrasyon",
        prompt: "anime style illustration, young warrior girl, cherry blossom background, detailed armor, vibrant colors, Studio Ghibli inspired, high quality",
        output: `Beklenen Çıktı:
Kiraz çiçekleri arka planında, detaylı zırhlı genç savaşçı kız. Canlı renkler, Ghibli ilhamlı stil. AnythingXL veya CounterfeitXL modeli önerilir.`,
      },
    ],
    alternativeSlugs: ["midjourney", "leonardo-ai", "dall-e"],
  },

  // ─────────────────────────────────────────────
  // 7. LEONARDO AI
  // ─────────────────────────────────────────────
  "leonardo-ai": {
    longDescTR: `Leonardo AI, özellikle oyun asset'leri, karakter tasarımı ve tutarlı stil üretimi konusunda uzmanlaşmış bir yapay zekâ görsel platformudur. Farklı model seçenekleri ve ince ayar (fine-tuning) özellikleriyle özelleştirme konusunda güçlü bir ekosistem sunar.

Platformun en büyük avantajlarından biri, aynı karakteri veya stili farklı kompozisyonlarda tutarlı biçimde üretebilme kapasitesidir. Bu özellik, özellikle oyun geliştirme, çizgi roman ve marka görsel tutarlılığı gerektiren projeler için büyük değer taşır.

Kullanıcı dostu web arayüzü sayesinde teknik bilgi gerektirmeden güçlü görsel üretimi yapılabilir. Ücretsiz planda günlük token sistemiyle sınırlı da olsa görsel üretimi mümkündür, bu da platformu denemek için düşük riskli bir seçenek yapar.`,
    features: [
      { icon: "🎮", title: "Oyun Asset Üretimi", desc: "Karakter, arka plan, ikon ve diğer oyun varlıkları için optimize edilmiştir." },
      { icon: "🔁", title: "Tutarlı Stil Üretimi", desc: "Aynı karakter veya stilin farklı pozlarda tutarlı çıktısını üretir." },
      { icon: "🎨", title: "Çoklu Model Seçeneği", desc: "Farklı estetik tercihler için özelleşmiş modeller arasından seçim yapabilirsin." },
      { icon: "⚙️", title: "Fine-tuning", desc: "Kendi görsellerinle model eğiterek özel stil oluşturabilirsin." },
      { icon: "✏️", title: "Canvas & Düzenleme", desc: "Oluşturulan görseller üzerinde inpainting ve outpainting yapabilirsin." },
      { icon: "🌐", title: "Kullanıcı Dostu Arayüz", desc: "Web tabanlı, sezgisel arayüz sayesinde teknik bilgi şartı yoktur." },
    ],
    forWhom: [
      { icon: "🎮", label: "Oyun geliştiriciler" },
      { icon: "🎨", label: "Konsept sanatçılar & illüstratörler" },
      { icon: "📚", label: "Çizgi roman & webtoon yaratıcıları" },
      { icon: "🏢", label: "Marka & pazarlama ekipleri" },
      { icon: "✍️", label: "İçerik üreticileri" },
      { icon: "🔬", label: "Prototipleme yapan tasarımcılar" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "150 token/gün, sınırlı özellikler" },
      { plan: "Apprentice", price: "$10 / ay", note: "8.500 token/ay" },
      { plan: "Artisan",    price: "$24 / ay", note: "25.000 token/ay" },
      { plan: "Maestro",    price: "$48 / ay", note: "60.000 token/ay" },
    ],
    pros: [
      "Oyun ve karakter asset üretiminde güçlü",
      "Tutarlı stil üretimi",
      "Ücretsiz planda günlük kullanım mümkün",
      "Fine-tuning ile özel model oluşturma",
      "Kullanıcı dostu web arayüzü",
    ],
    cons: [
      "Ücretsiz planda token limiti kısıtlı",
      "Fotogerçekçi portrelerde Midjourney kadar güçlü değil",
      "Fine-tuning öğrenme eğrisi gerektirir",
    ],
    prompts: [
      {
        label: "🎮 Oyun Karakteri",
        prompt: "fantasy RPG female mage character, full body, detailed purple robes, magical staff, glowing runes, game asset style, white background, front view",
        output: `Beklenen Çıktı:
Mor cübbeli, büyülü asa tutan kadın büyücü karakteri. Tam vücut, ön görünüm, beyaz arka plan. Oyun asset olarak direkt kullanılabilir, transparan arka plan için PNG tercih et.`,
      },
      {
        label: "🏞️ Oyun Arka Planı",
        prompt: "fantasy forest background, mystical atmosphere, glowing mushrooms, ancient ruins, game background art, horizontal, no characters, 16:9",
        output: `Beklenen Çıktı:
Parlayan mantarlar ve antik harabelerle dolu mistik orman arka planı. 16:9 format, karaktersiz, oyun background olarak kullanıma hazır.`,
      },
      {
        label: "🎨 Marka İllüstrasyonu",
        prompt: "cozy coffee brand mascot, cute bear character, holding coffee cup, warm colors, friendly expression, cartoon style, isolated on white",
        output: `Beklenen Çıktı:
Kahve fincanı tutan, sevimli ayı maskot karakteri. Sıcak renkler, beyaz arka plan, marka iletişiminde kullanılabilir karikatür stili.`,
      },
    ],
    alternativeSlugs: ["midjourney", "stable-diffusion", "dall-e"],
  },

  // ─────────────────────────────────────────────
  // 8. ADOBE FIREFLY
  // ─────────────────────────────────────────────
  "adobe-firefly": {
    longDescTR: `Adobe Firefly, dünyanın en büyük yaratıcı yazılım şirketi Adobe tarafından geliştirilen ve Adobe Creative Cloud ekosistemiyle derin entegrasyon sunan yapay zekâ görsel üretim platformudur. Photoshop, Illustrator ve Express gibi uygulamaların içine doğrudan entegre olması, mevcut tasarım iş akışlarını yapay zekâ ile güçlendirmeyi son derece kolaylaştırır.

Firefly'ın en kritik avantajı, ticari güvenlik konusundadır. Adobe'nin telif hakkı açısından temiz içeriklerle eğitilmiş modelleri kullanması, üretilen görsellerin ticari projelerde kullanılmasını hukuki riskler açısından güvenli kılar. Bu özellik, özellikle ajanslar ve kurumsal markalar için büyük değer taşır.

Generative Fill, Generative Expand ve Text to Image gibi özellikler, tasarımcıların hem yeni görseller oluşturmasını hem de mevcut görselleri kolayca düzenlemesini sağlar. Adobe ekosistemini kullanan herkes için doğal bir tamamlayıcı araçtır.`,
    features: [
      { icon: "🔗", title: "Adobe Ekosistemi Entegrasyonu", desc: "Photoshop, Illustrator ve Express içinde doğrudan kullanım." },
      { icon: "⚖️", title: "Ticari Güvenlik", desc: "Telif hakkı temiz içeriklerle eğitilmiş, ticari kullanıma uygun modeller." },
      { icon: "✂️", title: "Generative Fill", desc: "Fotoğraflardaki nesneleri kaldır veya yeni içerikle doldur." },
      { icon: "↔️", title: "Generative Expand", desc: "Görseli istenilen yönde yapay zekâyla genişlet." },
      { icon: "🎨", title: "Stil Aktarımı", desc: "Referans görselin stilini yeni içeriklere uygulama imkânı." },
      { icon: "📝", title: "Text Effects", desc: "Metin üzerine yaratıcı görsel efektler uygulayabilirsin." },
    ],
    forWhom: [
      { icon: "🎨", label: "Grafik tasarımcılar" },
      { icon: "📸", label: "Fotoğraf editörleri" },
      { icon: "🏢", label: "Ajanslar & marka ekipleri" },
      { icon: "📣", label: "Pazarlama profesyonelleri" },
      { icon: "🎬", label: "Video & medya prodüksiyon ekipleri" },
      { icon: "💼", label: "Adobe CC kullanıcıları" },
    ],
    pricing: [
      { plan: "Ücretsiz",        price: "$0 / ay",  note: "25 aylık kredi, firefly.adobe.com" },
      { plan: "Firefly Standard", price: "$9.99 / ay", note: "100 aylık kredi" },
      { plan: "Firefly Pro",      price: "$29.99 / ay", note: "2.000 aylık kredi" },
      { plan: "Creative Cloud",   price: "$54.99 / ay", note: "Tüm Adobe uygulamaları dahil" },
    ],
    pros: [
      "Adobe uygulamalarıyla doğal entegrasyon",
      "Ticari kullanım için hukuki güvenlik",
      "Generative Fill ile güçlü fotoğraf düzenleme",
      "Ücretsiz başlangıç kredisi",
    ],
    cons: [
      "En iyi deneyim için Adobe CC aboneliği gerekiyor",
      "Midjourney kadar yaratıcı/sanatsal değil",
      "Aylık kredi sınırı hızlı bitebilir",
    ],
    prompts: [
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
        output: `Beklenen Çıktı:
Plaj fotoğrafı her iki yana doğal biçimde genişletilir. Kumun dokusu, dalgaların ritmi ve ışık yönü orijinalle uyumlu şekilde tamamlanır.`,
      },
      {
        label: "🎨 Text Effect",
        prompt: "firefly.adobe.com → Text Effects → Metin: 'YAZA MERHABA' → Effect prompt: 'tropical flowers, bright colors, summer vibes'",
        output: `Beklenen Çıktı:
'YAZA MERHABA' yazısı tropikal çiçekler ve canlı yaz renkleriyle kaplanmış. Sosyal medya paylaşımları için hazır görsel efekt.`,
      },
    ],
    alternativeSlugs: ["midjourney", "dall-e", "stable-diffusion"],
  },

  // ─────────────────────────────────────────────
  // 9. RUNWAY
  // ─────────────────────────────────────────────
  runway: {
    longDescTR: `Runway, yapay zekâ destekli video üretimi ve düzenleme konusunda sektörün en önde gelen platformlarından biridir. Gen-2 ve Gen-3 modelleriyle metinden video, görüntüden video üretimi ve gelişmiş video düzenleme araçları sunar.

Platform, özellikle içerik üreticileri, film yapımcıları ve kreatif ekipler için güçlü bir araç seti sunmaktadır. Green screen kaldırma, nesne silme, video stilize etme ve metinden video oluşturma gibi özellikler, geleneksel video post-prodüksiyon süreçlerini dramatik biçimde hızlandırır.

Runway'i rakiplerinden ayıran en önemli özellik, yaratıcı kontrol seçeneklerinin zenginliğidir. Yalnızca metin girmekle kalmaz; referans görsel, kamera hareketi, hareket yoğunluğu gibi parametrelerle çıktı üzerinde ince ayar yapabilirsin. Profesyonel video üretimi için erişilebilir yapay zekâ çözümü arayan ekipler için güçlü bir tercihtir.`,
    features: [
      { icon: "🎬", title: "Text to Video", desc: "Metin açıklamasından kısa ve kaliteli video üretir." },
      { icon: "🖼️", title: "Image to Video", desc: "Bir görseli animasyona dönüştürür, hareket ve dinamizm katar." },
      { icon: "✂️", title: "Green Screen Kaldırma", desc: "Arka planı otomatik kaldırır, yeni ortamlarla birleştirir." },
      { icon: "🎨", title: "Video Stilize Etme", desc: "Mevcut videoyu farklı sanatsal stile dönüştürür." },
      { icon: "🗑️", title: "Nesne Silme", desc: "Video karelerindeki istenmeyen nesneleri otomatik temizler." },
      { icon: "🎭", title: "Kamera Kontrolü", desc: "Pan, zoom ve kamera hareketi ile sinematik çıktılar üretebilirsin." },
    ],
    forWhom: [
      { icon: "🎬", label: "Film & içerik yapımcıları" },
      { icon: "📣", label: "Sosyal medya içerik üreticileri" },
      { icon: "🏢", label: "Ajanslar & reklam ekipleri" },
      { icon: "🎨", label: "Motion design sanatçıları" },
      { icon: "📱", label: "Influencer & YouTuberlar" },
      { icon: "🎓", label: "Eğitim video üreticileri" },
    ],
    pricing: [
      { plan: "Ücretsiz",  price: "$0 / ay",   note: "125 kredi, sınırlı özellikler" },
      { plan: "Standard", price: "$15 / ay",   note: "625 kredi/ay" },
      { plan: "Pro",       price: "$35 / ay",   note: "2.250 kredi/ay" },
      { plan: "Unlimited", price: "$95 / ay",  note: "Sınırsız (standart kalite)" },
    ],
    pros: [
      "Güçlü text-to-video ve image-to-video",
      "Green screen ve nesne kaldırma özellikleri",
      "Kamera hareketi kontrolü",
      "Kullanıcı dostu arayüz",
    ],
    cons: [
      "Uzun video üretimi sınırlı (saniyeler bazında)",
      "Kredi sistemi hızlı tükenebilir",
      "Ücretsiz planda düşük kalite",
      "Yüksek kalite için abonelik gerekli",
    ],
    prompts: [
      {
        label: "🎬 Text to Video",
        prompt: "A serene Japanese garden at dawn, koi fish swimming in a pond, cherry blossoms falling, slow cinematic camera movement, 4K quality",
        output: `Beklenen Çıktı:
Şafakta Japon bahçesi, yüzen koi balıkları, dökülen kiraz çiçekleri. Yavaş sinematik kamera hareketi, yumuşak aydınlatma. 4–10 saniyelik klip.

İpucu: Motion Brush ile hangi alanların hareket edeceğini manuel kontrol edebilirsin.`,
      },
      {
        label: "🖼️ Image to Video",
        prompt: "Görseli yükle → Camera Motion: Slow Zoom In → Motion Amount: 3 → Generate (Bu ayarlarla statik fotoğraf yavaşça yakınlaşan, nefes alan bir videoya dönüşür)",
        output: `Beklenen Çıktı:
Statik fotoğraf, yavaş zoom efektiyle canlı hale geliyor. Ken Burns efektine benzer, sosyal medya ve sunum için çok etkili sonuç.`,
      },
      {
        label: "✂️ Arka Plan Kaldırma",
        prompt: "Video yükle → Remove Background → Yeni arka plan seç veya yeşil ekran olarak kullan",
        output: `Beklenen Çıktı:
Kişi veya nesne arka plandan otomatik ayrıştırılır. Yeni sahneye yerleştirme veya After Effects/Premiere'de kullanım için hazır alpha kanal çıktısı.`,
      },
    ],
    alternativeSlugs: ["capcut", "pika", "luma-dream-machine"],
  },

  // ─────────────────────────────────────────────
  // 10. CAPCUT
  // ─────────────────────────────────────────────
  capcut: {
    longDescTR: `CapCut, ByteDance (TikTok'un ana şirketi) tarafından geliştirilen ve özellikle sosyal medya içerik üretimi için tasarlanmış ücretsiz video düzenleme platformudur. Mobil uygulama ve web versiyonuyla hem telefon hem bilgisayar üzerinden kullanılabilir.

Platformun en büyük gücü, hazır şablon kütüphanesidir. TikTok ve Instagram Reels trendlerine uygun binlerce şablon arasından seçim yaparak dakikalar içinde çekici videolar oluşturabilirsin. Otomatik altyazı, arkaplan kaldırma, AI avatar oluşturma ve ses senkronizasyonu gibi AI özellikler ücretsiz olarak sunulur.

Teknik bilgi gerektirmeyen sezgisel arayüzü ve güçlü AI araçları sayesinde CapCut, başlangıç seviyesindeki içerik üreticilerinden profesyonel sosyal medya yöneticilerine kadar geniş bir kullanıcı tabanına hitap eder. Türkiye'de de en çok kullanılan video düzenleme araçlarından biridir.`,
    features: [
      { icon: "📱", title: "Mobil & Web", desc: "iOS, Android ve tarayıcı üzerinden erişilebilir." },
      { icon: "🎨", title: "Hazır Şablonlar", desc: "TikTok ve Reels trendlerine özel binlerce şablon." },
      { icon: "📝", title: "Otomatik Altyazı", desc: "Sesi metne çevirerek otomatik altyazı ekler." },
      { icon: "✂️", title: "Arka Plan Kaldırma", desc: "Tek tıklamayla arka planı kaldırır." },
      { icon: "🤖", title: "AI Avatar", desc: "Metin girerek konuşan AI avatar videoları oluşturur." },
      { icon: "🎵", title: "Ses Senkronizasyonu", desc: "Müzik ritmine göre otomatik video kesimi." },
    ],
    forWhom: [
      { icon: "📱", label: "TikTok & Instagram içerik üreticileri" },
      { icon: "💼", label: "Küçük işletme sahipleri" },
      { icon: "🎓", label: "Öğrenci & genç yaratıcılar" },
      { icon: "📣", label: "Sosyal medya yöneticileri" },
      { icon: "🛍️", label: "E-ticaret satıcıları" },
      { icon: "👨‍🏫", label: "Eğitim içeriği üretenler" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "Temel özellikler, filigran var" },
      { plan: "Pro",       price: "$9.99 / ay", note: "Filigransız, premium şablonlar" },
      { plan: "Business",  price: "$19.99 / ay", note: "Ekip çalışması, marka kiti" },
      { plan: "Enterprise", price: "Özel",   note: "Kurumsal lisans" },
    ],
    pros: [
      "Ücretsiz planda güçlü özellikler",
      "Hazır şablon kütüphanesi çok zengin",
      "Otomatik altyazı çok başarılı",
      "Mobil kullanımda çok kolay",
      "TikTok trend entegrasyonu",
    ],
    cons: [
      "Ücretsiz planda filigran sorunu",
      "Gelişmiş profesyonel düzenleme sınırlı",
      "ByteDance/veri gizliliği endişeleri",
      "Uzun videolarda yavaşlayabiliyor",
    ],
    prompts: [
      {
        label: "📝 Otomatik Altyazı",
        prompt: "Video yükle → Metin → Otomatik Altyazı → Türkçe seç → Oluştur → Stili düzenle (renk, font, boyut)",
        output: `Beklenen Sonuç:
Konuşmalar otomatik tanınarak her cümle için altyazı oluşturulur. %90+ doğruluk oranı. Kelime kelime vurgulama için 'Karaoke Stili' seç.

İpucu: Altyazı stilini markana göre özelleştir ve şablon olarak kaydet.`,
      },
      {
        label: "🎬 Trend Şablonu",
        prompt: "Şablonlar → Kategori: İş/Pazarlama → Ürün tanıtım şablonu seç → Fotoğraflarını ekle → Metinleri düzenle → Dışa aktar",
        output: `Beklenen Sonuç:
Hazır animasyonlu şablona kendi ürün fotoğraflarını ekliyorsun. Müzik ve geçişler otomatik uyum sağlıyor. 30 saniyede sosyal medyaya hazır video.`,
      },
      {
        label: "🤖 AI Avatar Video",
        prompt: "AI Araçları → AI Avatar → Avatar seç → Metin yaz → Dil: Türkçe → Ses seç → Oluştur",
        output: `Beklenen Sonuç:
Girdiğin metni okuyan, gerçekçi görünümlü AI avatar videosu oluşur. Ürün tanıtımı, eğitim içeriği veya haber anlatımı için pratik çözüm.`,
      },
    ],
    alternativeSlugs: ["veed", "runway", "pika"],
  },

  // ─────────────────────────────────────────────
  // 11. VEED
  // ─────────────────────────────────────────────
  veed: {
    longDescTR: `VEED.IO, tarayıcı tabanlı çalışan ve kurulum gerektirmeyen online video düzenleme platformudur. Özellikle hızlı düzenleme, otomatik altyazı ve sosyal medya çıktıları konusunda kullanıcı dostu bir deneyim sunar.

Platformun öne çıkan özelliği, doğruluk oranı yüksek otomatik altyazı sistemidir. Podcast ve röportaj videolarını metne dönüştürmek, altyazı eklemek ve erişilebilirliği artırmak için yaygın olarak kullanılır. Ayrıca arka plan gürültü kaldırma, ses iyileştirme ve video boyut dönüştürme gibi pratik araçlar da sunar.

Herhangi bir yazılım kurmadan, yalnızca tarayıcı üzerinden çalışması, ekip içi iş birliği ve hızlı düzenleme gerektiren durumlar için VEED'i pratik bir tercih haline getirir.`,
    features: [
      { icon: "🌐", title: "Tarayıcı Tabanlı", desc: "Kurulum gerektirmez, her cihazdan erişilebilir." },
      { icon: "📝", title: "Otomatik Altyazı", desc: "Yüksek doğruluk oranıyla konuşmayı metne çevirir." },
      { icon: "🔇", title: "Gürültü Kaldırma", desc: "Arka plan sesini otomatik olarak temizler." },
      { icon: "📐", title: "Format Dönüştürme", desc: "Video boyutlarını farklı platformlar için hızla ayarlar." },
      { icon: "👥", title: "Ekip İş Birliği", desc: "Takım üyeleriyle ortak düzenleme ve yorum yapabilirsin." },
      { icon: "🎨", title: "Ekran Kaydı", desc: "Tarayıcı üzerinden ekran kaydı ve düzenleme imkânı." },
    ],
    forWhom: [
      { icon: "🎙️", label: "Podcast yapımcıları" },
      { icon: "🎓", label: "Online eğitimciler & kursçular" },
      { icon: "💼", label: "Uzak çalışan ekipler" },
      { icon: "📣", label: "Sosyal medya yöneticileri" },
      { icon: "📊", label: "Kurumsal sunum hazırlayanlar" },
      { icon: "🌍", label: "Çok dilli içerik üretenler" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "250MB limit, filigran" },
      { plan: "Basic",    price: "$18 / ay", note: "1GB, filigransız" },
      { plan: "Pro",      price: "$30 / ay", note: "Sınırsız, tüm özellikler" },
      { plan: "Business", price: "$70 / ay", note: "Ekip lisansı" },
    ],
    pros: [
      "Kurulum gerektirmez, tarayıcıdan çalışır",
      "Otomatik altyazı kalitesi yüksek",
      "Gürültü kaldırma çok başarılı",
      "Ekip iş birliği özellikleri",
    ],
    cons: [
      "Ücretsiz planda boyut ve süre limiti",
      "CapCut kadar şablon çeşitliliği yok",
      "Gelişmiş renk düzeltme sınırlı",
    ],
    prompts: [
      {
        label: "🎙️ Podcast Altyazısı",
        prompt: "Video/ses yükle → Altyazı → Otomatik Oluştur → Dil: Türkçe → Düzenle → SRT veya MP4 olarak dışa aktar",
        output: `Beklenen Sonuç:
Podcast sesin kelime kelime yazıya döküldü. Hataları manuel düzenle, sonra stilize et. SRT dosyası olarak indirip YouTube veya başka platforma yükleyebilirsin.`,
      },
      {
        label: "🔇 Ses Temizleme",
        prompt: "Video yükle → Ses Ayarları → Arka Plan Gürültüsünü Kaldır → Ses Geliştir → Uygula",
        output: `Beklenen Sonuç:
Ofis gürültüsü, klavye sesleri veya ventilatör sesi otomatik filtrelendi. Mikrofon sesi daha net ve profesyonel hale geldi.`,
      },
      {
        label: "📐 Sosyal Medya Formatı",
        prompt: "Video yükle → Boyut → Instagram Reels (9:16) seç → Video yeniden çerçeveleme → Dışa aktar",
        output: `Beklenen Sonuç:
Yatay video otomatik dikey formata dönüştürüldü. Akıllı yeniden çerçeveleme sayesinde ana içerik kaybolmadan kırpıldı.`,
      },
    ],
    alternativeSlugs: ["capcut", "runway", "descript"],
  },

  // ─────────────────────────────────────────────
  // 12. PIKA
  // ─────────────────────────────────────────────
  pika: {
    longDescTR: `Pika, metinden kısa video üretimi ve görsel stil denemeleri için tasarlanmış yapay zekâ tabanlı bir video platformudur. Kullanımı kolay arayüzü ve hızlı üretim kapasitesiyle özellikle sosyal medya içerik üreticileri arasında popülerlik kazanmıştır.

Pika 1.5 ve sonraki sürümlerle önemli kalite artışı yaşandı. Görselden video, metinden video ve video üzerine stil uygulamaları gibi temel özellikler, kısa ve etkili sosyal medya içerikleri üretmek için yeterli araç seti sunar.

Uzun ve karmaşık video prodüksiyonları için değil, hızlı ve etkileyici kısa içerikler için idealdir. Runway veya Luma Dream Machine gibi rakiplerine kıyasla daha basit ve erişilebilir bir kullanıcı deneyimi sunar.`,
    features: [
      { icon: "⚡", title: "Hızlı Video Üretimi", desc: "Metinden saniyeler içinde kısa video üretir." },
      { icon: "🎨", title: "Stil Uygulaması", desc: "Mevcut videolara farklı sanatsal stiller uygular." },
      { icon: "🖼️", title: "Image to Video", desc: "Statik görseli kısa animasyona dönüştürür." },
      { icon: "🎭", title: "Efekt Kütüphanesi", desc: "Hazır efektler ve geçiş seçenekleri sunar." },
      { icon: "📱", title: "Sosyal Medya Odaklı", desc: "Kısa format ve platform uyumlu çıktılar için optimize edilmiş." },
      { icon: "🔄", title: "Video Uzatma", desc: "Mevcut videoyu yapay zekâyla uzatabilirsin." },
    ],
    forWhom: [
      { icon: "📱", label: "TikTok & Reels içerik üreticileri" },
      { icon: "🎨", label: "Yaratıcı deneme yapanlar" },
      { icon: "📣", label: "Sosyal medya yöneticileri" },
      { icon: "🛍️", label: "E-ticaret & ürün tanıtımı" },
      { icon: "🎓", label: "Yeni başlayanlar" },
      { icon: "💼", label: "Küçük işletmeler" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "Sınırlı üretim hakkı" },
      { plan: "Basic",    price: "$8 / ay",  note: "700 kredi/ay" },
      { plan: "Standard", price: "$28 / ay", note: "2.000 kredi/ay" },
      { plan: "Unlimited", price: "$78 / ay", note: "Sınırsız üretim" },
    ],
    pros: [
      "Kullanımı çok kolay ve hızlı",
      "Sosyal medya için ideal format",
      "Uygun fiyatlı başlangıç planı",
      "Stil uygulamaları eğlenceli",
    ],
    cons: [
      "Uzun video üretimi mümkün değil",
      "Runway kadar profesyonel kontrol yok",
      "Karmaşık sahnelerde kalite düşüyor",
    ],
    prompts: [
      {
        label: "🎬 Ürün Tanıtım Videosu",
        prompt: "A luxury perfume bottle on a marble surface, rose petals falling in slow motion, golden light, elegant and cinematic",
        output: `Beklenen Çıktı:
Mermer yüzeyde parfüm şişesi, yavaş çekimde düşen gül yaprakları, altın ışık efekti. 3–4 saniyelik lüks ürün tanıtım klibi. Instagram veya TikTok için ideal format.`,
      },
      {
        label: "🖼️ Fotoğrafı Canlandır",
        prompt: "Fotoğrafı yükle → 'gentle breeze moving through the hair, soft smile' → Generate",
        output: `Beklenen Çıktı:
Statik portre fotoğrafında saçlar hafifçe sallanıyor, dudaklar gülümseyen bir ifadeye geçiyor. Doğal ve akıcı animasyon.`,
      },
      {
        label: "🎨 Stil Dönüşümü",
        prompt: "Video yükle → Style → 'watercolor painting, soft edges, artistic' → Apply",
        output: `Beklenen Çıktı:
Normal video sulu boya resim efektiyle stilize edildi. Yumuşak kenarlar, pastel renkler. Sanatsal sosyal medya içeriği için güzel bir efekt.`,
      },
    ],
    alternativeSlugs: ["runway", "capcut", "luma-dream-machine"],
  },

  // ─────────────────────────────────────────────
  // 13. LUMA DREAM MACHINE
  // ─────────────────────────────────────────────
  "luma-dream-machine": {
    longDescTR: `Luma Dream Machine, Luma AI tarafından geliştirilen ve sinematik kalitede video üretimine odaklanan yapay zekâ platformudur. Hem metinden hem de görüntüden video üretimi yapabilir; özellikle kamera hareketleri, ışık kalitesi ve hareket akıcılığı konusunda rakiplerine kıyasla öne çıkar.

Ray2 modeli ile Luma Dream Machine, 2025'in en güçlü video üretim modellerinden biri konumuna yükseldi. Photorealistic insan figürleri, karmaşık sahne geçişleri ve doğal kamera hareketleri konusunda etkileyici sonuçlar üretebilmektedir.

Sinematik bir anlatım dili hedefleyen içerik üreticileri, reklam yapımcıları ve film prodüksiyonu için güçlü bir araçtır. Kullanıcı dostu web arayüzü sayesinde teknik bilgi olmaksızın profesyonel düzeyde çıktı almak mümkündür.`,
    features: [
      { icon: "🎬", title: "Sinematik Kalite", desc: "Yüksek kaliteli kamera hareketleri ve ışık efektleriyle öne çıkar." },
      { icon: "📸", title: "Image to Video", desc: "Fotoğraftan akıcı ve gerçekçi video üretir." },
      { icon: "🎭", title: "Kamera Kontrolü", desc: "Pan, tilt, zoom ve orbit gibi kamera hareketleri desteklenir." },
      { icon: "👤", title: "İnsan Figürü", desc: "Gerçekçi insan hareketi ve yüz ifadesi üretiminde güçlüdür." },
      { icon: "🔄", title: "Video Uzatma", desc: "Üretilen videoyu yapay zekâyla uzatabilirsin." },
      { icon: "🌐", title: "API Erişimi", desc: "Geliştiriciler için API üzerinden entegrasyon imkânı." },
    ],
    forWhom: [
      { icon: "🎬", label: "Film & reklam yapımcıları" },
      { icon: "📣", label: "Marka video içerikleri" },
      { icon: "🎨", label: "Yaratıcı yönetmenler" },
      { icon: "📸", label: "Fotoğrafçılar (fotoğrafı canlandırmak için)" },
      { icon: "🏢", label: "Ajanslar & prodüksiyon şirketleri" },
      { icon: "💻", label: "Geliştiriciler & ürün ekipleri" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "30 üretim/ay, filigransız" },
      { plan: "Standard", price: "$29.99 / ay", note: "120 üretim/ay" },
      { plan: "Plus",     price: "$99.99 / ay", note: "400 üretim/ay, öncelikli" },
      { plan: "Pro",      price: "$499.99 / ay", note: "2.000 üretim/ay" },
    ],
    pros: [
      "Sinematik kalite ve akıcı kamera hareketleri",
      "İnsan figürü üretiminde güçlü",
      "Ücretsiz planda filigran yok",
      "Image to video kalitesi yüksek",
    ],
    cons: [
      "Ücretsiz planda aylık üretim limiti düşük",
      "Ücretli planlar pahalı",
      "Çok detaylı prompt kontrolü sınırlı",
    ],
    prompts: [
      {
        label: "🌅 Sinematik Sahne",
        prompt: "A lone lighthouse on rocky cliffs at stormy sea, dramatic waves crashing, dark clouds, cinematic lighting, slow push-in camera movement, photorealistic",
        output: `Beklenen Çıktı:
Fırtınalı denizde kayalıklardaki deniz feneri, çarpan dalgalar, dramatik bulutlar. Yavaş ilerleme kamera hareketiyle sinematik his. Film fragmanı kalitesinde çıktı.`,
      },
      {
        label: "👤 Portre Canlandırma",
        prompt: "Portre fotoğrafını yükle → 'person slowly turns head, gentle smile, soft bokeh background, natural lighting' → Generate",
        output: `Beklenen Çıktı:
Portre fotoğrafındaki kişi yavaşça başını çeviriyor, hafif gülümseme, yumuşak bokeh arka plan. Sosyal medya veya tanıtım içeriği için profesyonel görünüm.`,
      },
      {
        label: "🏙️ Şehir Time-lapse",
        prompt: "Aerial view of Istanbul at night, Bosphorus bridge lights reflecting on water, time-lapse style, stars moving, cinematic, 4K",
        output: `Beklenen Çıktı:
İstanbul'un gece havadan görünümü, Boğaz köprüsü ışıkları su üzerinde yansıyor, hızlandırılmış bulut hareketi. Tanıtım filmi kalitesinde sinematik çıktı.`,
      },
    ],
    alternativeSlugs: ["runway", "pika", "capcut"],
  },

  // ─────────────────────────────────────────────
  // 14. ELEVENLABS
  // ─────────────────────────────────────────────
  elevenlabs: {
    longDescTR: `ElevenLabs, metinden ses üretimi (text-to-speech) ve ses klonlama konusunda sektörün en ileri teknolojisini sunan yapay zekâ platformudur. Ürettiği seslerin doğallığı ve insan sesine yakınlığı açısından rakipsiz bir konumda bulunmaktadır.

Platformun en dikkat çekici özelliği, ses klonlama kapasitesidir. Yalnızca birkaç dakikalık ses kaydıyla bir kişinin sesini klonlamak ve bu ses üzerinden farklı metinleri okutmak mümkündür. Bu özellik, içerik üreticileri için kendi seslerini ölçeklendirme imkânı sunar.

Türkçe dahil 30'dan fazla dilde yüksek kaliteli ses üretimi yapılabilir. Podcast anlatımı, YouTube video sesi, reklam seslendirmesi, e-öğrenme ve sesli kitap üretimi gibi alanlarda yaygın olarak kullanılmaktadır. API erişimi sayesinde uygulamalara entegre edilebilir.`,
    features: [
      { icon: "🎙️", title: "Doğal Ses Üretimi", desc: "İnsan sesine en yakın text-to-speech kalitesi sunar." },
      { icon: "👤", title: "Ses Klonlama", desc: "Birkaç dakikalık kayıtla bir sesi klonlayabilirsin." },
      { icon: "🌍", title: "30+ Dil Desteği", desc: "Türkçe dahil çok sayıda dilde yüksek kaliteli çıktı." },
      { icon: "🎭", title: "Geniş Ses Kütüphanesi", desc: "Yüzlerce hazır ses ve ton arasından seçim yapabilirsin." },
      { icon: "⚙️", title: "Ses Ayarları", desc: "Ton, hız, duraklama ve vurgu üzerinde ince kontrol." },
      { icon: "🔗", title: "API Entegrasyonu", desc: "Uygulamalara ve iş akışlarına kolayca entegre edilir." },
    ],
    forWhom: [
      { icon: "🎙️", label: "Podcast yapımcıları" },
      { icon: "📹", label: "YouTube & video içerik üreticileri" },
      { icon: "📚", label: "Sesli kitap & e-öğrenme içerikleri" },
      { icon: "📣", label: "Reklam & marka seslendirme" },
      { icon: "💻", label: "Geliştiriciler & uygulama yapımcıları" },
      { icon: "🌍", label: "Lokalizasyon & çeviri projeleri" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",   note: "10.000 karakter/ay, sınırlı ses" },
      { plan: "Starter",  price: "$5 / ay",   note: "30.000 karakter/ay" },
      { plan: "Creator",  price: "$22 / ay",  note: "100.000 karakter/ay, ses klonlama" },
      { plan: "Pro",      price: "$99 / ay",  note: "500.000 karakter/ay" },
    ],
    pros: [
      "Sektörün en doğal ve kaliteli TTS sesi",
      "Ses klonlama kapasitesi etkileyici",
      "Türkçe dahil geniş dil desteği",
      "API ile kolay entegrasyon",
      "Geniş hazır ses kütüphanesi",
    ],
    cons: [
      "Ücretsiz planda karakter limiti düşük",
      "Ses klonlama ücretli planlarda",
      "Etik kullanım konusunda dikkat gerektirir",
    ],
    prompts: [
      {
        label: "🎙️ Podcast Anlatımı",
        prompt: "Metin gir → Ses seç: 'Türkçe Erkek - Profesyonel' → Hız: 0.95 → Duraklama: orta → Oluştur → MP3 indir",
        output: `Beklenen Çıktı:
Doğal tonlamayla okunan profesyonel anlatım sesi. Noktalama işaretlerine göre doğal duraklamalar. Podcast intro veya bölüm anlatımı için kullanıma hazır MP3.`,
      },
      {
        label: "📹 Video Seslendirme",
        prompt: "Senaryo metnini yapıştır → Ses: 'Energetic Female' → Hız: 1.05 → Stability: 0.7 → Clarity: 0.8 → Oluştur",
        output: `Beklenen Çıktı:
Enerjik, net ve profesyonel kadın sesi. YouTube veya reklam videosu için uygun. Ses dosyasını video editörüne import edip videonla senkronize et.`,
      },
      {
        label: "🌍 Çok Dilli İçerik",
        prompt: "Türkçe metni İngilizce, Almanca ve İspanyolca'ya çevir (ChatGPT ile) → Her dil için ElevenLabs'ta o dile uygun ses seç → Ayrı ayrı oluştur",
        output: `Beklenen Çıktı:
Aynı içerik 4 farklı dilde, her biri o dile native ses tonuyla üretilmiş. Lokalizasyon projesi için maliyet ve zamandan büyük tasarruf.`,
      },
    ],
    alternativeSlugs: ["murf-ai", "descript", "whisper"],
  },

  // ─────────────────────────────────────────────
  // 15. DESCRIPT
  // ─────────────────────────────────────────────
  descript: {
    longDescTR: `Descript, ses ve video düzenlemeyi kelime işlemci gibi basit bir deneyime indirgeyen yenilikçi bir platformdur. Temel yaklaşımı, ses veya videoyu önce metne dönüştürmek (transkript), ardından metni düzenleyerek sesi veya videoyu değiştirmektir.

Bu yöntem, özellikle podcast yapımcıları ve video içerik üreticileri için devrim niteliğinde kolaylık sağlar. "Uh", "um" gibi dolgu kelimelerini tek tıklamayla silmek, bir cümleyi metinden silerek videodan çıkarmak veya transkriptten istenilen bölümü bulmak artık saniyeler içinde yapılabilir.

Overdub özelliği, kendi sesinizi klonlayarak yanlış söylenen kelimeleri yazarak düzeltmenize olanak tanır. Studio Sound ile düşük kaliteli ses profesyonel stüdyo kalitesine yükseltilebilir. Podcast ve video içerik üretiminde en çok zaman kazandıran araçlardan biridir.`,
    features: [
      { icon: "📝", title: "Transkript Tabanlı Düzenleme", desc: "Metni düzenleyerek sesi veya videoyu değiştir." },
      { icon: "🗑️", title: "Dolgu Kelime Silme", desc: "'Uh', 'um' gibi dolguları tek tıkla temizle." },
      { icon: "🎙️", title: "Overdub (Ses Klonlama)", desc: "Kendi sesinle yanlış kelimeleri yazarak düzelt." },
      { icon: "🔊", title: "Studio Sound", desc: "Ev kayıt sesini stüdyo kalitesine yükselt." },
      { icon: "✂️", title: "Screen Recording", desc: "Ekran kaydı ve düzenleme platformda tamamlanır." },
      { icon: "👥", title: "Ekip İş Birliği", desc: "Birden fazla kişi aynı projede çalışabilir." },
    ],
    forWhom: [
      { icon: "🎙️", label: "Podcast yapımcıları" },
      { icon: "📹", label: "YouTube içerik üreticileri" },
      { icon: "🎓", label: "Online kurs ve eğitim içerikleri" },
      { icon: "💼", label: "Kurumsal iletişim ekipleri" },
      { icon: "📣", label: "Pazarlama & video prodüksiyon" },
      { icon: "👥", label: "Uzak çalışan medya ekipleri" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "1 saat transkript/ay, filigran" },
      { plan: "Hobbyist", price: "$19 / ay", note: "10 saat/ay, overdub dahil" },
      { plan: "Creator",  price: "$35 / ay", note: "30 saat/ay, tüm özellikler" },
      { plan: "Business", price: "$50 / ay", note: "Ekip ve öncelikli destek" },
    ],
    pros: [
      "Transkript tabanlı düzenleme çok pratik",
      "Overdub ile ses düzeltme benzersiz",
      "Studio Sound ses kalitesini artırıyor",
      "Podcast prodüksiyonunda büyük zaman tasarrufu",
    ],
    cons: [
      "Ücretsiz planda limit çok düşük",
      "Gelişmiş video efektleri sınırlı",
      "Transkript doğruluğu aksan ve gürültüye göre değişiyor",
    ],
    prompts: [
      {
        label: "🎙️ Podcast Düzenleme",
        prompt: "Ses dosyasını yükle → Transkript oluştur → 'Remove filler words' → Transkriptten konudan kopuk bölümleri seç ve sil → Export",
        output: `Beklenen Sonuç:
60 dakikalık ham podcast kaydı 45 dakikaya düşürüldü. 'Eee', 'yani', 'işte' gibi dolgu kelimeleri temizlendi. Transkript senkronize bir şekilde düzenlendi.`,
      },
      {
        label: "🔊 Ses Kalitesi İyileştirme",
        prompt: "Audio dosyasını import et → Effects → Studio Sound → Level: High → Preview → Apply → Export",
        output: `Beklenen Sonuç:
Ev ortamında kaydedilen ses, stüdyo kalitesine yükseltildi. Arka plan gürültüsü giderildi, ses netleşti ve dengeli hale geldi.`,
      },
      {
        label: "📝 Overdub ile Düzeltme",
        prompt: "Transkriptte yanlış söylenen kelimeyi seç → Overdub → Doğru kelimeyi yaz → Sesin klonuyla otomatik değiştirilir",
        output: `Beklenen Sonuç:
'2024' yerine yanlışlıkla '2025' denildi. Transkriptte değiştir, overdub özelliği sesin klonuyla bölümü yeniden üretiyor. Kayıt yapmaya gerek kalmadı.`,
      },
    ],
    alternativeSlugs: ["elevenlabs", "veed", "whisper"],
  },

  // ─────────────────────────────────────────────
  // 16. WHISPER
  // ─────────────────────────────────────────────
  whisper: {
    longDescTR: `Whisper, OpenAI tarafından geliştirilen ve açık kaynak olarak yayımlanan konuşmayı metne çevirme (speech-to-text) modelidir. 680.000 saatlik çok dilli ses verisiyle eğitilmiş olan model, transkripsiyon doğruluğu açısından sektörün en güçlü araçlarından biri konumundadır.

Türkçe dahil 99 dili destekleyen Whisper, özellikle zorlu koşullarda (arka plan gürültüsü, aksan, hızlı konuşma) dahi yüksek doğruluk oranı sergilemektedir. Açık kaynak yapısı sayesinde tamamen ücretsiz, yerel ortamda çalıştırılabilir.

Toplantı notları, röportaj transkriptleri, video altyazısı üretimi ve çok dilli içerik işleme gibi alanlarda yaygın olarak kullanılır. Teknik kullanıcılar için Python ile doğrudan entegrasyon sağlanabilirken, kullanıcı dostu arayüzler sunan üçüncü taraf uygulamalar aracılığıyla teknik bilgi olmadan da kullanmak mümkündür.`,
    features: [
      { icon: "🎯", title: "Yüksek Doğruluk", desc: "Gürültülü ortam ve aksanlı konuşmalarda dahi güçlü transkripsiyon." },
      { icon: "🌍", title: "99 Dil Desteği", desc: "Türkçe dahil geniş dil yelpazesinde transkripsiyon ve çeviri." },
      { icon: "🔓", title: "Açık Kaynak & Ücretsiz", desc: "Yerel makinede tamamen ücretsiz çalıştırılabilir." },
      { icon: "📁", title: "Farklı Format Desteği", desc: "MP3, MP4, WAV, M4A gibi ses formatlarını işler." },
      { icon: "🔗", title: "API & Python Entegrasyonu", desc: "Uygulamalara ve iş akışlarına kolayca entegre edilir." },
      { icon: "📝", title: "Altyazı Çıktısı", desc: "SRT ve VTT formatında zaman damgalı altyazı dosyası üretir." },
    ],
    forWhom: [
      { icon: "💻", label: "Geliştiriciler & teknik kullanıcılar" },
      { icon: "🎙️", label: "Podcast & röportaj yapımcıları" },
      { icon: "🏢", label: "Toplantı notları tutan ekipler" },
      { icon: "📹", label: "Video içerik üreticileri" },
      { icon: "🔬", label: "Araştırmacılar & akademisyenler" },
      { icon: "🌍", label: "Çok dilli proje sahipleri" },
    ],
    pricing: [
      { plan: "Açık Kaynak", price: "Ücretsiz", note: "Kendi sunucunda sınırsız" },
      { plan: "OpenAI API", price: "$0.006/dk", note: "Bulut tabanlı, ölçeklenebilir" },
      { plan: "Üçüncü Taraf (Uydu vb.)", price: "Değişken", note: "Kullanıcı dostu arayüzler" },
      { plan: "Enterprise", price: "Özel",    note: "Yüksek hacim ve destek" },
    ],
    pros: [
      "Açık kaynak ve tamamen ücretsiz yerel kullanım",
      "99 dilde yüksek doğruluk",
      "Gürültülü ortamlarda güçlü",
      "SRT altyazı çıktısı",
      "API ile entegrasyon kolaylığı",
    ],
    cons: [
      "Doğrudan kullanım teknik bilgi gerektirir",
      "Gerçek zamanlı (real-time) transkripsiyon sınırlı",
      "GUI yok — üçüncü taraf araç gerekebilir",
    ],
    prompts: [
      {
        label: "🐍 Python ile Temel Kullanım",
        prompt: `import whisper
model = whisper.load_model("medium")
result = model.transcribe("toplanti.mp3", language="tr")
print(result["text"])`,
        output: `Beklenen Çıktı:
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
        output: `Beklenen Çıktı (video.srt):
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
        output: `Beklenen Çıktı:
"Hello, today we are examining artificial intelligence tools. Our first tool is OpenAI's Whisper model..."

Not: translate task her dili İngilizce'ye çevirir.`,
      },
    ],
    alternativeSlugs: ["descript", "elevenlabs", "murf-ai"],
  },

  // ─────────────────────────────────────────────
  // 17. PERPLEXITY
  // ─────────────────────────────────────────────
  perplexity: {
    longDescTR: `Perplexity AI, geleneksel arama motorlarının link listesi döndüren yapısına alternatif olarak, kaynaklı özet yanıtlar sunan yapay zekâ destekli bir araştırma asistanıdır. Soruları yanıtlarken kullandığı kaynakları doğrudan alıntılaması, bilgi doğruluğunu takip etmeyi kolaylaştırır.

Platformun en önemli özelliği, gerçek zamanlı web erişimiyle güncel bilgilere ulaşabilmesidir. Güncel haberler, akademik araştırmalar, teknik konular ve hızlı konu özetleme gibi durumlarda ChatGPT veya Claude'a kıyasla önemli avantaj sağlar.

Pro planında Claude, GPT-4o ve kendi modellerini seçebilme imkânı sunan çoklu model desteği de bulunur. Araştırmacılar, gazeteciler, öğrenciler ve bilgi yoğun çalışan herkes için güçlü bir günlük araç olmaya devam etmektedir.`,
    features: [
      { icon: "🔍", title: "Kaynaklı Yanıtlar", desc: "Her bilgiyi kaynak alıntılarıyla destekler, doğrulama kolaylaşır." },
      { icon: "🌐", title: "Gerçek Zamanlı Web Erişimi", desc: "Güncel haberlere ve web içeriklerine anlık erişim." },
      { icon: "🤖", title: "Çoklu Model Desteği", desc: "Pro'da GPT-4o, Claude gibi modelleri seçebilirsin." },
      { icon: "📚", title: "Akademik Mod", desc: "Akademik kaynaklara odaklı araştırma modu." },
      { icon: "📁", title: "Dosya Yükleme", desc: "PDF veya belge yükleyerek içeriğe özel sorular sorabilirsin." },
      { icon: "🔗", title: "Kaynak Keşfi", desc: "İlgili kaynakları ve derinlemesine okuma önerilerini listeler." },
    ],
    forWhom: [
      { icon: "🔬", label: "Araştırmacılar & akademisyenler" },
      { icon: "📰", label: "Gazeteciler & editörler" },
      { icon: "🎓", label: "Öğrenciler" },
      { icon: "💼", label: "Strateji ve analiz uzmanları" },
      { icon: "💻", label: "Geliştiriciler (teknik araştırma)" },
      { icon: "📈", label: "Yatırımcılar & iş analistleri" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "5 Pro araması/gün" },
      { plan: "Pro",      price: "$20 / ay", note: "Sınırsız Pro araması, çoklu model" },
      { plan: "Team",     price: "$40 / ay", note: "Ekip yönetimi ve paylaşımı" },
      { plan: "Enterprise", price: "Özel",  note: "Kurumsal güvenlik ve destek" },
    ],
    pros: [
      "Kaynaklı ve doğrulanabilir yanıtlar",
      "Gerçek zamanlı web erişimi",
      "Akademik araştırma için güçlü",
      "Çoklu model desteği (Pro)",
      "Hızlı ve öz yanıtlar",
    ],
    cons: [
      "Uzun ve yaratıcı metin üretiminde sınırlı",
      "Ücretsiz planda günlük Pro araması limiti",
      "ChatGPT kadar çok yönlü değil",
    ],
    prompts: [
      {
        label: "🔍 Güncel Araştırma",
        prompt: "Türkiye'deki yapay zeka yatırımları 2025-2026 döneminde nasıl değişti? En güncel verileri kaynaklarıyla getir.",
        output: `Beklenen Çıktı:
[Kaynak 1: TechCrunch, 2025] Türkiye'de AI startuplarına yapılan yatırımlar 2025'te %45 artışla 320 milyon dolara ulaştı.
[Kaynak 2: Bloomberg, 2026] Yerli AI şirketleri yurt dışı fon çekme konusunda rekor kırdı...

Her cümle kaynakla eşleştirilir, doğrulama çok kolay.`,
      },
      {
        label: "📚 Akademik Özet",
        prompt: "Büyük dil modellerinde 'hallucination' (halüsinasyon) sorununu açıkla. Son 2 yıldaki araştırmaları özetle. [Academic kaynaklar tercihli]",
        output: `Beklenen Çıktı:
Halüsinasyon, LLM'lerin gerçek olmayan ancak mantıklı görünen bilgi üretmesidir.
[arXiv, 2024] Araştırmacılar RAG (Retrieval-Augmented Generation) yöntemiyle halüsinasyon oranını %40 azalttı.
[Nature MI, 2025] Chain-of-thought prompting ile doğruluk %23 artış gösterdi...`,
      },
      {
        label: "💼 Pazar Analizi",
        prompt: "ChatGPT'nin rakipleri kimler? 2026'da AI asistan pazar paylarını ve öne çıkan gelişmeleri kaynaklı özetle.",
        output: `Beklenen Çıktı:
[Statista, 2026] ChatGPT %45, Google Gemini %28, Claude %15 pazar payıyla öne çıkıyor.
[TechRadar, 2026] Gemini'nin Google Workspace entegrasyonu kurumsal segmentte hızlı büyüme sağladı...`,
      },
    ],
    alternativeSlugs: ["chatgpt", "claude", "google-gemini"],
  },

  // ─────────────────────────────────────────────
  // 18. NOTION AI
  // ─────────────────────────────────────────────
  "notion-ai": {
    longDescTR: `Notion AI, milyonlarca kullanıcının kullandığı Notion not alma ve proje yönetimi platformuna entegre edilmiş yapay zekâ asistanıdır. Harici bir araç kullanmak yerine, zaten çalıştığın alanda doğrudan AI desteği alman anlamına gelir.

Platformun gücü, mevcut Notion içeriklerinizle bağlantılı çalışabilmesinden gelir. Bir toplantı notunu sayfanın içinde özetleyebilir, bir proje belgesini doğrudan düzenleyebilir, yapılacaklar listesini genişletebilir veya boş sayfadan içerik üretebilirsin — hepsi aynı arayüzde.

Notion AI, tam teşekküllü bir yazı asistanı olmak yerine mevcut iş akışlarını hızlandıran bir yardımcı olarak konumlandırılmıştır. Özellikle Notion'ı aktif kullanan bireyler ve ekipler için değer teklifini anında görmek mümkündür.`,
    features: [
      { icon: "🔗", title: "Notion İçi Entegrasyon", desc: "Mevcut Notion sayfalarında doğrudan AI asistanı olarak çalışır." },
      { icon: "✍️", title: "İçerik Üretimi", desc: "Boş sayfadan blog, rapor veya içerik planı oluşturur." },
      { icon: "📝", title: "Özetleme", desc: "Uzun sayfaları veya toplantı notlarını kısaca özetler." },
      { icon: "✏️", title: "Yazı İyileştirme", desc: "Ton düzenleme, dilbilgisi düzeltme ve yeniden yazma." },
      { icon: "📋", title: "Yapılacaklar Listesi", desc: "İçerikten otomatik aksiyon maddeleri çıkarır." },
      { icon: "🌍", title: "Çeviri", desc: "İçerikleri farklı dillere doğrudan çevirir." },
    ],
    forWhom: [
      { icon: "📋", label: "Aktif Notion kullanıcıları" },
      { icon: "🏢", label: "Proje yöneticileri & ekipler" },
      { icon: "✍️", label: "İçerik ve belge üretenler" },
      { icon: "🎓", label: "Öğrenci & akademisyenler" },
      { icon: "💼", label: "Uzak çalışan profesyoneller" },
      { icon: "🚀", label: "Startup ekipleri" },
    ],
    pricing: [
      { plan: "Notion Ücretsiz", price: "$0 / ay",  note: "AI özelliği sınırlı" },
      { plan: "AI Eklenti",      price: "$10 / ay", note: "Mevcut plana eklenir" },
      { plan: "Plus + AI",       price: "$18 / ay", note: "Notion Plus dahil" },
      { plan: "Business + AI",   price: "$25 / ay", note: "Ekip ve yönetici özellikleri" },
    ],
    pros: [
      "Mevcut Notion iş akışına sorunsuz entegrasyon",
      "Ekip içi işbirliğiyle güçlü",
      "Notion sayfası içeriğiyle bağlamsal çalışma",
      "Özetleme ve düzenleme görevlerinde çok pratik",
    ],
    cons: [
      "Notion kullanmayanlara değer sunmuyor",
      "Standalone AI araç olarak yetersiz kalıyor",
      "Aylık ek ücret gerektiriyor",
      "ChatGPT kadar derine gitmiyor",
    ],
    prompts: [
      {
        label: "📝 Toplantı Özeti",
        prompt: "Toplantı notlarını Notion'a yap → Sayfayı seç → AI → 'Bu sayfayı 5 maddede özetle ve aksiyon adımlarını çıkar'",
        output: `Beklenen Çıktı:
Özet:
• Q3 hedefleri %87 tamamlandı, eksik kalan: SEO kampanyası
• Yeni müşteri onboardingi için süreç güncellenmesi gerekiyor
• Bütçe revizyonu: Tasarım ekibine +2 freelancer

Aksiyon Adımları:
☐ Ahmet: SEO audit raporunu 15 Mart'a kadar teslim
☐ Selin: Onboarding checklist güncelle`,
      },
      {
        label: "✍️ Blog Taslağı",
        prompt: "Boş Notion sayfası → AI → 'Yapay zeka araçları ve üretkenlik' konusunda 800 kelimelik blog yazısı yaz. Ton: samimi ve bilgilendirici.',",
        output: `Beklenen Çıktı:
# Yapay Zeka Araçları Üretkenliğinizi Nasıl Değiştirir?

2026 yılında yapay zeka araçları artık lüks değil, zorunluluk haline geldi. Her gün milyonlarca profesyonel ChatGPT, Notion AI ve Perplexity gibi araçlarla...

[Notion içinde doğrudan düzenlenebilir format]`,
      },
      {
        label: "🌍 İçerik Çevirisi",
        prompt: "Türkçe sayfa → AI → 'Bu içeriği İngilizce'ye çevir, profesyonel ton kullan'",
        output: `Beklenen Çıktı:
Türkçe içerik aynı Notion sayfasında veya yeni blokta İngilizce'ye çevrilir. Format korunur, başlıklar ve maddeler yerinde kalır.`,
      },
    ],
    alternativeSlugs: ["chatgpt", "perplexity", "claude"],
  },

  // ─────────────────────────────────────────────
  // 19. GRAMMARLY
  // ─────────────────────────────────────────────
  grammarly: {
    longDescTR: `Grammarly, 30 milyondan fazla günlük aktif kullanıcıyla dünyanın en yaygın kullanılan yazı asistanı platformlarından biridir. Dilbilgisi ve yazım denetiminin ötesine geçerek ton analizi, netlik önerileri, intihal tespiti ve AI destekli yeniden yazma özellikleri sunar.

Platformun en güçlü yönü, tarayıcı uzantısı, masaüstü uygulaması ve Microsoft Office eklentisi aracılığıyla neredeyse her yazı ortamında çalışabilmesidir. Gmail, Slack, Google Docs, Word ve sosyal medya platformlarında yazdığın her şeyi gerçek zamanlı olarak denetler.

İngilizce yazı konusunda eşsiz derinliğe sahip olan Grammarly, profesyonel İngilizce iletişim gerektiren herkes için vazgeçilmez bir araçtır. Grammarly Business ile ekip genelinde yazı kalitesini ve marka ton tutarlılığını sağlamak da mümkündür.`,
    features: [
      { icon: "✅", title: "Dilbilgisi & Yazım", desc: "Gerçek zamanlı hata tespiti ve düzeltme önerileri." },
      { icon: "🎭", title: "Ton Analizi", desc: "Yazının tonunu (resmi, samimi, sert vs.) analiz eder." },
      { icon: "💡", title: "Netlik Önerileri", desc: "Karmaşık cümleleri sadeleştirmek için öneriler sunar." },
      { icon: "🔄", title: "AI Yeniden Yazma", desc: "Seçili metni farklı ton ve stilde yeniden yazar." },
      { icon: "🔌", title: "Evrensel Entegrasyon", desc: "Gmail, Word, Slack ve 500.000'den fazla uygulamada çalışır." },
      { icon: "📊", title: "Yazı Analizi", desc: "Haftalık yazı özeti ve gelişim raporu sunar." },
    ],
    forWhom: [
      { icon: "💼", label: "Profesyoneller & iş insanları" },
      { icon: "🎓", label: "Öğrenci & akademisyenler" },
      { icon: "✍️", label: "İçerik yazarları & copywriterlar" },
      { icon: "🌍", label: "İngilizce ikinci dil olarak kullananlar" },
      { icon: "📣", label: "Pazarlama ekipleri" },
      { icon: "🏢", label: "Kurumsal iletişim departmanları" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "Temel yazım ve dilbilgisi" },
      { plan: "Premium",  price: "$12 / ay", note: "Ton, netlik, plagiarism" },
      { plan: "Business", price: "$15 / ay", note: "Ekip yönetimi, stil kılavuzu" },
      { plan: "Enterprise", price: "Özel",  note: "SSO, gelişmiş yönetim" },
    ],
    pros: [
      "500.000'den fazla uygulamayla entegrasyon",
      "Ton ve netlik analizi çok değerli",
      "Ücretsiz planda temel ihtiyaçlar karşılanıyor",
      "Haftalık gelişim raporu motive edici",
    ],
    cons: [
      "Ağırlıklı olarak İngilizce odaklı",
      "Türkçe desteği sınırlı",
      "Premium planlar pahalı gelebilir",
      "Bazen fazla agresif düzeltme önerileri",
    ],
    prompts: [
      {
        label: "📧 E-posta Tonu Düzenleme",
        prompt: "Grammarly'yi Gmail'de aç → E-postayı yaz → 'Tone Detector' sonucunu gör → İstersen 'Make it more formal' seç",
        output: `Beklenen Çıktı:
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
    alternativeSlugs: ["quillbot", "chatgpt", "claude"],
  },

  // ─────────────────────────────────────────────
  // 20. QUILLBOT
  // ─────────────────────────────────────────────
  quillbot: {
    longDescTR: `QuillBot, metin yeniden yazma (parafraz), özetleme ve dilbilgisi denetimi konusunda uzmanlaşmış bir yapay zekâ yazı aracıdır. Özellikle akademik yazı, içerik üretimi ve çeşitli amaçlarla mevcut metinleri yeniden ifade etme ihtiyacı olan kullanıcılar arasında yaygın kullanılan bir platformdur.

Parafraz aracının sunduğu 8 farklı mod (Standard, Fluency, Formal, Academic, Simple, Creative, Expand, Shorten), kullanıcıların ihtiyaca göre farklı yeniden yazma stilleri arasından seçim yapmasına olanak tanır. Bu esneklik, QuillBot'u çok yönlü bir yazı asistanına dönüştürür.

Özetleme özelliği, uzun akademik makaleler veya raporları kısa sürede öz haline getirmek için güçlü bir araçtır. Chrome uzantısı sayesinde web'deki herhangi bir metni doğrudan parafraz etmek de mümkündür.`,
    features: [
      { icon: "🔄", title: "8 Parafraz Modu", desc: "Standart, akademik, yaratıcı, kısa, uzun gibi modlar arasından seçim yap." },
      { icon: "📝", title: "Özetleme", desc: "Uzun metinleri madde madde veya paragraf olarak özetler." },
      { icon: "✅", title: "Dilbilgisi Denetimi", desc: "İngilizce dilbilgisi hatalarını tespit eder ve düzeltir." },
      { icon: "🌍", title: "Çeviri", desc: "30'dan fazla dilde çeviri özelliği sunar." },
      { icon: "🔌", title: "Chrome Uzantısı", desc: "Web'deki metinleri doğrudan parafraz etme imkânı." },
      { icon: "🤝", title: "Word & Google Docs", desc: "Microsoft Word ve Google Docs entegrasyonu." },
    ],
    forWhom: [
      { icon: "🎓", label: "Öğrenci & akademisyenler" },
      { icon: "✍️", label: "İçerik yazarları" },
      { icon: "🌍", label: "İngilizce ikinci dil kullananlar" },
      { icon: "📰", label: "Editörler & metin yazarları" },
      { icon: "💼", label: "Profesyonel yazışmalar yapanlar" },
      { icon: "🏪", label: "E-ticaret ürün açıklaması yazanlar" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "125 kelime limit, 3 parafraz modu" },
      { plan: "Premium",  price: "$9.95 / ay", note: "Sınırsız, tüm modlar, plagiarism" },
      { plan: "Premium+", price: "$15.95 / ay", note: "+ AI Humanizer dahil" },
      { plan: "Teams",    price: "$7.50 / ay", note: "Kişi başına, ekip planı" },
    ],
    pros: [
      "8 farklı parafraz modu esneklik sağlıyor",
      "Ücretsiz planda temel kullanım mümkün",
      "Akademik yazı için güçlü",
      "Chrome uzantısı çok pratik",
    ],
    cons: [
      "Ücretsiz planda kelime limiti kısıtlı",
      "Türkçe desteği zayıf",
      "Çok özgün veya yaratıcı içerik üretmek için ideal değil",
    ],
    prompts: [
      {
        label: "🔄 Akademik Parafraz",
        prompt: "Metni yapıştır → Mod: Academic → Paraphrase → Eş anlamlı kelime alternatiflerini manuel ayarla → Kopyala",
        output: `Orijinal: 'AI tools are changing how people work and communicate.'
Academic Mod: 'Artificial intelligence applications are fundamentally transforming contemporary professional workflows and interpersonal communication paradigms.'

İpucu: Sarı vurgulanan kelimelere tıklayarak alternatifleri görebilirsin.`,
      },
      {
        label: "📝 Makale Özeti",
        prompt: "Summarizer'ı aç → Makale metnini yapıştır (max 6.000 kelime) → Anahtar cümleler modu → Özetle",
        output: `Beklenen Çıktı (madde maddeli özet):
• Yapay zeka sektörüne 2025'te küresel yatırım 150 milyar dolara ulaştı
• Sağlık ve eğitim sektörü en hızlı büyüyen AI uygulama alanları
• Düzenleyici çerçeveler hâlâ teknolojinin gerisinde
• İş gücü dönüşümü beklentilerin üzerinde gerçekleşiyor`,
      },
      {
        label: "✏️ Yeniden Yazma Modları",
        prompt: "Aynı cümleyi 3 farklı modda dene: Standard → Formal → Creative",
        output: `Standard: 'AI tools help people work more efficiently.'
Formal: 'Artificial intelligence solutions facilitate enhanced operational efficiency among professionals.'
Creative: 'In the age of intelligent machines, productivity finds its wings through AI-powered companions.'`,
      },
    ],
    alternativeSlugs: ["grammarly", "chatgpt", "claude"],
  },

  // ─────────────────────────────────────────────
  // 21. JASPER
  // ─────────────────────────────────────────────
  jasper: {
    longDescTR: `Jasper, pazarlama ve reklam ekipleri için özelleştirilmiş kurumsal düzeyde bir AI içerik üretim platformudur. Genel amaçlı AI araçlarından farklı olarak, marka sesi tutarlılığı, çok kanallı içerik üretimi ve pazarlama iş akışları üzerine odaklanır.

Brand Voice özelliği, şirketinizin ton ve dil rehberini sisteme öğretmenize olanak tanır; böylece tüm içerikler marka kimliğinize uygun şekilde üretilir. Bu özellik, büyük ekipler ve birden fazla içerik üreticisinin olduğu organizasyonlar için kritik değer taşır.

Landing page metinleri, e-posta kampanyaları, sosyal medya içerikleri, ürün açıklamaları ve SEO blog yazıları gibi çeşitli pazarlama formatları için hazır şablonlar ve iş akışları sunar. Yüksek hacimli içerik üretimi gerektiren pazarlama ekipleri için ciddi verimlilik artışı sağlar.`,
    features: [
      { icon: "🎯", title: "Brand Voice", desc: "Marka sesini sisteme öğret, tüm içerikler otomatik uyum sağlasın." },
      { icon: "📣", title: "Pazarlama Şablonları", desc: "100'den fazla pazarlama formatı için hazır şablon." },
      { icon: "🔍", title: "SEO Modu", desc: "Surfer SEO entegrasyonuyla SEO optimize içerik üretimi." },
      { icon: "👥", title: "Ekip İş Birliği", desc: "Çoklu kullanıcı, içerik onay akışları ve yönetim paneli." },
      { icon: "🌐", title: "Çok Dilli İçerik", desc: "30'dan fazla dilde içerik üretimi." },
      { icon: "🤖", title: "Jasper Chat", desc: "ChatGPT benzeri sohbet arayüzüyle içerik üretimi." },
    ],
    forWhom: [
      { icon: "📣", label: "Pazarlama ekipleri & direktörler" },
      { icon: "✍️", label: "Copywriter & içerik yöneticileri" },
      { icon: "🏢", label: "Büyük ve orta ölçekli şirketler" },
      { icon: "🛍️", label: "E-ticaret & DTC markalar" },
      { icon: "🏭", label: "Ajanslar (çok müşteri yönetimi)" },
      { icon: "📊", label: "Büyüme odaklı startup'lar" },
    ],
    pricing: [
      { plan: "Creator",  price: "$39 / ay",  note: "1 marka sesi, 1 kullanıcı" },
      { plan: "Pro",      price: "$59 / ay",  note: "3 marka sesi, 5 kullanıcı" },
      { plan: "Business", price: "Özel",      note: "Sınırsız marka sesi, özel entegrasyon" },
      { plan: "API",      price: "Kullanım başına", note: "Geliştiriciler için" },
    ],
    pros: [
      "Marka sesi tutarlılığı benzersiz",
      "Pazarlama odaklı şablonlar çok zengin",
      "Surfer SEO entegrasyonu güçlü",
      "Ekip yönetimi özellikleri",
    ],
    cons: [
      "ChatGPT'ye göre oldukça pahalı",
      "Küçük işletmeler için maliyet yüksek",
      "Genel AI görevlerinde ChatGPT daha esnek",
    ],
    prompts: [
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
    alternativeSlugs: ["chatgpt", "quillbot", "grammarly"],
  },

  // ─────────────────────────────────────────────
  // 22. GITHUB COPILOT
  // ─────────────────────────────────────────────
  copilot: {
    longDescTR: `GitHub Copilot, Microsoft ve OpenAI ortaklığıyla geliştirilen ve yazılım geliştiricilerin IDE içinde kullandığı yapay zekâ destekli kod asistanıdır. GitHub'daki milyonlarca kod deposu üzerinde eğitilen model, bağlama uygun kod tamamlama, fonksiyon önerileri ve tam dosya yazımı konusunda güçlü performans sergiler.

VS Code, JetBrains, Vim ve diğer popüler IDE'lerle sorunsuz entegrasyon sağlayan Copilot, yazarken gerçek zamanlı olarak satır veya blok bazında kod önerileri sunar. Prototipleme hızını, yeni dil veya kütüphane öğrenme eğrisini ve tekrar eden kod yazma sürecini önemli ölçüde kısaltır.

GitHub Copilot Chat ile IDE içinden doğal dilde soru sorarak kod açıklama, hata bulma ve refactoring önerileri alınabilir. Özellikle büyük kod tabanlarında çalışan ekipler için geliştirici verimliliğini artıran kritik bir araçtır.`,
    features: [
      { icon: "💡", title: "Gerçek Zamanlı Kod Tamamlama", desc: "Yazarken satır ve blok bazında bağlama uygun öneriler sunar." },
      { icon: "💬", title: "Copilot Chat", desc: "IDE içinde doğal dilde soru sor, açıklama ve refactoring al." },
      { icon: "🔌", title: "Geniş IDE Desteği", desc: "VS Code, JetBrains, Neovim ve daha fazlasıyla entegrasyon." },
      { icon: "🔍", title: "Hata Analizi", desc: "Kodu analiz ederek olası hataları ve iyileştirmeleri önerir." },
      { icon: "📝", title: "Test Üretimi", desc: "Kodun için otomatik birim testleri oluşturur." },
      { icon: "🌐", title: "Çoklu Dil Desteği", desc: "Python, JavaScript, TypeScript, Go, Rust ve daha fazlası." },
    ],
    forWhom: [
      { icon: "💻", label: "Yazılım geliştiriciler" },
      { icon: "🔬", label: "Backend & frontend mühendisler" },
      { icon: "🚀", label: "Hızlı prototipleme yapanlar" },
      { icon: "🎓", label: "Programlamayı öğrenenler" },
      { icon: "🏢", label: "Yazılım geliştirme ekipleri" },
      { icon: "🔧", label: "DevOps & SRE mühendisleri" },
    ],
    pricing: [
      { plan: "Individual", price: "$10 / ay",  note: "Bireysel geliştirici" },
      { plan: "Business",   price: "$19 / ay",  note: "Ekip yönetimi, politika kontrolü" },
      { plan: "Enterprise", price: "$39 / ay",  note: "Özel model, güvenlik" },
      { plan: "Ücretsiz",   price: "$0",        note: "Öğrenci & açık kaynak projeler" },
    ],
    pros: [
      "Gerçek zamanlı kod tamamlama çok güçlü",
      "GitHub ekosistemiyle derin entegrasyon",
      "Test üretimi zaman kazandırıyor",
      "Geniş programlama dili desteği",
      "Öğrencilere ücretsiz",
    ],
    cons: [
      "Zaman zaman hatalı veya eski kod önerebilir",
      "Ücretli — küçük projeler için maliyetli",
      "Güvenlik açısından üretilen kodu doğrulama gerekir",
    ],
    prompts: [
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
    alternativeSlugs: ["cursor", "replit", "chatgpt"],
  },

  // ─────────────────────────────────────────────
  // 23. CURSOR
  // ─────────────────────────────────────────────
  cursor: {
    longDescTR: `Cursor, yapay zekânın tam olarak kod editörüne entegre edildiği modern bir geliştirme ortamıdır. VS Code çatalı olarak geliştirilen Cursor, tüm VS Code uzantılarını ve ayarlarını desteklerken üzerine güçlü AI katmanı ekler.

Cursor'ın en dikkat çekici özelliği, tüm kod tabanını anlayarak çalışabilmesidir. Tek bir dosyayla değil, projenin bütününüyle bağlam kurarak çok dosyalı değişiklikler önerebilir, refactoring yapabilir ve hataların kök nedenini bulabilir. Bu özellik, GitHub Copilot'a kıyasla önemli bir ayrışma noktasıdır.

Composer modu ile doğal dilde verdiğin talimatları otomatik olarak çoklu dosyada uygulayan Cursor, "AI first" geliştirme yaklaşımının en güçlü temsilcilerinden biridir. 2024–2025 döneminde geliştirici topluluğunda hızla benimsendi.`,
    features: [
      { icon: "🗂️", title: "Kod Tabanı Anlama", desc: "Tüm projeyi bağlam olarak kullanarak çok dosyalı değişiklikler yapar." },
      { icon: "🎼", title: "Composer Modu", desc: "Doğal dilde talimatla otomatik çoklu dosya düzenlemesi." },
      { icon: "💬", title: "Chat & Inline Edit", desc: "Dosya içinde veya chat panelinde kod üretimi ve açıklama." },
      { icon: "🔌", title: "VS Code Uyumluluğu", desc: "Tüm VS Code uzantıları ve ayarlarıyla tam uyumlu." },
      { icon: "🔍", title: "Hata Ayıklama", desc: "Kodu analiz ederek hataları tespit eder ve düzeltme önerir." },
      { icon: "🤖", title: "Çoklu Model", desc: "Claude, GPT-4o ve Cursor'ın kendi modeli arasında seçim." },
    ],
    forWhom: [
      { icon: "💻", label: "Full-stack geliştiriciler" },
      { icon: "🚀", label: "Startup teknik kurucular" },
      { icon: "🔧", label: "Büyük kod tabanı yönetenler" },
      { icon: "🎓", label: "Programlamayı öğrenenler" },
      { icon: "🏢", label: "Yazılım geliştirme ekipleri" },
      { icon: "🔬", label: "Araştırmacı geliştiriciler" },
    ],
    pricing: [
      { plan: "Hobby",    price: "$0 / ay",   note: "2.000 tamamlama, 50 yavaş istek" },
      { plan: "Pro",      price: "$20 / ay",  note: "Sınırsız tamamlama, 500 hızlı istek" },
      { plan: "Business", price: "$40 / ay",  note: "Ekip yönetimi, SOC2" },
      { plan: "Enterprise", price: "Özel",   note: "Özel deployment" },
    ],
    pros: [
      "Kod tabanı bütününü anlama kapasitesi güçlü",
      "Composer ile çok dosyalı otomatik düzenleme",
      "VS Code uyumluluğu geçişi kolaylaştırıyor",
      "Çoklu model seçeneği",
    ],
    cons: [
      "Ücretsiz planda limit düşük",
      "Büyük projelerde yavaşlayabiliyor",
      "Bazı durumlarda öneriler doğrulama gerektirir",
    ],
    prompts: [
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
    alternativeSlugs: ["copilot", "replit", "chatgpt"],
  },

  // ─────────────────────────────────────────────
  // 24. REPLIT
  // ─────────────────────────────────────────────
  replit: {
    longDescTR: `Replit, kurulum gerektirmeden tarayıcı üzerinden kod yazıp çalıştırmaya imkân veren bulut tabanlı geliştirme ortamıdır. 50'den fazla programlama dilini destekleyen platform, özellikle hızlı prototipleme, öğrenme ve paylaşılabilir projeler için idealdir.

Replit Agent özelliğiyle doğal dilde verilen talimatlara göre tam proje oluşturma, bağımlılıkları kurma ve uygulamayı deploy etme işlemleri otomatik olarak gerçekleştirilebilir. Bu özellik, kod yazmayı bilmeyen veya az bilen kullanıcıları bile uygulama sahibi yapma potansiyeline sahiptir.

Anlık çalışan ortam, gerçek zamanlı iş birliği ve kolayca paylaşılabilir link özelliği, özellikle eğitim ortamları, hackathon'lar ve hızlı demo ihtiyaçları için Replit'i cazip kılar.`,
    features: [
      { icon: "🌐", title: "Tarayıcıdan Çalıştır", desc: "Kurulum yok, anında çalışan geliştirme ortamı." },
      { icon: "🤖", title: "Replit Agent", desc: "Doğal dil talimatıyla proje oluştur ve deploy et." },
      { icon: "50+", title: "Dil Desteği", desc: "Python, JavaScript, Rust, Go ve 50+ dil." },
      { icon: "👥", title: "Gerçek Zamanlı İş Birliği", desc: "Google Docs gibi aynı anda birlikte kod yazma." },
      { icon: "🚀", title: "Anında Deploy", desc: "Projeyi tek tıkla canlıya al, link paylaş." },
      { icon: "🎓", title: "Eğitim Araçları", desc: "Öğretmen-öğrenci iş akışları için özel özellikler." },
    ],
    forWhom: [
      { icon: "🎓", label: "Programlamayı öğrenenler" },
      { icon: "👨‍🏫", label: "Öğretmenler & eğitimciler" },
      { icon: "⚡", label: "Hızlı prototipleme yapanlar" },
      { icon: "🏆", label: "Hackathon & yarışma katılımcıları" },
      { icon: "💼", label: "Freelancerlar & girişimciler" },
      { icon: "🔬", label: "Data science & ML denemeleri" },
    ],
    pricing: [
      { plan: "Starter", price: "$0 / ay",   note: "Temel özellikler, herkese açık projeler" },
      { plan: "Core",    price: "$20 / ay",  note: "Daha fazla güç, özel projeler" },
      { plan: "Teams",   price: "$40 / ay",  note: "Ekip çalışması" },
      { plan: "Cycles",  price: "Kullanım başına", note: "Agent ve AI özellikleri için" },
    ],
    pros: [
      "Sıfır kurulum, anında başla",
      "Gerçek zamanlı iş birliği harika",
      "Replit Agent ile sihir gibi prototip",
      "50+ dil ve framework desteği",
      "Paylaşım ve demo çok kolay",
    ],
    cons: [
      "Karmaşık prodüksiyon uygulamaları için yetersiz",
      "Ücretsiz planda yavaş performans",
      "Özel geliştirme ortamına kıyasla sınırlı özelleştirme",
    ],
    prompts: [
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
    alternativeSlugs: ["cursor", "copilot", "chatgpt"],
  },

  // ─────────────────────────────────────────────
  // 25. CANVA
  // ─────────────────────────────────────────────
  canva: {
    longDescTR: `Canva, grafik tasarım bilgisi gerektirmeden profesyonel görsel içerikler oluşturmayı mümkün kılan şablon tabanlı tasarım platformudur. 150 milyondan fazla aktif kullanıcısıyla dünyanın en yaygın kullanılan tasarım araçlarından biridir.

Sosyal medya görselleri, sunumlar, posterler, logolar, infografikler, PDF'ler ve hatta video içerikleri dahil geniş bir format yelpazesinde içerik üretimi yapılabilir. AI ile zenginleştirilen platform, arka plan kaldırma, metin efektleri, görsel üretimi ve otomatik tasarım önerileri gibi akıllı özellikler ekleyerek güncellenmeye devam etmektedir.

Canva for Teams ile marka kiti, ortak şablonlar ve ekip onay akışları oluşturulabilir. İş dünyasında, eğitimde ve sosyal medyada en hızlı içerik üretim aracı olmayı sürdürmektedir.`,
    features: [
      { icon: "🎨", title: "Sonsuz Şablon", desc: "Milyonlarca hazır şablon ile hızlı başlangıç." },
      { icon: "✂️", title: "Arka Plan Kaldırma", desc: "Tek tıklamayla arka plan kaldırır." },
      { icon: "🤖", title: "Magic Studio (AI)", desc: "AI görsel üretimi, metin efektleri ve tasarım asistanı." },
      { icon: "📹", title: "Video Düzenleme", desc: "Basit video düzenleme ve sosyal içerik hazırlama." },
      { icon: "🏢", title: "Marka Kiti", desc: "Renk, font ve logo tutarlılığı için marka kiti oluşturma." },
      { icon: "👥", title: "Ekip İş Birliği", desc: "Gerçek zamanlı ortak düzenleme ve yorum." },
    ],
    forWhom: [
      { icon: "📣", label: "Sosyal medya yöneticileri" },
      { icon: "🏪", label: "Küçük işletme sahipleri" },
      { icon: "🎓", label: "Öğretmenler & eğitimciler" },
      { icon: "💼", label: "Pazarlama ekipleri" },
      { icon: "✍️", label: "İçerik üreticileri & bloggerlar" },
      { icon: "🚀", label: "Girişimciler & startup'lar" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",   note: "Temel şablonlar ve özellikler" },
      { plan: "Pro",      price: "$15 / ay",  note: "Premium şablonlar, magic studio" },
      { plan: "Teams",    price: "$10 / ay",  note: "Kişi başı, ekip özellikleri" },
      { plan: "Enterprise", price: "Özel",   note: "Kurumsal SSO ve destek" },
    ],
    pros: [
      "Tasarım bilgisi gerektirmiyor",
      "Şablon kütüphanesi inanılmaz zengin",
      "Magic Studio AI özellikleri güçlü",
      "Ekip iş birliği çok pratik",
      "Ücretsiz planda çok şey yapılabiliyor",
    ],
    cons: [
      "Adobe araçları kadar profesyonel kontrol yok",
      "Şablonlar bazen klişe gelebilir",
      "Büyük marka projelerinde sınırlı",
    ],
    prompts: [
      {
        label: "📣 Instagram Görseli",
        prompt: "Yeni Tasarım → Instagram Post (1080x1080) → Magic Studio → 'Yaz temalı, tropikal tonlarda ürün kampanyası görseli' → Generate → Metinleri düzenle",
        output: `Beklenen Çıktı:
Tropikal renkler (sarı, turuncu, yeşil), palmiye yaprakları desenli arka plan, merkezi ürün alanı. Başlık için yer ayrılmış kompozisyon. 
İpucu: Şirket renkleri için marka kitini önce ayarla.`,
      },
      {
        label: "📊 Sunum Hazırlama",
        prompt: "Sunum → Şablon seç → Magic Design → 'AI araçları ve dijital dönüşüm, 10 slayt' → Otomatik içerik oluştur → Düzenle",
        output: `Beklenen Çıktı:
10 slaytlık profesyonel sunum:
• Kapak slaytı (başlık + görsel)
• İçindekiler
• 7 içerik slaytı (veri, grafik, metin dengesi)
• Kapanış CTA slaytı
Tüm slaylar otomatik renk ve font tutarlılığıyla oluşturuldu.`,
      },
      {
        label: "✂️ Arka Plan Kaldırma",
        prompt: "Görsel yükle → Resim Düzenle → Arka Planı Kaldır → Yeni arka plan ekle veya şeffaf olarak indir",
        output: `Beklenen Sonuç:
Ürün fotoğrafı arka plandan ayrıştırıldı. Şeffaf PNG olarak indir veya Canva içinde yeni arka plan ekle. E-ticaret ürün görselleri için çok pratik.`,
      },
    ],
    alternativeSlugs: ["adobe-firefly", "dall-e", "capcut"],
  },

  // ─────────────────────────────────────────────
  // 26. MURF AI
  // ─────────────────────────────────────────────
  "murf-ai": {
    longDescTR: `Murf AI, metni doğal ve profesyonel kalitede sese dönüştürme konusunda uzmanlaşmış bir yapay zekâ seslendirme platformudur. 120'den fazla dil ve aksan seçeneği ile geniş bir ses kütüphanesi sunan Murf, özellikle kurumsal seslendirme, e-öğrenme ve pazarlama içerikleri için tercih edilen bir araçtır.

Platformun öne çıkan özelliği, stüdyo kalitesinde ses üretimini teknik ekipman veya profesyonel seslendirme sanatçısı gerektirmeden sağlamasıdır. Ses tonu, hız, vurgu ve duraksamaları özelleştirme imkânı, doğal bir seslendirme deneyimi sunar.

Türkçe dahil çok sayıda dilde ve farklı ses tonlarında (genç, olgun, erkek, kadın, nötr) üretim yapılabilen Murf, video seslendirmesi için doğrudan video yükleme ve ses-video senkronizasyonu özelliklerini de bünyesinde barındırır.`,
    features: [
      { icon: "🎙️", title: "120+ Dil Desteği", desc: "Türkçe dahil geniş dil ve aksan yelpazesi." },
      { icon: "🎭", title: "Geniş Ses Kütüphanesi", desc: "Farklı yaş, cinsiyet ve ton seçenekleriyle 200'den fazla ses." },
      { icon: "⚙️", title: "Ses Özelleştirme", desc: "Hız, ton, vurgu ve duraksamaları ince ayarla." },
      { icon: "🎬", title: "Video Seslendirme", desc: "Video yükle, ses ekle, senkronizasyon otomatik." },
      { icon: "🔗", title: "API Entegrasyonu", desc: "Uygulamalara entegre edilebilir ses üretimi." },
      { icon: "📁", title: "Dışa Aktarma", desc: "MP3, WAV formatlarında yüksek kaliteli çıktı." },
    ],
    forWhom: [
      { icon: "🎓", label: "E-öğrenme içerik üreticileri" },
      { icon: "📹", label: "Video içerik yapımcıları" },
      { icon: "📣", label: "Pazarlama & reklam ekipleri" },
      { icon: "🏢", label: "Kurumsal iletişim ekipleri" },
      { icon: "🌍", label: "Lokalizasyon projeleri" },
      { icon: "📚", label: "Sesli kitap üreticileri" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "10 dk/ay, sınırlı sesler" },
      { plan: "Basic",    price: "$19 / ay", note: "60 dk/ay, 60 ses" },
      { plan: "Pro",      price: "$26 / ay", note: "160 dk/ay, 120+ ses" },
      { plan: "Enterprise", price: "Özel",  note: "Sınırsız, özel entegrasyon" },
    ],
    pros: [
      "120+ dil ve geniş ses seçenekleri",
      "Video seslendirme entegrasyonu",
      "Kurumsal kalitede profesyonel sesler",
      "Kullanıcı dostu arayüz",
    ],
    cons: [
      "Ücretsiz planda çok kısa limit (10 dk)",
      "ElevenLabs kadar gerçekçi ses klonlama yok",
      "Türkçe ses seçenekleri sınırlı",
    ],
    prompts: [
      {
        label: "🎙️ Tanıtım Videosu Sesi",
        prompt: "Metin gir → Ses: 'Türkçe Kadın - Profesyonel' → Hız: Normal → Vurgu: Yüksek → Önizle → İndir",
        output: `Beklenen Çıktı:
"AI Pusula, en iyi yapay zeka araçlarını keşfetmeniz için tasarlanmış kapsamlı bir rehberdir..." cümlesi doğal tonlamayla, net telaffuzla okunuyor.
MP3 formatında indir, video editörüne import et.`,
      },
      {
        label: "🎬 Video + Ses Senkronizasyonu",
        prompt: "Proje oluştur → Video yükle → Metin senaryoyu yapıştır → Ses seç → Otomatik senkronize et → Dışa aktar",
        output: `Beklenen Sonuç:
Video görüntüsü ve seslendirme otomatik olarak senkronize edildi. Gerekirse manuel zamanlama ayarı yapılabilir. MP4 olarak dışa aktarılabilir.`,
      },
      {
        label: "🌍 Çok Dilli Seslendirme",
        prompt: "Türkçe metni İngilizce'ye çevir → Murf'te 'English US Female' seçin → Oluştur → İki versiyonu karşılaştır",
        output: `Türkçe Versiyon: Profesyonel Türkçe kadın sesi
İngilizce Versiyon: Amerikan aksanlı kadın sesi

İpucu: Aynı proje içinde birden fazla dilde versiyon oluşturup karşılaştırabilirsin.`,
      },
    ],
    alternativeSlugs: ["elevenlabs", "descript", "whisper"],
  },

  // ─────────────────────────────────────────────
  // 27. YANDEX AI
  // ─────────────────────────────────────────────
  "yandex-ai": {
    longDescTR: `Yandex AI, Rusya'nın en büyük teknoloji şirketi Yandex tarafından geliştirilen yapay zekâ asistanıdır. YandexGPT modeline dayanan platform, Kinopoisk, Yandex Music ve Yandex Maps gibi Yandex ekosistemiyle entegrasyon sunar.

Özellikle Rusça ve Türkçe gibi Slav ve Türk dilleri ailesinde güçlü performans sergileyen Yandex AI, bu dillerde içerik üretimi, çeviri ve sohbet konusunda avantaj sağlayabilir. Tamamen ücretsiz sunulan platform, temel metin üretimi ve soru-cevap görevleri için erişilebilir bir alternatif sunar.

Batı kaynaklı AI araçlarına erişimi kısıtlı olan bölgelerde veya Rusça içerikle çalışan kullanıcılar için değer taşıyabilir. Küresel AI araçlarıyla kıyaslandığında özellik seti daha sınırlı olmakla birlikte, ücretsiz ve temel ihtiyaçlara yanıt veren bir seçenek olarak öne çıkar.`,
    features: [
      { icon: "💬", title: "Sohbet Asistanı", desc: "Metin tabanlı soru-cevap ve sohbet desteği." },
      { icon: "✍️", title: "İçerik Üretimi", desc: "Metin yazma, özetleme ve fikir geliştirme." },
      { icon: "🌍", title: "Rusça & Türkçe Desteği", desc: "Özellikle Rusça'da güçlü dil desteği." },
      { icon: "🔗", title: "Yandex Ekosistemi", desc: "Yandex hizmetleriyle entegrasyon imkânı." },
      { icon: "🆓", title: "Ücretsiz Erişim", desc: "Tamamen ücretsiz temel kullanım." },
      { icon: "🔍", title: "Arama Entegrasyonu", desc: "Yandex arama motoru ile birlikte çalışır." },
    ],
    forWhom: [
      { icon: "🌍", label: "Rusça içerik üretenler" },
      { icon: "🔒", label: "Gizlilik odaklı kullanıcılar" },
      { icon: "💰", label: "Ücretsiz alternatif arayanlar" },
      { icon: "🇷🇺", label: "Rusça-Türkçe çeviri yapanlar" },
      { icon: "🏢", label: "Yandex ekosistemi kullanıcıları" },
      { icon: "🎓", label: "Dil öğrenicileri" },
    ],
    pricing: [
      { plan: "Ücretsiz", price: "$0 / ay",  note: "Temel özellikler, kayıt gerektirmez" },
      { plan: "Yandex360", price: "Değişken", note: "Kurumsal Yandex hizmetleri" },
      { plan: "API",       price: "Kullanım başına", note: "Geliştiriciler için" },
      { plan: "Enterprise", price: "Özel",   note: "Kurumsal entegrasyon" },
    ],
    pros: [
      "Tamamen ücretsiz temel kullanım",
      "Rusça'da güçlü dil desteği",
      "Yandex ekosistemiyle entegrasyon",
      "Kayıt gerektirmeden kullanım",
    ],
    cons: [
      "ChatGPT veya Claude'a kıyasla yetenekler sınırlı",
      "Küresel dil desteği daha zayıf",
      "Gelişmiş özellik seti eksik",
      "Çok az İngilizce kaynak ve topluluk",
    ],
    prompts: [
      {
        label: "✍️ Türkçe İçerik Üretimi",
        prompt: "Yapay zeka ve geleceği hakkında kısa bir paragraf yaz. Ton: bilgilendirici ve optimist.",
        output: `Beklenen Çıktı:
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
    alternativeSlugs: ["chatgpt", "claude", "google-gemini"],
  },
};

// ──────────────────────────────────────────────
// Sayfa bileşeni
// ──────────────────────────────────────────────
export default async function ToolDetailTR({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return notFound();

  const theme = themeBySlug(tool.slug);
  const extra: ToolExtra = extras[slug] ?? {
    longDescTR: tool.detailTR,
    features: [],
    forWhom: [],
    pricing: [{ plan: "Detaylar", price: "—", note: "Resmi siteden inceleyin" }],
    pros: [],
    cons: [],
    prompts: [],
    alternativeSlugs: [],
  };
  const alternatives = tools.filter((t) =>
    extra.alternativeSlugs.includes(t.slug)
  );

  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 space-y-10">

          {/* Breadcrumb */}
          <div className="text-sm text-gray-600">
            <Link href="/tr" className="hover:underline">Ana Sayfa</Link>{" "}
            / <span className="text-gray-900 font-medium">{tool.name}</span>
          </div>

          {/* ── 1. HERO ── */}
          <section className={`rounded-[32px] border bg-gradient-to-r p-7 shadow-sm ${theme.bg} ${theme.border}`}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-white/80 border border-black/10 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                  {tool.logo ? (
                    <Image src={tool.logo} alt={tool.name} width={40} height={40} className="object-contain" />
                  ) : (
                    <span className="font-extrabold text-gray-800 text-xl">{tool.name[0]}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{tool.name}</h1>
                  <p className="mt-2 text-gray-800/80 text-lg">{tool.taglineTR}</p>
                  <p className="mt-4 text-gray-800 leading-relaxed max-w-2xl">{tool.detailTR}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800">{tCategory("tr", tool.category)}</span>
                    <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800">{tPricing("tr", tool.pricing)}</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <a href={tool.website} target="_blank" rel="noopener noreferrer"
                  className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition whitespace-nowrap">
                  Resmi siteye git →
                </a>
              </div>
            </div>
          </section>

          {/* ── 2. DETAYLI AÇIKLAMA ── */}
          <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-extrabold text-gray-900">{tool.name} Nedir?</h2>
            <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
              {extra.longDescTR.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* ── 3. ÖZELLİKLER ── */}
          {extra.features.length > 0 && (
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900">Öne Çıkan Özellikler</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {extra.features.map((f, i) => (
                  <div key={i} className="rounded-2xl border border-black/8 bg-gray-50 p-5 hover:shadow-sm transition">
                    <div className="text-2xl mb-2">{f.icon}</div>
                    <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── 4. KİMLER İÇİN ── */}
          {extra.forWhom.length > 0 && (
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900">{tool.name} Kimler İçin İdeal?</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {extra.forWhom.map((fw, i) => (
                  <span key={i} className="flex items-center gap-2 rounded-full border border-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-800">
                    <span>{fw.icon}</span><span>{fw.label}</span>
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* ── 5. FİYATLANDIRMA ── */}
          <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-extrabold text-gray-900">Fiyatlandırma</h2>
            <p className="mt-2 text-gray-500 text-sm">Fiyatlar değişkenlik gösterebilir, güncel bilgi için resmi siteyi kontrol edin.</p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {extra.pricing.map((p, i) => (
                <div key={i} className={`rounded-2xl border p-5 ${i === 1 ? "border-gray-900 bg-gray-900 text-white" : "border-black/10 bg-gray-50"}`}>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${i === 1 ? "text-gray-300" : "text-gray-500"}`}>{p.plan}</div>
                  <div className={`mt-2 text-xl font-extrabold ${i === 1 ? "text-white" : "text-gray-900"}`}>{p.price}</div>
                  <div className={`mt-1 text-sm ${i === 1 ? "text-gray-300" : "text-gray-600"}`}>{p.note}</div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <a href={tool.website} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:underline">
                Tüm planlar için resmi siteye git →
              </a>
            </div>
          </section>

          {/* ── 6. ARTILARI & EKSİLERİ ── */}
          {(extra.pros.length > 0 || extra.cons.length > 0) && (
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900">Artıları & Eksileri</h2>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-emerald-500 text-lg">✓</span> Güçlü Yönler
                  </h3>
                  <ul className="space-y-2">
                    {extra.pros.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-rose-400 text-lg">✗</span> Dikkat Edilmesi Gerekenler
                  </h3>
                  <ul className="space-y-2">
                    {extra.cons.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-rose-400 mt-0.5 shrink-0">✗</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* ── 7. ÖRNEK PROMPTLAR ── */}
          {extra.prompts.length > 0 && (
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900">Örnek Prompt'lar & Beklenen Çıktılar</h2>
              <p className="mt-2 text-gray-500 text-sm">Aşağıdaki hazır prompt'ları kopyalayıp doğrudan kullanabilirsin.</p>
              <div className="mt-6 space-y-6">
                {extra.prompts.map((pr, i) => (
                  <div key={i} className="rounded-2xl border border-black/8 overflow-hidden">
                    <div className="bg-gray-50 border-b border-black/8 px-5 py-3">
                      <span className="font-bold text-sm text-gray-900">{pr.label}</span>
                    </div>
                    <div className="px-5 py-4 bg-gray-900">
                      <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Prompt</div>
                      <p className="text-sm text-gray-100 font-mono leading-relaxed whitespace-pre-wrap">{pr.prompt}</p>
                    </div>
                    <div className="px-5 py-4 bg-white">
                      <div className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider mb-2">Örnek Çıktı</div>
                      <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{pr.output}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── 8. ALTERNATİFLER ── */}
          {alternatives.length > 0 && (
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900">{tool.name} Alternatifleri</h2>
              <p className="mt-2 text-gray-500 text-sm">Benzer ihtiyaçlar için değerlendirebileceğin diğer araçlar.</p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {alternatives.map((alt) => (
                  <Link key={alt.slug} href={`/tr/${alt.slug}`}
                    className="flex items-center gap-3 rounded-2xl border border-black/10 bg-gray-50 p-4 hover:shadow-sm hover:border-black/20 transition group">
                    {alt.logo && (
                      <div className="h-10 w-10 rounded-xl bg-white border border-black/10 flex items-center justify-center overflow-hidden shrink-0">
                        <Image src={alt.logo} alt={alt.name} width={28} height={28} className="object-contain" />
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-sm text-gray-900 group-hover:underline">{alt.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">{alt.taglineTR}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── 9. CTA ── */}
          <section className={`rounded-[32px] border bg-gradient-to-r p-8 shadow-sm text-center ${theme.bg} ${theme.border}`}>
            <h2 className="text-2xl font-extrabold text-gray-900">{tool.name}'i Kullanmaya Başla</h2>
            <p className="mt-2 text-gray-700 max-w-xl mx-auto">
              {tool.pricing === "free"
                ? "Tamamen ücretsiz olan bu aracı hemen deneyebilirsin."
                : tool.pricing === "freemium"
                ? "Ücretsiz planla hemen başlayabilir, ihtiyacına göre yükseltebilirsin."
                : "Resmi siteden planları inceleyip başlayabilirsin."}
            </p>
            <a href={tool.website} target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-gray-900 text-white px-8 py-3 text-sm font-semibold hover:bg-black transition">
              {tool.name} Sitesine Git →
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
