<template>
  <div>
    <a-row>
      <a-col>
        <h2 style="font-size: 38px">Vue2子应用(style scope)</h2>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12" class="first-col">class="first-col"<br />background-color: blue;<br />font-size: 30px;</a-col>
      <a-col :span="12" class="second-col">
        class="second-col"<br />background-color: orange;<br />font-size: 30px;
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Col, Row } from 'ant-design-vue'
export default {
  name: 'CssIsolation',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
  },
}
</script>

<style lang="less" scoped>
.first-col {
  color: #ffffff;
  background-color: blue;
  font-size: 30px;
}

.second-col {
  color: #ffffff;
  background-color: orange;
  font-size: 30px;
}
</style>
