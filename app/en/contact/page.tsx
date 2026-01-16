import Navbar from "../../../components/Navbar";
import Link from "next/link";

const EMAIL = "ysfaltay25@gmail.com";

function mailto(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${EMAIL}?subject=${s}&body=${b}`;
}

export default function ContactEN() {
  return (
    <>
      <Navbar lang="en" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <Link href="/en" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-gray-900 font-medium">Contact</span>
          </div>

          {/* Header card */}
          <section className="rounded-[32px] border border-violet-500/40 bg-gradient-to-r from-violet-200 to-fuchsia-200 p-7 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Contact
            </h1>
            <p className="mt-2 text-gray-800/80 max-w-2xl">
              AI Pusula is currently under active development. Report bugs,
              suggest new tools, or reach out for partnerships / ads / pinned
              placement on the homepage.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition"
              >
                Send email →
              </a>

              <Link
                href="/en/tools"
                className="rounded-full bg-white/85 border border-black/20 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Browse all tools
              </Link>
            </div>

            <div className="mt-4 text-sm text-gray-700">
              Email:{" "}
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
                Report a bug / feedback
              </h2>
              <p className="mt-2 text-gray-700">
                Spotted an issue, missing info, or have an improvement idea?
                Send it over and we’ll fix it.
              </p>

              <a
                href={mailto(
                  "AI Pusula - Bug / Feedback",
                  `Hi AI Pusula,\n\nPage URL:\nIssue / suggestion:\nScreenshot (optional):\n\nBrowser/device:\n`
                )}
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Send bug/feedback →
              </a>
            </div>

            {/* Tool submission */}
            <div className="rounded-[28px] border border-sky-500/35 bg-gradient-to-r from-indigo-200 to-sky-200 p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-gray-900">
                Suggest a new AI tool
              </h2>
              <p className="mt-2 text-gray-700">
                Found a new tool? Share the link + a short description and we’ll
                review it for the directory.
              </p>

              <a
                href={mailto(
                  "AI Pusula - New Tool Suggestion",
                  `Hi AI Pusula,\n\nTool name:\nOfficial link:\nCategory (Text/Image/Video/Audio/Code/Productivity):\nPricing (Free/Freemium/Paid):\nShort description:\nLogo/Screenshot links (optional):\n`
                )}
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Suggest a tool →
              </a>
            </div>

            {/* Monetization */}
            <div className="rounded-[28px] border border-amber-500/35 bg-gradient-to-r from-amber-200 to-rose-200 p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-gray-900">
                Partnerships / ads / pinned placement
              </h2>
              <p className="mt-2 text-gray-700">
                Tool owner or brand? We can discuss sponsored spots, homepage
                pinned placement, and visibility options.
              </p>

              <a
                href={mailto(
                  "AI Pusula - Partnership / Ads / Pinned",
                  `Hi AI Pusula,\n\nCompany/tool name:\nWebsite:\nRequest (Partnership / Ads / Pinned on homepage):\nDetails:\nBudget range (optional):\nContact info:\n`
                )}
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Send proposal →
              </a>
            </div>
          </div>

          <div className="mt-10 text-sm text-gray-600">

          </div>
        </div>
      </main>
    </>
  );
}
