import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Liens rapides / Informations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-6 mb-6">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-blue-400">ANPIR</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/a-propos" className="hover:text-white">
                  Nos Missions
                </Link>
              </li>
              <li>
                <Link href="/statuts" className="hover:text-white">
                  Statuts
                </Link>
              </li>
              <li>
                <Link href="/partenaires" className="hover:text-white">
                  Partenaires
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3 text-blue-400">
              Ressources
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/actualites" className="hover:text-white">
                  Dernières Actualités
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="hover:text-white">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="/espace-membre" className="hover:text-white">
                  Espace Membre
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-semibold text-lg mb-3 text-blue-400">
              Contact
            </h4>
            <p className="text-sm text-gray-400">
              Siège Social : [Adresse à Niamey]
              <br />
              Email : contact@anpir-niger.org
              <br />
              Tél : [+227...]
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          &copy; {currentYear} ANPIR. Tous droits réservés.<br></br>
          <span>Powered by <a href="https://taramtech.com">Taram Tech</a> </span>
        </div>
      </div>
    </footer>
  );
}
