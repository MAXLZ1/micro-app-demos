// @ts-nocheck
const { name } = require('./package')
const path = require('path')
const CracoLessPlugin = require('craco-less')

const config = {
  devServer: {
    port: 8092
  },
  style: {
    css: {
      loaderOptions: {
        modules: {
          auto: true,
          exportLocalsConvention: 'camelCaseOnly',
        },
      },
    },
  },
  webpack: {
    alias: {
      "@": path.resolve("src")
    },
    configure: (webpackConfig: any, { paths }: any) => {
      const entries = {
        app: [webpackConfig.entry],
        communicationTest: [path.join(__dirname, './src/modules/communicationTest.tsx')],
        cssIsolation: [path.join(__dirname, './src/modules/cssIsolation.tsx')]
      }
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        library: name,
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].bundle.js',
      }
      if (process.env.NODE_ENV === 'development') {
        webpackConfig.output.publicPath = 'http://localhost:8092/'
      }
      webpackConfig.entry = entries
      // const htmlWebpackPlugin = webpackConfig.plugins[0]
      // htmlWebpackPlugin.userOptions.chunks = ['app']
      // webpackConfig.plugins.unshift(new htmlWebpackPlugin.constructor(
      //   Object.assign({}, htmlWebpackPlugin.userOptions, {
      //     template: path.join(__dirname, './public/index.html'),
      //     inject: true,
      //     chunks: ['communicationTest'],
      //     filename: 'communicationText.html'
      //   })
      // ))
      const manidestPlugin = webpackConfig.plugins.find(item => item.constructor.name === 'WebpackManifestPlugin')
      // webpackConfig.optimization.runtimeChunk = 'multiple'

      manidestPlugin.options.generate = (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path
          return manifest
        }, seed)

        const entrypointFiles = {}
        // 修改多入口后，entrypointFiles也要对应修改
        Object.keys(entrypoints).forEach(entrypoint => {
          entrypointFiles[entrypoint] = entrypoints[entrypoint].filter(fileName => !fileName.endsWith('.map'))
        })

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        }
      }

      return webpackConfig
    },
  },
  babel: {
    plugins: [
      [ 'import', {
        libraryName: 'antd',
        style: true,
      } ]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              'ant-prefix': 'ar4',
            },
            javascriptEnabled: true,
          }
        }
      }
    }
  ]
}

export default config
