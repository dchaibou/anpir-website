import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Objectifs Statutaires
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            L&apos;ANPIR vise à regrouper, représenter et défendre la profession
            pour le développement de l&apos;Imagerie Médicale et de la
            Radiothérapie au Niger.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {[
              {
                icon: "⚖️",
                title: "Éthique et Déontologie",
                desc: "Contribuer à maintenir les principes moraux de la profession en accord avec le code de l'éthique et la déontologie.",
              },
              {
                icon: "🤝",
                title: "Défense et Représentation",
                desc: "Protéger et servir les intérêts des membres et représenter la profession auprès des pouvoirs publics et organismes privés.",
              },
              {
                icon: "📚",
                title: "Formation et Encadrement",
                desc: "Encourager la formation continue des membres et participer activement à l'encadrement des stagiaires.",
              },
              {
                icon: "📢",
                title: "Information et Image",
                desc: "Aider le public à connaitre la profession en utilisant les divers moyens d'information et protéger les titres conférés par les diplômes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white"
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
    </div>
  );
}
