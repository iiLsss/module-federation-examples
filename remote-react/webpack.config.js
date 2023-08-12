
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: "development",
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // ["@babel/preset-env", { modules: false }],
                ["@babel/preset-env"],
                "@babel/preset-react"
              ]
            }
          }
        ]
      },
      { test: /\.css$/, 
        use: [
          'style-loader',
          'css-loader', 
          'postcss-loader'
        ] 
      },
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    }),
    new ModuleFederationPlugin({
      name: 'remote',
      filename: "remoteEntry.js",
      exposes: {
        './List': './src/components/List/index.js',
        './commonStyle': './src/index.css'
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: '18.2.0',
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: '18.2.0',
        }
      }
    }),
  ]

}