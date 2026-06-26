import path from 'path';
import { defineConfig } from 'dumi';

const basePath = process.env.GH_PAGES ? '/footer/' : '/';
const publicPath = process.env.GH_PAGES ? '/footer/' : '/';

export default defineConfig({
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Footer',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: 'docs-dist',
  alias: {
    '@rc-component/footer/assets/index.css': path.resolve(
      __dirname,
      'assets/index.less',
    ),
    'rc-footer/assets/index.css': path.resolve(__dirname, 'assets/index.less'),
    '@rc-component/footer$': path.resolve(__dirname, 'src'),
    'rc-footer$': path.resolve(__dirname, 'src'),
  },
  exportStatic: {},
  base: basePath,
  publicPath,
});
