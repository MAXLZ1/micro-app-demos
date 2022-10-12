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

export type CustomEventData<T> = {
  data: {
    type: EventTypes
    data: T
  }
}
