import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        format: "esm",
        file: "dist/index.mjs",
      },
      {
        format: "cjs",
        file: "dist/index.cjs",
      },
    ],
    plugins: [typescript(), vue(), peerDepsExternal()],
  },
];
