import { getEvents } from "@/lib/dataService";
import EventCard from "@/components/EventCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda Événements & Formations ANPIR",
  description:
    "Consultez l'agenda des prochains congrès, ateliers et formations organisés par l'Association Nigérienne des Professionnels de l'Imagerie Médicale et de la Radiothérapie (ANPIR).",
};

export default async function EvenementsPage() {
  // Récupération des données côté serveur
  const { upcoming, past } = await getEvents();

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Titre principal */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-red-600 sm:text-5xl">
            Agenda Événements & Formations
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Retrouvez tous les rendez-vous scientifiques et professionnels de
            l&apos;ANPIR.
          </p>
        </div>

        {/* --- Section Événements à Venir --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-red-500 mb-8 border-b pb-2">
            Prochains Événements ({upcoming.length})
          </h2>

          {upcoming.length > 0 ? (
            <div className="space-y-6">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg text-center text-gray-500">
              Aucun événement n&apos;est prévu dans l&apos;immédiat. Revenez
              bientôt !
            </div>
          )}
        </section>

        {/* --- Section Événements Passés --- */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">
            Événements Passés ({past.length})
          </h2>

          {past.length > 0 ? (
            <div className="space-y-6">
              {past.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg text-center text-gray-500">
              Aucun événement historique n&apos;est enregistré.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
