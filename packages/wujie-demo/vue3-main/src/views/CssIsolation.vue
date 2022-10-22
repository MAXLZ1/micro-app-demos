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
  <wujie-vue
    v-if="vue2App"
    class="app"
    :name="vue2App.name"
    :url="vue2App.url"
  />
  <wujie-vue
    v-if="reactApp"
    class="app"
    :name="reactApp.name"
    :url="reactApp.url"
  />
  <wujie-vue
    v-if="viteApp"
    class="app"
    :name="viteApp.name"
    :url="viteApp.url"
  />
</template>

<script lang="ts">
export default {
  name: 'CssIsolation'
}
</script>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import WujieVue from 'wujie-vue3'
import { watch, ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { MicroApp } from '@/data/appData'

const { apps } = storeToRefs(useAppStore())

const vue2App = ref<MicroApp | null>(null)
const reactApp = ref<MicroApp | null>(null)
const viteApp = ref<MicroApp | null>(null)

watch(
  apps.value,
  (newApp) => {
    newApp.forEach((item) => {
      if (item.name === 'vue2App') {
        vue2App.value = {
          ...item,
          name: item.name + 'CssIsolation',
          url: `${item.url}#/vue2App/css-isolation`
        }
      } else if (item.name === 'reactApp') {
        reactApp.value = {
          ...item,
          name: item.name + 'CssIsolation',
          url: `${item.url}#/reactApp/css-isolation`
        }
      } else if (item.name === 'viteApp') {
        viteApp.value = {
          ...item,
          name: item.name + 'CssIsolation',
          url: `${item.url}#/viteApp/css-isolation`
        }
      }
    })
  },
  {
    immediate: true
  }
)
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

.app {
  margin-top: 20px;
}
</style>
