// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://raiteo.app",
  output: "static",
  build: {
    assets: "assets",
  },
  server: {
    port: 4321,
  },
});
