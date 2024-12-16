import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, idx) => (
          <div key={image.id + "-" + idx} className="flex flex-col">
            <img src={image.url} alt={`Image ${idx}`} className="h-48" />
            <span>{image.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
