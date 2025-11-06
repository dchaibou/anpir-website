import Image from "next/image";

// Données de simulation du Bureau Exécutif (à remplacer par les vraies données)
const bureauMembers = [
  {
    name: "Dr. Aïsha Diallo",
    title: "Présidente",
    specialty: "Médecin Radiologue, CHU Niamey",
    photoUrl: "/images/aisha-diallo.jpg",
    description:
      "Visionnaire et leader, elle est la force motrice derrière l'expansion des services d'imagerie au Niger.",
  },
  {
    name: "Pr. Omar Bako",
    title: "Vice-Président",
    specialty: "Oncologue-Radiothérapeute",
    photoUrl: "/images/omar-bako.jpg",
    description:
      "Expert en radiothérapie, il assure la liaison avec les organismes internationaux (AIEA).",
  },
  {
    name: "Mme. Zara Moussa",
    title: "Secrétaire Générale",
    specialty: "Manipulatrice en Électroradiologie Médicale (MERM)",
    photoUrl: "/images/zara-moussa.jpg",
    description:
      "Garant de l'organisation interne et de la coordination des réunions du bureau.",
  },
  {
    name: "Dr. Ibrahim Sani",
    title: "Trésorier",
    specialty: "Physicien Médical",
    photoUrl: "/images/ibrahim-sani.jpg",
    description:
      "Chargé des finances et du suivi des cotisations et des subventions.",
  },
];

export default function ExecutiveBureau() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10 text-center">
        Le Bureau Exécutif
      </h2>
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {bureauMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-500">
              {/* Placeholder pour la photo de profil */}
              <Image
                src={member.photoUrl || "/images/default-profile.jpg"}
                alt={`Photo de ${member.name}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="128px"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-blue-600 uppercase mt-1">
              {member.title}
            </p>
            <p className="text-gray-500 text-sm italic mt-1">
              {member.specialty}
            </p>
            <p className="text-gray-600 mt-3 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-500 mt-10">
        Le Bureau est élu pour un mandat de [Durée] ans conformément aux statuts
        de l'ANPIR.
      </p>
    </section>
  );
}
