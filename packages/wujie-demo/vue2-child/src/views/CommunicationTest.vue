<template>
  <a-space direction="vertical" class="box" :size="40">
    <a-divider class="title">
      <h1>Vue2子应用页面</h1>
    </a-divider>
    <user-info></user-info>
    <a-divider class="title">
      <h2>Vue2子应用向主应用通信</h2>
    </a-divider>
    <message-trigger />
    <a-divider class="title">
      <h2>Vue2子应用Counter</h2>
    </a-divider>
    <counter />
  </a-space>
</template>

<script lang="ts">
import { Divider, Space } from 'ant-design-vue'
import UserInfo from '@/components/UserInfo.vue'
import Counter from '@/components/Counter.vue'
import MessageTrigger from '@/components/MessageTrigger.vue'

export default {
  name: 'User',
  components: {
    MessageTrigger,
    Counter,
    UserInfo,
    [Divider.name]: Divider,
    [Space.name]: Space,
  },
}
</script>

<style scoped lang="less">
.box {
  width: 100%;
}

h1 {
  font-size: 2em;
  margin-bottom: 0;
}

h2 {
  margin-bottom: 0;
}
</style>
