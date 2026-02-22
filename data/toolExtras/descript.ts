import type { ToolExtra } from "./types";

export const descript: ToolExtra = {
  longDescTR: `Descript, ses ve video düzenlemeyi kelime işlemci gibi basit bir deneyime indirgeyen yenilikçi bir platformdur. Temel yaklaşımı, ses veya videoyu önce metne dönüştürmek (transkript), ardından metni düzenleyerek sesi veya videoyu değiştirmektir.

Bu yöntem, özellikle podcast yapımcıları ve video içerik üreticileri için devrim niteliğinde kolaylık sağlar. "Uh", "um" gibi dolgu kelimelerini tek tıklamayla silmek, bir cümleyi metinden silerek videodan çıkarmak veya transkriptten istenilen bölümü bulmak artık saniyeler içinde yapılabilir.

Overdub özelliği, kendi sesinizi klonlayarak yanlış söylenen kelimeleri yazarak düzeltmenize olanak tanır. Studio Sound ile düşük kaliteli ses profesyonel stüdyo kalitesine yükseltilebilir. Podcast ve video içerik üretiminde en çok zaman kazandıran araçlardan biridir.`,

  longDescEN: `Descript is an innovative platform that reduces audio and video editing to the simplicity of a word processor. Its core approach is to first transcribe audio or video into text, then modify the audio or video by editing the transcript.

This method is a revolutionary convenience especially for podcast creators and video content producers. Deleting filler words like "uh" and "um" in one click, removing a sentence from the video by deleting it from the transcript, or finding a specific section from the transcript — all can be done in seconds.

The Overdub feature lets you clone your own voice to fix mispronounced words simply by typing. Studio Sound can elevate low-quality audio to professional studio quality. It's one of the most time-saving tools for podcast and video content production.`,

  featuresTR: [
    { icon: "📝", title: "Transkript Tabanlı Düzenleme", desc: "Metni düzenleyerek sesi veya videoyu değiştir." },
    { icon: "🗑️", title: "Dolgu Kelime Silme", desc: "'Uh', 'um' gibi dolguları tek tıkla temizle." },
    { icon: "🎙️", title: "Overdub (Ses Klonlama)", desc: "Kendi sesinle yanlış kelimeleri yazarak düzelt." },
    { icon: "🔊", title: "Studio Sound", desc: "Ev kayıt sesini stüdyo kalitesine yükselt." },
    { icon: "✂️", title: "Screen Recording", desc: "Ekran kaydı ve düzenleme platformda tamamlanır." },
    { icon: "👥", title: "Ekip İş Birliği", desc: "Birden fazla kişi aynı projede çalışabilir." },
  ],

  featuresEN: [
    { icon: "📝", title: "Transcript-Based Editing", desc: "Edit the text to change the audio or video accordingly." },
    { icon: "🗑️", title: "Filler Word Removal", desc: "Clean up 'uh', 'um', and similar fillers in one click." },
    { icon: "🎙️", title: "Overdub (Voice Cloning)", desc: "Fix mispronounced words by typing with your cloned voice." },
    { icon: "🔊", title: "Studio Sound", desc: "Elevate home recording audio to studio quality." },
    { icon: "✂️", title: "Screen Recording", desc: "Record and edit your screen directly within the platform." },
    { icon: "👥", title: "Team Collaboration", desc: "Multiple people can work on the same project simultaneously." },
  ],

  forWhomTR: [
    { icon: "🎙️", label: "Podcast yapımcıları" },
    { icon: "📹", label: "YouTube içerik üreticileri" },
    { icon: "🎓", label: "Online kurs ve eğitim içerikleri" },
    { icon: "💼", label: "Kurumsal iletişim ekipleri" },
    { icon: "📣", label: "Pazarlama & video prodüksiyon" },
    { icon: "👥", label: "Uzak çalışan medya ekipleri" },
  ],

  forWhomEN: [
    { icon: "🎙️", label: "Podcast creators" },
    { icon: "📹", label: "YouTube content creators" },
    { icon: "🎓", label: "Online courses & educational content" },
    { icon: "💼", label: "Corporate communication teams" },
    { icon: "📣", label: "Marketing & video production" },
    { icon: "👥", label: "Remote media teams" },
  ],

  pricingTR: [
    { plan: "Ücretsiz", price: "$0 / ay",  note: "1 saat transkript/ay, filigran" },
    { plan: "Hobbyist", price: "$19 / ay", note: "10 saat/ay, overdub dahil" },
    { plan: "Creator",  price: "$35 / ay", note: "30 saat/ay, tüm özellikler" },
    { plan: "Business", price: "$50 / ay", note: "Ekip ve öncelikli destek" },
  ],

  pricingEN: [
    { plan: "Free", price: "$0 / mo",  note: "1 hour transcript/month, watermark" },
    { plan: "Hobbyist", price: "$19 / mo", note: "10 hours/month, overdub included" },
    { plan: "Creator",  price: "$35 / mo", note: "30 hours/month, all features" },
    { plan: "Business", price: "$50 / mo", note: "Ekip ve öncelikli destek" },
  ],

  prosTR: [
    "Transkript tabanlı düzenleme çok pratik",
    "Overdub ile ses düzeltme benzersiz",
    "Studio Sound ses kalitesini artırıyor",
    "Podcast prodüksiyonunda büyük zaman tasarrufu",
  ],

  prosEN: [
    "Transcript-based editing is extremely practical",
    "Overdub voice correction is unique",
    "Studio Sound significantly improves audio quality",
    "Huge time savings for podcast production",
  ],

  consTR: [
    "Ücretsiz planda limit çok düşük",
    "Gelişmiş video efektleri sınırlı",
    "Transkript doğruluğu aksan ve gürültüye göre değişiyor",
  ],

  consEN: [
    "Very low limit on free plan",
    "Advanced video effects are limited",
    "Transcript accuracy varies with accent and noise",
  ],

  promptsTR: [
    {
      label: "🎙️ Podcast Düzenleme",
      prompt: "Ses dosyasını yükle → Transkript oluştur → 'Remove filler words' → Transkriptten konudan kopuk bölümleri seç ve sil → Export",
      output: `Beklened Sonuç:
60 dakikalık ham podcast kaydı 45 dakikaya düşürüldü. 'Eee', 'yani', 'işte' gibi dolgu kelimeleri temizlendi. Transkript senkronize bir şekilde düzenlendi.`,
    },
    {
      label: "🔊 Ses Kalitesi İyileştirme",
      prompt: "Audio dosyasını import et → Effects → Studio Sound → Level: High → Preview → Apply → Export",
      output: `Beklened Sonuç:
Ev ortamında kaydedilen ses, stüdyo kalitesine yükseltildi. Arka plan gürültüsü giderildi, ses netleşti ve dengeli hale geldi.`,
    },
    {
      label: "📝 Overdub ile Düzeltme",
      prompt: "Transkriptte yanlış söylenen kelimeyi seç → Overdub → Doğru kelimeyi yaz → Sesin klonuyla otomatik değiştirilir",
      output: `Beklened Sonuç:
'2024' yerine yanlışlıkla '2025' denildi. Transkriptte değiştir, overdub özelliği sesin klonuyla bölümü yeniden üretiyor. Kayıt yapmaya gerek kalmadı.`,
    },
  ],

  promptsEN: [
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
};
