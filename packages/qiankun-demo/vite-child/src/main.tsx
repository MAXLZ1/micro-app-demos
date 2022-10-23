import '@/public-path'
// import '@/reset.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { memoryRouter, router } from '@/router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import type { User } from '@/stores/userSlice'
import { setUser } from '@/stores/userSlice'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { ConfigProvider, Spin } from 'antd'

interface Prop {
  container?: HTMLElement
  path?: string
}

let root: null | ReactDOM.Root = null

function render(props?: Prop) {
  let container: null | HTMLElement = null
  if (props && props.container) {
    container = props.container
  }

  let appContainer = (container ? container.querySelector('#root') : document.getElementById('root')) as HTMLElement

  root = ReactDOM.createRoot(appContainer)

  root.render(<React.StrictMode>
    <Provider store={store}>
      <ConfigProvider prefixCls="arv4" getPopupContainer={node => {
        if (node) {
          return node.parentNode as HTMLElement
        }
        return appContainer
      }}>
        <Suspense fallback={
          <Spin>
            <div style={{width: '100%', height: '200px'}}></div>
          </Spin>
        }>
          <RouterProvider router={props?.path ? memoryRouter : router} />
        </Suspense>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>)

  if (props?.path) {
    memoryRouter.navigate(props.path)
  }
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

function changeUserListener(e: Event) {
  store.dispatch((dispatch) => {
    dispatch(setUser((e as CustomEvent<User>).detail))
  })
}

renderWithQiankun({
  mount: async (props: Prop) => {
    render(props)
    qiankunWindow.addEventListener('changeUser', changeUserListener)
  },
  bootstrap(){},
  unmount: async () => {
    root && root.unmount()
    qiankunWindow.removeEventListener('changeUser', changeUserListener)
  },
  update(){}
})

