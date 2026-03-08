// app/en/privacy/page.tsx
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Pusula",
  description: "AI Pusula privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "/en/privacy" },
};

const LAST_UPDATED = "February 21, 2026";
const CONTACT_EMAIL = "info@aipusula.com";

export default function PrivacyEN() {
  return (
    <>
      <Navbar lang="en" />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12">

          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/en" className="hover:underline">Home</Link>
            {" / "}
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </nav>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-8 text-sm leading-relaxed text-gray-700">

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">1. Overview</h2>
              <p>
                This Privacy Policy explains how <strong>aipusula.com</strong> ("Site")
                collects, uses, and protects information from visitors. By using the Site,
                you agree to the practices described here.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">2. Information We Collect</h2>
              <p className="mb-3">
                The Site does not have a registration system. The following data is
                collected automatically:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP address and browser information (server logs)</li>
                <li>Pages visited and time spent (analytics tools)</li>
                <li>Ad interaction data (Google AdSense)</li>
                <li>Cookie data</li>
              </ul>
              <p className="mt-3">
                If you use the contact form, your name, email address, and message are
                used solely to respond to your inquiry and are not shared with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">3. Cookies</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Essential cookies:</strong> Required for core site functions.</li>
                <li><strong>Analytics cookies:</strong> Anonymously measure visitor behavior.</li>
                <li><strong>Advertising cookies:</strong> Used by Google AdSense for personalized ads.</li>
              </ul>
              <p className="mt-3">
                You can disable cookies in your browser settings; however some features
                may not work correctly as a result.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">4. Google AdSense</h2>
              <p className="mb-3">
                The Site displays ads through Google AdSense. Google may use cookies
                to serve interest-based ads. For more information:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
                    Manage your Google Ad preferences
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">5. Third-Party Links</h2>
              <p>
                The Site links to official websites of reviewed AI tools. We are not
                responsible for the privacy practices of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">6. Data Retention</h2>
              <p>
                Server logs are retained for a maximum of 90 days. Messages received
                via the contact form are deleted within a reasonable period after
                your inquiry has been resolved.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">7. Policy Updates</h2>
              <p>
                This policy may be updated periodically. The "Last updated" date at
                the top of this page will reflect any significant changes. Continued
                use of the Site constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">8. Contact</h2>
              <p>
                For questions about this privacy policy:{" "}
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
