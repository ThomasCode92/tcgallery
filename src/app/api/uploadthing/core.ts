import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { ratelimit } from "~/server/ratelimit";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      const user = getAuth(req);

      if (!user.userId) throw new UploadThingError("Unauthorized");

      const client = await clerkClient();
      const userData = await client.users.getUser(user.userId);

      if (!userData.privateMetadata["can-upload"])
        throw new UploadThingError("User does not have upload permissions");

      const { success } = await ratelimit.limit(user.userId);
      if (!success) throw new UploadThingError("Rate limit exceeded");

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);

      await db
        .insert(images)
        .values({ userId: metadata.userId, name: file.name, url: file.url });

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
