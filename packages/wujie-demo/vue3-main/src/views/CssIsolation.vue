<template>
  <a-row>
    <a-col>
      <a-typography-title>主应用(style scope)</a-typography-title>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12" class="first-col">class="first-col"<br />background-color: red;<br />font-size: 50px;</a-col>
    <a-col :span="12" class="second-col">class="second-col"<br />background-color: green;<br />font-size: 50px;</a-col>
  </a-row>
</template>

<script lang="ts">
export default {
  name: 'CssIsolation'
}
</script>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.first-col {
  color: #ffffff;
  background-color: red;
  font-size: 50px;
}

.second-col {
  color: #ffffff;
  background-color: green;
  font-size: 50px;
}
</style>
