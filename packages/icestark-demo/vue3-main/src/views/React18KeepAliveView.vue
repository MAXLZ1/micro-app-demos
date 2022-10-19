<template>
  <div ref="container"></div>
</template>

<script lang="ts">
export default {
  name: 'React18KeepAliveView'
}
</script>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { mountModule, unmoutModule } from '@ice/stark-module/lib/modules'
import { reactPublicPath } from '@/data/appData'

const container = ref<HTMLElement | null>(null)

const moduleInfo = {
  name: 'react18AppKeepAlive',
  url: [`${reactPublicPath}/static/js/tabView.bundle.js`]
}

if (import.meta.env.MODE === 'production') {
  moduleInfo.url.push(`${reactPublicPath}/static/css/tabView.css`)
}

onMounted(() => {
  mountModule(moduleInfo, container.value!)
})

onBeforeUnmount(() => {
  unmoutModule(moduleInfo, container.value!)
})
</script>

<style lang="less" scoped></style>
