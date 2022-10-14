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
  <micro-app
    :name="vueApp.name"
    :url="vueApp.url"
    :baseroute="vueApp.baseroute"
    :data="vueData"
    destroy
  />
  <micro-app
    :name="reactApp.name"
    :url="reactApp.url"
    :baseroute="reactApp.baseroute"
    :data="reactData"
    destroy
  />
</template>

<script lang="ts">
export default {
  name: 'CssIsolation'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const { apps } = storeToRefs(useAppStore())

const vueApp = computed(
  () => apps.value.find((item) => item.name === 'vue2App')!
)
const reactApp = computed(
  () => apps.value.find((item) => item.name === 'reactApp')!
)

const vueData = computed(() => ({
  user: null,
  path: '/vue2App/css-isolation',
  abstract: true // 共存模式
}))
const reactData = computed(() => ({
  user: null,
  path: '/reactApp/css-isolation',
  abstract: true // 共存模式
}))
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
