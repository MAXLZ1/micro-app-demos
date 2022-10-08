import { Divider, Space } from 'antd'
import UserInfo from '@/components/UserInfo'
import styles from './index.module.less'
import MessageTrigger from '@/components/MessageTrigger'
import Counter from '@/components/Counter'

export default function CommunicationTest() {
  return (
    <>
      <Space size={40} direction="vertical" className={styles.box}>
        <Divider>
          <h1>React18子应用页面</h1>
        </Divider>
        <UserInfo />
        <Divider>
          <h2>React18子应用向主应用通信</h2>
        </Divider>
        <MessageTrigger />
        <Divider>
          <h2>React18子应用Counter</h2>
        </Divider>
        <Counter />
      </Space>
    </>
  )
}
