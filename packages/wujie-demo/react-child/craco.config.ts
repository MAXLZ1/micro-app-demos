const { name } = require('./package')
const path = require("path")
const CracoLessPlugin = require("craco-less")

const config = {
  devServer: {
    port: 8092,
    open: false
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
    }
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
            javascriptEnabled: true,
          }
        }
      }
    }
  ]
}

export default config
