import { defineStore } from 'pinia'
import { apps as microApps } from '@/data/appData'
import { reactive } from 'vue'
import type { MicroApp } from '@/data/appData'

export const useAppStore = defineStore('appStore', () => {
  const apps = reactive<MicroApp[]>(microApps)

  // 获取被激活的应用
  const getActiveMicroApp = function(path: string) {
    return apps.find(item => path.startsWith(item.baseroute))
  }

  return { apps, getActiveMicroApp }
})
