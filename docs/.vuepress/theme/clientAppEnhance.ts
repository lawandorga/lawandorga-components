import CodeGroup from "@vuepress/theme-default/lib/client/components/global/CodeGroup";
import CodeGroupItem from "@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue";
import { defineClientAppEnhance } from "@vuepress/client";
import "./styles/index.css";

export default defineClientAppEnhance(({ app }) => {
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", CodeGroupItem);
});
