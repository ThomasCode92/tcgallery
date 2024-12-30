import Image from "next/image";
import Link from "next/link";

import { getImages } from "~/server/db/queries";

export default async function ImageGallery() {
  const images = await getImages();

  return (
    <ul className="flex flex-wrap justify-center gap-4 p-4">
      {images.length === 0 && (
        <p className="mt-24 h-full w-full text-center text-2xl">
          No images found, upload one above
        </p>
      )}
      {images.map((image, idx) => (
        <li key={image.id + "-" + idx} className="w-48 truncate">
          <Link href={`/img/${image.id}`}>
            <div className="relative h-48 w-full">
              <Image
                src={image.url}
                alt={`Image ${idx}`}
                className="object-cover"
                fill
              />
            </div>
            <span className="mt-2">{image.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
