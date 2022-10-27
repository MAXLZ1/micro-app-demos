import { createHashRouter, createMemoryRouter, Outlet } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'

type Mode = 'memory' | 'hash'

const CommunicationTest = lazy(() => import('@/views/CommunicationTest'))
const CssIsolation = lazy(() => import('@/views/CssIsolation'))
const NavigateView = lazy(() => import('@/views/NavigateView'))
const MicroAppView = lazy(() => import('@/views/MicroAppView'))
const TabView = lazy(() => import('@/views/TabView'))

const basename = '/'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    errorElement: <div>error</div>,
    children: [
      { index: true, element: <CommunicationTest /> },
      {
        path: 'communication-test',
        element: <CommunicationTest />,
      },
      {
        path: 'css-isolation',
        element: <CssIsolation />,
      },
      {
        path: 'navigate-view',
        element: <NavigateView />,
      },
      {
        path: 'microapp-view',
        element: <MicroAppView />,
      },
      {
        path: 'tab-view',
        element: <TabView />,
      },
    ]
  },
]

export function createRouter (basename: string, mode: Mode = 'hash') {
  return (mode === 'hash' ? createHashRouter : createMemoryRouter)(routes, {
    basename
  })
}

const router = createRouter(basename)

export default router
