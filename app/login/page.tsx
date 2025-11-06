import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion - Espace Membre ANPIR",
  description:
    "Page de connexion sécurisée pour les membres de l'Association Nigérienne des Professionnels de l'Imagerie Médicale et de la Radiothérapie.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
}
