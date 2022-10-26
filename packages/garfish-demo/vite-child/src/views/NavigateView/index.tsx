import { Button, Space, Typography } from 'antd'

export default function NavigateView() {
  const handleClick = ({ path, basename }: { path: string, basename: string }) => {
    window.Garfish.router?.push({
      path,
      basename,
    })
  }
  const buttons = [
    {
      path: '/main/communication-test',
      basename: '',
      label: '跳转至主应用 page1'
    },
    {
      path: '/communication-test',
      basename: '/vue2App',
      label: '跳转至Vue2子应用'
    },
    {
      path: '/communication-test',
      basename: '/reactApp',
      label: '跳转至React18子应用'
    },
    {
      path: '/communication-test',
      basename: '/viteApp',
      label: '跳转至Vite子应用'
    },
  ].map(item => (
    <Button type="primary" onClick={() => handleClick(item)} key={item.basename + item.path}>{item.label}</Button>
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
