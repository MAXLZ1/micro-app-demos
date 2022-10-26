const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')
const path = require('path')

module.exports = defineConfig({
  outputDir: path.join(__dirname, '../../../micro-app-demos/garfish-demo/vue2-child'),
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
      // 开发环境设置 true 将会导致热更新失效
      clean: process.env.MODE === 'production',
      // 需要配置成 umd 规范
      libraryTarget: 'umd',
      // 修改不规范的代码格式，避免逃逸沙箱
      globalObject: 'window',
      // webpack5 使用 chunkLoadingGlobal 代替，或不填保证 package.json name 唯一即可
      // chunkLoadingGlobal: 'garfish-demo-react',
      // 保证子应用的资源路径变为绝对路径
      // publicPath: 'http://localhost:8080',
    },
  },
})
