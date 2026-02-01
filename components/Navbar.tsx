import Link from "next/link";

export default function Navbar({ lang }: { lang: "tr" | "en" }) {
  return (
    <header className="w-full bg-[#bfbfbf] border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href={lang === "tr" ? "/tr" : "/en"} className="font-extrabold text-gray-900">
          AI Pusula <span className="ml-2">🧭</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-gray-800">
          <Link href={lang === "tr" ? "/tr/araclar" : "/en/tools"} className="hover:underline">
            {lang === "tr" ? "Yapay Zeka Araçları" : "AI Tools"}
          </Link>

          <Link href={lang === "tr" ? "/tr/hakkimizda" : "/en/about"} className="hover:underline">
            {lang === "tr" ? "Hakkımızda" : "About"}
          </Link>

          <Link href={lang === "tr" ? "/en" : "/tr"} className="hover:underline">
            {lang === "tr" ? "EN" : "TR"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
