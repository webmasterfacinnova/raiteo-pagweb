// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://raiteo.app",
  output: "static",

  build: {
    assets: "assets",
  },

  server: {
    port: 4321,
  },

  integrations: [sitemap()],
});