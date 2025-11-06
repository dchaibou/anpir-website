import type { Metadata } from "next";
// Remplacement des polices Vercel/Geist par une police Google standard
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

// Configuration de la police Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // Ajout d'un fallback pour assurer la robustesse même en cas d'échec de téléchargement
  // Si la font Inter ne peut être chargée/téléchargée, le navigateur utilisera Arial.
  fallback: ["Arial", "sans-serif"],
});

// Métadonnées ANPIR (inchangées)
export const metadata: Metadata = {
  title:
    "ANPIR - Association Nigérienne des Professionnels de l'Imagerie Médicale et de la Radiothérapie",
  description:
    "Site officiel de l'Association Nigérienne des Professionnels de l'Imagerie Médicale et de la Radiothérapie (ANPIR). Actualités, adhésion, formations et ressources scientifiques.",
  keywords: [
    "ANPIR",
    "Niger",
    "Radiothérapie",
    "Imagerie Médicale",
    "Radiologie",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* Utilisation de la variable CSS de la police Inter */}
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
