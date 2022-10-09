import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

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
        component: () => import('@/views/CommunicationTest.vue'),
      },
      {
        path: 'coexist-view',
        name: 'CoexistView',
        component: () => import('@/views/CoexistView.vue'),
      },
      {
        path: 'tab-view',
        name: 'TabView',
        component: () => import('@/views/TabView.vue'),
      },
      {
        path: 'css-isolation',
        name: 'CssIsolation',
        component: () => import('@/views/CssIsolation.vue'),
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
        component: () => import('@/views/CommunicationTest.vue'),
      },
      {
        path: 'coexist-view',
        name: 'Vue2AppCoexistView',
        component: () => import('@/views/CoexistView.vue'),
      },
      {
        path: 'tab-view',
        name: 'Vue2AppTabView',
        component: () => import('@/views/TabView.vue'),
      },
      {
        path: 'css-isolation',
        name: 'Vue2AppCssIsolation',
        component: () => import('@/views/CssIsolation.vue'),
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
