import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/communication-test',
  },
  {
    path: '/communication-test',
    component: () => import('@/views/CommunicationTest.vue'),
  },
  {
    path: '/coexist-view',
    component: () => import('@/views/CoexistView.vue'),
  },
  {
    path: '/tab-view',
    component: () => import('@/views/TabView.vue'),
  },
  {
    path: '/css-isolation',
    component: () => import('@/views/CssIsolation.vue'),
  },
]

export const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? '/vue2App' : process.env.BASE_URL,
  routes,
})

export const abstractRouter = new VueRouter({
  mode: 'abstract',
  base: window.__POWERED_BY_QIANKUN__ ? '/vue2App' : process.env.BASE_URL,
  routes,
})
