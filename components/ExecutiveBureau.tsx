import Image from "next/image";

const bureauMembers = [
  {
    name: "Boubacar Seïni Harouna",
    title: "Président",
    specialty: "Docteur en IMR",
    photoUrl: "/images/boubacar-seini-harouna.jpg",
    description:
      "Leader du BEN, il assure la responsabilité morale de l'Association et la représente en toute circonstance conformément aux statuts.",
  },
  {
    name: "Nassirou Seyni Oumarou",
    title: "Vice-Président",
    specialty: "T.S.R.",
    photoUrl: "/images/nassirou-seyni-oumarou.jpg",
    description:
      "Coordonne les Sections régionales et assure le remplacement du Président en cas d'empêchement.",
  },
  {
    name: "Mme Madou Aïssa Moussa",
    title: "Secrétaire Générale",
    specialty: "T.S.R.",
    photoUrl: "/images/madou-aissa-moussa.jpg",
    description:
      "Garant de l'organisation interne, chargée des correspondances, de la rédaction des procès-verbaux et de l'archivage.",
  },
  {
    name: "Alio Ibrahima",
    title: "Trésorier Général",
    specialty: "T.S.R.",
    photoUrl: "/images/alio-ibrahima.jpg",
    description:
      "Chargé de la gestion financière, du suivi des cotisations et de l'établissement des comptes de l'Association.",
  },
];

export default function ExecutiveBureau() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10 text-center">
        Le Bureau Exécutif National (BEN)
      </h2>
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {bureauMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-500">
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
        Le Bureau Exécutif est élu pour un mandat de{" "}
        <b>trois (3) ans renouvelable une seule fois</b> conformément à
        l&apos;Article 17 des statuts de l&apos;ANPIR.
      </p>
    </section>
  );
}
