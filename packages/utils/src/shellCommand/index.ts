import { exec, ExecOptions } from 'node:child_process';

/**
 * Promise-wrapper for shell-script execution
 */
export const shellCommand = (cmd: string, options: ExecOptions = {}) => {
  return new Promise((resolve, reject) => {
    exec(cmd, options, (error, stdout) => error ? reject(error) : resolve(stdout));
  });
};
