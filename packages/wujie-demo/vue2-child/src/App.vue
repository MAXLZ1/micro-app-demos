<template>
  <a-config-provider prefixCls="av2">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </a-config-provider>
</template>

<script lang="ts">
import { ConfigProvider } from 'ant-design-vue'

export default {
  components: {
    [ConfigProvider.name]: ConfigProvider,
  },
}
</script>
<style></style>
