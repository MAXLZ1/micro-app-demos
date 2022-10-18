import { Alert, Form, Select, Space } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { mountModule, unmoutModule, type StarkModule } from '@ice/stark-module'

const vue2AppEntry =
  process.env.NODE_ENV === 'production'
    ? 'https://maxlz1.github.io/micro-app-demos/icestark-demo/vue2-child/dist'
    : 'http://localhost:8091'

const options = [
  { name: 'vue2App-通信测试页面', url: `${vue2AppEntry}/js/communicationTest.js` },
  { name: 'vue2App-子应用跳转测试页面', url: `${vue2AppEntry}/js/navigateView.js` }
]

export default function MicroAppView() {
  const container = useRef(null)
  const [moduleInfo, setModuleInfo] = useState<StarkModule | null>(null)

  const handleChange = (value: any, options: any) => {
    const {name, url} = options
    setModuleInfo(() => ({
      name,
      url
    }))
  }

  useEffect(() => {
    if (moduleInfo) {
      mountModule(moduleInfo, container.current!)
      return () => {
        unmoutModule(moduleInfo, container.current!)
      }
    }
  }, [moduleInfo])

  return (
    <>
      <Space size={20} style={{ width: '100%'}} direction="vertical">
        <Alert message="这是React18子应用作为主应用，挂载Vue2子应用。" type="success" />
        <Form>
          <Form.Item label="选择要加载的子应用页面">
            <Select
              style={{ width: '400px'}}
              options={options}
              fieldNames={{label: 'name', value: 'url'}}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
        <div ref={container}></div>
      </Space>
    </>
  )
}
