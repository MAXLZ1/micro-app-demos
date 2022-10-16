import { ref } from 'vue'

export const microAppLoading = ref(false)

export function setMicroAppLoading(loading: boolean) {
  microAppLoading.value = loading
}
