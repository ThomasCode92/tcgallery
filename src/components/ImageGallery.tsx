import Image from "next/image";

import { getImages } from "~/server/db/queries";

export default async function ImageGallery() {
  const images = await getImages();

  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {images.length === 0 && (
        <p className="mt-24 h-full w-full text-center text-2xl">
          No images found, upload one above
        </p>
      )}
      {images.map((image, idx) => (
        <li key={image.id + "-" + idx}>
          <div className="relative h-48 w-48">
            <Image src={image.url} alt={`Image ${idx}`} fill />
          </div>
          <span className="mt-2">{image.name}</span>
        </li>
      ))}
    </ul>
  );
}
