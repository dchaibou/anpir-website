import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Contactez l'ANPIR - Association Nigérienne des Professionnels de l'Imagerie Médicale et de la Radiothérapie",
  description:
    "Contactez le bureau exécutif de l'ANPIR. Adresse, téléphone et formulaire de contact direct pour toutes questions, partenariats ou demandes.",
};

export default function ContactPage() {
  const contactInfo = {
    address: "Quartier Bobiel, Arrondissement Communal Niamey I",
    email: "contact@anpir.ne",
    phone: "+227 90 34 50 15",
  };

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Titre */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Nous sommes à votre disposition pour toute question relative à
            l&#39;adhésion, aux événements ou aux partenariats.
          </p>
        </div>

        {/* Contenu - Informations & Formulaire */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Colonne des Informations de Contact */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-2xl font-bold text-blue-800">
              Nos Coordonnées
            </h2>

            {/* Adresse */}
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Siège Social
                </h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Adresse Électronique
                </h3>
                <p className="text-blue-600 hover:text-blue-700">
                  <a href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Téléphone
                </h3>
                <p className="text-gray-600">{contactInfo.phone}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Disponible du Lundi au Vendredi, 9h-17h (WAT)
                </p>
              </div>
            </div>

            {/* Simulation de carte/localisation */}
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                Localisation approximative à Niamey (Intégration future
                d&#39;une carte Google Maps ou OpenStreetMap).
              </p>
              <div className="mt-2 w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                [Placeholder Carte de Niamey]
              </div>
            </div>
          </div>

          {/* Colonne du Formulaire de Contact */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
