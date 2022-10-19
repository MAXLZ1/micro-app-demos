<template>
  <a-space direction="vertical" :size="40" class="box">
    <a-alert
      message="左侧应用为Vue2子应用，右侧应用为React18子应用。"
      type="success"
    />
    <a-row :gutter="20">
      <a-col :span="12">
        <a-button
          v-if="app1"
          type="primary"
          danger
          @click="() => handleClick('vue2')"
          >卸载Vue2应用</a-button
        >
        <a-button v-else type="primary" @click="() => mountApp('vue2')"
          >加载Vue2应用</a-button
        >
        <div id="app-one"></div>
      </a-col>
      <a-col :span="12">
        <a-button
          v-if="app2"
          type="primary"
          danger
          @click="() => handleClick('react18')"
          >卸载React18应用</a-button
        >
        <a-button v-else type="primary" @click="() => mountApp('react18')"
          >加载React18应用</a-button
        >
        <div id="app-two"></div>
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
import { onBeforeUnmount, onMounted, toRaw, ref } from 'vue'
import { loadMicroApp } from 'qiankun'
import { useUserStore } from '@/stores/user'
import { dispatchUserEvent } from '@/utils/dispatchUserEvent'
import type { MicroApp } from 'qiankun'
import type { Ref } from 'vue'
import { reactAppEntry, vue2AppEntry } from '@/data/appData'

const { user } = useUserStore()

let app1 = ref<MicroApp | null>(null)
let app2 = ref<MicroApp | null>(null)

onMounted(() => {
  mountApp('vue2')
  mountApp('react18')
})

function mountApp(name: string) {
  if (name === 'vue2') {
    app1.value = loadMicroApp(
      {
        name: 'vue2App',
        entry: vue2AppEntry,
        container: '#app-one',
        props: {
          path: '/communication-test'
        }
      },
      {
        sandbox: {
          experimentalStyleIsolation: true
        },
        singular: false
      }
    )
    app1.value.mountPromise.then(() => {
      dispatchUserEvent(toRaw(user))
    })
  } else if (name === 'react18') {
    app2.value = loadMicroApp(
      {
        name: 'reactApp',
        entry: reactAppEntry,
        container: '#app-two',
        props: {
          path: '/reactApp/communication-test'
        }
      },
      {
        sandbox: {
          experimentalStyleIsolation: true
        },
        singular: false
      }
    )
    app2.value.mountPromise.then(() => {
      dispatchUserEvent(toRaw(user))
    })
  }
}

async function handleClick(name: string) {
  await unmountApp(name === 'vue2' ? app1 : app2)
}

async function unmountApp(app: Ref<MicroApp | null>) {
  if (app.value && app.value.getStatus() === 'MOUNTED') {
    await app.value.unmount()
  }
  app.value = null
}

onBeforeUnmount(async () => {
  await Promise.all([unmountApp(app1), unmountApp(app2)])
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
