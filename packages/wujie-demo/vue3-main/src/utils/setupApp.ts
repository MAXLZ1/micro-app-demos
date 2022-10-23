import type { MicroApp } from '@/data/appData'
import { useAppStore } from '@/stores/app'
import WujieVue from 'wujie-vue3'

const { setupApp: setupAppOfWujie, preloadApp } = WujieVue

function geAttrs(app: MicroApp) {
  // 修改iframe src attr，防止github pages csp报错
  return import.meta.env.MODE === 'production' ? { src: app.url} : {}
}

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
        attrs: geAttrs(item)
      })
      // 预加载
      preloadApp({
        name,
        url: item.url
      })
    })
  })
}
