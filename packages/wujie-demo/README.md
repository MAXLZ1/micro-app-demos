# wujie demo

线上地址：[https://maxlz1.github.io/micro-app-demos/wujie-demo/vue3-main/](https://maxlz1.github.io/micro-app-demos/wujie-demo/vue3-main/)

本地启动命令
```bash
pnpm i
pnpm run wujie-demo:start
```

启动后自动打开主应用，如果未打开页面，使用浏览器输入http://localhost:8081进行访问

各应用本地地址：
- 主应用：http://localhost:8081
- vue2子应用：http://localhost:8091
- React18子应用：http://localhost:8092
- Vite子应用：http://localhost:8093


## 文件目录

```bash
└── wujie-demo
    ├── react-child # react18子应用(作为嵌套应用的主应用)
    ├── vite-child # react18-vite子应用
    ├── vue2-child # vue2子应用
    └── vue3-main # vue3主应用
```

## 功能列表

- [x] 应用间通信
- [x] 多个子应用共存
- [x] CSS隔离
- [x] 主子应用间跳转
- [ ] 嵌套子应用
- [x] 资源预加载
- [x] 子应用保活
- [x] 接入vite子应用

## 功能实现说明

### 应用间通信

利用`wujie`提供的(bus)[https://wujie-micro.github.io/doc/api/bus.html]进行应用间通信，或者通过`props`等方式。

### 多个子应用共存

利用`wujie-vue2`、`wujie-vue3`、`wujie-react`显示多个标签即可。

### CSS隔离

`wujie`采用`webcomponent`创建了一个`wujie`标签，天然的`CSS`隔离，应用无需任何处理。

### 主子应用间跳转

- 主应用跳转至子应用：利用自身路由对象跳转。
- 子应用跳转至子应用：主应用下发路由对象，子应用利用下发的路由对象进行跳转。

  **主应用**
  ```vue
  <template>
    <wujie-vue
      v-if="microApp"
      :name="microApp.name"
      :url="microApp.url"
      :props="microAppProps"
      :afterMount="afterMount"
    />
  </template>

  <script lang="ts" setup>
  const router = useRouter()
  const microAppProps = computed(() => ({ router }))
  </script>
  ```

  **子应用**
  ```ts
  import { Button, Space, Typography } from 'antd'

  const handleClick = ({ url }: { url: string }) => {
    const router = window.$wujie.props.router
    router?.push(url)
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

  export default function NavigateView() {
    return (
      <>
        <Typography.Title>React18子应用内控制跳转</Typography.Title>
        <Space size={20}>
          {buttons}
        </Space>
      </>
    )
  }
  ```

- 子应用跳转至主应用：同子应用跳转至子应用。

### 嵌套子应用

### 资源预加载

`wujie`提供的[preloadApp](https://wujie-micro.github.io/doc/api/preloadApp.html)方法。

### 子应用保活

`wujie`提供的[alive](https://wujie-micro.github.io/doc/api/startApp.html#alive)配置。

### 接入vite子应用

`vite`子应用需要注意在入口文件主动调用`window.__WUJIE.mount()`方法。