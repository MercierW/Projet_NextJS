This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<!-- Partie Docker -->
# Configuration Docker pour Next.js

Cette configuration Docker vous permet de lancer votre application Next.js avec Prisma dans des conteneurs Docker.

## 📁 Fichiers Docker

- `Dockerfile` : Image de production multi-stage optimisée
- `Dockerfile.dev` : Image de développement avec hot reload
- `docker-compose.yml` : Configuration de production
- `docker-compose.dev.yml` : Configuration de développement
- `.dockerignore` : Fichiers exclus du build Docker
- `Makefile` : Commandes simplifiées pour Docker

## 🚀 Démarrage rapide

### Prérequis

- Docker et Docker Compose installés
- Fichier `.env` configuré (voir `.env.example`)

### Configuration initiale

1. **Copiez et configurez les variables d'environnement :**
```bash
cp .env.example .env
# Éditez .env avec vos propres valeurs
```

2. **Modifiez votre `next.config.ts` pour la production :**
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Requis pour Docker
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
}

module.exports = nextConfig
```

### Développement

```bash
# Avec Make (recommandé)
make dev

# Ou avec Docker Compose directement
docker-compose -f docker-compose.dev.yml up --build
```

L'application sera accessible sur `http://localhost:3000`

### Production

```bash
# Avec Make
make prod

# Ou avec Docker Compose
docker-compose up --build
```

## 🛠️ Commandes utiles

### Avec Makefile

```bash
make help                # Affiche toutes les commandes disponibles
make dev                 # Lance le développement
make dev-bg              # Lance en arrière-plan
make dev-down            # Arrête les conteneurs de dev
make shell-dev           # Ouvre un shell dans le conteneur
make migrate-dev         # Exécute les migrations Prisma
make studio              # Lance Prisma Studio
make clean               # Nettoie Docker
```

### Gestion de la base de données

```bash
# Migrations
make migrate-dev         # Crée et applique une migration
make seed-dev           # Peuple la base avec des données

# Interface web pour la DB
make adminer            # Lance Adminer sur http://localhost:8080
```

### Sans Makefile

```bash
# Développement
docker-compose -f docker-compose.dev.yml up --build
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml logs -f

# Production
docker-compose up --build
docker-compose down
docker-compose logs -f

# Shell dans le conteneur
docker-compose exec app-dev sh  # dev
docker-compose exec app sh      # prod
```

## 🗄️ Base de données

### PostgreSQL
- **Port** : 5432
- **Database** : myapp (prod) / myapp_dev (dev)
- **User** : postgres
- **Password** : password (à changer en production !)

### Adminer (interface web) - Automatique !
- **URL** : http://localhost:8080 (disponible automatiquement en dev)
- **Serveur** : db
- **Utilisateur** : postgres
- **Mot de passe** : password

## 📝 Configuration Prisma

Vérifiez que votre `schema.prisma` utilise la bonne URL :

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## 🔧 Personnalisation

### Changer la base de données

Pour utiliser MySQL au lieu de PostgreSQL, modifiez dans `docker-compose.yml` :

```yaml
db:
  image: mysql:8.0
  environment:
    MYSQL_ROOT_PASSWORD: password
    MYSQL_DATABASE: myapp
    MYSQL_USER: user
    MYSQL_PASSWORD: password
```

Et adaptez la `DATABASE_URL` :
```
DATABASE_URL="mysql://user:password@db:3306/myapp"
```

### Variables d'environnement

Ajoutez vos variables dans :
- `.env` pour le développement local
- `docker-compose.yml` section `environment` pour la production
- `docker-compose.dev.yml` section `environment` pour le développement Docker

## 🐛 Dépannage

### Problèmes courants

1. **Erreur de connexion à la base** : Vérifiez que la DB est démarrée
```bash
docker-compose logs db
```

2. **Prisma Client non généré** :
```bash
docker-compose exec app-dev npx prisma generate
```

3. **Port déjà utilisé** :
```bash
# Vérifiez les ports utilisés
lsof -i :3000
lsof -i :5432
```

4. **Volumes corrompus** :
```bash
make clean-all  # Nettoie tout
# Ou
docker-compose down -v  # Supprime les volumes
```

### Logs et debugging

```bash
# Voir tous les logs
make dev-logs

# Logs d'un service spécifique
docker-compose -f docker-compose.dev.yml logs app-dev
docker-compose -f docker-compose.dev.yml logs db

# Shell pour debugging
make shell-dev
```

## 🚀 Déploiement

Pour le déploiement en production :

1. Configurez les vraies variables d'environnement
2. Changez les mots de passe par défaut
3. Utilisez des secrets Docker ou un gestionnaire de secrets
4. Configurez un reverse proxy (nginx, traefik)
5. Mettez en place la sauvegarde de la base de données

## 📚 Ressources

- [Documentation Docker](https://docs.docker.com/)
- [Documentation Next.js avec Docker](https://nextjs.org/docs/deployment#docker-image)
- [Documentation Prisma](https://www.prisma.io/docs/)