import '@/styles/index.less'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { listenReceiveMessage } from '@/utils/messageListener'
import store from '@ice/stark-data/lib/store'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#main-app')

listenReceiveMessage()

store.set('router', router)
