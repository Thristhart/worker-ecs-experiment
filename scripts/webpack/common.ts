import path from "path";
import webpack from "webpack";
import CleanWebpackPlugin from "clean-webpack-plugin";

export const ROOT_PATH = path.resolve(__dirname, "../../");

export const commonConfig: webpack.Configuration = {
  output: {
    path: path.resolve(ROOT_PATH, "dist"),
  },
  plugins: [new CleanWebpackPlugin()],
};
