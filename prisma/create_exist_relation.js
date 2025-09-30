import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: 'Aprendendo Firebase',
      description: 'Aprendendo Firebase do zero',
      courses: {
        create: {
          course: {
            connect: { id: 'UUID_DO_CURSO_EXISTENTE' },
          },
        },
      },
    },
  });
  console.log(result);
}

main();
