const path = require("path");

module.exports = {
  entry: "./src/liczbyslownie.js",
  output: {
    filename: "liczbyslownie.js",
    path: path.resolve(__dirname, "dist"),
    library: "liczbyslowniepopolsku",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
