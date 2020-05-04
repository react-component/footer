# rc-footer 🐾

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![build status][circleci-image]][circleci-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies][david-image]](david-url)
[![DevDependencies][david-dev-image]][david-dev-url]
[![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: http://img.shields.io/npm/v/rc-footer.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-footer
[circleci-image]: https://img.shields.io/circleci/build/github/react-component/footer.svg?style=flat-square
[circleci-url]: https://circleci.com/gh/react-component/footer
[david-url]: https://david-dm.org/react-component/footer
[david-image]: https://img.shields.io/david/react-component/footer.svg?style=flat-square
[david-dev-url]: https://david-dm.org/react-component/footer?type=dev
[david-dev-image]: https://img.shields.io/david/react-component/footer.svg?style=flat-square&type=dev
[coveralls-image]: https://img.shields.io/coveralls/react-component/footer.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/footer?branch=maste
[download-image]: https://img.shields.io/npm/dm/rc-footer.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-footer
[bundlephobia-url]: https://bundlephobia.com/result?p=rc-footer
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/rc-footer


Pretty Footer react component used in [ant.design](https://ant.design) and [antv.vision](https://antv.vision).

![](https://gw.alipayobjects.com/zos/antfincdn/z4ie3X8x6u/1cb23945-ec67-45a3-b521-f8da62e12255.png)

## Live Demo

https://react-component.github.io/footer/

## Install

[![rc-footer](https://nodei.co/npm/rc-footer.png)](https://npmjs.org/package/rc-footer)

## Usage

```js
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { render } from 'react-dom';

render(
  <Footer
    columns={[
      {
        icon: (
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        ),
        title: '语雀',
        url: 'https://yuque.com',
        description: '知识创作与分享工具',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ by AFX"
  />,
  mountNode,
);
```

## API

| Property         | Type                              | Default        | Description                              |
| ---------------- | --------------------------------- | -------------- | ---------------------------------------- |
| prefixCls        | string                            | rc-footer      |                                          |
| className        | string                            | ''             | additional class name of footer          |
| style            | React.CSSProperties               |                | style properties of footer               |
| columns          | [Column](#Column) Array           | []             | columns data inside footer               |
| bottom           | ReactNode                         |                | extra bottom area beneath footer columns |
| theme            | 'light' \| 'dark'                 | 'dark'         | preset theme of footer                   |
| backgroundColor  | string                            | '#000'         | background color of footer               |
| columnLayout     | 'space-around' or 'space-between' | 'space-around' | justify-content value of columns element |
| maxColumnsPerRow | number                            | -              | max count of columns for each row        |

### Column

| Property  | Type                       | Default | Description                     |
| --------- | -------------------------- | ------- | ------------------------------- |
| icon      | ReactNode                  |         | icon that before column title   |
| title     | ReactNode                  |         | title of column                 |
| items     | [Item](#Column-Item) Array | []      | items data inside each column   |
| className | string                     | ''      | additional class name of footer |
| style     | React.CSSProperties        |         | style properties of footer      |

### Column Item

| Property      | Type                | Default | Description                                             |
| ------------- | ------------------- | ------- | ------------------------------------------------------- |
| icon          | ReactNode           |         | icon that before column title                           |
| title         | ReactNode           |         | title of column                                         |
| description   | ReactNode           |         | description of column, come after title                 |
| url           | string              |         | link url of item title                                  |
| openExternal  | boolean             | false   | link target would be `_blank` if `openExternal` is ture |
| className     | string              | ''      | additional class name of footer                         |
| style         | React.CSSProperties |         | style properties of footer                              |
| LinkComponent | React.ReactType     | 'a'     | the link element to render item                         |

## Development

```
npm install
npm start
```

## License

rc-footer is released under the MIT license.
