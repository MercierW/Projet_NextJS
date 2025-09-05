# Dockerfile multi-stage pour Next.js avec Prisma

# Stage 1: Dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Installation des dépendances
COPY package.json package-lock.json* ./
RUN npm ci --only=production --ignore-scripts

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Copie des dépendances depuis l'étape précédente
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Installation de toutes les dépendances (dev incluses)
RUN npm ci

# Génération du client Prisma
RUN npx prisma generate

# Build de l'application Next.js
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

# Création d'un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie des fichiers nécessaires
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Copie du script d'entrypoint
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# Changement de propriétaire des fichiers
RUN chown -R nextjs:nodejs /app
USER nextjs

# Exposition du port
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENV NODE_ENV production

# Script d'entrypoint pour setup automatique
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Commande de démarrage
CMD ["node", "server.js"]