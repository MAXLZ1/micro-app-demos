import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import { router, abstractRouter } from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import isInIcestark from '@ice/stark-app/lib/isInIcestark'
import setLibraryName from '@ice/stark-app/lib/setLibraryName'
import { useUserStore, type User } from '@/stores/user'
import { store } from '@ice/stark-data'
import type VueRouter from 'vue-router'

interface Props {
  container: HTMLElement
  customProps: {
    abstract?: boolean
    path?: string
  }
}

// 注意：`setLibraryName` 的入参需要与 webpack 工程配置的 output.library 保持一致
setLibraryName('@icestark-demo/vue2-child')

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

function userChangeListener(user: User) {
  const { setUser } = useUserStore()
  setUser(user)
}

let vue: Vue | null = null
let routerInstance: VueRouter | null = null

export function mount(props: Props) {
  const { container, customProps } = props
  if (customProps?.abstract) {
    routerInstance = abstractRouter
  } else {
    routerInstance = router
  }
  vue = new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router: routerInstance,
    pinia: createPinia(),
    render: (h) => h(App),
  }).$mount()
  if (customProps?.path) {
    routerInstance.push(customProps.path)
  }
  store.on('user', userChangeListener, true)
  container.innerHTML = ''
  container.appendChild(vue.$el)
}

export function unmount() {
  if (vue) {
    vue.$destroy()
    vue.$el.innerHTML = ''
  }
  vue = null
  routerInstance = null
  store.off('user', userChangeListener)
}

if (!isInIcestark()) {
  new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router,
    pinia: createPinia(),
    render: (h) => h(App),
  }).$mount('#app')
}
