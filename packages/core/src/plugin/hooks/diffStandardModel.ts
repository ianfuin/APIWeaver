import { diff } from 'json-diff';
import type { PluginHooks } from '../../plugin';

export const diffStandardModel: PluginHooks['diffStandardModel'] = (
  oldStandardModel,
  newStandardModel,
) => {
  // TODO
  return diff(oldStandardModel, newStandardModel);
};
