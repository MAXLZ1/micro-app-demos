import '@/styles/index.less'
import { createApp, toRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { listenReceiveMessage } from '@/utils/messageListener'
import Garfish from 'garfish'
import { useAppStore } from './stores/app'
import { useUserStore } from './stores/user'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

listenReceiveMessage()

const { apps } = useAppStore()

Garfish.run({
  basename: '/',
  domGetter: '#child-app',
  apps: apps.map((item) => ({
    ...item,
    sandbox: item.name !== 'viteApp'
  })) as any,
  afterMount() {
    const { user } = useUserStore()
    window.Garfish.channel.emit('userInfo', toRaw(user))
  }
})
