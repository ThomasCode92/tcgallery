// Images are hosted on uploadthing.com
const mockUrls = [
  "https://utfs.io/f/reMSMTRIWajNKW1mEfcmV0Mo2UQRkbnHlgptwvd3ycIESFKu",
  "https://utfs.io/f/reMSMTRIWajNmhEPyRngdYcWahryefC8DJVUZbqMF36A1NR7",
];

const mockImages = mockUrls.map((url, idx) => ({ idx: idx + 1, url }));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map(({ idx, url }) => (
          <img key={idx} src={url} alt={`Image ${idx}`} className="w-48" />
        ))}
      </div>
    </main>
  );
}
