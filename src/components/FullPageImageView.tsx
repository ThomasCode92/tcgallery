import { clerkClient } from "@clerk/nextjs/server";

import { getImageById } from "~/server/db/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);
  const uploader = await (await clerkClient()).users.getUser(image.userId);

  return (
    <div className="flex h-full w-full">
      <div className="flex basis-full items-center justify-center">
        <img src={image.url} className="max-h-full object-contain" />
      </div>
      <div className="flex basis-3/12 flex-col border-l">
        <h4 className="border-b p-2 text-center text-lg">{image.name}</h4>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploader.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
