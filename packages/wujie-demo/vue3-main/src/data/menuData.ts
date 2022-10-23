import type { AsyncComponentLoader } from 'vue'

export interface Menu {
  name: string
  path?: string
  component?: string | AsyncComponentLoader
  key: number
  children?: Menu[]
}

export const menuList: Menu[] = [
  {
    key: 1,
    name: 'Vue3主应用',
    path: 'main',
    component: 'Layout.vue',
    children: [
      {
        key: 11,
        path: 'communication-test',
        name: '主应用通信测试',
        component: 'CommunicationTest.vue'
      },
      {
        key: 12,
        path: 'navigate-view',
        name: '主应用跳转测试',
        component: 'NavigateView.vue'
      }
    ]
  },
  {
    key: 2,
    name: 'Vue2子应用',
    path: 'vue2App',
    component: 'Layout.vue',
    children: [
      {
        key: 21,
        path: 'communication-test',
        name: 'Vue2通信测试'
      },
      {
        key: 22,
        path: 'navigate-view',
        name: '子应用跳转测试'
      }
    ]
  },
  {
    key: 3,
    name: 'React18子应用',
    path: 'reactApp',
    component: 'Layout.vue',
    children: [
      {
        key: 31,
        path: 'communication-test',
        name: 'React18通信测试'
      },
      {
        key: 32,
        path: 'navigate-view',
        name: '子应用跳转测试'
      },
      {
        key: 33,
        path: 'microapp-view',
        name: 'React18作为主应用'
      }
    ]
  },
  {
    key: 4,
    name: 'Vite子应用',
    path: 'viteApp',
    component: 'Layout.vue',
    children: [
      {
        key: 41,
        path: 'communication-test',
        name: 'Vite通信测试'
      },
      {
        key: 42,
        path: 'navigate-view',
        name: '子应用跳转测试'
      }
    ]
  },
  {
    key: 5,
    name: '子应用共存测试',
    path: 'coexist-micro-app',
    component: 'CoexistMicroApp.vue'
  },
  {
    key: 6,
    name: 'CSS隔离测试',
    path: 'css-isolation',
    component: 'CssIsolation.vue'
  },
  {
    key: 7,
    name: '子应用保活',
    path: 'keep-alive-app',
    component: 'Layout.vue',
    children: [
      {
        key: 71,
        name: 'Vue2子应用保活',
        path: 'vue2',
        component: 'Vue2KeepAliveView.vue'
      },
      {
        key: 72,
        name: 'React18子应用保活',
        path: 'react18',
        component: 'React18KeepAliveView.vue'
      },
      {
        key: 73,
        name: 'Vite子应用保活',
        path: 'vite',
        component: 'ViteKeepAliveView.vue'
      }
    ]
  }
]
