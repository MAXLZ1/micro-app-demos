import { notification } from 'ant-design-vue'
import 'ant-design-vue/es/notification/style/css'
export const RECEIVE_MESSAGE = 'receiveMessage'

export enum Types {
  success = 'success',
  warn = 'warn',
  error = 'error',
  info = 'info',
}

export interface Message {
  info: string
  type: Types
  from: string
}

// 监听receiveMessage
// 子应用触发type=receiveMessage的CustomEvent
export function listenReceiveMessage() {
  window.addEventListener('receiveMessage', function(e) {
    const { type, info, from } = (e as CustomEvent<Message>).detail
    notification[type]({
      message: `来自【${from}】的消息`,
      description: info,
    })
  })
}

function createReceiveMessageEvent(message: Omit<Message, 'from'>) {
  return new CustomEvent(RECEIVE_MESSAGE, {
    detail: {
      ...message,
      from: '主应用'
    },
  })
}

export function dispatchReceiveMessageEvent(message: Omit<Message, 'from'>) {
  const event = createReceiveMessageEvent(message)
  window.dispatchEvent(event)
}
