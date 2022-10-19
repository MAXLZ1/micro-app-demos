import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import vitePluginImp from 'vite-plugin-imp'
import htmlPlugin from 'vite-plugin-index-html'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: loadEnv('production', process.cwd()).VITE_BASE_URL,
  server: {
    port: 8093,
    cors: true,
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    htmlPlugin.default({
      input: './src/main.tsx',
      preserveEntrySignatures: 'exports-only'
    })
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
  },
}))
