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
              AI Pusula, kullanıcıların ihtiyaçlarına en uygun yapay zekâ araçlarını 
              kolayca keşfetmesini, karşılaştırmasını ve bilinçli seçimler yapmasını 
              sağlamak amacıyla oluşturulmuş kapsamlı bir yapay zekâ araçları rehberidir.
            </p>

            <p className="mt-4 text-gray-700">
              Sitemizde; içerik üretimi, görsel tasarım, video oluşturma, ses düzenleme, kodlama, 
              pazarlama, otomasyon ve üretkenlik gibi birçok farklı alanda kullanılan 
              yapay zekâ araçlarını detaylı incelemelerle bulabilirsiniz. Her araç; kullanım alanı, 
              öne çıkan özellikleri, avantajları ve potansiyel kullanım senaryoları ile birlikte 
              sunulmaktadır.
            </p>

            <p className="mt-4 text-gray-700">
              AI Pusula’nın temel hedefi, hem bireysel kullanıcılar hem de işletmeler için güvenilir, 
              güncel ve anlaşılır bir yapay zekâ kaynak merkezi oluşturmaktır. 
              Yapay zekâ dünyasında hızla ortaya çıkan yeni çözümleri takip ederek, 
              kullanıcılarımıza doğru ve tarafsız bilgiler sunmayı önceliğimiz olarak görüyoruz.
            </p>

            <p className="mt-4 text-gray-700">
              Ayrıca blog bölümümüzde; yapay zekâ trendleri, rehberler, karşılaştırmalar, 
              kullanım ipuçları ve sektörel analizler gibi içeriklere düzenli olarak yer veriyoruz. 
              Amacımız, yapay zekâyı herkes için daha erişilebilir ve anlaşılır hale getirmek.
            </p>

            <p className="mt-4 text-gray-700">
              AI Pusula sürekli gelişen bir projedir. Yeni araçlar düzenli olarak eklenir, 
              mevcut içerikler güncellenir ve kullanıcı geri bildirimleri doğrultusunda site 
              sürekli iyileştirilir.
            </p>

            <p className="mt-4 text-gray-700">
              Eğer yapay zekâ araçlarını daha verimli kullanmak, doğru aracı hızlıca bulmak ve 
              teknolojinin sunduğu fırsatlardan en iyi şekilde yararlanmak istiyorsanız, 
              AI Pusula sizin için doğru adrestir.
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
