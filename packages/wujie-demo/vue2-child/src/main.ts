import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import { useUserStore } from './stores/user'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

function setup() {
  return new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router,
    pinia: createPinia(),
    render: (h) => h(App),
  }).$mount('#app')
}

if (window.__POWERED_BY_WUJIE__) {
  let instance: Vue | undefined
  window.__WUJIE_MOUNT = () => {
    instance = setup()
    const { setUser } = useUserStore()
    window.$wujie.bus.$on('changeUser', (e: any) => {
      setUser(e.user)
    })
  }
  window.__WUJIE_UNMOUNT = () => {
    instance?.$destroy()
  }
} else {
  setup()
}
