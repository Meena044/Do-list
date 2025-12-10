// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: "./main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },

  devtool: "source-map",
  devServer: {
    watchFiles: ["./index.html"],
    static: './dist',   
    port: 3000,
    open: true
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),

  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      }
    ],
  },


};
