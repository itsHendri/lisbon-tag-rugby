// @ts-check
import { defineConfig } from "astro/config";

// Static one-pager. Everything ships as pre-rendered HTML + a small vanilla
// script; no client framework is needed for this page.
export default defineConfig({
  output: "static",
  // Set your domain once it exists, e.g. https://lisbontagrugby.com
  // site: "http://localhost:4321",
  vite: {
    build: {
      // Keep asset names stable-ish for cache-friendly deploys
      assetsDir: "assets",
    },
  },
});
