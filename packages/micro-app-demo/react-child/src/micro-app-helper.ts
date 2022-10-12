declare global {
  interface Window extends Record<string, any> {
    microApp: any
    mount: any
    unmount: any
    __MICRO_APP_ENVIRONMENT__: boolean
    __MICRO_APP_PUBLIC_PATH__: string
    __MICRO_APP_BASE_ROUTE__: string
    __MICRO_APP_NAME__: string
  }
}

export {}
