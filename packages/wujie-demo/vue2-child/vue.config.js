const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')
const path = require('path')

module.exports = defineConfig({
  outputDir: path.join(__dirname, '../../../micro-app-demos/wujie-demo/vue2-child'),
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  devServer: {
    port: 8091,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
})
