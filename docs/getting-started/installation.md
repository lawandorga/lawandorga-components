# Installation

```sh
npm install @lawandorga/components
```

You also need to install the peer dependencies that those components need:
```sh
npm install @headlessui/vue @heroicons/vue
```

You also need the additional Tailwind CSS packages:
```sh
npm install @tailwindcss/line-clamp @tailwindcss/typography
```


## Setup

Setup Tailwind CSS according to their [docs](https://tailwindcss.com/docs/installation) and use the following config. You need to change the content settings according to your project. But leave `node_modules/@lawandorga/components/dist/index.mjs` there, because Tailwind CSS should not purge the css classes of the components library.

``` js
module.exports = {
  content: [
    "...",
    "node_modules/@lawandorga/components/dist/index.mjs",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lorgablue: "#003c4d",
        blue: {
          50: "#eff9fb",
          100: "#d0e7ed",
          200: "#aad0db",
          300: "#8abbc9",
          400: "#6ca7b7",
          500: "#428193",
          600: "#275f6f",
          700: "#153f4b",
          800: "#0a2027",
          900: "#010203",
        },
      },
      typography: (theme: any) => ({  // eslint-disable-line
        DEFAULT: {
          css: {
            table: {},
            thead: {
              border: "none",
            },
            tr: {
              border: "none",
            },
            "tr:last-child": {
              borderBottomWidth: "0",
            },
            th: {
              verticalAlign: "bottom",
              borderWidth: "2px",
              borderColor: theme("colors.gray[400]"),
              backgroundColor: theme("colors.gray[200]"),
              padding: "4px 8px",
            },
            "th > p, td > p": {
              margin: 0,
            },
            td: {
              verticalAlign: "top",
              borderWidth: "2px",
              borderColor: theme("colors.gray[300]"),
              backgroundColor: theme("colors.gray[100]"),
            },
            "tbody td:first-child": {
              paddingLeft: "auto",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
```

## Shortcut

You can also use `getTailwindConfig` and do the following in your `tailwind.config.js`:

```js
const lawandorga = require("@lawandorga/components");

const content = [
  "./src/**/*.{vue,js,ts,jsx,tsx}",
]

module.exports = lawandorga.utils.getTailwindConfig(content);
```

