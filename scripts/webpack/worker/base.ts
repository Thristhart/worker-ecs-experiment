import { ROOT_PATH, commonConfig } from "../common";

import merge from "webpack-merge";

import path from "path";
import webpack from "webpack";

export const WORKER_PATH = path.join(ROOT_PATH, "src/worker");
export const ENTRY = path.resolve(WORKER_PATH, "index.ts");

const base: webpack.Configuration = {
  entry: ENTRY,
  output: {
    filename: "worker.js",
  },
  target: "webworker",
};

export const baseConfig = merge(commonConfig, base);
