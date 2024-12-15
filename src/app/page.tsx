import { db } from "~/server/db";

// Images are hosted on uploadthing.com
const mockUrls = [
  "https://utfs.io/f/reMSMTRIWajNKW1mEfcmV0Mo2UQRkbnHlgptwvd3ycIESFKu",
  "https://utfs.io/f/reMSMTRIWajNmhEPyRngdYcWahryefC8DJVUZbqMF36A1NR7",
];

const mockImages = mockUrls.map((url, idx) => ({ idx: idx + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map(post => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <img
            key={idx}
            src={image.url}
            alt={`Image ${idx}`}
            className="w-48"
          />
        ))}
      </div>
    </main>
  );
}
