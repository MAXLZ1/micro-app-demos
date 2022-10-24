<template>
  <a-tabs default-active-key="1">
    <a-tab-pane key="1" tab="input">
      <a-input />
    </a-tab-pane>
    <a-tab-pane key="2" tab="message trigger">
      <message-trigger />
    </a-tab-pane>
    <a-tab-pane key="3" tab="counter">
      <counter />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { Tabs, Input } from 'ant-design-vue'
import MessageTrigger from '@/components/MessageTrigger'
import Counter from '@/components/Counter'

export default {
  name: 'TabView',
  components: {
    MessageTrigger,
    Counter,
    [Input.name]: Input,
    [Tabs.name]: Tabs,
    [Tabs.TabPane.name]: Tabs.TabPane,
  },
}
</script>
