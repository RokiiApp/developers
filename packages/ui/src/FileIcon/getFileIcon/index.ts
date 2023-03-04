import { app } from '@electron/remote';
import { memoize } from 'cerebro-tools';

/**
 * Get system icon for file
 *
 * @param path File path
 */

const getFileIcon = async (path: string) => {
  const nativeIcon = await app.getFileIcon(path);
  return nativeIcon.toDataURL();
};

export default memoize(getFileIcon);
