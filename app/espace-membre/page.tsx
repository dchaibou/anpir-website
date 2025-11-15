"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function EspaceMembrePage() {
  const { user, isLoggedIn, logout } = useAuth();
  const router = useRouter();

  // Redirection si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn || !user) {
    return (
      <div className="text-center p-20">
        <p className="text-lg text-gray-600">Chargement ou redirection...</p>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2">
          Bienvenue, {user.name} !
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Votre tableau de bord personnel de l&apos;ANPIR.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bloc de Profil */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-blue-100 col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Mon Profil
            </h2>
            <p>
              <strong>Email :</strong> {user.email}
            </p>
            <p>
              <strong>Statut :</strong> Membre Actif
            </p>
            <p className="mt-4">
              <button
                onClick={logout}
                className="text-red-500 hover:text-red-700 font-medium transition duration-150"
              >
                Déconnexion
              </button>
            </p>
          </div>

          {/* Ressources (Contenu Protégé) */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Ressources Protégées
            </h2>
            <ul className="space-y-3">
              <li className="p-3 border rounded-md hover:bg-gray-50 transition duration-150">
                <Link
                  href="/espace-membre/pv-reunions"
                  className="text-blue-600 font-medium"
                >
                  Procès-verbaux des réunions du Bureau Exécutif (Accès
                  restreint)
                </Link>
              </li>
              <li className="p-3 border rounded-md hover:bg-gray-50 transition duration-150">
                <Link
                  href="/espace-membre/documents-internes"
                  className="text-blue-600 font-medium"
                >
                  Documents internes (Statuts, Règlements, etc.)
                </Link>
              </li>
              <li className="p-3 border rounded-md hover:bg-gray-50 transition duration-150">
                <Link
                  href="/espace-membre/bibliotheque-scientifique"
                  className="text-blue-600 font-medium"
                >
                  Bibliothèque Scientifique (Articles et Abstracts)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
