import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Nested under the old portfolio — without this, Turbopack picks the parent
// lockfile/postcss and Tailwind v4 breaks.
const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
