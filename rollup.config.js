import babel from "@rollup/plugin-babel";
import ts from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import pkg from "./package.json";

const externalDependencies = Object.getOwnPropertyNames(pkg.peerDependencies);
const globals = {
  "react-dom": "ReactDOM",
  react: "React",
};

export default [
  {
    external: externalDependencies,
    input: "./src/file-uploader/index.ts",

    output: [
      {
        exports: "named",
        file: pkg.esnext,
        format: "es",
      },
    ],

    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true,
      }),
      nodeResolve(),
      commonjs(),
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            declarationDir: __dirname + "/dist/types",
            module: "esnext",
            target: "esnext",
          },
        },
        useTsconfigDeclarationDir: true,
      }),
    ],
  },
  {
    external: externalDependencies,
    input: "./src/file-uploader/index.ts",

    output: [
      {
        exports: "named",
        file: pkg.main,
        format: "umd",
        globals,
        name: "wtr-clone",
        sourcemap: true,
      },
      {
        exports: "named",
        file: pkg.module,
        format: "esm",
      },
    ],

    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true,
      }),
      nodeResolve(),
      commonjs(),
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            module: "esnext",
            target: "es5",
          },
        },
      }),
      babel({
        babelrc: false,
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                ie: "9",
              },
            },
          ],
        ],
      }),
    ],
  },
  {
    external: externalDependencies,
    input: "./src/demo/index.ts",

    output: [
      {
        exports: "named",
        file: "etc/demo/wtr-clone-demo.js",
        format: "umd",
        globals,
        name: "wtr-clone-demo",
        sourcemap: true,
      },
    ],

    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true,
      }),
      nodeResolve(),
      commonjs(),
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            module: "esnext",
            target: "es5",
          },
        },
      }),
      babel({
        babelrc: false,
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                ie: "9",
              },
            },
          ],
        ],
      }),
    ],
  },
];
