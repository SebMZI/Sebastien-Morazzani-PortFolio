FROM node:22-alpine AS build
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application
RUN npm run build

# Étape de production
FROM nginx:stable-alpine AS production

# Copier les fichiers construits depuis l'étape de build
COPY --from=build /app/.next /usr/share/nginx/html

# Exposer le port 5978 (port utilisé dans package.json)
EXPOSE 5978

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]