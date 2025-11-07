import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          404 - Page Non Trouvée
        </p>

        <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
          Oups !
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Nous sommes désolés, l'adresse que vous avez demandée n'existe pas ou
          a été déplacée.
        </p>

        <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
          >
            Retourner à l'Accueil
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-150"
          >
            Contacter le Support
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Si vous pensez qu'il s'agit d'une erreur, veuillez vérifier l'URL.
        </p>
      </div>
    </div>
  );
}
