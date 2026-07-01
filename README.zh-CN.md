<div align="center">
  <h1>@rc-component/footer</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Ant Design 生态的一部分。</sub></p>
  <p>🦶 React 页脚布局基础组件，服务于 Ant Design 生态页面。</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/footer"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/footer.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/footer"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/footer.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/footer/actions/workflows/main.yml"><img alt="build status" src="https://github.com/react-component/footer/actions/workflows/main.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/footer"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/footer/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/footer"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/footer?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>

## 特性

- 支持响应式页脚布局、分栏、链接、自定义图标和底部区域。
- 支持亮色/暗色主题、自定义背景和分栏布局控制。
- 被 Ant Design 站点和生态页面使用。

## 安装

```bash
npm install @rc-component/footer
```

`rc-footer` 是旧包名。新版本应使用带 scope 的 `@rc-component/footer` 包。

## 使用

```tsx
import Footer from '@rc-component/footer';
import '@rc-component/footer/assets/index.css';

export default () => (
  <Footer
    columns={[
      {
        title: 'Resources',
        items: [
          {
            title: 'Ant Design',
            url: 'https://ant.design',
            openExternal: true,
          },
          {
            title: 'Ant Design Pro',
            url: 'https://pro.ant.design',
            openExternal: true,
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            title: 'GitHub',
            url: 'https://github.com/ant-design/ant-design',
            openExternal: true,
          },
        ],
      },
    ]}
    bottom="Made with care by Ant Design"
  />
);
```

## 示例

运行本地 dumi 站点：

```bash
ut install
npm start
```

然后打开 `http://localhost:8000`。

## API

### Footer

| 参数             | 类型                              | 默认值         | 说明                         |
| ---------------- | --------------------------------- | -------------- | ---------------------------- |
| backgroundColor  | string                            | `#000`         | 页脚背景色                   |
| bottom           | ReactNode                         | -              | 页脚列下方的额外底部区域     |
| className        | string                            | `''`           | 页脚的附加 className         |
| columnLayout     | `space-around` \| `space-between` | `space-around` | `justify-content` 列元素的值 |
| columns          | [Column](#column)[]               | `[]`           | 页脚中的列数据               |
| maxColumnsPerRow | number                            | -              | 每行的最大列数               |
| prefixCls        | string                            | `rc-footer`    | CSS 类前缀                   |
| style            | React.CSSProperties               | -              | 页脚的样式属性               |
| theme            | `light` \| `dark`                 | `dark`         | 页脚预设主题                 |

### Column

| 参数      | 类型                        | 默认值 | 说明               |
| --------- | --------------------------- | ------ | ------------------ |
| className | string                      | `''`   | 列的附加 className |
| icon      | ReactNode                   | -      | 列标题前的图标     |
| items     | [ColumnItem](#columnitem)[] | `[]`   | 每列中的条目数据   |
| style     | React.CSSProperties         | -      | 列的样式属性       |
| title     | ReactNode                   | -      | 列标题             |

### ColumnItem

| 参数          | 类型                | 默认值 | 说明                   |
| ------------- | ------------------- | ------ | ---------------------- |
| LinkComponent | React.ElementType   | `a`    | 用于渲染条目的链接元素 |
| className     | string              | `''`   | 项目的附加类别名称     |
| description   | ReactNode           | -      | 标题后的描述           |
| icon          | ReactNode           | -      | 条目标题前的图标       |
| openExternal  | boolean             | false  | 在新选项卡中打开链接   |
| style         | React.CSSProperties | -      | 项目的样式属性         |
| title         | ReactNode           | -      | 条目标题               |
| url           | string              | -      | 项目标题的链接 URL     |

## 本地开发

```bash
ut install
npm start
```

dumi 站点默认运行在 `http://localhost:8000`。

常用检查：

```bash
npm run lint
npm run tsc
npm test
npm run build
npm run compile
```

## 发布

```bash
npm run prepublishOnly
```

包构建完成后，发布流程由 `@rc-component/np` 通过 `rc-np` 命令处理。

## 许可证

@rc-component/footer 基于 [MIT](./LICENSE) 许可证发布。
