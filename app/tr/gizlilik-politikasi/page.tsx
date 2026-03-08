// app/tr/gizlilik/page.tsx
// Sadece KVKK baz alınmıştır.
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | AI Pusula",
  description:
    "AI Pusula gizlilik politikası — kişisel verilerinizin KVKK kapsamında nasıl toplandığı ve işlendiği hakkında bilgi.",
  alternates: { canonical: "/tr/gizlilik" },
};

const LAST_UPDATED = "21 Şubat 2026";
const CONTACT_EMAIL = "info@aipusula.com";

export default function PrivacyTR() {
  return (
    <>
      <Navbar lang="tr" />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12">

          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/tr" className="hover:underline">Ana Sayfa</Link>
            {" / "}
            <span className="text-gray-900 font-medium">Gizlilik Politikası</span>
          </nav>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Gizlilik Politikası
          </h1>
          <p className="text-sm text-gray-400 mb-10">Son güncelleme: {LAST_UPDATED}</p>

          <div className="space-y-8 text-sm leading-relaxed text-gray-700">

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">1. Veri Sorumlusu</h2>
              <p>
                Bu Gizlilik Politikası, <strong>aipusula.com</strong> ("Site") alan
                adıyla yayın yapan <strong>AI Pusula</strong> tarafından hazırlanmıştır.
                6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca veri
                sorumlusu sıfatıyla hareket etmekteyiz. Siteyi kullanarak bu
                politikayı kabul etmiş sayılırsınız.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">2. Toplanan Kişisel Veriler</h2>
              <p className="mb-3">
                Sitemizde kayıt veya üyelik sistemi bulunmamaktadır. Aşağıdaki
                veriler yalnızca otomatik yollarla toplanmaktadır:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP adresi ve tarayıcı bilgileri (sunucu günlükleri)</li>
                <li>Ziyaret edilen sayfalar ve geçirilen süre (analitik araçlar)</li>
                <li>Reklam etkileşim verileri (Google AdSense)</li>
                <li>Çerez (cookie) verileri</li>
              </ul>
              <p className="mt-3">
                İletişim formunu kullandığınızda ilettiğiniz ad, e-posta adresi ve
                mesaj içeriği yalnızca talebinizi yanıtlamak amacıyla kullanılır;
                üçüncü taraflarla paylaşılmaz.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">3. Kişisel Verilerin İşlenme Amaçları</h2>
              <p className="mb-3">Toplanan veriler aşağıdaki amaçlarla işlenmektedir:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sitenin teknik işleyişinin sağlanması</li>
                <li>Kullanıcı deneyiminin iyileştirilmesi</li>
                <li>Ziyaretçi istatistiklerinin anonim olarak takip edilmesi</li>
                <li>Google AdSense aracılığıyla reklam gösterimi</li>
                <li>İletişim taleplerine yanıt verilmesi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">4. Çerezler (Cookies)</h2>
              <p className="mb-3">
                Sitemiz işlevsellik ve analitik amaçlarla çerez kullanmaktadır:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Zorunlu çerezler:</strong> Sitenin temel işlevleri için gereklidir,
                  kapatılamaz.
                </li>
                <li>
                  <strong>Analitik çerezler:</strong> Ziyaretçi davranışlarını anonim biçimde
                  ölçer (örn. Google Analytics).
                </li>
                <li>
                  <strong>Reklam çerezleri:</strong> Google AdSense tarafından
                  kişiselleştirilmiş reklam sunmak amacıyla kullanılır.
                </li>
              </ul>
              <p className="mt-3">
                Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz;
                ancak bu durumda bazı özellikler düzgün çalışmayabilir.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">5. Google AdSense</h2>
              <p className="mb-3">
                Sitemizde Google AdSense üzerinden reklamlar gösterilmektedir.
                Google, reklamları kişiselleştirmek amacıyla çerez ve benzeri
                teknolojiler kullanabilir. Daha fazla bilgi için:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:underline"
                  >
                    Google Gizlilik Politikası
                  </a>
                </li>
                <li>
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:underline"
                  >
                    Google Reklam Tercihlerinizi Yönetin
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">6. Üçüncü Taraf Bağlantılar</h2>
              <p>
                Sitemiz, incelediğimiz yapay zeka araçlarının resmi web sitelerine
                bağlantılar içermektedir. Bu sitelerin gizlilik uygulamalarından
                sorumlu değiliz; ilgili sitelerin politikalarını incelemenizi öneririz.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">7. Verilerin Saklanma Süresi</h2>
              <p>
                Sunucu günlükleri en fazla 90 gün saklanmaktadır. İletişim formu
                aracılığıyla iletilen mesajlar, talebiniz yanıtlandıktan sonra
                makul bir süre içinde silinmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                8. KVKK Kapsamındaki Haklarınız
              </h2>
              <p className="mb-3">
                KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                <li>KVKK'nın 7. maddesi çerçevesinde silinmesini veya yok edilmesini isteme</li>
                <li>Kişisel verilerinizin kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
              </ul>
              <p className="mt-3">
                Bu haklarınızı kullanmak için{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-600 hover:underline">
                  {CONTACT_EMAIL}
                </a>{" "}
                adresine e-posta gönderebilir ya da{" "}
                <Link href="/tr/iletisim" className="text-violet-600 hover:underline">
                  iletişim formunu
                </Link>{" "}
                kullanabilirsiniz. Başvurularınız KVKK'nın 13. maddesi gereğince
                en geç 30 (otuz) gün içinde yanıtlanacaktır.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">9. Politika Değişiklikleri</h2>
              <p>
                Bu politika gerektiğinde güncellenebilir. Önemli değişiklikler
                yapıldığında sayfanın üst kısmındaki "Son güncelleme" tarihi
                yenilenecektir. Siteyi kullanmaya devam etmeniz güncel politikayı
                kabul ettiğiniz anlamına gelir.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">10. İletişim</h2>
              <p>
                Gizlilik politikamıza ilişkin sorularınız için:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-600 hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
