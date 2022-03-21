import { path } from "@vuepress/utils";

export default {
  lang: "en-US",
  title: "Law&Orga Components Library",
  description: "Reusable components from Law&Orga.",
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    docsDir: "docs",
    sidebarDepth: 1,
    sidebar: [
      {
        text: "Getting Started",
        children: ["/getting-started/installation", "/getting-started/use"],
      },
      {
        text: "Components",
        children: [
          "/components/buttons.md",
          "/components/circle-loader.md",
          "/components/table.md",
        ],
      },
    ],
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "../../src/components"),
      },
    ],
  ],
  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            require("postcss-import"),
            require("tailwindcss/nesting"),
            require("tailwindcss")("tailwind.config.js"),  // eslint-disable-line
            require("autoprefixer"),
          ],
        },
      },
    },
  },
};
