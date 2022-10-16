const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')

module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === 'production' ? '/micro-app-demos/qiankun-demo/vue2-child/dist/' : 'http://localhost:8091/',
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
      library: `${name}`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
    },
  },
})
