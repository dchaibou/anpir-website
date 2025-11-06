import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Arrière-plan (Image ou motif) */}
      <div className="absolute inset-0 -z-10 h-full w-full opacity-30">
        {/* Placeholder pour une image de haute qualité liée à la radiologie/médecine au Niger */}
        <div
          className="bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: "url('/images/niger-medical-bg.jpeg')",
            backgroundPosition: "center 40%", // Ajuster si l'image est un placeholder
          }}
        >
          {/* Optionnel: Un dégradé pour améliorer la lisibilité du texte */}
          <div
            className="absolute inset-0 bg-gray-900 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold leading-7 text-blue-400 mb-2">
            UNE MEILLEURE SANTÉ POUR TOUS
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Association Nigérienne des Professionnels de l'Imagerie Médicale et
            de la Radiothérapie
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            L'ANPIR est la plateforme d'excellence pour la promotion, la
            formation et l'encadrement des professionnels de l'imagerie et de la
            radiothérapie au Niger.
          </p>

          {/* Boutons d'Action (Call-to-Action) */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/adhesion"
              className="rounded-md bg-blue-600 px-4 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-150"
            >
              Adhérer à l'Association
            </Link>
            <Link
              href="/actualites"
              className="text-lg font-semibold leading-6 text-white hover:text-blue-400 transition duration-150"
            >
              Voir les Actualités <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
