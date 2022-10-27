import { useAppStore } from '@/stores/app'
import Garfish from 'garfish'

export default function preloadApp() {
  const { apps } = useAppStore()

  apps.forEach((item) => {
    Garfish.registerApp({
      name: item.name,
      entry: item.entry
    })
    Garfish.preloadApp(item.name)
  })
}