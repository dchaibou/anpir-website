import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  // Formatage de la date
  const formattedDate = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="flex flex-col rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden bg-white border border-gray-100">
      <div className="relative w-full h-48">
        <Image
          src={article.imageUrl || "/images/default-anpir.jpg"}
          alt={`Image pour l'article : ${article.title}`}
          fill
          style={{ objectFit: "cover" }}
          className="transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-xs font-medium text-red-700">
            {article.category}
          </span>
          <time dateTime={article.date} className="text-gray-500">
            {formattedDate}
          </time>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 leading-snug hover:text-red-400 transition duration-150">
            <Link href={`/actualites/${article.slug}`}>{article.title}</Link>
          </h3>
          <p className="mt-3 text-base text-gray-500 line-clamp-3">
            {article.summary}
          </p>
        </div>

        <div className="mt-4">
          <Link
            href={`/actualites/${article.slug}`}
            className="text-sm font-semibold text-red-400 hover:text-red-600 flex items-center"
          >
            Lire l&apos;article
            <span className="ml-1 text-lg">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
