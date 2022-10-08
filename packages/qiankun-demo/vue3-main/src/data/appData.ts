export interface MicoApp {
  name: string
  entry: string
  container: string
  activeRule: string
}

export const apps = [
  {
    name: 'vue2App',
    entry: import.meta.env.MODE === 'production' ? '' : 'http://localhost:8091',
    container: '#child-app',
    activeRule: '/vue2App',
  },
  {
    name: 'reactApp',
    entry: import.meta.env.MODE === 'production' ? '' : 'http://localhost:8092',
    container: '#child-app',
    activeRule: '/reactApp',
  },
  {
    name: 'viteApp',
    entry: import.meta.env.MODE === 'production' ? '' : 'http://localhost:8093',
    container: '#child-app',
    activeRule: '/viteApp',
  },
]
