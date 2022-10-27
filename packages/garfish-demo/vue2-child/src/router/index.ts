import Vue from 'vue'
import VueRouter, { type RouterMode } from 'vue-router'
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
]

export function baseRouter(base: string, mode: RouterMode = 'hash') {
  return new VueRouter({
    mode,
    base: base,
    routes,
  })
}

const router = baseRouter(process.env.BASE_URL as string)

export default router
