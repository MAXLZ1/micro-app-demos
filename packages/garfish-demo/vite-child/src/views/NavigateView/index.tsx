import { Button, Space, Typography } from 'antd'

export default function NavigateView() {
  const handleClick = ({ path }: { path: string }) => {
    const router = (window.Garfish.getGlobalObject() as any).__MAIN_ROUTER__
      if (router) {
        router.push(path)
      }
  }
  const buttons = [
    {
      path: '/main/communication-test',
      label: '跳转至主应用 page1'
    },
    {
      path: '/vue2App/communication-test',
      label: '跳转至Vue2子应用'
    },
    {
      path: '/reactApp/communication-test',
      label: '跳转至React18子应用'
    },
    {
      path: '/viteApp/communication-test',
      label: '跳转至Vite子应用'
    },
  ].map(item => (
    <Button type="primary" onClick={() => handleClick(item)} key={item.path}>{item.label}</Button>
  ))

  return (
    <>
      <Typography.Title>Vite子应用内控制跳转</Typography.Title>
      <Space size={20}>
        {buttons}
      </Space>
    </>
  )
}
