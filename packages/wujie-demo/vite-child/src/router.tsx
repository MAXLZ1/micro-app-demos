import React, { lazy } from 'react'
import { createHashRouter, Outlet, RouteObject } from 'react-router-dom'

const CommunicationTest = lazy(() => import('@/views/CommunicationTest'))
const NavigateView = lazy(() => import('@/views/NavigateView'))
const CssIsolation = lazy(() => import('@/views/CssIsolation'))
const TabView = lazy(() => import('@/views/TabView'))

const basename = window.__POWERED_BY_WUJIE__ ? '/viteApp' : '/'

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
      {
        path: 'css-isolation',
        element: <CssIsolation />
      },
      {
        path: 'tab-view',
        element: <TabView />
      },
    ]
  }
]

const router = createHashRouter(routes, {
  basename,
})

export default router
