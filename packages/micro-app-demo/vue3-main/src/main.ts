import '@/styles/index.less'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { listenReceiveMessage } from '@/utils/messageListener'
import microApp from '@micro-zoe/micro-app'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

listenReceiveMessage()

microApp.start({
  plugins: {
    modules: {
      viteApp: [{
        loader(code) {
          if (process.env.NODE_ENV === 'development') {
            // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
            code = code.replace(/(from|import)(\s*['"])(\/vite\/)/g, all => {
              return all.replace('/vite/', 'http://localhost:8093/vite/')
            })
          }
          return code
        }
      }]
    },
  }
})
