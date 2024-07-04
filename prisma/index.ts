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
  const userOldData = await prisma.user.findUnique({
    where: {
      email: mail,
    },
  });

  if (!userOldData) {
    throw new Error("User not found");
  }

  const oldProprties = userOldData.proprties ?? [];

  const newProprties = oldProprties.some(
    (oldProp) => JSON.stringify(oldProp) === JSON.stringify(property)
  )
    ? oldProprties.map((oldProp) =>
        JSON.stringify(oldProp) === JSON.stringify(property)
          ? property
          : oldProp
      )
    : [...oldProprties, property];

  const updatedUser = await prisma.user.update({
    where: {
      email: mail,
    },
    data: {
      proprties: newProprties,
    },
  });

  return updatedUser;
}

export async function removeProperty(mail: string, propertyId: string) {
  const userOldData = await prisma.user.findMany({
    where: {
      email: mail,
    },
  });
  const oldProprties = userOldData[0]?.proprties ?? [];
  const newProperties = oldProprties.filter(
    (prop: any) => prop.id !== propertyId
  );
  const userData = await prisma.user.updateMany({
    where: {
      email: mail,
    },
    data: {
      proprties: newProperties,
    },
  });
  return userData;
}

// .catch(async (e) => {
//   console.error(e);
//   process.exit(1);
// })
// .finally(async () => {
//   await prisma.$disconnect();
// });
