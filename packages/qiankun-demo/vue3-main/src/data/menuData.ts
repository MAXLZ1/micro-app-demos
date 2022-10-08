import type { AsyncComponentLoader } from 'vue'

export interface Menu {
  name: string
  path?: string
  component?: string | AsyncComponentLoader,
  key: number
  children?: Menu[]
  keepAlive?: boolean
}

export const menuList: Menu[] = [
  {
    key: 1,
    name: 'Vue3主应用',
    path: '/',
    children: [
      {
        key: 11,
        path: 'page1',
        name: '主应用 page1',
        component: 'PageOne.vue'
      }
    ],
  },
  {
    key: 2,
    name: 'Vue2子应用',
    path: '/vue2App',
    children: [
      {
        key: 21,
        path: 'communication-test',
        name: 'Vue2通信测试',
      },
      {
        key: 22,
        name: '子应用保活测试 TODO',
        path: 'tab-view',
        keepAlive: true,
      },
    ]
  },
  {
    key: 3,
    name: 'React18子应用',
    path: '/reactApp',
    children: [
      {
        key: 31,
        path: 'communication-test',
        name: 'React18通信测试'
      }
    ],
  },
  {
    key: 4,
    name: 'Vite子应用',
    path: '/viteApp',
    children: [
      {
        key: 41,
        path: 'communication-test',
        name: 'Vite通信测试'
      }
    ],
  },
  {
    key: 5,
    name: '子应用共存测试',
    path: '/coexist-micro-app',
    component: 'CoexistMicroApp.vue',
  },
  {
    key: 6,
    name: 'CSS隔离测试',
    path: '/css-isolation',
    component: 'CssIsolation.vue'
  },
]
