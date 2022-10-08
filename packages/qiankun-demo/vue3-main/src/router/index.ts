import { createRouter, createWebHistory } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import { useUserStore } from '@/stores/user'
import { useAppStore } from '@/stores/app'
import { user as userData } from '@/data/userData'
import { loadMicroApp } from 'qiankun'
import type { MicroApp } from 'qiankun'
import { dispatchUserEvent } from '@/utils/dispatchUserEvent'
import { toRaw } from 'vue'
import { setMicroAppLoading } from '@/utils/microAppLoading'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    redirect: '/page1'
  }]
})

const microAppMap = new Map<string, MicroApp>()

// 是否已经加载初始化的数据
let loadedInitData = false

router.beforeEach(async (to, from, next) => {
  const { addRoutes } = useMenuStore()
  const { setUser } = useUserStore()
  setMicroAppLoading(true)
  if (!loadedInitData) {
    setUser(userData)
    addRoutes()
    loadedInitData = true
    next(to)
  } else {
    const { apps } = useAppStore()

    const app = apps.find(item => from.fullPath.startsWith(item.activeRule))
    if (app) {
      const name = app.name
      if (microAppMap.has(name)) {
        const microApp = microAppMap.get(name)!
        if (microApp.getStatus() === 'MOUNTED') {
          await microApp.unmount()
        }
      }
    }
    next()
  }
})

let mounting = false
router.afterEach(async (to) => {
  window.dispatchEvent(new CustomEvent('routerAfterEach'))
  const { apps } = useAppStore()
  const { user } = useUserStore()
  const app = apps.find(item => to.fullPath.startsWith(item.activeRule))
  let microApp

  // 手动加载子应用
  if (app) {
    const name = app.name
    if (microAppMap.has(name)) {
      microApp = microAppMap.get(name)!
      // const status = microApp.getStatus()
      if (!mounting) {
        mounting = true
        await microApp.mount()
        mounting = false
      }
    } else {
      if (!mounting) {
        mounting = true
        microApp = loadMicroApp(app, {
          singular: true,
        })
        microAppMap.set(name, microApp)
        await microApp.mountPromise
      }
      mounting = false
    }
    dispatchUserEvent(toRaw(user))
  }
  setMicroAppLoading(false)
})

export default router
