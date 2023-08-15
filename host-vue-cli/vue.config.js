const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container


module.exports = defineConfig({
  publicPath: '.',
  transpileDependencies: true,
  devServer:{
    port: '4000'
  },
  
  configureWebpack: {
    mode: 'none',
    plugins: [
      new ModuleFederationPlugin({
        name: 'saas',
        filename: 'remoteEntry.js',
        remotes: {
          "remote": `remote@http://localhost:8080/remoteEntry.js`
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
        },
      }),
    ]
  },
})
