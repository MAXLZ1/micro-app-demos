<template>
  <a-sub-menu :key="menuInfo.meta.key">
    <template #title>{{ menuInfo.name }}</template>
    <template v-for="item in menuInfo.children" :key="item.meta.key">
      <template v-if="item.children">
        <sub-menu :menu-info="item" :key="item.meta.key" />
      </template>
      <template v-else>
        <a-menu-item :key="item.meta.key">
          {{ item.name }}
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
export default {
  name: 'SubMenu',
}
</script>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { MenuItem } from '@/stores/menu'

defineProps({
  menuInfo: {
    type: Object as PropType<MenuItem>,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped></style>
