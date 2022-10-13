import { Button, Space, Typography } from 'antd'

export default function NavigateView() {
  const handleClick = ({ url }: { url: string }) => {
    window?.microApp.getData()?.router?.push(url)
  }
  const buttons = [
    {
      url: '/main/communication-test',
      label: '跳转至主应用 page1'
    },
    {
      url: '/vue2App/communication-test',
      label: '跳转至Vue2子应用'
    },
    {
      url: '/reactApp/communication-test',
      label: '跳转至React18子应用'
    },
    {
      url: '/viteApp/communication-test',
      label: '跳转至Vite子应用'
    },
  ].map(item => (
    <Button type="primary" onClick={() => handleClick(item)} key={item.url}>{item.label}</Button>
  ))

  return (
    <>
      <Typography.Title>React18子应用内控制跳转</Typography.Title>
      <Space size={20}>
        {buttons}
      </Space>
    </>
  )
}
