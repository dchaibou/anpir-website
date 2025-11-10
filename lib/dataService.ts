import { Article, Event } from './types';

// **********************************************
// DONNÉES DE SIMULATION
// Ajout du champ 'content' pour le corps de l'article
// **********************************************
const DUMMY_ARTICLES_FULL: (Article & { content: string })[] = [
  {
    id: 1,
    title: "Lancement du premier centre de Radiothérapie au Niger : Un pas de géant pour l'ANPIR",
    slug: "lancement-centre-radiotherapie-niger",
    summary: "Le Ministre de la Santé a inauguré le premier centre de radiothérapie du pays. L'ANPIR salue cette avancée et s'engage dans la formation des équipes.",
    imageUrl: "/images/radiotherapie-launch.jpeg",
    category: 'Communiqué',
    date: '2025-11-06',
    content: `
      <p class="text-lg leading-8 text-gray-700 mb-6">
        C'est avec une immense fierté que l'Association Nigérienne des Professionnels de l'Imagerie Médicale et de la Radiothérapie (ANPIR) annonce l'inauguration du tout premier centre de radiothérapie du pays, un événement marquant une étape décisive dans la lutte contre le cancer au Niger.
      </p>
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 mt-8 mb-4">
        Un engagement national et international
      </h2>
      <p class="mb-6">
        Ce projet, fruit d'une collaboration étroite entre le Ministère de la Santé, l'Agence Internationale de l'Énergie Atomique (AIEA) et des partenaires techniques, permettra d'offrir des soins oncologiques de pointe qui étaient jusqu'à présent inaccessibles sur le territoire.
      </p>
      <p class="mb-6 italic">
        "Ce centre est un espoir renouvelé pour des milliers de nos concitoyens. L'ANPIR se positionne en soutien pour garantir l'excellence dans l'utilisation et la maintenance de ces équipements," a déclaré le Président de l'ANPIR lors de la cérémonie.
      </p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Formation des professionnels</h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Formation initiale et continue des radiophysiciens.</li>
        <li>Encadrement des techniciens en radiothérapie.</li>
        <li>Mise en place de protocoles cliniques standardisés.</li>
      </ul>
      <p>
        L'association invite tous ses membres à se mobiliser pour accompagner cette révolution technologique.
      </p>
    `,
  },
  {
    id: 2,
    title: "Inscription ouverte : Atelier de formation en Téléradiologie",
    slug: "atelier-formation-teleradiologie-2026",
    summary: "Cet atelier pratique est destiné aux radiologues et techniciens pour maîtriser les outils de diagnostic à distance. Places limitées.",
    imageUrl: "/images/teleradiologie-workshop.jpeg",
    category: 'Formation',
    date: '2025-10-27',
    content: "<p>Détails complets de l'atelier de formation...</p>", // Contenu raccourci pour la démo
  },
  {
    id: 3,
    title: "PV de la dernière réunion du Bureau Exécutif disponible dans l'Espace Membre",
    slug: "pv-reunion-bureau-novembre-2025",
    summary: "Le procès-verbal de la réunion du 1er novembre est accessible. L'ordre du jour portait sur le financement du congrès annuel.",
    imageUrl: "/images/reunion-anpir.jpeg",
    category: 'Communiqué',
    date: '2025-11-03',
    content: "<p>Détails sur la disponibilité du PV...</p>", // Contenu raccourci pour la démo
  },
];

// Réutilisez ou exportez la fonction getLatestArticles si elle existe déjà dans votre fichier
export async function getLatestArticles(): Promise<Article[]> {
  // ... (votre implémentation précédente)
  // Utilisation de DUMMY_ARTICLES_FULL pour garantir la cohérence
  return DUMMY_ARTICLES_FULL.map(({ content, ...rest }) => rest).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}


/**
 * Récupère un article complet par son slug.
 * @param slug Le slug unique de l'article.
 * @returns L'article trouvé ou null.
 */
export async function getArticleBySlug(slug: string): Promise<(Article & { content: string }) | null> {
  await new Promise(resolve => setTimeout(resolve, 300)); // Délai simulé

  const article = DUMMY_ARTICLES_FULL.find(a => a.slug === slug);
  return article || null;
}

/**
 * Génère les chemins statiques (slugs) pour l'ISR/SSG.
 */
export async function getAllArticleSlugs() {
  return DUMMY_ARTICLES_FULL.map(a => a.slug);
}


// **********************************************
// DONNÉES DE SIMULATION DES ÉVÉNEMENTS
// **********************************************
const DUMMY_EVENTS: Event[] = [
  {
    id: 101,
    title: '5ème Congrès National de Radiologie et d’Imagerie Médicale (CNRIM)',
    location: 'Palais des Congrès, Niamey',
    startDate: '2026-03-15',
    endDate: '2026-03-17',
    isRegistrationOpen: true,
    type: 'Congrès',
    link: '/evenements/cnrim-2026',
  },
  {
    id: 102,
    title: 'Atelier pratique : Sécurité et Radioprotection en Radiothérapie',
    location: 'Centre National de Radiothérapie, Niamey',
    startDate: '2025-12-10',
    endDate: '2025-12-10',
    isRegistrationOpen: true,
    type: 'Atelier',
    link: '/evenements/atelier-radioprotection',
  },
  {
    id: 103,
    title: 'Journée Scientifique sur l’Imagerie Maternelle et Pédiatrique',
    location: 'Hôpital Général de Référence, Niamey',
    startDate: '2025-11-28', // Passé
    endDate: '2025-11-28',
    isRegistrationOpen: false,
    type: 'Journée Scientifique',
    link: '/evenements/imagerie-pediatrique-2025',
  },
  {
    id: 104,
    title: 'Séminaire sur la Télémédecine et l’IA en Imagerie',
    location: 'En ligne (Webinaire)',
    startDate: '2026-01-20',
    endDate: '2026-01-20',
    isRegistrationOpen: true,
    type: 'Séminaire',
    link: 'https://zoom.us/webinar/anpir-ia',
  },
];

/**
 * Récupère tous les événements et les sépare en futurs et passés.
 */
export async function getEvents() {
  await new Promise(resolve => setTimeout(resolve, 300));

  const now = new Date();

  const sortedEvents = DUMMY_EVENTS.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  const upcomingEvents = sortedEvents.filter(event => new Date(event.endDate) >= now);
  const pastEvents = sortedEvents.filter(event => new Date(event.endDate) < now).reverse(); // Le plus récent en premier

  return { upcoming: upcomingEvents, past: pastEvents };
}