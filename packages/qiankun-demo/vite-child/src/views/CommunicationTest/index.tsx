import { Alert, Divider, Space } from 'antd'
import UserInfo from '@/components/UserInfo'
import styles from './index.module.less'
import MessageTrigger from '@/components/MessageTrigger'
import Counter from '@/components/Counter'
import type React from 'react'

export default function CommunicationTest() {
  return (
    <>
      <Space size={40} direction="vertical" className={styles.box}>
        <Alert message={(
          <>
            qiankun官方并未对vite子应用进行支持，但qiankun3有支持vite的计划。该示例依靠社区的<a href="https://github.com/tengmaoqing/vite-plugin-qiankun" target="_blank">vite-plugin-qiankun</a>实现。
          </>
        )} type="success" />
        <Divider>
          <h1>Vite子应用页面</h1>
        </Divider>
        <UserInfo />
        <Divider>
          <h2>Vite子应用向主应用通信</h2>
        </Divider>
        <MessageTrigger />
        <Divider>
          <h2>Vite子应用Counter</h2>
        </Divider>
        <Counter />
      </Space>
    </>
  )
}
