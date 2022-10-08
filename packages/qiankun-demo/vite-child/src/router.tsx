import React from 'react'
import { createBrowserRouter, Outlet, redirect } from 'react-router-dom'
import Index from '@/views/CommunicationTest'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

export const router = createBrowserRouter([
  {
    path: '',
    loader: () => redirect('/communication-test')
  },
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: 'communication-test',
        element: <Index />,
      }
    ]
  }
], {
  basename: qiankunWindow.__POWERED_BY_QIANKUN__ ? '/viteApp' : '/'
})
