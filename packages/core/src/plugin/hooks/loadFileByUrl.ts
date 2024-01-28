import axios from 'axios';
import type { PluginHooks } from '../../plugin';

export const loadFileByUrl: PluginHooks['loadFileByUrl'] = (url) => {
  return axios.get(url);
};
