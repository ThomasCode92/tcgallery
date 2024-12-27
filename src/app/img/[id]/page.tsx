import FullPageImageView from "~/components/FullPageImageView";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = Number((await params).id);
  if (Number.isNaN(photoId)) throw new Error("Invalid photo ID");

  return <FullPageImageView id={photoId} />;
}
