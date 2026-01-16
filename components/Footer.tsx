import Link from "next/link";

export default function Footer({ lang }: { lang: "tr" | "en" }) {
  const year = new Date().getFullYear();

  const t = {
    tr: {
      rights: "Tüm hakları saklıdır.",
      editors: "Editör Seçimi",
      tools: "Araçlar",
      contact: "İletişim",
      privacy: "Gizlilik Politikası",
      switchLabel: "English",
      editorsHref: "/tr",
      toolsHref: "/tr/araclar",
      contactHref: "/tr/iletisim",
      privacyHref: "/tr/gizlilik-politikasi",
      switchHref: "/en",
    },
    en: {
      rights: "All rights reserved.",
      editors: "Editor's Picks",
      tools: "Tools",
      contact: "Contact",
      privacy: "Privacy Policy",
      switchLabel: "Türkçe",
      editorsHref: "/en",
      toolsHref: "/en/tools",
      contactHref: "/en/contact",
      privacyHref: "/en/privacy-policy",
      switchHref: "/tr",
    },
  }[lang];

  return (
    <footer className="mt-16 border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/80 border border-black/10 shadow-sm flex items-center justify-center">
              <span className="text-lg">🧭</span>
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-gray-900">AI Pusula</div>
              <div className="text-sm text-gray-600">
                © {year} AI Pusula — {t.rights}
              </div>
            </div>
          </div>

          {/* Right links */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <Link
              href={t.editorsHref}
              className="text-gray-700 hover:text-gray-900 hover:underline"
            >
              {t.editors}
            </Link>

            <Link
              href={t.toolsHref}
              className="text-gray-700 hover:text-gray-900 hover:underline"
            >
              {t.tools}
            </Link>

            <Link
              href={t.contactHref}
              className="text-gray-700 hover:text-gray-900 hover:underline"
            >
              {t.contact}
            </Link>

            {/* ✅ NEW: Privacy Policy */}
            <Link
              href={t.privacyHref}
              className="text-gray-700 hover:text-gray-900 hover:underline"
            >
              {t.privacy}
            </Link>

            <span className="mx-1 hidden md:inline text-gray-300">•</span>

            <Link
              href={t.switchHref}
              className="rounded-full bg-white/85 border border-black/15 px-4 py-2 font-semibold text-gray-900 hover:bg-white transition shadow-sm"
            >
              {t.switchLabel}
            </Link>
          </nav>
        </div>

        {/* tiny note line */}
        <div className="mt-6 text-xs text-gray-500">
          {lang === "tr"
            ? "Not: Araç bağlantıları ilgili platformların resmi sitelerine yönlendirir."
            : "Note: Tool buttons redirect to the official websites of the platforms."}
        </div>
      </div>
    </footer>
  );
}
