import { Alert, Divider, Space, Typography } from 'antd'
import UserInfo from '@/components/UserInfo'
import MessageTrigger from '@/components/MessageTrigger'
import Counter from '@/components/Counter'
import type React from 'react'

export default function CommunicationTest() {
  return (
    <>
      <Space size={40} direction="vertical" style={{ width: '100%'}}>
        <Alert message={(
          <>
            vite应用不支持<a href="https://micro-zoe.com/docs/1.x/#/zh-cn/framework/vite" target="_blank">JS沙箱</a>。在嵌入vite子应用时，micro-app的功能只负责渲染，其它的行为由应用自行决定,这包括如何防止样式、JS变量、元素的冲突。
          </>
        )} type="success" />
        <Divider>
          <Typography.Title>Vite子应用页面</Typography.Title>
        </Divider>
        <UserInfo />
        <Divider>
          <Typography.Title level={2}>Vite子应用向主应用通信</Typography.Title>
        </Divider>
        <MessageTrigger />
        <Divider>
          <Typography.Title level={2}>Vite子应用Counter</Typography.Title>
        </Divider>
        <Counter />
      </Space>
    </>
  )
}
