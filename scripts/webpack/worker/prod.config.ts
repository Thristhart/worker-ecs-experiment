import merge from "webpack-merge";
import { baseConfig } from "./base";
import webpack from "webpack";

const prodConfig: webpack.Configuration = {
  mode: "production",
};

const config: webpack.Configuration = merge(baseConfig, prodConfig);

export default config;
