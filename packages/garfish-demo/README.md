# Garfish demo

`Garfish`主应用`hash`路由实现说明：

子应用使用`abstract`或`memory`路由，那么子路由可以脱离主应用的路由控制，因此主路由可自由切换`hash`与`history`路由。

线上地址：[https://maxlz1.github.io/micro-app-demos/garfish-demo/vue3-main/](https://maxlz1.github.io/micro-app-demos/garfish-demo/vue3-main/)

本地启动命令
```bash
pnpm i
pnpm run garfish-demo:start
```

启动后自动打开主应用，如果未打开页面，使用浏览器输入http://localhost:8081进行访问

各应用本地地址：
- 主应用：http://localhost:8081
- vue2子应用：http://localhost:8091
- React18子应用：http://localhost:8092
- Vite子应用：http://localhost:8093


## 文件目录

```bash
└── garfish-demo
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
- [x] 嵌套子应用
- [ ] 资源预加载
- [ ] 子应用保活
- [x] 接入vite子应用

## 功能实现说明


### 应用间通信

利用[Garfish.channel](https://www.garfishjs.org/api/channel)进行主子应用间的通信。

### 多个子应用共存

使用[Garfish.loadApp](https://www.garfishjs.org/api/loadApp)，手动控制子应用的加载与卸载。

为了摆脱主应用的路由驱动模式，Vue子应用路由使用`abstract`，React子应用使用`memory`路由。（项目中通过`props.path`来判断是否启用`abstract`或`memory`路由。）

**主应用**

```vue
<template>
  <div ref="one"></div>
</template>

<script lang="ts">
export default {
  name: 'CssIsolation'
}
</script>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import Garfish, { type interfaces } from 'garfish'

const one = ref<HTMLElement | null>(null)

let vueApp: interfaces.App | null = null

onMounted(async () => {
  vueApp = await Garfish.loadApp(vueAppInfo.value.name, {
    domGetter: () => one.value!,
    entry: vueAppInfo.value.entry,
    // 作为子应用的basename
    basename: '/css-isolation',
    props: {
      // 传递要跳转的path，子应用以此判断是否存启用abstract或memory
      path: '/css-isolation'
    }
  }),
  vueApp?.mount()
})

onBeforeUnmount(() => {
  vueApp?.unmount()
})
</script>
```

**vue2子应用**

```ts
export const provider = () => {
  let app: Vue | null = null
  let routerInstance: VueRouter | null = null
  return {
    render({ basename, dom, props }: any) {
      // 如果存在props.path，启用abstract路由
      routerInstance = baseRouter(basename, props.path ? 'abstract' : 'history')
      app = new Vue({
        router: routerInstance,
        pinia: createPinia(),
        render: (h) => h(App),
      }).$mount(dom.querySelector('#app'))

      // 进行路由跳转
      if (props.path) {
        routerInstance.push(props.path)
      }
      window?.Garfish.channel.on('userInfo', handleUserInfo)
    },
    destroy() {
      window?.Garfish.channel.removeListener('userInfo', handleUserInfo)
      app?.$destroy()
      app = null
      routerInstance = null
    },
  }
}
```

**react18子应用**

```ts
export const provider = () => {
  let root: ReactDOM.Root | null = null
  let router: RouterProviderProps["router"] | null = null

  return {
    render({ basename, dom, props }: any) {
      window?.Garfish.channel.on('userInfo', handleUserInfo)
      
      const container = dom.querySelector('#root')!
      // 如果存在props.path，启用memory路由
      router = createRouter(basename, props.path ? 'memory' : 'history')
      root = ReactDOM.createRoot(container)

      root.render(<React.StrictMode>
        <Provider store={store}>
          <ConfigProvider prefixCls="ar4" getPopupContainer={node => {
            if (node) {
              return node.parentNode as HTMLElement
            }
            return dom
          }}>
            <Suspense fallback={
              <Spin>
                <div style={{width: '100%', height: '200px'}}></div>
              </Spin>
            }>
              <RouterProvider router={router} />
            </Suspense>
          </ConfigProvider>
        </Provider>
      </React.StrictMode>)

      // 进行路由跳转，React子应用需要拼接basename
      if (props.path) {
        router.navigate(basename + props.path)
      }
      
    },
    destroy() {
      root?.unmount()
      router?.dispose()
      root = null
      router = null
      window?.Garfish.channel.removeListener('userInfo', handleUserInfo)
    },
  }
}
```

### CSS隔离

框架处理：`ant design`提供了统一修改`CSS`前缀的方案（子应用统一将`Select`, `Tooltip`等组件挂载到父节点上）

正常情况使用`scoped`、`module css`等方式进行隔离。

### 主子应用间跳转

主应用下发路由对象，子应用使用下发的路由对象进行路由跳转。

**主应用**
```ts
Garfish.setGlobalValue('__MAIN_ROUTER__', router)
```

**子应用**
```ts
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

```

### 嵌套子应用

使用[Garfish.loadApp](https://www.garfishjs.org/api/loadApp)嵌套子应用。

### 资源预加载


### 子应用保活


### 接入vite子应用

如果在使用`react vite`作为子应用时，碰到`Identifier 'exports' has already been declared`错误，可禁用`react-refresh`。

```ts
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ...
  plugins: [
    react({
      fastRefresh: false
    }),
  ],
}))
```
