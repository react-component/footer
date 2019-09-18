import '../assets/index.less';
import React from 'react';
import Footer from '../src/index';

export default function App() {
  return (
    <div>
      <Footer
        columns={[
          {
            title: '相关资源',
            items: [],
          },
          {
            title: '社区',
            items: [],
          },
          {
            title: '帮助',
            items: [],
          },
          {
            title: '更多产品',
            items: [],
          },
        ]}
        bottom="Made with ❤ by AFX"
      />
    </div>
  );
}
