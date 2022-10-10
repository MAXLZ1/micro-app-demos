import { Button, Space } from 'antd'
import styles from './index.module.less'

export default function NavigateView() {
  const handleClick = ({ url }: { url: string }) => {
    window.history.pushState({}, '', window.location.pathname + url)
  }
  const buttons = [
    {
      url: '#/main/communication-test',
      label: '跳转至主应用 page1'
    },
    {
      url: '#/vue2App/communication-test',
      label: '跳转至Vue2子应用'
    },
    {
      url: '#/reactApp/communication-test',
      label: '跳转至React18子应用'
    },
    {
      url: '#/viteApp/communication-test',
      label: '跳转至Vite子应用'
    },
  ].map(item => (
    <Button type="primary" onClick={() => handleClick(item)} key={item.url}>{item.label}</Button>
  ))

  return (
    <>
      <h1 className={styles.title}>React18子应用内控制跳转</h1>
      <Space size={20}>
        {buttons}
      </Space>
    </>
  )
}
