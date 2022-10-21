import { defineStore } from 'pinia'
import { apps as microApps } from '@/data/appData'
import { computed, reactive } from 'vue'
import type { MicroApp } from '@/data/appData'
import { prefetchApps } from 'qiankun'

export const useAppStore = defineStore('appStore', () => {
  const apps = reactive<MicroApp[]>(microApps)
  // 预加载
  prefetchApps(microApps.map(item => ({
    name: item.name,
    entry: item.entry
  })))
  const paths = computed(() => apps.map(item => item.activeRule))
  return { apps, paths }
})
