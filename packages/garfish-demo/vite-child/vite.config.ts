import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import vitePluginImp from 'vite-plugin-imp'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    outDir: path.join(
      __dirname,
      '../../../micro-app-demos/garfish-demo/vite-child'
    )
  },
  base: loadEnv(mode, process.cwd()).VITE_BASE_URL,
  server: {
    port: 8093,
    cors: true,
    origin: loadEnv(mode, process.cwd()).VITE_BASE_URL,
  },
  plugins: [
    react({
      // 防止react-refresh报错
      fastRefresh: false
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
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
