<template>
  <div ref="container"></div>
</template>

<script lang="ts">
export default {
  name: 'React18KeepAliveView'
}
</script>

<script lang="ts" setup>
import { loadMicroApp, type MicroApp } from 'qiankun'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { reactAppEntry } from '@/data/appData'

const container = ref<HTMLElement | null>(null)

let app: MicroApp | null = null

onMounted(() => {
  app = loadMicroApp({
    name: 'reactAppKeepAlive',
    entry: reactAppEntry,
    container: container.value!,
    props: {
      path: '/reactApp/tab-view'
    }
  })
})

onBeforeUnmount(async () => {
  console.log(1111)
  if (app && app.getStatus() === 'MOUNTED') {
    await app.unmount()
  }
  app = null
})
</script>

<style lang="less" scoped></style>
