import '@/reset.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import router, { createRouter } from '@/router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import { ConfigProvider, Spin } from 'antd'
import { setUser, type User } from '@/stores/userSlice'
import type { RouterProviderProps } from 'react-router-dom'

function handleUserInfo(user: User) {
  store.dispatch(dispatch => {
    dispatch(setUser(user))
  })
}

export const provider = () => {
  let root: ReactDOM.Root | null = null
  let router: RouterProviderProps["router"] | null = null

  return {
    render({ basename, dom, props }: any) {
      window?.Garfish.channel.on('userInfo', handleUserInfo)
      
      const container = dom.querySelector('#root')!
      // 如果存在props.path，启用memory路由
      router = createRouter(basename, props.path ? 'memory' : 'hash')
      root = ReactDOM.createRoot(container)

      root.render(<React.StrictMode>
        <Provider store={store}>
          <ConfigProvider prefixCls="ar4" getPopupContainer={node => {
            if (node) {
              return node.parentNode as HTMLElement
            }
            return dom
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
      </React.StrictMode>)

      if (props.path) {
        router.navigate(basename + props.path)
      }
      
    },
    destroy() {
      root?.unmount()
      router?.dispose()
      root = null
      router = null
      window?.Garfish.channel.removeListener('userInfo', handleUserInfo)
    },
  }
}

if (!window.__GARFISH__) {
  const container = document.getElementById('root')!

  const root = ReactDOM.createRoot(container)
  
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
}
