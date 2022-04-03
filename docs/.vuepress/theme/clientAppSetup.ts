import { defineClientAppSetup } from "@vuepress/client";
import { setupSidebarItems } from "./composables";
import "./styles/index.css";

export default defineClientAppSetup(() => {
  setupSidebarItems();
});
