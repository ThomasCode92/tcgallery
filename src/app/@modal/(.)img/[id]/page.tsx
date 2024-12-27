import FullPageImageView from "~/components/FullPageImageView";
import { Modal } from "./modal";

export default async function ImageModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = Number((await params).id);
  if (Number.isNaN(photoId)) throw new Error("Invalid photo ID");

  return (
    <Modal>
      <FullPageImageView id={photoId} />
    </Modal>
  );
}
