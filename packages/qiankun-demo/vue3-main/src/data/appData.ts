export interface MicroApp {
  name: string
  entry: string
  container: string
  activeRule: string
}

export const vue2AppEntry = import.meta.env.VITE_VUE2_CHILD_ENTRY
export const reactAppEntry = import.meta.env.VITE_REACT18_CHILD_ENTRY
export const viteAppEntry = import.meta.env.VITE_VITE_CHILD_ENTRY

export const apps = [
  {
    name: 'vue2App',
    entry: vue2AppEntry,
    container: '#child-app',
    activeRule: '#/vue2App'
  },
  {
    name: 'reactApp',
    entry: reactAppEntry,
    container: '#child-app',
    activeRule: '#/reactApp'
  },
  {
    name: 'viteApp',
    entry: viteAppEntry,
    container: '#child-app',
    activeRule: '#/viteApp'
  }
]
