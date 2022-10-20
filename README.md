# 微前端框架示例汇总

为方便利用Github Page进行展示，以下应用均使用`hash`路由。

## qiankun demo

线上地址：[https://maxlz1.github.io/micro-app-demos/qiankun-demo/vue3-main/dist/](https://maxlz1.github.io/micro-app-demos/qiankun-demo/vue3-main/dist/)

本地启动命令
```bash
pnpm i
pnpm run qiankun-demo:start
```

### 文件目录

```bash
└── qiankun-demo
    ├── react-child # react18子应用(作为嵌套应用的主应用)
    ├── vite-child # react18-vite子应用
    ├── vue2-child # vue2子应用
    └── vue3-main # vue3主应用
```

### 功能列表[](README.md)

- [x] 应用间通信（利用`CustomEvent`）
- [x] 多个子应用共存
- [x] CSS隔离
- [x] 主子应用间跳转
- [x] 嵌套子应用
- [x] 资源预加载
- [x] 子应用保活
- [x] 接入vite子应用

具体功能实现细节参考：[功能实现说明](https://github.com/MAXLZ1/micro-app-demos/tree/main/packages/qiankun-demo#功能实现说明)

## MicroApp demo

线上地址：[https://maxlz1.github.io/micro-app-demos/micro-app-demo/vue3-main/dist/](https://maxlz1.github.io/micro-app-demos/micro-app-demo/vue3-main/dist/)

本地启动命令
```bash
pnpm i
pnpm run micro-app-demo:start
```

### 文件目录

```bash
└── micro-app-demo
    ├── react-child # react18子应用(作为嵌套应用的主应用)
    ├── vite-child # react18-vite子应用
    ├── vue2-child # vue2子应用
    └── vue3-main # vue3主应用
```

### 功能列表

- [x] 应用间通信
- [x] 多个子应用共存
- [x] CSS隔离
- [x] 主子应用间跳转
- [x] 嵌套子应用
- [x] 资源预加载
- [x] 子应用保活
- [x] 接入vite子应用

具体功能实现细节参考：[功能实现说明](https://github.com/MAXLZ1/micro-app-demos/tree/main/packages/micro-app-demo#功能实现说明)

## icestark demo

线上地址：[https://maxlz1.github.io/micro-app-demos/icestark-demo/vue3-main/dist/](https://maxlz1.github.io/micro-app-demos/icestark-demo/vue3-main/dist/)

本地启动命令
```bash
pnpm i
pnpm run icestark-demo:start
```

### 文件目录

```bash
└── icestark-demo
    ├── react-child # react18子应用(作为嵌套应用的主应用)
    ├── vite-child # react18-vite子应用
    ├── vue2-child # vue2子应用
    └── vue3-main # vue3主应用
```

### 功能列表

- [x] 应用间通信
- [x] 多个子应用共存
- [x] CSS隔离
- [x] 主子应用间跳转
- [x] 嵌套子应用
- [x] 资源预加载
- [x] 子应用保活
- [x] 接入vite子应用

具体功能实现细节参考：[功能实现说明](https://github.com/MAXLZ1/micro-app-demos/tree/main/packages/icestark-demo#功能实现说明)

## wujie demo

线上地址：[https://maxlz1.github.io/micro-app-demos/wujie-demo/vue3-main/dist/](https://maxlz1.github.io/micro-app-demos/wujie-demo/vue3-main/dist/)

本地启动命令
```bash
pnpm i
pnpm run wujie-demo:start
```

### 文件目录

```bash
└── wujie-demo
    ├── react-child # react18子应用(作为嵌套应用的主应用)
    ├── vite-child # react18-vite子应用
    ├── vue2-child # vue2子应用
    └── vue3-main # vue3主应用
```

### 功能列表

- [x] 应用间通信
- [ ] 多个子应用共存
- [ ] CSS隔离
- [ ] 主子应用间跳转
- [ ] 嵌套子应用
- [ ] 资源预加载
- [ ] 子应用保活
- [x] 接入vite子应用

具体功能实现细节参考：[功能实现说明](https://github.com/MAXLZ1/micro-app-demos/tree/main/packages/wujie-demo#功能实现说明)