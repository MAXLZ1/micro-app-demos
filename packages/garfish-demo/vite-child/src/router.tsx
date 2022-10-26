import React, { lazy } from 'react'
import { createBrowserRouter, createMemoryRouter, Outlet, RouteObject } from 'react-router-dom'

type Mode = 'history' | 'memory'

const CommunicationTest = lazy(() => import('@/views/CommunicationTest'))
const NavigateView = lazy(() => import('@/views/NavigateView'))
const TabView = lazy(() => import('@/views/TabView'))
const CssIsolation = lazy(() => import('@/views/CssIsolation'))

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
      {
        path: 'css-isolation',
        element: <CssIsolation />,
      },
    ]
  }
]

export function createRouter (basename: string, mode: Mode = 'history') {
  return (mode === 'history' ? createBrowserRouter : createMemoryRouter)(routes, {
    basename
  })
}

const router = createRouter(basename)

export default router
