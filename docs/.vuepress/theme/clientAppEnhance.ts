import { defineClientAppEnhance } from "@vuepress/client";
import "./styles/index.css";

export default defineClientAppEnhance(({ router }) => {
  const scrollBehavior = router.options.scrollBehavior!;
  router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (to.hash) {
      const el = document.querySelector(to.hash);
      if (el) {
        return {
          el: el,
          top: 65,
        };
      }
    }
    return scrollBehavior(to, from, savedPosition);
  };
});
