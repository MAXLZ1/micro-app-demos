export interface MicoApp {
  name: string
  entry: string
  container: string
  activeRule: string
}

export const vue2AppEntry = import.meta.env.MODE === 'production' ? 'https://maxlz1.github.io/micro-app-demos/qiankun-demo/vue2-child/dist/' : 'http://localhost:8091'
export const reactAppEntry = import.meta.env.MODE === 'production' ? 'https://maxlz1.github.io/micro-app-demos/qiankun-demo/react-child/dist/' : 'http://localhost:8092'
export const viteAppEntry = import.meta.env.MODE === 'production' ? 'https://maxlz1.github.io/micro-app-demos/qiankun-demo/vite-child/dist/' : 'http://localhost:8093'

export const apps = [
  {
    name: 'vue2App',
    entry: vue2AppEntry,
    container: '#child-app',
    activeRule: '/vue2App',
  },
  {
    name: 'reactApp',
    entry: reactAppEntry,
    container: '#child-app',
    activeRule: '/reactApp',
  },
  {
    name: 'viteApp',
    entry: viteAppEntry,
    container: '#child-app',
    activeRule: '/viteApp',
  },
]
