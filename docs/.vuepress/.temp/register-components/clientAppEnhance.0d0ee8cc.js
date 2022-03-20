import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("ButtonNormal", defineAsyncComponent(() => import("/Users/danielmossner/Documents/lawandorga-components/src/components/ButtonNormal.vue"))),
  app.component("CircleLoader", defineAsyncComponent(() => import("/Users/danielmossner/Documents/lawandorga-components/src/components/CircleLoader.vue"))),
  app.component("TailwindWrapper", defineAsyncComponent(() => import("/Users/danielmossner/Documents/lawandorga-components/src/components/TailwindWrapper.vue")))
}
