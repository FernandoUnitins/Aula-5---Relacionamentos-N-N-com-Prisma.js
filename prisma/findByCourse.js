import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: { id: 'UUID_CURSO' },
    include: { modules: true },
  });
  console.log(JSON.stringify(result, null, 2));
}

main();
