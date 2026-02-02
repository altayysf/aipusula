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
          dateISO: "2026-02-02",
          categoryTR: "Rehber",
          categoryEN: "Guide",

          titleTR: "Yapay Zekâ Nedir? Geleceği Şekillendiren Teknolojiyi Basitçe Anlatalım",
          titleEN: "What Is Artificial Intelligence? A Simple Explanation of the Technology Shaping the Future",

          excerptTR:
            "Yapay zekâ nedir, nasıl çalışır ve günlük hayatımızı nasıl etkiler? Teknik terimlere boğulmadan, keyifli ve anlaşılır bir dille anlatım.",
          excerptEN:
            "What is AI, how does it work, and how does it impact daily life? A clear, beginner-friendly explanation without heavy jargon.",

          contentTR: [
            "<h1>Yapay Zekâ Nedir? Geleceği Şekillendiren Teknolojiyi Basitçe Anlatalım</h1>",
            "<p>Sabah telefonunun alarmını kapattın. Hava durumuna baktın. Müzik uygulaması sana tam ruh haline uygun bir şarkı önerdi. Google’da bir şey arattın ve saniyeler içinde cevabını aldın.</p>",
            "<p>Tüm bunların arkasında sessizce çalışan bir güç var: <strong>Yapay zekâ</strong>.</p>",
            "<p>Peki ama yapay zekâ tam olarak nedir? Nasıl çalışır? Gerçekten düşündüğü söylenebilir mi? Gel, teknik terimlere boğulmadan, kahveni alıp keyifle okuyabileceğin bir dille anlatalım.</p>",

            "<h2>Yapay Zekâ Nedir?</h2>",
            "<p>Yapay zekâ (Artificial Intelligence – AI), bilgisayarların ve yazılımların insan gibi düşünebilmesini, öğrenebilmesini ve karar verebilmesini sağlayan teknolojilerin genel adıdır.</p>",
            "<p>Daha basit söylersek:</p>",
            "<blockquote><p>Yapay zekâ, makinelerin deneyimlerden öğrenerek zamanla daha iyi hale gelmesidir.</p></blockquote>",
            "<p>Bir insan bisiklete binmeyi deneye deneye öğrenir. Yapay zekâ da milyonlarca örnek görerek öğrenir.</p>",

            "<h2>Yapay Zekâ Nasıl Çalışır?</h2>",
            "<p>Yapay zekânın temelinde üç şey vardır:</p>",
            "<ul><li>Veri</li><li>Algoritma</li><li>Öğrenme süreci</li></ul>",
            "<p>Bir yapay zekâ sistemi önce büyük miktarda veriyle eğitilir. Bu verilerden kalıplar çıkarır. Sonra yeni gelen bilgileri bu kalıplarla karşılaştırarak tahmin yapar.</p>",
            "<p>Örneğin:</p>",
            "<ul><li>Binlerce kedi fotoğrafı gösterilir</li><li>Sistem ortak özellikleri öğrenir</li><li>Yeni bir fotoğraf geldiğinde “bu bir kedi” diyebilir</li></ul>",
            "<p>Bu sürece <strong>makine öğrenmesi</strong> denir.</p>",

            "<h2>Yapay Zekâ Türleri</h2>",
            "<h3>Dar Yapay Zekâ (Narrow AI)</h3>",
            "<p>Belirli bir işi yapmak için tasarlanmıştır.</p>",
            "<p>Örnekler:</p>",
            "<ul><li>ChatGPT</li><li>Google Translate</li><li>Spotify öneri sistemi</li></ul>",
            "<p>Bugün kullandığımız tüm yapay zekâlar bu gruptadır.</p>",

            "<h3>Genel Yapay Zekâ (General AI)</h3>",
            "<p>İnsan gibi düşünebilen, farklı alanlarda akıl yürütebilen yapay zekâdır. Şu an için henüz tam anlamıyla mevcut değildir.</p>",

            "<h2>Yapay Zekâ Günlük Hayatta Nerelerde Kullanılıyor?</h2>",
            "<p>Farkında olmasak da yapay zekâ her yerde:</p>",
            "<ul><li>Telefon kameraları</li><li>Navigasyon uygulamaları</li><li>Sosyal medya akışları</li><li>E-ticaret önerileri</li><li>Banka dolandırıcılık sistemleri</li><li>Akıllı ev cihazları</li></ul>",
            "<p>Kısacası: Yapay zekâ artık hayatın görünmez bir parçası.</p>",

            "<h2>Yapay Zekâ İnsanların İşini Elinden Alır mı?</h2>",
            "<p>Bu soru en çok merak edilenlerden biri.</p>",
            "<p>Gerçek şu:</p>",
            "<p>Yapay zekâ bazı işleri otomatikleştirir. Ama aynı zamanda yeni meslekler de yaratır.</p>",
            "<p>Geçmişte bilgisayarlar çıktığında da benzer korkular vardı. Bugün ise yazılımcılar, dijital pazarlamacılar, içerik üreticileri gibi meslekler var.</p>",
            "<p>Önemli olan şey:</p>",
            "<blockquote><p>Yapay zekâdan korkmak yerine, yapay zekâyı kullanmayı öğrenmek.</p></blockquote>",

            "<h2>Yapay Zekâ ile Neler Yapılabilir?</h2>",
            "<p>Bugün yapay zekâ ile:</p>",
            "<ul><li>Blog yazısı yazabilirsin</li><li>Görsel üretebilirsin</li><li>Video oluşturabilirsin</li><li>Kod yazabilirsin</li><li>Sunum hazırlayabilirsin</li><li>Müzik bile besteleyebilirsin</li></ul>",
            "<p>Üstelik bunların büyük kısmı ücretsiz araçlarla mümkün.</p>",

            "<h2>Yapay Zekâ Gelecekte Bizi Nereye Götürüyor?</h2>",
            "<p>Uzmanlara göre yapay zekâ:</p>",
            "<ul><li>Sağlık alanında erken teşhisi güçlendirecek</li><li>Eğitimde kişisel öğrenmeyi yaygınlaştıracak</li><li>İş dünyasında verimliliği artıracak</li></ul>",
            "<p>Yani karanlık bir gelecekten çok, daha akıllı bir dünya bizi bekliyor.</p>",

            "<h2>Yapay Zekâdan Korkmalı mıyız?</h2>",
            "<p>Korkmak yerine bilinçli olmak gerekiyor.</p>",
            "<p>Her güçlü teknoloji gibi yapay zekânın da doğru ve etik şekilde kullanılması önemli. Ama kontrolsüz bir canavar gibi düşünmek gerçekçi değil.</p>",
            "<p>Yapay zekâ bir araçtır. Onu iyi ya da kötü yapan, kullanan insandır.</p>",

            "<h2>Sonuç</h2>",
            "<p>Yapay zekâ artık geleceğin teknolojisi değil, bugünün gerçeği.</p>",
            "<p>Onu ne kadar erken tanır ve kullanmayı öğrenirsen, dijital dünyada o kadar avantajlı olursun.</p>",
            "<p><strong>AI Pusula</strong>’da, yapay zekâyı herkes için anlaşılır ve ulaşılabilir hale getirmeye devam edeceğiz.</p>"
          ],

          contentEN: [
            "<h1>What Is Artificial Intelligence? A Simple Explanation of the Technology Shaping the Future</h1>",
            "<p>You turned off your phone alarm. You checked the weather. Your music app recommended the perfect song. You searched Google and got an answer in seconds.</p>",
            "<p>Behind all of this, there’s a quiet force at work: <strong>Artificial Intelligence</strong>.</p>",
            "<p>So what is AI exactly? How does it work? Does it really “think”? Let’s explain it in a simple, enjoyable way—without drowning in technical jargon.</p>",

            "<h2>What Is AI?</h2>",
            "<p>Artificial Intelligence (AI) is a broad term for technologies that enable computers and software to learn, reason, and make decisions in ways that resemble human intelligence.</p>",
            "<p>In simple terms:</p>",
            "<blockquote><p>AI is when machines learn from experience and get better over time.</p></blockquote>",
            "<p>Just like humans learn by practice, AI learns by analyzing large amounts of examples.</p>",

            "<h2>How Does AI Work?</h2>",
            "<p>AI is built on three core pieces:</p>",
            "<ul><li>Data</li><li>Algorithms</li><li>Learning process</li></ul>",
            "<p>An AI system is trained on lots of data, learns patterns, and uses those patterns to make predictions on new inputs.</p>",
            "<p>Example:</p>",
            "<ul><li>It sees thousands of cat photos</li><li>Learns common features</li><li>Then recognizes a new photo as “a cat”</li></ul>",
            "<p>This is called <strong>machine learning</strong>.</p>",

            "<h2>Types of AI</h2>",
            "<h3>Narrow AI</h3>",
            "<p>Built to perform specific tasks.</p>",
            "<p>Examples:</p>",
            "<ul><li>ChatGPT</li><li>Google Translate</li><li>Spotify recommendations</li></ul>",
            "<p>Most AI we use today falls into this category.</p>",

            "<h3>General AI</h3>",
            "<p>A theoretical form of AI that could think and reason like a human across many domains. It doesn’t fully exist yet.</p>",

            "<h2>Where Do We Use AI in Daily Life?</h2>",
            "<ul><li>Phone cameras</li><li>Navigation apps</li><li>Social media feeds</li><li>E-commerce recommendations</li><li>Fraud detection in banking</li><li>Smart home devices</li></ul>",
            "<p>AI has become an invisible part of everyday life.</p>",

            "<h2>Will AI Take Our Jobs?</h2>",
            "<p>AI automates some tasks, but it also creates new jobs and industries.</p>",
            "<blockquote><p>The key is not to fear AI, but to learn how to use it.</p></blockquote>",

            "<h2>What Can You Do With AI?</h2>",
            "<ul><li>Write blog posts</li><li>Create images</li><li>Generate videos</li><li>Write code</li><li>Build presentations</li><li>Even compose music</li></ul>",
            "<p>Many of these are possible with free tools.</p>",

            "<h2>Where Is AI Taking Us?</h2>",
            "<ul><li>Earlier diagnosis in healthcare</li><li>Personalized learning in education</li><li>Higher productivity in business</li></ul>",
            "<p>Rather than a dark future, we’re heading toward a smarter world.</p>",

            "<h2>Should We Be Afraid of AI?</h2>",
            "<p>We shouldn’t fear AI—we should use it responsibly. Like any powerful technology, what matters most is how humans choose to use it.</p>",

            "<h2>Conclusion</h2>",
            "<p>AI is not just the future—it’s the reality of today. The sooner you understand it, the more advantage you’ll have in the digital world.</p>",
            "<p>At <strong>AI Pusula</strong>, we’ll keep making AI more understandable and accessible for everyone.</p>"
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