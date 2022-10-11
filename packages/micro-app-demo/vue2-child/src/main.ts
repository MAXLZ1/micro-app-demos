import '@/public-path'
import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
import type { User } from '@/stores/user'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

let vue: Vue | null = null

function mount() {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.addEventListener('changeUser', changeUserListener)

    // 监听基座下发的路由变化
    window.microApp?.addDataListener(dataListener)
  }

  vue = new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router,
    pinia: createPinia(),
    render: (h) => h(App),
  }).$mount('#app')
}

function unmount() {
  vue?.$destroy()
  vue = null
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.removeEventListener('changeUser', changeUserListener)
    window.microApp?.removeDataListener(dataListener)
  }
}

function dataListener(data: any) {
  if (data.path) {
    router.push(data.path)
  }
}

function changeUserListener(e: Event) {
  const { setUser } = useUserStore()
  setUser((e as CustomEvent<User>).detail)
}

if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  mount()
}
