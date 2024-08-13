import { defineConfig } from 'dumi';

const basePath = process.env.GH_PAGES ? '/footer/' : '/';
const publicPath = process.env.GH_PAGES ? '/footer/' : '/';

export default defineConfig({
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Footer',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: '.doc',
  exportStatic: {},
  base: basePath,
  publicPath,
});
