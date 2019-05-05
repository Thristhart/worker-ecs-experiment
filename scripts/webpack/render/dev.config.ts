import merge from "webpack-merge";
import { baseConfig } from "./base";
import webpack from "webpack";

const devConfig: webpack.Configuration = {
  mode: "production",
};

const config: webpack.Configuration = merge(baseConfig, devConfig);

export default config;
