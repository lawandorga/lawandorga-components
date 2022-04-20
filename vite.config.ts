import * as path from 'path'
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@lawandorga/components",
      fileName: (format) => `${format}.js`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        "vue",
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
        },
      },
    },
  },
  plugins: [   
    vue(), 
    visualizer((opts) => {
      return { filename: path.join(opts.dir, "stats.html") };
    }),
  ],
});
