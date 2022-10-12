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

let root: ReactDOM.Root | null = null

function mount() {
  const container = document.getElementById('root')!
  root = ReactDOM.createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConfigProvider prefixCls="ar4" getPopupContainer={node => {
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

  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.microApp.addDataListener(dataListener, true)
  }
}

function unmount() {
  root?.unmount()
  root = null
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.microApp.removeDataListener(dataListener)
  }
}

function dataListener(e: any) {
  if (e.user) {
    store.dispatch((dispatch) => {
      dispatch(setUser(e.user))
    })
  }
  e.path && router.navigate(e.path)
}

window.unmount = unmount
window.mount = mount

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}
