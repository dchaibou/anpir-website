# --- Étape 1 : Construction de l'application (The "builder" stage) ---
# Utilise une image Node.js récente et légère basée sur Alpine
FROM node:22-alpine AS builder

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de configuration (package.json et package-lock.json)
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code source de l'application
COPY . .

# Exécute la commande de construction Next.js
# NEXT_TELEMETRY_DISABLED=1 désactive la collecte de données anonymes
RUN NEXT_TELEMETRY_DISABLED=1 npm run build



# --- Étape 2 : Exécution de l'application en production (The "runner" stage) ---
# Utilise la même image de base légère pour l'exécution
FROM node:22-alpine AS runner

# Définit l'utilisateur non-root pour des raisons de sécurité
RUN addgroup --system nextjs && adduser --system nextjs
USER nextjs

# Définit le répertoire de travail
WORKDIR /app

# Copie uniquement les fichiers essentiels de l'étape de construction précédente
# pour minimiser la taille de l'image finale
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Expose le port par défaut de Next.js (3000)
EXPOSE 3000

# Définit la commande par défaut pour démarrer le serveur Next.js en production
CMD ["npm", "start"]

# docker build -t mon-app-nextjs .
# docker run -p 2999:3000 mon-app-nextjs
