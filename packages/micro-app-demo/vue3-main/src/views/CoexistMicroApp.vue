<template>
  <a-space direction="vertical" :size="40" class="box">
    <a-alert
      message="左侧应用为Vue2子应用，右侧应用为React18子应用。"
      type="success"
    />
    <a-row :gutter="20">
      <a-col :span="12">
        <a-button v-if="showVueApp" type="primary" danger @click="toggleVueAppShow">
          卸载Vue2应用
        </a-button>
        <a-button v-else type="primary" @click="toggleVueAppShow">加载Vue2应用</a-button>
        <micro-app
          v-if="showVueApp"
          :name="vueApp.name"
          :url="vueApp.url"
          :baseroute="vueApp.baseroute"
          :data="vueData"
          destroy
        />
      </a-col>
      <a-col :span="12">
        <a-button v-if="showReactApp" type="primary" danger @click="toggleReactAppShow">
          卸载React18应用
        </a-button>
        <a-button v-else type="primary" @click="toggleReactAppShow">加载React18应用</a-button>
        <micro-app
          v-if="showReactApp"
          :name="reactApp.name"
          :url="reactApp.url"
          :baseroute="reactApp.baseroute"
          :data="reactData"
          destroy
        />
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
import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { computed, ref, toRaw } from 'vue'

const { apps } = storeToRefs(useAppStore())
const { user } = storeToRefs(useUserStore())

const showVueApp = ref(true)
const showReactApp = ref(true)

const vueApp = computed(
  () => apps.value.find((item) => item.name === 'vue2App')!
)
const reactApp = computed(
  () => apps.value.find((item) => item.name === 'reactApp')!
)

const vueData = computed(() => ({
  user: toRaw(user.value),
  path: '/vue2App/communication-test',
  abstract: true // 共存模式
}))
const reactData = computed(() => ({
  user: toRaw(user.value),
  path: '/reactApp/communication-test',
  abstract: true // 共存模式
}))

function toggleVueAppShow() {
  showVueApp.value = !showVueApp.value
}

function toggleReactAppShow() {
  showReactApp.value = !showReactApp.value
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
}
</style>
