import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import isInIcestark from '@ice/stark-app/lib/isInIcestark'
import setLibraryName from '@ice/stark-app/lib/setLibraryName'
import { useUserStore, type User } from '@/stores/user'
import { store } from '@ice/stark-data'

interface Props {
  container: HTMLElement
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

export function mount(props: Props) {
  const { container } = props
  vue = new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router,
    pinia: createPinia(),
    render: (h) => h(App),
  }).$mount()
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
