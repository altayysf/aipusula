// app/en/about/page.tsx
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AI Pusula",
  description:
    "AI Pusula is an independent AI tools directory covering Turkish and English content. Our mission is to help you find the right tool fast.",
  alternates: { canonical: "/en/about" },
};

export default function AboutEN() {
  return (
    <>
      <Navbar lang="en" />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12 space-y-10">

          <nav className="text-sm text-gray-500">
            <Link href="/en" className="hover:underline">Home</Link>
            {" / "}
            <span className="text-gray-900 font-medium">About</span>
          </nav>

          <section>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              About AI Pusula
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              <strong>AI Pusula</strong> is an independent AI tools review platform
              covering tools in both Turkish and English — from ChatGPT and Midjourney
              to ElevenLabs and GitHub Copilot, all in one place.
            </p>
          </section>

          <section className="rounded-[28px] border border-black/8 bg-gray-50 p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">🎯 Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The AI landscape expands every month with new tools, models, and
              pricing options. Finding the right tool among so many choices is
              getting harder.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The AI Pusula team's mission is simple: answer the question{" "}
              <strong>which tool is right for which job?</strong> — quickly and
              clearly. For every tool, we provide in-depth reviews, real-world
              usage examples, pricing comparisons, and alternatives.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">📋 What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🔍", title: "In-Depth Reviews",      desc: "Features, pros, cons, and real-world usage scenarios for every tool." },
                { icon: "💰", title: "Pricing Comparison",    desc: "Free, freemium, and paid plans compared side by side." },
                { icon: "💡", title: "Example Prompts",       desc: "Copy-ready prompts to get the best results from each tool." },
                { icon: "🔗", title: "Alternatives",          desc: "Direct links to similar tools for every category." },
                { icon: "🌐", title: "Bilingual Content",     desc: "All content is available in both Turkish and English." },
                { icon: "📅", title: "Kept Up to Date",       desc: "We regularly track pricing and feature changes." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-black/8 bg-white p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-black/8 bg-gray-50 p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">✍️ Editorial Independence</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              AI Pusula operates as an independent publication. No tool developer
              pays us — directly or indirectly — for favorable coverage. Our
              reviews reflect the team's honest assessment only.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ads on the site are served automatically through Google AdSense.
              Ad content does not influence our editorial decisions.
            </p>
          </section>

          <section className="rounded-[28px] bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-200 p-7 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-600 text-sm mb-5">
              Found an error, have a tool suggestion, or want to collaborate?
            </p>
            <Link
              href="/en/contact"
              className="inline-flex rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition"
            >
              Contact Page →
            </Link>
          </section>

        </div>
      </main>
    </>
  );
}
