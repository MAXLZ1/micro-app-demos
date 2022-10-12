import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? loadEnv('production', process.cwd()).VITE_BASE_URL : '/vite/',
  server: {
    port: 8093,
    cors: true,
  },
  plugins: [
    // https://github.com/tengmaoqing/vite-plugin-qiankun
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    (function () {
      let basePath = ''
      return {
        name: "vite:micro-app",
        apply: 'build',
        configResolved(config) {
          basePath = `${config.base}${config.build.assetsDir}/`
        },
        renderChunk(code, chunk) {
          if (chunk.fileName.endsWith('.js') && /(from|import)(\s*['"])(\.\.?\/)/g.test(code)) {
            code = code.replace(/(from|import)(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
              return all.replace($3, new URL($3, basePath))
            })
          }
          return code
        }
      }
    })(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'ant-prefix': 'arv4',
        },
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}))
