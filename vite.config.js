//vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js", // Adjust the path to your library's entry point
      name: "@alpe88/adar",
    },
    rollupOptions: {
      // External dependencies
      external: ["react", "react-dom"],
      output: {
        // Format for the generated bundle
        format: "umd",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
