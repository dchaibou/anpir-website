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
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl">
            Qui sommes-nous ?
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            L&apos;Association Nigérienne des Professionnels de l&apos;Imagerie
            Médicale et de la Radiothérapie.
          </p>
        </div>

        <section className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4 border-b pb-2">
                Notre Histoire et Statut
              </h2>
              <p className="text-gray-700 mb-4">
                L&apos;ANPIR a été officiellement <b>créée en 2016 à Niamey</b>.
                C&apos;est une organisation
                <b> apolitique, non confessionnelle et à but non lucratif</b>.
              </p>
              <p className="text-gray-700">
                Elle est née de la volonté d&apos;unifier la voix des
                professionnels de l&apos;imagerie médicale et de la
                radiothérapie, et regroupe les techniciens supérieurs,
                ingénieurs et spécialistes du domaine.
              </p>
              <p className="text-gray-700 mt-4">
                Sa mission est de <b>rassembler, représenter et défendre</b> les
                professionnels pour l&apos;amélioration des soins de santé au
                Niger.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4 border-b pb-2">
                Nos Objectifs Statutaires
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc list-inside ml-4">
                <li>
                  Défendre l&apos;<b>éthique et la déontologie</b> de la
                  profession.
                </li>
                <li>
                  <b>Représenter la profession</b> auprès des autorités et des
                  partenaires.
                </li>
                <li>
                  Encourager la <b>formation continue</b> des membres et
                  l&apos;encadrement des stagiaires.
                </li>
                <li>
                  Promouvoir la <b>coopération</b> nationale et internationale.
                </li>
                <li>
                  <b>Informer le public</b> sur le rôle de la profession dans la
                  santé publique.
                </li>
              </ul>
              <p className="mt-4 text-sm text-blue-600">
                <Link
                  href="/documents/statuts-anpir.pdf"
                  target="_blank"
                  className="hover:underline"
                >
                  Consulter nos Statuts et Règlement Intérieur (PDF)
                </Link>
              </p>
            </div>
          </div>
        </section>

        <ExecutiveBureau />
      </div>
    </div>
  );
}
