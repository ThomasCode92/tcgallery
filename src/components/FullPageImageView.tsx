import { getImageById } from "~/server/db/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="object-contain" />
      </div>
      <div className="flex min-w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
