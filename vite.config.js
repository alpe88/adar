//vite.config.js

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.jsx"),
      name: "adar",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // External dependencies
      external: ["react", "react-dom"],
      output: {
        format: "umd",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
