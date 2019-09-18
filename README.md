# rc-footer

---

Footer component used in [ant.design](https://ant.design).

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![david deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-footer.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-footer
[travis-image]: https://img.shields.io/travis/react-component/footer.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/footer
[coveralls-image]: https://img.shields.io/coveralls/react-component/footer.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/footer?branch=master
[david-image]: https://david-dm.org/react-component/footer/status.svg?style=flat-square
[david-url]: https://david-dm.org/react-component/footer
[download-image]: https://img.shields.io/npm/dm/rc-footer.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-footer

## Install

[![rc-footer](https://nodei.co/npm/rc-footer.png)](https://npmjs.org/package/rc-footer)

## Usage

```js
import Footer from 'rc-footer';
import { render } from 'react-dom';

render(<Footer />, mountNode);
```

## API

| Property       | Type                     | Default   | Description                                              |
| -------------- | ------------------------ | --------- | -------------------------------------------------------- |
| prefixCls      | String                   | rc-footer |                                                          |
| className      | String                   | ''        | additional class name of root node                       |
| checked        | boolean                  | false     | whether footer is checked                                |
| defaultChecked | boolean                  | false     | whether footer is checked on init                        |
| onChange       | Function(checked, event) |           | called when footer is checked or unchecked               |
| tabIndex       | number                   |           | tab-index of footer node                                 |
| onClick        | Function(checked, event) |           | called when footer is clicked                            |
| autoFocus      | boolean                  |           | get focus when mounts                                    |
| disabled       | boolean                  | false     | whether footer is disabled                               |
| loadingIcon    | React.ReactNode          |           | specific the extra node. generally used in loading icon. |

## Development

```
npm install
npm start
```

Online demo: http://react-component.github.io/footer/examples/

## License

rc-footer is released under the MIT license.
