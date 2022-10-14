export interface MicroApp {
  name: string
  url: string
  baseroute: string
}

export const vue2AppEntry = import.meta.env.MODE === 'production' ? 'https://maxlz1.github.io/micro-app-demos/micro-app-demo/vue2-child/dist/' : 'http://localhost:8091'
export const reactAppEntry = import.meta.env.MODE === 'production' ? 'https://maxlz1.github.io/micro-app-demos/micro-app-demo/react-child/dist/' : 'http://localhost:8092'
export const viteAppEntry = import.meta.env.MODE === 'production' ? 'https://maxlz1.github.io/micro-app-demos/micro-app-demo/vite-child/dist/' : 'http://localhost:8093/vite/'

export const apps = [
  {
    name: 'vue2App',
    url: vue2AppEntry,
    baseroute: '/vue2App'
  },
  {
    name: 'reactApp',
    url: reactAppEntry,
    baseroute: '/reactApp'
  },
  {
    name: 'viteApp',
    url: viteAppEntry,
    baseroute: '/viteApp'
  }
]
