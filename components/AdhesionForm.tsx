"use client";

import { useState } from "react";

// Fonction de simulation d'envoi de données (sera remplacée par une API Route plus tard)
const submitAdhesion = async (formData: FormData) => {
  console.log("Données envoyées (simulation) :");
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  // Ici, on enverrait les données à une Next.js API Route (ex: /api/adhesion)
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { success: true };
};

export default function AdhesionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const result = await submitAdhesion(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      // Réinitialiser le formulaire si nécessaire
      event.currentTarget.reset();
    } else {
      alert("Une erreur est survenue lors de l'envoi.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center shadow-md">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">
          Félicitations !
        </h3>
        <p className="text-lg text-green-700">
          Votre demande d&apos;adhésion à l&apos;ANPIR a été envoyée avec
          succès. Nous examinerons votre candidature et vous contacterons sous
          peu pour le paiement de la cotisation. Merci de votre engagement !
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-200"
    >
      {/* Type de Professionnel */}
      <div>
        <label
          htmlFor="profession"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Votre Profession <span className="text-red-500">*</span>
        </label>
        <select
          id="profession"
          name="profession"
          required
          className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        >
          <option value="">Sélectionnez votre corps de métier</option>
          <option value="radiologue">Médecin Radiologue</option>
          <option value="oncologue">Oncologue / Radiothérapeute</option>
          <option value="manipulateur">
            Manipulateur en Électroradiologie Médicale (MERM)
          </option>
          <option value="physicien">Physicien Médical</option>
          <option value="etudiant">Étudiant/Interne dans la filière</option>
          <option value="autre">Autre Professionnel du secteur</option>
        </select>
      </div>

      {/* Nom et Prénom */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Email et Téléphone */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Téléphone (WhatsApp)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Lieu d'exercice */}
      <div>
        <label
          htmlFor="workplace"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Lieu d&apos;exercice principal (Hôpital, Centre, Ville)
        </label>
        <input
          type="text"
          id="workplace"
          name="workplace"
          className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>

      {/* Message / Motivation */}
      <div>
        <label
          htmlFor="motivation"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Motivation pour rejoindre l&apos;ANPIR (Optionnel)
        </label>
        <textarea
          id="motivation"
          name="motivation"
          rows={3}
          className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>

      {/* Bouton d'envoi */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 transition duration-150"
      >
        {isSubmitting ? "Envoi en cours..." : "Soumettre ma Demande d'Adhésion"}
      </button>

      <p className="text-center text-xs text-gray-500 mt-4">
        * En soumettant ce formulaire, vous acceptez d&apos;être contacté(e) par
        le Bureau Exécutif de l&apos;ANPIR.
      </p>
    </form>
  );
}
