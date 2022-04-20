const path = require("path");
const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

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
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [typescript(), vue()],
});
