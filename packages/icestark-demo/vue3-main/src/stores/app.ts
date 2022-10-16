import { defineStore } from 'pinia'
import { apps as microApps } from '@/data/appData'
import { reactive } from 'vue'
import type { AppConfig } from '@ice/stark/lib/apps'

export const useAppStore = defineStore('appStore', () => {
  const apps = reactive<AppConfig[]>(microApps)
  return { apps }
})
