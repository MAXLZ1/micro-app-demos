import { createHashRouter, createMemoryRouter, Outlet } from 'react-router-dom'
import CommunicationTest from '@/views/CommunicationTest'
import CoexistView from '@/views/CoexistView'
import CssIsolation from '@/views/CssIsolation'
import type { RouteObject } from 'react-router-dom'
import React from 'react'

const basename = process.env.PUBLIC_URL + (window.__POWERED_BY_QIANKUN__ ? '/reactApp' : '/')

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
      }
    ]
  },
]

export const router = createHashRouter(routes, {
  basename
})

export const memoryRouter = createMemoryRouter(routes, {
  basename
})
