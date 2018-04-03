const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader", exclude: /node_modules/ },
      { test: /\.css$/, loader: "css-loader", query: { modules: true, localIdentName: '[local]'}, exclude: /node_modules/ },
      { test: /\.png$/, loader: "file-loader?name=/assets/[name].[ext]", exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};