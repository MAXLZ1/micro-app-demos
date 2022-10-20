import '@/reset.css'
import React, {  Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import router from '@/router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import { ConfigProvider, Spin } from 'antd'

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
