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

function createReceiveMessageEvent(message: Omit<Message, 'from'>) {
  return new CustomEvent(RECEIVE_MESSAGE, {
    detail: {
      ...message,
      from: 'Vite子应用',
    },
  })
}

export function dispatchReceiveMessageEvent(message: Omit<Message, 'from'>) {
  const event = createReceiveMessageEvent(message)
  window.dispatchEvent(event)
}
