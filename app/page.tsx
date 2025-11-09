import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* 1. Section Héro */}
      <Hero />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* 2. Section Missions de l'ANPIR */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Missions Fondamentales
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Promouvoir l&apos;excellence, la recherche et l&apos;éthique dans le
            domaine de l&apos;imagerie et de la radiothérapie au Niger.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Formation Continue",
                desc: "Organisation de séminaires, ateliers et congrès scientifiques.",
                icon: "📚",
              },
              {
                title: "Représentation",
                desc: "Défendre les intérêts de la profession auprès des autorités et partenaires.",
                icon: "🤝",
              },
              {
                title: "Recherche & Éthique",
                desc: "Encourager la recherche et veiller au respect des normes éthiques et professionnelles.",
                icon: "🔬",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Call-to-Action : Actualités/Agenda */}
        <section className="bg-blue-50 p-8 rounded-xl shadow-inner flex flex-col md:flex-row justify-between items-center mt-12">
          <h2 className="text-2xl font-bold text-blue-800">
            Ne manquez aucune information clé de l&apos;ANPIR.
          </h2>
          <Link
            href="/evenements"
            className="mt-4 md:mt-0 ml-0 md:ml-6 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-150 shadow-md"
          >
            Consulter l&apos;Agenda
          </Link>
        </section>
      </div>
    </>
  );
}
