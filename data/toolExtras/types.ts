// data/toolExtras/types.ts
export type ToolFeature    = { icon: string; title: string; desc: string };
export type ToolForWhom    = { icon: string; label: string };
export type ToolPricingPlan = { plan: string; price: string; note: string };
export type ToolPrompt     = { label: string; prompt: string; output: string };

export type ToolExtra = {
  longDescTR: string;
  longDescEN: string;
  featuresTR: ToolFeature[];
  featuresEN: ToolFeature[];
  forWhomTR:  ToolForWhom[];
  forWhomEN:  ToolForWhom[];
  pricingTR:  ToolPricingPlan[];
  pricingEN:  ToolPricingPlan[];
  prosTR:     string[];
  prosEN:     string[];
  consTR:     string[];
  consEN:     string[];
  promptsTR:  ToolPrompt[];
  promptsEN:  ToolPrompt[];
  alternativeSlugs: string[];
};

export type ResolvedExtra = {
  longDesc:   string;
  features:   ToolFeature[];
  forWhom:    ToolForWhom[];
  pricing:    ToolPricingPlan[];   // resolveExtra() dili seçip tek liste döndürür
  pros:       string[];
  cons:       string[];
  prompts:    ToolPrompt[];
  alternativeSlugs: string[];
};
