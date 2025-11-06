import { Metadata } from "next";
import ExecutiveBureau from "@/components/ExecutiveBureau";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À Propos de l'ANPIR - Missions, Statuts et Bureau Exécutif",
  description:
    "Découvrez l'histoire, les statuts et l'équipe dirigeante (Bureau Exécutif) de l'Association Nigérienne des Professionnels de l'Imagerie Médicale et de la Radiothérapie (ANPIR).",
};

export default function AboutPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Titre et Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl">
            Qui sommes-nous ?
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            L'Association Nigérienne des Professionnels de l'Imagerie Médicale
            et de la Radiothérapie.
          </p>
        </div>

        {/* Section Historique et Missions */}
        <section className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4 border-b pb-2">
                Notre Histoire
              </h2>
              <p className="text-gray-700 mb-4">
                Fondée en <b>[Année de Fondation]</b> par un groupe de
                praticiens pionniers, l'ANPIR est née de la volonté d'unifier la
                voix des professionnels de l'imagerie médicale et de la
                radiothérapie au Niger. Notre création a été un catalyseur pour
                l'adoption des meilleures pratiques et l'acquisition
                d'équipements de pointe, notamment l'inauguration du premier
                centre de radiothérapie du pays.
              </p>
              <p className="text-gray-700">
                L'Association est officiellement reconnue par le Ministère de la
                Santé Publique et de la Population.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4 border-b pb-2">
                Nos Objectifs
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc list-inside ml-4">
                <li>
                  Défendre les **intérêts moraux et professionnels** de ses
                  membres.
                </li>
                <li>
                  Promouvoir la **formation continue** et la recherche
                  scientifique.
                </li>
                <li>
                  Participer à l'amélioration de la **qualité des soins** et des
                  équipements.
                </li>
                <li>
                  Établir des partenariats avec des organismes nationaux et
                  internationaux.
                </li>
              </ul>
              <p className="mt-4 text-sm text-blue-600">
                <Link
                  href="/documents/statuts-anpir.pdf"
                  target="_blank"
                  className="hover:underline"
                >
                  Consulter nos Statuts et Règlements Intérieurs (PDF)
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Section Bureau Exécutif */}
        <ExecutiveBureau />
      </div>
    </div>
  );
}
