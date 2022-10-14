import { useAppStore } from '@/stores/app'
import microApp from '@micro-zoe/micro-app'
import type {
  DataListenerParam,
  MessageData
} from '@/types/microAppDataListenerTypes'
import { notification } from 'ant-design-vue'
import 'ant-design-vue/es/notification/style/css'

export function addMiroAppDataListener() {
  const { apps } = useAppStore()

  const listener = (e: DataListenerParam<MessageData>) => {
    const { type, data } = e
    if (type === 'message') {
      const { info, type, from } = data
      notification[type]({
        message: `来自【${from}】的消息`,
        description: info
      })
    }
  }

  apps.forEach((item) => {
    microApp.addDataListener(item.name, listener)
    microApp.addDataListener(item.name + 'KeepAlive', listener)
  })
}
