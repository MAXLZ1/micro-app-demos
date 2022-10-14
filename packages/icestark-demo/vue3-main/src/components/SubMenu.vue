<template>
  <a-sub-menu :key="menuInfo.key">
    <template #icon>
      <thunderbolt-outlined />
    </template>
    <template #title>{{ menuInfo.name }}</template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="item.children">
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
      <template v-else>
        <a-menu-item :key="item.key">
          {{ item.name }}
          <template #icon>
            <thunderbolt-outlined />
          </template>
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
import { ThunderboltOutlined } from '@ant-design/icons-vue'
import type { PropType } from 'vue'
import type { Menu } from '@/data/menuData'

defineProps({
  menuInfo: {
    type: Object as PropType<Menu>,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped></style>
