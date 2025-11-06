// Définition de l'interface pour une Actualité (article)
export interface Article {
    id: number;
    title: string;
    slug: string; // Utilisé pour l'URL de l'article détaillé
    summary: string;
    imageUrl: string;
    category: 'Événement' | 'Communiqué' | 'Formation' | 'Recherche';
    date: string; // Format ISO 8601 (ex: '2025-10-27')
}

// Définition de l'interface pour un Événement/Formation
export interface Event {
    id: number;
    title: string;
    location: string;
    startDate: string; // Date de début (ex: '2025-12-10')
    endDate: string; // Date de fin (ex: '2025-12-12')
    isRegistrationOpen: boolean;
    type: 'Congrès' | 'Atelier' | 'Séminaire' | 'Journée Scientifique';
    link: string; // Lien d'inscription ou page de détails
}