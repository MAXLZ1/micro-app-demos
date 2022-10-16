import React, { lazy } from 'react'
import { createHashRouter, Outlet, RouteObject } from 'react-router-dom'
import { getBasename } from '@ice/stark-app'

const CommunicationTest = lazy(() => import('@/views/CommunicationTest'))
const NavigateView = lazy(() => import('@/views/NavigateView'))

const basename = getBasename()

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
