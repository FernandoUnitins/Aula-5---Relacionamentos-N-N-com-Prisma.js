import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const curso = await prisma.courses.create({
    data: {
      name: 'Curso Desenvolvimento Web',
      description: 'Aprendendo HTML, CSS e JS',
      duration: 120,
    },
  });
  console.log(curso);
}

main();
