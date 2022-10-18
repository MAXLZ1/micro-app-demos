import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import { ConfigProvider } from 'antd'
import { store as iceStore } from '@ice/stark-data'
import { setUser, User } from '@/stores/userSlice'
let root: ReactDOM.Root | null = null

function userChangeListener(user: User) {
  store.dispatch(dispatch => {
    dispatch(setUser(user))
  })
}

// 声明 mount 生命周期
export function mount(ModuleComponent: any, targetNode: HTMLElement, props: any) {
  root = ReactDOM.createRoot(targetNode)
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConfigProvider prefixCls="ar4" getPopupContainer={node => {
          if (node) {
            return node.parentNode as HTMLElement
          }
          return targetNode
        }}>
          <ModuleComponent {...props} />
        </ConfigProvider>
      </Provider>
    </React.StrictMode>
  )
  iceStore.on('user', userChangeListener, true)
}

// 声明 unmount 生命周期
export function unmount() {
  root && root.unmount()
  root = null
  iceStore.off('user', userChangeListener)
}
