import Navbar from "../../../components/Navbar";
import ToolCard from "../../../components/ToolCard";
import { tools } from "../../../data/tools";


export default function AllToolsTR() {
  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Diğer Araçlar</h1>
          <p className="mt-2 text-gray-600 text-sm">
            Tüm yapay zekâ araçlarına göz at. Bir araca tıklayıp detay sayfasını ve resmi linki gör.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {tools.map((tool) => (
              <ToolCard
                key={tool.slug}
                tool={tool}
                lang="tr"
                href={`/tr/araclar/${tool.slug}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
