/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { Alert, Cascader, Form, Space } from 'antd'
import { useState } from 'react'
import { useAppSelector } from '@/stores/storeHooks'
import microApp from '@micro-zoe/micro-app'

export const vue2AppEntry = process.env.REACT_APP_VUE2_CHILD_PUBLIC_PATH as string
export const viteAppEntry = process.env.REACT_APP_VITE_CHILD_PUBLIC_PATH as string

interface MicroApp {
  name: string
  url: string
  baseroute: string
}

const apps: Record<string, MicroApp> = {
  vue2App2: {
    name: 'vue2App2',
    url: vue2AppEntry,
    baseroute: '/vue2App',
  },
  viteApp: {
    name: 'viteApp',
    url: viteAppEntry,
    baseroute: '/viteApp',
  },
}

const options = [
  {
    name: 'vue2App',
    path: 'vue2App2',
    children: [
      { name: 'vue2App-通信测试页面', path: '/vue2App/communication-test' },
      { name: 'vue2App-子应用跳转测试页面', path: '/vue2App/navigate-view' },
    ]
  },
  // {
  //   name: 'viteApp',
  //   path: 'viteApp',
  //   children:  [
  //     { name: 'viteApp-通信测试页面', path: '/viteApp/communication-test' },
  //     { name: 'viteApp-子应用跳转测试页面', path: '/viteApp/navigate-view' },
  //   ]
  // }
]

export default function MicroAppView() {
  const [ isVite, setIsVite ] = useState(false)
  const user = useAppSelector(state => state.user.user)
  const [ app, setApp ] = useState<MicroApp | null>(null)
  const [ microAppData, setMicroAppData ] = useState({
    user,
    path: '',
    abstract: true,
    router: window?.microApp.getData()?.router // 下发主应用的路由对象
  })

  const handleChange = async (value: any) => {
    const [appName, appPath] = value
    if (appName && appPath) {
      setIsVite(appName === 'viteApp')
      setApp(apps[appName])
      setMicroAppData(pre => ({
        ...pre,
        path: appPath,
      }))
    }
  }

  return (
    <div>
      <Space size={20} style={{ width: '100%'}} direction="vertical">
        <Alert message={
          <div>这是React18子应用作为主应用，挂载Vue2子应用。<br />由于vite子应用会导致沙箱失效，会导致React18子应用中的样式影响到vite子应用，所以这里不再加载vite子应用。</div>
        } type="success" />
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
        {
          app && 
          <micro-app
            name={app.name}
            url={app.url}
            baseroute={app.baseroute}
            data={microAppData}
            inline={isVite}
            disableSandbox={isVite}
            destroy={true}
          />
        }
      </Space>
    </div>
  )
}
