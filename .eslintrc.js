module.exports = {
  root: true,
  env: { 
    node: true,
    'vue/setup-compiler-macros': true
   },
  ignorePatterns: ["!.*", "node_modules", ".vscode", ".eslintrc.js", "dist"],
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "no-unused-vars": "warn",
    "vue/no-unused-components": "warn",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        ignores: [],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: false,
        semi: true,
        htmlWhitespaceSensitivity: "ignore",
        endOfLine: "auto",
      },
    ],
  },
};
