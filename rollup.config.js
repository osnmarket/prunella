import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: pkg.source,
  output: [{ file: pkg.main, format: "cjs" }],
  plugins: [
    nodeResolve(),
    external(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    commonjs(),
    del({ targets: ["dist/*"] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
