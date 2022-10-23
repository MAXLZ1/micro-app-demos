import { useAppSelector } from '@/stores/storeHooks'
import { Alert, Cascader, Form, Space } from 'antd'
import { useState } from 'react'
import WujieReact from "wujie-react"

const { setupApp, bus } = WujieReact

export const vue2AppEntry = process.env.REACT_APP_VUE2_CHILD_PUBLIC_PATH
export const viteAppEntry = process.env.REACT_APP_VITE_CHILD_PUBLIC_PATH

const apps: Record<string, any> = {
  vue2App: {
    name: 'vue2AppOfReact',
    url: vue2AppEntry,
  },
  viteApp: {
    name: 'viteAppOfReact',
    url: viteAppEntry,
  },
}

const options = [
  {
    name: 'vue2App',
    path: 'vue2App',
    children: [
      { name: 'vue2App-通信测试页面', path: '#/vue2App/communication-test' },
      { name: 'vue2App-子应用跳转测试页面', path: '#/vue2App/navigate-view' },
    ]
  },
  {
    name: 'viteApp',
    path: 'viteApp',
    children:  [
      { name: 'viteApp-通信测试页面', path: '#/viteApp/communication-test' },
      { name: 'viteApp-子应用跳转测试页面', path: '#/viteApp/navigate-view' },
    ]
  }
]

let router: any | undefined

if (window.$wujie) {
  router = window.$wujie.props.router
}

const props = { router }

function geAttrs(app: { name: string, url: string }) {
  // 修改iframe src attr，防止github pages csp报错
  return process.env.NODE_ENV === 'production' ? { src: app.url} : {}
}

Object.values(apps).forEach(item => {
  setupApp({
    name: item.name,
    attrs: geAttrs(item)
  })
})

export default function MicroAppView() {
  const user = useAppSelector(state => state.user.user)
  const [microInfo, setMicroInfo] = useState<{name: string, url: string} | null>(null)

  const handleChange = (value: any) => {
    const [name, path] = value
    const app = apps[name]
    if (app) {
      setMicroInfo(() => ({
        name: app.name,
        url: app.url + path
      }))
    }
  }

  function afterMount() {
    bus.$emit('changeUser', { user })
  }

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
        {microInfo && <WujieReact {...microInfo} props={props} afterMount={afterMount} />}
      </Space>
    </>
  )
}
