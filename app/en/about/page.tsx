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
              AI Pusula is a comprehensive AI tools directory created to help users easily 
              discover, compare, and make informed choices about the most suitable artificial 
              intelligence tools for their needs.
            </p>

            <p className="mt-4 text-gray-700">
              On our website, you can find detailed reviews of artificial intelligence tools 
              used in many different areas such as content creation, graphic design, video creation, 
              audio editing, coding, marketing, automation, and productivity. Each tool is presented 
              together with its use cases, key features, advantages, and potential usage scenarios.
            </p>

            <p className="mt-4 text-gray-700">
              The main goal of AI Pusula is to build a reliable, up-to-date, and easy-to-understand 
              artificial intelligence resource center for both individual users and businesses. 
              By following the rapidly emerging solutions in the AI world, we prioritize providing 
              our users with accurate and unbiased information.
            </p>

            <p className="mt-4 text-gray-700">
              In addition, in our blog section, we regularly feature content such as artificial 
              intelligence trends, guides, comparisons, usage tips, and industry analyses. 
              Our aim is to make artificial intelligence more accessible and understandable for everyone.
            </p>

            <p className="mt-4 text-gray-700">
              AI Pusula is a continuously evolving project. New tools are added regularly, 
              existing content is updated, and the site is constantly improved based on user feedback.
            </p>

            <p className="mt-4 text-gray-700">
              If you want to use artificial intelligence tools more efficiently, quickly find 
              the right tool, and make the most of the opportunities offered by technology, 
              AI Pusula is the right place for you.
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
