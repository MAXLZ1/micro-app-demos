<template>
  <a-row>
    <a-col>
      <a-typography-title>主应用(style scope)</a-typography-title>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12" class="first-col">class="first-col"<br />background-color: red;<br />font-size: 50px;</a-col>
    <a-col :span="12" class="second-col">class="second-col"<br />background-color: green;<br />font-size: 50px;</a-col>
  </a-row>
  <div id="css-box1"></div>
  <div id="css-box2"></div>
</template>

<script lang="ts">
export default {
  name: 'CssIsolation'
}
</script>

<script lang="ts" setup>
import { loadMicroApp } from 'qiankun'
import { onBeforeUnmount, onMounted } from 'vue'
import type { MicroApp } from 'qiankun'
import { reactAppEntry, vue2AppEntry } from '@/data/appData'

let app1: MicroApp | null = null
let app2: MicroApp | null = null

onMounted(() => {
  app1 = loadMicroApp({
    name: 'vue2App',
    entry: vue2AppEntry,
    container: '#css-box1',
    props: {
      path: '/css-isolation'
    }
  }, {
    sandbox: {
      experimentalStyleIsolation: true
    },
    singular: false
  })
  app2 = loadMicroApp({
    name: 'reactApp',
    entry: reactAppEntry,
    container: '#css-box2',
    props: {
      path: '/reactApp/css-isolation'
    }
  }, {
    sandbox: {
      experimentalStyleIsolation: true
    },
    singular: false
  })
})

async function unmountApp(app: MicroApp | null) {
  if (app && app.getStatus() === 'MOUNTED') {
    await app.unmount()
  }
  app = null
}

onBeforeUnmount(async () => {
  await Promise.all([
    unmountApp(app1),
    unmountApp(app2),
  ])
})
</script>

<style lang="less" scoped>
.first-col {
  color: #ffffff;
  background-color: red;
  font-size: 50px;
}

.second-col {
  color: #ffffff;
  background-color: green;
  font-size: 50px;
}
</style>
