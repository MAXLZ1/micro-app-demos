<template>
  <div ref="container"></div>
</template>

<script lang="ts">
export default {
  name: 'Vue2KeepAliveView'
}
</script>

<script lang="ts" setup>
import { loadMicroApp, type MicroApp } from 'qiankun'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { vue2AppEntry } from '@/data/appData'

const container = ref<HTMLElement | null>(null)

let app: MicroApp | null = null

onMounted(() => {
  app = loadMicroApp({
    name: 'vue2AppKeepAlive',
    entry: vue2AppEntry,
    container: container.value!,
    props: {
      path: '/vue2App/tab-view'
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
