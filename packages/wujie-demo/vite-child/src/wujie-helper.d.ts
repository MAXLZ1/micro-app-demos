import type { User } from '@/stores/user'

declare global {
  interface Window {
    $wujie: {
      bus: {
        $on: any
        $emit: any
        $off: any
      }
      props: {
        router: any
      }
    }
    __POWERED_BY_WUJIE__: boolean
    __WUJIE_MOUNT: any
    __WUJIE_UNMOUNT: any
    __WUJIE: any
  }
}

export {}
