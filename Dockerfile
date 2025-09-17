# Dockerfile multi-stage optimisé pour Next.js avec Prisma

# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat curl
WORKDIR /app

# Configuration npm pour plus de robustesse
RUN npm config set fetch-timeout 600000 && \
    npm config set fetch-retry-mintimeout 10000 && \
    npm config set fetch-retry-maxtimeout 60000 && \
    npm config set fetch-retries 5

# Installation des dépendances (TOUTES, pas seulement production)
COPY package.json package-lock.json* ./
RUN npm install --network-timeout=600000

# Stage 2: Builder  
FROM node:20-alpine AS builder
WORKDIR /app

# Variables d'environnement pour le build
ENV NODE_ENV=production
ENV SKIP_ENV_VALIDATION=true

# Arguments de build (passés par docker-compose)
ARG RESEND_API_KEY
ARG NEXTAUTH_SECRET
ARG DATABASE_URL
ARG NEXTAUTH_URL
ARG NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

# Transformer les ARG en ENV pour le build
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV DATABASE_URL=$DATABASE_URL
ENV NEXTAUTH_URL=$NEXTAUTH_URL
ENV NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

# Copie des dépendances complètes depuis l'étape précédente
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Génération et build
RUN npx prisma generate && \
    npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

# Installation de curl pour healthcheck
RUN apk add --no-cache curl && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Variables d'environnement
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production

# Copie du script d'entrypoint et permissions
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Copie des fichiers d'application
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

# Passage à l'utilisateur non-root
USER nextjs

# Exposition du port
EXPOSE 3000

# Healthcheck pour monitoring
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD curl -f http://localhost:3000 || exit 1

# Script d'entrypoint pour setup automatique
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Commande de démarrage
CMD ["node", "server.js"]