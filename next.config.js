/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { withSentryConfig } from "@sentry/nextjs";
import "./src/env.js";

/** @type {import("next").NextConfig} */
const coreConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { remotePatterns: [{ hostname: "utfs.io" }] },
};

const config = withSentryConfig(coreConfig, {
  org: "thomascode92",
  project: "tcgallery",
  silent: true,
  widenClientFileUpload: true,
  reactComponentAnnotation: { enabled: true },
  hideSourceMaps: false,
  disableLogger: true,
  automaticVercelMonitors: true,
});

export default config;
