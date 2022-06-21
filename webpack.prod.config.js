import { merge } from "webpack-merge";

import common from "./webpack.common.config.js";

export default merge(common, {
  mode: "production",
  output: {
    clean: true,
  },
});
