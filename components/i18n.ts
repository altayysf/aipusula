// components/i18n.ts
import type { ToolCategory, ToolPricing, Tool } from "../data/tools";

export function tCategory(lang: "tr" | "en", key: ToolCategory) {
  const tr = {
    text: "Yazı",
    image: "Görsel",
    video: "Video",
    audio: "Ses",
    code: "Kod",
    productivity: "Üretkenlik",
  } as const;

  const en = {
    text: "Text",
    image: "Image",
    video: "Video",
    audio: "Audio",
    code: "Code",
    productivity: "Productivity",
  } as const;

  return (lang === "tr" ? tr : en)[key];
}

export function tPricing(lang: "tr" | "en", key: ToolPricing) {
  const tr = {
    free: "Ücretsiz",
    freemium: "Ücretsiz + Ücretli",
    paid: "Ücretli",
  } as const;

  const en = {
    free: "Free",
    freemium: "Freemium",
    paid: "Paid",
  } as const;

  return (lang === "tr" ? tr : en)[key];
}

export function tTagline(lang: "tr" | "en", tool: Tool) {
  return lang === "tr" ? tool.taglineTR : tool.taglineEN;
}

export function tDetail(lang: "tr" | "en", tool: Tool) {
  return lang === "tr" ? tool.detailTR : tool.detailEN;
}
