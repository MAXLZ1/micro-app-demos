import { createRouter, createWebHashHistory } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import { useUserStore } from '@/stores/user'
import { user as userData } from '@/data/userData'
import { setMicroAppLoading } from '@/utils/microAppLoading'

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

router.afterEach(() => {
  setMicroAppLoading(false)
})

export default router
