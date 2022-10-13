<template>
  <a-typography-title>主应用内控制跳转</a-typography-title>
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
</template>

<script lang="ts">
export default {
  name: 'NavigateView'
}
</script>

<script lang="ts" setup></script>

<style lang="less" scoped>
h1 {
  font-size: 2em;
}
</style>
