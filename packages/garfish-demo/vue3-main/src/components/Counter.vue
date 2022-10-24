<template>
  <a-space :size="40" direction="vertical" class="box">
    <a-row type="flex" justify="center" align="middle" :gutter="20">
      <a-col>
        <label>step:</label>
      </a-col>
      <a-col>
        <a-input-number v-model:value="step" size="large" />
      </a-col>
    </a-row>
    <a-row type="flex" justify="center" align="middle" :gutter="40">
      <a-col>
        <a-button type="primary" size="large" @click="() => increment(step)">+</a-button>
      </a-col>
      <a-col>
        <h1 class="number">{{ value }}</h1>
      </a-col>
      <a-col>
        <a-button type="danger" size="large" @click="() => decrement(step)">-</a-button>
      </a-col>
    </a-row>
  </a-space>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const step = ref(1)
const user = useCounterStore()
const { increment, decrement } = user
const { value } = storeToRefs(user)
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

}
</style>
