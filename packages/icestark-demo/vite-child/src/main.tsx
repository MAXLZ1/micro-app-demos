import '@/reset.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import router from '@/router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import { ConfigProvider, Spin } from 'antd'
import { setUser, User } from '@/stores/userSlice'
import { store as iceStore } from '@ice/stark-data'
import { isInIcestark } from '@ice/stark-app'

interface Props {
  container: HTMLElement
}

function setup(container: HTMLElement): ReactDOM.Root {

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
  
  return root
}

function userChangeListener(user: User) {
  store.dispatch(dispatch => {
    dispatch(setUser(user))
  })
}

let root: ReactDOM.Root | null = null

export function mount(props: Props) {
  iceStore.on('user', userChangeListener, true)
  const { container } = props
  root = setup(container)
}

export function unmount() {
  root && root.unmount()
  iceStore.off('user', userChangeListener)
}

if (!isInIcestark()) {
  setup(document.getElementById('root')!)
}
