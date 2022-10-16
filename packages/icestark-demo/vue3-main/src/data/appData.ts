import type { AppConfig } from '@ice/stark/lib/apps'

export const vue2AppEntry =
  import.meta.env.MODE === 'production'
    ? 'https://maxlz1.github.io/micro-app-demos/qiankun-demo/vue2-child/dist/'
    : 'http://localhost:8091'
export const reactAppEntry =
  import.meta.env.MODE === 'production'
    ? 'https://maxlz1.github.io/micro-app-demos/qiankun-demo/react-child/dist/'
    : 'http://localhost:8092'
export const viteAppEntry =
  import.meta.env.MODE === 'production'
    ? 'https://maxlz1.github.io/micro-app-demos/qiankun-demo/vite-child/dist/'
    : 'http://localhost:8093'

export const apps: AppConfig[] = [
  {
    name: 'vue2App',
    activePath: ['/vue2App'],
    entry: vue2AppEntry,
    hashType: true
  },
  {
    name: 'reactApp',
    activePath: ['/reactApp'],
    entry: reactAppEntry,
    hashType: true
  },
  {
    name: 'viteApp',
    activePath: ['/viteApp'],
    entry: viteAppEntry,
    hashType: true,
    loadScriptMode: 'import'
  }
]
