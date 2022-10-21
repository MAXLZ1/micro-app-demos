import { defineStore } from 'pinia'
import { apps as microApps } from '@/data/appData'
import { computed, reactive } from 'vue'
import type { MicroApp } from '@/data/appData'

export const useAppStore = defineStore('appStore', () => {
  const apps = reactive<MicroApp[]>(microApps)
  const paths = computed(() => apps.map(item => item.activeRule))
  return { apps, paths }
})
