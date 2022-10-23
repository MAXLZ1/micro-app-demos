<template>
  <div ref="container"></div>
</template>

<script lang="ts">
export default {
  name: 'ViteKeepAliveView'
}
</script>

<script lang="ts" setup>
import { loadMicroApp, type MicroApp } from 'qiankun'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { viteAppEntry } from '@/data/appData'

const container = ref<HTMLElement | null>(null)

let app: MicroApp | null = null

onMounted(() => {
  app = loadMicroApp({
    name: 'viteAppKeepAlive',
    entry: viteAppEntry,
    container: container.value!,
    props: {
      path: '/viteApp/tab-view'
    }
  })
})

onBeforeUnmount(async () => {
  if (app && app.getStatus() === 'MOUNTED') {
    await app.unmount()
  }
  app = null
})
</script>

<style lang="less" scoped></style>
