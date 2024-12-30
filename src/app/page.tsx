import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Fragment } from "react";
import ImageGallery from "~/components/ImageGallery";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <Fragment>
      <SignedOut>
        <div className="mt-24 h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <ImageGallery />
      </SignedIn>
    </Fragment>
  );
}
