import {
  type PluginHooks,
  type StandardModel,
  definePlugin,
} from '@apiweaver/core';
import type { OpenAPIV2_JSON } from './openapi2/type';
import type { OpenAPIV3_JSON } from './openapi3/type';
import type { ParseOptions } from './type';

import { openapi2ToStandardModel } from './openapi2/transform';
import { openapi3ToStandardModel } from './openapi3/transform';

function isV2(
  object: OpenAPIV2_JSON | OpenAPIV3_JSON,
): object is OpenAPIV2_JSON {
  return typeof (<OpenAPIV2_JSON>object).swagger === 'string';
}

const openapiToStandardModel = (parseOptions?: ParseOptions) => {
  const fileToStandardModel: PluginHooks['fileToStandardModel'] = (file) => {
    let standardModel: StandardModel;

    const openapiJSON = JSON.parse(file);

    if (isV2(openapiJSON)) {
      standardModel = openapi2ToStandardModel(openapiJSON, parseOptions);
    } else {
      standardModel = openapi3ToStandardModel(openapiJSON, parseOptions);
    }

    return standardModel;
  };

  return definePlugin({
    name: 'openapiToStandardModel',
    fileToStandardModel,
  });
};

export { openapiToStandardModel };
