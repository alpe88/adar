//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.jsx"),
      name: "adar",

      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
