import { defineConfig } from 'astro/config';

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
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    },
    build: {
      minify: false,
    }
  }
});
