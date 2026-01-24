import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function PrivacyEN() {
  const updatedAt = "January 16, 2026";

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
            / <span className="text-gray-900 font-medium">Privacy Policy</span>
          </div>

          {/* Header card */}
          <section className="rounded-[32px] border border-violet-500/40 bg-gradient-to-r from-violet-200 to-fuchsia-200 p-7 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Privacy Policy
            </h1>
            <p className="mt-2 text-gray-800/80 max-w-3xl">
              At AI Pusula (“Site”), we respect your privacy. This page explains
              what data may be collected, how it may be used, and your options.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800 whitespace-nowrap">
                Last updated: {updatedAt}
              </span>
              <span className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-[11px] text-gray-800 whitespace-nowrap">
                Contact: aipusula2026@gmail.com
              </span>
            </div>
          </section>

          {/* Content */}
          <div className="mt-10 space-y-6">
            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                1) Information we may collect
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                We do not require your identity to browse the Site. However, the
                following data may be collected technically:
              </p>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <b>Technical logs:</b> IP address, browser type, device info,
                  referrer, timestamps, and similar diagnostics.
                </li>
                <li>
                  <b>Cookies:</b> small files used to improve the browsing
                  experience.
                </li>
                <li>
                  <b>Analytics (optional):</b> anonymous stats like page views
                  and clicks.
                </li>
              </ul>
            </section>

            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                2) How we may use the information
              </h2>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
                <li>Maintain performance and security</li>
                <li>Detect issues and improve the Site</li>
                <li>Enhance user experience</li>
                <li>Run anonymous, statistical analysis</li>
              </ul>
            </section>

            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                3) Third-party services (Google/Ads/Analytics)
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                The Site may use third-party services for measurement, ads, and
                analytics (e.g., Google Analytics and/or Google AdSense). These
                services may collect anonymous usage data via cookies and may
                show personalized ads.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                To manage ad personalization:
                <span className="ml-1">
                  <a
                    className="underline decoration-black/20 hover:decoration-black/60"
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Ads Settings
                  </a>
                </span>
              </p>
            </section>

            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                4) External links
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                AI Pusula links to official websites of listed tools. We are not
                responsible for the privacy practices of external sites. We
                recommend reviewing each site’s privacy policy.
              </p>
            </section>

            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                5) Cookies
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Cookies may be used to remember preferences and improve overall
                performance. You can delete or block cookies via your browser
                settings.
              </p>
            </section>

            <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900">
                6) Contact
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                For questions about this policy, contact us:
              </p>
              <a
                href="mailto:aipusula2026@gmail.com?subject=AI%20Pusula%20-%20Privacy%20Policy"
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                aipusula2026@gmail.com →
              </a>  
            </section>

            <div className="text-sm text-gray-600">
              This policy may be updated from time to time. Updates will be
              posted on this page.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
