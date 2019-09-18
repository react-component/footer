export default {
  entry: ['src/index.js'],
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  doc: { base: '/footer' },
  preCommit: {
    eslint: true,
    prettier: true,
  },
};
