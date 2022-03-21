import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html","/README.md"]],
  ["v-a4149d90","/components/buttons.html",{"title":"Buttons"},["/components/buttons","/components/buttons.md"]],
  ["v-29f71b2e","/components/circle-loader.html",{"title":"CircleLoader.vue"},["/components/circle-loader","/components/circle-loader.md"]],
  ["v-0118259e","/components/table-row.html",{"title":""},["/components/table-row","/components/table-row.md"]],
  ["v-29c8a06a","/components/table-table.html",{"title":""},["/components/table-table","/components/table-table.md"]],
  ["v-df88a5ea","/components/table.html",{"title":"Table"},["/components/table","/components/table.md"]],
  ["v-4e8563af","/getting-started/installation.html",{"title":"Installation"},["/getting-started/installation","/getting-started/installation.md"]],
  ["v-33e680e2","/getting-started/use.html",{"title":"Use"},["/getting-started/use","/getting-started/use.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
