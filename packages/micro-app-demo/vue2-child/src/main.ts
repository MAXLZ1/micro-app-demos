import '@/public-path'
import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import { router, abstractRouter } from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
import type VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

let app: Vue | null = null
let routerInstance: VueRouter | null = null

function mount() {
  // 如果存在abstract，使用abstract路由
  if (window.__MICRO_APP_ENVIRONMENT__ && window.microApp.getData()?.abstract) {
    routerInstance = abstractRouter
  } else {
    routerInstance = router
  }

  app = new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router: routerInstance,
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
  routerInstance = null
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.microApp.removeDataListener(dataListener)
  }
}

function dataListener(e: any) {
  if (e.user) {
    const { setUser } = useUserStore()
    setUser(e.user)
  }

  e.path && routerInstance?.replace(e.path)
}

window.unmount = unmount
window.mount = mount

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}
