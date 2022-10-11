import '@/public-path'
import '@/reset.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import router from '@/router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import { ConfigProvider, Spin } from 'antd'
import { setUser } from '@/stores/userSlice'
import type { User } from '@/stores/userSlice'

let root: ReactDOM.Root | null = null

function mount() {
  if (window.__MICRO_APP_BASE_APPLICATION__) {
    // 监听基座下发的路由变化
    window.addEventListener('viteApp:routerChange', routerChangeListaner)
    window.addEventListener('changeUser', changeUserListener)
  }

  const container = document.getElementById('vite-root')!

  root = ReactDOM.createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConfigProvider prefixCls="arv4" getPopupContainer={node => {
          if (node) {
            return node.parentNode as HTMLElement
          }
          return container
        }}>
          <Suspense fallback={
            <Spin>
              <div style={{width: '100%', height: '200px'}}></div>
            </Spin>
          }>
            <RouterProvider router={router} />
          </Suspense>
        </ConfigProvider>
      </Provider>
    </React.StrictMode>
  )
}

function unmount() {
  root?.unmount()
  root = null
  if (window.__MICRO_APP_BASE_APPLICATION__) {
    window.removeEventListener('viteApp:routerChange', routerChangeListaner)
    window.removeEventListener('changeUser', changeUserListener)
  }
}

function routerChangeListaner(e: any) {
  if (e.detail) {
    router.navigate(e.detail)
  }
}

function changeUserListener(e: Event) {
  store.dispatch((dispatch) => {
    dispatch(setUser((e as CustomEvent<User>).detail))
  })
}

if (window.__MICRO_APP_BASE_APPLICATION__) {
  window['micro-app-viteApp'] = { mount, unmount }
} else {
  mount()
}
