import type { AppConfig } from '@ice/stark/lib/apps'

export const vue2PublicPath = import.meta.env.VITE_VUE2_CHILD_PUBLIC_PATH
export const reactPublicPath = import.meta.env.VITE_REACT18_CHILD_PUBLIC_PATH
export const vitePublicPath = import.meta.env.VITE_VITE_CHILD_PUBLIC_PATH

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
