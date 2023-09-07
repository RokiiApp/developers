import { PluginModule } from '@rokii/types';

export const fn: PluginModule['fn'] = ({ term, display }) => {
  display({
    title: 'Example Plugin',
    subtitle: term,
    icon: 'https://avatars.githubusercontent.com/u/0',
    getPreview: () => <div>Example Plugin Preview</div>,
    onSelect: () => {
      console.log('Plugin selected with term: ', term);
    }
  });
};
