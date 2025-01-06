"use client";

import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { Fragment } from "react";
import { toast } from "sonner";

import { useUploadThingInputProps } from "~/hooks/useUploadThingInputProps";
import LoadingSpinner from "~/icons/LoadingSpinner";
import UploadIcon from "~/icons/UploadIcon";

function makeUploadToast() {
  return toast(
    <div className="flex items-center gap-2">
      <LoadingSpinner />
      <span className="text-lg">Uploading...</span>
    </div>,
    { id: "upload-begin", duration: 100000 },
  );
}

export default function SimpleUploadButton() {
  const router = useRouter();
  const posthog = usePostHog();

  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin() {
      posthog.capture("upload_begin");
      makeUploadToast();
    },
    onUploadError(error) {
      posthog.capture("upload_error", { error });
      toast.dismiss("upload-begin");
      toast.error("Upload failed");
    },
    onClientUploadComplete() {
      toast.dismiss("upload-begin");
      toast("Upload complete!");

      router.refresh();
    },
  });

  return (
    <Fragment>
      <label htmlFor="upload-btn" className="cursor-pointer">
        <UploadIcon />
      </label>
      <input id="upload-btn" type="file" className="sr-only" {...inputProps} />
    </Fragment>
  );
}
