const path = require("path");

module.exports = {
  webpack: config => {
    config.resolve.alias["@app"] = path.join(__dirname, "app");
    return config;
  }
};
