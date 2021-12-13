const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
   //el archivo de salida o el archivo donde va a estar todo el codigo de la aplicacion 
   //directorio donde se guarda el filename bundle.js en este cazo en la raiz del proyecto
  },
  mode: 'development',
  devServer: {
    port: 3000
  },
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
          }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      })
  ]
};