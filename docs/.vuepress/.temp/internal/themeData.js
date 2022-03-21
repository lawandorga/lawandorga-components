export const themeData = {
  "docsDir": "docs",
  "sidebarDepth": 1,
  "sidebar": [
    {
      "text": "Getting Started",
      "children": [
        "/getting-started/installation",
        "/getting-started/use"
      ]
    },
    {
      "text": "Components",
      "children": [
        "/components/buttons.md",
        "/components/circle-loader.md",
        "/components/table.md"
      ]
    }
  ]
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
