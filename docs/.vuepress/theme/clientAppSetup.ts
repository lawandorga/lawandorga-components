import { defineClientAppSetup } from "@vuepress/client";
import {
  setupSidebarItems,
  setupDarkMode,
} from "@vuepress/theme-default/lib/client/composables";

export default defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
