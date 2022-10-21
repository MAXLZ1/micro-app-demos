import { notification } from 'ant-design-vue'
import 'ant-design-vue/es/notification/style/css'
export const RECEIVE_MESSAGE = 'receiveMessage'
import WujieVue from 'wujie-vue3'

const { bus } = WujieVue

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

export function listenReceiveMessage() {
  bus.$on('message', function (message: Message) {
    const { type, info, from } = message
    notification[type]({
      message: `来自【${from}】的消息`,
      description: info
    })
  })
}

export function dispatchReceiveMessageEvent(message: Omit<Message, 'from'>) {
  bus.$emit('message', {
    ...message,
    from: '主应用'
  })
}
