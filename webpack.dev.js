import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: path.join(__dirname, "./src"),
    port: 8080,
    devMiddleware: {
      stats: "errors-only",
    },
  },
});
