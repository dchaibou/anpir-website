"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        login(data.user); // Met à jour le contexte Auth
        router.push("/espace-membre"); // Redirection vers le tableau de bord
      } else {
        setError(
          data.message ||
            "Échec de la connexion. Veuillez vérifier vos identifiants."
        );
      }
    } catch (err) {
      setError("Erreur réseau ou du serveur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full max-w-md mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Connexion Membres
      </h2>
      <p className="text-center text-gray-500">
        Utilisez votre email et mot de passe ANPIR.
      </p>

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          {error}
        </div>
      )}

      {/* Champ Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2.5 px-3 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Champ Mot de Passe */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Mot de Passe
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2.5 px-3 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Bouton de Connexion */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {isSubmitting ? "Connexion en cours..." : "Se Connecter"}
      </button>

      <p className="text-center text-sm text-gray-500">
        <Link
          href="/adhesion"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Pas encore membre ? Adhérez ici
        </Link>
      </p>
    </form>
  );
}
