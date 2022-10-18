<template>
  <micro-app
    :name="viteApp.name"
    :url="viteApp.url"
    :baseroute="viteApp.baseroute"
    :data="microAppData"
    @mounted="mounted"
    inline
    disableSandbox
    keep-alive
  />
</template>

<script lang="ts">
export default {
  name: 'ViteKeepAliveView'
}
</script>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { computed } from 'vue'
import microApp from '@micro-zoe/micro-app'

const { apps } = useAppStore()

const viteApp = computed(() => {
  const app = apps.find(item => item.name === 'viteApp')!
  return {
    ...app,
    // 保证name唯一
    name: app.name + 'KeepAlive'
  }
})

const microAppData = computed(() => ({
  path: '/viteApp/tab-view',
  abstract: true
}))

function mounted() {
  microApp.setData('viteAppKeepAlive', {
    path: '/viteApp/tab-view',
    abstract: true
  })
}
</script>

<style lang="less" scoped></style>
