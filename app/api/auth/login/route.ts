// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';

// Simuler des identifiants valides pour les tests
const VALID_CREDENTIALS = {
    email: 'user@anpir.org',
    password: 'user',
};

export async function POST(request: Request) {
    const { email, password } = await request.json();

    // 1. Vérification des identifiants (dans une vraie app, cela ferait une requête DB)
    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {

        // 2. Simulation de la session
        const userData = {
            id: 'user-anpir-123',
            name: 'Dr. Ali',
            email: email,
            role: 'member', // Rôle pour la gestion des accès futurs
        };

        // Dans une application réelle, on créerait un JWT ou une session sécurisée.
        // Ici, nous retournons simplement les données utilisateur.
        return NextResponse.json({ success: true, user: userData }, { status: 200 });
    }

    // 3. Échec de la connexion
    return NextResponse.json({ success: false, message: 'Identifiants invalides.' }, { status: 401 });
}