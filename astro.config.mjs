import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  compressHTML: false,

  build: {
    assets: "static",
    inlineStylesheets: "never",
  },

  vite: {
    css: {
      devSourcemap: true,
    },
    build: {
      minify: false,
    }
  },

  output: "server",
  adapter: vercel(),
});