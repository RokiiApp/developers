import path from 'node:path';
import fs from 'node:fs';
import url from 'node:url';
import * as esbuild from 'esbuild';
import cssModulesPlugin from 'esbuild-css-modules-plugin';

const pkgJson = await import(url.fileURLToPath('package.json'));

const appName = 'RoKii';
const pluginName = pkgJson.name;

const windowsPath = path.join(process.env.APPDATA!, appName, 'plugins', 'node_modules', pluginName);

const symlinkPath = windowsPath;

function removeSymlink () {
  console.log('🚮 Removing symlink');
  fs.unlinkSync(symlinkPath);
}

console.log('⌛ Starting plugin development mode...');
if (fs.existsSync(symlinkPath)) {
  console.log('🔎 Symlink already exist');
  removeSymlink();
}

console.log('✅ Create symlink');
fs.symlinkSync(
  path.resolve(),
  symlinkPath,
  process.platform === 'win32' ? 'junction' : 'file'
);

// Handle ctrl+c to remove symlink to plugin
process.on('SIGHUP', removeSymlink);
process.on('SIGINT', removeSymlink);
process.on('SIGTERM', removeSymlink);
process.on('SIGBREAK', removeSymlink);

console.log('✅ Starting esbuild...');

const configFile = url.pathToFileURL('rokii.build.js');
let config = {};

if (fs.existsSync(configFile)) {
  config = await import(configFile.toString()).then(m => m.config);
  console.log('✅ Loaded configuration file from: ', configFile.toString());
}

const esbuildCtx = await esbuild
  .context({
    logLevel: 'info',
    entryPoints: ['./src/index.tsx'],
    bundle: true,
    minify: false,
    format: 'esm',
    target: 'es2020',
    loader: { '.js': 'jsx', '.png': 'dataurl', '.svg': 'text' },
    outfile: './dist/index.js',
    plugins: [cssModulesPlugin()],
    ...config
  });

esbuildCtx
  .watch()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
