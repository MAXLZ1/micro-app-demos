import '@/public-path'
import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

let app: Vue | null = null

function mount() {
  app = new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router,
    pinia: createPinia(),
    render: (h) => h(App)
  }).$mount('#app')

  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.microApp.addDataListener(dataListener, true)
  }
}

function unmount() {
  if (app) {
    app.$destroy()
    app.$el.innerHTML = ''
    app = null
  }

  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.microApp.removeDataListener(dataListener)
  }
}

function dataListener(e: any) {
  if (e.user) {
    const { setUser } = useUserStore()
    setUser(e.user)
  }

  e.path && router.push(e.path)
}

window.unmount = unmount
window.mount = mount

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}
