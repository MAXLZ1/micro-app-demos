# MicroApp demo

线上地址：[https://maxlz1.github.io/micro-app-demos/micro-app-demo/vue3-main/dist/](https://maxlz1.github.io/micro-app-demos/micro-app-demo/vue3-main/dist/)

本地启动命令，启动后自动打开主应用，如果未打开页面，使用浏览器输入http://localhost:8081进行访问

本地启动命令
```bash
pnpm i
pnpm run micro-app-demo:start
```

各应用本地地址：
- 主应用：http://localhost:8081
- vue2子应用：http://localhost:8091
- React18子应用：http://localhost:8092
- Vite子应用：http://localhost:8093/vite/

## 文件目录

```bash
└── micro-app-demo
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
- [x] 资源预加载
- [x] 子应用保活
- [x] 接入vite子应用

## 功能实现说明

### 应用间通信

- 主应用向子应用发送数据：利用`microApp.setData`和`data prop`发送数据，子应用使用`window.microApp.addDataListener`获取来自主应用的数据。
- 子应用向主应用发送数据：子应用利用`window.microApp.dispatch`向主应用发送数据，主应用使用`microApp.addDataListener`监听来自子应用的数据。

需要注意的是`Vite`子应用，沙箱会失去作用，所以需要在主应用注册创建一个`EventCenterForMicroApp`对象，并将其添加到`window`中，子应用通过`window`访问对应的`EventCenterForMicroApp`对象，并调用`EventCenterForMicroApp`对象的`dispatch`向主应用发送数据，调用`getData`或`addDataListener`获取来自主应用的数据。

### 多个子应用共存

使用多个`<micro-app></micro-app>`显示多个子应用即可。

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

- 子应用跳转到主应用：主应用下发自身的路由对象，由子应用调用路由对象进行路由跳转。

```ts
export default {
  data() {
    return {
      buttons: [
        {
          label: '跳转至主应用 page1',
          url: '/main/communication-test'
        },
        {
          label: '跳转至Vue2子应用',
          url: '/vue2App/communication-test'
        },
        {
          label: '跳转至React18子应用',
          url: '/reactApp/communication-test'
        },
        {
          label: '跳转至Vite子应用',
          url: '/viteApp/communication-test'
        }
      ]
    }
  },
  created() {
    // 获取主应用下发的路由对象
    this.mainAppRouter = window?.microApp.getData()?.router
  },
  methods: {
    navigate(url) {
      this.mainAppRouter?.push(url)
    }
  },
}
```
- 子应用跳转到子应用：同子应用跳转到主应用。

### 资源预加载

利用`microApp.preFetch`实现资源预加载。

### 子应用保活

每个子应用占据一个`view`并在主应用中分配路由，同时`<micro-app/>`设置`keep-alive`属性。

**Vue2KeepAliveView.vue**

```vue
<template>
  <micro-app
    :name="vueApp.name"
    :url="vueApp.url"
    :baseroute="vueApp.baseroute"
    :data="microAppData"
    keep-alive
  />
</template>

<script lang="ts">
export default {
  name: 'Vue2KeepAliveView'
}
</script>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { computed } from 'vue'

const { apps } = useAppStore()

const vueApp = computed(() => {
  const app = apps.find(item => item.name === 'vue2App')!
  return {
    ...app,
    // 保证name唯一
    name: app.name + 'KeepAlive'
  }
})

const microAppData = computed(() => ({
  path: '/vue2App/tab-view',
  abstract: true
}))
</script>

```

### 接入vite子应用

参考：(https://micro-zoe.com/docs/1.x/#/zh-cn/framework/vite?id=%e4%bd%9c%e4%b8%ba%e5%ad%90%e5%ba%94%e7%94%a8)[https://micro-zoe.com/docs/1.x/#/zh-cn/framework/vite?id=%e4%bd%9c%e4%b8%ba%e5%ad%90%e5%ba%94%e7%94%a8]
