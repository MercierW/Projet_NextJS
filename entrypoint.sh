#!/bin/sh

echo "🚀 Starting application setup..."

# Fonction pour tester la connexion DB
wait_for_db() {
  echo "⏳ Waiting for database to be ready..."
  
  # Test simple avec netcat si disponible
  if command -v nc >/dev/null 2>&1; then
    while ! nc -z db 5432; do
      echo "💤 Database not ready yet (nc test), waiting 3 seconds..."
      sleep 3
    done
    echo "✅ Database connection successful (nc)!"
    return 0
  fi
  
  # Sinon, test avec Prisma (méthode compatible sh)
  max_attempts=20
  attempt=0
  
  while [ $attempt -lt $max_attempts ]; do
    if npx prisma db execute --sql "SELECT 1;" >/dev/null 2>&1; then
      echo "✅ Database connection successful (prisma)!"
      return 0
    fi
    
    attempt=$((attempt + 1))
    echo "💤 Database not ready yet (attempt $attempt/$max_attempts), waiting 3 seconds..."
    sleep 3
  done
  
  echo "❌ Database connection failed after $max_attempts attempts"
  echo "🔍 Checking DATABASE_URL: $DATABASE_URL"
  exit 1
}

# Attendre que la base de données soit prête
wait_for_db

echo "✅ Database is ready!"

# Générer le client Prisma
echo "🔧 Generating Prisma client..."
npx prisma generate

# Appliquer les migrations
if [ "$NODE_ENV" = "production" ]; then
  echo "🏭 Applying production migrations..."
  npx prisma migrate deploy
else
  echo "🛠️ Applying development migrations..."
  npx prisma migrate dev --name auto-migration || npx prisma db push
fi

echo "✅ Database setup complete!"

# Optionnel : Seed en développement
if [ "$NODE_ENV" != "production" ] && [ "$AUTO_SEED" = "true" ]; then
  echo "🌱 Seeding database..."
  npx prisma db seed || echo "⚠️ No seed script found or seeding failed"
fi

echo "🎉 Starting the application..."

# Lancer l'application
exec "$@"