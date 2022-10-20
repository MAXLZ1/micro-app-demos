<template>
  <a-space direction="vertical" :size="40" class="box">
    <a-alert message="左侧应用为Vue2子应用，右侧应用为React18子应用。" type="success" />
    <a-row :gutter="20">
      <a-col :span="12">
        <a-button type="primary" danger>卸载Vue2应用</a-button>
        <a-button type="primary">加载Vue2应用</a-button>
        <div id="app-one"></div>
      </a-col>
      <a-col :span="12">
        <a-button type="primary" danger>卸载React18应用</a-button>
        <a-button type="primary">加载React18应用</a-button>
        <div id="app-two"></div>
      </a-col>
    </a-row>
  </a-space>
</template>

<script lang="ts">
export default {
  name: 'CoexistMicroApp'
}
</script>

<script lang="ts" setup></script>

<style lang="less" scoped>
.box {
  width: 100%;
}

#app-one,
#app-two {
  margin-top: 20px;
}
</style>
