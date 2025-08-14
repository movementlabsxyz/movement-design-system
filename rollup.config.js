import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" with { type: "json" };

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss({
        extensions: ['.css']
      })
    ],
    external: ['styled-system/css', 'styled-system/tokens', 'styled-system/patterns']
  },
  {
    input: "src/movement-preset/index.ts",
    output: [
      {
        file: "dist/movement-preset/index.js",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/movement-preset/index.esm.js",
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  }
];
