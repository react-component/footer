<div align="center">
  <h1>@rc-component/footer</h1>
  <p><sub>Part of the Ant Design ecosystem.</sub></p>
  <img alt="Ant Design" height="32" src="https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c24-40ff-a91d-2b83497170f6.svg" />
  <p>Footer primitives for React, maintained in the Ant Design ecosystem.</p>
</div>


<div align="center">

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![build status][github-actions-image]][github-actions-url] [![Codecov][codecov-image]][codecov-url] [![bundle size][bundlephobia-image]][bundlephobia-url] [![dumi][dumi-image]][dumi-url]

</div>

## Highlights

- Responsive footer layout with columns, links, custom icons, and a bottom area.
- Light and dark themes with custom background and column layout controls.
- Used by Ant Design sites and ecosystem pages.

## Install

```bash
npm install @rc-component/footer
```

`rc-footer` is the legacy package name. New releases should use the scoped `@rc-component/footer` package.

## Usage

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

## Examples

- Local docs: run `npm start` and open the printed dumi URL.
- Pull request previews are published by Vercel and Surge.

## API

### Footer

| Property | Type | Default | Description |
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

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| className | string | `''` | Additional class name of column |
| icon | ReactNode | - | Icon before the column title |
| items | [ColumnItem](#columnitem)[] | `[]` | Items data inside each column |
| style | React.CSSProperties | - | Style properties of column |
| title | ReactNode | - | Title of column |

### ColumnItem

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| LinkComponent | React.ElementType | `a` | Link element used to render the item |
| className | string | `''` | Additional class name of item |
| description | ReactNode | - | Description displayed after title |
| icon | ReactNode | - | Icon before item title |
| openExternal | boolean | false | Open link in a new tab |
| style | React.CSSProperties | - | Style properties of item |
| title | ReactNode | - | Title of item |
| url | string | - | Link URL of item title |

## Development

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

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

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
