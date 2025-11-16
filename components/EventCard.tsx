import { Event } from "@/lib/types";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  event: Event;
}

// Fonction utilitaire pour formater la date
const formatDates = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startDay = startDate.toLocaleDateString("fr-FR", { day: "numeric" });
  const startMonth = startDate.toLocaleDateString("fr-FR", { month: "short" });
  const startYear = startDate.toLocaleDateString("fr-FR", { year: "numeric" });

  // Si l'événement dure plus d'une journée
  if (startDate.toDateString() !== endDate.toDateString()) {
    const endDay = endDate.toLocaleDateString("fr-FR", { day: "numeric" });
    const endMonth = endDate.toLocaleDateString("fr-FR", { month: "short" });
    return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${startYear}`;
  }

  // Événement d'une seule journée
  return `${startDay} ${startMonth} ${startYear}`;
};

export default function EventCard({ event }: EventCardProps) {
  const isPast = new Date(event.endDate) < new Date();

  const ButtonComponent = event.link.startsWith("http") ? "a" : Link;

  return (
    <article
      className={`p-5 rounded-xl shadow-lg transition duration-300 flex space-x-4 ${
        isPast
          ? "bg-gray-50 opacity-80"
          : "bg-white hover:shadow-xl border border-red-100"
      }`}
    >
      {/* Date Clé (Format J-M) */}
      <div className="shrink-0 text-center w-16">
        <div
          className={`text-3xl font-bold ${
            isPast ? "text-gray-400" : "text-red-500"
          }`}
        >
          {new Date(event.startDate).toLocaleDateString("fr-FR", {
            day: "2-digit",
          })}
        </div>
        <div
          className={`text-sm uppercase ${
            isPast ? "text-gray-500" : "text-red-500"
          }`}
        >
          {new Date(event.startDate).toLocaleDateString("fr-FR", {
            month: "short",
          })}
        </div>
        {isPast && (
          <span className="text-xs text-red-500 font-semibold mt-1 block">
            Terminé
          </span>
        )}
      </div>

      {/* Détails de l'événement */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-1 leading-snug">
          {event.title}
        </h3>

        {/* Métadonnées */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-red-400" />
            <span>{event.location}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Calendar className="h-4 w-4 text-red-400" />
            <span>{formatDates(event.startDate, event.endDate)}</span>
          </span>
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800`}
          >
            {event.type}
          </span>
        </div>

        {/* Bouton d'Action */}
        <ButtonComponent
          href={event.link}
          target={event.link.startsWith("http") ? "_blank" : "_self"}
          className={`inline-block mt-3 px-4 py-2 text-sm font-semibold rounded-md transition duration-150 shadow-md 
            ${
              isPast
                ? "bg-gray-300 text-gray-900 cursor-not-allowed pointer-events-none"
                : "bg-red-400 text-white hover:bg-red-700"
            }`}
        >
          {isPast
            ? "Voir les comptes rendus"
            : event.isRegistrationOpen
            ? "S'inscrire / Détails"
            : "En savoir plus"}
        </ButtonComponent>
      </div>
    </article>
  );
}
