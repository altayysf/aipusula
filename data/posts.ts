export type BlogLang = "tr" | "en";

export type BlogPost = {
  slug: string;
  dateISO: string; // "2026-02-01"
  categoryTR: string;
  categoryEN: string;
  titleTR: string;
  titleEN: string;
  excerptTR: string;
  excerptEN: string;
  contentTR: string[]; // paragraf paragraf
  contentEN: string[];
  cover: string; // public/... -> "/blog/xxx.jpg"
  readingMinutes?: number;
  featured?: boolean;
};

export const posts: BlogPost[] = [
          {
          slug: "en-iyi-ucretsiz-yapay-zeka-araclari-2026",
          dateISO: "2026-02-01",
          categoryTR: "Liste",
          categoryEN: "List",

          titleTR: "2026'da Kullanabileceğiniz En İyi Ücretsiz Yapay Zekâ Araçları",
          titleEN: "Best Free AI Tools You Can Use in 2026",

          excerptTR:
            "Metin yazma, görsel üretme, video oluşturma, kodlama ve üretkenlik için ücretsiz yapay zekâ araçlarının kapsamlı ve güncel listesi.",

          excerptEN:
            "A comprehensive and updated list of free AI tools for writing, image generation, video creation, coding, and productivity.",

          contentTR: [
            "Yapay zekâ artık yalnızca büyük şirketlerin kullandığı karmaşık bir teknoloji değil. Günümüzde herkes ücretsiz yapay zekâ araçları sayesinde içerik üretebiliyor, tasarım yapabiliyor, kod yazabiliyor ve işlerini çok daha hızlı tamamlayabiliyor.",

            "Bu yazıda 2026 yılında ücretsiz olarak kullanabileceğin en iyi yapay zekâ araçlarını tek bir yerde topladım. Araçları kullanım alanlarına göre gruplandırdım ve her biri için kısa açıklamalar ekledim.",

            "Metin ve İçerik Üretimi İçin AI Araçları",

            "- ChatGPT: Blog yazıları, sosyal medya içerikleri, e-postalar ve fikir üretimi için en popüler araçlardan biridir.",
            "- Google Gemini: Araştırma, özet çıkarma ve bilgi tabanlı içerikler için güçlü bir alternatiftir.",
            "- Poe: Birden fazla yapay zekâ modelini tek platformda deneme imkânı sunar.",

            "Görsel Oluşturma İçin AI Araçları",

            "- Bing Image Creator (DALL·E): Metinden görsel üretir.",
            "- Leonardo AI: Oyun ve illüstrasyon tasarımlarında öne çıkar.",
            "- Canva AI: Tasarım bilgisi olmadan profesyonel görseller oluşturmayı sağlar.",

            "Video Üretimi İçin AI Araçları",

            "- Pictory: Metni otomatik olarak videoya dönüştürür.",
            "- CapCut AI: Video düzenleme, altyazı ve efekt işlemleri için idealdir.",

            "Kodlama İçin AI Araçları",

            "- Codeium: Ücretsiz kod tamamlama ve hata düzeltme aracı.",
            "- GitHub Copilot: Sınırlı ücretsiz sürümü ile kod yazmayı hızlandırır.",

            "Üretkenlik ve Günlük İşler",

            "- Notion AI: Not alma, özet çıkarma ve planlama.",
            "- Otter AI: Toplantıları yazıya döker.",

            "Ücretsiz yapay zekâ araçlarını seçerken ücretsiz plan sınırlarını, gizlilik politikasını ve Türkçe destek durumunu mutlaka kontrol etmelisin.",

            "Sonuç olarak bu araçlar, bütçe ayırmadan dijital dünyada üretken olmak isteyen herkes için büyük avantaj sağlar."
          ],

          contentEN: [
            "Artificial intelligence is no longer limited to big tech companies. Today, anyone can create content, design visuals, write code, and automate tasks using free AI tools.",

            "In this article, I compiled the best free AI tools you can use in 2026. Tools are grouped by category with short explanations.",

            "Text & Content Creation Tools",

            "- ChatGPT: Writing blogs, social posts, and emails.",
            "- Google Gemini: Research and summaries.",
            "- Poe: Access multiple AI models in one place.",

            "Image Generation Tools",

            "- Bing Image Creator (DALL·E).",
            "- Leonardo AI.",
            "- Canva AI.",

            "Video Tools",

            "- Pictory.",
            "- CapCut AI.",

            "Coding Tools",

            "- Codeium.",
            "- GitHub Copilot.",

            "Productivity Tools",

            "- Notion AI.",
            "- Otter AI.",

            "Always check free plan limitations and privacy policies before choosing a tool.",

            "These tools help you stay productive without spending money."
          ],

          cover: "/blog/ai-tools-2026.jpg",
          readingMinutes: 3,
          featured: true,
          },

          {
          slug: "chatgpt-alternatifleri-en-iyi-chatbotlar",
          dateISO: "2026-02-01",
          categoryTR: "İnceleme",
          categoryEN: "Review",

          titleTR: "ChatGPT Alternatifleri (2026): En İyi 9 Yapay Zekâ Chatbotu Karşılaştırması",
          titleEN: "ChatGPT Alternatives (2026): 9 Best AI Chatbots Compared",

          excerptTR:
            "Claude, Gemini, Perplexity ve daha fazlası… Hangi yapay zekâ chatbotu hangi iş için daha uygun? Kapsamlı karşılaştırma rehberi.",

          excerptEN:
            "Claude, Gemini, Perplexity, and more… which AI chatbot is best for each use case? A practical comparison guide.",

          contentTR: [
            "ChatGPT günümüzde en popüler yapay zekâ sohbet botlarından biri olsa da, her kullanım senaryosu için en iyi seçenek olmayabilir. Bazı araçlar uzun belgeleri analiz etmede daha başarılıyken, bazıları araştırma yapma veya kod yazma konusunda öne çıkar.",

            "Bu yazıda 2026 yılında kullanabileceğin en iyi ChatGPT alternatiflerini, güçlü ve zayıf yönleriyle birlikte inceliyoruz. Böylece ihtiyacına en uygun chatbotu kolayca seçebilirsin.",

            "1. Claude (Anthropic)",
            "Uzun dokümanları okuma, özetleme ve analiz etme konusunda çok güçlüdür. Akademik çalışmalar ve raporlar için idealdir.",

            "2. Google Gemini",
            "Google tarafından geliştirilen Gemini, arama motoru entegrasyonu sayesinde bilgi odaklı sorularda başarılıdır.",

            "3. Perplexity AI",
            "Cevaplarını kaynak göstererek sunar. Araştırma ve doğrulama gerektiren işler için uygundur.",

            "4. Microsoft Copilot",
            "Word, Excel ve PowerPoint gibi Microsoft araçlarıyla entegre çalışır.",

            "5. Poe",
            "Tek platformda birden fazla yapay zekâ modelini kullanma imkânı sunar.",

            "6. Jasper AI",
            "Pazarlama metinleri ve reklam içerikleri üretmek için tasarlanmıştır.",

            "7. Writesonic",
            "Blog yazıları, ürün açıklamaları ve sosyal medya içerikleri için idealdir.",

            "8. YouChat",
            "Arama motoru destekli sohbet deneyimi sunar.",

            "9. Character AI",
            "Rol yapma, hikâye anlatımı ve eğlence odaklı sohbetler için popülerdir.",

            "ChatGPT alternatifi seçerken şu kriterleri göz önünde bulundurmalısın: çıktı kalitesi, hız, ücretsiz plan sınırları ve Türkçe destek durumu.",

            "Sonuç olarak, tek bir en iyi chatbot yoktur. En iyi seçenek, senin kullanım amacına en uygun olandır."
          ],

          contentEN: [
            "ChatGPT is one of the most popular AI chatbots, but it is not always the best option for every task. Some tools excel at long-document analysis, while others are better for research or coding.",

            "Here are the best ChatGPT alternatives you can use in 2026 and what they are best at.",

            "1. Claude (Anthropic)",
            "Excellent for long document reading and summarization.",

            "2. Google Gemini",
            "Strong at knowledge-based questions and Google ecosystem tasks.",

            "3. Perplexity AI",
            "Provides answers with sources.",

            "4. Microsoft Copilot",
            "Integrated with Microsoft Office apps.",

            "5. Poe",
            "Access multiple AI models in one interface.",

            "6. Jasper AI",
            "Focused on marketing and copywriting.",

            "7. Writesonic",
            "Great for blogs and product descriptions.",

            "8. YouChat",
            "Search-engine-powered chatbot.",

            "9. Character AI",
            "Great for roleplay and creative conversations.",

            "There is no single perfect chatbot. The best choice depends on your workflow and goals."
          ],

          cover: "/blog/chatgpt-alternatives.jpg",
          readingMinutes: 4,
          featured: true,
        },

        {
          slug: "en-iyi-gorsel-olusturucular",
          dateISO: "2026-02-01",
          categoryTR: "Liste",
          categoryEN: "List",

          titleTR: "En İyi Yapay Zekâ Görsel Oluşturucular (2026)",
          titleEN: "Best AI Image Generators (2026)",

          excerptTR:
            "DALL·E’den Midjourney’e: kalite, hız ve stil kontrolü açısından 2026’da öne çıkan en iyi yapay zekâ görsel oluşturma araçları.",

          excerptEN:
            "From DALL·E to Midjourney: the top AI image generators of 2026 for quality, speed, and style control.",

          contentTR: [
            "Yapay zekâ ile görsel üretim, tasarımcılar, içerik üreticileri ve pazarlamacılar için vazgeçilmez hale geldi. Doğru aracı seçmek, hem kaliteyi hem de üretim hızını doğrudan etkiler.",

            "Bu yazıda 2026 yılında kullanabileceğin en iyi yapay zekâ görsel oluşturucuları, güçlü yönleriyle birlikte sıraladım.",

            "1. DALL·E",
            "Metinden yüksek kaliteli ve yaratıcı görseller üretir. Blog kapakları ve sosyal medya görselleri için idealdir.",

            "2. Midjourney",
            "Sanatsal ve sinematik görseller üretmede çok başarılıdır.",

            "3. Leonardo AI",
            "Oyun varlıkları ve konsept tasarımlar için güçlü bir seçenektir.",

            "4. Stable Diffusion",
            "Açık kaynaklı yapısı sayesinde geniş özelleştirme imkânı sunar.",

            "5. Bing Image Creator",
            "Hızlı ve ücretsiz görsel üretimi sağlar.",

            "6. Canva AI",
            "Tasarım bilgisi olmadan profesyonel görseller oluşturmanı sağlar.",

            "Görsel üretimde en iyi sonucu almak için aynı promptu birden fazla araçta denemeni öneririm.",

            "Bonus ipucu: Tutarlı sonuçlar için kendi prompt şablonunu oluştur."
          ],

          contentEN: [
            "AI image generation has become essential for designers, marketers, and content creators. Choosing the right tool impacts both quality and speed.",

            "Here are the best AI image generators you can use in 2026.",

            "1. DALL·E",
            "Great for creative and high-quality images.",

            "2. Midjourney",
            "Excellent for artistic visuals.",

            "3. Leonardo AI",
            "Strong for game assets and concept art.",

            "4. Stable Diffusion",
            "Open-source and highly customizable.",

            "5. Bing Image Creator",
            "Fast and free image generation.",

            "6. Canva AI",
            "Easy-to-use design tool with AI features.",

            "Test the same prompt across multiple tools for best results.",

            "Bonus tip: build a prompt template for consistency."
          ],

          cover: "/blog/best-image-generators.jpg",
          readingMinutes: 5,
          featured: false
        },

        {
          slug: "yapay-zeka-nedir",
          dateISO: "2026-02-01",
          categoryTR: "Rehber",
          categoryEN: "Guide",

          titleTR: "Yapay Zekâ Nedir? Geleceği Şekillendiren Teknolojiyi Basitçe Anlatalım",
          titleEN: "What Is Artificial Intelligence? Let’s Simply Explain the Technology Shaping the Future",

          excerptTR:
            "Yapay zekâ nedir, yapay zekâ nasıl çalışır, yapay zekâ kullanım alanları ve örnekleri hakkında basit anlatım.",

          excerptEN:
            "What is artificial intelligence, how does AI work, AI use cases and examples explained simply.",

          contentTR: [
            "Sabah telefonunun alarmını kapattın. Hava durumuna baktın. Müzik uygulaması sana tam ruh haline uygun bir şarkı önerdi. Google’da bir şey arattın ve saniyeler içinde cevabını aldın.",
            "Tüm bunların arkasında sessizce çalışan bir güç var: Yapay zekâ.",
            "Peki ama yapay zekâ tam olarak nedir? Nasıl çalışır? Gerçekten düşündüğü söylenebilir mi? Gel, teknik terimlere boğulmadan, kahveni alıp keyifle okuyabileceğin bir dille anlatalım.",
            "Yapay zekâ (Artificial Intelligence – AI), bilgisayarların ve yazılımların insan gibi düşünebilmesini, öğrenebilmesini ve karar verebilmesini sağlayan teknolojilerin genel adıdır.",
            "Daha basit söylersek:",
            "Yapay zekâ, makinelerin deneyimlerden öğrenerek zamanla daha iyi hale gelmesidir.",
            "Bir insan bisiklete binmeyi deneye deneye öğrenir. Yapay zekâ da milyonlarca örnek görerek öğrenir.",
            "Yapay zekânın temelinde üç şey vardır:",
            "Veri",
            "Algoritma",
            "Öğrenme süreci",
            "Bir yapay zekâ sistemi önce büyük miktarda veriyle eğitilir. Bu verilerden kalıplar çıkarır. Sonra yeni gelen bilgileri bu kalıplarla karşılaştırarak tahmin yapar.",
            "Örneğin:",
            "Binlerce kedi fotoğrafı gösterilir",
            "Sistem ortak özellikleri öğrenir",
            "Yeni bir fotoğraf geldiğinde “bu bir kedi” diyebilir",
            "Bu sürece makine öğrenmesi denir.",
            "Yapay Zekâ Türleri",
            "Dar Yapay Zekâ (Narrow AI)",
            "Belirli bir işi yapmak için tasarlanmıştır.",
            "Örnekler:",
            "ChatGPT",
            "Google Translate",
            "Spotify öneri sistemi",
            "Bugün kullandığımız tüm yapay zekâlar bu gruptadır.",
            "Genel Yapay Zekâ (General AI)",
            "İnsan gibi düşünebilen, farklı alanlarda akıl yürütebilen yapay zekâdır.",
            "Şu an için henüz tam anlamıyla mevcut değildir.",
            "Yapay Zekâ Günlük Hayatta Nerelerde Kullanılıyor?",
            "Farkında olmasak da yapay zekâ her yerde:",
            "Telefon kameraları",
            "Navigasyon uygulamaları",
            "Sosyal medya akışları",
            "E-ticaret önerileri",
            "Banka dolandırıcılık sistemleri",
            "Akıllı ev cihazları",
            "Kısacası: Yapay zekâ artık hayatın görünmez bir parçası.",
            "Yapay Zekâ İnsanların İşini Elinden Alır mı?",
            "Bu soru en çok merak edilenlerden biri.",
            "Gerçek şu:",
            "Yapay zekâ bazı işleri otomatikleştirir.",
            "Ama aynı zamanda yeni meslekler de yaratır.",
            "Geçmişte bilgisayarlar çıktığında da benzer korkular vardı.",
            "Bugün ise yazılımcılar, dijital pazarlamacılar, içerik üreticileri gibi meslekler var.",
            "Önemli olan şey:",
            "Yapay zekâdan korkmak yerine, yapay zekâyı kullanmayı öğrenmek.",
            "Yapay Zekâ ile Neler Yapılabilir?",
            "Bugün yapay zekâ ile:",
            "Blog yazısı yazabilirsin",
            "Görsel üretebilirsin",
            "Video oluşturabilirsin",
            "Kod yazabilirsin",
            "Sunum hazırlayabilirsin",
            "Müzik bile besteleyebilirsin",
            "Üstelik bunların büyük kısmı ücretsiz araçlarla mümkün.",
            "Yapay Zekâ Gelecekte Bizi Nereye Götürüyor?",
            "Uzmanlara göre yapay zekâ:",
            "Sağlık alanında erken teşhisi güçlendirecek",
            "Eğitimde kişisel öğrenmeyi yaygınlaştıracak",
            "İş dünyasında verimliliği artıracak",
            "Yani karanlık bir gelecekten çok, daha akıllı bir dünya bizi bekliyor.",
            "Yapay Zekâdan Korkmalı mıyız?",
            "Korkmak yerine bilinçli olmak gerekiyor.",
            "Her güçlü teknoloji gibi yapay zekânın da doğru ve etik şekilde kullanılması önemli.",
            "Ama kontrolsüz bir canavar gibi düşünmek gerçekçi değil.",
            "Yapay zekâ bir araçtır.",
            "Onu iyi ya da kötü yapan, kullanan insandır.",
            "Sonuç",
            "Yapay zekâ artık geleceğin teknolojisi değil, bugünün gerçeği.",
            "Onu ne kadar erken tanır ve kullanmayı öğrenirsen, dijital dünyada o kadar avantajlı olursun.",
            "AI Pusula’da, yapay zekâyı herkes için anlaşılır ve ulaşılabilir hale getirmeye devam edeceğiz."
          ],

          contentEN: [
            "You turned off your phone alarm. You checked the weather. Your music app recommended a song that perfectly matches your mood. You searched something on Google and got the answer within seconds.",
            "Behind all of this, there is a silent force at work: Artificial Intelligence.",
            "So what exactly is AI? How does it work? Can it really think? Let’s explain it in a simple and enjoyable way without drowning in technical terms.",
            "Artificial Intelligence (AI) is the general term for technologies that allow computers and software to think, learn, and make decisions like humans.",
            "In simpler words:",
            "AI is when machines learn from experience and become better over time.",
            "Just like a person learns to ride a bicycle by trying again and again, AI learns by analyzing millions of examples.",
            "At the core of AI, there are three things:",
            "Data",
            "Algorithms",
            "Learning process",
            "An AI system is first trained with large amounts of data. It finds patterns in this data. Then it compares new information with these patterns to make predictions.",
            "For example:",
            "Thousands of cat photos are shown",
            "The system learns common features",
            "When a new image appears, it can say “this is a cat”",
            "This process is called machine learning.",
            "Types of Artificial Intelligence",
            "Narrow AI",
            "Designed to perform a specific task.",
            "Examples:",
            "ChatGPT",
            "Google Translate",
            "Spotify recommendation system",
            "Most of the AI we use today belongs to this group.",
            "General AI",
            "AI that can think and reason like humans.",
            "It does not fully exist yet.",
            "Where Is AI Used in Daily Life?",
            "Even if we don’t notice, AI is everywhere:",
            "Phone cameras",
            "Navigation apps",
            "Social media feeds",
            "E-commerce recommendations",
            "Bank fraud detection systems",
            "Smart home devices",
            "In short: AI has become an invisible part of our lives.",
            "Will AI Take People’s Jobs?",
            "This is one of the most common questions.",
            "The truth is:",
            "AI automates some jobs.",
            "But it also creates new professions.",
            "In the past, similar fears existed when computers appeared.",
            "Today, we have jobs like software developers, digital marketers, and content creators.",
            "The important thing:",
            "Not to fear AI, but to learn how to use it.",
            "What Can You Do With AI?",
            "Today, with AI you can:",
            "Write blog posts",
            "Generate images",
            "Create videos",
            "Write code",
            "Prepare presentations",
            "Even compose music",
            "Many of these are possible with free tools.",
            "Where Is AI Taking Us?",
            "According to experts, AI will:",
            "Improve early diagnosis in healthcare",
            "Expand personalized learning in education",
            "Increase productivity in business",
            "Rather than a dark future, a smarter world awaits us.",
            "Should We Be Afraid of AI?",
            "Instead of fear, we should be conscious.",
            "Like any powerful technology, AI must be used ethically and responsibly.",
            "AI is a tool.",
            "What makes it good or bad is the person who uses it.",
            "Conclusion",
            "AI is no longer the technology of the future, but the reality of today.",
            "The earlier you understand and learn to use it, the more advantage you will have in the digital world.",
            "At AI Pusula, we will continue to make AI understandable and accessible for everyone."
          ],

          cover: "/blog/what-is-ai.jpg",
          readingMinutes: 6,
          featured: false
        },

];

// yardımcı: tarihe göre sırala
export function getPostsSorted() {
  return [...posts].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
}