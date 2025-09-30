import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: { id: 'UUID_DA_RELACAO' },
  });
  console.log(result);
}

main();
