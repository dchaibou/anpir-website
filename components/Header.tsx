'use client';

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from 'react'; // ⬅️ Import de useState
import { Menu, X, LogOut, User } from 'lucide-react'; // ⬅️ Import des icônes

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
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ⬅️ Nouvel état pour le menu mobile

    const handleLogout = () => {
        logout();
        router.push("/");
        setIsMenuOpen(false); // Fermer le menu après déconnexion
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Fermer le menu après un clic sur un lien
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                
                {/* Logo/Titre */}
                <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
                    <div className="text-2xl font-bold text-blue-800">ANPIR</div>
                    <span className="hidden sm:inline text-sm text-gray-600">
                        Imagerie & Radiothérapie
                    </span>
                </Link>

                {/* Navigation DESKTOP (Cache sur mobile) */}
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

                {/* Boutons d'Action (Visibles sur tous les écrans, mais adaptés) */}
                <div className="flex items-center space-x-3">
                    
                    {/* Bouton Espace Membre/Déconnexion (Visible sur tous) */}
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-150 text-sm font-medium"
                        >
                            <LogOut className="inline h-4 w-4 mr-1" /> Déconnexion
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-150 font-medium text-sm"
                        >
                            Espace Membre
                        </Link>
                    )}

                    {/* Bouton du MENU MOBILE (Visible uniquement sur mobile) */}
                    <button
                        className="md:hidden text-gray-700 hover:text-blue-600 p-2 rounded-md"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* --- MENU MOBILE (Tiroir déroulant) --- */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t border-gray-200`}>
                <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {/* Liens de Navigation */}
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                        >
                            {item.name}
                        </Link>
                    ))}
                    
                    <hr className="my-2 border-gray-200" />
                    
                    {/* Boutons d'Action pour Mobile */}
                    {isLoggedIn ? (
                        <>
                            <Link
                                href="/espace-membre"
                                onClick={handleLinkClick}
                                className="block w-full text-center px-3 py-2 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
                            >
                                <User className="inline h-4 w-4 mr-1" /> Tableau de Bord
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-center px-3 py-2 rounded-md font-medium text-white bg-red-500 hover:bg-red-600 transition duration-150 mt-1"
                            >
                                <LogOut className="inline h-4 w-4 mr-1" /> Déconnexion
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            onClick={handleLinkClick}
                            className="block w-full text-center px-3 py-2 rounded-md font-medium text-white bg-green-600 hover:bg-green-700 transition duration-150"
                        >
                            Espace Membre
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}