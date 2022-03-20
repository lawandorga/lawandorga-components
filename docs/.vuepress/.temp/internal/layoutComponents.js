import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/danielmossner/Documents/lawandorga-components/docs/.vuepress/theme/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/danielmossner/Documents/lawandorga-components/docs/.vuepress/theme/layouts/Layout.vue")),
}
