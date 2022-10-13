<template>
  <div>
    <h1>Vue2子应用内控制跳转</h1>
    <a-space :size="20">
      <a-button type="primary" v-for="item in buttons" :key="item.url" @click="navigate(item.url)">
        {{ item.label }}
      </a-button>
    </a-space>
  </div>
</template>

<script lang="ts">
import { Space, Button } from 'ant-design-vue'

export default {
  name: 'NavigateView',
  data() {
    return {
      mainAppRouter: null,
      buttons: [
        {
          label: '跳转至主应用 page1',
          url: '/main/communication-test'
        },
        {
          label: '跳转至Vue2子应用',
          url: '/vue2App/communication-test'
        },
        {
          label: '跳转至React18子应用',
          url: '/reactApp/communication-test'
        },
        {
          label: '跳转至Vite子应用',
          url: '/viteApp/communication-test'
        }
      ]
    }
  },
  created() {
    // 获取主应用下发的路由对象
    this.mainAppRouter = window?.microApp.getData()?.router
  },
  methods: {
    navigate(url) {
      this.mainAppRouter?.push(url)
    }
  },
  components: {
    [Space.name]: Space,
    [Button.name]: Button
  }
}
</script>

<style lang="less" scoped>
h1 {
  font-size: 2em;
}
</style>
