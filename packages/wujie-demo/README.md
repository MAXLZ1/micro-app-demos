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
- [x] 嵌套子应用
- [x] 资源预加载
- [x] 子应用保活
- [x] 接入vite子应用

## 功能实现说明


### 应用间通信


### 多个子应用共存

### CSS隔离

框架处理：`ant design`提供了统一修改`CSS`前缀的方案（子应用统一将`Select`, `Tooltip`等组件挂载到父节点上）

正常情况使用`scoped`、`module css`等方式进行隔离。

### 主子应用间跳转

### 嵌套子应用

### 资源预加载


### 子应用保活

### 接入vite子应用
