import React from 'react'
import { createHashRouter, Outlet, RouteObject } from 'react-router-dom'
import CommunicationTest from '@/views/CommunicationTest'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const basename = (qiankunWindow.__POWERED_BY_QIANKUN__ ? '/viteApp' : '') + import.meta.env.BASE_URL

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
    ]
  }
]

export const router = createHashRouter(routes, {
  basename,
})
