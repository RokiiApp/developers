import esbuild from 'esbuild';
import url from 'node:url';
import fs from 'node:fs';

const configFile = url.pathToFileURL('rokii.build.js');
let config = {};

if (fs.existsSync(configFile)) {
  config = await import(configFile.toString()).then(m => m.config);
  console.log('✅ Loaded configuration file from: ', configFile.toString());
}

console.log('⌛ Creating bundle...');
esbuild
  .build({
    logLevel: 'info',
    entryPoints: ['./src/index.tsx'],
    bundle: true,
    minify: true,
    format: 'esm',
    target: 'es2022',
    loader: { '.js': 'jsx', '.png': 'dataurl', '.svg': 'text' },
    outfile: 'dist/index.js',
    ...config
  })
  .then(() => {
    console.log('✅ Build finished');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
