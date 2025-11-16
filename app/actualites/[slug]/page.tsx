import { getArticleBySlug, getAllArticleSlugs } from "@/lib/dataService";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// Définit les paramètres à pré-rendre lors du build (SSG)
export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  // Retourne un tableau d'objets { slug: 'valeur' }
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Fonction pour générer des métadonnées dynamiques
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article non trouvé - ANPIR",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  return {
    title: article.title + " | ANPIR Actualités",
    description: article.summary,
    // Vous pouvez ajouter ici l'image pour le partage social (OG Image)
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    // Affiche la page 404 de Next.js
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Lien de retour */}
        <Link
          href="/actualites"
          className="text-red-400 hover:text-red-700 transition duration-150 mb-6 inline-flex items-center"
        >
          <span className="mr-1 text-lg">←</span> Retour aux actualités
        </Link>

        {/* En-tête de l'article */}
        <header className="mb-8 border-b pb-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
            {article.title}
          </h1>
          <div className="flex items-center space-x-4 text-gray-500 text-sm">
            <time dateTime={article.date}>{formattedDate}</time>
            <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-xs font-medium text-red-700">
              {article.category}
            </span>
          </div>
        </header>

        {/* Image Principale (Image tag uniquement si vous avez un composant Image personnalisé) */}
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-xl">
          {/* Remplacer par le composant Image de Next.js si le chemin d'image est correct */}
          <Image
            src={article.imageUrl || "/images/default-anpir.jpeg"}
            alt={article.title}
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Corps de l'article (Utilisation de dangerouslySetInnerHTML pour le contenu HTML du CMS) */}
        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        >
          {/* Le style 'prose' de Tailwind Typography est recommandé ici pour formater le HTML */}
        </div>
      </div>
    </div>
  );
}
