import type { Page } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { DefaultThemePageData } from "./types";

export default (localeOptions) => {
  return {
    name: "vuepress-theme-local",
    layouts: path.resolve(__dirname, "layouts"),
    templateBuild: path.resolve(__dirname, "templates/index.build.html"),
    clientAppEnhanceFiles: path.resolve(__dirname, "clientAppEnhance.ts"),
    clientAppSetupFiles: path.resolve(__dirname, "clientAppSetup.ts"),
    extendsPage: (page: Page<DefaultThemePageData>) => {
      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title;
    },
    plugins: [
      "@vuepress/prismjs",
      ["@vuepress/theme-data", { themeData: localeOptions }],
    ],
  };
};
