const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");
const path = require("path");
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@lawandorga/components",
      fileName: (format) => `${format}.js`,
    },
    rollupOptions: {
      external: [
        "vue",
        "/sponsor-cms.jpg",
        "@heroicons/vue/solid",
        "@heroicons/vue/outline",
        "@headlessui/vue",
      ],
      output: {
        globals: {
          "vue": "vue",
          "@heroicons/vue/outline": "@heroicons/vue/outline",
          "@heroicons/vue/solid": "@heroicons/vue/solid",
          "@headlessui/vue": "@headlessui/vue",
          "/sponsor-cms.jpg": "/sponsor-cms.jpg",
        },
      },
    },
  },
  plugins: [vue(), visualizer((opts) => {
    return { filename: path.join(opts.dir, "stats.html") };
  }),],
});
