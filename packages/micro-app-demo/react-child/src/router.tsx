import { createHashRouter, createMemoryRouter, Outlet } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const CommunicationTest = lazy(() => import('@/views/CommunicationTest'))
const CssIsolation = lazy(() => import('@/views/CssIsolation'))
const NavigateView = lazy(() => import('@/views/NavigateView'))
const MicroAppView = lazy(() => import('@/views/MicroAppView'))
const TabView = lazy(() => import('@/views/TabView'))

const basename = window.__MICRO_APP_BASE_ROUTE__ || '/'

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

export const router = createHashRouter(routes, {
  basename
})

export const memoryRouter = createMemoryRouter(routes, {
  basename
})

export default router
