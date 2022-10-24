import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { baseRouter } from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import { vueBridge } from '@garfish/bridge-vue-v2'
import { type User, useUserStore } from './stores/user'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

function handleUserInfo(user: User) {
  const { setUser } = useUserStore()
  setUser(user)
}

export const provider = vueBridge({
  rootComponent: App,
  appOptions: ({ basename }) => {
    return {
      el: '#app',
      pinia: createPinia(),
      router: baseRouter(basename),
      destroyed() {
        window?.Garfish.channel.removeListener('userInfo', handleUserInfo)
      },
    }
  },
  handleInstance() {
    window?.Garfish.channel.on('userInfo', handleUserInfo)
  },
})

if (!window.__GARFISH__) {
  new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router,
    pinia: createPinia(),
    render: (h) => h(App),
  }).$mount('#app')
}
