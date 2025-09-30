import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: 'UUID_CURSO',
      fk_id_module: 'UUID_MODULO',
    },
  });
  console.log(result);
}

main();
