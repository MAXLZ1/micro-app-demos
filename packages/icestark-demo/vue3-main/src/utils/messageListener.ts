import { notification } from 'ant-design-vue'
import 'ant-design-vue/es/notification/style/css'
import event from '@ice/stark-data/lib/event'

export enum Types {
  success = 'success',
  warn = 'warn',
  error = 'error',
  info = 'info'
}

export interface Message {
  info: string
  type: Types
  from: string
}

// 监听receiveMessage
// 子应用触发type=receiveMessage的CustomEvent
export function listenReceiveMessage() {
  event.on('message', function (msg: Message) {
    const { type, info, from } = msg
    notification[type]({
      message: `来自【${from}】的消息`,
      description: info
    })
  })
}
