/* eslint-disable no-unreachable */
const { shareAll } = require("@angular-architects/module-federation/webpack");
const packageJson = require("./package.json");

module.exports = {
  name: "marketing",
  exposes: {
    "./Component": "./src/remote-entry.ts",
  },
  shared: packageJson.dependencies,
  library: {
    type: "var",
    name: "marketing",
  },
};
