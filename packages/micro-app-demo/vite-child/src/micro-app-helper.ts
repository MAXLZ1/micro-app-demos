declare global {
  interface Window extends Record<string, any> {
    microApp: any
    eventCenterForViteApp: any
    __MICRO_APP_PUBLIC_PATH__: string
    __MICRO_APP_BASE_APPLICATION__: boolean
  }
}

export {}
