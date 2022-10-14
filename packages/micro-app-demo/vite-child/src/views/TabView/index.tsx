import Counter from '@/components/Counter'
import MessageTrigger from '@/components/MessageTrigger'
import { Input, Tabs } from 'antd'

const items = [
  {
    label: 'input',
    key: '1',
    children: (
      <Input />
    )
  },
  {
    label: 'message trigger',
    key: '2',
    children: (
      <MessageTrigger />
    ) 
  },
  {
    label: 'counter',
    key: '3',
    children: (
      <Counter />
    ) 
  }
]

export default function TabView() {
  return (
    <Tabs items={items} />
  )
}
