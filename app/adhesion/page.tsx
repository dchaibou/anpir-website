import AdhesionForm from "@/components/AdhesionForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Adhésion ANPIR - Rejoignez les Professionnels de l'Imagerie Médicale et de la Radiothérapie",
  description:
    "Formulaire de demande d'adhésion à l'Association Nigérienne des Professionnels de l'Imagerie Médicale et de la Radiothérapie (ANPIR).",
};

export default function AdhesionPage() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Titre et Introduction */}
        <div className="text-center mx-auto max-w-2xl mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Rejoignez l'ANPIR
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Devenez membre de l'Association Nigérienne des Professionnels de
            l'Imagerie Médicale et de la Radiothérapie. Votre engagement est
            essentiel pour faire progresser la profession au Niger.
          </p>
        </div>

        {/* Détails du Processus (avant le formulaire) */}
        <div className="mb-10 p-6 bg-blue-100 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">
            Processus d'Adhésion :
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-700">
            <li>Remplissez et soumettez le formulaire ci-dessous.</li>
            <li>Le Bureau Exécutif examinera votre candidature.</li>
            <li>
              Vous recevrez un email de confirmation contenant les modalités de
              paiement de la cotisation annuelle.
            </li>
            <li>Après paiement, vous recevrez vos accès à l'Espace Membre.</li>
          </ol>
        </div>

        {/* Composant Formulaire */}
        <AdhesionForm />
      </div>
    </div>
  );
}
