<template>
  <div>
    <h1>Vue2子应用内控制跳转</h1>
    <a-space :size="20">
      <router-link to="/main/communication-test">
        <a-button type="primary">跳转至主应用 page1</a-button>
      </router-link>
      <router-link to="/vue2App/communication-test">
        <a-button type="primary">跳转至Vue2子应用</a-button>
      </router-link>
      <router-link to="/reactApp/communication-test">
        <a-button type="primary">跳转至React18子应用</a-button>
      </router-link>
      <router-link to="/viteApp/communication-test">
        <a-button type="primary">跳转至Vite子应用</a-button>
      </router-link>
    </a-space>
  </div>
</template>

<script lang="ts">
import { Space, Button } from 'ant-design-vue'
import { router } from '@/router'

export default {
  name: 'NavigateView',
  components: {
    [Space.name]: Space,
    [Button.name]: Button,
  },
  // 主应用使用loadMicroApp进行加载子应用时，可能会使用abstract路由
  // 这里强制使用hash router进行跳转
  router,
}
</script>

<style lang="less" scoped>
h1 {
  font-size: 2em;
}
</style>
