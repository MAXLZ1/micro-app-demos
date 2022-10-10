# 微前端框架示例汇总

## qiankun demo

主子应用使用均`hash`路由。

线上地址：[https://maxlz1.github.io/micro-app-demos/qiankun-demo/vue3-main/dist/](https://maxlz1.github.io/micro-app-demos/qiankun-demo/vue3-main/dist/)

本地启动命令
```bash
pnpm i
pnpm run qiankun-demo:start
```

### 文件目录

```bash
└── qiankun-demo
    ├── react-child # react18子应用
    ├── vite-child # react18-vite子应用
    ├── vue2-child # vue2子应用
    └── vue3-main # vue3主应用
```

### 功能列表

- [x] 主子应用间通信（利用`CustomEvent`）
- [x] 多个子应用共存
- [ ] 子应用保活
- [x] CSS隔离
- [x] 主子应用间跳转
