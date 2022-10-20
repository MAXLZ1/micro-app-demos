import { ref } from 'vue'

export let microAppLoading = ref(false)

export function setMicroAppLoading(loading: boolean) {
  microAppLoading.value = loading
}
