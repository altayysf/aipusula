// data/toolExtras/index.ts
// Tek import noktası. page.tsx'ler sadece buradan import eder.

import type { ToolExtra, ResolvedExtra } from "./types";

import { chatgpt }            from "./chatgpt";
import { claude }             from "./claude";
import { google_gemini }      from "./google-gemini";
import { midjourney }         from "./midjourney";
import { dall_e }             from "./dall-e";
import { stable_diffusion }   from "./stable-diffusion";
import { leonardo_ai }        from "./leonardo-ai";
import { adobe_firefly }      from "./adobe-firefly";
import { runway }             from "./runway";
import { capcut }             from "./capcut";
import { veed }               from "./veed";
import { pika }               from "./pika";
import { luma_dream_machine } from "./luma-dream-machine";
import { elevenlabs }         from "./elevenlabs";
import { descript }           from "./descript";
import { whisper }            from "./whisper";
import { perplexity }         from "./perplexity";
import { notion_ai }          from "./notion-ai";
import { grammarly }          from "./grammarly";
import { quillbot }           from "./quillbot";
import { jasper }             from "./jasper";
import { copilot }            from "./copilot";
import { cursor }             from "./cursor";
import { replit }             from "./replit";
import { canva }              from "./canva";
import { murf_ai }            from "./murf-ai";
import { yandex_ai }          from "./yandex-ai";

export const toolExtras: Record<string, ToolExtra> = {
  "chatgpt":            chatgpt,
  "claude":             claude,
  "google-gemini":      google_gemini,
  "midjourney":         midjourney,
  "dall-e":             dall_e,
  "stable-diffusion":   stable_diffusion,
  "leonardo-ai":        leonardo_ai,
  "adobe-firefly":      adobe_firefly,
  "runway":             runway,
  "capcut":             capcut,
  "veed":               veed,
  "pika":               pika,
  "luma-dream-machine": luma_dream_machine,
  "elevenlabs":         elevenlabs,
  "descript":           descript,
  "whisper":            whisper,
  "perplexity":         perplexity,
  "notion-ai":          notion_ai,
  "grammarly":          grammarly,
  "quillbot":           quillbot,
  "jasper":             jasper,
  "copilot":            copilot,
  "cursor":             cursor,
  "replit":             replit,
  "canva":              canva,
  "murf-ai":            murf_ai,
  "yandex-ai":          yandex_ai,
};

// Dili çöz → bileşenlere geçilecek düz nesne
export function resolveExtra(slug: string, lang: "tr" | "en"): ResolvedExtra {
  const r = toolExtras[slug];
  if (!r) return { longDesc: "", features: [], forWhom: [], pricing: [], pros: [], cons: [], prompts: [], alternativeSlugs: [] };
  return {
    longDesc:         lang === "tr" ? r.longDescTR  : r.longDescEN,
    features:         lang === "tr" ? r.featuresTR  : r.featuresEN,
    forWhom:          lang === "tr" ? r.forWhomTR   : r.forWhomEN,
    pricing:          lang === "tr" ? r.pricingTR : r.pricingEN,
    pros:             lang === "tr" ? r.prosTR      : r.prosEN,
    cons:             lang === "tr" ? r.consTR      : r.consEN,
    prompts:          lang === "tr" ? r.promptsTR   : r.promptsEN,
    alternativeSlugs: r.alternativeSlugs,
  };
}

export type { ToolExtra, ResolvedExtra } from "./types";
