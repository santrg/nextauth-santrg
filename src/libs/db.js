import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

//  const globalThis: {
//     prismaGlobal: ReturnType<typeof prismaClientSingleton>;
//   } & typeof global;
// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()


export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma