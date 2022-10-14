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
import microApp from '@micro-zoe/micro-app'

let root: ReactDOM.Root | null = null
let routerInstance: any | null = null

function mount() {
  
  const container = document.getElementById('root')!
  root = ReactDOM.createRoot(container)
  // 如果存在abstract，使用memory路由
  if (window.__MICRO_APP_ENVIRONMENT__ && window.microApp.getData()?.abstract) {
    routerInstance = memoryRouter
  } else {
    routerInstance = router
  }
  
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
            <RouterProvider router={routerInstance} />
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
  routerInstance = null
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
  // 由于主应用会进行router.push，为了不影响history，这里使用replace
  e.path && routerInstance?.navigate(e.path, { replace: true })
}

window.unmount = unmount
window.mount = mount

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}

microApp.start({
  'disable-memory-router': true, // 关闭虚拟路由系统
  'disable-patch-request': true, // 关闭对子应用请求的拦截
  plugins: {
    modules: {
      viteApp: [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              code = code.replace(
                /(from|import)(\s*['"])(\/vite\/)/g,
                (all) => {
                  return all.replace('/vite/', 'http://localhost:8093/vite/')
                }
              )
            }
            return code
          }
        }
      ]
    }
  }
})
