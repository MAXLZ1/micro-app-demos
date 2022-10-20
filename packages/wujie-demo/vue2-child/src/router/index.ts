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
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE,
  routes,
})

export default router
