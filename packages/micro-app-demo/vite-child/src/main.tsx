import '@/public-path'
import '@/reset.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { router, memoryRouter } from '@/router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import { ConfigProvider, Spin } from 'antd'
import { setUser } from '@/stores/userSlice'
import type { User } from '@/stores/userSlice'

let root: ReactDOM.Root | null = null
let routerInstance: any | null = null

function mount() {

  // 如果存在abstract，使用memory路由
  if (window.__MICRO_APP_BASE_APPLICATION__ && (
    window.eventCenterForViteApp?.getData()?.abstract ||
    window.eventCenterForViteAppKeepAlive?.getData()?.abstract
  )) {
    routerInstance = memoryRouter
  } else {
    routerInstance = router
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
            <RouterProvider router={routerInstance} />
          </Suspense>
        </ConfigProvider>
      </Provider>
    </React.StrictMode>
  )

  if (window.__MICRO_APP_BASE_APPLICATION__) {
    // 监听基座下发的数据变化
    window.eventCenterForViteApp?.addDataListener(dataListener, true)
    window.eventCenterForViteAppKeepAlive?.addDataListener(dataListener, true)
  }
}

function unmount() {
  root?.unmount()
  root = null
  routerInstance = null
  if (window.__MICRO_APP_BASE_APPLICATION__) {
    window.eventCenterForViteApp?.removeDataListener(dataListener)
    window.eventCenterForViteAppKeepAlive?.removeDataListener(dataListener)
  }
}

function dataListener(e: { path: string; user: User }) {
  const { user, path } = e
  user && store.dispatch((dispatch) => {
    dispatch(setUser(user))
  })
  // 由于主应用会进行router.push，为了不影响history，这里使用replace
  path && routerInstance.navigate(path, { replace: true })
}


if (window.__MICRO_APP_BASE_APPLICATION__) {
  window['micro-app-viteApp'] = { mount, unmount }
  window['micro-app-viteAppKeepAlive'] = { mount, unmount }
} else {
  mount()
}
