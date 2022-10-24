import { Alert, Divider, Space, Typography } from 'antd'
import UserInfo from '@/components/UserInfo'
import MessageTrigger from '@/components/MessageTrigger'
import Counter from '@/components/Counter'
import type React from 'react'

export default function CommunicationTest() {
  return (
    <>
      <Space size={40} direction="vertical" style={{ width: '100%'}}>
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
