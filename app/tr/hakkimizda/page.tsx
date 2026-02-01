import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function AboutTR() {
  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">

          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <Link href="/tr" className="hover:underline">
              Ana Sayfa
            </Link>{" "}
            / <span className="text-gray-900 font-medium">Hakkımızda</span>
          </div>

          <section className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              AI Pusula Hakkında
            </h1>

            <p className="mt-4 text-gray-700">
              AI Pusula, kullanıcıların ihtiyaçlarına en uygun yapay zekâ
              araçlarını keşfetmesini, karşılaştırmasını ve doğru aracı
              seçmesini kolaylaştırmak amacıyla oluşturulmuş bir yapay zekâ
              araçları rehberidir.
            </p>

            <p className="mt-4 text-gray-700">
              Sitemizde; yazı yazma, görsel üretim, video oluşturma, ses
              düzenleme, kodlama ve üretkenlik gibi farklı kategorilerdeki
              yapay zekâ araçlarını bir arada bulabilirsiniz.
            </p>

            <p className="mt-4 text-gray-700">
              Amacımız; hem bireysel kullanıcılar hem de işletmeler için
              güvenilir, güncel ve anlaşılır bir yapay zekâ kaynak merkezi
              oluşturmaktır.
            </p>

            <p className="mt-4 text-gray-700">
              AI Pusula sürekli gelişen bir projedir. Yeni araçlar düzenli
              olarak eklenir ve içerikler güncellenir.
            </p>

            <p className="mt-4 text-gray-700">
              Görüş, öneri veya iş birliği talepleriniz için{" "}
              <Link href="/tr/iletisim" className="underline font-medium">
                iletişim sayfamızdan
              </Link>{" "}
              bize ulaşabilirsiniz.
            </p>

          </section>

        </div>
      </main>
    </>
  );
}
