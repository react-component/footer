<div align="center">
  <h1>@rc-component/footer</h1>
  <p><sub>Ant Design 生态的一部分。</sub></p>
  <img alt="Ant Design" height="32" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <p>🦶 React 页脚布局基础组件，服务于 Ant Design 生态页面。</p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


<div align="center">

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![build status][github-actions-image]][github-actions-url] [![Codecov][codecov-image]][codecov-url] [![bundle size][bundlephobia-image]][bundlephobia-url] [![dumi][dumi-image]][dumi-url]

</div>

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

- 本地文档：运行 `npm start`，并打开终端输出的 dumi 地址。
- Pull Request 预览由 Vercel 和 Surge 发布。

## API

### Footer

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| backgroundColor | string | `#000` | Background color of footer |
| bottom | ReactNode | - | Extra bottom area beneath footer columns |
| className | string | `''` | Additional class name of footer |
| columnLayout | `space-around` \| `space-between` | `space-around` | `justify-content` value of columns element |
| columns | [Column](#column)[] | `[]` | Columns data inside footer |
| maxColumnsPerRow | number | - | Max count of columns for each row |
| prefixCls | string | `rc-footer` | CSS class prefix |
| style | React.CSSProperties | - | Style properties of footer |
| theme | `light` \| `dark` | `dark` | Preset theme of footer |

### Column

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | `''` | Additional class name of column |
| icon | ReactNode | - | Icon before the column title |
| items | [ColumnItem](#columnitem)[] | `[]` | Items data inside each column |
| style | React.CSSProperties | - | Style properties of column |
| title | ReactNode | - | Title of column |

### ColumnItem

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| LinkComponent | React.ElementType | `a` | Link element used to render the item |
| className | string | `''` | Additional class name of item |
| description | ReactNode | - | Description displayed after title |
| icon | ReactNode | - | Icon before item title |
| openExternal | boolean | false | Open link in a new tab |
| style | React.CSSProperties | - | Style properties of item |
| title | ReactNode | - | Title of item |
| url | string | - | Link URL of item title |

## 本地开发

```bash
npm install
npm start
```

Useful checks:

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

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## 许可证

@rc-component/footer is released under the [MIT](./LICENSE.md) license.

[npm-image]: https://img.shields.io/npm/v/@rc-component/footer.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@rc-component/footer
[github-actions-image]: https://github.com/react-component/footer/actions/workflows/main.yml/badge.svg
[github-actions-url]: https://github.com/react-component/footer/actions/workflows/main.yml
[codecov-image]: https://img.shields.io/codecov/c/github/react-component/footer/main.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/react-component/footer/
[download-image]: https://img.shields.io/npm/dm/@rc-component/footer.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/@rc-component/footer
[bundlephobia-url]: https://bundlephobia.com/package/@rc-component/footer
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@rc-component/footer
[dumi-url]: https://github.com/umijs/dumi
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square
