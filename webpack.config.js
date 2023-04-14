const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    alias: {
      quill: path.resolve(
        __dirname,
        "node_modules/react-quill/node_modules/quill"
      ),
      "react-quill": path.resolve(
        __dirname,
        "node_modules/react-quill/lib/component"
      ),
    },
    fallback: {
      fs: false,
      module: false,
      crypto: false,
    },
  },
};
