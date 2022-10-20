# icestark demo

线上地址：[https://maxlz1.github.io/micro-app-demos/icestark-demo/vue3-main/dist/](https://maxlz1.github.io/micro-app-demos/icestark-demo/vue3-main/dist/)

本地启动命令
```bash
pnpm i
pnpm run icestark-demo:start
```

启动后自动打开主应用，如果未打开页面，使用浏览器输入http://localhost:8081进行访问

各应用本地地址：
- 主应用：http://localhost:8081
- vue2子应用：http://localhost:8091
- React18子应用：http://localhost:8092
- Vite子应用：http://localhost:8093


## 文件目录

```bash
└── icestark-demo
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

> vue项目使用`@ice/stark`相关包时，一定要从`lib`目录下进行引用。否则在打包过程中可能会遇到一些类型问题。

### 应用间通信

应用间通信采用(@ice/stark-data)[https://micro-frontends.ice.work/docs/guide/advanced/communication]

### 多个子应用共存

使用`icestark`提供的微模块方案。目前主要接入以`webpack`为构建工具的项目。

微模块需要导出`mount`、`unmount`方法。同时需要修改对应的`webpack`配置，这里主要介绍`webpack`的修改。

**vue-cli项目微模块处理**

对于`vue-cli`的工程，需要将微模块文件添加到`entry`入口文件，并移除`optimization.splitChunks`，同时将`MiniCssExtractPlugin`中配置的`filename`属性，取消`hash`，以便主应用配置入口CSS

```js
const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')
const path = require('path')
const fs = require('fs')

module.exports = defineConfig({
  // ...
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    // 导出微模块
    const modulePath = path.join(__dirname, './src/modules')
    const modules = fs.readdirSync(modulePath)
    modules.forEach((item) => {
      const name = item.match(/^(.*)\.ts$/)[1]
      // 忽略模块生命周期文件
      if (name !== 'moduleLifeCycle') {
        config.entry(name).add(path.join(modulePath, item))
      }
    })
    config.output.filename('js/[name].js')
    if (process.env.NODE_ENV === 'production') {
      // 取消入口css的hash，方便主应用配置入口文件
      config.plugin('extract-css').tap((args) => {
        args[0].filename = 'css/[name].css'
        return args
      })
    }
  },
})
```

**create-react-app项目**

使用`create-react-app`创建的`react`项目，同样需要修改入口文件，这里使用`craco`进行修改。

```js
// @ts-nocheck
const { name } = require('./package')
const path = require('path')
const fs = require('fs')
const CracoLessPlugin = require('craco-less')

const config = {
  // ...
  webpack: {
    alias: {
      "@": path.resolve("src")
    },
    configure: (webpackConfig: any, { paths }: any) => {
      let manidestPlugin, miniCssExtraPlugin
      webpackConfig.plugins.forEach(item => {
        switch (item.constructor.name) {
          case 'WebpackManifestPlugin':
            manidestPlugin = item
            break
          case 'MiniCssExtractPlugin':
            miniCssExtraPlugin = item
            break
          default:
            break
        }
      })

      const entries = {
        app: [webpackConfig.entry]
      }

      const modulePath = path.join(__dirname, './src/modules')
      const modules = fs.readdirSync(modulePath)
      modules.forEach((item) => {
        const name = item.match(/^(.*)\.tsx$/)[1]
        // 忽略模块生命周期文件
        if (name !== 'moduleLifeCycle') {
          entries[name] = [path.join(modulePath, item)]
        }
      })
      
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        library: name,
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].bundle.js',
      }
      if (process.env.NODE_ENV === 'development') {
        webpackConfig.output.publicPath = process.env.PUBLIC_URL
      }
      webpackConfig.entry = entries

      miniCssExtraPlugin && (miniCssExtraPlugin.options.filename = 'static/css/[name].css')
      manidestPlugin && (manidestPlugin.options.generate = (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path
          return manifest
        }, seed)

        const entrypointFiles = {}
        // 修改多入口后，entrypointFiles也要对应修改
        Object.keys(entrypoints).forEach(entrypoint => {
          entrypointFiles[entrypoint] = entrypoints[entrypoint].filter(fileName => !fileName.endsWith('.map'))
        })

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        }
      })

      return webpackConfig
    },
  }
}

export default config
```

主应用根据子应用模块资源入口文件进行加载：

```ts
const moduleInfos = [
  {
    name: 'vueModule',
    url: [`${vue2PublicPath}/js/communicationTest.js`]
  },
  {
    name: 'reactModule',
    url: [`${reactPublicPath}/static/js/communicationTest.bundle.js`]
  }
]

if (import.meta.env.MODE === 'production') {
  moduleInfos[0].url.push(`${vue2PublicPath}/css/communicationTest.css`)
  moduleInfos[1].url.push(`${reactPublicPath}/static/css/communicationTest.css`)
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

- 子应用跳转到主应用：由主应用下发路由对象，子应用接收路由对象，使用该对象进行路由跳转。


  **主应用**
  ```ts
  import '@/styles/index.less'
  import { createApp } from 'vue'
  import { createPinia } from 'pinia'
  import App from './App.vue'
  import router from './router'
  import { listenReceiveMessage } from '@/utils/messageListener'
  import store from '@ice/stark-data/lib/store'

  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount('#main-app')

  listenReceiveMessage()

  // 下发路由对象
  store.set('router', router)
  ```

  **子应用**
  ```ts
  import { Button, Space, Typography } from 'antd'
  import { store } from '@ice/stark-data'

  let router: any

  store.on('router', (e: any) => {
    router = e
  }, true)

  export default function NavigateView() {
    const handleClick = ({ url }: { url: string }) => {
      router.push(url)
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
  ```
- 子应用跳转到子应用：同子应用跳转到主应用。
  
### 嵌套子应用

使用[ice/stark-module](https://micro-frontends.ice.work/docs/api/stark-module)控制子应用的加载与卸载。

```ts
import { useEffect, useRef, useState } from 'react'
import { mountModule, unmoutModule, type StarkModule } from '@ice/stark-module'

const vue2AppEntry = process.env.REACT_APP_VUE2_CHILD_PUBLIC_PATH

const options = [
  { name: 'vue2App-通信测试页面', url: [`${vue2AppEntry}/js/communicationTest.js`] },
  { name: 'vue2App-子应用跳转测试页面', url: [`${vue2AppEntry}/js/navigateView.js`] }
]

// 生产环境下需要添加css入口
if (process.env.NODE_ENV === 'production') {
  options[0].url.push(`${vue2AppEntry}/css/communicationTest.css`)
  options[1].url.push(`${vue2AppEntry}/css/navigateView.css`)
}

export default function MicroAppView() {
  const container = useRef(null)
  const [moduleInfo, setModuleInfo] = useState<StarkModule | null>(null)

  const handleChange = (value: any, options: any) => {
    const {name, url} = options
    setModuleInfo(() => ({
      name,
      url
    }))
  }

  useEffect(() => {
    if (moduleInfo) {
      mountModule(moduleInfo, container.current!)
      return () => {
        unmoutModule(moduleInfo, container.current!)
      }
    }
  }, [moduleInfo])

  return (//...)
}
```

### 资源预加载

`start`添加[prefetch](https://micro-frontends.ice.work/docs/api/ice-stark#prefetch)属性

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
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { mountModule, unmoutModule } from '@ice/stark-module/lib/modules'
import { vue2PublicPath } from '@/data/appData'

const container = ref<HTMLElement | null>(null)

const moduleInfo = {
  name: 'vue2AppKeepAlive',
  url: [`${vue2PublicPath}/js/tabView.js`]
}

if (import.meta.env.MODE === 'production') {
  moduleInfo.url.push(`${vue2PublicPath}/css/tabView.css`)
}

onMounted(() => {
  mountModule(moduleInfo, container.value!)
})

onBeforeUnmount(() => {
  unmoutModule(moduleInfo, container.value!)
})
</script>
```

### 接入vite子应用

参考：[其他框架接入微应用](https://micro-frontends.ice.work/docs/guide/use-child/others/#vite-%E5%BA%94%E7%94%A8)