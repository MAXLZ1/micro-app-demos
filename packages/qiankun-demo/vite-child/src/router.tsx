import React from 'react'
import { createBrowserRouter, Outlet, redirect, RouteObject } from 'react-router-dom'
import Index from '@/views/CommunicationTest'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const basename = qiankunWindow.__POWERED_BY_QIANKUN__ ? '/viteApp' : '/'

const routes: RouteObject[] = [
  {
    path: '/',
    loader: () => redirect('/communication-test'),
    element: <Outlet />,
    children: [
      {
        path: 'communication-test',
        element: <Index />,
      },
    ]
  },

]

export const router = createBrowserRouter(routes, {
  basename,
})
