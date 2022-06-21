import * as path from "node:path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "none",
  target: "web",
  entry: path.resolve("src", "index.ts"),
  output: {
    path: path.resolve("dist"),
    filename: "assets/scripts/[name].[contenthash:8].js",
    chunkFilename: "assets/scripts/chunk.[contenthash:8]",
  },
  resolve: {
    extensions: [".ts", "..."],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.webp$/,
        type: "asset",
        generator: {
          filename: "assets/images/[name].[contenthash:8].[ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024, // 2KB
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve("public"),
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: "head",
      template: path.resolve("src", "index.html"),
      scriptLoading: "defer",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/main.[contenthash:8].css",
      chunkFilename: "assets/styles/chunk.[contenthash:8]",
    }),
  ],
};
