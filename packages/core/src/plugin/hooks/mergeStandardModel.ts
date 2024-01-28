import { merge, mergeWith, groupBy, isArray } from 'lodash/fp';

import type { PluginHooks } from '../../plugin';
import type {
  StandardModel,
  StandardModelApi,
} from '../../types/standardModel';

export const mergeStandardModel: PluginHooks['mergeStandardModel'] = (
  standardModels,
) => {
  if (standardModels.length === 1) return standardModels[0];
  const mergedStandardModel: StandardModel = { apis: [], definitions: {} };

  standardModels.forEach((sd) => {
    mergedStandardModel.apis = mergedStandardModel.apis.concat(sd.apis);

    const apis = groupBy('standaloneName', mergedStandardModel.apis);

    mergedStandardModel.apis = Object.values(apis).map((val) => {
      return val.reduce((prev, current) => {
        return mergeWith(
          (objValue, srcValue) => {
            if (isArray(objValue)) {
              return objValue.concat(srcValue);
            }
          },
          prev,
          current,
        );
      }, {} as StandardModelApi);
    });

    mergedStandardModel.definitions = merge(
      mergedStandardModel.definitions,
      sd.definitions,
    );
  });

  return mergedStandardModel;
};
