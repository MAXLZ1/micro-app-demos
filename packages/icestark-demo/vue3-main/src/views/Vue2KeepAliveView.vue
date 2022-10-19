<template>
  <div ref="container"></div>
</template>

<script lang="ts">
export default {
  name: 'Vue2KeepAliveView'
}
</script>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { mountModule, unmoutModule } from '@ice/stark-module/lib/modules'
import { vue2PublicPath } from '@/data/appData'

const container = ref<HTMLElement | null>(null)

const moduleInfo = {
  name: 'vue2AppKeepAlive',
  url: [`${vue2PublicPath}/js/tabView.js`]
}

if (import.meta.env.MODE === 'production') {
  moduleInfo.url.push(`${vue2PublicPath}/css/tabView.css`)
}

onMounted(() => {
  mountModule(moduleInfo, container.value!)
})

onBeforeUnmount(() => {
  unmoutModule(moduleInfo, container.value!)
})
</script>

<style lang="less" scoped></style>
