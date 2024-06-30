import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function create(mail: string) {
  const userData = await prisma.user.findMany({
    where: {
      email: mail,
    },
  });
  if (userData.some((user) => user.email === mail)) {
    return;
  }
  await prisma.user.create({
    data: {
      email: mail,
      proprties: [],
    },
  });
}

export async function get(mail: string) {
  const userData = await prisma.user.findMany({
    where: {
      email: mail,
    },
  });
  return userData;
}
export async function update(mail: string, property: object) {
  const userOldData = await prisma.user.findMany({
    where: {
      email: mail,
    },
  });
  const oldProprties = userOldData[0]?.proprties ?? [];
  console.log(oldProprties);
  if (oldProprties.some((oldProp) => oldProp?.id === property?.id)) {
    return;
  }
  const userData = await prisma.user.updateMany({
    where: {
      email: mail,
    },
    data: {
      proprties: [...oldProprties, property],
    },
  });
}

// .catch(async (e) => {
//   console.error(e);
//   process.exit(1);
// })
// .finally(async () => {
//   await prisma.$disconnect();
// });
