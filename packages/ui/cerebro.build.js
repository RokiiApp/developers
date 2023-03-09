module.exports = {
  entryPoints: ['./src/index.ts'],
  platform: 'node',
  format: 'esm',
  external: ['electron'],
  minify: true
};
