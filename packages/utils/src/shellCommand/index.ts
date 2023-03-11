import { exec } from 'node:child_process';

/**
 * Promise-wrapper for shell-script execution
 */
export const shellCommand = (cmd: string) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout) => error ? reject(error) : resolve(stdout));
  });
};
