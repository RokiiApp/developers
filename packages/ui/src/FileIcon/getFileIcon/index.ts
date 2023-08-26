import { invoke } from '@tauri-apps/api/tauri';
import memoize from 'just-memoize';

/**
 * Get system icon for file
 * @param path File path
 */

const getFileIcon = async (path: string) => {
  const nativeIcon = await invoke<string>('get_file_icon', { path });
  return nativeIcon;
};

export default memoize(getFileIcon);
