import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-neutral-900 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full opacity-30">
        <div
          className="bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: "url('/images/niger-medical-bg.jpeg')",
            backgroundPosition: "center 40%",
          }}
        >
          <div
            className="absolute inset-0 bg-gray-900 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold leading-7 text-red-400 mb-2">
            UNE MEILLEURE SANTÉ POUR TOUS
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Bienvenue sur le site officiel de l&apos;Association Nigérienne des
            Professionnels d&apos;Imagerie Médicale et de la Radiothérapie
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Nous regroupons les{" "}
            <b>techniciens supérieurs, ingénieurs et spécialistes</b> du domaine
            afin de défendre la profession, renforcer les compétences,
            promouvoir l’éthique et contribuer à l’amélioration des soins de
            santé pour tous.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/adhesion"
              className="rounded-md bg-red-600 px-4 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition duration-150"
            >
              Adhérer à l&apos;Association
            </Link>
            <Link
              href="/actualites"
              className="text-lg font-semibold leading-6 text-white hover:text-red-400 transition duration-150"
            >
              Voir les Actualités <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
