import { createRouter, createWebHashHistory } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import { useUserStore } from '@/stores/user'
import { user as userData } from '@/data/userData'
import { setMicroAppLoading } from '@/utils/microAppLoading'
import Garfish, { type interfaces } from 'garfish'
import { useAppStore } from '@/stores/app'
import { toRaw } from 'vue'

const map = new Map()

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main/communication-test'
    }
  ]
})

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
    next()
  }
})

router.afterEach(async (to, from) => {
  const { apps } = useAppStore()
  const toAppInfo = apps.find((item) => to.path.startsWith(item.activeWhen))
  const fromAppInfo = apps.find((item) => from.path.startsWith(item.activeWhen))

  // 隐藏子应用
  if (fromAppInfo) {
    if (map.has(fromAppInfo.name)) {
      map.get(fromAppInfo.name).hide()
    }
  }

  // 存在被激活的子应用
  if (toAppInfo) {
    Garfish.setGlobalValue('__MAIN_ROUTER__', router)

    const { user } = useUserStore()
    const path = to.path.slice(toAppInfo.activeWhen.length)
    if (map.has(toAppInfo.name)) {
      const app = map.get(toAppInfo.name)
      // 更新path
      app.appInfo.props.path = path
      await app.show()
    } else {
      const options: Partial<Omit<interfaces.AppInfo, 'name'>> = {
        domGetter: '#child-app',
        basename: toAppInfo.activeWhen,
        entry: toAppInfo.entry,
        props: {
          path
        },
        cache: true
      }
      if (toAppInfo.name === 'viteApp') {
        options.sandbox = false
      }
      const app = await Garfish.loadApp(toAppInfo.name, options)
      await app?.mount()
      map.set(toAppInfo.name, app)
    }
    window.Garfish.channel.emit('userInfo', toRaw(user))
  }
  setMicroAppLoading(false)
})

export default router
