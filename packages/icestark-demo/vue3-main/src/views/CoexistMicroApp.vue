<template>
  <a-space direction="vertical" :size="40" class="box">
    <a-alert
      message="左侧应用为Vue2子应用，右侧应用为React18子应用。"
      type="success"
    />
    <a-row :gutter="20">
      <a-col :span="12">
        <a-button
          v-if="showVueApp"
          type="primary"
          danger
          @click="toggleVueShow"
        >
          卸载Vue2应用
        </a-button>
        <a-button v-else type="primary" @click="toggleVueShow">
          加载Vue2应用
        </a-button>
        <div id="app-one" ref="one"></div>
      </a-col>
      <a-col :span="12">
        <a-button
          v-if="showReactApp"
          type="primary"
          danger
          @click="toggleReactShow"
        >
          卸载React18应用
        </a-button>
        <a-button v-else type="primary" @click="toggleReactShow">
          加载React18应用
        </a-button>
        <div id="app-two" ref="two"></div>
      </a-col>
    </a-row>
  </a-space>
</template>

<script lang="ts">
export default {
  name: 'CoexistMicroApp'
}
</script>

<script lang="ts" setup>
import { mountModule, unmoutModule } from '@ice/stark-module/lib/modules'
import { onBeforeUnmount, ref, watchPostEffect } from 'vue'
import { vue2PublicPath, reactPublicPath } from '@/data/appData'

const one = ref<HTMLElement | null>(null)
const two = ref<HTMLElement | null>(null)
const showVueApp = ref(true)
const showReactApp = ref(true)

function toggleVueShow() {
  showVueApp.value = !showVueApp.value
}

function toggleReactShow() {
  showReactApp.value = !showReactApp.value
}

const moduleInfos = [
  {
    name: 'vueModule',
    url: [`${vue2PublicPath}/js/communicationTest.js`]
  },
  {
    name: 'reactModule',
    url: [`${reactPublicPath}/static/js/communicationTest.bundle.js`]
  }
]

if (import.meta.env.MODE === 'production') {
  moduleInfos[0].url.push(`${vue2PublicPath}/css/communicationTest.css`)
  moduleInfos[1].url.push(`${reactPublicPath}/static/css/communicationTest.css`)
}

watchPostEffect(() => {
  if (showVueApp.value) {
    mountModule(moduleInfos[0], one.value!)
  } else {
    unmoutModule(moduleInfos[0], one.value!)
  }
  if (showReactApp.value) {
    mountModule(moduleInfos[1], two.value!)
  } else {
    unmoutModule(moduleInfos[1], two.value!)
  }
})

onBeforeUnmount(() => {
  if (showVueApp.value) {
    unmoutModule(moduleInfos[0], one.value!)
  }
  if (showReactApp.value) {
    unmoutModule(moduleInfos[1], two.value!)
  }
})
</script>

<style lang="less" scoped>
.box {
  width: 100%;
}

#app-one,
#app-two {
  margin-top: 20px;
}
</style>
