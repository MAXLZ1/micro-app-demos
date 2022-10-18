import type { AppConfig } from '@ice/stark/lib/apps'

export const vue2PublicPath =
  import.meta.env.MODE === 'production'
    ? 'https://maxlz1.github.io/micro-app-demos/icestark-demo/vue2-child/dist'
    : 'http://localhost:8091'
export const reactPublicPath =
  import.meta.env.MODE === 'production'
    ? 'https://maxlz1.github.io/micro-app-demos/icestark-demo/react-child/dist'
    : 'http://localhost:8092'
export const vitePublicPath =
  import.meta.env.MODE === 'production'
    ? 'https://maxlz1.github.io/micro-app-demos/icestark-demo/vite-child/dist'
    : 'http://localhost:8093'

export const apps: AppConfig[] = [
  {
    name: 'vue2App',
    activePath: ['/vue2App'],
    url: [`${vue2PublicPath}/js/app.js`],
    hashType: true
  },
  {
    name: 'reactApp',
    activePath: ['/reactApp'],
    url: [`${reactPublicPath}/static/js/app.bundle.js`],
    hashType: true
  },
  {
    name: 'viteApp',
    activePath: ['/viteApp'],
    entry: vitePublicPath,
    hashType: true,
    loadScriptMode: 'import'
  }
]
