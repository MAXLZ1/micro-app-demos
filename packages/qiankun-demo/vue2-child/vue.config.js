const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')
const path = require('path')

module.exports = defineConfig({
  outputDir: path.join(__dirname, '../../../micro-app-demos/qiankun-demo/vue2-child'),
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
          modifyVars: {
            'ant-prefix': 'av2',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
})
