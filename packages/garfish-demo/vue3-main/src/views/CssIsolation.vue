<template>
  <a-row>
    <a-col>
      <a-typography-title>主应用(style scope)</a-typography-title>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12" class="first-col">class="first-col"<br />background-color: red;<br />font-size: 50px;</a-col>
    <a-col :span="12" class="second-col">class="second-col"<br />background-color: green;<br />font-size: 50px;</a-col>
  </a-row>
  <div ref="one"></div>
  <div ref="two"></div>
  <div ref="three"></div>
</template>

<script lang="ts">
export default {
  name: 'CssIsolation'
}
</script>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import Garfish, { type interfaces } from 'garfish'

const one = ref<HTMLElement | null>(null)
const two = ref<HTMLElement | null>(null)
const three = ref<HTMLElement | null>(null)

const { apps } = storeToRefs(useAppStore())

const vueAppInfo = computed(() => {
  const app = apps.value.find((item) => item.name === 'vue2App')!
  return {
    ...app,
    name: app.name + 'CssIsolation'
  }
})
const reactAppInfo = computed(() => {
  const app = apps.value.find((item) => item.name === 'reactApp')!
  return {
    ...app,
    name: app.name + 'CssIsolation'
  }
})
const viteAppInfo = computed(() => {
  const app = apps.value.find((item) => item.name === 'viteApp')!
  return {
    ...app,
    name: app.name + 'CssIsolation'
  }
})

let vueApp: interfaces.App | null = null
let reactApp: interfaces.App | null = null
let viteApp: interfaces.App | null = null

onMounted(async () => {
  ;[vueApp, reactApp, viteApp] = await Promise.all([
    Garfish.loadApp(vueAppInfo.value.name, {
      domGetter: () => one.value!,
      entry: vueAppInfo.value.entry,
      basename: '/css-isolation',
      props: {
        path: '/css-isolation'
      }
    }),
    Garfish.loadApp(reactAppInfo.value.name, {
      domGetter: () => two.value!,
      entry: reactAppInfo.value.entry,
      basename: '/css-isolation',
      props: {
        path: '/css-isolation'
      }
    }),
    Garfish.loadApp(viteAppInfo.value.name, {
      domGetter: () => three.value!,
      entry: viteAppInfo.value.entry,
      basename: '/css-isolation',
      sandbox: false,
      props: {
        path: '/css-isolation'
      }
    })
  ])
  vueApp?.mount()
  reactApp?.mount()
  viteApp?.mount()
})

onBeforeUnmount(() => {
  vueApp?.unmount()
  reactApp?.unmount()
  viteApp?.unmount()
})
</script>

<style lang="less" scoped>
.first-col {
  color: #ffffff;
  background-color: red;
  font-size: 50px;
}

.second-col {
  color: #ffffff;
  background-color: green;
  font-size: 50px;
}
</style>
