import React, { lazy } from 'react'
import { createHashRouter, Outlet, RouteObject } from 'react-router-dom'

const CommunicationTest = lazy(() => import('@/views/CommunicationTest'))
const NavigateView = lazy(() => import('@/views/NavigateView'))

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
    ]
  }
]

const router = createHashRouter(routes, {
  basename,
})

export default router
