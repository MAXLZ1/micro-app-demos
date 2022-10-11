<template>
  <div id="keep-alive"></div>
</template>

<script lang="ts">
export default {
  name: 'KeepAliveView',
}
</script>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { loadMicroApp } from 'qiankun'
import type { MicroApp } from 'qiankun'

const app = ref<MicroApp | null>(null)

onMounted(() => {
  app.value = loadMicroApp({
    name: 'vue2App',
    entry: 'http://localhost:8091',
    container: '#keep-alive',
    props: {
      path: '/tab-view'
    }
  }, {
    sandbox: {
      experimentalStyleIsolation: true
    },
    singular: false
  })
})


onBeforeUnmount(async () => {
  if (app.value && app.value.getStatus() === 'MOUNTED') {
    await app.value.unmount()
  }
  app.value = null
})
</script>

<style lang="less" scoped></style>
