import '@/public-path'
import '@/reset.css'
import React, {  Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { router, memoryRouter } from '@/router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import type { User } from '@/stores/userSlice'
import { setUser } from '@/stores/userSlice'
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

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConfigProvider prefixCls="ar4" getPopupContainer={node => {
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
    </React.StrictMode>
  )

  if (props?.path) {
    memoryRouter.navigate(props.path)
  }
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

function changeUserListener(e: Event) {
  store.dispatch((dispatch) => {
    dispatch(setUser((e as CustomEvent<User>).detail))
  })
}

export async function bootstrap() {}

export async function mount(props: Prop) {
  render(props)
  window.addEventListener('changeUser', changeUserListener)
}

export async function unmount() {
  root && root.unmount()
  window.removeEventListener('changeUser', changeUserListener)
}
