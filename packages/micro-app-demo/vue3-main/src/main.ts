import '@/styles/index.less'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from './router'
import microApp, { EventCenterForMicroApp } from '@micro-zoe/micro-app'
import { addMiroAppDataListener } from '@/utils/microAppDataListener'
import { useAppStore } from './stores/app'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const { apps } = useAppStore()

const loaders = [
  {
    loader(code: string) {
      if (process.env.NODE_ENV === 'development') {
        code = code.replace(/(from|import)(\s*['"])(\/vite\/)/g, (all) => {
          return all.replace('/vite/', 'http://localhost:8093/vite/')
        })
      }
      return code
    }
  }
]

microApp.start({
  'disable-memory-router': true, // 关闭虚拟路由系统
  'disable-patch-request': true, // 关闭对子应用请求的拦截
  plugins: {
    modules: {
      viteApp: loaders,
      viteAppKeepAlive: loaders
    }
  },
  // 预加载
  preFetchApps() {
    return apps.map((item) => ({
      name: item.name,
      url: item.url,
      disableSandbox: item.name === 'viteApp'
    }))
  }
})

// viteApp通信对象
window.eventCenterForViteApp = new EventCenterForMicroApp('viteApp')
window.eventCenterForViteAppKeepAlive = new EventCenterForMicroApp('viteAppKeepAlive')

addMiroAppDataListener()
