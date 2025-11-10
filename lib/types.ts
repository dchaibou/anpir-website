// Définition de l'interface pour une Actualité (article)
export interface Article {
    id: number;
    title: string;
    slug: string;
    summary: string;
    imageUrl: string;
    category: 'Événement' | 'Communiqué' | 'Formation' | 'Recherche';
    date: string;
}

// Définition de l'interface pour un Événement/Formation
export interface Event {
    id: number;
    title: string;
    location: string;
    startDate: string;
    endDate: string;
    isRegistrationOpen: boolean;
    type: 'Congrès' | 'Atelier' | 'Séminaire' | 'Journée Scientifique';
    link: string;
}