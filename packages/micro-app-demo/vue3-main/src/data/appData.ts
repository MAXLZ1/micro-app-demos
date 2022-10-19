export interface MicroApp {
  name: string
  url: string
  baseroute: string
}

export const vue2AppEntry = import.meta.env.VITE_VUE2_CHILD_ENTRY
export const reactAppEntry = import.meta.env.VITE_REACT18_CHILD_ENTRY
export const viteAppEntry = import.meta.env.VITE_VITE_CHILD_ENTRY

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
