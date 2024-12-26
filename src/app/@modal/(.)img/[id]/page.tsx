export default async function ImageModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return <div>{photoId}</div>;
}
