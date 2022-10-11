import React, { lazy } from 'react'
import { createHashRouter, Outlet, RouteObject } from 'react-router-dom'

const CommunicationTest = lazy(() => import('@/views/CommunicationTest'))
const NavigateView = lazy(() => import('@/views/NavigateView'))

// vite作为子应用会使环境变量失效
// 这里使用__MICRO_APP_BASE_APPLICATION__判断是否在微前端环境，动态设置basename
const basename = window.__MICRO_APP_BASE_APPLICATION__ ? '/viteApp' : ''

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { index: true, element: <CommunicationTest /> },
      {
        path: 'communication-test',
        element: <CommunicationTest />,
      },
      {
        path: 'navigate-view',
        element: <NavigateView />,
      },
    ]
  }
]

const router = createHashRouter(routes, {
  basename,
})

export default router
