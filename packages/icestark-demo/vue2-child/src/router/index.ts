import Vue from 'vue'
import VueRouter from 'vue-router'
import lazyLoad from '@/utils/lazyLoad'
import type { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/communication-test',
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path: 'communication-test',
        name: 'CommunicationTest',
        component: () => lazyLoad(import('@/views/CommunicationTest.vue')),
      },
      {
        path: 'coexist-view',
        name: 'CoexistView',
        component: () => lazyLoad(import('@/views/CoexistView.vue')),
      },
      {
        path: 'tab-view',
        name: 'TabView',
        component: () => lazyLoad(import('@/views/TabView.vue')),
      },
      {
        path: 'css-isolation',
        name: 'CssIsolation',
        component: () => lazyLoad(import('@/views/CssIsolation.vue')),
      },
      {
        path: 'navigate-view',
        name: 'NavigateView',
        component: () => lazyLoad(import('@/views/NavigateView.vue')),
      },
    ],
  },
  {
    path: '/vue2App',
    redirect: '/vue2App/communication-test',
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path: 'communication-test',
        name: 'Vue2AppCommunicationTest',
        component: () => lazyLoad(import('@/views/CommunicationTest.vue')),
      },
      {
        path: 'coexist-view',
        name: 'Vue2AppCoexistView',
        component: () => lazyLoad(import('@/views/CoexistView.vue')),
      },
      {
        path: 'tab-view',
        name: 'Vue2AppTabView',
        component: () => lazyLoad(import('@/views/TabView.vue')),
      },
      {
        path: 'css-isolation',
        name: 'Vue2AppCssIsolation',
        component: () => lazyLoad(import('@/views/CssIsolation.vue')),
      },
      {
        path: 'navigate-view',
        name: 'Vue2AppNavigateView',
        component: () => lazyLoad(import('@/views/NavigateView.vue')),
      },
    ],
  },
]

export const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export const abstractRouter = new VueRouter({
  mode: 'abstract',
  base: process.env.BASE_URL,
  routes,
})

export default router
