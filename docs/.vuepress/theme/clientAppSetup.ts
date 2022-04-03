import { defineClientAppSetup } from "@vuepress/client";
import {
  setupSidebarItems,
  setupDarkMode,
} from "@vuepress/theme-default/lib/client/composables";
import "./styles/index.css";

export default defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
