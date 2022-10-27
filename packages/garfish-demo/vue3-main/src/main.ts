import '@/styles/index.less'
import { createApp, toRaw } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import { listenReceiveMessage } from '@/utils/messageListener'
import preloadApp from '@/utils/preloadApp'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

listenReceiveMessage()

preloadApp()