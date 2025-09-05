# Makefile pour simplifier les commandes Docker

.PHONY: help build up down logs shell migrate seed clean dev prod

# Variables
COMPOSE_FILE = docker-compose.yml
COMPOSE_DEV_FILE = docker-compose.dev.yml

help: ## Affiche cette aide
	@echo "Commandes disponibles :"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Commandes de développement
dev: ## Lance l'environnement de développement
	docker-compose -f $(COMPOSE_DEV_FILE) up --build

dev-bg: ## Lance l'environnement de développement en arrière-plan
	docker-compose -f $(COMPOSE_DEV_FILE) up -d --build

dev-down: ## Arrête l'environnement de développement
	docker-compose -f $(COMPOSE_DEV_FILE) down

dev-logs: ## Affiche les logs de l'environnement de développement
	docker-compose -f $(COMPOSE_DEV_FILE) logs -f

# Commandes de production
prod: ## Lance l'environnement de production
	docker-compose -f $(COMPOSE_FILE) up --build

prod-bg: ## Lance l'environnement de production en arrière-plan
	docker-compose -f $(COMPOSE_FILE) up -d --build

prod-down: ## Arrête l'environnement de production
	docker-compose -f $(COMPOSE_FILE) down

prod-logs: ## Affiche les logs de l'environnement de production
	docker-compose -f $(COMPOSE_FILE) logs -f

# Commandes générales
build: ## Construit les images Docker
	docker-compose -f $(COMPOSE_FILE) build

build-dev: ## Construit les images Docker pour le développement
	docker-compose -f $(COMPOSE_DEV_FILE) build

logs: ## Affiche les logs
	docker-compose -f $(COMPOSE_FILE) logs -f

shell: ## Ouvre un shell dans le conteneur de l'application
	docker-compose -f $(COMPOSE_FILE) exec app sh

shell-dev: ## Ouvre un shell dans le conteneur de développement
	docker-compose -f $(COMPOSE_DEV_FILE) exec app-dev sh

# Commandes Prisma
migrate: ## Exécute les migrations Prisma
	docker-compose -f $(COMPOSE_FILE) run --rm migrate

migrate-dev: ## Exécute les migrations Prisma en développement
	docker-compose -f $(COMPOSE_DEV_FILE) exec app-dev npx prisma migrate dev

seed: ## Exécute le seeding de la base de données
	docker-compose -f $(COMPOSE_FILE) exec app npx prisma db seed

seed-dev: ## Exécute le seeding en développement
	docker-compose -f $(COMPOSE_DEV_FILE) exec app-dev npx prisma db seed

studio: ## Lance Prisma Studio
	docker-compose -f $(COMPOSE_DEV_FILE) exec app-dev npx prisma studio

# Commandes de nettoyage
clean: ## Nettoie les conteneurs, volumes et images inutilisés
	docker system prune -f

clean-all: ## Nettoie tout (conteneurs, volumes, images, networks)
	docker system prune -a -f --volumes

reset-db: ## Remet à zéro la base de données
	docker-compose -f $(COMPOSE_DEV_FILE) down -v
	docker-compose -f $(COMPOSE_DEV_FILE) up -d db
	docker-compose -f $(COMPOSE_DEV_FILE) exec app-dev npx prisma migrate dev --name init

# Commandes d'outils
adminer: ## Lance Adminer (interface web pour la DB)
	docker-compose -f $(COMPOSE_DEV_FILE) --profile tools up adminer