import React, { lazy } from 'react'
import { createHashRouter, Outlet, RouteObject } from 'react-router-dom'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const CommunicationTest = lazy(() => import('@/views/CommunicationTest'))
const NavigateView = lazy(() => import('@/views/NavigateView'))

const basename = qiankunWindow.__POWERED_BY_QIANKUN__ ? '/viteApp' : '/'

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

export const router = createHashRouter(routes, {
  basename,
})
