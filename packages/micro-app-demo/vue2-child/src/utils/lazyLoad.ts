import { Spin } from 'ant-design-vue'

export default function lazyLoad(AsyncView: Promise<any>) {
  const AsyncComponent = () => ({
    component: AsyncView,
    loading: {
      render(h: any) {
        return h(
          'div',
          {
            style: {
              width: '100%',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }
          },
          [h(Spin)]
        )
      }
    },
    error: {
      render(h: any) {
        return h('div', '组件加载失败!')
      }
    },
    delay: 1,
    timeout: 10000
  })

  return Promise.resolve({
    functional: true,
    render(h: any, { data, children }: any) {
      return h(AsyncComponent, data, children)
    }
  })
}
