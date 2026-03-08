// app/tr/hakkimizda/page.tsx
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | AI Pusula",
  description:
    "AI Pusula, yapay zeka araçlarını Türkçe ve İngilizce olarak inceleyen bağımsız bir rehber sitesidir. Misyonumuz doğru aracı hızlıca bulmanıza yardımcı olmaktır.",
  alternates: { canonical: "/tr/hakkimizda" },
};

export default function AboutTR() {
  return (
    <>
      <Navbar lang="tr" />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12 space-y-10">

          <nav className="text-sm text-gray-500">
            <Link href="/tr" className="hover:underline">Ana Sayfa</Link>
            {" / "}
            <span className="text-gray-900 font-medium">Hakkımızda</span>
          </nav>

          {/* Hero */}
          <section>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              AI Pusula Hakkında
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              <strong>AI Pusula</strong>, yapay zeka araçlarını bağımsız bir bakış
              açısıyla inceleyen Türkçe ve İngilizce bir rehber platformudur.
              ChatGPT'den Midjourney'e, ElevenLabs'tan GitHub Copilot'a kadar
              onlarca aracı tek çatı altında karşılaştırmalı biçimde sunuyoruz.
            </p>
          </section>

          {/* Misyon */}
          <section className="rounded-[28px] border border-black/8 bg-gray-50 p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">🎯 Misyonumuz</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Yapay zeka dünyası her ay yeni araçlar, yeni modeller ve yeni
              fiyatlandırma seçenekleriyle genişliyor. Bu kadar seçenek içinde
              doğru aracı bulmak giderek zorlaşıyor.
            </p>
            <p className="text-gray-600 leading-relaxed">
              AI Pusula ekibinin misyonu basit:{" "}
              <strong>hangi işe hangi araç uyar?</strong> sorusunu hızlıca
              yanıtlamak. Her araç için detaylı inceleme, gerçek kullanım
              örnekleri, fiyat karşılaştırması ve alternatifler sunuyoruz —
              Türkçe, açık ve tarafsız.
            </p>
          </section>

          {/* Ne sunuyoruz */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Ne Sunuyoruz?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🔍", title: "Detaylı İnceleme",      desc: "Her araç için özellikler, artılar, eksiler ve gerçek kullanım senaryoları." },
                { icon: "💰", title: "Fiyat Karşılaştırması", desc: "Ücretsiz, freemium ve ücretli planların yan yana kıyaslaması." },
                { icon: "💡", title: "Örnek Prompt'lar",      desc: "Araçtan en iyi sonucu almak için kopyalanabilir hazır prompt'lar." },
                { icon: "🔗", title: "Alternatif Önerileri",  desc: "Her araç için benzer işi yapan alternatiflere doğrudan bağlantılar." },
                { icon: "🌐", title: "İki Dil",               desc: "Tüm içerikler hem Türkçe hem İngilizce olarak sunulmaktadır." },
                { icon: "📅", title: "Güncel Bilgi",          desc: "Fiyat ve özellik değişikliklerini düzenli olarak takip edip güncelliyoruz." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-black/8 bg-white p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Editoryal bağımsızlık */}
          <section className="rounded-[28px] border border-black/8 bg-gray-50 p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">✍️ Editoryal Bağımsızlık</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              AI Pusula, bağımsız bir yayın olarak çalışmaktadır. Hiçbir araç
              geliştiricisinden ücret, komisyon ya da sponsorluk karşılığında
              olumlu değerlendirme yapılmamaktadır. İncelemeler yalnızca ekibimizin
              dürüst değerlendirmelerini yansıtır.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sitede gösterilen reklamlar Google AdSense üzerinden otomatik olarak
              sunulmaktadır. Reklam içerikleri editoryal kararlarımızı
              etkilememektedir.
            </p>
          </section>

          {/* İletişim CTA */}
          <section className="rounded-[28px] bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-200 p-7 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Bize Ulaşın</h2>
            <p className="text-gray-600 text-sm mb-5">
              Hata bildirimi, araç önerisi veya iş birliği için
              iletişim sayfamıza göz atın.
            </p>
            <Link
              href="/tr/iletisim"
              className="inline-flex rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition"
            >
              İletişim Sayfası →
            </Link>
          </section>

        </div>
      </main>
    </>
  );
}
