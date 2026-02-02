export type ToolCategory =
  | "text"
  | "image"
  | "video"
  | "audio"
  | "code"
  | "productivity";

export type ToolPricing = "free" | "paid" | "freemium";

export type Tool = {
  slug: string;
  name: string;
  website: string;

  category: ToolCategory;
  pricing: ToolPricing;

  taglineTR: string;
  taglineEN: string;

  detailTR: string;
  detailEN: string;

  // public/logos/.. içine koy:  /logos/xxx.png
  logo?: string;

  // public/screenshots/.. içine koy: /screenshots/xxx-1.png
  screenshots?: string[];

  // ana sayfadaki “Editör seçimi” için işaret
  featured?: boolean;
};

export const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    website: "https://chat.openai.com/",
    category: "text",
    pricing: "freemium",
    taglineTR: "Sohbet, yazı, fikir üretimi ve görev otomasyonu.",
    taglineEN: "Chat, writing, ideation, and task automation.",
    detailTR:
      "ChatGPT; metin yazma, özetleme, fikir geliştirme, e-posta hazırlama ve günlük iş akışlarını hızlandırma gibi konularda kullanılan bir yapay zekâ asistanıdır. Sorulara yanıt verir, içerik taslağı çıkarır ve farklı üsluplarda metin üretebilir.",
    detailEN:
      "ChatGPT is an AI assistant for writing, summarizing, brainstorming, and streamlining everyday workflows. It answers questions, drafts content, and generates text in different tones and styles.",
    logo: "/logos/chatgpt.png",
    screenshots: ["/screenshots/chatgpt-1.png"],
    featured: true,
  },
  {
    slug: "claude",
    name: "Claude",
    website: "https://claude.ai/",
    category: "text",
    pricing: "freemium",
    taglineTR: "Uzun metinlerle çalışma ve yazma desteği.",
    taglineEN: "Strong for long-form writing and analysis.",
    detailTR:
      "Claude; uzun dokümanları özetleme, metin üretimi, analiz ve belgeyle çalışmaya odaklanan bir asistandır. Özellikle uzun içeriklerde düzenli, tutarlı çıktılar almak için tercih edilir.",
    detailEN:
      "Claude is an assistant focused on summarizing long documents, writing, and analysis. It’s often chosen for coherent outputs on longer content and document-based tasks.",
    logo: "/logos/claude.png",
    screenshots: ["/screenshots/claude-1.png"],
    featured: true,
  },
  {
    slug: "google-gemini",
    name: "Google Gemini",
    website: "https://gemini.google.com/",
    category: "text",
    pricing: "freemium",
    taglineTR: "Google ekosistemiyle entegre üretken asistan.",
    taglineEN: "A productivity assistant integrated with Google’s ecosystem.",
    detailTR:
      "Gemini; metin üretimi, özetleme, fikir geliştirme ve çeşitli üretkenlik görevlerinde yardımcı olur. Google araçlarıyla birlikte kullanıldığında hızlı taslaklar ve içerik üretimi sağlar.",
    detailEN:
      "Gemini helps with writing, summarizing, and ideation across productivity tasks. It’s especially convenient when used alongside Google services for quick drafts and content creation.",
    logo: "/logos/gemini.png",
    screenshots: ["/screenshots/gemini-1.png"],
    featured: true,
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    website: "https://www.midjourney.com/",
    category: "image",
    pricing: "paid",
    taglineTR: "Metinden yaratıcı görsel üretimi.",
    taglineEN: "High-quality text-to-image generation.",
    detailTR:
      "Midjourney; metin istemleriyle (prompt) yaratıcı ve stilize görseller üretmek için kullanılır. Konsept tasarım, illüstrasyon ve görsel fikir denemelerinde güçlüdür.",
    detailEN:
      "Midjourney generates stylized, high-quality images from prompts. It’s widely used for concept art, illustration, and creative exploration.",
    logo: "/logos/midjourney.png",
    screenshots: ["/screenshots/midjourney-1.png"],
    featured: true,
  },
  {
    slug: "dall-e",
    name: "DALL·E",
    website: "https://openai.com/dall-e",
    category: "image",
    pricing: "freemium",
    taglineTR: "Metinden görsel üretimi ve düzenleme.",
    taglineEN: "Text-to-image generation and edits.",
    detailTR:
      "DALL·E; blog kapak görselleri, konsept denemeleri ve hızlı prototip için pratiktir. Prompt’ta stil ve sahne tanımı ne kadar netse sonuç o kadar iyi olur.",
    detailEN:
      "DALL·E is great for quick prototyping, blog covers, and concept experiments. The clearer your prompt (style + scene), the better the results.",
    logo: "/logos/dalle.png",
    screenshots: ["/screenshots/dall-e-1.png"],
    featured: true,
  },
  {
    slug: "stable-diffusion",
    name: "Stable Diffusion",
    website: "https://stability.ai/",
    category: "image",
    pricing: "freemium",
    taglineTR: "Geniş model ekosistemiyle görsel üretim.",
    taglineEN: "Image generation with a rich model ecosystem.",
    detailTR:
      "Stable Diffusion; farklı modeller ve stillerle görsel üretimi sağlar. Topluluk destekli modeller sayesinde geniş bir görsel yelpazesi denenebilir.",
    detailEN:
      "Stable Diffusion enables image generation across many styles. Community models broaden what you can create, from realistic to artistic outputs.",
    logo: "/logos/stable-diffusion.png",
    screenshots: ["/screenshots/stable-diffusion-1.png"],
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo AI",
    website: "https://leonardo.ai/",
    category: "image",
    pricing: "freemium",
    taglineTR: "Stil odaklı görsel üretimi ve asset üretimi.",
    taglineEN: "Style-focused image and asset generation.",
    detailTR:
      "Leonardo; özellikle oyun/ürün asset’leri ve belirli stillerde görsel üretimi için kullanılır. Farklı model seçenekleriyle hızlı denemeler yapabilirsin.",
    detailEN:
      "Leonardo is popular for generating assets and styled visuals. With multiple model options, you can iterate quickly and explore variations.",
    logo: "/logos/leonardo.png",
    screenshots: ["/screenshots/leonardo-1.png"],
  },
  {
    slug: "adobe-firefly",
    name: "Adobe Firefly",
    website: "https://firefly.adobe.com/",
    category: "image",
    pricing: "freemium",
    taglineTR: "Adobe içinde görsel üretimi ve düzenleme.",
    taglineEN: "Image generation and editing inside Adobe.",
    detailTR:
      "Firefly; Adobe ekosistemiyle entegre üretken görsel araçları sunar. Tasarım süreçlerinde hızlı varyasyon üretmek ve düzenlemek için idealdir.",
    detailEN:
      "Firefly brings generative image tools into Adobe workflows. It’s ideal for creating fast variations and refining them during design work.",
    logo: "/logos/firefly.png",
    screenshots: ["/screenshots/firefly-1.png"],
  },
  {
    slug: "runway",
    name: "Runway",
    website: "https://runwayml.com/",
    category: "video",
    pricing: "freemium",
    taglineTR: "Video üretimi ve düzenleme için AI platformu.",
    taglineEN: "AI video generation and editing platform.",
    detailTR:
      "Runway; metinden video üretimi, video düzenleme ve efekt uygulamalarında kullanılır. İçerik üreticileri için hızlı, pratik video iş akışı sağlar.",
    detailEN:
      "Runway is used for text-to-video, editing, and AI-powered effects. It’s popular among creators for fast, practical video workflows.",
    logo: "/logos/runway.png",
    screenshots: ["/screenshots/runway-1.png"],
  },
  {
    slug: "capcut",
    name: "CapCut",
    website: "https://www.capcut.com/",
    category: "video",
    pricing: "freemium",
    taglineTR: "Kolay video düzenleme ve sosyal şablonlar.",
    taglineEN: "Easy video editing with social templates.",
    detailTR:
      "CapCut; sosyal medya için hızlı video düzenleme, şablonlar, otomatik altyazı ve pratik efektler sunar. Başlangıç için çok uygundur.",
    detailEN:
      "CapCut offers quick editing, templates, auto-captions, and useful effects for social content. It’s very beginner-friendly.",
    logo: "/logos/capcut.png",
    screenshots: ["/screenshots/capcut-1.png"],
  },
  {
    slug: "veed",
    name: "VEED",
    website: "https://www.veed.io/",
    category: "video",
    pricing: "freemium",
    taglineTR: "Online video düzenleme ve altyazı araçları.",
    taglineEN: "Online video editor with caption tools.",
    detailTR:
      "VEED; tarayıcı üzerinden video düzenleme, otomatik altyazı ve basit sosyal medya çıktıları için idealdir. Hızlı düzenleme yapmak isteyenler için pratiktir.",
    detailEN:
      "VEED is a browser-based editor great for quick cuts, auto-captions, and social-ready exports. Perfect for fast edits without heavy software.",
    logo: "/logos/veed.png",
    screenshots: ["/screenshots/veed-1.png"],
  },
  {
    slug: "pika",
    name: "Pika",
    website: "https://pika.art/",
    category: "video",
    pricing: "freemium",
    taglineTR: "Kısa metinden video ve stil denemeleri.",
    taglineEN: "Short-form text-to-video and style experiments.",
    detailTR:
      "Pika; kısa prompt’larla video üretimi ve farklı görsel stilleri denemek için kullanılır. Kısa, etkili sosyal video fikirleri üretmeye uygundur.",
    detailEN:
      "Pika helps generate short videos from prompts and experiment with styles. It’s great for quick, punchy social video concepts.",
    logo: "/logos/pika.png",
    screenshots: ["/screenshots/pika-1.png"],
  },
  {
    slug: "luma-dream-machine",
    name: "Luma Dream Machine",
    website: "https://lumalabs.ai/",
    category: "video",
    pricing: "freemium",
    taglineTR: "Sinematik metinden video üretimi.",
    taglineEN: "Cinematic text-to-video generation.",
    detailTR:
      "Luma Dream Machine; metin girdilerinden sinematik videolar üretmeye odaklanır. Sahne tanımı ve kamera dili net olduğunda daha iyi sonuç verir.",
    detailEN:
      "Luma Dream Machine focuses on cinematic videos from text prompts. Clear scene description and camera direction generally improve results.",
    logo: "/logos/luma.png",
    screenshots: ["/screenshots/luma-1.png"],
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    website: "https://elevenlabs.io/",
    category: "audio",
    pricing: "freemium",
    taglineTR: "Gerçekçi metinden sese ve ses klonlama.",
    taglineEN: "Realistic text-to-speech and voice cloning.",
    detailTR:
      "ElevenLabs; metinden doğal ses üretimi ve ses klonlama gibi özellikler sunar. Video anlatımı, reklam sesi ve içerik üretiminde yaygındır.",
    detailEN:
      "ElevenLabs provides natural-sounding TTS and voice cloning. It’s commonly used for narration, ads, and creator content.",
    logo: "/logos/elevenlabs.png",
    screenshots: ["/screenshots/elevenlabs-1.png"],
  },
  {
    slug: "descript",
    name: "Descript",
    website: "https://www.descript.com/",
    category: "audio",
    pricing: "freemium",
    taglineTR: "Podcast/video için ses düzenleme ve transkript.",
    taglineEN: "Audio editing and transcription for creators.",
    detailTR:
      "Descript; transkript üzerinden düzenleme mantığıyla ses/video düzenlemeyi kolaylaştırır. Podcast ve içerik üretiminde zaman kazandırır.",
    detailEN:
      "Descript makes editing easy by letting you edit audio/video via transcript. It’s a time-saver for podcasts and content workflows.",
    logo: "/logos/descript.png",
    screenshots: ["/screenshots/descript-1.png"],
  },
  {
    slug: "whisper",
    name: "Whisper",
    website: "https://openai.com/research/whisper",
    category: "audio",
    pricing: "free",
    taglineTR: "Konuşmayı metne çevirme (transkripsiyon).",
    taglineEN: "Speech-to-text transcription.",
    detailTR:
      "Whisper; ses kayıtlarını yazıya çevirmek için kullanılır. Toplantı notları, röportaj ve içerik altyazısı üretiminde faydalıdır.",
    detailEN:
      "Whisper converts audio into text. Useful for meeting notes, interviews, and generating subtitles/captions.",
    logo: "/logos/whisper.png",
    screenshots: ["/screenshots/whisper-1.png"],
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    website: "https://www.perplexity.ai/",
    category: "productivity",
    pricing: "freemium",
    taglineTR: "Araştırma ve hızlı özet için arama odaklı asistan.",
    taglineEN: "Search-first assistant for research and summaries.",
    detailTR:
      "Perplexity; araştırma yaparken kaynaklı özetler sunmaya odaklanır. Hızlı bilgi toplama ve konu taramalarında etkilidir.",
    detailEN:
      "Perplexity focuses on research with sourced summaries. Great for fast knowledge gathering and topic exploration.",
    logo: "/logos/perplexity.png",
    screenshots: ["/screenshots/perplexity-1.png"],
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    website: "https://www.notion.so/product/ai",
    category: "productivity",
    pricing: "freemium",
    taglineTR: "Notion içinde yazma, özetleme ve düzenleme.",
    taglineEN: "Writing, summarizing, and editing inside Notion.",
    detailTR:
      "Notion AI; Notion sayfalarında metin yazma, özetleme, yeniden düzenleme gibi işlerde yardımcı olur. Not tutma ve proje yönetimini hızlandırır.",
    detailEN:
      "Notion AI helps you write, summarize, and refine content directly inside Notion pages—speeding up notes and project documentation.",
    logo: "/logos/notion.png",
    screenshots: ["/screenshots/notion-1.png"],
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    website: "https://www.grammarly.com/",
    category: "text",
    pricing: "freemium",
    taglineTR: "Dilbilgisi, yazım ve ton düzenleme asistanı.",
    taglineEN: "Grammar, spelling, and tone assistant.",
    detailTR:
      "Grammarly; yazım hatalarını, dilbilgisini ve ton/üslup tutarlılığını iyileştirir. Özellikle İngilizce yazışmalarda çok faydalıdır.",
    detailEN:
      "Grammarly improves spelling, grammar, and tone. It’s especially useful for professional English writing and communication.",
    logo: "/logos/grammarly.png",
    screenshots: ["/screenshots/grammarly-1.png"],
  },
  {
    slug: "quillbot",
    name: "QuillBot",
    website: "https://quillbot.com/",
    category: "text",
    pricing: "freemium",
    taglineTR: "Parafraz, yeniden yazma ve özetleme.",
    taglineEN: "Paraphrasing, rewriting, and summarizing.",
    detailTR:
      "QuillBot; bir metni farklı şekilde yeniden yazma, kısaltma ve özetleme için kullanılır. Akademik veya içerik üretiminde yardımcı olabilir.",
    detailEN:
      "QuillBot is used for paraphrasing, rewriting, and summarizing text. Helpful for drafting and content refinement.",
    logo: "/logos/quillbot.png",
    screenshots: ["/screenshots/quillbot-1.png"],
  },
  {
    slug: "jasper",
    name: "Jasper",
    website: "https://www.jasper.ai/",
    category: "text",
    pricing: "paid",
    taglineTR: "Pazarlama metni ve içerik üretimine odaklı.",
    taglineEN: "Marketing-focused copy and content generation.",
    detailTR:
      "Jasper; reklam metinleri, landing page içerikleri ve pazarlama yazıları üretmeye odaklanır. Markaya uygun ton ve şablonlarla çalışır.",
    detailEN:
      "Jasper focuses on marketing copy like ads and landing pages. It supports brand tone workflows and templates for consistent outputs.",
    logo: "/logos/jasper.png",
    screenshots: ["/screenshots/jasper-1.png"],
  },
  {
    slug: "copilot",
    name: "GitHub Copilot",
    website: "https://github.com/features/copilot",
    category: "code",
    pricing: "paid",
    taglineTR: "Kod tamamlama ve yazarken öneri asistanı.",
    taglineEN: "Code completion and AI pair-programming.",
    detailTR:
      "Copilot; IDE içinde kod tamamlama, fonksiyon önerme ve örnek üretmede yardımcı olur. Hızlı prototipleme ve öğrenmede etkilidir.",
    detailEN:
      "Copilot helps inside your IDE with code completion, function suggestions, and examples—great for prototyping and learning faster.",
    logo: "/logos/copilot.png",
    screenshots: ["/screenshots/copilot-1.png"],
  },
  {
    slug: "cursor",
    name: "Cursor",
    website: "https://www.cursor.com/",
    category: "code",
    pricing: "freemium",
    taglineTR: "AI destekli kod editörü ve repo ile çalışma.",
    taglineEN: "AI-powered code editor with repo context.",
    detailTR:
      "Cursor; kod tabanını anlayıp dosyalar arasında öneriler sunan AI destekli bir editördür. Refactor ve hata ayıklamada hız kazandırır.",
    detailEN:
      "Cursor is an AI-powered editor that understands your codebase. It helps with refactors, debugging, and multi-file edits.",
    logo: "/logos/cursor.png",
    screenshots: ["/screenshots/cursor-1.png"],
  },
  {
    slug: "replit",
    name: "Replit",
    website: "https://replit.com/",
    category: "code",
    pricing: "freemium",
    taglineTR: "Tarayıcıda hızlı kod yazma ve çalıştırma.",
    taglineEN: "Code and run apps quickly in the browser.",
    detailTR:
      "Replit; kurulumla uğraşmadan tarayıcıdan kod yazıp çalıştırmanı sağlar. Prototip geliştirme ve paylaşım için çok pratiktir.",
    detailEN:
      "Replit lets you code and run apps in the browser without setup. Great for prototypes and easy sharing.",
    logo: "/logos/replit.png",
    screenshots: ["/screenshots/replit-1.png"],
  },
  {
    slug: "canva",
    name: "Canva",
    website: "https://www.canva.com/",
    category: "productivity",
    pricing: "freemium",
    taglineTR: "Hızlı tasarım, şablonlar ve içerik üretimi.",
    taglineEN: "Fast design with templates and content tools.",
    detailTR:
      "Canva; sosyal medya görselleri, sunumlar ve hızlı tasarım işleri için şablon tabanlı bir araçtır. Üretken özelliklerle içerik üretimini hızlandırır.",
    detailEN:
      "Canva is template-driven for social graphics, presentations, and quick design work. Its productivity features speed up content creation.",
    logo: "/logos/canva.png",
    screenshots: ["/screenshots/canva-1.png"],
  },
  {
  slug: "murf-ai",
  name: "Murf AI",
  website: "https://murf.ai/",
  category: "audio",
  pricing: "freemium",
  taglineTR: "Gerçekçi yapay zekâ seslendirme ve metin okuma aracı.",
  taglineEN: "AI voice generator with realistic text-to-speech.",
  detailTR:
    "Murf AI; metinleri doğal ve profesyonel seslere dönüştürmeye odaklanan bir yapay zekâ seslendirme platformudur. Podcast, video, reklam ve eğitim içerikleri için farklı dillerde ve tonlarda ses seçenekleri sunar.",
  detailEN:
    "Murf AI is a text-to-speech platform that converts text into natural and professional-sounding voices. It’s widely used for podcasts, videos, ads, and educational content with multiple languages and voice styles.",
  logo: "/logos/murfai.png",
  screenshots: ["/screenshots/murfai-1.png"],
  featured: false,
  },

];
