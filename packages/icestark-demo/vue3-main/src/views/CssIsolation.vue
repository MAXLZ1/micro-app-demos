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
</template>

<script lang="ts">
export default {
  name: 'CssIsolation'
}
</script>

<script lang="ts" setup>
import { mountModule, unmoutModule } from '@ice/stark-module/lib/modules'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { vue2PublicPath, reactPublicPath } from '@/data/appData'

interface ModuleInfo {
  name: string
  url: string[]
  container?: HTMLElement
}

const one = ref<HTMLElement | null>(null)
const two = ref<HTMLElement | null>(null)

const moduleInfos: ModuleInfo[] = [
  {
    name: 'vueCssIsolation',
    url: [`${vue2PublicPath}/js/cssIsolation.js`]
  },
  {
    name: 'reactCssIsolation',
    url: [`${reactPublicPath}/static/js/cssIsolation.bundle.js`]
  }
]

if (import.meta.env.MODE === 'production') {
  moduleInfos[0].url.push(`${vue2PublicPath}/css/cssIsolation.css`)
  moduleInfos[1].url.push(`${reactPublicPath}/static/css/cssIsolation.css`)
}

onMounted(() => {
  moduleInfos[0].container = one.value!
  moduleInfos[1].container = two.value!
  moduleInfos.forEach((item) =>
    mountModule(
      {
        name: item.name,
        url: item.url
      },
      item.container!
    )
  )
})

onBeforeUnmount(() => {
  moduleInfos.forEach((item) =>
    unmoutModule(
      {
        name: item.name,
        url: item.url
      },
      item.container!
    )
  )
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
