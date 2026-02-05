import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function PrivacyTR() {
  const updatedAt = "05 Şubat 2026";

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
            / <span className="text-gray-900 font-medium">Gizlilik Politikası</span>
          </div>

          {/* Header card */}
          <section className="rounded-[32px] border border-violet-500/40 bg-gradient-to-r from-violet-200 to-fuchsia-200 p-7 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Gizlilik Politikası
            </h1>
            <p className="mt-2 text-gray-800/80 max-w-3xl">
              AI Pusula (“Site”) olarak gizliliğinize önem veriyoruz. Bu sayfa,
              sitemizi ziyaret ettiğinizde hangi bilgilerin toplanabileceğini,
              nasıl kullanılabileceğini ve haklarınızı açıklar.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800 whitespace-nowrap">
                Son güncelleme: {updatedAt}
              </span>
              <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800 whitespace-nowrap">
                İletişim: info@aipusula.com
              </span>
            </div>
          </section>

          {/* Content */}
          <div className="mt-10 space-y-6">
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                1) Toplanan bilgiler
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Siteyi kullanırken doğrudan kimlik bilginizi istemeyiz. Ancak
                teknik olarak şu veriler toplanabilir:
              </p>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <b>Teknik loglar:</b> IP adresi, tarayıcı türü, cihaz bilgisi,
                  yönlendiren sayfa, tarih/saat gibi teknik bilgiler.
                </li>
                <li>
                  <b>Çerezler:</b> Site deneyimini iyileştirmek için kullanılan
                  küçük dosyalar.
                </li>
                <li>
                  <b>Analitik veriler (opsiyonel):</b> Sayfa görüntüleme, tıklama
                  gibi anonim istatistikler.
                </li>
              </ul>
            </section>

            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                2) Bilgileri nasıl kullanırız?
              </h2>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
                <li>Site performansını ve güvenliğini sağlamak</li>
                <li>Hataları tespit edip geliştirme yapmak</li>
                <li>Kullanıcı deneyimini iyileştirmek</li>
                <li>İstatistiksel analiz yapmak (anonim)</li>
              </ul>
            </section>

            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                3) Üçüncü taraf hizmetler (Google/Ads/Analytics)
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Site; ölçümleme, reklam ve analiz amaçlarıyla üçüncü taraf
                hizmetleri <b>kullanabilir</b> (ör. Google Analytics ve/veya
                Google AdSense). Bu hizmetler çerezler aracılığıyla anonim
                kullanım verileri toplayabilir ve ilgi alanınıza göre reklam
                gösterebilir.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Google’ın reklam çerezleri hakkında daha fazla bilgi ve reklam
                kişiselleştirmeyi yönetmek için:
                <span className="ml-1">
                  <a
                    className="underline decoration-black/20 hover:decoration-black/60"
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Reklam Ayarları
                  </a>
                </span>
              </p>
            </section>

            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                4) Dış bağlantılar
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                AI Pusula; listelenen araçların resmi sitelerine bağlantı verir.
                Dış sitelerin içerik ve gizlilik uygulamalarından AI Pusula
                sorumlu değildir. Ziyaret ettiğiniz her sitenin kendi gizlilik
                politikasını incelemenizi öneririz.
              </p>
            </section>

            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                5) Çerezler (Cookies)
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Çerezler; siteyi kullanırken tercihlerinizi hatırlamak ve genel
                performansı iyileştirmek için kullanılabilir. Tarayıcı ayarları
                üzerinden çerezleri silebilir veya engelleyebilirsiniz.
              </p>
            </section>

            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                6) İletişim
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Gizlilik politikamızla ilgili sorularınız için bize yazın:
              </p>
              <a
                href="mailto:aipusula2026@gmail.com?subject=AI%20Pusula%20-%20Gizlilik%20Politikasi"
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                info@aipusula.com →
              </a>
            </section>

            <div className="text-sm text-gray-600">
              Bu politika zaman zaman güncellenebilir. Güncellemeler bu sayfada
              yayınlanır.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
