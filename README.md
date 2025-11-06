# 🌐 Site Web de l'ANPIR

Bienvenue dans le dépôt GitHub du site officiel de l'ANPIR (Association Nigérienne des Professionnels de l'Imagerie Médicale et de la Radiothérapie). Ce projet a pour objectif de créer une plateforme moderne, performante et informative pour l'association.

## 🌟 Technologies Utilisées

Ce projet est construit en utilisant une stack moderne orientée performance et expérience utilisateur :

| Catégorie              | Technologie                                                | Description                                                                    |
| :--------------------- | :--------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **Framework**          | **Next.js** (avec App Router)                              | Framework React pour la performance (SSR/SSG/ISR) et le routing.               |
| **Langage**            | **TypeScript**                                             | Ajoute la robustesse et la scalabilité au code.                                |
| **Styling**            | **Tailwind CSS**                                           | Framework CSS utilitaire pour un développement rapide et un design responsive. |
| **Authentification**   | **NextAuth.js** (ou équivalent)                            | Gestion sécurisée de l'authentification des membres.                           |
| **Gestion de Contenu** | **[Nom du CMS Headless]** (ex: Strapi, Sanity, Contentful) | CMS sans tête pour la gestion des actualités, événements et ressources.        |
| **Hébergement**        | **Vercel** (Recommandé)                                    | Plateforme optimisée pour le déploiement de Next.js.                           |

## 🚀 Fonctionnalités Clés

- **Pages Statiques Performantes** (SSG) : Accueil, À Propos, Contact.
- **Actualités et Événements** (ISR) : Mise à jour rapide et automatique du contenu.
- **Système d'Adhésion en Ligne** : Formulaires de candidature et de renouvellement.
- **Espace Membre Sécurisé** : Accès protégé aux ressources documentaires (PV de réunions, publications, supports de formation).
- **Design Responsive** : Site entièrement accessible sur mobile, tablette et ordinateur.

## 💻 Configuration Locale

Suivez ces étapes pour démarrer le projet sur votre machine locale.

### Prérequis

Assurez-vous d'avoir installé les logiciels suivants :

- Node.js (version 18 ou supérieure)
- npm ou yarn (gestionnaire de paquets)
- Git

### Installation

1.  **Cloner le dépôt :**

    ```bash
    git clone [URL_DU_DÉPÔT_GIT]
    cd anpir-website
    ```

2.  **Installer les dépendances :**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configurer les variables d'environnement :**
    Créez un fichier `.env.local` à la racine du projet et ajoutez les clés API et les variables de connexion nécessaires (ex: CMS, Base de Données, NextAuth secrets).

    Exemple de `.env.local`:

    ```
    # NextAuth
    NEXTAUTH_SECRET="[VOTRE_SECRET_COMPLEXE]"
    NEXTAUTH_URL="http://localhost:3000"

    # API CMS Headless
    CMS_API_URL="[URL_DE_VOTRE_API_CMS]"
    CMS_API_KEY="[VOTRE_CLE_API]"
    ```

### Lancement du Serveur de Développement

Lancez l'application en mode développement :

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse : **`http://localhost:3000`**

## ✅ Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

| Script               | Description                                                      |
| :------------------- | :--------------------------------------------------------------- |
| `npm run dev`        | Lance l'application en mode développement avec Hot-Reload.       |
| `npm run build`      | Construit l'application pour la production (génération SSG/ISR). |
| `npm run start`      | Lance le serveur de production après la construction.            |
| `npm run lint`       | Exécute ESLint pour détecter les problèmes de code.              |
| `npm run type-check` | Vérifie la conformité TypeScript du projet.                      |

## ⚙️ Déploiement

Le déploiement continu (CI/CD) est géré via **Vercel** (recommandé pour les applications Next.js).

1.  **Connexion Git :** Assurez-vous que le dépôt est connecté à Vercel.
2.  **Variables d'Environnement :** Configurez les variables de production (similaires à `.env.local`) directement sur le tableau de bord Vercel.
3.  **Déploiement Automatique :** Toute poussée (push) vers la branche `main` (ou `production`) déclenchera un nouveau _build_ et un déploiement automatique du site.

## 🤝 Contribution

Toute contribution est la bienvenue \! Pour proposer des améliorations :

1.  Forkez ce dépôt.
2.  Créez une nouvelle branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`).
3.  Effectuez vos changements et commitez-les (`git commit -m 'feat: ajoute la fonctionnalité X'`).
4.  Poussez la branche sur votre fork (`git push origin feature/nouvelle-fonctionnalite`).
5.  Ouvrez une **Pull Request** vers la branche `main` de ce dépôt.

---
