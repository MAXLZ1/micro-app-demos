<template>
  <micro-app
    :name="vueApp.name"
    :url="vueApp.url"
    :baseroute="vueApp.baseroute"
    :data="microAppData"
    keep-alive
  />
</template>

<script lang="ts">
export default {
  name: 'Vue2KeepAliveView'
}
</script>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { computed } from 'vue'

const { apps } = useAppStore()

const vueApp = computed(() => {
  const app = apps.find(item => item.name === 'vue2App')!
  return {
    ...app,
    // 保证name唯一
    name: app.name + 'KeepAlive'
  }
})

const microAppData = computed(() => ({
  path: '/vue2App/tab-view',
  abstract: true
}))
</script>

<style lang="less" scoped></style>
