# qiankun demo

线上地址：[https://maxlz1.github.io/micro-app-demos/qiankun-demo/vue3-main/](https://maxlz1.github.io/micro-app-demos/qiankun-demo/vue3-main/)

本地启动命令
```bash
pnpm i
pnpm run qiankun-demo:start
```

启动后自动打开主应用，如果未打开页面，使用浏览器输入http://localhost:8081进行访问

各应用本地地址：
- 主应用：http://localhost:8081
- vue2子应用：http://localhost:8091
- React18子应用：http://localhost:8092
- Vite子应用：http://localhost:8093

## 文件目录

```bash
└── qiankun-demo
    ├── react-child # react18子应用(作为嵌套应用的主应用)
    ├── vite-child # react18-vite子应用
    ├── vue2-child # vue2子应用
    └── vue3-main # vue3主应用
```

## 功能列表

- [x] 应用间通信（利用`CustomEvent`）
- [x] 多个子应用共存
- [x] CSS隔离
- [x] 主子应用间跳转
- [x] 嵌套子应用
- [x] 资源预加载
- [x] 子应用保活
- [x] 接入vite子应用

## 功能实现说明

### 应用间通信

考虑到[qiankun3](https://github.com/umijs/qiankun/discussions/1378)后续抛弃`globalState`，所以应用间通信未使用`qiankun`自带的`globalState`。

主要思路就是利用[CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent)。

主应用使用`window.dispatchEvent(new CustomEvent(...))`向子应用下发数据，子应用使用`window.addEventListener`监听数据变化。

**主应用：**
```ts
import type { User } from '@/data/userData'

export const CHANGE_USER = 'changeUser'

function createUserEvent(user: User | null) {
  return new CustomEvent(CHANGE_USER, {
    detail: user
  })
}

export function dispatchUserEvent(user: User | null) {
  const event = createUserEvent(user)
  window.dispatchEvent(event)
}

```

**子应用：**
```ts
function changeUserListener(e: Event) {
  const { setUser } = useUserStore()
  setUser((e as CustomEvent<User>).detail)
}

window.addEventListener('changeUser', changeUserListener)
```

### 多个子应用共存

> 注意子应用共存时，Vue子应用需要使用abstract路由，React使用MemoryRouter

利用`loadMicroApp`实现子应用共存。加载子应用时通过`props`传入要跳转的路径，子应用接收`path`，根据`path`使用`abstract`或`MemeryRouter`进行跳转。

**Vue2**
```ts
export const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export const abstractRouter = new VueRouter({
  mode: 'abstract',
  base: process.env.BASE_URL,
  routes,
})

function render(props?: Prop) {
  let container: null | HTMLElement = null
  if (props && props.container) {
    container = props.container
  }
  const vueContainer = container ? (container.querySelector('#app') as Element) : '#app'

  if (props?.path) {
    routerInstance = abstractRouter
  } else {
    routerInstance = router
  }

  instance = new Vue({
    router: routerInstance,
    pinia: createPinia(),
    render: (h) => h(App),
  }).$mount(vueContainer)

  if (props?.path) {
    routerInstance.push(props.path)
  }
}
```

**React**
```ts
export const router = createHashRouter(routes, {
  basename
})

export const memoryRouter = createMemoryRouter(routes, {
  basename
})

function render(props?: Prop) {
  let container: null | HTMLElement = null
  if (props && props.container) {
    container = props.container
  }

  let appContainer = (container ? container.querySelector('#root') : document.getElementById('root')) as HTMLElement

  root = ReactDOM.createRoot(appContainer)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConfigProvider prefixCls="ar4" getPopupContainer={node => {
          if (node) {
            return node.parentNode as HTMLElement
          }
          return appContainer
        }}>
          <Suspense fallback={
            <Spin>
              <div style={{width: '100%', height: '200px'}}></div>
            </Spin>
          }>
            <RouterProvider router={props?.path ? memoryRouter : router} />
          </Suspense>
        </ConfigProvider>
      </Provider>
    </React.StrictMode>
  )

  if (props?.path) {
    memoryRouter.navigate(props.path)
  }
}
```

### CSS隔离

框架处理：`ant design`提供了统一修改`CSS`前缀的方案（子应用统一将`Select`, `Tooltip`等组件挂载到父节点上）

正常情况使用`scoped`、`module css`等方式进行隔离。

### 主子应用间跳转

- 主应用跳转到子应用：主应用直接使用本身的路由对象进行跳转即可。

  ```vue
  <router-link to="/main/communication-test">
    <a-button type="primary">跳转至主应用 page1</a-button>
  </router-link>
  <router-link to="/vue2App/communication-test">
    <a-button type="primary">跳转至Vue2子应用</a-button>
  </router-link>
  <router-link to="/reactApp/communication-test">
    <a-button type="primary">跳转至React18子应用</a-button>
  </router-link>
  <router-link to="/viteApp/communication-test">
    <a-button type="primary">跳转至Vite子应用</a-button>
  </router-link>
  ```
- 子应用跳转到主应用：`Vue`子应用直接使用自身路由对象进行跳转；`React`使用`react-router`进行跳转后会添加`basename`，所以跳转采用`window.pushState`。

  ```vue
  <router-link to="/main/communication-test">
    <a-button type="primary">跳转至主应用 page1</a-button>
  </router-link>
  <router-link to="/vue2App/communication-test">
    <a-button type="primary">跳转至Vue2子应用</a-button>
  </router-link>
  <router-link to="/reactApp/communication-test">
    <a-button type="primary">跳转至React18子应用</a-button>
  </router-link>
  <router-link to="/viteApp/communication-test">
    <a-button type="primary">跳转至Vite子应用</a-button>
  </router-link>
  ```

  ```ts
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
        <Typography.Title>React18子应用内控制跳转</Typography.Title>
        <Space size={20}>
          {buttons}
        </Space>
      </>
    )
  }
  ```

- 子应用跳转到子应用：同子应用跳转到主应用。

### 资源预加载

使用`qiankun`提供的`prefetchApps`方法进行资源的预加载。

### 子应用保活

利用主应用的`keep-alive`进行子应用的保活。主应用创建加载子应用的`view`，并将这个`view`加入`keep-alive`列表中。

**主应用router-view所在view**
```vue
<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="aliveView">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts" setup>
const aliveView = reactive<string[]>([
  'Vue2KeepAliveView',
  'React18KeepAliveView',
  'ViteKeepAliveView'
])
</script>
```

**Vue2KeepAliveView.vue**

```vue
<template>
  <div ref="container"></div>
</template>

<script lang="ts">
export default {
  name: 'Vue2KeepAliveView'
}
</script>

<script lang="ts" setup>
import { loadMicroApp, type MicroApp } from 'qiankun'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { vue2AppEntry } from '@/data/appData'

const container = ref<HTMLElement | null>(null)

let app: MicroApp | null = null

onMounted(() => {
  app = loadMicroApp({
    name: 'vue2AppKeepAlive',
    entry: vue2AppEntry,
    container: container.value!,
    props: {
      path: '/vue2App/tab-view'
    }
  })
})

onBeforeUnmount(async () => {
  if (app && app.getStatus() === 'MOUNTED') {
    await app.unmount()
  }
  app = null
})
</script>

<style lang="less" scoped></style>
```

## 接入vite子应用

`vite`子应用的接入依靠[vite-plugin-qiankun](https://github.com/tengmaoqing/vite-plugin-qiankun)插件。