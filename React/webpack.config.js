const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,"finalBuild"),
        filename: 'finalbuild.js'
    },
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      plugins: [new HtmlWebpackPlugin({
          template: "./public/index.html",
          filename: "index.html"
      })]
}