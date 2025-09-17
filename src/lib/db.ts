import { PrismaClient } from '@prisma/client'

console.log('db.ts chargé, NODE_ENV:', process.env.NODE_ENV);
console.log('DATABASE_URL présente:', !!process.env.DATABASE_URL);

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  })

console.log('Client Prisma créé, cached:', !!globalForPrisma.prisma);
globalForPrisma.prisma = prisma