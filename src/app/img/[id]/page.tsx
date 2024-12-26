export default async function ImagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return <div>{photoId}</div>;
}
