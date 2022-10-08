<template>
  <div v-if="user">
    <a-descriptions title="来自主应用的数据 User Store Info" bordered>
      <a-descriptions-item label="UserName">{{ user.name }}</a-descriptions-item>
      <a-descriptions-item label="Age">{{ user.age }}</a-descriptions-item>
      <a-descriptions-item label="Gender">{{ user.gender }}</a-descriptions-item>
      <a-descriptions-item label="Telephone">{{ user.phone }}</a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script lang="ts">
import { Descriptions } from 'ant-design-vue'
import { useUserStore } from '@/stores/user'
import { mapState } from 'pinia'

export default {
  name: 'UserInfo',
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  components: {
    [Descriptions.name]: Descriptions,
    [Descriptions.Item.name]: Descriptions.Item,
  },
}
</script>

<style scoped lang="less"></style>
