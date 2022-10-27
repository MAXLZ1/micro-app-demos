<template>
  <a-space direction="vertical" :size="40" class="box">
    <a-alert
      message="左上应用为Vue2子应用，右上应用为React18子应用，左下应用为Vite子应用。"
      type="success"
    />
    <a-row :gutter="20">
      <a-col :span="12">
        <a-button
          v-if="showVueApp"
          type="primary"
          danger
          @click="toggleShowVueApp"
        >
          卸载Vue2应用
        </a-button>
        <a-button v-else type="primary" @click="toggleShowVueApp">
          加载Vue2应用
        </a-button>
        <div ref="one"></div>
      </a-col>
      <a-col :span="12">
        <a-button
          v-if="showReactApp"
          type="primary"
          danger
          @click="toggleShowReactApp"
        >
          卸载React18应用
        </a-button>
        <a-button v-else type="primary" @click="toggleShowReactApp">
          加载React18应用
        </a-button>
        <div ref="two"></div>
      </a-col>
      <a-col :span="12">
        <a-button
          v-if="showViteApp"
          type="primary"
          danger
          @click="toggleShowViteApp"
        >
          卸载Vite应用
        </a-button>
        <a-button v-else type="primary" @click="toggleShowViteApp">
          加载Vite应用
        </a-button>
        <div ref="three"></div>
      </a-col>
    </a-row>
  </a-space>
</template>

<script lang="ts">
export default {
  name: 'CoexistMicroApp'
}
</script>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'
import Garfish, { type interfaces } from 'garfish'
import { storeToRefs } from 'pinia'
import { computed, onBeforeUnmount, onMounted, ref, watchPostEffect, toRaw } from 'vue'

const one = ref<HTMLElement | null>(null)
const two = ref<HTMLElement | null>(null)
const three = ref<HTMLElement | null>(null)
const showVueApp = ref(true)
const showReactApp = ref(true)
const showViteApp = ref(true)

const { apps } = storeToRefs(useAppStore())
const { user } = storeToRefs(useUserStore())

const vueAppInfo = computed(() => {
  const app = apps.value.find((item) => item.name === 'vue2App')!
  return {
    ...app,
    name: app.name + 'Coexist'
  }
})
const reactAppInfo = computed(() => {
  const app = apps.value.find((item) => item.name === 'reactApp')!
  return {
    ...app,
    name: app.name + 'Coexist'
  }
})
const viteAppInfo = computed(() => {
  const app = apps.value.find((item) => item.name === 'viteApp')!
  return {
    ...app,
    name: app.name + 'Coexist'
  }
})

function toggleShowVueApp() {
  showVueApp.value = !showVueApp.value
}

function toggleShowReactApp() {
  showReactApp.value = !showReactApp.value
}

function toggleShowViteApp() {
  showViteApp.value = !showViteApp.value
}

let vueApp: interfaces.App | null = null
let reactApp: interfaces.App | null = null
let viteApp: interfaces.App | null = null

onMounted(async () => {
  ;[vueApp, reactApp, viteApp] = await Promise.all([
    Garfish.loadApp(vueAppInfo.value.name, {
      domGetter: () => one.value!,
      entry: vueAppInfo.value.entry,
      basename: '/coexist-micro-app',
      props: {
        path: '/communication-test'
      }
    }),
    Garfish.loadApp(reactAppInfo.value.name, {
      domGetter: () => two.value!,
      entry: reactAppInfo.value.entry,
      basename: '/coexist-micro-app',
      props: {
        path: '/communication-test'
      }
    }),
    Garfish.loadApp(viteAppInfo.value.name, {
      domGetter: () => three.value!,
      entry: viteAppInfo.value.entry,
      basename: '/coexist-micro-app',
      sandbox: false,
      props: {
        path: '/communication-test'
      }
    })
  ])
  await await Promise.all([
    vueApp?.mount(),
    reactApp?.mount(),
    viteApp?.mount(),
  ])
  window.Garfish.channel.emit('userInfo', toRaw(user.value))
})

watchPostEffect(() => {
  if (showVueApp.value) {
    vueApp && !vueApp.mounted && vueApp.mount()
  } else {
    vueApp && vueApp.mounted && vueApp.unmount()
  }
  if (showReactApp.value) {
    reactApp && !reactApp.mounted && reactApp.mount()
  } else {
    reactApp && reactApp.mounted && reactApp.unmount()
  }
  if (showViteApp.value) {
    viteApp && !viteApp.mounted && viteApp.mount()
  } else {
    viteApp && viteApp.mounted && viteApp.unmount()
  }
})

onBeforeUnmount(() => {
  vueApp && vueApp.mounted && vueApp.unmount()
  reactApp && reactApp.mounted && reactApp.unmount()
})
</script>

<style lang="less" scoped>
.box {
  width: 100%;
}

#app-one,
#app-two {
  margin-top: 20px;
}
</style>
