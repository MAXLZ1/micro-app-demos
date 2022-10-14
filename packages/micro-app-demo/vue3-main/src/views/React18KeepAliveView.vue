<template>
  <micro-app
    :name="reactApp.name"
    :url="reactApp.url"
    :baseroute="reactApp.baseroute"
    :data="microAppData"
    keep-alive
  />
</template>

<script lang="ts">
export default {
  name: 'React18KeepAliveView'
}
</script>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { computed } from 'vue'

const { apps } = useAppStore()

const reactApp = computed(() => {
  const app = apps.find(item => item.name === 'reactApp')!
  return {
    ...app,
    // 保证name唯一
    name: app.name + 'KeepAlive'
  }
})

const microAppData = computed(() => ({
  path: '/reactApp/tab-view',
  abstract: true
}))
</script>

<style lang="less" scoped></style>
