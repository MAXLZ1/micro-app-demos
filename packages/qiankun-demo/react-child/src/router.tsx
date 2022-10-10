import { createHashRouter, createMemoryRouter, Outlet } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'

const CommunicationTest = lazy(() => import('@/views/CommunicationTest'))
const CoexistView = lazy(() => import('@/views/CoexistView'))
const CssIsolation = lazy(() => import('@/views/CssIsolation'))
const NavigateView = lazy(() => import('@/views/NavigateView'))

const basename = window.__POWERED_BY_QIANKUN__ ? '/reactApp' : '/'

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
        path: 'coexist-view',
        element: <CoexistView />,
      },
      {
        path: 'css-isolation',
        element: <CssIsolation />,
      },
      {
        path: 'navigate-view',
        element: <NavigateView />,
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
