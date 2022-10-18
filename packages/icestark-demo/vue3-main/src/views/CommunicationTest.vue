<template>
  <a-space direction="vertical" class="box" :size="40">
    <a-divider>
      <a-typography-title>主应用页面</a-typography-title>
    </a-divider>
    <user-info />
    <a-divider>
      <a-typography-title :level="2">主应用消息</a-typography-title>
    </a-divider>
    <message-trigger />
    <a-divider>
      <a-typography-title :level="2">主应用Counter</a-typography-title>
    </a-divider>
    <counter />
  </a-space>
</template>

<script lang="ts">
export default {
  name: 'CommunicationTest'
}
</script>

<script lang="ts" setup></script>

<style lang="less" scoped>
.box {
  width: 100%;
}
</style>
