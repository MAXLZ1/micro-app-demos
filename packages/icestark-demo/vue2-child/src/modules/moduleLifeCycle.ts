import Vue from 'vue'
import { PiniaVuePlugin, createPinia } from 'pinia'
import { ConfigProvider } from 'ant-design-vue'
import { store } from '@ice/stark-data'
import { useUserStore, type User } from '@/stores/user'

Vue.use(PiniaVuePlugin)

let vue: Vue | null = null

function userChangeListener(user: User) {
  const { setUser } = useUserStore()
  setUser(user)
}

// 声明 mount 生命周期
export function mount(ModuleComponent: any, targetNode: Element) {
  vue = new Vue({
    pinia: createPinia(),
    render: (h) =>
      h(
        ConfigProvider,
        {
          props: {
            prefixCls: 'av2',
            getPopupContainer(triggerNode: { parentNode: HTMLElement }): Element {
              if (triggerNode) {
                return triggerNode.parentNode
              }
              return (this as unknown as Vue).$root.$el
            },
          },
        },
        [h(ModuleComponent)]
      ),
  }).$mount()

  store.on('user', userChangeListener, true)
  targetNode.innerHTML = ''
  targetNode.appendChild(vue.$el)
}

// 声明 unmount 生命周期
export function unmount(targetNode: Element) {
  vue && vue.$destroy()
  vue = null
  targetNode.innerHTML = ''
  store.off('user', userChangeListener)
}
