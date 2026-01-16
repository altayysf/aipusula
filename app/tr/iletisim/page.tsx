import Navbar from "../../../components/Navbar";
import Link from "next/link";

const EMAIL = "ysfaltay25@gmail.com";

function mailto(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${EMAIL}?subject=${s}&body=${b}`;
}

export default function ContactTR() {
  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <Link href="/tr" className="hover:underline">
              Ana Sayfa
            </Link>{" "}
            / <span className="text-gray-900 font-medium">İletişim</span>
          </div>

          {/* Header card */}
          <section className="rounded-[32px] border border-violet-500/40 bg-gradient-to-r from-violet-200 to-fuchsia-200 p-7 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              İletişim
            </h1>
            <p className="mt-2 text-gray-800/80 max-w-2xl">
              AI Pusula şu an geliştirme aşamasında. Hata bildirimi, yeni araç
              önerisi, iş birliği / reklam / ana sayfada sabitleme taleplerin
              için buradayız.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition"
              >
                E-posta gönder →
              </a>

              <Link
                href="/tr/araclar"
                className="rounded-full bg-white/85 border border-black/20 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Tüm araçlara göz at
              </Link>
            </div>

            <div className="mt-4 text-sm text-gray-700">
              E-posta:{" "}
              <a
                className="font-semibold underline decoration-black/20 hover:decoration-black/60"
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>
            </div>
          </section>

          {/* 3 cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bug / feedback */}
            <div className="rounded-[28px] border border-emerald-500/35 bg-gradient-to-r from-emerald-100 to-cyan-200 p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-gray-900">
                Hata bildir / öneri ver
              </h2>
              <p className="mt-2 text-gray-700">
                Site yeni. Bir hata, eksik bilgi veya geliştirme fikrin varsa
                yaz—hızlıca düzeltelim.
              </p>

              <a
                href={mailto(
                  "AI Pusula - Hata / Öneri",
                  `Merhaba AI Pusula,\n\nSayfa linki:\nHata/öneri:\nEkran görüntüsü varsa ekleyebilirim.\n\nTarayıcı/cihaz:\n`
                )}
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Hata/öneri formu →
              </a>
            </div>

            {/* Tool submission */}
            <div className="rounded-[28px] border border-sky-500/35 bg-gradient-to-r from-indigo-200 to-sky-200 p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-gray-900">
                Yeni AI aracı öner
              </h2>
              <p className="mt-2 text-gray-700">
                Yeni bir araç keşfettiysen linkini ve kısa açıklamasını gönder.
                İnceleyip dizine ekleyelim.
              </p>

              <a
                href={mailto(
                  "AI Pusula - Yeni Araç Önerisi",
                  `Merhaba AI Pusula,\n\nAraç adı:\nResmi link:\nKategori (Yazı/Görsel/Video/Ses/Kod/Üretkenlik):\nÜcretlendirme (Ücretsiz/Freemium/Ücretli):\nKısa açıklama:\nLogo/Screenshot linkleri (varsa):\n`
                )}
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Araç öner →
              </a>
            </div>

            {/* Monetization */}
            <div className="rounded-[28px] border border-amber-500/35 bg-gradient-to-r from-amber-200 to-rose-200 p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-gray-900">
                İş birliği / reklam / sabitleme
              </h2>
              <p className="mt-2 text-gray-700">
                AI aracı sahibiysen ya da marka iş birliği düşünüyorsan: ana
                sayfada sabitleme, sponsor alanı ve görünürlük seçeneklerini
                konuşabiliriz.
              </p>

              <a
                href={mailto(
                  "AI Pusula - İş Birliği / Reklam / Sabitleme",
                  `Merhaba AI Pusula,\n\nMarka/araç adı:\nWebsite:\nTalep (İş birliği / Reklam / Ana sayfada sabitleme):\nKısa detay:\nBütçe aralığı (opsiyonel):\nİletişim bilgisi:\n`
                )}
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Teklif gönder →
              </a>
            </div>
          </div>

          {/* Small note */}
          <div className="mt-10 text-sm text-gray-600">

          </div>
        </div>
      </main>
    </>
  );
}
