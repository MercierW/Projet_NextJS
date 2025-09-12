import { prisma } from './db'

export async function getActualites() {
  return await prisma.actualite.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function getActualiteBySlug(slug: string) {
  return await prisma.actualite.findUnique({
    where: { slug }
  })
}