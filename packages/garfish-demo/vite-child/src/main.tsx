import '@/reset.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import router, { createRouter } from '@/router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import { ConfigProvider, Spin } from 'antd'
import { setUser, type User } from '@/stores/userSlice'

function handleUserInfo(user: User) {
  store.dispatch(dispatch => {
    dispatch(setUser(user))
  })
}

export const provider = () => {
  let root: ReactDOM.Root | null = null
  return {
    render({ basename, dom }: { basename: string, dom: HTMLElement }) {
      window?.Garfish.channel.on('userInfo', handleUserInfo)
      const container = dom.querySelector('#root')!
      root = ReactDOM.createRoot(container)

      root.render(<React.StrictMode>
        <Provider store={store}>
          <ConfigProvider prefixCls="arv4" getPopupContainer={node => {
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
              <RouterProvider router={createRouter(basename)} />
            </Suspense>
          </ConfigProvider>
        </Provider>
      </React.StrictMode>)
    },
    destroy() {
      root?.unmount()
      window?.Garfish.channel.removeListener('userInfo', handleUserInfo)
    },
  }
}

// @ts-ignore
if (window.__GARFISH__ && typeof __GARFISH_EXPORTS__ !== 'undefined') {
  // eslint-disable-next-line no-undef
  // @ts-ignore
  __GARFISH_EXPORTS__.provider = provider
}

if (!window.__GARFISH__) {
  const container = document.getElementById('root')!

  const root = ReactDOM.createRoot(container)
  
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