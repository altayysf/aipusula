import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function AboutEN() {
  return (
    <>
      <Navbar lang="en" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <Link href="/en" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-gray-900 font-medium">About</span>
          </div>

          <section className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              About AI Pusula
            </h1>

            <p className="mt-4 text-gray-700">
              AI Pusula is a curated directory that helps people discover,
              compare, and choose the right AI tools for their needs.
            </p>

            <p className="mt-4 text-gray-700">
              You’ll find tools across categories such as writing, image
              generation, video creation, audio, coding, and productivity — all
              organized to be easy to browse and understand.
            </p>

            <p className="mt-4 text-gray-700">
              Our goal is to build a trustworthy, up-to-date, and simple AI
              resource hub for both individuals and teams.
            </p>

            <p className="mt-4 text-gray-700">
              AI Pusula is continuously evolving. New tools are added regularly
              and existing pages are updated over time.
            </p>

            <p className="mt-4 text-gray-700">
              For feedback, suggestions, partnerships, or listing requests, feel
              free to reach out via our{" "}
              <Link href="/en/contact" className="underline font-medium">
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
