import { useAppStore } from '@/stores/app'
import WujieVue from 'wujie-vue3'

const { setupApp: setupAppOfWujie, preloadApp } = WujieVue

export function setupApp() {
  const { apps } = useAppStore()

  apps.forEach((item) => {
    const names = [
      item.name,
      item.name + 'Coexist',
      item.name + 'CssIsolation',
      item.name + 'KeepAlive'
    ]
    names.forEach((name) => {
      setupAppOfWujie({
        name,
        attrs: {
          // 修改iframe src attr，防止github pages csp报错
          src: item.url
        }
      })
      // 预加载
      preloadApp({
        name,
        url: item.url
      })
    })
  })
}
