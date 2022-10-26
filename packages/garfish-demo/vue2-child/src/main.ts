import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { baseRouter } from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import { type User, useUserStore } from './stores/user'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

function handleUserInfo(user: User) {
  const { setUser } = useUserStore()
  setUser(user)
}

export const provider = () => {
  let app: Vue | null = null
  let routerInstance: VueRouter | null = null
  return {
    render({ basename, dom, props }: any) {
      // 如果存在props.path，启用abstract路由
      routerInstance = baseRouter(basename, props.path ? 'abstract' : 'history')
      app = new Vue({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        router: routerInstance,
        pinia: createPinia(),
        render: (h) => h(App),
      }).$mount(dom.querySelector('#app'))

      if (props.path) {
        routerInstance.push(props.path)
      }
      window?.Garfish.channel.on('userInfo', handleUserInfo)
    },
    destroy() {
      window?.Garfish.channel.removeListener('userInfo', handleUserInfo)
      app?.$destroy()
      app = null
      routerInstance = null
    },
  }
}

if (!window.__GARFISH__) {
  new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router,
    pinia: createPinia(),
    render: (h) => h(App),
  }).$mount('#app')
}
