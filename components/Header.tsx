"use client"; // ⬅️ RENDRE CE COMPOSANT CLIENT

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

// Les liens de navigation principaux de l'ANPIR (inchangés)
const navItems = [
  { name: "Accueil", href: "/" },
  { name: "L'Association", href: "/a-propos" },
  { name: "Actualités", href: "/actualites" },
  { name: "Événements & Formations", href: "/evenements" },
  { name: "Adhésion", href: "/adhesion" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const { isLoggedIn, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/"); // Rediriger vers la page d'accueil après la déconnexion
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Titre */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Remplacer par un véritable logo de l'ANPIR */}
          <div className="text-2xl font-bold text-blue-800">ANPIR</div>
          <span className="hidden sm:inline text-sm text-gray-600">
            Imagerie & Radiothérapie
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition duration-150 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Bouton Dynamique : Connexion / Dashboard / Déconnexion */}
        {isLoggedIn ? (
          <div className="flex items-center space-x-3">
            <Link
              href="/espace-membre"
              className="hidden sm:inline bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm hover:bg-blue-200 transition duration-150 font-medium"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-150 text-sm font-medium"
            >
              Déconnexion
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-150 font-medium text-sm"
          >
            Espace Membre
          </Link>
        )}
      </div>
    </header>
  );
}
