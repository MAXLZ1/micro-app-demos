import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const value = ref(0)

  const increment = (step: number) => {
    value.value += step
  }

  const decrement = (step: number) => {
    value.value -= step
  }

  return { value, decrement, increment }
})
