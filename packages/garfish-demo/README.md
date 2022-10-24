# Garfish demo

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
- [ ] 多个子应用共存
- [ ] CSS隔离
- [ ] 主子应用间跳转
- [ ] 嵌套子应用
- [ ] 资源预加载
- [ ] 子应用保活
- [x] 接入vite子应用

## 功能实现说明


### 应用间通信

利用[Garfish.channel](https://www.garfishjs.org/api/channel)进行主子应用间的通信。

### 多个子应用共存


### CSS隔离


### 主子应用间跳转


### 嵌套子应用


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
