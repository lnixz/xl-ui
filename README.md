## Vue3 + Ts 组件库搭建

> node version 14.x

- 全局安装`pnpm`
```shell
npm i pnpm -g
```

- 配置`.npmrc`文件
```yaml
shamefully-hoist = true
```

- 配置 `pnpm-workspace.yaml`文件
```yaml
packages:
  - 'packages/**' # 存放编写的组件
  - 'examples'

```