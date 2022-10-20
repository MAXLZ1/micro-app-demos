const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')

module.exports = defineConfig({
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
