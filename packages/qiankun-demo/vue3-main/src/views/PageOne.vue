<template>
  <a-space direction="vertical" class="box" :size="40">
    <a-divider>
      <h1>主应用页面</h1>
    </a-divider>
    <user-info />
    <a-divider>
      <h2>主应用消息</h2>
    </a-divider>
    <message-trigger />
    <a-divider>
      <h2>主应用Counter</h2>
    </a-divider>
    <counter />
  </a-space>
</template>

<script lang="ts">
export default {
  name: 'User',
}
</script>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'

const user = useUserStore()
</script>

<style lang="less" scoped>
.box {
  width: 100%;

  h1 {
    font-size: 2em;
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 0;
  }
}
</style>
