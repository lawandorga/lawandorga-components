import { path } from "@vuepress/utils";

export default {
  lang: "en-US",
  title: "Law&Orga Components Library",
  description: "Reusable components from Law&Orga.",
  theme: path.resolve(__dirname, "./theme"),
  port: 4400,
  themeConfig: {
    title: "Law&Orga",
    docsDir: "docs",
    sidebar: [
      {
        text: "Getting Started",
        children: [
          "/getting-started/installation",
          "/getting-started/use",
          "/getting-started/setup.md",
        ],
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
