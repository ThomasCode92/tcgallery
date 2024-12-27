import "server-only";

import { auth } from "@clerk/nextjs/server";

import { db } from "~/server/db";

export async function getImages() {
  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");

  return db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
    columns: { id: true, name: true, url: true },
  });
}

export async function getImageById(id: number) {
  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
    columns: { id: true, userId: true, name: true, url: true },
  });

  if (!image) throw new Error("Image not found");
  if (image.userId !== user.userId) throw new Error("Unauthorized");

  return image;
}
