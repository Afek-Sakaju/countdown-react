const path = require("path");
const cracoAlias = require("craco-alias");

module.exports = {
  alias: {
    "@countdown@src": path.join(__dirname, "src"),
    "@countdown@components": path.join(__dirname, "src/components"),
    "@countdown@base-components": path.join(__dirname, "src/base-components"),
    "@countdown@utils": path.join(__dirname, "src/utils"),
  },
  plugins: [{ plugin: cracoAlias, options: { source: "jsconfig" } }],
};
