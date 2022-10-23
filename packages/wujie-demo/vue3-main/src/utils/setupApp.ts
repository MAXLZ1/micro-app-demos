import { useAppStore } from '@/stores/app'
import WujieVue from 'wujie-vue3'

const { setupApp: setupAppOfWujie, preloadApp } = WujieVue

export function setupApp() {
  const { apps } = useAppStore()

  apps.forEach((item) => {
    setupAppOfWujie({
      name: item.name,
      fetch(url, options) {
        return window.fetch(url, { ...options, credentials: 'omit' })
      }
    })

    // 预加载
    preloadApp({
      name: item.name,
      url: item.url
    })
  })
}
