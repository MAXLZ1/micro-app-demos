import { Alert, Cascader, Form, Space } from 'antd'
import type { MicroApp } from 'qiankun'
import { loadMicroApp } from 'qiankun'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/stores/storeHooks'

export const vue2AppEntry = process.env.NODE_ENV === 'production' ? 'https://maxlz1.github.io/micro-app-demos/qiankun-demo/vue2-child/dist/' : 'http://localhost:8091'
export const viteAppEntry = process.env.MODE === 'production' ? 'https://maxlz1.github.io/micro-app-demos/qiankun-demo/vite-child/dist/' : 'http://localhost:8093'

const apps: Record<string, any> = {
  vue2App: {
    name: 'vue2App',
    entry: vue2AppEntry,
    activeRule: '#/vue2App',
  },
  viteApp: {
    name: 'viteApp',
    entry: viteAppEntry,
    activeRule: '#/viteApp',
  },
}

const options = [
  {
    name: 'vue2App',
    path: 'vue2App',
    children: [
      { name: 'vue2App-通信测试页面', path: '/vue2App/communication-test' },
      { name: 'vue2App-子应用跳转测试页面', path: '/vue2App/navigate-view' },
    ]
  },
  {
    name: 'viteApp',
    path: 'viteApp',
    children:  [
      { name: 'viteApp-通信测试页面', path: '/viteApp/communication-test' },
      { name: 'viteApp-子应用跳转测试页面', path: '/viteApp/navigate-view' },
    ]
  }
]

export default function MicroAppView() {
  const user = useAppSelector(state => state.user.user)

  const [appInfo, setAppInfo] = useState(['', ''])

  let microApp: MicroApp | null = null

  const loadApp = async () => {
    const [appName, appPath] = appInfo
    if (appName && appPath) {
      if (microApp && microApp.getStatus() === 'MOUNTED') {
        await microApp.unmount()
        microApp = null
      }
      microApp = loadMicroApp({
        ...apps[appName],
        container: '#micapp-container',
        props: {
          path: appPath,
        }
      })
      await microApp.mountPromise
      // 更新子应用用户信息
      window.dispatchEvent(new CustomEvent('changeUser', {
        detail: user
      }))
    }
  }

  useEffect(() => {
    loadApp()
    return () => {
      if (microApp && microApp.getStatus() === 'MOUNTED') {
        microApp?.unmount().finally(() => {
          microApp = null
        })
      }
    }
  }, [appInfo])

  const handleChange = async (value: any) => {
    setAppInfo(value)
  }

  return (
    <>
      <Space size={20} style={{ width: '100%'}} direction="vertical">
        <Alert message="这是React19子应用作为主应用，挂载Vue2子应用或Vite子应用" type="success" />
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
        <div id="micapp-container"></div>
      </Space>
    </>
  )
}
