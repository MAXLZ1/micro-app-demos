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
    },
    configure: (webpackConfig: any, { paths }: any) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        // library: `${name}-[name]`,
        // libraryTarget: 'umd',
        // chunkLoadingGlobal: `webpackJsonp_${name}`,
        // globalObject: 'window',
        // path: path.resolve(__dirname, 'dist'),
        // 开发环境设置 true 将会导致热更新失效
        clean: process.env.NODE_ENV === 'production',
        // 需要配置成 umd 规范
        libraryTarget: 'umd',
        // 修改不规范的代码格式，避免逃逸沙箱
        globalObject: 'window',
        // webpack5 使用 chunkLoadingGlobal 代替，或不填保证 package.json name 唯一即可
        // jsonpFunction: 'garfish-demo-react',
        // 保证子应用的资源路径变为绝对路径
        // publicPath: 'http://localhost:8080',
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
