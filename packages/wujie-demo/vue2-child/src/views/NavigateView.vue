<template>
  <div>
    <h1>Vue2子应用内控制跳转</h1>
    <a-space :size="20">
      <a-button type="primary" v-for="item in urls" :key="item.path" @click="handleClick(item.path)">
        {{ item.label }}
      </a-button>
    </a-space>
  </div>
</template>

<script lang="ts">
import { Space, Button } from 'ant-design-vue'

let router: any | undefined

if (window.$wujie) {
  router = window.$wujie.props.router
}

export default {
  name: 'NavigateView',
  data() {
    return {
      urls: [
        {
          label: '跳转至主应用 page1',
          path: '/main/communication-test',
        },
        {
          label: '跳转至Vue2子应用',
          path: '/vue2App/communication-test',
        },
        {
          label: '跳转至React18子应用',
          path: '/reactApp/communication-test',
        },
        {
          label: '跳转至Vite子应用',
          path: '/viteApp/communication-test',
        },
      ],
    }
  },
  methods: {
    handleClick(path: string) {
      router?.push(path)
    },
  },
  components: {
    [Space.name]: Space,
    [Button.name]: Button,
  },
}
</script>

<style lang="less" scoped>
h1 {
  font-size: 2em;
}
</style>
