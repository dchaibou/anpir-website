import { getLatestArticles } from "@/lib/dataService";
import ArticleCard from "@/components/ArticleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités ANPIR - Derniers Communiqués et Formations",
  description:
    "Retrouvez ici les dernières actualités, communiqués officiels et annonces de formations de l'Association Nigérienne des Professionnels de l'Imagerie Médicale et de la Radiothérapie.",
};

export default async function ActualitesPage() {
  // Récupération des données côté serveur (simulant un fetch SSG/ISR)
  const articles = await getLatestArticles();

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Titre de la page */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Actualités et Ressources
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Les dernières nouvelles, les événements à venir et les communiqués
            officiels de l&#39;ANPIR.
          </p>
        </div>

        {/* Grille des articles */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {articles.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Aucune actualité disponible pour le moment.
          </p>
        )}
      </div>
    </div>
  );
}
