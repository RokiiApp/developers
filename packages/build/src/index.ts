#!/usr/bin/env node

const scripts = {
  build: () => import('./scripts/build.js'),
  start: () => import('./scripts/dev.js'), // both start and dev are the same
  dev: () => import('./scripts/dev.js'),
  clear: () => import('./scripts/clear.js'),
  default: () => {
    console.error('Invalid-Command - Usage: npm run (build|clear|dev|start)');
    process.exit(1);
  }
};

const scriptName = process.argv[2];

if (!(scriptName in scripts)) {
  console.error('Invalid-Command - Usage: npm run (build|clear|dev|start)');
  process.exit(1);
}

const script = scripts[scriptName as keyof typeof scripts] || scripts.default;

script();
