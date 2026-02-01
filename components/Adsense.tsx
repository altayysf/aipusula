import Script from "next/script";

export default function Adsense({
  client,
  slot,
  className,
}: {
  client: string; // ca-pub-xxxx
  slot: string;   // ad slot id
  className?: string;
}) {
  return (
    <div className={className}>
      {/* Adsense script'i genelde layout'ta 1 kez eklenir.
          Burada da ekli bırakırsan iki kez yüklememek için layout'ta tekle. */}
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script
        id={`adsbygoogle-push-${slot}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />
    </div>
  );
}
