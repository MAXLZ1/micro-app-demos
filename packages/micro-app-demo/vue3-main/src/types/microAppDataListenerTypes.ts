export enum EventTypes {
  message = 'message'
}

export enum MessageTypes {
  success = 'success',
  warn = 'warn',
  error = 'error',
  info = 'info'
}

export interface MessageData {
  info: string
  type: MessageTypes
  from: string
}

export interface DataListenerParam<T> {
  type: EventTypes
  data: T
}
