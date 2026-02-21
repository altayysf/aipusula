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
  longDescEN: string;
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
    longDescEN: `ChatGPT is an AI assistant developed by OpenAI, built on large language model (LLM) technology, and actively used by millions in their daily workflows. Launched publicly in 2022, it quickly became one of the fastest-growing applications in history.

Its core strength is context-aware text generation: it produces consistent, high-quality output across a wide range of tasks — drafting emails, simplifying complex concepts, writing code, or brainstorming ideas. With the GPT-4o model, image analysis, file uploads, and web search are also available.

What sets ChatGPT apart is its vast knowledge base trained on billions of parameters and strong contextual consistency. It retains long conversation history for coherent follow-ups and adapts easily to different tones and styles. It saves significant time especially in content creation, customer communication, and personal productivity.`,
    features: [
      { icon: "✍️", title: "Text & Content Generation", desc: "Blog posts, social media copy, product descriptions, and email drafts in seconds." },
      { icon: "🧠", title: "Ideation & Brainstorming", desc: "A powerful thinking partner for brainstorming, content plans, and creative scenarios." },
      { icon: "💻", title: "Code Writing & Debugging", desc: "Generates, explains, and fixes code in Python, JavaScript, SQL, and more." },
      { icon: "📄", title: "Document Summarization", desc: "Quickly summarizes long reports, articles, or meeting notes." },
      { icon: "🌐", title: "Multilingual Support", desc: "Generates, translates, and edits content in 50+ languages." },
      { icon: "🔍", title: "Web Search (GPT-4o)", desc: "Paid plan enables real-time web access for up-to-date answers." },
    ],
    forWhom: [
      { icon: "✍️", label: "Content creators" },
      { icon: "💼", label: "Entrepreneurs & freelancers" },
      { icon: "🎓", label: "Students & academics" },
      { icon: "💻", label: "Software developers" },
      { icon: "📣", label: "Marketing professionals" },
      { icon: "🏢", label: "SMBs & startups" },
    ],
    pricing: [
      { plan: "Free",       price: "$0 / mo",  note: "GPT-4o mini, limited usage" },
      { plan: "Plus",       price: "$20 / mo", note: "GPT-4o, file uploads, web search" },
      { plan: "Team",       price: "$25 / mo", note: "Team sharing, admin panel" },
      { plan: "Enterprise", price: "Custom",   note: "Enterprise security & custom models" },
    ],
    pros: [
      "Vast knowledge base and strong context consistency",
      "Free plan available to get started",
      "Continuously updated model family",
      "Multimodal: text, code, image analysis",
      "Huge community and resource ecosystem",
    ],
    cons: [
      "Message limits on the free plan",
      "Can occasionally hallucinate (produce false info)",
      "Web search only on paid plan",
      "Context window limits on very long documents",
    ],
    prompts: [
      {
        label: "📧 Professional Email",
        prompt: "Act as a marketing manager. Write an apology email to a customer for a delayed delivery. Tone: professional and empathetic. Generate 2 versions.",
        output: `Version 1 — Formal & Apologetic:
Dear [Customer Name], we sincerely apologize for the delay in delivering your order. Due to an unexpected logistics issue, your order will now arrive by [new date].

Version 2 — Warm & Solution-Focused:
Hi [Name], we're truly sorry for the inconvenience. As a gesture of goodwill, we've applied a 10% discount to your next order. Thank you for your patience.`,
      },
      {
        label: "📝 Blog Content Plan",
        prompt: "Act as an SEO expert. Create an 8-heading blog content plan on 'AI tools 2026'. Use H2/H3 hierarchy with a one-sentence description per heading.",
        output: `H2: What Are AI Tools? — Introductory post covering core concepts and 2026 trends
H2: Best Free AI Tools 2026 — Comparison of budget-friendly alternatives
  H3: ChatGPT Free vs Gemini Free
  H3: Free Image Generation Tools
H2: How to Create Content with AI — Step-by-step workflow guide
H2: Best AI Tools for Coding — Copilot, Cursor, and Replit compared`,
      },
      {
        label: "💡 Business Idea Development",
        prompt: "Act as a business development consultant. Budget: $500. Goal: build an online service business using AI tools. Write a 30-day action plan.",
        output: `Week 1 — Foundation:
• ChatGPT Plus ($20) — content & client communication
• Canva (free) — visual creation
• Define first 3 service packages: copywriting, social media, CV editing

Week 2 — First Clients:
• Optimize your LinkedIn profile
• Message 10 potential clients
• Do 2 free reference projects`,
      },
    ],
    alternativeSlugs: ["claude", "google-gemini", "perplexity"],
  },

  // ─────────────────────────────────────────────
  // 2. CLAUDE
  // ─────────────────────────────────────────────
  claude: {
    longDescEN: `Claude is an AI assistant developed by Anthropic with a safety-first design philosophy, built on large language model technology. It excels at working with long documents, nuanced analysis, and producing consistent, long-form text.

It is especially preferred for analyzing and rewriting structured content such as academic papers, legal documents, and technical documentation. Its large context window enables processing hundreds of thousands of words in a single session.

Developed with Anthropic's "Constitutional AI" approach, Claude stands out for its strong safeguards against harmful content and ethical reasoning capabilities. It is a reliable choice for enterprise and academic users who prioritize trustworthiness and consistency.`,
    features: [
      { icon: "📚", title: "Long Document Analysis", desc: "Processes hundreds of thousands of words in a single session." },
      { icon: "✍️", title: "Consistent Long-Form Writing", desc: "Produces coherent content for reports, articles, and book chapters." },
      { icon: "🔒", title: "Safety-First Design", desc: "Built with Constitutional AI — strong ethical boundaries." },
      { icon: "💻", title: "Code Support", desc: "Strong at writing, refactoring, and debugging code." },
      { icon: "🧩", title: "Nuanced Analysis", desc: "Offers multi-dimensional perspectives on complex topics." },
      { icon: "📁", title: "File & Document Processing", desc: "Upload PDFs, Word files, and other documents for analysis." },
    ],
    forWhom: [
      { icon: "📖", label: "Academics & researchers" },
      { icon: "⚖️", label: "Legal & consulting professionals" },
      { icon: "✍️", label: "Long-form content writers" },
      { icon: "💻", label: "Software developers" },
      { icon: "🏢", label: "Enterprise teams" },
      { icon: "📊", label: "Analysts & data professionals" },
    ],
    pricing: [
      { plan: "Free",       price: "$0 / mo",  note: "Basic access, limited messages" },
      { plan: "Pro",        price: "$20 / mo", note: "Claude 3.5 Sonnet, priority access" },
      { plan: "Team",       price: "$25 / mo", note: "Team sharing and management" },
      { plan: "API",        price: "Usage-based", note: "For developers" },
    ],
    pros: [
      "Very large context window (200K tokens)",
      "Consistent and nuanced writing quality",
      "Safety-focused and ethical design",
      "Strong for academic and technical content",
      "File upload and document analysis",
    ],
    cons: [
      "No image generation",
      "Limited web search",
      "Smaller plugin ecosystem than ChatGPT",
      "Free plan message limit is restrictive",
    ],
    prompts: [
      {
        label: "📄 Long Document Summary",
        prompt: "Summarize this report in 5 bullet points. Then write a 1-page executive summary.",
        output: `Key Findings:
1. Market growth rate projected at 23% annually
2. Biggest risk: supply chain disruptions
3. Digital transformation investments peak in 2026
4. HR costs account for 41% of total budget
5. New opportunity: Southeast Asia segment

Executive Summary:
This report examines the 2026–2028 growth projections for the sector, clearly highlighting the need for digital transformation...`,
      },
      {
        label: "⚖️ Contract Analysis",
        prompt: "Identify clauses in this lease agreement that are unfavorable to the tenant and write a brief explanation for each.",
        output: `Clauses to Watch:

Clause 7 — Security Deposit Return: 60-day return period exceeds the standard 30 days, unfavorable to tenant.
Clause 12 — No Alterations: Written consent required even for minor repairs — overly restrictive.
Clause 18 — Termination Notice: 90-day advance notice requirement exceeds market norms.`,
      },
      {
        label: "🧠 Comparative Analysis",
        prompt: "Compare ChatGPT, Claude, and Gemini on content generation, coding, and pricing. Present as a table.",
        output: `| Criteria         | ChatGPT    | Claude     | Gemini     |
|------------------|------------|------------|------------|
| Content Quality  | ⭐⭐⭐⭐½    | ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐      |
| Code Writing     | ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐½    | ⭐⭐⭐⭐      |
| Long Context     | ⭐⭐⭐⭐     | ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐    |
| Free Plan        | Moderate   | Limited    | Generous   |
| Paid Price       | $20/mo     | $20/mo     | $20/mo     |`,
      },
    ],
    alternativeSlugs: ["chatgpt", "google-gemini", "perplexity"],
  },

  // ─────────────────────────────────────────────
  // 3. GOOGLE GEMINI
  // ─────────────────────────────────────────────
  "google-gemini": {
    longDescEN: `Google Gemini is an AI assistant developed by Google DeepMind with deep integration into Google's broad ecosystem. Its native integration with Gmail, Google Docs, Drive, and Search makes it easy to incorporate into existing workflows.

One of Gemini's strongest features is its multimodal capability: it can understand and process text, images, audio, and video simultaneously. This is a major advantage for teams working with multimedia content.

Backed by Google's search infrastructure, Gemini has an edge over competitors when it comes to accessing up-to-date information. It remains a standout choice especially for research, summarization, and enterprise teams leveraging Google Workspace.`,
    features: [
      { icon: "🔗", title: "Google Ecosystem Integration", desc: "Native integration with Gmail, Docs, Drive, and Search." },
      { icon: "👁️", title: "Multimodal Understanding", desc: "Processes text, images, audio, and video simultaneously." },
      { icon: "🔍", title: "Real-Time Web Access", desc: "Leverages Google's search infrastructure for current information." },
      { icon: "✍️", title: "Content & Text Generation", desc: "Effective at drafting, summarizing, and rewriting." },
      { icon: "📊", title: "Data Analysis", desc: "Works natively with Google Sheets to speed up analysis." },
      { icon: "🌐", title: "Broad Language Support", desc: "High-quality output in many languages including English." },
    ],
    forWhom: [
      { icon: "🏢", label: "Teams using Google Workspace" },
      { icon: "🔍", label: "Researchers" },
      { icon: "✍️", label: "Content creators" },
      { icon: "📊", label: "Data analysts" },
      { icon: "🎓", label: "Students & educators" },
      { icon: "💼", label: "Professionals" },
    ],
    pricing: [
      { plan: "Free",       price: "$0 / mo",  note: "Gemini 1.5 Flash, generous limits" },
      { plan: "Advanced",   price: "$20 / mo", note: "Gemini 1.5 Pro, Google One included" },
      { plan: "Business",   price: "$30 / mo", note: "Workspace integration" },
      { plan: "Enterprise", price: "Custom",   note: "Enterprise security & support" },
    ],
    pros: [
      "Excellent integration with Google products",
      "Generous usage limits on free plan",
      "Real-time web access",
      "Strong multimodal capabilities",
      "Direct Google Drive integration",
    ],
    cons: [
      "Advantage diminishes outside the Google ecosystem",
      "Less creative than ChatGPT in some tasks",
      "Limited image generation",
    ],
    prompts: [
      {
        label: "📧 Gmail Draft",
        prompt: "Write a project update email to a business partner for use in Gmail. Tone: professional but friendly. List updates as bullet points.",
        output: `Subject: [Project Name] — Weekly Update

Hi [Name],

Here's a quick update on the project this week:

✅ Completed:
• User research report finalized
• Design wireframes approved

🔄 In Progress:
• Backend API development (60% done)
• User testing planning

📅 Next Week:
• First beta delivery targeted

Looking forward to your feedback!`,
      },
      {
        label: "📊 Data Summary",
        prompt: "Analyze the following sales data and list 3 key findings. Then write a short summary paragraph for a manager.",
        output: `Key Findings:
1. Q3 sales increased 18% compared to the previous quarter
2. Highest growth came from the online channel in the product category
3. Average order value per customer rose to $85

Manager Summary:
Strong performance was recorded in the third quarter. The growing contribution of digital channels and higher basket values send positive signals for achieving year-end targets.`,
      },
      {
        label: "🔍 Research Summary",
        prompt: "Research AI and the education sector. Summarize 2025–2026 trends in 5 bullet points.",
        output: `2025–2026 AI & Education Trends:
1. Personalized learning: AI adapts content to each student's pace
2. Automated assessment tools becoming widespread
3. Language barriers reduced via AI translation
4. Teacher workload could decrease by up to 30%
5. Ethics and copyright debates remain at the top of the agenda`,
      },
    ],
    alternativeSlugs: ["chatgpt", "claude", "perplexity"],
  },

  // ─────────────────────────────────────────────
  // 4. MIDJOURNEY
  // ─────────────────────────────────────────────
  midjourney: {
    longDescEN: `Midjourney is an AI-powered image generation platform that creates high-quality, creative visuals from text prompts. Since its launch in 2022, it has revolutionized the creative industry and is widely considered one of the strongest image generation tools in terms of quality.

The platform's most distinctive quality is its artistic and aesthetic sensibility. It can produce output across a wide spectrum — from photorealism to abstract art, cinematic frames to illustration styles. With V6 and later versions, the quality of lighting, texture, and composition has reached an impressive level.

Midjourney stands apart with its unique Discord-based interface. While this creates a learning curve initially, its community-driven nature makes it much easier to find inspiration and refine prompts. It's a powerful choice for concept design, illustration, marketing visuals, and creative project exploration.`,
    features: [
      { icon: "🎨", title: "High-Quality Visuals", desc: "V6 model produces aesthetically strong, near-photorealistic outputs." },
      { icon: "🖼️", title: "Wide Style Range", desc: "Supports styles from photorealism to abstract, anime to cinematic." },
      { icon: "🔄", title: "Variation Generation", desc: "Easily create multiple variations of a preferred image." },
      { icon: "⬆️", title: "Upscaling", desc: "Upscale generated images to high resolution." },
      { icon: "👥", title: "Community & Inspiration", desc: "The Discord community lets you learn from others' prompts." },
      { icon: "🎭", title: "Style Reference", desc: "Upload a reference image to generate similar styles and compositions." },
    ],
    forWhom: [
      { icon: "🎨", label: "Graphic designers" },
      { icon: "📣", label: "Marketing & ad teams" },
      { icon: "🎮", label: "Game developers & concept artists" },
      { icon: "📸", label: "Photographers & visual artists" },
      { icon: "✍️", label: "Content creators" },
      { icon: "🏢", label: "Agencies & creative teams" },
    ],
    pricing: [
      { plan: "Basic",    price: "$10 / mo",  note: "200 images/month" },
      { plan: "Standard", price: "$30 / mo",  note: "Unlimited (relax mode)" },
      { plan: "Pro",      price: "$60 / mo",  note: "Stealth mode, faster" },
      { plan: "Mega",     price: "$120 / mo", note: "For heavy users" },
    ],
    pros: [
      "One of the strongest tools in the industry for quality",
      "Wide style range and artistic sensibility",
      "Active and inspiring Discord community",
      "Variation and upscale features",
    ],
    cons: [
      "No free plan available",
      "Discord-based interface can feel complex initially",
      "Prompt writing has a learning curve",
      "Inconsistent results with text in images",
    ],
    prompts: [
      {
        label: "🌆 Cinematic City Visual",
        prompt: "/imagine prompt: futuristic Istanbul skyline at golden hour, cinematic lighting, fog over Bosphorus, ultra-realistic, 8k, wide angle --ar 16:9 --v 6",
        output: `Expected Output:
Futuristic Istanbul skyline lit by golden hour light over the Bosphorus. Soft fog effect, deep perspective, cinematic color palette. 16:9 format, high detail.

Tip: Use "--ar" for aspect ratio and "--v 6" for the latest model.`,
      },
      {
        label: "🎨 Product Concept Visual",
        prompt: "/imagine prompt: minimalist luxury perfume bottle, matte black glass, gold accents, white studio background, product photography style, soft shadows --ar 1:1 --v 6",
        output: `Expected Output:
Luxury perfume bottle with matte black glass and gold details on a white background. Studio lighting, soft shadows. Commercial product photography quality.`,
      },
      {
        label: "🖼️ Illustration Style",
        prompt: "/imagine prompt: cozy Japanese coffee shop interior, autumn afternoon, warm lighting, people reading, Studio Ghibli inspired illustration style, detailed --ar 3:2",
        output: `Expected Output:
Studio Ghibli-style Japanese coffee shop interior, autumn afternoon, warm lighting, characters reading books. Detailed illustration style with a nostalgic color palette.`,
      },
    ],
    alternativeSlugs: ["dall-e", "stable-diffusion", "leonardo-ai"],
  },

  // ─────────────────────────────────────────────
  // 5. DALL·E
  // ─────────────────────────────────────────────
  "dall-e": {
    longDescEN: `DALL·E is an AI model developed by OpenAI that generates images from text prompts. Its integration with ChatGPT enables image generation directly within conversations, making DALL·E the most accessible image tool for ChatGPT users.

With DALL·E 3, prompt comprehension improved significantly. The common "misinterpretation" issues of earlier versions were largely resolved, and its ability to accurately interpret text and produce matching visuals became much stronger.

It's ideal for blog cover images, social media content, product concept experiments, and rapid prototyping. It's one of the most practical options for those who want to generate images quickly without any technical setup.`,
    features: [
      { icon: "💬", title: "ChatGPT Integration", desc: "Generate images directly within a ChatGPT conversation." },
      { icon: "📝", title: "Strong Prompt Understanding", desc: "Accurately interprets detailed descriptions and turns them into images." },
      { icon: "✏️", title: "Image Editing", desc: "Edit specific regions of existing images (inpainting)." },
      { icon: "📐", title: "Multiple Formats", desc: "Square, portrait, and landscape format options available." },
      { icon: "🔄", title: "Rapid Prototyping", desc: "Generates multiple variations for concept testing in seconds." },
      { icon: "🛡️", title: "Content Safety", desc: "Safe generation backed by OpenAI's strong content filters." },
    ],
    forWhom: [
      { icon: "✍️", label: "Bloggers & content writers" },
      { icon: "📣", label: "Social media managers" },
      { icon: "💼", label: "Entrepreneurs & startups" },
      { icon: "🎨", label: "UI/UX designers" },
      { icon: "📚", label: "Educational material creators" },
      { icon: "🏪", label: "E-commerce store owners" },
    ],
    pricing: [
      { plan: "ChatGPT Free", price: "$0 / mo",  note: "Limited image generation" },
      { plan: "ChatGPT Plus", price: "$20 / mo", note: "DALL·E 3, priority access" },
      { plan: "API",          price: "Per image", note: "Starting from $0.04" },
      { plan: "Enterprise",   price: "Custom",    note: "High volume usage" },
    ],
    pros: [
      "Seamless integration with ChatGPT",
      "Strong prompt comprehension",
      "No technical knowledge required",
      "Fast and practical to use",
    ],
    cons: [
      "Not as aesthetically detailed as Midjourney",
      "Limited style control",
      "Daily limit on free plan",
      "Sometimes makes errors with text in images",
    ],
    prompts: [
      {
        label: "🖼️ Blog Cover Image",
        prompt: "Generate a blog cover image representing AI and human collaboration. Minimalist, modern style. Blue and white color palette. 16:9 format.",
        output: `Expected Output:
Blue-white color palette, minimalist design. A human hand and a robot hand reaching toward each other, abstract digital pattern in the background. Composition leaves space for a blog title.`,
      },
      {
        label: "🛍️ Product Mock-up",
        prompt: "Eco-friendly kraft paper coffee cup on a white background, green logo area, studio lighting. Product photography style.",
        output: `Expected Output:
Kraft paper textured coffee cup, green logo placeholder, bright white studio background. Slight shadow effect, commercial photo quality output.`,
      },
      {
        label: "🎨 Social Media Visual",
        prompt: "A spring-themed social media square with flowers in the background, space left for a 'New Season' text. Pastel colors, square format.",
        output: `Expected Output:
Pastel pink and yellow flower arrangement, central empty area suitable for text. Instagram square format, light vintage tone effect.`,
      },
    ],
    alternativeSlugs: ["midjourney", "stable-diffusion", "adobe-firefly"],
  },

  // ─────────────────────────────────────────────
  // 6. STABLE DIFFUSION
  // ─────────────────────────────────────────────
  "stable-diffusion": {
    longDescEN: `Stable Diffusion is an open-source image generation model developed by Stability AI. Its open-source nature has led thousands of developers worldwide to create customized models (LoRAs, Checkpoints), shared on platforms like Civitai.

This ecosystem makes Stable Diffusion extremely flexible and powerful: it can generate across a very wide range — realistic portraits, anime-style illustrations, architectural renders, or abstract art. Newer models like SDXL and SD 3.5 have significantly raised the quality bar.

The ability to run locally offers a major advantage for privacy-sensitive projects and those looking to reduce API costs. However, the technical setup and hardware requirements (especially GPU memory) increase the learning curve. It's the most powerful open-source option for serious image generation users who want full customization.`,
    features: [
      { icon: "🔓", title: "Open Source & Free", desc: "Run locally for free on your own hardware, or use cloud services." },
      { icon: "🧩", title: "Massive Model Ecosystem", desc: "Thousands of custom models and LoRAs for different styles." },
      { icon: "🔒", title: "Local Use & Privacy", desc: "Generate images entirely offline — your data stays private." },
      { icon: "⚙️", title: "Advanced Control", desc: "Fine-tune pose, composition, and structure with ControlNet." },
      { icon: "🎨", title: "Unlimited Styles", desc: "From realistic to anime, oil painting to pixel art." },
      { icon: "🔄", title: "Img2Img Conversion", desc: "Transform an existing image into a different style or content." },
    ],
    forWhom: [
      { icon: "💻", label: "Technical users & developers" },
      { icon: "🎨", label: "Digital artists" },
      { icon: "🔒", label: "Privacy-focused projects" },
      { icon: "🎮", label: "Game & animation developers" },
      { icon: "🔬", label: "AI researchers" },
      { icon: "💰", label: "Cost-focused high-volume users" },
    ],
    pricing: [
      { plan: "Local",           price: "Free",        note: "Unlimited on your own hardware" },
      { plan: "DreamStudio",     price: "Credit-based", note: "Stability AI cloud service" },
      { plan: "API",             price: "Usage-based",  note: "Stability AI API" },
      { plan: "Cloud (RunPod)", price: "Hourly",        note: "GPU rental services" },
    ],
    pros: [
      "Completely free local usage",
      "Open source — infinite customization",
      "Privacy: data never leaves your machine",
      "Fine-grained composition control with ControlNet",
      "Thousands of ready-made models and LoRAs",
    ],
    cons: [
      "Technical setup knowledge required",
      "Powerful GPU needed (at least 6–8 GB VRAM)",
      "Interface can feel complex for beginners",
      "Quality consistency depends on model selection",
    ],
    prompts: [
      {
        label: "🖼️ Portrait Generation",
        prompt: "realistic portrait of a professional woman, 35 years old, natural lighting, office background, Canon 5D style photography, 8k, detailed skin texture --steps 30 --cfg 7",
        output: `Expected Output:
Realistic portrait with natural studio lighting and office background. Best results with SDXL or Realistic Vision model. Steps: 30, CFG: 7 provides a balanced quality.`,
      },
      {
        label: "🏛️ Architectural Render",
        prompt: "modern minimalist house exterior, large windows, wooden accents, surrounded by pine trees, dusk lighting, architectural visualization, photorealistic --ar 16:9",
        output: `Expected Output:
Modern minimalist house with large windows and wooden details. Dusk lighting, pine trees. Best results with an architecture-specific model or juggernautXL.`,
      },
      {
        label: "🎨 Anime Style Illustration",
        prompt: "anime style illustration, young warrior girl, cherry blossom background, detailed armor, vibrant colors, Studio Ghibli inspired, high quality",
        output: `Expected Output:
Young female warrior with detailed armor against a cherry blossom background. Vibrant colors, Ghibli-inspired style. AnythingXL or CounterfeitXL model recommended.`,
      },
    ],
    alternativeSlugs: ["midjourney", "leonardo-ai", "dall-e"],
  },

  // ─────────────────────────────────────────────
  // 7. LEONARDO AI
  // ─────────────────────────────────────────────
  "leonardo-ai": {
    longDescEN: `Leonardo AI is an AI visual platform specializing in game assets, character design, and consistent style generation. It offers a powerful customization ecosystem with multiple model options and fine-tuning capabilities.

One of the platform's biggest advantages is its ability to consistently generate the same character or style across different compositions. This is especially valuable for game development, comics, and projects requiring consistent brand visuals.

Its user-friendly web interface allows powerful image generation without technical knowledge. The free plan's daily token system makes limited generation possible, making it a low-risk option to try out.`,
    features: [
      { icon: "🎮", title: "Game Asset Generation", desc: "Optimized for characters, backgrounds, icons, and other game assets." },
      { icon: "🔁", title: "Consistent Style Generation", desc: "Produces the same character or style consistently across different poses." },
      { icon: "🎨", title: "Multiple Model Options", desc: "Choose from specialized models for different aesthetic preferences." },
      { icon: "⚙️", title: "Fine-Tuning", desc: "Train a custom model with your own images to create a unique style." },
      { icon: "✏️", title: "Canvas & Editing", desc: "Inpainting and outpainting on generated images." },
      { icon: "🌐", title: "User-Friendly Interface", desc: "Web-based, intuitive interface — no technical knowledge needed." },
    ],
    forWhom: [
      { icon: "🎮", label: "Game developers" },
      { icon: "🎨", label: "Concept artists & illustrators" },
      { icon: "📚", label: "Comic & webtoon creators" },
      { icon: "🏢", label: "Brand & marketing teams" },
      { icon: "✍️", label: "Content creators" },
      { icon: "🔬", label: "Prototyping designers" },
    ],
    pricing: [
      { plan: "Free",       price: "$0 / mo",  note: "150 tokens/day, limited features" },
      { plan: "Apprentice", price: "$10 / mo", note: "8,500 tokens/month" },
      { plan: "Artisan",    price: "$24 / mo", note: "25,000 tokens/month" },
      { plan: "Maestro",    price: "$48 / mo", note: "60,000 tokens/month" },
    ],
    pros: [
      "Strong for game and character asset generation",
      "Consistent style across compositions",
      "Daily usage possible on free plan",
      "Custom model creation via fine-tuning",
      "User-friendly web interface",
    ],
    cons: [
      "Token limit on free plan is restrictive",
      "Not as strong as Midjourney for photorealistic portraits",
      "Fine-tuning has a learning curve",
    ],
    prompts: [
      {
        label: "🎮 Game Character",
        prompt: "fantasy RPG female mage character, full body, detailed purple robes, magical staff, glowing runes, game asset style, white background, front view",
        output: `Expected Output:
Female mage with purple robes and a magical staff, full body front view on white background. Ready to use as a game asset — prefer PNG for transparent background.`,
      },
      {
        label: "🏞️ Game Background",
        prompt: "fantasy forest background, mystical atmosphere, glowing mushrooms, ancient ruins, game background art, horizontal, no characters, 16:9",
        output: `Expected Output:
Mystical forest background with glowing mushrooms and ancient ruins. 16:9 format, no characters — ready to use as a game background.`,
      },
      {
        label: "🎨 Brand Illustration",
        prompt: "cozy coffee brand mascot, cute bear character, holding coffee cup, warm colors, friendly expression, cartoon style, isolated on white",
        output: `Expected Output:
Cute bear mascot holding a coffee cup, warm colors, white background. Cartoon style suitable for brand communications.`,
      },
    ],
    alternativeSlugs: ["midjourney", "stable-diffusion", "dall-e"],
  },

  // ─────────────────────────────────────────────
  // 8. ADOBE FIREFLY
  // ─────────────────────────────────────────────
  "adobe-firefly": {
    longDescEN: `Adobe Firefly is an AI image generation platform developed by Adobe, the world's largest creative software company, offering deep integration with the Adobe Creative Cloud ecosystem. Its native integration into Photoshop, Illustrator, and Express makes it extremely easy to augment existing design workflows with AI.

Firefly's most critical advantage is commercial safety. Adobe's models are trained on commercially licensed, copyright-cleared content, making generated images legally safe for use in commercial projects. This is especially valuable for agencies and corporate brands.

Features like Generative Fill, Generative Expand, and Text to Image let designers both create new visuals and easily edit existing ones. It's a natural companion for anyone already using the Adobe ecosystem.`,
    features: [
      { icon: "🔗", title: "Adobe Ecosystem Integration", desc: "Works natively inside Photoshop, Illustrator, and Express." },
      { icon: "⚖️", title: "Commercial Safety", desc: "Trained on copyright-cleared content — safe for commercial use." },
      { icon: "✂️", title: "Generative Fill", desc: "Remove objects from photos or fill selections with new content." },
      { icon: "↔️", title: "Generative Expand", desc: "Extend an image in any direction using AI." },
      { icon: "🎨", title: "Style Transfer", desc: "Apply the style of a reference image to new content." },
      { icon: "📝", title: "Text Effects", desc: "Apply creative visual effects directly onto text." },
    ],
    forWhom: [
      { icon: "🎨", label: "Graphic designers" },
      { icon: "📸", label: "Photo editors" },
      { icon: "🏢", label: "Agencies & brand teams" },
      { icon: "📣", label: "Marketing professionals" },
      { icon: "🎬", label: "Video & media production teams" },
      { icon: "💼", label: "Adobe CC users" },
    ],
    pricing: [
      { plan: "Free",             price: "$0 / mo",    note: "25 monthly credits at firefly.adobe.com" },
      { plan: "Firefly Standard", price: "$9.99 / mo", note: "100 monthly credits" },
      { plan: "Firefly Pro",      price: "$29.99 / mo", note: "2,000 monthly credits" },
      { plan: "Creative Cloud",   price: "$54.99 / mo", note: "All Adobe apps included" },
    ],
    pros: [
      "Natural integration with Adobe apps",
      "Legal safety for commercial use",
      "Powerful photo editing with Generative Fill",
      "Free starting credits",
    ],
    cons: [
      "Best experience requires Adobe CC subscription",
      "Less creatively artistic than Midjourney",
      "Monthly credit limit depletes quickly",
    ],
    prompts: [
      {
        label: "✂️ Generative Fill",
        prompt: "In Photoshop, select the empty sky area → Generative Fill → type 'dramatic sunset with golden clouds' → Generate",
        output: `Expected Output:
The selected area is filled with a dramatic golden-cloud sunset. The original photo's light and color tone are referenced for a seamless blend.

Tip: You can also prompt in other languages — 'golden cloud dramatic sunset' works just as well.`,
      },
      {
        label: "🖼️ Image Expansion",
        prompt: "Select the sides of a photo → Generative Expand → 'continue the beach scene with calm waves' → Generate",
        output: `Expected Output:
The beach photo is naturally extended on both sides. The sand texture, wave rhythm, and lighting direction are matched consistently with the original.`,
      },
      {
        label: "🎨 Text Effect",
        prompt: "firefly.adobe.com → Text Effects → Text: 'SUMMER VIBES' → Effect prompt: 'tropical flowers, bright colors, summer vibes'",
        output: `Expected Output:
'SUMMER VIBES' text covered with tropical flowers and vibrant summer colors. Ready visual effect for social media posts.`,
      },
    ],
    alternativeSlugs: ["midjourney", "dall-e", "stable-diffusion"],
  },

  // ─────────────────────────────────────────────
  // 9. RUNWAY
  // ─────────────────────────────────────────────
  runway: {
    longDescEN: `Runway is one of the leading platforms in AI-powered video generation and editing. With Gen-2 and Gen-3 models, it offers text-to-video, image-to-video generation, and advanced video editing tools.

The platform provides a powerful toolkit especially for content creators, filmmakers, and creative teams. Features like green screen removal, object removal, video stylization, and text-to-video generation dramatically accelerate traditional video post-production workflows.

What sets Runway apart is the richness of its creative control options. You don't just enter text — you can fine-tune output with reference images, camera movement, and motion intensity parameters. It's a strong choice for teams seeking an accessible AI solution for professional video production.`,
    features: [
      { icon: "🎬", title: "Text to Video", desc: "Generate short, high-quality videos from text descriptions." },
      { icon: "🖼️", title: "Image to Video", desc: "Animate a still image — add motion and dynamism." },
      { icon: "✂️", title: "Green Screen Removal", desc: "Automatically removes backgrounds for new environment compositing." },
      { icon: "🎨", title: "Video Stylization", desc: "Transform existing video into a different artistic style." },
      { icon: "🗑️", title: "Object Removal", desc: "Automatically clean unwanted objects from video frames." },
      { icon: "🎭", title: "Camera Control", desc: "Pan, zoom, and camera movement for cinematic outputs." },
    ],
    forWhom: [
      { icon: "🎬", label: "Film & content producers" },
      { icon: "📣", label: "Social media content creators" },
      { icon: "🏢", label: "Agencies & ad teams" },
      { icon: "🎨", label: "Motion design artists" },
      { icon: "📱", label: "Influencers & YouTubers" },
      { icon: "🎓", label: "Educational video creators" },
    ],
    pricing: [
      { plan: "Free",      price: "$0 / mo",  note: "125 credits, limited features" },
      { plan: "Standard",  price: "$15 / mo", note: "625 credits/month" },
      { plan: "Pro",       price: "$35 / mo", note: "2,250 credits/month" },
      { plan: "Unlimited", price: "$95 / mo", note: "Unlimited (standard quality)" },
    ],
    pros: [
      "Powerful text-to-video and image-to-video",
      "Green screen and object removal features",
      "Camera movement control",
      "User-friendly interface",
    ],
    cons: [
      "Long video generation is limited (seconds-based)",
      "Credit system depletes quickly",
      "Lower quality on free plan",
      "Subscription required for high quality",
    ],
    prompts: [
      {
        label: "🎬 Text to Video",
        prompt: "A serene Japanese garden at dawn, koi fish swimming in a pond, cherry blossoms falling, slow cinematic camera movement, 4K quality",
        output: `Expected Output:
Japanese garden at dawn, swimming koi fish, falling cherry blossoms. Slow cinematic camera movement, soft lighting. 4–10 second clip.

Tip: Use Motion Brush to manually control which areas move.`,
      },
      {
        label: "🖼️ Image to Video",
        prompt: "Upload image → Camera Motion: Slow Zoom In → Motion Amount: 3 → Generate (This turns a still photo into a slowly breathing video with a zoom effect)",
        output: `Expected Output:
Static photo comes to life with a slow zoom effect. Similar to Ken Burns effect — very effective for social media and presentations.`,
      },
      {
        label: "✂️ Background Removal",
        prompt: "Upload video → Remove Background → Select new background or use as green screen",
        output: `Expected Output:
Person or object is automatically separated from the background. Ready for compositing onto a new scene or use in After Effects/Premiere with alpha channel output.`,
      },
    ],
    alternativeSlugs: ["capcut", "pika", "luma-dream-machine"],
  },

  // ─────────────────────────────────────────────
  // 10. CAPCUT
  // ─────────────────────────────────────────────
  capcut: {
    longDescEN: `CapCut is a free video editing platform developed by ByteDance (TikTok's parent company), designed especially for social media content creation. Available as a mobile app and web version, it works on both phones and computers.

The platform's greatest strength is its ready-made template library. With thousands of templates tuned to TikTok and Instagram Reels trends, you can create engaging videos in minutes. AI features like automatic subtitles, background removal, AI avatar creation, and audio sync are offered for free.

Thanks to its intuitive interface that requires no technical knowledge and powerful AI tools, CapCut appeals to a wide user base from beginner content creators to professional social media managers.`,
    features: [
      { icon: "📱", title: "Mobile & Web", desc: "Accessible via iOS, Android, and browser." },
      { icon: "🎨", title: "Ready Templates", desc: "Thousands of templates tailored for TikTok and Reels trends." },
      { icon: "📝", title: "Auto Subtitles", desc: "Converts speech to text and adds subtitles automatically." },
      { icon: "✂️", title: "Background Removal", desc: "Remove backgrounds with a single tap." },
      { icon: "🤖", title: "AI Avatar", desc: "Create talking AI avatar videos by entering text." },
      { icon: "🎵", title: "Audio Sync", desc: "Automatic video cuts synced to the music beat." },
    ],
    forWhom: [
      { icon: "📱", label: "TikTok & Instagram content creators" },
      { icon: "💼", label: "Small business owners" },
      { icon: "🎓", label: "Students & young creators" },
      { icon: "📣", label: "Social media managers" },
      { icon: "🛍️", label: "E-commerce sellers" },
      { icon: "👨‍🏫", label: "Educational content creators" },
    ],
    pricing: [
      { plan: "Free",       price: "$0 / mo",   note: "Core features, watermark present" },
      { plan: "Pro",        price: "$9.99 / mo", note: "No watermark, premium templates" },
      { plan: "Business",   price: "$19.99 / mo", note: "Team collaboration, brand kit" },
      { plan: "Enterprise", price: "Custom",     note: "Enterprise license" },
    ],
    pros: [
      "Powerful features on the free plan",
      "Very rich template library",
      "Highly accurate auto subtitles",
      "Very easy to use on mobile",
      "TikTok trend integration",
    ],
    cons: [
      "Watermark issue on free plan",
      "Advanced professional editing is limited",
      "ByteDance/data privacy concerns",
      "Can slow down with long videos",
    ],
    prompts: [
      {
        label: "📝 Auto Subtitles",
        prompt: "Upload video → Text → Auto Subtitles → Select language → Generate → Edit style (color, font, size)",
        output: `Expected Result:
Speech is auto-detected and subtitles are created for each sentence. 90%+ accuracy. Select 'Karaoke Style' for word-by-word highlighting.

Tip: Customize the subtitle style to match your brand and save as a template.`,
      },
      {
        label: "🎬 Trend Template",
        prompt: "Templates → Category: Business/Marketing → Select product promo template → Add your photos → Edit text → Export",
        output: `Expected Result:
Your product photos drop into a pre-animated template. Music and transitions auto-adapt. A social-media-ready video in 30 seconds.`,
      },
      {
        label: "🤖 AI Avatar Video",
        prompt: "AI Tools → AI Avatar → Select avatar → Enter text → Language: English → Select voice → Generate",
        output: `Expected Result:
An AI avatar video is created reading your input text, looking realistic. Practical for product demos, educational content, or news narration.`,
      },
    ],
    alternativeSlugs: ["veed", "runway", "pika"],
  },

  // ─────────────────────────────────────────────
  // 11. VEED
  // ─────────────────────────────────────────────
  veed: {
    longDescEN: `VEED.IO is a browser-based online video editing platform that requires no installation. It offers a user-friendly experience especially for quick edits, automatic subtitles, and social media outputs.

The platform's standout feature is its highly accurate auto-subtitle system. It is widely used to transcribe podcast and interview videos, add subtitles, and improve accessibility. It also offers practical tools like background noise removal, audio enhancement, and video resizing.

Its ability to work from any device without installing any software makes VEED a practical choice for team collaboration and situations that require quick edits.`,
    features: [
      { icon: "🌐", title: "Browser-Based", desc: "No installation needed — accessible from any device." },
      { icon: "📝", title: "Auto Subtitles", desc: "Converts speech to text with high accuracy." },
      { icon: "🔇", title: "Noise Removal", desc: "Automatically cleans background noise." },
      { icon: "📐", title: "Format Conversion", desc: "Quickly adjusts video dimensions for different platforms." },
      { icon: "👥", title: "Team Collaboration", desc: "Team members can co-edit and leave comments." },
      { icon: "🎨", title: "Screen Recording", desc: "Record and edit your screen directly in the browser." },
    ],
    forWhom: [
      { icon: "🎙️", label: "Podcast creators" },
      { icon: "🎓", label: "Online educators & course creators" },
      { icon: "💼", label: "Remote working teams" },
      { icon: "📣", label: "Social media managers" },
      { icon: "📊", label: "Corporate presentation makers" },
      { icon: "🌍", label: "Multilingual content creators" },
    ],
    pricing: [
      { plan: "Free",     price: "$0 / mo",  note: "250MB limit, watermark" },
      { plan: "Basic",    price: "$18 / mo", note: "1GB, no watermark" },
      { plan: "Pro",      price: "$30 / mo", note: "Unlimited, all features" },
      { plan: "Business", price: "$70 / mo", note: "Team license" },
    ],
    pros: [
      "No installation — works from any browser",
      "High-quality auto subtitles",
      "Noise removal is very effective",
      "Team collaboration features",
    ],
    cons: [
      "Size and duration limits on free plan",
      "Not as many templates as CapCut",
      "Advanced color correction is limited",
    ],
    prompts: [
      {
        label: "🎙️ Podcast Subtitles",
        prompt: "Upload video/audio → Subtitles → Auto Generate → Language: English → Edit → Export as SRT or MP4",
        output: `Expected Result:
Your podcast audio is transcribed word by word. Manually correct errors, then stylize. Download the SRT file and upload it to YouTube or another platform.`,
      },
      {
        label: "🔇 Audio Cleanup",
        prompt: "Upload video → Audio Settings → Remove Background Noise → Enhance Audio → Apply",
        output: `Expected Result:
Office noise, keyboard sounds, or fan noise is automatically filtered. The microphone audio is now cleaner and more professional.`,
      },
      {
        label: "📐 Social Media Format",
        prompt: "Upload video → Size → Instagram Reels (9:16) → Smart reframe → Export",
        output: `Expected Result:
Landscape video automatically converted to vertical format. Smart reframing preserves the main content without cropping it out.`,
      },
    ],
    alternativeSlugs: ["capcut", "runway", "descript"],
  },

  // ─────────────────────────────────────────────
  // 12. PIKA
  // ─────────────────────────────────────────────
  pika: {
    longDescEN: `Pika is an AI-powered video platform designed for short-form video generation from text and visual style experimentation. With its easy-to-use interface and rapid generation capabilities, it has gained popularity especially among social media content creators.

With Pika 1.5 and later versions, significant quality improvements were made. Core features like image-to-video, text-to-video, and style application on existing videos provide a sufficient toolset for producing short, impactful social media content.

It's ideal not for long, complex video productions, but for fast and eye-catching short content. It offers a simpler and more accessible user experience compared to competitors like Runway or Luma Dream Machine.`,
    features: [
      { icon: "⚡", title: "Fast Video Generation", desc: "Generates short videos from text in seconds." },
      { icon: "🎨", title: "Style Application", desc: "Applies different artistic styles to existing videos." },
      { icon: "🖼️", title: "Image to Video", desc: "Converts a still image into a short animation." },
      { icon: "🎭", title: "Effect Library", desc: "Ready-made effects and transition options." },
      { icon: "📱", title: "Social Media Focused", desc: "Optimized for short format and platform-compatible output." },
      { icon: "🔄", title: "Video Extension", desc: "Extend existing video with AI." },
    ],
    forWhom: [
      { icon: "📱", label: "TikTok & Reels creators" },
      { icon: "🎨", label: "Creative experimenters" },
      { icon: "📣", label: "Social media managers" },
      { icon: "🛍️", label: "E-commerce & product promotion" },
      { icon: "🎓", label: "Beginners" },
      { icon: "💼", label: "Small businesses" },
    ],
    pricing: [
      { plan: "Free",      price: "$0 / mo",  note: "Limited generations" },
      { plan: "Basic",     price: "$8 / mo",  note: "700 credits/month" },
      { plan: "Standard",  price: "$28 / mo", note: "2,000 credits/month" },
      { plan: "Unlimited", price: "$78 / mo", note: "Unlimited generation" },
    ],
    pros: [
      "Very easy and fast to use",
      "Ideal format for social media",
      "Affordable starter plan",
      "Style applications are fun",
    ],
    cons: [
      "Long video generation not possible",
      "Less professional control than Runway",
      "Quality drops with complex scenes",
    ],
    prompts: [
      {
        label: "🎬 Product Promo Video",
        prompt: "A luxury perfume bottle on a marble surface, rose petals falling in slow motion, golden light, elegant and cinematic",
        output: `Expected Output:
Perfume bottle on marble, rose petals falling in slow motion, golden light effect. 3–4 second luxury product clip. Ideal format for Instagram or TikTok.`,
      },
      {
        label: "🖼️ Animate a Photo",
        prompt: "Upload photo → 'gentle breeze moving through the hair, soft smile' → Generate",
        output: `Expected Output:
Hair gently sways in the still portrait photo, lips shift into a smiling expression. Natural and fluid animation.`,
      },
      {
        label: "🎨 Style Transformation",
        prompt: "Upload video → Style → 'watercolor painting, soft edges, artistic' → Apply",
        output: `Expected Output:
Normal video is stylized with a watercolor painting effect. Soft edges, pastel colors. A beautiful effect for artistic social media content.`,
      },
    ],
    alternativeSlugs: ["runway", "capcut", "luma-dream-machine"],
  },

  // ─────────────────────────────────────────────
  // 13. LUMA DREAM MACHINE
  // ─────────────────────────────────────────────
  "luma-dream-machine": {
    longDescEN: `Luma Dream Machine is an AI platform developed by Luma AI, focused on cinematic-quality video generation. It can generate video from both text and images, and stands out particularly for camera movements, lighting quality, and motion fluidity.

With the Ray2 model, Luma Dream Machine rose to become one of the most powerful video generation models of 2025. It can produce impressive results for photorealistic human figures, complex scene transitions, and natural camera movements.

It's a powerful tool for content creators, ad producers, and film productions aiming for a cinematic narrative language. Its user-friendly web interface makes it possible to achieve professional-level output without technical knowledge.`,
    features: [
      { icon: "🎬", title: "Cinematic Quality", desc: "Stands out for high-quality camera movements and lighting effects." },
      { icon: "📸", title: "Image to Video", desc: "Generates fluid and realistic video from a photograph." },
      { icon: "🎭", title: "Camera Control", desc: "Supports pan, tilt, zoom, and orbit camera movements." },
      { icon: "👤", title: "Human Figures", desc: "Strong at realistic human movement and facial expressions." },
      { icon: "🔄", title: "Video Extension", desc: "Extend a generated video with AI." },
      { icon: "🌐", title: "API Access", desc: "API integration available for developers." },
    ],
    forWhom: [
      { icon: "🎬", label: "Film & ad producers" },
      { icon: "📣", label: "Brand video content" },
      { icon: "🎨", label: "Creative directors" },
      { icon: "📸", label: "Photographers (to animate photos)" },
      { icon: "🏢", label: "Agencies & production companies" },
      { icon: "💻", label: "Developers & product teams" },
    ],
    pricing: [
      { plan: "Free",     price: "$0 / mo",     note: "30 generations/month, no watermark" },
      { plan: "Standard", price: "$29.99 / mo",  note: "120 generations/month" },
      { plan: "Plus",     price: "$99.99 / mo",  note: "400 generations/month, priority" },
      { plan: "Pro",      price: "$499.99 / mo", note: "2,000 generations/month" },
    ],
    pros: [
      "Cinematic quality and fluid camera movements",
      "Strong for human figure generation",
      "No watermark on free plan",
      "High image-to-video quality",
    ],
    cons: [
      "Low monthly generation limit on free plan",
      "Paid plans are expensive",
      "Detailed prompt control is limited",
    ],
    prompts: [
      {
        label: "🌅 Cinematic Scene",
        prompt: "A lone lighthouse on rocky cliffs at stormy sea, dramatic waves crashing, dark clouds, cinematic lighting, slow push-in camera movement, photorealistic",
        output: `Expected Output:
Lighthouse on rocky cliffs with stormy sea, crashing waves, dramatic clouds. Slow push-in camera movement with a cinematic feel. Film trailer quality output.`,
      },
      {
        label: "👤 Portrait Animation",
        prompt: "Upload portrait photo → 'person slowly turns head, gentle smile, soft bokeh background, natural lighting' → Generate",
        output: `Expected Output:
The person in the portrait slowly turns their head, a gentle smile forms, soft bokeh background. Professional look for social media or promotional content.`,
      },
      {
        label: "🏙️ City Time-lapse",
        prompt: "Aerial view of a city at night, bridge lights reflecting on water, time-lapse style, stars moving, cinematic, 4K",
        output: `Expected Output:
Aerial night city view, bridge lights reflected on water, accelerated cloud movement. Cinematic output at promotional film quality.`,
      },
    ],
    alternativeSlugs: ["runway", "pika", "capcut"],
  },

  // ─────────────────────────────────────────────
  // 14. ELEVENLABS
  // ─────────────────────────────────────────────
  elevenlabs: {
    longDescEN: `ElevenLabs is an AI platform offering industry-leading technology in text-to-speech and voice cloning. The naturalness and proximity to human voice of its generated audio is unrivaled in the market.

The platform's most remarkable feature is its voice cloning capability. With just a few minutes of audio recording, it's possible to clone a person's voice and have different texts read in that voice. This gives content creators the ability to scale their own voices.

High-quality voice generation is available in 30+ languages. It is widely used for podcast narration, YouTube video voiceover, ad dubbing, e-learning, and audiobook production. API access makes it easy to integrate into applications.`,
    features: [
      { icon: "🎙️", title: "Natural Voice Generation", desc: "Offers the most human-like text-to-speech quality in the industry." },
      { icon: "👤", title: "Voice Cloning", desc: "Clone any voice with just a few minutes of recording." },
      { icon: "🌍", title: "30+ Language Support", desc: "High-quality output in many languages." },
      { icon: "🎭", title: "Extensive Voice Library", desc: "Choose from hundreds of ready-made voices and tones." },
      { icon: "⚙️", title: "Voice Controls", desc: "Fine control over tone, speed, pauses, and emphasis." },
      { icon: "🔗", title: "API Integration", desc: "Easily integrates into applications and workflows." },
    ],
    forWhom: [
      { icon: "🎙️", label: "Podcast creators" },
      { icon: "📹", label: "YouTube & video content creators" },
      { icon: "📚", label: "Audiobooks & e-learning content" },
      { icon: "📣", label: "Ad & brand voiceovers" },
      { icon: "💻", label: "Developers & app builders" },
      { icon: "🌍", label: "Localization & translation projects" },
    ],
    pricing: [
      { plan: "Free",    price: "$0 / mo",   note: "10,000 chars/month, limited voices" },
      { plan: "Starter", price: "$5 / mo",   note: "30,000 chars/month" },
      { plan: "Creator", price: "$22 / mo",  note: "100,000 chars/month, voice cloning" },
      { plan: "Pro",     price: "$99 / mo",  note: "500,000 chars/month" },
    ],
    pros: [
      "Industry's most natural and high-quality TTS",
      "Impressive voice cloning capability",
      "Broad language support",
      "Easy API integration",
      "Extensive ready-made voice library",
    ],
    cons: [
      "Low character limit on free plan",
      "Voice cloning requires paid plans",
      "Ethical use requires caution",
    ],
    prompts: [
      {
        label: "🎙️ Podcast Narration",
        prompt: "Enter text → Select voice: 'English Male - Professional' → Speed: 0.95 → Pause: Medium → Generate → Download MP3",
        output: `Expected Output:
Professional narration voice reading with natural intonation. Natural pauses based on punctuation. Ready MP3 for podcast intro or episode narration.`,
      },
      {
        label: "📹 Video Voiceover",
        prompt: "Paste script → Voice: 'Energetic Female' → Speed: 1.05 → Stability: 0.7 → Clarity: 0.8 → Generate",
        output: `Expected Output:
Energetic, clear, and professional female voice. Suitable for YouTube or ad videos. Import the audio file into your video editor and sync with your footage.`,
      },
      {
        label: "🌍 Multilingual Content",
        prompt: "Translate the text to French, German, and Spanish (using ChatGPT) → Select a native-sounding voice for each language in ElevenLabs → Generate separately",
        output: `Expected Output:
Same content produced in 4 different languages, each with a native-sounding voice. Massive cost and time savings for a localization project.`,
      },
    ],
    alternativeSlugs: ["murf-ai", "descript", "whisper"],
  },

  // ─────────────────────────────────────────────
  // 15. DESCRIPT
  // ─────────────────────────────────────────────
  descript: {
    longDescEN: `Descript is an innovative platform that reduces audio and video editing to the simplicity of a word processor. Its core approach is to first transcribe audio or video into text, then modify the audio or video by editing the transcript.

This method is a revolutionary convenience especially for podcast creators and video content producers. Deleting filler words like "uh" and "um" in one click, removing a sentence from the video by deleting it from the transcript, or finding a specific section from the transcript — all can be done in seconds.

The Overdub feature lets you clone your own voice to fix mispronounced words simply by typing. Studio Sound can elevate low-quality audio to professional studio quality. It's one of the most time-saving tools for podcast and video content production.`,
    features: [
      { icon: "📝", title: "Transcript-Based Editing", desc: "Edit the text to change the audio or video accordingly." },
      { icon: "🗑️", title: "Filler Word Removal", desc: "Clean up 'uh', 'um', and similar fillers in one click." },
      { icon: "🎙️", title: "Overdub (Voice Cloning)", desc: "Fix mispronounced words by typing with your cloned voice." },
      { icon: "🔊", title: "Studio Sound", desc: "Elevate home recording audio to studio quality." },
      { icon: "✂️", title: "Screen Recording", desc: "Record and edit your screen directly within the platform." },
      { icon: "👥", title: "Team Collaboration", desc: "Multiple people can work on the same project simultaneously." },
    ],
    forWhom: [
      { icon: "🎙️", label: "Podcast creators" },
      { icon: "📹", label: "YouTube content creators" },
      { icon: "🎓", label: "Online courses & educational content" },
      { icon: "💼", label: "Corporate communication teams" },
      { icon: "📣", label: "Marketing & video production" },
      { icon: "👥", label: "Remote media teams" },
    ],
    pricing: [
      { plan: "Free",      price: "$0 / mo",  note: "1 hour transcript/month, watermark" },
      { plan: "Hobbyist",  price: "$19 / mo", note: "10 hours/month, overdub included" },
      { plan: "Creator",   price: "$35 / mo", note: "30 hours/month, all features" },
      { plan: "Business",  price: "$50 / mo", note: "Team & priority support" },
    ],
    pros: [
      "Transcript-based editing is extremely practical",
      "Overdub voice correction is unique",
      "Studio Sound significantly improves audio quality",
      "Huge time savings for podcast production",
    ],
    cons: [
      "Very low limit on free plan",
      "Advanced video effects are limited",
      "Transcript accuracy varies with accent and noise",
    ],
    prompts: [
      {
        label: "🎙️ Podcast Editing",
        prompt: "Upload audio → Generate transcript → 'Remove filler words' → Select off-topic sections in transcript and delete → Export",
        output: `Expected Result:
60-minute raw podcast recording trimmed to 45 minutes. Filler words like 'uh', 'you know', 'like' removed. Transcript synchronized with the edit.`,
      },
      {
        label: "🔊 Audio Quality Enhancement",
        prompt: "Import audio file → Effects → Studio Sound → Level: High → Preview → Apply → Export",
        output: `Expected Result:
Audio recorded in a home environment elevated to studio quality. Background noise eliminated, voice became clearer and more balanced.`,
      },
      {
        label: "📝 Overdub Correction",
        prompt: "Select the mispronounced word in the transcript → Overdub → Type the correct word → Automatically replaced with your voice clone",
        output: `Expected Result:
'2024' was accidentally said as '2025'. Change it in the transcript — the overdub feature re-generates that segment with your voice clone. No need to re-record.`,
      },
    ],
    alternativeSlugs: ["elevenlabs", "veed", "whisper"],
  },

  // ─────────────────────────────────────────────
  // 16. WHISPER
  // ─────────────────────────────────────────────
  whisper: {
    longDescEN: `Whisper is an open-source speech-to-text model developed by OpenAI. Trained on 680,000 hours of multilingual audio data, it is one of the strongest tools in the industry for transcription accuracy.

Supporting 99 languages, Whisper demonstrates high accuracy even in challenging conditions — background noise, accents, and fast speech. Its open-source nature means it can be run completely locally and for free.

It is widely used for meeting notes, interview transcripts, video subtitle generation, and multilingual content processing. Technical users can integrate it directly via Python, while third-party applications with user-friendly interfaces make it usable without any technical knowledge.`,
    features: [
      { icon: "🎯", title: "High Accuracy", desc: "Strong transcription even in noisy environments and with accents." },
      { icon: "🌍", title: "99 Language Support", desc: "Transcription and translation across a wide language range." },
      { icon: "🔓", title: "Open Source & Free", desc: "Run locally on your machine completely for free." },
      { icon: "📁", title: "Multiple Format Support", desc: "Processes MP3, MP4, WAV, M4A, and other audio formats." },
      { icon: "🔗", title: "API & Python Integration", desc: "Easily integrates into applications and workflows." },
      { icon: "📝", title: "Subtitle Output", desc: "Generates time-stamped subtitle files in SRT and VTT formats." },
    ],
    forWhom: [
      { icon: "💻", label: "Developers & technical users" },
      { icon: "🎙️", label: "Podcast & interview creators" },
      { icon: "🏢", label: "Teams taking meeting notes" },
      { icon: "📹", label: "Video content creators" },
      { icon: "🔬", label: "Researchers & academics" },
      { icon: "🌍", label: "Multilingual project owners" },
    ],
    pricing: [
      { plan: "Open Source",       price: "Free",        note: "Unlimited on your own server" },
      { plan: "OpenAI API",        price: "$0.006/min",  note: "Cloud-based, scalable" },
      { plan: "Third-Party Tools", price: "Varies",      note: "User-friendly interfaces" },
      { plan: "Enterprise",        price: "Custom",      note: "High volume and support" },
    ],
    pros: [
      "Open source and completely free for local use",
      "High accuracy in 99 languages",
      "Strong in noisy environments",
      "SRT subtitle output",
      "Easy API integration",
    ],
    cons: [
      "Direct use requires technical knowledge",
      "Real-time transcription is limited",
      "No GUI — a third-party tool may be needed",
    ],
    prompts: [
      {
        label: "🐍 Basic Python Usage",
        prompt: `import whisper
model = whisper.load_model("medium")
result = model.transcribe("meeting.mp3", language="en")
print(result["text"])`,
        output: `Expected Output:
"...we'll be discussing the project updates today. First item: marketing campaign results. Last month we achieved 18% growth and..."

Note: "medium" model offers a good balance. Use "large-v3" for higher accuracy.`,
      },
      {
        label: "📝 SRT Subtitle Generation",
        prompt: `result = model.transcribe("video.mp4", language="en", word_timestamps=True)
from whisper.utils import get_writer
writer = get_writer("srt", ".")
writer(result, "video.mp4")`,
        output: `Expected Output (video.srt):
1
00:00:00,000 --> 00:00:03,500
Hello, today we're looking at AI tools.

2
00:00:03,500 --> 00:00:07,200
Our first tool is OpenAI's Whisper model.`,
      },
      {
        label: "🌍 Language Translation",
        prompt: `# Translate speech from any language to English text
result = model.transcribe("speech.mp3", task="translate")
print(result["text"])  # Direct English output`,
        output: `Expected Output:
"Hello, today we are examining artificial intelligence tools. Our first tool is OpenAI's Whisper model..."

Note: The translate task converts any language directly to English.`,
      },
    ],
    alternativeSlugs: ["descript", "elevenlabs", "murf-ai"],
  },

  // ─────────────────────────────────────────────
  // 17. PERPLEXITY
  // ─────────────────────────────────────────────
  perplexity: {
    longDescEN: `Perplexity AI is an AI-powered research assistant that, as an alternative to traditional search engines returning link lists, provides sourced summary answers. Its direct citation of sources used when answering questions makes it easy to track information accuracy.

The platform's most important feature is its real-time web access for up-to-date information. It provides a significant advantage over ChatGPT or Claude for current news, academic research, technical topics, and quick topic summarization.

The Pro plan also features multi-model support, allowing you to choose between Claude, GPT-4o, and Perplexity's own models. It continues to be a powerful daily tool for researchers, journalists, students, and anyone working with information-intensive tasks.`,
    features: [
      { icon: "🔍", title: "Sourced Answers", desc: "Backs every piece of information with source citations for easy verification." },
      { icon: "🌐", title: "Real-Time Web Access", desc: "Instant access to current news and web content." },
      { icon: "🤖", title: "Multi-Model Support", desc: "Pro plan lets you choose GPT-4o, Claude, and more." },
      { icon: "📚", title: "Academic Mode", desc: "Research mode focused on academic sources." },
      { icon: "📁", title: "File Upload", desc: "Upload PDFs or documents to ask content-specific questions." },
      { icon: "🔗", title: "Source Discovery", desc: "Lists related sources and deep-dive reading recommendations." },
    ],
    forWhom: [
      { icon: "🔬", label: "Researchers & academics" },
      { icon: "📰", label: "Journalists & editors" },
      { icon: "🎓", label: "Students" },
      { icon: "💼", label: "Strategy & analysis professionals" },
      { icon: "💻", label: "Developers (technical research)" },
      { icon: "📈", label: "Investors & business analysts" },
    ],
    pricing: [
      { plan: "Free",       price: "$0 / mo",  note: "5 Pro searches/day" },
      { plan: "Pro",        price: "$20 / mo", note: "Unlimited Pro searches, multi-model" },
      { plan: "Team",       price: "$40 / mo", note: "Team management and sharing" },
      { plan: "Enterprise", price: "Custom",   note: "Enterprise security and support" },
    ],
    pros: [
      "Sourced and verifiable answers",
      "Real-time web access",
      "Powerful for academic research",
      "Multi-model support (Pro)",
      "Fast and concise answers",
    ],
    cons: [
      "Limited for long-form creative text generation",
      "Daily Pro search limit on free plan",
      "Not as versatile as ChatGPT",
    ],
    prompts: [
      {
        label: "🔍 Current Research",
        prompt: "How have AI investments in the US changed in the 2025–2026 period? Bring the most current data with sources.",
        output: `Expected Output:
[Source 1: TechCrunch, 2025] AI startup investments in the US rose 38% in 2025 to $85 billion.
[Source 2: Bloomberg, 2026] Domestic AI companies broke records in attracting foreign investment...

Each sentence is matched with its source — very easy to verify.`,
      },
      {
        label: "📚 Academic Summary",
        prompt: "Explain the 'hallucination' problem in large language models. Summarize research from the last 2 years. [Academic sources preferred]",
        output: `Expected Output:
Hallucination refers to LLMs producing information that is false but appears plausible.
[arXiv, 2024] Researchers reduced hallucination rate by 40% using RAG (Retrieval-Augmented Generation).
[Nature MI, 2025] Chain-of-thought prompting showed a 23% accuracy improvement...`,
      },
      {
        label: "💼 Market Analysis",
        prompt: "Who are ChatGPT's competitors? Summarize AI assistant market shares and key developments in 2026 with sources.",
        output: `Expected Output:
[Statista, 2026] ChatGPT leads with 45%, Google Gemini at 28%, Claude at 15%.
[TechRadar, 2026] Gemini's Google Workspace integration is driving rapid growth in the enterprise segment...`,
      },
    ],
    alternativeSlugs: ["chatgpt", "claude", "google-gemini"],
  },

  // ─────────────────────────────────────────────
  // 18. NOTION AI
  // ─────────────────────────────────────────────
  "notion-ai": {
    longDescEN: `Notion AI is an AI assistant integrated into Notion, the note-taking and project management platform used by millions. Instead of using an external tool, it means getting AI support directly within the space where you're already working.

The platform's power comes from its ability to work with your existing Notion content. You can summarize a meeting note on the page, directly edit a project document, expand a to-do list, or generate content from a blank page — all within the same interface.

Notion AI is positioned not as a full-fledged writing assistant but as a helper that accelerates existing workflows. For individuals and teams who actively use Notion, the value proposition is immediately apparent.`,
    features: [
      { icon: "🔗", title: "In-Notion Integration", desc: "Works as an AI assistant directly within existing Notion pages." },
      { icon: "✍️", title: "Content Generation", desc: "Creates blogs, reports, or content plans from a blank page." },
      { icon: "📝", title: "Summarization", desc: "Summarizes long pages or meeting notes concisely." },
      { icon: "✏️", title: "Writing Enhancement", desc: "Tone adjustment, grammar correction, and rewriting." },
      { icon: "📋", title: "Action Items", desc: "Automatically extracts action items from content." },
      { icon: "🌍", title: "Translation", desc: "Translates content directly into different languages." },
    ],
    forWhom: [
      { icon: "📋", label: "Active Notion users" },
      { icon: "🏢", label: "Project managers & teams" },
      { icon: "✍️", label: "Content and document creators" },
      { icon: "🎓", label: "Students & academics" },
      { icon: "💼", label: "Remote working professionals" },
      { icon: "🚀", label: "Startup teams" },
    ],
    pricing: [
      { plan: "Notion Free",   price: "$0 / mo",  note: "Limited AI features" },
      { plan: "AI Add-on",     price: "$10 / mo", note: "Added to existing plan" },
      { plan: "Plus + AI",     price: "$18 / mo", note: "Notion Plus included" },
      { plan: "Business + AI", price: "$25 / mo", note: "Team and admin features" },
    ],
    pros: [
      "Seamless integration with existing Notion workflows",
      "Powerful with team collaboration",
      "Contextual work with Notion page content",
      "Very practical for summarizing and editing tasks",
    ],
    cons: [
      "No value for those who don't use Notion",
      "Falls short as a standalone AI tool",
      "Requires an additional monthly fee",
      "Doesn't go as deep as ChatGPT",
    ],
    prompts: [
      {
        label: "📝 Meeting Summary",
        prompt: "Take meeting notes in Notion → Select the page → AI → 'Summarize this page in 5 bullet points and extract action items'",
        output: `Expected Output:
Summary:
• Q3 targets 87% complete, missing: SEO campaign
• New customer onboarding process needs updating
• Budget revision: +2 freelancers for design team

Action Items:
☐ Alex: Deliver SEO audit report by March 15
☐ Sara: Update onboarding checklist`,
      },
      {
        label: "✍️ Blog Draft",
        prompt: "Blank Notion page → AI → 'Write an 800-word blog post on AI tools and productivity. Tone: friendly and informative.'",
        output: `Expected Output:
# How AI Tools Transform Your Productivity

In 2026, AI tools have moved from luxury to necessity. Every day, millions of professionals are using tools like ChatGPT, Notion AI, and Perplexity to...

[Directly editable format within Notion]`,
      },
      {
        label: "🌍 Content Translation",
        prompt: "English page → AI → 'Translate this content into Spanish, use professional tone'",
        output: `Expected Output:
Content is translated to Spanish on the same Notion page or in new blocks. Formatting is preserved — headings and bullet points stay in place.`,
      },
    ],
    alternativeSlugs: ["chatgpt", "perplexity", "claude"],
  },

  // ─────────────────────────────────────────────
  // 19. GRAMMARLY
  // ─────────────────────────────────────────────
  grammarly: {
    longDescEN: `Grammarly is one of the world's most widely used writing assistant platforms with over 30 million daily active users. It goes beyond grammar and spelling checks to offer tone analysis, clarity suggestions, plagiarism detection, and AI-powered rewriting.

The platform's greatest strength is its ability to work in almost every writing environment through a browser extension, desktop app, and Microsoft Office add-in. It checks everything you write in real time across Gmail, Slack, Google Docs, Word, and social media platforms.

With unmatched depth in English writing, Grammarly is an indispensable tool for anyone who requires professional English communication. Grammarly Business also makes it possible to maintain writing quality and brand tone consistency across an entire team.`,
    features: [
      { icon: "✅", title: "Grammar & Spelling", desc: "Real-time error detection and correction suggestions." },
      { icon: "🎭", title: "Tone Analysis", desc: "Analyzes the tone of your writing (formal, friendly, assertive, etc.)." },
      { icon: "💡", title: "Clarity Suggestions", desc: "Offers suggestions to simplify complex sentences." },
      { icon: "🔄", title: "AI Rewriting", desc: "Rewrites selected text in different tones and styles." },
      { icon: "🔌", title: "Universal Integration", desc: "Works in Gmail, Word, Slack, and 500,000+ apps." },
      { icon: "📊", title: "Writing Analytics", desc: "Provides weekly writing summaries and improvement reports." },
    ],
    forWhom: [
      { icon: "💼", label: "Professionals & business people" },
      { icon: "🎓", label: "Students & academics" },
      { icon: "✍️", label: "Content writers & copywriters" },
      { icon: "🌍", label: "Non-native English speakers" },
      { icon: "📣", label: "Marketing teams" },
      { icon: "🏢", label: "Corporate communications departments" },
    ],
    pricing: [
      { plan: "Free",       price: "$0 / mo",  note: "Basic grammar and spelling" },
      { plan: "Premium",    price: "$12 / mo", note: "Tone, clarity, plagiarism" },
      { plan: "Business",   price: "$15 / mo", note: "Team management, style guide" },
      { plan: "Enterprise", price: "Custom",   note: "SSO, advanced administration" },
    ],
    pros: [
      "Integration with 500,000+ apps",
      "Tone and clarity analysis are very valuable",
      "Free plan covers basic needs",
      "Weekly improvement report is motivating",
    ],
    cons: [
      "Primarily English-focused",
      "Limited support for other languages",
      "Premium plans can feel expensive",
      "Sometimes overly aggressive correction suggestions",
    ],
    prompts: [
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
  },

  // ─────────────────────────────────────────────
  // 20. QUILLBOT
  // ─────────────────────────────────────────────
  quillbot: {
    longDescEN: `QuillBot is an AI writing tool specializing in paraphrasing, summarizing, and grammar checking. It is widely used among users who need to restate existing texts for academic writing, content creation, or other purposes.

The paraphrase tool's 8 different modes (Standard, Fluency, Formal, Academic, Simple, Creative, Expand, Shorten) allow users to choose between different rewriting styles depending on their needs. This flexibility makes QuillBot a versatile writing assistant.

The summarization feature is a powerful tool for quickly condensing long academic papers or reports. The Chrome extension also makes it possible to paraphrase any text on the web directly.`,
    features: [
      { icon: "🔄", title: "8 Paraphrase Modes", desc: "Choose from Standard, Academic, Creative, Short, Long, and more." },
      { icon: "📝", title: "Summarization", desc: "Summarizes long texts as bullet points or paragraphs." },
      { icon: "✅", title: "Grammar Check", desc: "Detects and corrects English grammar errors." },
      { icon: "🌍", title: "Translation", desc: "Translation feature in 30+ languages." },
      { icon: "🔌", title: "Chrome Extension", desc: "Paraphrase any text on the web directly." },
      { icon: "🤝", title: "Word & Google Docs", desc: "Integration with Microsoft Word and Google Docs." },
    ],
    forWhom: [
      { icon: "🎓", label: "Students & academics" },
      { icon: "✍️", label: "Content writers" },
      { icon: "🌍", label: "Non-native English speakers" },
      { icon: "📰", label: "Editors & copywriters" },
      { icon: "💼", label: "Professional correspondence writers" },
      { icon: "🏪", label: "E-commerce product description writers" },
    ],
    pricing: [
      { plan: "Free",     price: "$0 / mo",   note: "125-word limit, 3 paraphrase modes" },
      { plan: "Premium",  price: "$9.95 / mo", note: "Unlimited, all modes, plagiarism" },
      { plan: "Premium+", price: "$15.95 / mo", note: "+ AI Humanizer included" },
      { plan: "Teams",    price: "$7.50 / mo", note: "Per person, team plan" },
    ],
    pros: [
      "8 paraphrase modes provide flexibility",
      "Basic use possible on free plan",
      "Strong for academic writing",
      "Chrome extension is very practical",
    ],
    cons: [
      "Word limit on free plan is restrictive",
      "Weak support for non-English languages",
      "Not ideal for producing highly original or creative content",
    ],
    prompts: [
      {
        label: "🔄 Academic Paraphrasing",
        prompt: "Paste text → Mode: Academic → Paraphrase → Manually adjust synonym alternatives → Copy",
        output: `Original: 'AI tools are changing how people work and communicate.'
Academic Mode: 'Artificial intelligence applications are fundamentally transforming contemporary professional workflows and interpersonal communication paradigms.'

Tip: Click on yellow-highlighted words to see synonym alternatives.`,
      },
      {
        label: "📝 Article Summary",
        prompt: "Open Summarizer → Paste article text (max 6,000 words) → Key Sentences mode → Summarize",
        output: `Expected Output (bullet summary):
• Global AI sector investment reached $150 billion in 2025
• Healthcare and education are the fastest-growing AI application areas
• Regulatory frameworks still lag behind technology
• Workforce transformation is exceeding expectations`,
      },
      {
        label: "✏️ Rewriting Modes",
        prompt: "Try the same sentence in 3 different modes: Standard → Formal → Creative",
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
    longDescEN: `Jasper is an enterprise-level AI content generation platform specialized for marketing and advertising teams. Unlike general-purpose AI tools, it focuses on brand voice consistency, multi-channel content generation, and marketing workflows.

The Brand Voice feature allows you to teach the system your company's tone and language guide, so all content is produced in line with your brand identity. This is critically valuable for large teams and organizations with multiple content creators.

It offers ready-made templates and workflows for various marketing formats including landing page copy, email campaigns, social media content, product descriptions, and SEO blog posts. It provides significant productivity gains for marketing teams that require high-volume content production.`,
    features: [
      { icon: "🎯", title: "Brand Voice", desc: "Teach the system your brand voice — all content adapts automatically." },
      { icon: "📣", title: "Marketing Templates", desc: "100+ ready-made templates for marketing formats." },
      { icon: "🔍", title: "SEO Mode", desc: "SEO-optimized content generation with Surfer SEO integration." },
      { icon: "👥", title: "Team Collaboration", desc: "Multiple users, content approval workflows, and management panel." },
      { icon: "🌐", title: "Multilingual Content", desc: "Content generation in 30+ languages." },
      { icon: "🤖", title: "Jasper Chat", desc: "Content generation via a ChatGPT-like chat interface." },
    ],
    forWhom: [
      { icon: "📣", label: "Marketing teams & directors" },
      { icon: "✍️", label: "Copywriters & content managers" },
      { icon: "🏢", label: "Large and mid-size companies" },
      { icon: "🛍️", label: "E-commerce & DTC brands" },
      { icon: "🏭", label: "Agencies (multi-client management)" },
      { icon: "📊", label: "Growth-focused startups" },
    ],
    pricing: [
      { plan: "Creator",  price: "$39 / mo",  note: "1 brand voice, 1 user" },
      { plan: "Pro",      price: "$59 / mo",  note: "3 brand voices, 5 users" },
      { plan: "Business", price: "Custom",    note: "Unlimited brand voices, custom integration" },
      { plan: "API",      price: "Usage-based", note: "For developers" },
    ],
    pros: [
      "Unique brand voice consistency",
      "Very rich marketing-focused templates",
      "Powerful Surfer SEO integration",
      "Team management features",
    ],
    cons: [
      "Significantly more expensive than ChatGPT",
      "High cost for small businesses",
      "ChatGPT is more flexible for general AI tasks",
    ],
    prompts: [
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
  },

  // ─────────────────────────────────────────────
  // 22. GITHUB COPILOT
  // ─────────────────────────────────────────────
  copilot: {
    longDescEN: `GitHub Copilot is an AI-powered code assistant developed through a Microsoft and OpenAI partnership, used by software developers within their IDE. The model, trained on millions of code repositories on GitHub, demonstrates strong performance in context-aware code completion, function suggestions, and full file writing.

Providing seamless integration with VS Code, JetBrains, Vim, and other popular IDEs, Copilot offers real-time line or block-level code suggestions as you type. It significantly reduces prototyping speed, the learning curve for new languages or libraries, and repetitive code writing processes.

With GitHub Copilot Chat, you can ask questions in natural language from within the IDE to get code explanations, bug identification, and refactoring suggestions. It's a critical productivity tool especially for teams working on large codebases.`,
    features: [
      { icon: "💡", title: "Real-Time Code Completion", desc: "Context-aware line and block suggestions as you type." },
      { icon: "💬", title: "Copilot Chat", desc: "Ask questions in natural language inside the IDE for explanations and refactoring." },
      { icon: "🔌", title: "Broad IDE Support", desc: "Integration with VS Code, JetBrains, Neovim, and more." },
      { icon: "🔍", title: "Bug Analysis", desc: "Analyzes code to suggest potential issues and improvements." },
      { icon: "📝", title: "Test Generation", desc: "Automatically generates unit tests for your code." },
      { icon: "🌐", title: "Multi-Language Support", desc: "Python, JavaScript, TypeScript, Go, Rust, and more." },
    ],
    forWhom: [
      { icon: "💻", label: "Software developers" },
      { icon: "🔬", label: "Backend & frontend engineers" },
      { icon: "🚀", label: "Rapid prototypers" },
      { icon: "🎓", label: "Programming learners" },
      { icon: "🏢", label: "Software development teams" },
      { icon: "🔧", label: "DevOps & SRE engineers" },
    ],
    pricing: [
      { plan: "Individual",  price: "$10 / mo",  note: "Individual developer" },
      { plan: "Business",    price: "$19 / mo",  note: "Team management, policy control" },
      { plan: "Enterprise",  price: "$39 / mo",  note: "Custom model, security" },
      { plan: "Free",        price: "$0",         note: "Students & open source projects" },
    ],
    pros: [
      "Very powerful real-time code completion",
      "Deep integration with the GitHub ecosystem",
      "Test generation saves time",
      "Broad programming language support",
      "Free for students",
    ],
    cons: [
      "Can occasionally suggest incorrect or outdated code",
      "Paid — can be costly for small projects",
      "Generated code still requires security review",
    ],
    prompts: [
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
  },

  // ─────────────────────────────────────────────
  // 23. CURSOR
  // ─────────────────────────────────────────────
  cursor: {
    longDescEN: `Cursor is a modern development environment where AI is fully integrated into the code editor. Built as a VS Code fork, it supports all VS Code extensions and settings while adding a powerful AI layer on top.

Cursor's most notable feature is its ability to work by understanding the entire codebase. Rather than working with a single file, it builds context from the whole project to suggest multi-file changes, perform refactoring, and find the root causes of bugs. This is a significant differentiator compared to GitHub Copilot.

With Composer mode, Cursor automatically applies natural language instructions across multiple files, making it one of the strongest representatives of the "AI first" development approach. It was rapidly adopted in the developer community throughout 2024–2025.`,
    features: [
      { icon: "🗂️", title: "Codebase Understanding", desc: "Uses the entire project as context to make multi-file changes." },
      { icon: "🎼", title: "Composer Mode", desc: "Natural language instruction triggers automatic multi-file editing." },
      { icon: "💬", title: "Chat & Inline Edit", desc: "Code generation and explanations inline or via chat panel." },
      { icon: "🔌", title: "VS Code Compatibility", desc: "Fully compatible with all VS Code extensions and settings." },
      { icon: "🔍", title: "Debugging", desc: "Analyzes code to detect errors and suggest fixes." },
      { icon: "🤖", title: "Multi-Model", desc: "Choose between Claude, GPT-4o, and Cursor's own model." },
    ],
    forWhom: [
      { icon: "💻", label: "Full-stack developers" },
      { icon: "🚀", label: "Startup technical founders" },
      { icon: "🔧", label: "Large codebase managers" },
      { icon: "🎓", label: "Programming learners" },
      { icon: "🏢", label: "Software development teams" },
      { icon: "🔬", label: "Research engineers" },
    ],
    pricing: [
      { plan: "Hobby",      price: "$0 / mo",  note: "2,000 completions, 50 slow requests" },
      { plan: "Pro",        price: "$20 / mo", note: "Unlimited completions, 500 fast requests" },
      { plan: "Business",   price: "$40 / mo", note: "Team management, SOC2" },
      { plan: "Enterprise", price: "Custom",   note: "Custom deployment" },
    ],
    pros: [
      "Strong codebase-wide understanding",
      "Composer enables automatic multi-file editing",
      "VS Code compatibility eases migration",
      "Multi-model selection",
    ],
    cons: [
      "Low limit on free plan",
      "Can slow down on very large projects",
      "Suggestions sometimes need verification",
    ],
    prompts: [
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
  },

  // ─────────────────────────────────────────────
  // 24. REPLIT
  // ─────────────────────────────────────────────
  replit: {
    longDescEN: `Replit is a cloud-based development environment that lets you write and run code directly from your browser without any setup. Supporting 50+ programming languages, it's ideal especially for rapid prototyping, learning, and shareable projects.

With the Replit Agent feature, tasks like creating a full project, installing dependencies, and deploying the application can be done automatically based on natural language instructions. This feature has the potential to turn even users who can't code (or barely can) into app owners.

Its instantly ready environment, real-time collaboration, and easily shareable link feature make Replit particularly attractive for educational settings, hackathons, and rapid demo needs.`,
    features: [
      { icon: "🌐", title: "Run from Browser", desc: "No setup — an instantly ready development environment." },
      { icon: "🤖", title: "Replit Agent", desc: "Create and deploy projects with natural language instructions." },
      { icon: "50+", title: "Language Support", desc: "Python, JavaScript, Rust, Go, and 50+ languages." },
      { icon: "👥", title: "Real-Time Collaboration", desc: "Code together simultaneously like Google Docs." },
      { icon: "🚀", title: "Instant Deploy", desc: "Take your project live with one click, share a link." },
      { icon: "🎓", title: "Education Tools", desc: "Special features for teacher-student workflows." },
    ],
    forWhom: [
      { icon: "🎓", label: "Programming learners" },
      { icon: "👨‍🏫", label: "Teachers & educators" },
      { icon: "⚡", label: "Rapid prototypers" },
      { icon: "🏆", label: "Hackathon & competition participants" },
      { icon: "💼", label: "Freelancers & entrepreneurs" },
      { icon: "🔬", label: "Data science & ML experiments" },
    ],
    pricing: [
      { plan: "Starter", price: "$0 / mo",  note: "Core features, public projects" },
      { plan: "Core",    price: "$20 / mo", note: "More power, private projects" },
      { plan: "Teams",   price: "$40 / mo", note: "Team collaboration" },
      { plan: "Cycles",  price: "Usage-based", note: "For Agent and AI features" },
    ],
    pros: [
      "Zero setup — start instantly",
      "Real-time collaboration is excellent",
      "Replit Agent creates prototypes like magic",
      "50+ language and framework support",
      "Sharing and demos are very easy",
    ],
    cons: [
      "Insufficient for complex production applications",
      "Slow performance on free plan",
      "Limited customization compared to local dev environment",
    ],
    prompts: [
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
  },

  // ─────────────────────────────────────────────
  // 25. CANVA
  // ─────────────────────────────────────────────
  canva: {
    longDescEN: `Canva is a template-based design platform that makes it possible to create professional visual content without any graphic design knowledge. With over 150 million active users, it's one of the world's most widely used design tools.

Content creation is possible across a wide format range including social media graphics, presentations, posters, logos, infographics, PDFs, and even video content. The AI-enriched platform continues to be updated with smart features like background removal, text effects, image generation, and automatic design suggestions.

With Canva for Teams, you can create brand kits, shared templates, and team approval workflows. It continues to be the fastest content creation tool in business, education, and social media.`,
    features: [
      { icon: "🎨", title: "Endless Templates", desc: "Millions of ready-made templates for a quick start." },
      { icon: "✂️", title: "Background Removal", desc: "Remove backgrounds with a single click." },
      { icon: "🤖", title: "Magic Studio (AI)", desc: "AI image generation, text effects, and design assistant." },
      { icon: "📹", title: "Video Editing", desc: "Simple video editing and social content preparation." },
      { icon: "🏢", title: "Brand Kit", desc: "Create brand kits for color, font, and logo consistency." },
      { icon: "👥", title: "Team Collaboration", desc: "Real-time co-editing and commenting." },
    ],
    forWhom: [
      { icon: "📣", label: "Social media managers" },
      { icon: "🏪", label: "Small business owners" },
      { icon: "🎓", label: "Teachers & educators" },
      { icon: "💼", label: "Marketing teams" },
      { icon: "✍️", label: "Content creators & bloggers" },
      { icon: "🚀", label: "Entrepreneurs & startups" },
    ],
    pricing: [
      { plan: "Free",       price: "$0 / mo",  note: "Core templates and features" },
      { plan: "Pro",        price: "$15 / mo", note: "Premium templates, magic studio" },
      { plan: "Teams",      price: "$10 / mo", note: "Per person, team features" },
      { plan: "Enterprise", price: "Custom",   note: "Enterprise SSO and support" },
    ],
    pros: [
      "No design knowledge required",
      "Incredibly rich template library",
      "Powerful Magic Studio AI features",
      "Team collaboration is very practical",
      "A lot is possible on the free plan",
    ],
    cons: [
      "Not as much professional control as Adobe tools",
      "Templates can sometimes feel generic",
      "Limited for large-scale brand projects",
    ],
    prompts: [
      {
        label: "📣 Instagram Post",
        prompt: "New Design → Instagram Post (1080x1080) → Magic Studio → 'Summer themed, tropical tones, product campaign visual' → Generate → Edit text",
        output: `Expected Output:
Tropical colors (yellow, orange, green), palm leaf pattern background, central product area. Composition with space for a headline.
Tip: Set your brand kit colors first.`,
      },
      {
        label: "📊 Presentation",
        prompt: "Presentation → Select template → Magic Design → 'AI tools and digital transformation, 10 slides' → Auto-generate content → Edit",
        output: `Expected Output:
10-slide professional presentation:
• Cover slide (title + visual)
• Table of contents
• 7 content slides (data, charts, text balance)
• Closing CTA slide
All slides generated with automatic color and font consistency.`,
      },
      {
        label: "✂️ Background Removal",
        prompt: "Upload image → Edit Image → Remove Background → Add new background or download as transparent",
        output: `Expected Result:
Product photo separated from background. Download as transparent PNG or add a new background within Canva. Very practical for e-commerce product images.`,
      },
    ],
    alternativeSlugs: ["adobe-firefly", "dall-e", "capcut"],
  },

  // ─────────────────────────────────────────────
  // 26. MURF AI
  // ─────────────────────────────────────────────
  "murf-ai": {
    longDescEN: `Murf AI is an AI voice generation platform specializing in converting text into natural, professional-quality audio. Offering a wide voice library with 120+ language and accent options, Murf is a preferred tool especially for corporate voiceovers, e-learning, and marketing content.

The platform's standout feature is providing studio-quality audio production without the need for technical equipment or professional voice actors. The ability to customize voice tone, speed, emphasis, and pauses delivers a natural voiceover experience.

Murf also includes direct video upload and audio-video synchronization features for video voiceovers, making it a comprehensive content production tool.`,
    features: [
      { icon: "🎙️", title: "120+ Language Support", desc: "Wide language and accent range including many global languages." },
      { icon: "🎭", title: "Extensive Voice Library", desc: "200+ voices with different ages, genders, and tones." },
      { icon: "⚙️", title: "Voice Customization", desc: "Fine-tune speed, tone, emphasis, and pauses." },
      { icon: "🎬", title: "Video Voiceover", desc: "Upload a video, add audio, synchronization is automatic." },
      { icon: "🔗", title: "API Integration", desc: "Audio generation that can be integrated into applications." },
      { icon: "📁", title: "Export Options", desc: "High-quality output in MP3 and WAV formats." },
    ],
    forWhom: [
      { icon: "🎓", label: "E-learning content creators" },
      { icon: "📹", label: "Video content producers" },
      { icon: "📣", label: "Marketing & ad teams" },
      { icon: "🏢", label: "Corporate communications teams" },
      { icon: "🌍", label: "Localization projects" },
      { icon: "📚", label: "Audiobook producers" },
    ],
    pricing: [
      { plan: "Free",       price: "$0 / mo",  note: "10 min/month, limited voices" },
      { plan: "Basic",      price: "$19 / mo", note: "60 min/month, 60 voices" },
      { plan: "Pro",        price: "$26 / mo", note: "160 min/month, 120+ voices" },
      { plan: "Enterprise", price: "Custom",   note: "Unlimited, custom integration" },
    ],
    pros: [
      "120+ languages and wide voice selection",
      "Video voiceover integration",
      "Professional corporate-quality voices",
      "User-friendly interface",
    ],
    cons: [
      "Very short limit on free plan (10 min)",
      "No voice cloning as realistic as ElevenLabs",
      "Voice selection in some languages is limited",
    ],
    prompts: [
      {
        label: "🎙️ Promo Video Voice",
        prompt: "Enter text → Voice: 'English Female - Professional' → Speed: Normal → Emphasis: High → Preview → Download",
        output: `Expected Output:
"AI Pusula is a comprehensive guide designed to help you discover the best AI tools..." read with natural intonation and clear pronunciation.
Download as MP3, import into your video editor.`,
      },
      {
        label: "🎬 Video + Voice Sync",
        prompt: "Create project → Upload video → Paste script → Select voice → Auto-synchronize → Export",
        output: `Expected Result:
Video footage and voiceover automatically synchronized. Manual timing adjustment possible if needed. Exportable as MP4.`,
      },
      {
        label: "🌍 Multilingual Voiceover",
        prompt: "Translate English text to French and German → In Murf, select 'French Female' and 'German Male' → Generate → Compare",
        output: `English Version: Professional English female voice
French Version: Native French female voice
German Version: Native German male voice

Tip: You can create and compare multiple language versions within the same project.`,
      },
    ],
    alternativeSlugs: ["elevenlabs", "descript", "whisper"],
  },

  // ─────────────────────────────────────────────
  // 27. YANDEX AI
  // ─────────────────────────────────────────────
  "yandex-ai": {
    longDescEN: `Yandex AI is an AI assistant developed by Yandex, Russia's largest technology company, offering integration with the Yandex ecosystem including Kinopoisk, Yandex Music, and Yandex Maps. It's based on the YandexGPT model.

Particularly strong in Russian and other Slavic and Turkic languages, Yandex AI can offer advantages for content generation, translation, and conversation in these languages. The platform is offered completely free and provides an accessible alternative for basic text generation and Q&A tasks.

It may be valuable in regions where access to Western AI tools is restricted, or for users working with Russian-language content. While its feature set is more limited compared to global AI tools, it stands out as a free option that addresses basic needs.`,
    features: [
      { icon: "💬", title: "Chat Assistant", desc: "Text-based Q&A and conversational support." },
      { icon: "✍️", title: "Content Generation", desc: "Writing text, summarizing, and developing ideas." },
      { icon: "🌍", title: "Russian & Multilingual Support", desc: "Particularly strong language support in Russian." },
      { icon: "🔗", title: "Yandex Ecosystem", desc: "Integration opportunities with Yandex services." },
      { icon: "🆓", title: "Free Access", desc: "Completely free basic usage." },
      { icon: "🔍", title: "Search Integration", desc: "Works in conjunction with Yandex search engine." },
    ],
    forWhom: [
      { icon: "🌍", label: "Russian content creators" },
      { icon: "🔒", label: "Privacy-focused users" },
      { icon: "💰", label: "Those seeking a free alternative" },
      { icon: "🌐", label: "Russian-English translation needs" },
      { icon: "🏢", label: "Yandex ecosystem users" },
      { icon: "🎓", label: "Language learners" },
    ],
    pricing: [
      { plan: "Free",       price: "$0 / mo",    note: "Core features, no registration needed" },
      { plan: "Yandex 360", price: "Varies",     note: "Enterprise Yandex services" },
      { plan: "API",        price: "Usage-based", note: "For developers" },
      { plan: "Enterprise", price: "Custom",     note: "Enterprise integration" },
    ],
    pros: [
      "Completely free basic usage",
      "Strong language support in Russian",
      "Yandex ecosystem integration",
      "No registration required for basic use",
    ],
    cons: [
      "Feature set more limited than ChatGPT or Claude",
      "Weaker global language support",
      "Missing advanced feature set",
      "Very few English resources and community",
    ],
    prompts: [
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
  },
};

// ──────────────────────────────────────────────
// Page Component
// ──────────────────────────────────────────────
export default async function ToolDetailEN({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return notFound();

  const theme = themeBySlug(tool.slug);
  const extra: ToolExtra = extras[slug] ?? {
    longDescEN: tool.detailEN,
    features: [],
    forWhom: [],
    pricing: [{ plan: "Details", price: "—", note: "Check the official site" }],
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
      <Navbar lang="en" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 space-y-10">

          {/* Breadcrumb */}
          <div className="text-sm text-gray-600">
            <Link href="/en" className="hover:underline">Home</Link>{" "}
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
                  <p className="mt-2 text-gray-800/80 text-lg">{tool.taglineEN}</p>
                  <p className="mt-4 text-gray-800 leading-relaxed max-w-2xl">{tool.detailEN}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800">{tCategory("en", tool.category)}</span>
                    <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800">{tPricing("en", tool.pricing)}</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <a href={tool.website} target="_blank" rel="noopener noreferrer"
                  className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition whitespace-nowrap">
                  Visit official site →
                </a>
              </div>
            </div>
          </section>

          {/* ── 2. LONG DESCRIPTION ── */}
          <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-extrabold text-gray-900">What is {tool.name}?</h2>
            <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
              {extra.longDescEN.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* ── 3. FEATURES ── */}
          {extra.features.length > 0 && (
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900">Key Features</h2>
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

          {/* ── 4. WHO IS IT FOR ── */}
          {extra.forWhom.length > 0 && (
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900">Who is {tool.name} ideal for?</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {extra.forWhom.map((fw, i) => (
                  <span key={i} className="flex items-center gap-2 rounded-full border border-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-800">
                    <span>{fw.icon}</span><span>{fw.label}</span>
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* ── 5. PRICING ── */}
          <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-extrabold text-gray-900">Pricing</h2>
            <p className="mt-2 text-gray-500 text-sm">Prices may vary — check the official site for the latest information.</p>
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
                View all plans on the official site →
              </a>
            </div>
          </section>

          {/* ── 6. PROS & CONS ── */}
          {(extra.pros.length > 0 || extra.cons.length > 0) && (
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900">Pros & Cons</h2>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-emerald-500 text-lg">✓</span> Strengths
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
                    <span className="text-rose-400 text-lg">✗</span> Things to Consider
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

          {/* ── 7. EXAMPLE PROMPTS ── */}
          {extra.prompts.length > 0 && (
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900">Example Prompts & Expected Outputs</h2>
              <p className="mt-2 text-gray-500 text-sm">Copy and use these ready-made prompts directly.</p>
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
                      <div className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider mb-2">Expected Output</div>
                      <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{pr.output}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── 8. ALTERNATIVES ── */}
          {alternatives.length > 0 && (
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900">{tool.name} Alternatives</h2>
              <p className="mt-2 text-gray-500 text-sm">Other tools you might consider for similar needs.</p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {alternatives.map((alt) => (
                  <Link key={alt.slug} href={`/en/${alt.slug}`}
                    className="flex items-center gap-3 rounded-2xl border border-black/10 bg-gray-50 p-4 hover:shadow-sm hover:border-black/20 transition group">
                    {alt.logo && (
                      <div className="h-10 w-10 rounded-xl bg-white border border-black/10 flex items-center justify-center overflow-hidden shrink-0">
                        <Image src={alt.logo} alt={alt.name} width={28} height={28} className="object-contain" />
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-sm text-gray-900 group-hover:underline">{alt.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">{alt.taglineEN}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── 9. CTA ── */}
          <section className={`rounded-[32px] border bg-gradient-to-r p-8 shadow-sm text-center ${theme.bg} ${theme.border}`}>
            <h2 className="text-2xl font-extrabold text-gray-900">Get Started with {tool.name}</h2>
            <p className="mt-2 text-gray-700 max-w-xl mx-auto">
              {tool.pricing === "free"
                ? "This tool is completely free — try it right now."
                : tool.pricing === "freemium"
                ? "Start with the free plan and upgrade as needed."
                : "Browse plans on the official site and get started."}
            </p>
            <a href={tool.website} target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-gray-900 text-white px-8 py-3 text-sm font-semibold hover:bg-black transition">
              Go to {tool.name} →
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
