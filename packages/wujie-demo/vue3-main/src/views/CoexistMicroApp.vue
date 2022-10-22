<template>
  <a-space direction="vertical" :size="40" class="box">
    <a-alert
      message="左上侧应用为Vue2子应用，右上侧应用为React18子应用，左下侧为vite子应用。"
      type="success"
    />
    <a-row :gutter="20">
      <a-col :span="12">
        <a-button
          v-if="showVue2App"
          type="primary"
          danger
          @click="toggleVue2AppShow"
        >
          卸载Vue2应用
        </a-button>
        <a-button v-else type="primary" @click="toggleVue2AppShow">
          加载Vue2应用
        </a-button>
        <wujie-vue
          v-if="showVue2App && vue2App"
          class="app"
          :name="vue2App.name"
          :url="vue2App.url"
          :afterMount="afterMount"
        />
      </a-col>
      <a-col :span="12">
        <a-button
          v-if="showReactApp"
          type="primary"
          danger
          @click="toggleReactAppShow"
        >
          卸载React18应用
        </a-button>
        <a-button v-else type="primary" @click="toggleReactAppShow">
          加载React18应用
        </a-button>
        <wujie-vue
          v-if="showReactApp && reactApp"
          class="app"
          :name="reactApp.name"
          :url="reactApp.url"
          :afterMount="afterMount"
        />
      </a-col>
      <a-col :span="12">
        <a-button
          v-if="showReactApp"
          type="primary"
          danger
          @click="toggleViteAppShow"
        >
          卸载Vite应用
        </a-button>
        <a-button v-else type="primary" @click="toggleViteAppShow">
          加载Vite应用
        </a-button>
        <wujie-vue
          v-if="showViteApp && viteApp"
          class="app"
          :name="viteApp.name"
          :url="viteApp.url"
          :afterMount="afterMount"
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
import { storeToRefs } from 'pinia'
import WujieVue from 'wujie-vue3'
import { ref, toRaw, watch } from 'vue'
import type { MicroApp } from '@/data/appData'
import { useUserStore } from '@/stores/user'

const vue2App = ref<MicroApp | null>(null)
const reactApp = ref<MicroApp | null>(null)
const viteApp = ref<MicroApp | null>(null)
const showVue2App = ref(true)
const showReactApp = ref(true)
const showViteApp = ref(true)

const { apps } = storeToRefs(useAppStore())
const { user } = storeToRefs(useUserStore())

watch(
  apps.value,
  (newApp) => {
    newApp.forEach((item) => {
      if (item.name === 'vue2App') {
        vue2App.value = {
          ...item,
          name: item.name + 'Coexist',
          url: `${item.url}#/vue2App/communication-test`
        }
      } else if (item.name === 'reactApp') {
        reactApp.value = {
          ...item,
          name: item.name + 'Coexist',
          url: `${item.url}#/reactApp/communication-test`
        }
      } else if (item.name === 'viteApp') {
        viteApp.value = {
          ...item,
          name: item.name + 'Coexist',
          url: `${item.url}#/viteApp/communication-test`
        }
      }
    })
  },
  {
    immediate: true
  }
)

const { bus } = WujieVue

function afterMount() {
  bus.$emit('changeUser', {
    user: toRaw(user.value)
  })
}

function toggleVue2AppShow() {
  showVue2App.value = !showVue2App.value
}

function toggleReactAppShow() {
  showReactApp.value = !showReactApp.value
}

function toggleViteAppShow() {
  showViteApp.value = !showViteApp.value
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
}

.app {
  margin-top: 20px;
}
</style>
