import React, { lazy } from 'react'
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom'

const CommunicationTest = lazy(() => import('@/views/CommunicationTest'))
const NavigateView = lazy(() => import('@/views/NavigateView'))
const TabView = lazy(() => import('@/views/TabView'))

const basename = '/'

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
        path: 'tab-view',
        element: <TabView />,
      },
    ]
  }
]

export function createRouter (basename: string) {
  return createBrowserRouter(routes, {
    basename
  })
}

const router = createRouter(basename)

export default router
