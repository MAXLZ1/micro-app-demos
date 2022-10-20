import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

new Vue({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount('#app')
