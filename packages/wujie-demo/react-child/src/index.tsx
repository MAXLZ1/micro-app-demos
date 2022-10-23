import '@/reset.css'
import React, {  Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import router from '@/router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import { ConfigProvider, Spin } from 'antd'
import { setUser } from '@/stores/userSlice'

function setup() {
  const container = document.getElementById('root')!

  const root = ReactDOM.createRoot(container)
  
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Suspense fallback={
          <Spin>
            <div style={{width: '100%', height: '200px'}}></div>
          </Spin>
        }>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </React.StrictMode>
  )  
  return root
}

function changeUserListener(e: any) {
  store.dispatch((dispatch) => {
    dispatch(setUser(e.user))
  })
}

function routerChangeListener(e: any) {
  router.navigate(e.path, { replace: e.replace })
}

if (window.__POWERED_BY_WUJIE__) {
  let root: ReactDOM.Root | undefined
  window.__WUJIE_MOUNT = () => {
    root = setup()
    window.$wujie?.bus.$on('changeUser', changeUserListener)
    window.$wujie?.bus.$on('reactApp:router-change', routerChangeListener)
  }
  window.__WUJIE_UNMOUNT = () => {
    root?.unmount()
    window.$wujie?.bus.$off('changeUser', changeUserListener)
    window.$wujie?.bus.$off('reactApp:router-change', routerChangeListener)
  }
} else {
  setup()
}
