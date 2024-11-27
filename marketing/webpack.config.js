const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
const { merge } = require("webpack-merge");
const path = require("path");

const baseConfig = require("./module-federation.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(withModuleFederationPlugin(baseConfig), {
  output: {
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
});
