import { createBrowserRouter, createMemoryRouter, Outlet, redirect } from 'react-router-dom'
import Index from '@/views/CommunicationTest'
import CoexistView from '@/views/CoexistView'
import CssIsolation from '@/views/CssIsolation'
import type { RouteObject } from 'react-router-dom'

const basename = window.__POWERED_BY_QIANKUN__ ? '/reactApp' : '/'

const routes: RouteObject[] = [
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


export const router = createBrowserRouter(routes, {
  basename
})

export const memoryRouter = createMemoryRouter(routes, {
  basename
})
