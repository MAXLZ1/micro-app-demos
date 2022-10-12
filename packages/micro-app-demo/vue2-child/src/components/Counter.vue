<template>
  <a-space :size="40" direction="vertical" class="box">
    <a-row type="flex" justify="center" align="middle" :gutter="20">
      <a-col>
        <label>step:</label>
      </a-col>
      <a-col>
        <a-input-number v-model="step" size="large" />
      </a-col>
    </a-row>
    <a-row type="flex" justify="center" align="middle" :gutter="40">
      <a-col>
        <a-button class="btn" type="primary" size="large" @click="() => increment(step)">+</a-button>
      </a-col>
      <a-col>
        <h1 class="number">{{ value }}</h1>
      </a-col>
      <a-col>
        <a-button class="btn" type="danger" size="large" @click="() => decrement(step)">-</a-button>
      </a-col>
    </a-row>
  </a-space>
</template>

<script lang="ts">
import { Button, Row, Col, InputNumber, Space } from 'ant-design-vue'
import { useCounterStore } from '@/stores/counter'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'Counter',
  data() {
    return {
      step: 1
    }
  },
  computed: {
    ...mapState(useCounterStore, ['value'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement'])
  },
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [InputNumber.name]: InputNumber,
    [Space.name]: Space
  }
}
</script>

<style scoped lang="less">
.box {
  width: 100%;

  label {
    font-size: 20px;
  }

  .number {
    font-weight: normal;
    font-size: 50px;
    margin: 0;
  }

  .btn {
    font-size: 20px;
  }
}
</style>
