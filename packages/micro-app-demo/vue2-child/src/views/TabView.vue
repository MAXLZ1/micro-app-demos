<template>
  <a-tabs default-active-key="1">
    <a-tab-pane key="1" tab="Tab 1"> Content of Tab Pane 1 </a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2">
      <a-input />
    </a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3"> Content of Tab Pane 3 </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { Tabs, Input } from 'ant-design-vue'

export default {
  name: 'TabView',
  data() {
    return {}
  },
  components: {
    [Input.name]: Input,
    [Tabs.name]: Tabs,
    [Tabs.TabPane.name]: Tabs.TabPane
  }
}
</script>
