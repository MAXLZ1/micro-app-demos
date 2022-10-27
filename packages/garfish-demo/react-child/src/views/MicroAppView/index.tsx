import { useAppSelector } from '@/stores/storeHooks'
import { Alert, Cascader, Form, Space } from 'antd'
import Garfish, {  type interfaces } from 'garfish'
import { useEffect, useRef, useState } from 'react'

export const vue2AppEntry = process.env.REACT_APP_VUE2_CHILD_PUBLIC_PATH
export const viteAppEntry = process.env.REACT_APP_VITE_CHILD_PUBLIC_PATH

const apps: Record<string, any> = {
  vue2App: {
    name: 'vue2AppOfReact',
    entry: vue2AppEntry,
    activeRule: '/vue2App',
  },
  viteApp: {
    name: 'viteAppOfReact',
    entry: viteAppEntry,
    activeRule: '/viteApp',
  },
}

const options = [
  {
    name: 'vue2App',
    path: 'vue2App',
    children: [
      { name: 'vue2App-通信测试页面', path: '/communication-test' },
      { name: 'vue2App-子应用跳转测试页面', path: '/navigate-view' },
    ]
  },
  {
    name: 'viteApp',
    path: 'viteApp',
    children:  [
      { name: 'viteApp-通信测试页面', path: '/communication-test' },
      { name: 'viteApp-子应用跳转测试页面', path: '/navigate-view' },
    ]
  }
]

let app: null | interfaces.App = null

export default function MicroAppView() {
  const { user } = useAppSelector(state => state.user)
  const container = useRef(null)
  const [appInfo, setAppInfo] = useState<{
    name: string
    entry: string
    basename: string
    path: string
  } | null>(null)

  const handleChange = async (value: any) => {
    const [ appName, path ] = value
    const appInfo = apps[appName]
    if (appInfo) {
      setAppInfo({
        name: appInfo.name,
        entry: appInfo.entry,
        basename: '/' + appInfo.name,
        path
      })
    }
  }


  useEffect(() => {
    (async () => {
      if (appInfo) {
        const options: Partial<Omit<interfaces.AppInfo, 'name'>> = {
          domGetter: () => container.current,
          entry: appInfo.entry,
          basename: appInfo.basename,
          props: {
            path: appInfo.path
          }
        }
        appInfo.name === 'viteAppOfReact' && (options.sandbox = false)
        app = await Garfish.loadApp(appInfo.name, options)
        await app?.mount()
        // 下发用户信息
        window.Garfish.channel.emit('userInfo', user)
      }
    })()
    return () => {
      app?.unmount()
    }
  }, [appInfo, user])

  return (
    <>
      <Space size={20} style={{ width: '100%'}} direction="vertical">
        <Alert message="这是React18子应用作为主应用，挂载Vue2子应用或Vite子应用" type="success" />
        <Form>
          <Form.Item label="选择要加载的子应用页面">
            <Cascader
              style={{ width: '400px'}}
              expandTrigger="hover"
              options={options}
              fieldNames={{label: 'name', value: 'path'}}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
        <div ref={container}></div>
      </Space>
    </>
  )
}
