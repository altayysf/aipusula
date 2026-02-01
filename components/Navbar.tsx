import Image from "next/image";

import Link from "next/link";

export default function Navbar({ lang }: { lang: "tr" | "en" }) {
  return (
    <header className="w-full bg-[#bfbfbf] border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href={lang === "tr" ? "/tr" : "/en"} className="font-extrabold text-gray-900">
          <span className="flex items-center gap-2 font-extrabold text-gray-900 hover:tracking-wide transition-all">

          AI Pusula
            <Image
              src="/favicon.png"
              alt="AI Pusula Logo"
              width={26}
              height={26}
              className="
                rounded-full
                shadow-md
                hover:scale-110
                transition-transform
                duration-300
                ring-1 ring-black/10
                hover:shadow-[0_0_12px_rgba(0,0,0,0.35)]
                "
              />
          </span>

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
