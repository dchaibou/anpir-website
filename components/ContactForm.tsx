"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        event.currentTarget.reset();
      } else {
        throw new Error("Échec de l'envoi du message. Réessayez.");
      }
    } catch (err) {
      setError(
        "Erreur de connexion. Veuillez réessayer ou utiliser l'e-mail direct : " + err
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-green-50 p-6 shadow-md border border-green-200">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">
          Message Envoyé !
        </h3>
        <p className="text-lg text-green-700">
          Merci pour votre message. Nous vous répondrons dans les meilleurs
          délais.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Envoyez-nous un message
      </h2>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm"
          role="alert"
        >
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 text-gray-900 block w-full rounded-md border-0 py-2.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Adresse Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 text-gray-900 block w-full rounded-md border-0 py-2.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Objet du message
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 text-gray-900 block w-full rounded-md border-0 py-2.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Votre Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 text-gray-900 block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-md bg-red-600 px-3 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:opacity-50 transition duration-150"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
        </button>
      </form>
    </div>
  );
}
