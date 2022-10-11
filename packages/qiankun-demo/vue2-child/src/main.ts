import '@/public-path'
import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import { router, abstractRouter } from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
import type VueRouter from 'vue-router'
import type VueType from 'vue'
import type { User } from '@/stores/user'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

let routerInstance: null | VueRouter = null
let instance: null | VueType = null

interface Prop {
  container?: HTMLElement
  path?: string
}

function render(props?: Prop) {
  let container: null | HTMLElement = null
  if (props && props.container) {
    container = props.container
  }
  const vueContainer = container ? (container.querySelector('#app') as Element) : '#app'

  // 存在path，说明主应用在加载多个子应用，此时使用abstract路由
  if (props?.path) {
    routerInstance = abstractRouter
  } else {
    routerInstance = router
  }

  instance = new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router: routerInstance,
    pinia: createPinia(),
    render: (h) => h(App),
  }).$mount(vueContainer)

  if (props?.path) {
    routerInstance.push(props.path)
  }
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

function changeUserListener(e: Event) {
  const { setUser } = useUserStore()
  setUser((e as CustomEvent<User>).detail)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export async function bootstrap() {}

export async function mount(props: any) {
  render(props as Prop)
  window.addEventListener('changeUser', changeUserListener)
}

export async function unmount() {
  if (instance) {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
  }
  window.removeEventListener('changeUser', changeUserListener)
  routerInstance = null
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export async function update() {}
