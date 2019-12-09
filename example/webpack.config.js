const path = require("path");

module.exports = {
  entry: "./src/example.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "example.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-unicode-property-regex"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  }
};
