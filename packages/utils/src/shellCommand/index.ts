import { Command, SpawnOptions } from '@tauri-apps/api/shell';

type ShellListeners = {
  onClose?: (code: number) => void;
  onError?: (error: unknown) => void;
  onStdout?: (data: string) => void;
  onStderr?: (data: string) => void;
}

type CommandOptions = {
  listeners?: ShellListeners;
  spawnOptions?: SpawnOptions;
}

export const shellCommand = (cmd: string, options?: CommandOptions) => {
  const command = new Command(cmd, [], options?.spawnOptions);

  if (options?.listeners) {
    const { onClose, onError, onStderr, onStdout } = options.listeners;
    if (onClose) {
      command.on('close', onClose);
    }

    if (onError) {
      command.on('error', onError);
    }

    if (onStdout) {
      command.stdout.on('data', onStdout);
    }

    if (onStderr) {
      command.stderr.on('data', onStderr);
    }
  }

  return command.spawn();
};
