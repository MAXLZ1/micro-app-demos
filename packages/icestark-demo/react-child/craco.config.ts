const { name } = require('./package')
const path = require("path")
const CracoLessPlugin = require("craco-less")

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
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        library: name,
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist')
      }
      if (process.env.NODE_ENV === 'development') {
        webpackConfig.output.publicPath = 'http://localhost:8092/'
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
