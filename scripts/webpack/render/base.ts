import { ROOT_PATH, commonConfig } from "../common";

import merge from "webpack-merge";

import path from "path";
import webpack from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export const RENDER_PATH = path.join(ROOT_PATH, "src/render");
export const ENTRY = path.resolve(RENDER_PATH, "index.ts");

const base: webpack.Configuration = {
  entry: ENTRY,
  output: {
    filename: "render.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(RENDER_PATH, "index.html"),
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.join(ROOT_PATH, "tsconfig.json"),
      tslint: path.join(ROOT_PATH, "tslint.json"),
      async: true,
    }),
  ],
};

export const baseConfig = merge(commonConfig, base);
