import { getImages } from "~/server/db/queries";

export default async function ImageGallery() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.length === 0 && (
        <p className="mt-24 h-full w-full text-center text-2xl">
          No images found, upload one above
        </p>
      )}
      {images.map((image, idx) => (
        <div key={image.id + "-" + idx} className="flex flex-col">
          <img src={image.url} alt={`Image ${idx}`} className="h-48" />
          <span>{image.name}</span>
        </div>
      ))}
    </div>
  );
}
