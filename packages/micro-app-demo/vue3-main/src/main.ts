import '@/styles/index.less'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from './router'
import microApp, { EventCenterForMicroApp } from '@micro-zoe/micro-app'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

microApp.start({
  'disable-memory-router': true, // 关闭虚拟路由系统
  'disable-patch-request': true, // 关闭对子应用请求的拦截
  plugins: {
    modules: {
      viteApp: [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              code = code.replace(
                /(from|import)(\s*['"])(\/vite\/)/g,
                (all) => {
                  return all.replace('/vite/', 'http://localhost:8093/vite/')
                }
              )
            }
            return code
          }
        }
      ]
    }
  }
})

window.eventCenterForViteApp = new EventCenterForMicroApp('viteApp')
