import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function seed() {
  const user = await db.user.create({
    data: {
      username: 'Sean',
      email: 'testuser@gmail.com',
    },
  });

  const projects = await db.projects.createMany({
    data: [
      { name: 'Project 1', userId: user.id },
      { name: 'Project 2', userId: user.id },
      { name: 'Project 3', userId: user.id },
      { name: 'Project 4', userId: user.id },
    ],
  });

  console.log(projects);
}

seed();
