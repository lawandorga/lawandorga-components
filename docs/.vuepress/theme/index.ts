import type { Page } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type {
  DefaultThemePageData,
  DefaultThemeLocaleOptions,
} from "@vuepress/theme-default/lib/shared";

export default (localeOptions: DefaultThemeLocaleOptions) => {
  return {
    name: "vuepress-theme-local",
    layouts: path.resolve(__dirname, "layouts"),
    templateBuild: path.resolve(__dirname, "templates/index.build.html"),
    clientAppSetupFiles: path.resolve(__dirname, "clientAppSetup.ts"),
    clientAppEnhanceFiles: path.resolve(__dirname, "clientAppEnhance.ts"),
    extendsPage: (page: Page<DefaultThemePageData>) => {
      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title;
    },
    plugins: [
      "@vuepress/prismjs",
      ["@vuepress/theme-data", { themeData: localeOptions }],
      "@vuepress/nprogress",
      // without this vuepress breaks -> bug?!
      "@vuepress/external-link-icon",
    ],
  };
};
